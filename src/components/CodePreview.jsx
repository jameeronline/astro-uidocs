import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
//import { atom, atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
//import atom from 'react-syntax-highlighter/dist/esm/styles/prism';
//import atomDark from 'react-syntax-highlighter/dist/esm/styles/prism';
import { default as oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism/one-light';
import { default as oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism/one-dark';


//components
import { Switch } from '@headlessui/react'

const CodePreview = ({ children, title = "Component Preview", htmlCode, cssCode, jsCode }) => {    
    const [tab, setTab] = useState("Preview");
    const [dir, setDir] = useState("ltr");
    const [theme, setTheme] = useState("light");
    const [copied, setCopied] = useState("");

    const copyToClipboard = async (code, type) => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(type);
            setTimeout(() => setCopied(""), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    const getCodeContent = () => {
        switch (tab) {
            case "HTML":
                return htmlCode;
            case "CSS":
                return cssCode;
            case "JS":
                return jsCode;
            default:
                return "";
        }
    };

    return (
        <div className="code-preview-panel my-6 border border-gray-200 rounded-lg">
            {/* Code Header Block */}
            <div className="flex items-center justify-between bg-gray-200/30 px-4">
                <h2 className="text-base font-semibold h-14 flex items-center">{title}</h2>

                <div className="flex gap-2 items-center m-0">
                    {["Preview", "HTML", "CSS", "JS"].map((t) => (
                        <a
                            key={t}
                            onClick={() => setTab(t)}
                            className={`px-2 py-1 text-sm text-gray-900 bg-transparent border-0 cursor-pointer focus:outline-none ${
                                tab === t ? "font-bold border-b-2 border-blue-600" : ""
                            }`}
                            type="button"
                        >
                            {t}
                        </a>
                    ))}

                    {tab === "Preview" && (
                        <>
                            
                                <Switch
                                    checked={dir === "rtl" ? true : false}
                                    onChange={() => setDir(dir === "ltr" ? "rtl" : "ltr")}
                                    className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-green-600"
                                >
                                    <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />
                                </Switch>
                                <span>{dir === "rtl" ? "RTL" : "LTR"}</span>
                                <Switch
                                    checked={theme === "dark" ? true : false}
                                    onChange={() => setTheme(theme === "light" ? "dark" : "light")}
                                    className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-green-600"
                                >
                                    <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />
                                </Switch>
                                <span>{theme === "dark" ? "Dark" : "Light"}</span>
                        </>
                    )}

                    {["HTML", "CSS", "JS"].includes(tab) && (
                        <a
                            onClick={() => copyToClipboard(getCodeContent(), tab)}
                            className={`flex items-center gap-1 px-2 py-1 rounded text-sm border ml-auto ${
                                copied === tab
                                    ? "bg-emerald-500 text-white border-emerald-500"
                                    : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                            } transition`}
                            type="button"
                        >
                            {copied === tab ? "✓ Copied!" : "📋 Copy"}
                        </a>
                    )}
                </div>
            </div>
            
            {/* Code Content Block */}
            <div
                dir={tab === "Preview" ? dir : "ltr"}
                className={
                    tab === "Preview"
                        ? `w-full p-4 ${
                              theme === "dark"
                                  ? "dark bg-gray-900 text-white "
                                  : "bg-white text-gray-900 "
                          }`
                        : "relative"
                }


            >
                {tab === "Preview" && (
                    <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
                )}
                {tab === "HTML" && (
                    <div className="relative">
                        <SyntaxHighlighter 
                            language="html"
                            style={theme === "dark" ? oneDark : oneLight}
                            showLineNumbers={true}
                            customStyle={{ margin: 0, borderRadius: '0.5rem' }}
                        >
                            {htmlCode}
                        </SyntaxHighlighter>
                    </div>
                )}
                {tab === "CSS" && (
                    <div className="relative">
                        <SyntaxHighlighter 
                            language="css" 

                            style={theme === "dark" ? oneDark : oneLight}
                            showLineNumbers={true}
                            customStyle={{ margin: 0, borderRadius: '0.5rem' }}
                        >
                            {cssCode}
                        </SyntaxHighlighter>
                    </div>
                )}
                {tab === "JS" && (
                    <div className="relative">
                        <SyntaxHighlighter 
                            language="jsx" 

                            style={theme === "dark" ? oneDark : oneLight}
                            showLineNumbers={true}
                            customStyle={{ margin: 0, borderRadius: '0.5rem' }}
                        >
                            {jsCode}
                        </SyntaxHighlighter>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CodePreview;