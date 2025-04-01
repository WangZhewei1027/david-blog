/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/posts.ts
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeKatex from "rehype-katex";
import rehypeUnwrapImages from "rehype-unwrap-images";
import remarkMath from "remark-math";
import { components } from "@/components/mdx";
import type { MDXComponents } from "mdx/types"; // 来自 @mdx-js/react 的类型定义
import mediaMapping from "../../media-mapping.json"; // 自动生成的 JSON 映射

const POSTS_DIR = path.join(process.cwd(), "public", "posts");

// 读取某个 .mdx 文件并解析为 React 内容
export async function getCompiledPost(slug: string) {
  const filePath = await findFileBySlug(slug, POSTS_DIR);
  if (!filePath) return null;

  const raw = await fs.readFile(filePath, "utf-8");

  const { data: metadata, content: rawContent } = matter(raw);

  const noAltContent = removeImageAltsIfNeeded(rawContent, metadata);
  const fixedImages = fixRelativeImagePaths(noAltContent, filePath);
  const fixedLinks = fixRelativeLinksBasename(fixedImages);

  const compiled = await compileMDX({
    source: fixedLinks,
    components: components as MDXComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [[rehypeKatex, { strict: true }], rehypeUnwrapImages],
      },
    },
  });

  return {
    metadata,
    slug: slug,
    content: compiled.content,
  };
}

// 递归寻找某个 slug 对应的文件路径
async function findFileBySlug(
  slug: string,
  dir: string
): Promise<string | null> {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const nested = await findFileBySlug(slug, fullPath);
      if (nested) return nested;
    } else if (
      (entry.name.endsWith(".mdx") || entry.name.endsWith(".md")) &&
      path.basename(entry.name, path.extname(entry.name)) === slug
    ) {
      return fullPath;
    }
  }

  return null;
}

// 修正图片路径和链接路径：./file.md => /posts/subfolder/file.md，自动解码 %20 等特殊字符
function fixRelativeImagePaths(content: string, filePath: string): string {
  // 计算相对于 public/posts 的目录路径
  const relativeFolder = encodeURI(
    path.relative(POSTS_DIR, path.dirname(filePath)).replace(/\\/g, "/")
  );

  // 替换 Markdown 图片链接：![alt](src)
  const replacedMarkdownImages = content.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    (match, alt, src) => {
      if (!src.startsWith("http") && !src.startsWith("/")) {
        const normalizedSrc = encodeURI(decodeURIComponent(src));
        // 构造本地引用路径
        let localUrl = `/posts/${relativeFolder}/${normalizedSrc}`;
        localUrl = decodeURIComponent(localUrl);
        // 如果 JSON 映射中存在，则使用 Cloudinary 链接
        const publicUrl = "public" + localUrl;
        if (mediaMapping[publicUrl]) {
          localUrl = mediaMapping[publicUrl].url;
          console.log("Using Cloudinary URL:", localUrl);
        } else {
          console.warn("No mapping found for:", publicUrl);
        }
        return `![${alt}](${localUrl})`;
      }
      return match;
    }
  );

  // 替换 JSX 或 HTML 中的 <img src="...">
  const replacedJSXSrc = replacedMarkdownImages.replace(
    /\bsrc=["']([^"']+)["']/g,
    (match, src) => {
      if (!src.startsWith("http") && !src.startsWith("/")) {
        const normalizedSrc = encodeURI(decodeURIComponent(src));
        let localUrl = `/posts/${relativeFolder}/${normalizedSrc}`;
        localUrl = decodeURIComponent(localUrl);
        const publicUrl = "public" + localUrl;
        if (mediaMapping[publicUrl]) {
          localUrl = mediaMapping[publicUrl].url;
          console.log("Using Cloudinary URL:", localUrl);
        } else {
          console.warn("No mapping found for:", publicUrl);
        }
        console.log("Replacing:", src, "→", localUrl);
        return `src="${localUrl}"`;
      }
      console.log("Ignoring:", src);
      return match;
    }
  );

  return replacedJSXSrc;
}

function removeImageAltsIfNeeded(
  content: string,
  metadata: { noAlt?: boolean }
): string {
  if (!metadata.noAlt) return content;

  // 1. 替换 Markdown 图片语法 ![alt](src) → ![](src)
  const noAltMarkdown = content.replace(/!\[[^\]]*\]\(([^)]+)\)/g, "![]($1)");

  // 2. 删除 JSX/HTML 中的 alt="..." 或 alt='...'
  const noAltJSX = noAltMarkdown.replace(/\s+alt=(["'])(.*?)\1/g, "");

  return noAltJSX;
}

// 获取所有文章的 { metadata, slug }
export async function getPosts(): Promise<{ metadata: any; slug: string }[]> {
  const files = await getAllPostFiles(POSTS_DIR);
  const posts: { metadata: { [key: string]: any }; slug: string }[] = [];

  for (const filePath of files) {
    const raw = await fs.readFile(filePath, "utf-8");
    const { data: metadata } = matter(raw);
    const slug = path.basename(filePath, path.extname(filePath));

    posts.push({ metadata, slug });
  }

  return posts;
}

// 递归获取所有 md/mdx 文件路径
async function getAllPostFiles(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const nested = await getAllPostFiles(fullPath);
      files.push(...nested);
    } else if (entry.name.endsWith(".mdx") || entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }

  return files;
}

function fixRelativeLinksBasename(content: string): string {
  return content.replace(
    /\[([^\]]+)\]\(([^)]+\.(mdx?|MDX?|md|MD))\)/g,
    (match, text, href) => {
      const decoded = decodeURIComponent(href.split("#")[0]);
      const ext = path.extname(decoded);
      const base = path.basename(decoded, ext);
      const encodedBase = encodeURIComponent(base); // 将空格等特殊字符转为 %20
      return `[${text}](/posts/${encodedBase})`;
    }
  );
}
