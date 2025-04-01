import Image from "next/image";
import fs from "fs";
import path from "path";

function getFiles(dir: string): string[] {
  let mdxFiles: string[] = [];

  // Read all files and folders in the directory
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);

    // Check if it's a directory
    if (fs.statSync(filePath).isDirectory()) {
      mdxFiles = mdxFiles.concat(getFiles(filePath));
    } else {
      if ([".jpeg", ".jpg", ".png", ".gif"].includes(path.extname(file))) {
        mdxFiles.push(`${file}`);
      }
    }
  });
  return mdxFiles;
}

export default function Gallery({ slug }: { slug: string }) {
  const pics = getFiles(path.join(process.cwd(), "public", "posts", slug));
  console.log(pics);
  return (
    <main className="min-h-screen flex justify-center items-center flex-col">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4">
        {pics.map((pic) => (
          <div className="p-2" key={pic}>
            <Image
              src={pic}
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
