import Profile from "@/app/ui/profile";
import Image from "next/image";
import { getPinnedBlogPosts } from "@/app/posts/utils";
import { PostsList } from "@/app/ui/postsList";
import { getPosts } from "./posts/posts";

async function MyCard() {
  const posts = await getPosts();
  const pinnedPosts = posts.filter((post) => post.metadata.pin === true);

  return (
    <section className="h-full w-full break-words rounded-lg bg-white p-4 md:p-8">
      <div className="flex flex-row items-center space-x-2">
        <Image
          src="/icons/push_pin_24dp_5F6368.svg"
          alt="pin"
          width={24}
          height={24}
          priority={true}
        />
        <h2 className="mb-0">Pinned Blogs</h2>
      </div>

      <div className="mt-4 border-t border-gray-200" />

      <PostsList posts={pinnedPosts} />
    </section>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-gray-50">
      <div className="mx-auto flex w-full max-w-7xl flex-col pr-4 md:flex-row">
        <div className="flex-1 basis-0 pl-4 pt-4 md:basis-1/3">
          <Profile />
        </div>
        <div className="flex-1 basis-0 pl-4 pt-4 md:basis-2/3">
          <MyCard />
        </div>
      </div>
      <div className="pt-4" />
    </main>
  );
}
