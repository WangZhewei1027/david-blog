"use cliet";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      {/* Main Content */}
      <main className="flex flex-col justify-center items-center w-full px-4 py-10">
        {/* Intro Section */}
        <section className="bg-white rounded-lg shadow-md p-8 w-full max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Meet David</h2>
          <p className="text-gray-600">
            {`Hi! I'm David, a junior studying Computer Science. My passion lies
            in coding, algorithms, and all things tech-related. When I'm not in
            front of a screen, you can find me immersed in the soothing sounds
            of Jazz music.`}
          </p>
        </section>

        {/* About David Section */}
        <section className="bg-gray-100 rounded-lg shadow-md p-8 w-full max-w-4xl text-left mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            About David
          </h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              <strong>Major:</strong> Computer Science
            </li>
            <li>
              <strong>Year:</strong> Junior
            </li>
            <li>
              <strong>Hobbies:</strong> Jazz Music, Programming, Exploring new
              technologies
            </li>
            <li>
              <strong>Favorite Language:</strong> Python & JavaScript
            </li>
          </ul>
        </section>

        {/* Jazz Music Section */}
        <section className="bg-white rounded-lg shadow-md p-8 w-full max-w-4xl text-center mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Jazz & Me
          </h3>
          <p className="text-gray-600">
            {`Jazz music is my escape. Whether it's John Coltrane, Miles Davis, or
            the smooth sounds of a modern artist, I find creativity in the
            melodies and rhythm. It’s the perfect background music for coding
            sessions.`}
          </p>
          <div className="mt-4">
            <a
              href="#"
              className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition-colors"
            >
              Listen to My Favorite Jazz Playlist
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-100 rounded-lg shadow-md p-8 w-full max-w-4xl text-center mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Contact Me
          </h3>
          <p className="text-gray-600">
            Feel free to reach out if you want to chat about CS, Jazz music, or
            anything else!
          </p>
          <a
            href="mailto:david@example.com"
            className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition-colors mt-4"
          >
            Email David
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-white py-4 text-center shadow-inner mt-auto">
        <p className="text-gray-500 text-sm">
          {`2024 David's Blog. All Rights Reserved.`}
        </p>
      </footer>
    </div>
  );
}
