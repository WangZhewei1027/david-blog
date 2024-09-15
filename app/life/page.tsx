import Article from "@/app/ui/article";
import Image from "next/image";

export default function Life() {
  return (
    <div className="container mx-auto px-4 mt-16">
      <div className="flex flex-row space-x-3">
        <Image
          src="/icons/photo_camera_24dp_5F6368.svg"
          alt="pin"
          width={24}
          height={24}
        />
        <h2 className="text-2xl font-bold text-gray-800">Welcome to My Life</h2>
      </div>

      <div className="mt-4 border-t border-gray-200" />
      <Article
        title="New York Bule Sky & Sunset Collection"
        date="Sep 14, 2024"
        caption="A collection of photographs"
        link="/life/2024/09/new-york-blue-sky-sunset-collection"
      />
    </div>
  );
}
