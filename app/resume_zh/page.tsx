import fs from "fs/promises";
import path from "path";
import React from "react";
import Image from "next/image";
import {
  MdLocationOn,
  MdEmail,
  MdLocalPhone,
  MdArrowOutward,
} from "react-icons/md";

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
      <div className="text-xl font-serif font-medium mr-8 w-56 shrink-0">
        {time}
      </div>
      <div>
        <h3 className="text-xl font-black">{title}</h3>
        {subTitle && <div className="text-gray-950 text-lg">{subTitle}</div>}
        <div className="py-1" />
        {children}
      </div>
    </div>
  );
}

function Profile({
  name,
  profile,
}: {
  name: { chinese: string; english: string };
  profile: {
    photo: string;
    job_application: string;
    phone: string;
    email: string;
    website: string;
    location: string[];
  };
}) {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <div className="text-6xl font-serif font-bold mt-auto">
          {name.chinese}
        </div>
        <div className="text-2xl font-serif font-base mt-auto text-gray-600">
          英语名: {name.english}
        </div>
      </div>
      <div className="ml-16">
        <Image
          src="/assets/profile_photo.jpg"
          alt={profile.photo}
          className="rounded-full"
          width={150}
          height={150}
        />
      </div>
      <div className="ml-auto space-y-1">
        <div>
          <span className="ml-2 align-bottom text-gray-700">
            <strong>应聘职位：</strong>
            {profile.job_application}
          </span>
        </div>
      </div>
      <div className="ml-auto space-y-1">
        <div>
          <MdLocalPhone className="inline-block h-6 w-6" />
          <span className="ml-2 align-bottom text-gray-700">
            {profile.phone}
          </span>
        </div>
        <div>
          <MdEmail className="inline-block h-6 w-6" />
          <span className="ml-2 align-bottom text-gray-700">
            {profile.email}
          </span>
        </div>
        <div>
          <MdArrowOutward className="inline-block h-6 w-6" />
          <a
            className="ml-2 align-bottom underline text-gray-700"
            href={`https://${profile.website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {profile.website}
          </a>
        </div>
        <div>
          <MdLocationOn className="inline-block h-6 w-6" />
          <span className="ml-2 align-bottom text-gray-700">
            {profile.location.join(" / ")}
          </span>
        </div>
      </div>
    </div>
  );
}

function Education({
  education,
}: {
  education: Array<{
    school: string;
    degree: string;
    major: string;
    minor: string;
    gpa: string;
    period: string;
    graduation: string;
    courses: string[];
  }>;
}) {
  return (
    <div className="font-serif !mt-4">
      <h2 className="text-3xl font-black mb-6 font-serif">教育背景</h2>
      <div className="flex flex-col">
        {education.map((edu, index) => (
          <Item
            key={index}
            time={edu.period}
            title={edu.school}
            subTitle={`${edu.degree} | 主修: ${edu.major} | 辅修: ${edu.minor}`}
          >
            <ul className="list-disc list-inside text-gray-600">
              <li>累计GPA: {edu.gpa}</li>
              <li>预计毕业时间: {edu.graduation}</li>
              <li>相关课程: {edu.courses.join(", ")}</li>
            </ul>
          </Item>
        ))}
      </div>
    </div>
  );
}

function Experience({
  work_experience,
}: {
  work_experience: Array<{
    role: string;
    organization: string;
    period: string;
    details: string[];
  }>;
}) {
  return (
    <div className="font-serif space-y-6 !mt-4">
      <h2 className="text-3xl font-black font-serif">工作经验</h2>
      {work_experience.map((exp, index) => (
        <Item
          key={index}
          time={exp.period}
          title={exp.role}
          subTitle={exp.organization}
        >
          <ul className="list-disc list-inside text-gray-600">
            {exp.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </Item>
      ))}
    </div>
  );
}

function Projects({
  projects,
}: {
  projects: Array<{
    name: string;
    link?: string;
    tech_stack?: string[];
    period: string;
    details: string[];
  }>;
}) {
  return (
    <div className="font-serif space-y-6 !mt-4">
      <h2 className="text-3xl font-black font-serif">项目经历</h2>
      {projects.map((proj, index) => (
        <Item
          key={index}
          time={proj.period}
          title={proj.name}
          subTitle={
            proj.link ? (
              <>
                <a
                  href={
                    proj.link.startsWith("http")
                      ? proj.link
                      : `https://${proj.link}`
                  }
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {proj.link}
                </a>
                {proj.tech_stack && (
                  <div>
                    {Array.isArray(proj.tech_stack)
                      ? proj.tech_stack.join(", ")
                      : proj.tech_stack}
                  </div>
                )}
              </>
            ) : null
          }
        >
          <ul className="list-disc list-inside text-gray-600">
            {proj.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </Item>
      ))}
    </div>
  );
}

function Skills({
  skills,
  interests,
}: {
  skills: {
    programming_languages: string[];
    web_development: string[];
    game_development: string[];
    soft_skills: string[];
  };
  interests: string;
}) {
  return (
    <div className="font-serif space-y-6 !mt-4">
      <h2 className="text-3xl font-black font-serif">技能</h2>
      <div className="flex flex-row space-x-8">
        <div className="w-1/2">
          <h3 className="text-2xl font-semibold">技术栈</h3>
          <div className="py-1" />
          <div>
            <h4 className="text-base font-semibold">编程语言</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>{skills.programming_languages.join(", ")}</li>
            </ul>
          </div>
          <div className="py-3" />
          <div>
            <h4 className="text-base font-semibold">网页开发</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>{skills.web_development.join(", ")}</li>
            </ul>
          </div>
        </div>
        <div className="w-1/2">
          <h3 className="text-2xl font-semibold">软技能</h3>
          <div className="py-1" />
          <div>
            <h4 className="text-base font-semibold">语言</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>{skills.soft_skills.join(", ")}</li>
            </ul>
          </div>
          <div className="py-3" />
          <div>
            <h4 className="text-base font-semibold">游戏开发</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>{skills.game_development.join(", ")}</li>
            </ul>
          </div>
          <div className="py-3" />
          <div>
            <h4 className="text-base font-semibold">兴趣爱好</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>{interests}</li>
            </ul>
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

export default async function Resume() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "resume",
    "resume_zh.json"
  );
  const fileContents = await fs.readFile(filePath, "utf8");
  const resumeData = JSON.parse(fileContents);

  return (
    <div className="mx-auto p-8 space-y-8 max-w-[70vw] print:max-w-[100vw]">
      <Profile name={resumeData.name} profile={resumeData.profile} />
      <Divider />
      <Education education={resumeData.education} />
      <Divider />
      <Experience work_experience={resumeData.work_experience} />
      <Divider />
      <Projects projects={resumeData.projects} />
      <Divider />
      <Skills skills={resumeData.skills} interests={resumeData.interests} />
    </div>
  );
}
