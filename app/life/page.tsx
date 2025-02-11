import Image from "next/image";
import { PostsList } from "@/app/ui/postsList";
import { getBlogPostsByTag } from "@/app/posts/utils";
import Container from "@/app/ui/container";

export default function Life() {
  const posts = getBlogPostsByTag("life");

  return (
    <Container>
      <div className="container mx-auto px-4 min-h-screen">
        <div className="flex flex-row space-x-3">
          <Image
            src="/icons/photo_camera_24dp_5F6368.svg"
            alt="pin"
            width={24}
            height={24}
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-0">
            Welcome to My Life
          </h2>
        </div>
        <div className="mt-4 border-t border-gray-200" />
        <PostsList posts={posts} />
      </div>
    </Container>
  );
}
