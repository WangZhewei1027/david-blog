import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";
import pkg from "next/dist/compiled/webpack/webpack-lib.js"; // 默认导入
const { IgnorePlugin } = pkg;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // 其它配置项...
  webpack: (config, { isServer }) => {
    if (isServer) {
      // 忽略 public/posts 目录下的图片和视频文件
      config.plugins.push(
        new IgnorePlugin({
          resourceRegExp: /\.(png|jpe?g|gif|svg|mp4|webm)$/,
          contextRegExp: /public\/posts/,
        })
      );
    }
    return config;
  },
};

const withMDX = createMDX({
  remarkPlugins: [],
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
