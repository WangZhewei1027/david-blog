import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { formatDate, getBlogPosts } from "@/app/posts/utils";
import Container from "@/app/ui/container";

export default function Blog({ params }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="blog-post">
      <h1 className="text-center mt-8 mb-4 font-serif">
        {post.metadata.title}
      </h1>
      <div className="text-center text-gray-400 mb-4 font-serif">
        {formatDate(post.metadata.publishedAt || "")}
      </div>
      {post.metadata.type === "article" && (
        <Container>
          <CustomMDX source={post.content} />
        </Container>
      )}
      {post.metadata.type === "special" && <CustomMDX source={post.content} />}
    </div>
  );
}
