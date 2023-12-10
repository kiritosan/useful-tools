import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';


const CodeDisplay: React.FC<{ code: string; language: string }> = ({ code, language }) => {

    return (
        <>
            <SyntaxHighlighter
                language={language}
                style={prism}
            >
                {code}
            </SyntaxHighlighter>
        </>
    );
};

export default CodeDisplay;