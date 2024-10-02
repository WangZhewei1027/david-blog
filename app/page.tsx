import Profile from "@/app/ui/profile";
import Image from "next/image";
import { getPinnedBlogPosts } from "@/app/blog/utils";
import { PostsList } from "@/app/ui/postsList";

function MyCard() {
  return (
    <section className="bg-white p-8 rounded-lg h-full w-full break-words">
      <div className="flex flex-row space-x-2 items-center">
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

      <PostsList posts={getPinnedBlogPosts()} />
    </section>
  );
}

export default function Home() {
  return (
    <main className="bg-gray-50 flex flex-col justify-center items-center">
      <div className="flex flex-col w-full max-w-7xl mx-auto pr-4 md:flex-row ">
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
