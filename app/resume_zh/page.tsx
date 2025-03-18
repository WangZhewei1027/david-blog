import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
import React from "react";
import Image from "next/image";

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

function Profile() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <div className="text-6xl font-serif font-bold mt-auto">王哲玮</div>
        <div className="text-2xl font-serif font-base mt-auto text-gray-600">
          英语名: David
        </div>
      </div>
      <div className="ml-16">
        <Image
          src="/assets/profile_photo.jpg"
          alt="David's profile photo"
          className="rounded-full"
          width={150}
          height={150}
        />
      </div>
      <div className="ml-auto space-y-1">
        <div>
          <span className="ml-2 align-bottom text-gray-700">
            <strong>应聘职位：</strong>前端实习生
          </span>
        </div>
        {/* <div>
          <span className="ml-2 align-bottom text-gray-700">
            <strong>实习时间：</strong>2025年6月20日 - 2025年8月20日
          </span>
        </div> */}
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
          <span className="ml-2 align-bottom text-gray-700">上海 / 纽约</span>
        </div>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className="font-serif !mt-4">
      <h2 className="text-3xl font-black mb-6 font-serif">教育背景</h2>
      <div className="flex flex-col">
        <Item
          time="2024年9月 - 2026年5月"
          title="上海纽约大学"
          subTitle="理学学士 | 主修: 计算机科学 | 辅修: 互动媒体艺术"
        >
          <ul className="list-disc list-inside text-gray-600">
            <li>累计GPA: 3.5/4.0</li>
            <li>预计毕业时间: 2026年5月</li>
            <li>
              相关课程: 机器学习, P5JS, Unity & C#, 网页设计 (HTML, CSS, JS),
              数据结构, 算法, 线性代数, 微积分。
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
      <h2 className="text-3xl font-black font-serif">工作经验</h2>
      <Item
        time="2023年4月 - 2023年11月"
        title="上海纽约大学迎新大使"
        subTitle="新生项目部，上海纽约大学"
      >
        <ul className="list-disc list-inside text-gray-600">
          <li>通过指导新生参加迎新活动，帮助新生融入大学生活。</li>
          <li>成功组织并执行了多种多样的迎新活动和项目，持续数月。</li>
          <li>通过积极参与迎新项目，培养了强大的领导、组织和沟通能力。</li>
        </ul>
      </Item>

      <Item
        time="2023年8月 - 至今"
        title="乐队负责人"
        subTitle="上海纽约大学爵士乐团和学生乐队"
      >
        <ul className="list-disc list-inside text-gray-600">
          <li>担任上海纽约大学爵士乐团和学生乐队的负责人，同时兼任乐手。</li>
          <li>多次协调组织校内外演出，多次参加昆山杜克大学音乐节。</li>
          <li>展示出色的组织能力，处理后勤工作并促进演出的顺利进行。</li>
        </ul>
      </Item>

      <Item
        time="2024年5月 - 2024年8月"
        title="审计实习生"
        subTitle="Baker Tilly International, 上海"
      >
        <ul className="list-disc list-inside text-gray-600">
          <li>协助IT审计流程，支持客户IT系统、安全政策和合规措施的审查。</li>
          <li>
            利用我的计算机科学背景支持IT审计任务，包括数据处理、系统访问审查和简单的自动化脚本。
          </li>
          <li>文档和报告支持，编写技术发现并协助起草IT审计相关报告。</li>
        </ul>
      </Item>

      <Item
        time="2024年5月 - 至今"
        title="学生研究员"
        subTitle="数字遗产实验室，上海纽约大学"
      >
        <ul className="list-disc list-inside text-gray-600">
          <li>使用Unity开发数字遗产体验，成功在AR眼镜中重建真如寺。</li>
          <li>设计了一个教育文化体验，使用户能够互动地探索历史建筑。</li>
          <li>集成3D建模和实时渲染，优化性能以实现沉浸式AR应用。</li>
          <li>为数字文化保护研究做出贡献，应用AR技术增强遗产教育。</li>
        </ul>
      </Item>
    </div>
  );
}

