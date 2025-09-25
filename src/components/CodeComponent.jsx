// src/components/CodeComponents.jsx
import React from 'react';

export const CodeHTML = ({ code }) => <div data-type="html">{code}</div>;
CodeHTML.displayName = 'CodeHTML';

export const CodeCSS = ({ code }) => <div data-type="css">{code}</div>;
CodeCSS.displayName = 'CodeCSS';

export const CodeJS = ({ code }) => <div data-type="js">{code}</div>;
CodeJS.displayName = 'CodeJS';