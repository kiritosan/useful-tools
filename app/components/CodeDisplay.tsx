import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeDisplayProps {
  code: string;
  language: string;
}

const CodeDisplay: React.FC<CodeDisplayProps> = ({ code, language }) => {
  return (
    <>
      <SyntaxHighlighter language={language} style={prism}>
        {code}
      </SyntaxHighlighter>
    </>
  );
};

export default CodeDisplay;
