export default function About() {
  return (
    <div className="container mx-auto px-4 mt-16">
      <h1 className="text-3xl font-bold text-gray-800">Welcome to My Blog</h1>

      <div className="mt-4 border-t border-gray-200"></div>

      <div className="mt-8 border border-gray-200 p-8 rounded-lg shadow-inner hover:bg-gray-50 cursor-pointer">
        <h2 className="text-2xl font-bold mb-4">
          New York Bule Sky & Sunset Collection
        </h2>
        <p className="text-gray-700">
          This content is inside a container. It will remain centered, and its
          width will adjust based on the screen size.
        </p>
      </div>
    </div>
  );
}
