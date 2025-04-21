"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import {
  MdLocationOn,
  MdEmail,
  MdLocalPhone,
  MdArrowOutward,
} from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import resumeDataZh from "@/public/resume/resume_zh.json";
import resumeDataEn from "@/public/resume/resume_en.json";
import i18n from "@/app/i18n";
import { Trans } from "react-i18next";

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
    <div className={`flex flex-col md:flex-row`}>
      <div className="mr-8 hidden w-56 shrink-0 font-serif text-xl font-medium md:block">
        {time}
      </div>
      <div>
        <h3 className="text-xl font-black">{title}</h3>
        <div className="mr-8 w-56 shrink-0 text-lg text-gray-950 md:hidden">
          {time}
        </div>
        {subTitle && <div className="text-lg text-gray-950">{subTitle}</div>}
        <div className="py-1" />
        {children}
      </div>
    </div>
  );
}

function Profile({
  name,
  profile,
  lang,
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
  lang: string;
}) {
  return (
    <div className="flex flex-col space-y-8 md:flex-row md:justify-between md:space-y-0">
      <div className="">
        <div
          className={`mt-auto font-serif font-bold ${lang === "en" ? "text-5xl" : "text-6xl"}`}
        >
          {name.chinese}
        </div>
        <div className="font-base mt-4 font-serif text-2xl text-gray-600">
          <Trans i18nKey="alias"></Trans>: {name.english}
        </div>
      </div>
      <div className={`${lang === "en" ? "hidden" : "block"}`}>
        <Image
          src="/assets/profile_photo.jpg"
          alt={profile.photo}
          className="rounded-full"
          width={150}
          height={150}
        />
      </div>
      <div className="space-y-1">
        <div>
          <span className="align-bottom text-gray-700">
            <strong>
              <Trans i18nKey="position-applying-for"></Trans>:{" "}
            </strong>
            {profile.job_application}
          </span>
        </div>
      </div>
      <div className="space-y-1">
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
            className="ml-2 align-bottom text-gray-700 underline"
            href={`https://${profile.website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {profile.website}
          </a>
        </div>
        <div>
          <FaGithub className="inline-block h-6 w-6" />
          <a
            className="ml-2 align-bottom text-gray-700 underline"
            href={`https://github.com/WangZhewei1027`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {"github.com/WangZhewei1027"}
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
    <div className="!mt-4 font-serif">
      <h2 className="mb-6 font-serif text-3xl font-black">
        <Trans i18nKey="education"></Trans>
      </h2>
      <div className="flex flex-col">
        {education.map((edu, index) => (
          <Item
            key={index}
            time={edu.period}
            title={edu.school}
            subTitle={
              <>
                {edu.degree} | <Trans i18nKey="major" />: {edu.major} |{" "}
                <Trans i18nKey="minor" />: {edu.minor}
              </>
            }
          >
            <ul className="list-inside list-disc text-gray-600">
              <li>
                <Trans i18nKey="cumulative-gpa"></Trans>: {edu.gpa}
              </li>
              <li>
                <Trans i18nKey="expected-graduation"></Trans>: {edu.graduation}
              </li>
              <li>
                <Trans i18nKey="relevant-coursework"></Trans>:{" "}
                {edu.courses.join(", ")}
              </li>
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
    <div className="!mt-4 space-y-6 font-serif">
      <h2 className="font-serif text-3xl font-black">
        <Trans i18nKey="work-experience"></Trans>
      </h2>
      {work_experience.map((exp, index) => (
        <Item
          key={index}
          time={exp.period}
          title={exp.role}
          subTitle={exp.organization}
        >
          <ul className="list-inside list-disc text-gray-600">
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
    <div className="!mt-4 space-y-6 font-serif">
      <h2 className="font-serif text-3xl font-black">
        <Trans i18nKey="projects"></Trans>
      </h2>
      {projects.map((proj, index) => (
        <Item
          key={index}
          time={proj.period}
          title={proj.name}
          subTitle={
            <>
              {proj.link && (
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
              )}

              {proj.tech_stack && (
                <div>
                  {Array.isArray(proj.tech_stack)
                    ? proj.tech_stack.join(", ")
                    : proj.tech_stack}
                </div>
              )}
            </>
          }
        >
          <ul className="list-inside list-disc text-gray-600">
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
    <div className="!mt-4 space-y-6 font-serif">
      <h2 className="font-serif text-3xl font-black">
        <Trans i18nKey="skills"></Trans>
      </h2>
      <div className="flex flex-row space-x-8">
        <div className="w-1/2">
          <h3 className="text-2xl font-semibold">
            <Trans i18nKey="tech-stack"></Trans>
          </h3>
          <div className="py-1" />
          <div>
            <h4 className="text-base font-semibold">
              <Trans i18nKey="programming-languages"></Trans>
            </h4>
            <ul className="list-inside list-disc text-gray-600">
              <li>{skills.programming_languages.join(", ")}</li>
            </ul>
          </div>
          <div className="py-3" />
          <div>
            <h4 className="text-base font-semibold">
              <Trans i18nKey="web-development"></Trans>
            </h4>
            <ul className="list-inside list-disc text-gray-600">
              <li>{skills.web_development.join(", ")}</li>
            </ul>
          </div>
        </div>
        <div className="w-1/2">
          <h3 className="text-2xl font-semibold">
            <Trans i18nKey="soft-skills"></Trans>
          </h3>
          <div className="py-1" />
          <div>
            <h4 className="text-base font-semibold">
              <Trans i18nKey="languages"></Trans>
            </h4>
            <ul className="list-inside list-disc text-gray-600">
              <li>{skills.soft_skills.join(", ")}</li>
            </ul>
          </div>
          <div className="py-3" />
          <div>
            <h4 className="text-base font-semibold">
              <Trans i18nKey="game-development"></Trans>
            </h4>
            <ul className="list-inside list-disc text-gray-600">
              <li>{skills.game_development.join(", ")}</li>
            </ul>
          </div>
          <div className="py-3" />
          <div>
            <h4 className="text-base font-semibold">
              <Trans i18nKey="interests"></Trans>
            </h4>
            <ul className="list-inside list-disc text-gray-600">
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
    <div className="relative border-t">
      <div className="absolute -top-[2px] left-0 z-50 h-1 w-16 rounded-full border-t-4 border-gray-600" />
    </div>
  );
}

// ↓↓↓ 接收 searchParams 来自 URL 查询参数
export default function Resume({
  searchParams,
}: {
  searchParams: { lang?: string };
}) {
  const lang = searchParams.lang || "en";
  const resumeData = lang === "zh" ? resumeDataZh : resumeDataEn;

  i18n.changeLanguage(lang);

  return (
    <div className="mx-auto min-h-screen max-w-5xl justify-center space-y-8 px-4 py-4 pt-8 sm:px-6 sm:pt-10 lg:px-8 print:max-w-none print:p-0">
      <Profile
        name={resumeData.name}
        profile={resumeData.profile}
        lang={lang}
      />
      <Divider />
      <Education education={resumeData.education} />
      <Divider />
      <Projects projects={resumeData.projects} />
      <Divider />
      <Experience work_experience={resumeData.work_experience} />
      <Divider />
      <Skills skills={resumeData.skills} interests={resumeData.interests} />
    </div>
  );
}
