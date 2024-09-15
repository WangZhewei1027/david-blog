import Article from "@/app/ui/article";
import Image from "next/image";

export default function Coding() {
  return (
    <div className="container mx-auto px-4 mt-16">
      <div className="flex flex-row space-x-3">
        <Image
          src="/icons/code_24dp_5F6368.svg"
          alt="pin"
          width={24}
          height={24}
        />
        <h2 className="text-2xl font-bold text-gray-800">My Coding Works</h2>
      </div>

      <div className="mt-4 border-t border-gray-200" />
      <Article
        title="Sky Wheel"
        date="Feb 20, 2023"
        caption="A p5js animation project"
        link="/coding/2023/02/sky-wheel"
      />
    </div>
  );
}