function Projects() {
  return (
    <div className="font-serif space-y-6 !mt-4">
      <h2 className="text-3xl font-black font-serif">项目经历</h2>
      <Item
        time="2024年4月 - 2024年8月"
        title="三星堆数字博物馆"
        subTitle={
          <>
            <a
              href="https://www.sanxingdui.online/"
              className="underline"
              target="_empty"
            >
              www.sanxingdui.online
            </a>
            <div>{"院长本科生研究基金 (DURF)，上海纽约大学"}</div>
          </>
        }
      >
        <ul className="list-disc list-inside text-gray-600">
          <li>使用Three.js构建了一个交互式3D博物馆，实现了文物的实时渲染。</li>
          <li>使用React和MUI开发，确保了响应式和直观的用户体验。</li>
        </ul>
      </Item>

      <Item
        time="2024年9月 - 2024年12月"
        title="交互式节点音乐系统"
        subTitle="React, Tone.js, React Flow, Zustand, Supabase, Next.js, TailwindCss, TypeScript"
      >
        <ul className="list-disc list-inside text-gray-600">
          <li>
            构建了一个实时交互音乐系统，用户可以通过节点界面（React
            Flow）修改声音。
          </li>
          <li>集成了Tone.js进行音频合成，并使用Zustand进行状态管理。</li>
        </ul>
      </Item>

      <Item
        time="2024年9月 - 至今"
        title="个人作品集网站"
        subTitle={
          <>
            <a
              href="https://www.davidzheweiwang.com/"
              className="underline"
              target="_empty"
            >
              www.davidzheweiwang.com
            </a>
            <div>React, Next.js, TailwindCSS, TypeScript</div>
          </>
        }
      >
        <ul className="list-disc list-inside text-gray-600">
          <li>使用React, NextJS和Tailwind CSS开发了个人作品集网站。</li>
          <li>实现了响应式设计，以便在所有设备上获得最佳浏览体验。</li>
        </ul>
      </Item>

      <Item
        time="2024年12月 - 至今"
        title="NYU GO"
        subTitle={
          <>
            <div>React, Next.js, TailwindCSS, TypeScript, Zustand</div>
          </>
        }
      >
        <ul className="list-disc list-inside text-gray-600">
          <li>
            独立开发并部署了一款 PWA 校车追踪应用，使用 Next.js、Tailwind CSS 和
            WebSocket，提供流畅的实时位置更新和预计到达时间。
          </li>
          <li>
            优化了交互体验，采用 服务器端渲染（SSR） 提高加载速度，并通过 PWA
            特性支持移动端便捷访问。
          </li>
          <li>
            该应用已实际投入使用，有效减少乘客等待时间，提升通勤效率和用户体验。
          </li>
        </ul>
      </Item>
    </div>
  );
}

function Skills() {
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
              <li>C++, C#, C, Pascal, Python, JavaScript</li>
            </ul>
          </div>
          <div className="py-3" />
          <div>
            <h4 className="text-base font-semibold">网页开发</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                HTML, CSS, JS, TypeScript, P5JS, Supabase, React, Next.js,
                TailwindCSS
              </li>
              <li>
                Supabase, MUI, Shadcn, reactflow, P5JS, Three.js, 及其他库
              </li>
              <li>熟练构建响应式和交互式网页应用</li>
            </ul>
          </div>
        </div>
        <div className="w-1/2">
          <h3 className="text-2xl font-semibold">软技能</h3>
          <div className="py-1" />
          <div>
            <h4 className="text-base font-semibold">语言</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>中文 (母语)</li>
              <li>英语 (流利)</li>
            </ul>
          </div>
          <div className="py-3" />
          <div>
            <h4 className="text-base font-semibold">游戏开发</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>Unity 和 GameMaker</li>
            </ul>
          </div>
          <div className="py-3" />
          <div>
            <h4 className="text-base font-semibold">兴趣爱好</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>受过专业训练的爵士音乐人。多乐器演奏者。</li>
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

export default function Resume() {
  return (
    <div className="mx-auto p-8 space-y-8 max-w-[70vw] print:max-w-[100vw]">
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
