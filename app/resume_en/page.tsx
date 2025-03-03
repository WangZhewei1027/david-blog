import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
import React from "react";

function Item({
  children,
  time,
  title,
  subTitle,
}: {
  children?: React.ReactNode;
  time: string;
  title: string;
  subTitle?: string | React.ReactNode;
}) {
  return (
    <div className="flex flex-row">
      <div className="text-xl font-semibold mr-8 w-56 shrink-0">{time}</div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        {subTitle && <div className="text-gray-950 text-lg">{subTitle}</div>}
        <div className="py-1" />
        {children}
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <div className="text-6xl font-serif font-bold mt-auto">Zhewei Wang</div>
        <div className="text-2xl font-serif font-bold mt-auto text-gray-600">
          Alias: David
        </div>
      </div>
      <div className="ml-auto space-y-1">
        <div>
          <span className="ml-2 align-bottom text-gray-700">
            <strong>Position Applied:</strong> Frontend Intern
          </span>
        </div>
        <div>
          <span className="ml-2 align-bottom text-gray-700">
            <strong>Internship Period:</strong> June 20, 2025 - August 20, 2025
          </span>
        </div>
      </div>
      <div className="ml-auto space-y-1">
        <div>
          <MdLocalPhone className="inline-block h-6 w-6" />
          <span className="ml-2 align-bottom text-gray-700">
            +86 13636472690
          </span>
        </div>
        <div>
          <MdEmail className="inline-block h-6 w-6" />
          <span className="ml-2 align-bottom text-gray-700">
            zw3636@nyu.edu
          </span>
        </div>
        <div>
          <MdArrowOutward className="inline-block h-6 w-6 " />
          <a
            className="ml-2 align-bottom underline text-gray-700"
            href="https://www.davidzheweiwang.com/"
          >
            www.davidzheweiwang.com
          </a>
        </div>
        <div>
          <MdLocationOn className="inline-block h-6 w-6" />
          <span className="ml-2 align-bottom text-gray-700">
            Shanghai / New York
          </span>
        </div>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className="font-serif !mt-4">
      <h2 className="text-3xl font-bold mb-6 font-serif">Education</h2>
      <div className="flex flex-col">
        <Item
          time="Sep 2024 - May 2026"
          title="New York University Shanghai"
          subTitle="Bachelor of Science | Major: Computer Science | Minor: Interactive Media Arts"
        >
          <ul className="list-disc list-inside text-gray-600">
            <li>Cumulative GPA: 3.5/4.0</li>
            <li>Expected Graduation: May 2026</li>
            <li>
              Relevant Coursework: Machine Learning, P5JS, Unity & C#, Web
              Design (HTML, CSS, JS), Data Structures, Algorithms, Linear
              Algebra, Calculus.
            </li>
          </ul>
        </Item>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className="font-serif space-y-6 !mt-4">
      <h2 className="text-3xl font-bold font-serif">Work Experience</h2>
      <Item
        time="Apr 2023 - Nov 2023"
        title="NYU Shanghai Orientation Ambassador"
        subTitle="New Student Program, NYU Shanghai"
      >
        <ul className="list-disc list-inside text-gray-600">
          <li>
            Helped new students integrate into university life by guiding them
            through orientation activities.
          </li>
          <li>
            Successfully organized and executed a variety of orientation events
            and projects over several months.
          </li>
          <li>
            Developed strong leadership, organizational, and communication
            skills through active participation in orientation programs.
          </li>
        </ul>
      </Item>

      <Item
        time="Aug 2023 - Present"
        title="Band Manager"
        subTitle="NYU Shanghai Jazz Ensemble and Student Band"
      >
        <ul className="list-disc list-inside text-gray-600">
          <li>
            Serve as the Manager for both NYUSH Jazz Ensemble and the Student
            Band, concurrently holding a role as a musician.
          </li>
          <li>
            Proficiently oversee equipment management and ensure the smooth
            coordination of musical events.
          </li>
          <li>
            Demonstrate strong organizational skills in handling logistics and
            facilitating seamless execution of performances.
          </li>
        </ul>
      </Item>

      <Item
        time="May 2024 - Aug 2024"
        title="Audit Intern"
        subTitle="Baker Tilly International, Shanghai"
      >
        <ul className="list-disc list-inside text-gray-600">
          <li>
            Assisted in IT audit processes, supporting the review of clients’ IT
            systems, security policies, and compliance measures.
          </li>
          <li>
            Leveraged my computer science background to support IT audit tasks,
            including data processing, system access review, and simple
            automation scripts.
          </li>
          <li>
            Documentation and report support, compiling technical findings and
            assisting in drafting IT audit-related reports.
          </li>
        </ul>
      </Item>

      <Item
        time="May 2024 - Present"
        title="Student Research Fellow"
        subTitle="Digital Heritage Lab, NYU Shanghai"
      >
        <ul className="list-disc list-inside text-gray-600">
          <li>
            Developed digital heritage experiences using Unity, successfully
            reconstructing Zhenru Temple in AR glasses.
          </li>
          <li>
            Designed an educational cultural experience, enabling users to
            explore historical architecture interactively.
          </li>
          <li>
            Integrated 3D modeling and real-time rendering, optimizing
            performance for immersive AR applications.
          </li>
          <li>
            Contributed to digital cultural preservation research, applying AR
            technology to enhance heritage education.
          </li>
        </ul>
      </Item>
    </div>
  );
}

