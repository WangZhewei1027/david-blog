import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { formatDate, getBlogPosts } from "@/app/blog/utils";
// import { baseUrl } from "@/app/sitemap";
import Container from "@/app/ui/container";

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// export function generateMetadata({ params }) {
//   const post = getBlogPosts().find((post) => post.slug === params.slug);
//   if (!post) {
//     return null;
//   }
//
//   const {
//     title,
//     publishedAt: publishedTime,
//     summary: description,
//     image,
//   } = post.metadata;
//   const ogImage = image
//     ? image
//     : `${baseUrl}/og?title=${encodeURIComponent(title)}`;
//
//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       type: "article",
//       publishedTime,
//       url: `${baseUrl}/blog/${post.slug}`,
//       images: [
//         {
//           url: ogImage,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: [ogImage],
//     },
//   };
// }

export default function Blog({ params }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  {
    /* <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      /> */
  }

  return (
    <>
      <h1 className="text-center mt-8 mb-4 font-serif">
        {post.metadata.title}
      </h1>
      <div className="text-center text-gray-400 mb-4 font-serif">
        {formatDate(post.metadata.publishedAt)}
      </div>
      {post.metadata.type === "article" && (
        <Container>
          <CustomMDX source={post.content} />
        </Container>
      )}
      {post.metadata.type === "special" && <CustomMDX source={post.content} />}
    </>
  );
}
