import Link from "next/link";

type ArticleProps = {
  title: string;
  date: string | Date;
  caption: string;
  link: string;
  tags: string[];
};

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center bg-gray-200 text-gray-600 text-sm font-serif italic px-2 rounded-full">
      {children}
    </div>
  );
}

export default function Article({
  title,
  date,
  caption,
  tags,
  link,
}: ArticleProps) {
  const formattedDate =
    typeof date === "string"
      ? date
      : date instanceof Date && !isNaN(date.getTime())
      ? date.toISOString().split("T")[0]
      : "Unknown Updated Time";

  return (
    <div className="hover:bg-gray-100 py-6 px-2 border-b transition-all sm:p-8">
      <Link href={link} className="no-underline">
        <div>
          <h2 className="text-base font-bold mb-1 mr-2 sm:text-xl inline-flex">
            {title ? title : "Untitled"}
          </h2>
          <div className="inline-block">
            {tags?.map((tag) => (
              <div key={tag} className="mx-1 inline-block">
                <Tag>{tag}</Tag>
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-500 m-0 sm:text-base">
          {formattedDate ? formattedDate : "Unknown Updated Time"} &nbsp;&nbsp;
          {caption}
        </p>
      </Link>
    </div>
  );
}
