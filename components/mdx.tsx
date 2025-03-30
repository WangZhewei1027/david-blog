import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import React from "react";
import Gallery from "./gallery";
import TwoColumns from "./two-columns";

function Table({ data }) {
  const headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props) {
  const href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props) {
  return (
    <div className="flex flex-col items-center mt-2 mb-8 space-y-4">
      <Image {...props} alt={props.alt} src={props.src} className="shadow-lg" />
      <p className="text-center italic">{props.alt}</p>
    </div>
  );
}

function Code({ children, ...props }) {
  const codeHTML = highlight(children as string);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function customImg(props) {
  return (
    <span className="flex flex-col items-center mt-2 mb-8 space-y-4">
      <Image
        {...props}
        alt={props.alt}
        src={props.src}
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto object-contain
          w-full max-w-full
          md:max-w-[100%] 
          [aspect-ratio:auto]
          [max-height:80vh]
          [max-width:66%]
          portrait:max-w-[400px]"
      />
      {props.alt && (
        <span className="text-center italic block">{props.alt}</span>
      )}
    </span>
  );
}

export const components = {
  img: customImg,
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
  Gallery,
  TwoColumns,
};

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
