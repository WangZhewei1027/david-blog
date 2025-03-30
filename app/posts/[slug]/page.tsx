import { getCompiledPost } from "../posts";
import Container from "@/app/ui/container";
import { formatDate } from "@/app/posts/utils";

export default async function Page({ params }) {
  const decodedSlug = decodeURIComponent(params.slug);
  const post = await getCompiledPost(decodedSlug);
  if (!post) return <div>404 - Post not found</div>;

  const date = formatDate(
    post.metadata.publishedAt || post.metadata.updatedAt || ""
  );

  return (
    <Container>
      <article className="prose blog-post">
        <h1 className="mx-auto text-center !mb-4">{post.metadata.title}</h1>
        {date && (
          <div className="text-center text-gray-400 mb-8 font-serif">
            {date}
          </div>
        )}
        {post.content}
      </article>
    </Container>
  );
}
