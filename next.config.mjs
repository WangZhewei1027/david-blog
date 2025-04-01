import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  images: {
    domains: ["res.cloudinary.com"],
  },
};

const withMDX = createMDX({
  remarkPlugins: [remarkGfm],
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
