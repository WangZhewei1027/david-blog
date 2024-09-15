import Image from "next/image";

const pics = [
  "IMG_6580.jpeg",
  "IMG_6663.jpeg",
  "IMG_6724.jpeg",
  "IMG_6730.jpeg",
  "IMG_6744.jpeg",
  "IMG_6746.jpeg",
  "IMG_6762.jpeg",
  "IMG_6768.jpeg",
  "IMG_6774.jpeg",
  "IMG_6778.jpeg",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 flex justify-center items-center flex-col">
      <h2 className="text-2xl font-bold my-4 border-b p-4">
        New York Bule Sky & Sunset Collection
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4">
        {pics.map((pic) => (
          <div className="p-2" key={pic}>
            <Image
              src={`/assets/new-york-blue-sky-sunset-collection/${pic}`}
              alt={pic}
              width={400}
              height={300}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
