import fs from "fs";
import path from "path";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  type: string;
  pin?: boolean;
  tags?: string[];
};

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<Metadata> = {};

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

  //console.log(mdxFiles);

  return mdxFiles;
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir);
  //console.log(mdxFiles);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(file);
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "public", "posts"));
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

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

  let fullDate = targetDate.toLocaleString("en-us", {
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
