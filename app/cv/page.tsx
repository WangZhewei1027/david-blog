import Container from "@/app/ui/container";

export default function CV() {
  return (
    <Container>
      {/* 个人信息 */}
      <Header />

      {/* 主容器 - 左右布局 */}
      <div className="flex gap-6">
        {/* 左侧主内容（占比 3） */}
        <div className="w-2/3 space-y-8">
          <Education />
          <Experience />
          <Projects />
        </div>

        {/* 右侧侧栏（占比 1） */}
        <div className="w-1/3 space-y-8">
          <Skills />
          <SoftSkills />
          <Languages />
        </div>
      </div>
    </Container>
  );
}

/* 📌 个人信息 */
function Header() {
  return (
    <div className="flex justify-between items-start gap-6">
      <div>
        <h1 className="text-5xl font-serif mb-1">David Wang</h1>
        <p className="text-lg mt-2">Full name: David Zhewei Wang</p>
      </div>
      <div className="w-1/3 text-right">
        <p className="text-base m-0">+86 - 13636472690</p>
        <p className="text-base font-bold text-blue-600 m-0">zw3636@nyu.edu</p>
        <p className="m-0">
          NYUSH 567 West Yangsi Road, Pudong New District, Shanghai, China
          200124
        </p>
      </div>
    </div>
  );
}

/* 📌 教育 */
function Education() {
  return (
    <Section title="EDUCATION">
      <h3 className="font-bold">New York University Shanghai</h3>
      <p className="text-gray-600">September 2022 - May 2026</p>
      <p>
        <strong>Major:</strong> Computer Science
        <br />
        <strong>Minor:</strong> Interactive Media Arts
        <br />
        <strong>Relevant Coursework:</strong> Machine Learning, P5JS, Unity &
        C#, Web Design (HTML, CSS, JS), Data Structures, Algorithms, Linear
        Algebra, Calculus.
        <br />
        <strong>Cumulative GPA:</strong> 3.5/4.0
      </p>
    </Section>
  );
}

/* 📌 经验 */
function Experience() {
  return (
    <Section title="EXPERIENCE">
      <ExperienceItem
        role="NYU Shanghai Orientation Ambassador"
        date="August 2023 - November 2023"
        bullets={[
          "Facilitated the integration of freshmen students into college life.",
          "Organized diverse events and activities over several months.",
          "Developed strong leadership and communication skills.",
        ]}
      />
      <ExperienceItem
        role="Band Manager | NYUSH Jazz Ensemble and Student Band"
        date="August 2023 - Present"
        bullets={[
          "Manage both NYUSH Jazz Ensemble and the Student Band.",
          "Oversee equipment management and coordinate musical events.",
          "Handle logistics and facilitate seamless performances.",
        ]}
      />
    </Section>
  );
}

/* 📌 项目 */
function Projects() {
  return (
    <Section title="PROJECTS">
      <ProjectItem
        name="Future Journalist — A Machine Learning Project"
        description="A dynamic project that engages with the OpenAI API, retrieves news content, and generates visuals with Stable Diffusion to enhance storytelling."
      />
      <ProjectItem
        name="That’s Life — A P5js Project"
        description="An interactive artwork utilizing Conway’s 'Game of Life', combining creativity and programming to create a visually captivating experience."
      />
    </Section>
  );
}

/* 📌 技能 */
function Skills() {
  return (
    <Section title="SKILLS">
      <SkillItem
        title="Programming Languages"
        details="C++, C, Python, JavaScript (JS), C#."
      />
      <SkillItem
        title="Web Development"
        details="HTML, CSS, JS, P5JS, Supabase, React, Next.js, TailwindCSS."
      />
      <SkillItem
        title="Hardware"
        details="Skilled in working with Arduino and relevant hardware."
      />
      <SkillItem
        title="Software"
        details="Familiar with Pr, Ps, Au, Word, Excel, PPT."
      />
      <SkillItem
        title="Game Design"
        details="Proficient in Unity and GameMaker."
      />
      <SkillItem
        title="Music"
        details="Professionally trained Jazz musician, experienced in Logic Pro and Ableton."
      />
    </Section>
  );
}

/* 📌 软技能 */
function SoftSkills() {
  return (
    <Section title="Soft Skills">
      <SkillItem
        title="Teamwork"
        details="Proven ability to collaborate effectively within a team."
      />
      <SkillItem
        title="Leadership"
        details="Demonstrated leadership skills in various roles."
      />
      <SkillItem
        title="Event Organizing"
        details="Experienced in organizing and coordinating events."
      />
    </Section>
  );
}

/* 📌 语言 */
function Languages() {
  return (
    <Section title="LANGUAGES">
      <p className="text-base">Chinese (Native), English (Fluent)</p>
    </Section>
  );
}

/* ✅ 可复用的 `Section` 组件 */
function Section({ title, children }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-blue-600">{title}</h2>
      <div className="mt-2 space-y-2">{children}</div>
    </section>
  );
}

/* ✅ 可复用的 `ExperienceItem` 组件 */
function ExperienceItem({ role, date, bullets }) {
  return (
    <div>
      <h3 className="font-bold">{role}</h3>
      <p className="text-gray-600">{date}</p>
      <ul className="list-disc pl-5 text-base">
        {bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}

/* ✅ 可复用的 `ProjectItem` 组件 */
function ProjectItem({ name, description }) {
  return (
    <div>
      <h3 className="font-bold">{name}</h3>
      <p className="text-base">{description}</p>
    </div>
  );
}

/* ✅ 可复用的 `SkillItem` 组件 */
function SkillItem({ title, details }) {
  return (
    <p className="text-base">
      <strong>{title}:</strong> {details}
    </p>
  );
}
