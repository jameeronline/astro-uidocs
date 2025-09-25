# React Syntax Highlighter - Available Themes

## For Prism (recommended)
```javascript
// Popular Prism themes that work well
import { 
  vscDarkPlus,    // VS Code Dark+ theme
  vs,             // VS Code Light theme
  tomorrow,       // Tomorrow theme
  okaidia,        // Okaidia theme
  prism,          // Default Prism theme
  atomDark,       // Atom Dark theme
  base16AteliersulphurpoolLight, 
  cb,
  coldarkCold,
  coldarkDark,
  coy,
  darcula,
  dracula,
  duotoneDark,
  duotoneEarth,
  duotoneForest,
  duotoneLight,
  duotoneSea,
  duotoneSpace,
  funky,
  ghcolors,
  hopscotch,
  lucario,
  materialDark,
  materialLight,
  materialOceanic,
  nord,
  oneDark,
  oneLight,
  pojoaque,
  shadesOfPurple,
  solarizedlight,
  synthwave84,
  twilight,
  xonokai
} from 'react-syntax-highlighter/dist/esm/styles/prism';
```

## For Highlight.js (alternative)
```javascript
import { 
  a11yDark, 
  a11yLight,
  agate,
  androidstudio,
  arduinoLight,
  arta,
  ascetic,
  atelierCaveDark,
  atelierCaveLight,
  atomOneDark,
  atomOneLight,
  brown,
  codepen,
  colorBrewer,
  darcula,
  dark,
  default as hljs,
  docco,
  dracula,
  far,
  foundation,
  githubGist,
  github,
  gml,
  googlecode,
  gradientDark,
  grayscale,
  gruvboxDark,
  gruvboxLight,
  hopscotch,
  hybrid,
  idea,
  irBlack,
  isblEditorDark,
  isblEditorLight,
  kimbieDark,
  kimbieLight,
  lightfair,
  magula,
  monoBlue,
  monokaiSublime,
  monokai,
  nord,
  obsidian,
  ocean,
  paraisoDark,
  paraisoLight,
  pojoaque,
  purebasic,
  qtcreatorDark,
  qtcreatorLight,
  railscasts,
  rainbow,
  routeros,
  schoolBook,
  shadesOfPurple,
  solarizedDark,
  solarizedLight,
  sunburst,
  tomorrowNightBlue,
  tomorrowNightBright,
  tomorrowNightEighties,
  tomorrowNight,
  tomorrow,
  vs2015,
  vs,
  xcode,
  xt256,
  zenburn
} from 'react-syntax-highlighter/dist/esm/styles/hljs';
```

## Usage Examples

```javascript
// Using Prism with different themes
<SyntaxHighlighter 
    language="javascript" 
    style={isDark ? vscDarkPlus : vs}
>
    {code}
</SyntaxHighlighter>

// Using Highlight.js
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

<SyntaxHighlighter 
    language="javascript" 
    style={atomOneDark}
>
    {code}
</SyntaxHighlighter>
```

## Recommended Combinations

1. **For Dark/Light mode**: `vscDarkPlus` and `vs`
2. **Modern look**: `oneDark` and `oneLight`  
3. **Popular choice**: `atomDark` and `prism`
4. **GitHub style**: `github` (hljs) or `ghcolors` (prism)