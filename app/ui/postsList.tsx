import Article from "@/app/ui/article";

interface Post {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    tags: string[];
  };
}

export function PostsList({ posts }: { posts: Post[] }) {
  const allBlogs = posts;

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
            tags={post.metadata.tags}
            link={`/blog/${post.slug}`}
          />
        ))}
    </div>
  );
}
