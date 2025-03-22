"use client";
import Image from "next/image";
import { useState } from "react";
import { IoDocumentOutline } from "react-icons/io5";
import { MdOutlineDocumentScanner } from "react-icons/md";

export default function Profile() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="bg-white rounded-lg p-8 flex flex-col flex-1 break-words">
      <div className="hidden md:block">
        {/* <Image
          src={isHovered ? "/assets/david_smile.jpg" : "/assets/david.jpeg"}
          alt="david's profile picture"
          className="object-cover rounded-full w-full h-full mb-4 transition-all"
          width={100}
          height={100}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        /> */}
        <video
          src={"/assets/david.mp4"}
          muted
          autoPlay={true}
          playsInline
          loop={true}
          className="object-cover rounded-full w-full h-full mb-4 transition-all"
          width={100}
          height={100}
        />
        <div className="inline-block">
          <div className="text-2xl font-bold text-gray-800 mb-0">David</div>
          <div className="text-base text-gray-500">Zhewei Wang</div>
        </div>
      </div>
      <div className="flex md:hidden">
        <div className="block h-full md:hidden">
          {/* <Image
            src={isHovered ? "/assets/david_smile.jpg" : "/assets/david.jpeg"}
            src={"/assets/david.mp4"}
            alt="david's profile picture"
            className="object-cover rounded-full w-full h-full transition-all"
            width={50}
            height={50}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          /> */}
          <video
            src={"/assets/david.mp4"}
            muted
            autoPlay={true}
            loop={true}
            className="object-cover rounded-full transition-all"
            width={50}
            height={50}
          />
        </div>
        <div className="flex flex-col justify-end  ml-4">
          <div className="text-2xl font-bold text-gray-800 mb-0">David</div>
          <div className="text-base text-gray-500">Zhewei Wang</div>
        </div>
      </div>

      <div className="border-t my-4" />

      <div className="flex items-center space-x-2 my-1">
        <Image
          src="/icons/school_24dp_5F6368.svg"
          alt="school"
          width={24}
          height={24}
        />
        <div>NYU Shanghai</div>
      </div>

      <div className="flex items-center space-x-2 my-1">
        <Image
          src="/icons/place_24dp_5F6368.svg"
          alt="location"
          width={24}
          height={24}
        />
        <div>New York / Shanghai</div>
      </div>

      <div className="flex items-center space-x-2 my-1">
        <Image
          src="/icons/email_24dp_5F6368.svg"
          alt="email"
          width={24}
          height={24}
        />
        <div>zw3636@nyu.edu</div>
      </div>

      <div className="flex items-center space-x-2 my-1">
        <MdOutlineDocumentScanner className="text-2xl text-gray-600" />
        <a href="/resume_zh" className="underline">
          简历
        </a>
        <span> / </span>
        <a href="/resume_en" className="underline">
          Resume
        </a>
      </div>

      <div className="border-t my-4" />

      <h3 className="mb-2 font-bold">About Me</h3>
      <div className="text-gray-600">
        {`Hi! I'm David, a junior studying Computer Science. My passion lies
            in coding, web design, and all things tech-related. When I'm not in
            front of a screen, you can find me immersed in the soothing sounds
            of Jazz music.`}
      </div>
    </section>
  );
}
