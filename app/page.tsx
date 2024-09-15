"use cliet";
import Profile from "@/app/ui/profile";
import Footer from "@/app/ui/footer";
import Image from "next/image";
import Article from "@/app/ui/article";

function MyCard() {
  return (
    <section className="bg-white p-8 rounded-lg h-full w-full break-words">
      <div className="flex flex-row space-x-2">
        <Image
          src="/icons/push_pin_24dp_5F6368.svg"
          alt="pin"
          width={24}
          height={24}
        />
        <h2 className="text-2xl font-bold text-gray-800">Pinned Blogs</h2>
      </div>

      <div className="mt-4 border-t border-gray-200" />

      <Article
        title="New York Bule Sky & Sunset Collection"
        date="Sep 14, 2024"
        caption="A collection of photographs"
        link="/life/2024/09/new-york-blue-sky-sunset-collection"
      />
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="flex flex-col w-full max-w-7xl mx-auto pr-4 md:flex-row ">
        <div className="flex-1 basis-0 pl-4 pt-4 md:basis-1/3">
          <Profile />
        </div>
        <div className="flex-1 basis-0 pl-4 pt-4 md:basis-2/3">
          <MyCard />
        </div>
      </div>
      <div className="pt-4" />
      <Footer />
    </main>
  );
}
