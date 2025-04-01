import fs from "fs/promises";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

// 配置 Cloudinary（确保环境变量已设置）
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// 支持上传的文件扩展名（不区分大小写）
const allowedExtensions = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".mp4",
  ".mp3",
  ".wav",
  ".ogg",
  ".mov",
]);

/**
 * 根据文件扩展名确定 resource_type。
 * 对于图片返回 "image"，对于视频和音频返回 "video"，其他文件返回 "raw"。
 */
function getResourceType(filePath: string): "image" | "video" | "raw" {
  const ext = path.extname(filePath).toLowerCase();
  if ([".png", ".jpg", ".jpeg", ".gif"].includes(ext)) {
    return "image";
  }
  if ([".mp4", ".mov", ".mp3", ".wav", ".ogg"].includes(ext)) {
    return "video";
  }
  return "raw";
}

/**
 * 递归扫描目录，返回所有符合扩展名的文件全路径
 */
async function scanFiles(dir: string): Promise<string[]> {
  const results: string[] = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const subFiles = await scanFiles(fullPath);
      results.push(...subFiles);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (allowedExtensions.has(ext)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

/**
 * 上传文件到 Cloudinary，并返回一个包含 secure_url、public_id、resource_type、size 和 modifiedTime 的对象。
 * 对于大于 100MB 的文件使用 upload_large 进行分块上传。
 */
async function uploadFile(filePath: string): Promise<{
  url: string;
  public_id: string;
  resource_type: string;
  size: number;
  modifiedTime: string;
}> {
  try {
    const stats = await fs.stat(filePath);
    const resourceType = getResourceType(filePath);
    const fileSize = stats.size;
    const modifiedTime = stats.mtime.toISOString();
    let result;
    if (fileSize > 100 * 1024 * 1024) {
      // 大于 100MB 使用分块上传
      console.log(
        `文件 ${filePath} 大小为 ${fileSize} 字节，使用 upload_large 进行分块上传...`
      );
      result = await cloudinary.uploader.upload_large(filePath, {
        resource_type: resourceType,
      });
    } else {
      result = await cloudinary.uploader.upload(filePath, {
        resource_type: resourceType,
      });
    }
    return {
      url: result.secure_url,
      public_id: result.public_id,
      resource_type: resourceType,
      size: fileSize,
      modifiedTime: modifiedTime,
    };
  } catch (error) {
    console.error(`上传 ${filePath} 时出错:`, error);
    throw error;
  }
}

/**
 * 尝试读取已存在的映射文件，如果不存在则返回空对象。
 * 映射格式： { [filePath]: { url, public_id, resource_type, size, modifiedTime } }
 */
async function loadExistingMapping(mappingPath: string): Promise<
  Record<
    string,
    {
      url: string;
      public_id: string;
      resource_type: string;
      size: number;
      modifiedTime: string;
    }
  >
> {
  try {
    const data = await fs.readFile(mappingPath, "utf-8");
    return JSON.parse(data);
  } catch (error: any) {
    if (error.code === "ENOENT") {
      return {};
    } else {
      throw error;
    }
  }
}

/**
 * 删除 Cloudinary 上的资源。
 * 根据提供的 public_id 和 resource_type 进行删除操作。
 */
async function deleteCloudinaryResource(
  public_id: string,
  resource_type: string
): Promise<void> {
  try {
    await cloudinary.uploader.destroy(public_id, { resource_type });
    console.log(`已删除 Cloudinary 资源: ${public_id}`);
  } catch (error) {
    console.error(`删除资源 ${public_id} 时出错:`, error);
  }
}

/**
 * 主函数：扫描目录、上传文件、更新映射、删除不再存在的文件。
 */
async function main() {
  const targetDir = process.argv[2];
  if (!targetDir) {
    console.error("Usage: ts-node uploadMedia.ts <target-directory>");
    process.exit(1);
  }

  // 定义映射文件路径（存放在项目根目录）
  const mappingPath = path.join(process.cwd(), "media-mapping.json");
  // 加载已有映射，格式： { [filePath]: { url, public_id, resource_type, size, modifiedTime } }
  const existingMapping = await loadExistingMapping(mappingPath);

  // 扫描目录下所有媒体文件
  const files = await scanFiles(targetDir);
  console.log(`发现 ${files.length} 个媒体文件。`);

  const totalSize = existingMapping
    ? Object.values(existingMapping).reduce((acc, { size }) => acc + size, 0)
    : 0;
  console.log(`已上传文件总大小: ${(totalSize / 1024 / 1024).toFixed(1)} MB。`);

  // 新的映射记录（以文件路径为键）
  const mapping: Record<
    string,
    {
      url: string;
      public_id: string;
      resource_type: string;
      size: number;
      modifiedTime: string;
    }
  > = {
    ...existingMapping,
  };

  // 遍历扫描到的文件进行上传操作
  for (const file of files) {
    // 如果映射中已存在记录，并且文件大小和修改时间均未变化，则跳过上传
    if (mapping[file]) {
      const stats = await fs.stat(file);
      const currentSize = stats.size;
      const currentModifiedTime = stats.mtime.toISOString();
      if (
        mapping[file].size === currentSize &&
        mapping[file].modifiedTime === currentModifiedTime
      ) {
        console.log(`跳过 ${file}（未变化，已上传）。`);
        continue;
      }
    }
    console.log(`正在上传 ${file}...`);
    try {
      const { url, public_id, resource_type, size, modifiedTime } =
        await uploadFile(file);
      mapping[file] = { url, public_id, resource_type, size, modifiedTime };
      console.log(`上传成功: ${file} -> ${url}`);
    } catch (error) {
      console.error(`上传 ${file} 失败`);
    }
  }

  // 找出在现有映射中但此次扫描未碰到的文件，即“失效文件”
  const currentFilesSet = new Set(files);
  for (const storedFile in mapping) {
    if (!currentFilesSet.has(storedFile)) {
      console.log(`文件 ${storedFile} 不再存在。正在删除其 Cloudinary 资源...`);
      await deleteCloudinaryResource(
        mapping[storedFile].public_id,
        mapping[storedFile].resource_type
      );
      delete mapping[storedFile];
    }
  }

  // 写回更新后的映射文件
  await fs.writeFile(mappingPath, JSON.stringify(mapping, null, 2), "utf-8");
  console.log(`媒体映射已更新并保存至 ${mappingPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
