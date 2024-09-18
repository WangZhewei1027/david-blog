type ArticleProps = {
  title: string;
  date: string;
  caption: string;
  link: string;
};

export default function Article({ title, date, caption, link }: ArticleProps) {
  return (
    <div className="hover:bg-gray-100 py-6 px-2 border-b transition-all sm:p-8">
      <a href={link} className="no-underline">
        <h2 className="text-base font-bold mb-1 sm:text-xl">
          <li>{title}</li>
        </h2>
        <p className="text-sm text-gray-500 m-0 sm:text-base">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{date} &nbsp;&nbsp;{caption}
        </p>
      </a>
    </div>
  );
}
