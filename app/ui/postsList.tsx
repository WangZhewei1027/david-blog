import Article from "@/app/ui/article";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  type: string;
  pin?: boolean;
  tags: string[];
};

interface Post {
  metadata: Metadata;
  slug: string;
  content: string;
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
            link={`/posts/${post.slug}`}
          />
        ))}
    </div>
  );
}
