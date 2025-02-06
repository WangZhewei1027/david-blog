import Container from "@/app/ui/container";

export default function Life() {
  return (
    <Container>
      <div className="max-w-6xl mx-auto p-8">
        {/* 主容器 - 左右布局 */}
        <div className="flex gap-8">
          {/* 左侧主内容（占比 3） */}
          <div className="flex-3">
            <h1 className="text-5xl font-bold">David Wang</h1>
            <p className="text-lg mt-2">Full name: David Zhewei Wang</p>

            {/* 教育 */}
            <section className="mt-6">
              <h2 className="text-2xl font-semibold text-blue-600">
                EDUCATION
              </h2>
              <div className="mt-2">
                <h3 className="font-bold">
                  New York University Shanghai, Shanghai, China
                </h3>
                <p className="text-gray-600">September 2022 - May 2026</p>
                <p>
                  Major in Computer Science, Minor in Interactive Media Arts
                  <br />
                  Relevant Coursework: Machine Learning, Nature of Code (P5JS),
                  Game Design (Unity & C#)
                  <br />
                  Cumulative GPA: <strong>3.5/4.0</strong>
                </p>
              </div>
            </section>

            {/* 经验 */}
            <section className="mt-6">
              <h2 className="text-2xl font-semibold text-blue-600">
                EXPERIENCE
              </h2>

              <div className="mt-2">
                <h3 className="font-bold">
                  NYU Shanghai Orientation Ambassador
                </h3>
                <p className="text-gray-600">August 2023 - November 2023</p>
                <ul className="list-disc pl-5">
                  <li>
                    Facilitated the integration of freshmen students into
                    college life by guiding them through orientation activities.
                  </li>
                  <li>
                    Successfully organized and executed diverse events and
                    activities over several months.
                  </li>
                  <li>
                    Developed strong leadership, organizational, and
                    communication skills through active participation in the
                    orientation program.
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <h3 className="font-bold">
                  Band Manager | NYUSH Jazz Ensemble and Student Band
                </h3>
                <p className="text-gray-600">August 2023 - Present</p>
                <ul className="list-disc pl-5">
                  <li>
                    Serve as the Manager for both NYUSH Jazz Ensemble and the
                    Student Band, concurrently holding a role as a musician.
                  </li>
                  <li>
                    Proficiently oversee equipment management and ensure the
                    smooth coordination of musical events.
                  </li>
                  <li>
                    Demonstrate strong organizational skills in handling
                    logistics and facilitating seamless execution of
                    performances.
                  </li>
                </ul>
              </div>
            </section>

            {/* 项目 */}
            <section className="mt-6">
              <h2 className="text-2xl font-semibold text-blue-600">PROJECTS</h2>

              <div className="mt-2">
                <h3 className="font-bold">
                  Future Journalist — A Machine Learning Project
                </h3>
                <p>
                  A dynamic project crafted in HTML, JS, and CSS, where the
                  program autonomously engages with the OpenAI API. Through
                  repetitive requests, it retrieves news content and employs
                  Stable Diffusion to generate captivating visuals that enhance
                  the storytelling aspect.
                </p>
              </div>

              <div className="mt-4">
                <h3 className="font-bold">That’s Life — A P5js Project</h3>
                <p>
                  {`An engaging interactive artwork utilizing the core concept of
                  Conway’s "the game of life." This P5js project combines
                  creativity and programming skills to bring to life a visually
                  captivating and interactive experience, showcasing a unique
                  interpretation of the underlying principles.`}
                </p>
              </div>

              <div className="mt-4">
                <h3 className="font-bold">
                  What if... — An Original Jazz Composition
                </h3>
                <p>
                  My original Bossa Nova-style composition. From composition to
                  transcription, I led the creative process. Collaborating with
                  the NYUSH Jazz Ensemble, we meticulously rehearsed and
                  presented this piece at the 2023 fall semester concert,
                  leaving an indelible mark on the audience.
                </p>
              </div>
            </section>
          </div>

          {/* 右侧侧栏（占比 1） */}
          <div className="flex-1">
            {/* 联系方式 */}
            <section>
              <p className="text-lg font-bold">+86 - 13636472690</p>
              <p className="text-lg font-bold text-blue-600">zw3636@nyu.edu</p>
              <p>
                NYUSH 567 West Yangsi Road, Pudong New District, Shanghai, China
                200124
              </p>
            </section>

            {/* 技能 */}
            <section className="mt-6">
              <h2 className="text-2xl font-semibold text-blue-600">SKILLS</h2>
              <ul className="list-disc pl-5">
                <li>
                  <strong>Programming Languages:</strong> Proficient in C++,
                  Python, JavaScript (JS), and C#.
                </li>
                <li>
                  <strong>Web Development:</strong> Experienced in HTML, CSS,
                  and P5.js. Familiar with Stable Diffusion and LLM.
                </li>
                <li>
                  <strong>Hardware:</strong> Skilled in working with Arduino and
                  relevant hardware.
                </li>
                <li>
                  <strong>Photography:</strong> Amateur photographer with a
                  passion for capturing moments creatively.
                </li>
                <li>
                  <strong>Game Design:</strong> Proficient in game design using
                  Unity.
                </li>
                <li>
                  <strong>Music:</strong> Professionally trained Jazz musician.
                </li>
              </ul>
            </section>

            {/* 软技能 */}
            <section className="mt-6">
              <h2 className="text-2xl font-semibold text-blue-600">
                Soft Skills
              </h2>
              <ul className="list-disc pl-5">
                <li>
                  Teamwork: Proven ability to collaborate effectively within a
                  team.
                </li>
                <li>
                  Leadership: Demonstrated leadership skills in various roles.
                </li>
                <li>
                  Event Organizing: Experienced in organizing and coordinating
                  events.
                </li>
              </ul>
            </section>

            {/* 语言 */}
            <section className="mt-6">
              <h2 className="text-2xl font-semibold text-blue-600">
                LANGUAGES
              </h2>
              <p>Chinese (Native), English (Fluent)</p>
            </section>

            {/* 实习时间 */}
            <section className="mt-6">
              <h2 className="text-2xl font-semibold text-blue-600">
                Summer Internship Availability
              </h2>
              <p>June: Monday to Thursday every week</p>
              <p>
                July 1st – August 9th: Tuesday, Thursday, and Friday every week
              </p>
            </section>
          </div>
        </div>
      </div>
    </Container>
  );
}
