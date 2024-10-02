type ArticleProps = {
  title: string;
  date: string;
  caption: string;
  link: string;
  tags: string[];
};

// export default function Article({ title, date, caption, link }: ArticleProps) {
//   return (
//     <div className="hover:bg-gray-100 py-6 px-2 border-b transition-all sm:p-8">
//       <a href={link} className="no-underline">
//         <h2 className="text-base font-bold mb-1 sm:text-xl">{title}</h2>
//         <p className="text-sm text-gray-500 m-0 sm:text-base">
//           {date} &nbsp;&nbsp;{caption}
//         </p>
//       </a>
//     </div>
//   );
// }

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
  return (
    <div className="hover:bg-gray-100 py-6 px-2 border-b transition-all sm:p-8">
      <a href={link} className="no-underline">
        <div>
          <h2 className="text-base font-bold mb-1 mr-2 sm:text-xl inline-flex">
            {title}
          </h2>
          <div className="inline-block">
            {tags.map((tag) => (
              <div key={tag} className="mx-1 inline-block">
                <Tag>{tag}</Tag>
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-500 m-0 sm:text-base">
          {date} &nbsp;&nbsp;{caption}
        </p>
      </a>
    </div>
  );
}
