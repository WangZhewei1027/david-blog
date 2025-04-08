"use client";
import Image from "next/image";
import { useState } from "react";
import { IoDocumentOutline } from "react-icons/io5";
import { MdOutlineDocumentScanner } from "react-icons/md";

export default function Profile() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="flex flex-1 flex-col break-words rounded-lg bg-white p-6 md:p-8">
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
        {/* <video
          src={"/assets/david.mp4"}
          muted
          autoPlay={true}
          playsInline
          loop={true}
          className="object-cover rounded-full w-full h-full mb-4 transition-all"
          width={100}
          height={100}
        /> */}
        <Image
          src="/assets/david.gif"
          alt="david's profile picture"
          className="mb-4 h-full w-full rounded-full object-cover transition-all"
          width={100}
          height={100}
        />
        <div className="inline-block">
          <div className="mb-0 text-2xl font-bold text-gray-800">David</div>
          <div className="text-base text-gray-500">Zhewei Wang</div>
        </div>
      </div>
      <div className="flex items-center md:hidden">
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
          {/* <video
            src={"/assets/david.mp4"}
            muted
            autoPlay={true}
            loop={true}
            className="object-cover rounded-full transition-all"
            width={50}
            height={50}
          /> */}
          <Image
            src="/assets/david.gif"
            alt="david's profile picture"
            className="h-16 w-16 rounded-full object-cover transition-all"
            width={20}
            height={20}
          />
        </div>
        <div className="ml-4 flex flex-col justify-end">
          <div className="mb-0 text-2xl font-bold text-gray-800">David</div>
          <div className="text-base text-gray-500">Zhewei Wang</div>
        </div>
      </div>

      <div className="my-4 border-t" />

      <div className="my-1 flex items-center space-x-2">
        <Image
          src="/icons/school_24dp_5F6368.svg"
          alt="school"
          width={24}
          height={24}
        />
        <div>NYU Shanghai</div>
      </div>

      <div className="my-1 flex items-center space-x-2">
        <Image
          src="/icons/place_24dp_5F6368.svg"
          alt="location"
          width={24}
          height={24}
        />
        <div>New York / Shanghai</div>
      </div>

      <div className="my-1 flex items-center space-x-2">
        <Image
          src="/icons/email_24dp_5F6368.svg"
          alt="email"
          width={24}
          height={24}
        />
        <div>zw3636@nyu.edu</div>
      </div>

      <div className="my-1 flex items-center space-x-2">
        <MdOutlineDocumentScanner className="text-2xl text-gray-600" />
        <a href="/resume?lang=zh" className="underline">
          简历
        </a>
        <span> / </span>
        <a href="/resume?lang=en" className="underline">
          Resume
        </a>
      </div>

      <div className="my-4 border-t" />

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
