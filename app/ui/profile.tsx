import Image from "next/image";

export default function Profile() {
  return (
    <section className="bg-white rounded-lg p-8 flex flex-col flex-1 break-words">
      <img
        src="/david.jpeg"
        className="object-cover rounded-full w-full h-full mb-4"
      />
      <h2 className="text-2xl font-bold text-gray-800">David</h2>
      <div className="text-base text-gray-500">Zhewei Wang</div>

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

      <div className="border-t my-4" />

      <div className="text-lg font-bold text-gray-800 mb-2">About David</div>
      <p className="text-gray-600">
        {`Hi! I'm David, a junior studying Computer Science. My passion lies
            in coding, web design, and all things tech-related. When I'm not in
            front of a screen, you can find me immersed in the soothing sounds
            of Jazz music.`}
      </p>
    </section>
  );
}
