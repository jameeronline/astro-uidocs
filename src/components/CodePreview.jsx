'use client'; // Required for client-side rendering in Astro

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

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
                            <a
                                onClick={() => setDir(dir === "ltr" ? "rtl" : "ltr")}
                                className={`px-2 py-1 text-sm text-gray-900 bg-gray-100 rounded hover:bg-gray-200 transition ml-auto ${
                                    dir === "rtl" ? "bg-green-600 text-white hover:bg-green-700" : ""
                                }`}
                                type="button"
                            >
                                {dir === "rtl" ? "RTL" : "LTR"}
                            </a>
                            <a
                                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                                
                                className={`px-2 py-1 text-gray-900 text-sm bg-gray-100 rounded hover:bg-gray-200 transition ${
                                    theme === "dark" ? "bg-green-600 text-white hover:bg-green-700" : ""
                                }`}
                                type="button"
                            >
                                {theme === "dark" ? "Dark" : "Light"}
                            </a>
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
                        >
                            {htmlCode}
                        </SyntaxHighlighter>
                    </div>
                )}
                {tab === "CSS" && (
                    <div className="relative">
                        <SyntaxHighlighter 
                            language="css" 
                        >
                            {cssCode}
                        </SyntaxHighlighter>
                    </div>
                )}
                {tab === "JS" && (
                    <div className="relative">
                        <SyntaxHighlighter 
                            language="jsx" 
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