import React from "react";

export default function Page() {
  return (
    <div>
      <h1>GitHub Flavored Markdown Test Page</h1>

      <h2>Headers</h2>
      <h1>This is H1</h1>
      <h2>This is H2</h2>
      <h3>This is H3</h3>
      <h4>This is H4</h4>

      <h2>Paragraph and Inline Code</h2>
      <p>
        This is a paragraph with some <code>inline code</code> to demonstrate
        the styles.
      </p>

      <h2>Blockquote</h2>
      <blockquote>
        &quot;This is a blockquote example to show the styling.&quot;
      </blockquote>

      <h2>Code Block</h2>
      <pre>
        <code>{`const example = () => {
  console.log('This is a code block!');
};`}</code>
      </pre>

      <h2>Lists</h2>
      <h3>Unordered List</h3>
      <ul>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
      </ul>

      <h3>Ordered List</h3>
      <ol>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
      </ol>

      <h2>Tables</h2>
      <table>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1, Cell 1</td>
            <td>Row 1, Cell 2</td>
          </tr>
          <tr>
            <td>Row 2, Cell 1</td>
            <td>Row 2, Cell 2</td>
          </tr>
        </tbody>
      </table>

      <h2>Images</h2>
      <img src="https://via.placeholder.com/300" alt="Placeholder Image" />

      <h2>Horizontal Rule</h2>

      <h2>Text Styling</h2>
      <p>
        <strong>Bold text</strong>, <em>italic text</em>, and{" "}
        <del>strikethrough text</del>.
      </p>

      <h2>Links</h2>
      <p>
        Visit <a href="https://github.com">GitHub</a> for more information.
      </p>
    </div>
  );
}
