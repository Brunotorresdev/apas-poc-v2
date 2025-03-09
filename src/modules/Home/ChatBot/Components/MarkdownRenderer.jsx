import { useEffect, useRef } from "react";
import { marked } from "marked";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const MarkdownRenderer = ({ markdownContent }) => {
  const renderedContent = marked(markdownContent, {
    highlight: function (code, lang) {
      return SyntaxHighlighter({ language: lang, children: code }).props
        .children;
    },
  });

  return (
    <div
      className="markdown-content"
      dangerouslySetInnerHTML={{ __html: renderedContent }}
    />
  );
};

export default MarkdownRenderer;