function Projects() {
  return (
    <div className="font-serif space-y-6 !mt-4">
      <h2 className="text-3xl font-bold font-serif">Projects</h2>
      <Item
        time="Apr 2024 - Aug 2024"
        title="Sanxingdui Digital Museum"
        subTitle={
          <>
            <a
              href="https://www.sanxingdui.online/"
              className="underline"
              target="_empty"
            >
              www.sanxingdui.online
            </a>
            <div>
              {"Deans' Undergraduate Research Fund (DURF), NYU Shanghai"}
            </div>
          </>
        }
      >
        <ul className="list-disc list-inside text-gray-600">
          <li>
            Built an interactive 3D museum using Three.js for real-time artifact
            rendering.
          </li>
          <li>
            Developed with React and MUI, ensuring a responsive and intuitive
            user experience.
          </li>
        </ul>
      </Item>

      <Item
        time="Sep 2024 - Dec 2024"
        title="Interactive Node-Based Music System"
        subTitle="React, Tone.js, React Flow, Zustand, Supabase, Next.js, TailwindCss, TypeScript"
      >
        <ul className="list-disc list-inside text-gray-600">
          <li>
            Built a real-time interactive music system where users modify sound
            via a node-based interface (React Flow).
          </li>
          <li>
            Integrated Tone.js for audio synthesis and Zustand for state
            management.
          </li>
        </ul>
      </Item>

      <Item
        time="Sep 2024 - Present"
        title="Personal Portfolio Website"
        subTitle={
          <>
            <a href="https://www.davidzheweiwang.com/" className="underline">
              www.davidzheweiwang.com
            </a>
            <div>React, Next.js, TailwindCss, TypeScript</div>
          </>
        }
      >
        <ul className="list-disc list-inside text-gray-600">
          <li>
            Developed a personal portfolio website using React, NextJS and
            Tailwind CSS.
          </li>
          <li>
            Implemented responsive design for optimal viewing on all devices.
          </li>
        </ul>
      </Item>
    </div>
  );
}

function Skills() {
  return (
    <div className="font-serif space-y-6 !mt-4">
      <h2 className="text-3xl font-bold font-serif">Skills</h2>

      <div className="flex flex-row space-x-8">
        <div className="w-1/2">
          <h3 className="text-2xl font-semibold">Tech Stack</h3>
          <div className="py-2" />
          <div>
            <h4 className="text-base font-semibold">Programming Languages</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>C++, C#, C, Pascal, Python, JavaScript</li>
            </ul>
          </div>
          <div className="py-1" />
          <div>
            <h4 className="text-base font-semibold">Web Development</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                HTML, CSS, JS, TypeScript, P5JS, Supabase, React, Next.js,
                TailwindCSS
              </li>
              <li>
                Supabase, MUI, Shadcn, reactflow, P5JS, Three.js, and other
                libraries
              </li>
              <li>
                Proficient in building responsive and interactive web
                applications
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/2">
          <h3 className="text-2xl font-semibold">Soft Skills</h3>
          <div className="py-2" />
          <div>
            <h4 className="text-base font-semibold">Languages</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>Chinese (Native)</li>
              <li>English (Fluent)</li>
            </ul>
          </div>
          <div className="py-1" />
          <div>
            <h4 className="text-base font-semibold">Game Development</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>Unity and GameMaker</li>
            </ul>
          </div>
          <div className="py-1" />
          <div>
            <h4 className="text-base font-semibold">Interests</h4>
            <p className="text-gray-600">
              Professionally trained Jazz Musician. Multi-instruments player.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="border-t relative">
      <div className="absolute -top-[2px] left-0 w-16 border-t-4 border-gray-600 h-1 z-50 rounded-full" />
    </div>
  );
}

export default function Resume() {
  return (
    <div className="mx-auto p-8 space-y-8 max-w-[80vw] print:max-w-[100vw]">
      <Profile />

      <Divider />
      <Education />

      <Divider />
      <Experience />

      <Divider />
      <Projects />

      <Divider />
      <Skills />
    </div>
  );
}
