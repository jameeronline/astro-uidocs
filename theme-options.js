// Alternative theme imports you can try:

// Option 1: GitHub-style themes
import { ghcolors, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Option 2: Atom-inspired themes  
import { atomDark, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Option 3: Material Design themes
import { materialDark, materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Option 4: VS Code-style themes
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Option 5: Dracula theme
import { dracula, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Option 6: Nord theme
import { nord, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Then use in your component:
// style={theme === "dark" ? [darkTheme] : [lightTheme]}