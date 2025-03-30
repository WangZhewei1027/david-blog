import Article from "@/app/ui/article";

type Metadata = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

interface Post {
  metadata: Metadata;
  slug: string;
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
            date={post.metadata.updatedAt || post.metadata.publishedAt}
            caption={post.metadata.summary}
            tags={post.metadata.tags}
            link={`/posts/${post.slug}`}
          />
        ))}
    </div>
  );
}
