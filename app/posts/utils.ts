import fs from "fs";
import path from "path";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  type: string;
  pin?: boolean;
  tags: string[];
};

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");

  const metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes

    switch (key.trim()) {
      case "title":
        metadata.title = value;
        break;
      case "publishedAt":
        metadata.publishedAt = value;
        break;
      case "summary":
        metadata.summary = value;
      case "type":
        metadata.type = value;
        break;
      case "image":
        metadata.image = value;
        break;
      case "pin":
        // Convert "true" or "false" to a boolean
        metadata.pin = value.toLowerCase() === "true";
        break;
      case "tags":
        // Split tags by comma and trim them
        metadata.tags = value
          ? value.split(",").map((item) => item.trim())
          : [];
        break;
      default:
        break;
    }
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string): string[] {
  let mdxFiles: string[] = [];

  // Read all files and folders in the directory
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);

    // Check if it's a directory
    if (fs.statSync(filePath).isDirectory()) {
      // Recursively find .mdx files in subdirectories
      mdxFiles = mdxFiles.concat(getMDXFiles(filePath));
    } else {
      // Filter to add only .mdx files
      if (path.extname(file) === ".mdx") {
        mdxFiles.push(filePath);
      }
    }
  });

  return mdxFiles;
}

function readMDXFile(filePath) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir) {
  const mdxFiles = getMDXFiles(dir);

  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(file);
    const slug = path.basename(file, path.extname(file));
    const postFolder = path.dirname(file).split(path.sep).pop(); // 获取当前文章的文件夹名称

    // **🔹 替换 MDX 内的相对路径图片**
    const fixedContent = content.replace(
      /!\[.*?\]\(([^)]+)\)/g,
      (match, src) => {
        if (!src.startsWith("http") && !src.startsWith("/")) {
          return match.replace(src, `/posts/${postFolder}/${src}`);
        }
        return match;
      }
    );

    return {
      metadata,
      slug,
      content: fixedContent, // 返回修正后的内容
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "public", "posts"));
}

export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}

export function getBlogPostBySlug(slug: string) {
  const posts = getBlogPosts();
  return posts.find((post) => post.slug === slug);
}

export function getBlogPostsByTag(tag: string) {
  const posts = getBlogPosts();
  console.log(posts);
  return posts.filter((post) => post.metadata.tags?.includes(tag));
}

export function getPinnedBlogPosts() {
  const posts = getBlogPosts();
  return posts.filter((post) => post.metadata.pin);
}

export function getRecentBlogPosts(limit: number) {
  const posts = getBlogPosts();
  return posts.slice(0, limit);
}

export function getBlogPostsByTags(tags: string[]) {
  const posts = getBlogPosts();
  return posts.filter((post) =>
    post.metadata.tags?.some((tag) => tags.includes(tag))
  );
}
