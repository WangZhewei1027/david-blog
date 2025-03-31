import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  webpack: (config, { isServer }) => {
    if (isServer) {
      // 忽略 public/posts 目录下的图片和视频文件
      config.plugins.push(
        new webpack.IgnorePlugin({
          // 匹配文件扩展名：图片和视频
          resourceRegExp: /\.(png|jpe?g|gif|svg|mp4|webm)$/,
          // 只对 public/posts 目录下的文件生效
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
