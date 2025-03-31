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
 * 上传文件到 Cloudinary，并返回上传后的 URL
 */
async function uploadFile(filePath: string): Promise<string> {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto", // 自动根据文件类型处理
    });
    return result.secure_url;
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
): Promise<Record<string, string>> {
  try {
    const data = await fs.readFile(mappingPath, "utf-8");
    return JSON.parse(data);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.code === "ENOENT") {
      return {};
    } else {
      throw error;
    }
  }
}

/**
 * 主函数：扫描目录、上传文件、生成映射 JSON
 */
async function main() {
  const targetDir = process.argv[2];
  if (!targetDir) {
    console.error("Usage: ts-node uploadMedia.ts <target-directory>");
    process.exit(1);
  }

  // 定义映射文件路径
  const mappingPath = path.join(process.cwd(), "media-mapping.json");
  // 尝试加载已存在的映射
  const existingMapping = await loadExistingMapping(mappingPath);

  // 扫描目录下所有媒体文件
  const files = await scanFiles(targetDir);
  console.log(`Found ${files.length} media files.`);

  // 新的映射记录（与已存在的映射合并）
  const mapping: Record<string, string> = { ...existingMapping };

  // 遍历文件并上传（如果映射中已有则跳过）
  for (const file of files) {
    if (mapping[file]) {
      console.log(`Skipping ${file} (already uploaded).`);
      continue;
    }
    console.log(`Uploading ${file}...`);
    try {
      const url = await uploadFile(file);
      mapping[file] = url;
      console.log(`Uploaded: ${file} -> ${url}`);
    } catch (error) {
      console.error(`Failed to upload ${file}`);
    }
  }

  // 将映射写入 JSON 文件
  await fs.writeFile(mappingPath, JSON.stringify(mapping, null, 2), "utf-8");
  console.log(`Media mapping saved to ${mappingPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
