import type { MDXComponents } from "mdx/types";
import React from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings (h1 - h6)
    h1: ({ children }) => (
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          borderBottom: "1px solid #eaeaea",
          paddingBottom: "0.3rem",
          marginBottom: "1rem",
        }}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          borderBottom: "1px solid #eaeaea",
          paddingBottom: "0.3rem",
          marginBottom: "1rem",
        }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 style={{ fontSize: "1rem", fontWeight: "bold" }}>{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 style={{ fontSize: "0.875rem", fontWeight: "bold" }}>{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 style={{ fontSize: "0.85rem", fontWeight: "bold", color: "#6a737d" }}>
        {children}
      </h6>
    ),

    // Paragraph
    p: ({ children }) => (
      <p style={{ lineHeight: "1.6", marginBottom: "1rem" }}>{children}</p>
    ),

    // Anchor Links
    a: ({ children, href }) => (
      <a href={href} style={{ color: "#0366d6", textDecoration: "none" }}>
        {children}
      </a>
    ),

    // Blockquote
    blockquote: ({ children }) => (
      <blockquote
        style={{
          borderLeft: "4px solid #dfe2e5",
          paddingLeft: "1rem",
          color: "#6a737d",
          fontStyle: "italic",
          margin: "1rem 0",
        }}
      >
        {children}
      </blockquote>
    ),

    // Lists
    ul: ({ children }) => (
      <ul
        style={{
          listStyleType: "disc",
          marginLeft: "1.5rem",
          marginBottom: "1rem",
        }}
      >
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol
        style={{
          listStyleType: "decimal",
          marginLeft: "1.5rem",
          marginBottom: "1rem",
        }}
      >
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li style={{ marginBottom: "0.5rem" }}>{children}</li>
    ),

    // Task List (GitHub Flavored Markdown)
    input: ({ type }) =>
      type === "checkbox" ? (
        <input
          type="checkbox"
          style={{ marginRight: "0.5rem", transform: "scale(1.2)" }}
          disabled
        />
      ) : null,

    // Preformatted text (Code blocks)
    pre: ({ children }) => (
      <pre
        style={{
          background: "#f6f8fa",
          padding: "1rem",
          borderRadius: "6px",
          overflowX: "auto",
          fontSize: "0.875rem",
          fontFamily: "'Fira Code', monospace",
          marginBottom: "1.5rem",
        }}
      >
        {children}
      </pre>
    ),

    // Inline code
    code: ({ children }) => (
      <code
        style={{
          backgroundColor: "#f6f8fa",
          padding: "0.2rem 0.4rem",
          borderRadius: "3px",
          fontFamily: "'Fira Code', monospace",
          fontSize: "0.875rem",
        }}
      >
        {children}
      </code>
    ),

    // Tables
    table: ({ children }) => (
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "1rem",
          border: "1px solid #e1e4e8",
        }}
      >
        {children}
      </table>
    ),
    thead: ({ children }) => (
      <thead
        style={{
          backgroundColor: "#f6f8fa",
        }}
      >
        {children}
      </thead>
    ),
    tbody: ({ children }) => <tbody>{children}</tbody>,
    tr: ({ children }) => (
      <tr
        style={{
          borderTop: "1px solid #e1e4e8",
        }}
      >
        {children}
      </tr>
    ),
    th: ({ children }) => (
      <th
        style={{
          padding: "0.6rem",
          border: "1px solid #e1e4e8",
          textAlign: "left",
        }}
      >
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td
        style={{
          padding: "0.6rem",
          border: "1px solid #e1e4e8",
        }}
      >
        {children}
      </td>
    ),

    // Horizontal rule
    hr: () => <hr style={{ border: "1px solid #eaeaea", margin: "2rem 0" }} />,

    // Images
    img: ({ src, alt }) => (
      <img
        src={src}
        alt={alt}
        style={{ maxWidth: "100%", height: "auto", marginBottom: "1.5rem" }}
      />
    ),

    // Strong/Bold text
    strong: ({ children }) => (
      <strong style={{ fontWeight: "bold" }}>{children}</strong>
    ),

    // Emphasis/Italic text
    em: ({ children }) => <em style={{ fontStyle: "italic" }}>{children}</em>,

    ...components,
  };
}
