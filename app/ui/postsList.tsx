import { formatDate, getBlogPosts } from "@/app/blog/utils";
import Article from "@/app/ui/article";

export function PostsList({ posts }: { posts: any[] }) {
  let allBlogs = posts;

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Article
            key={post.slug}
            title={post.metadata.title}
            date={post.metadata.publishedAt}
            caption={post.metadata.summary}
            link={`/blog/${post.slug}`}
          />
        ))}
    </div>
  );
}
