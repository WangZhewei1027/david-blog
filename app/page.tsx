"use cliet";
import Profile from "@/app/ui/profile";
import Footer from "@/app/ui/footer";
import Image from "next/image";

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

      <div className="mt-4 border-t border-gray-200"></div>

      <div className="hover:bg-gray-100 p-8 border-b transition-all">
        <a href="/life/new_york_blue_sky_and_sunset_collection">
          <h2 className="text-xl font-bold mb-1">
            <li>New York Bule Sky & Sunset Collection</li>
          </h2>
          <p className="text-base text-gray-500">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sep 14, 2024 - A collection of
            photographs
          </p>
        </a>
      </div>
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
