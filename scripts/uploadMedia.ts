import fs from "fs/promises";
import path from "path";
import crypto from "crypto"; // 可选，如果以后需要用哈希做键
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
]);

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
 * 上传文件到 Cloudinary，并返回一个包含 secure_url 和 public_id 的对象
 */
async function uploadFile(
  filePath: string
): Promise<{ url: string; public_id: string }> {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto", // 自动根据文件类型处理
    });
    return { url: result.secure_url, public_id: result.public_id };
  } catch (error) {
    console.error(`Error uploading ${filePath}:`, error);
    throw error;
  }
}

/**
 * 尝试读取已存在的映射文件，如果不存在则返回空对象
 */
async function loadExistingMapping(
  mappingPath: string
): Promise<Record<string, { url: string; public_id: string }>> {
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
 * 删除 Cloudinary 上的资源，resource_type 为 auto
 */
async function deleteCloudinaryResource(public_id: string): Promise<void> {
  try {
    await cloudinary.uploader.destroy(public_id, { resource_type: "auto" });
    console.log(`Deleted Cloudinary resource: ${public_id}`);
  } catch (error) {
    console.error(`Error deleting resource ${public_id}:`, error);
  }
}

/**
 * 主函数：扫描目录、上传文件、更新映射、删除不再存在的文件
 */
async function main() {
  const targetDir = process.argv[2];
  if (!targetDir) {
    console.error("Usage: ts-node uploadMedia.ts <target-directory>");
    process.exit(1);
  }

  // 定义映射文件路径（存放在项目根目录）
  const mappingPath = path.join(process.cwd(), "media-mapping.json");
  // 加载已有映射，格式： { [filePath]: { url, public_id } }
  const existingMapping = await loadExistingMapping(mappingPath);

  // 扫描目录下所有媒体文件
  const files = await scanFiles(targetDir);
  console.log(`Found ${files.length} media files.`);

  // 新的映射记录（以文件路径为键）
  const mapping: Record<string, { url: string; public_id: string }> = {
    ...existingMapping,
  };

  // 遍历扫描到的文件
  for (const file of files) {
    if (mapping[file]) {
      console.log(`Skipping ${file} (already uploaded).`);
      continue;
    }
    console.log(`Uploading ${file}...`);
    try {
      const { url, public_id } = await uploadFile(file);
      mapping[file] = { url, public_id };
      console.log(`Uploaded: ${file} -> ${url}`);
    } catch (error) {
      console.error(`Failed to upload ${file}`);
    }
  }

  // 找出在现有映射中但此次扫描未碰到的文件，即“失效文件”
  const currentFilesSet = new Set(files);
  for (const storedFile in mapping) {
    if (!currentFilesSet.has(storedFile)) {
      console.log(
        `File ${storedFile} no longer exists. Deleting its Cloudinary resource...`
      );
      // 删除 Cloudinary 上的资源
      await deleteCloudinaryResource(mapping[storedFile].public_id);
      // 删除映射中的记录
      delete mapping[storedFile];
    }
  }

  // 写回更新后的映射
  await fs.writeFile(mappingPath, JSON.stringify(mapping, null, 2), "utf-8");
  console.log(`Media mapping updated and saved to ${mappingPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
