import fs from "fs";
import path from "path";
import yaml from "js-yaml";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  type: string;
  pin?: boolean;
  tags: string[];
};

type Post = {
  metadata: Metadata;
  slug: string;
  content: string;
};

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);

  if (!match) {
    // const defaultMetadata: Metadata = {
    //   title: "",
    //   publishedAt: "",
    //   summary: "",
    //   type: "",
    //   image: "",
    //   pin: false,
    //   tags: [],
    // };
    // return { metadata: defaultMetadata, content: fileContent.trim() };

    return null;
  }

  const frontMatterBlock = match[1];
  const content = fileContent.replace(frontmatterRegex, "").trim();

  // 解析 YAML，使用 JSON_SCHEMA 保证日期保持为字符串
  const loadedMetadata = yaml.load(frontMatterBlock, {
    schema: yaml.JSON_SCHEMA,
  });
  const metadata = (loadedMetadata || {}) as Partial<Metadata>;

  // Normalize tags field to always be an array of strings
  const tagsField: unknown = metadata.tags;
  if (typeof tagsField === "string") {
    metadata.tags = tagsField.split(",").map((tag) => tag.trim());
  } else if (Array.isArray(tagsField)) {
    metadata.tags = tagsField.map((tag) => String(tag).trim());
  } else {
    metadata.tags = [];
  }
  // Ensure required fields have default values to avoid undefined
  metadata.title = metadata.title ?? "";
  metadata.publishedAt = metadata.publishedAt ?? "";
  metadata.summary = metadata.summary ?? "";
  metadata.type = metadata.type ?? "";
  // For optional fields, assign default values if undefined
  metadata.image = metadata.image ?? "";
  metadata.pin = metadata.pin ?? false;

  console.log("Parsed metadata:", metadata);

  const completeMetadata: Metadata = {
    title: metadata.title ?? "",
    publishedAt: metadata.publishedAt ?? "",
    summary: metadata.summary ?? "",
    type: metadata.type ?? "",
    image: metadata.image ?? "",
    pin: metadata.pin ?? false,
    tags: metadata.tags ?? [],
  };

  return { metadata: completeMetadata, content };
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
      if (path.extname(file) === ".mdx" || path.extname(file) === ".md") {
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
    const parsed = readMDXFile(file);
    if (!parsed || !parsed.metadata) return null;

    const { metadata, content } = parsed;
    const slug = path.basename(file, path.extname(file));
    const postFolder = path
      .relative(dir, path.dirname(file))
      .replace(/\\/g, "/"); // 获取相对路径

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
  const mdxData = getMDXData(path.join(process.cwd(), "public", "posts"));
  return mdxData.filter((post) => post !== null);
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
  return posts.filter(
    (post) => post.metadata && post.metadata.tags?.includes(tag)
  );
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
  return posts.filter(
    (post) =>
      post.metadata && post.metadata.tags?.some((tag) => tags.includes(tag))
  );
}
