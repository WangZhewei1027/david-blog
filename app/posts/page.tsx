import { PostsList } from "@/app/ui/postsList";
import Container from "@/app/ui/container";
import { getBlogPosts } from "@/app/posts/utils";
import Image from "next/image";
import { getPosts } from "./posts";

export default async function Page() {
  // const posts = getBlogPosts();

  const posts = await getPosts();

  return (
    <Container>
      <div className="container mx-auto px-4 min-h-screen">
        <div className="flex flex-row space-x-3">
          <Image
            src="/icons/bookmark_24dp_5F6368.svg"
            alt="pin"
            width={24}
            height={24}
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-0">
            Welcome to My Blogs
          </h2>
        </div>
        <div className="mt-4 border-t border-gray-200" />
        <PostsList posts={posts} />
      </div>
    </Container>
  );
}
