// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath, URL } from 'node:url';

import starlight from "@astrojs/starlight";
import remarkDirective from "remark-directive";

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

//plugins
import liveCode from 'astro-live-code'

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkDirective],
  },
  integrations: [
    starlight({
    title: "Park UI",
    // logo:{
    //   src: "./src/assets/logo.svg",
    //   alt: "Park UI Logo",
    //   href: "/",
    //   width: 50,
    //   height: 50,
    // },
    customCss: [
      // Path to your Tailwind base styles:
      "./src/styles/global.css",
    ],
    expressiveCode: {
      // Replace the default themes with a custom set of bundled themes:
      // "dracula" (a dark theme) and "solarized-light"
      themes: ["github-light", "monokai"],
    },
    social: [
      {
        icon: "github",
        label: "GitHub",
        href: "https://github.com/jameeronline/park-ui",
      },
      {
        icon: "linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/",
      },
      {
        icon: "facebook",
        label: "Facebook",
        href: "https://www.facebook.com/",
      },
      {
        icon: "youtube",
        label: "YouTube",
        href: "https://www.youtube.com/",
      },
      {
        icon: "figma",
        label: "Figma",
        href: "https://www.figma.com/",
      }
    ],
    sidebar: [
      {
        label: "Introduction", slug: "introduction",
      },
      {
        label: "Getting Started",
        items: [
          { label: "Installation", slug: "getting-started/installation" },
          { label: "Configuration", slug: "getting-started/configuration" },
        ],
      },
      {
        label: "StyleGuide",
        items: [
          { label: "Introduction", slug: "style-guide/introduction" },
          { label: "Colors", slug: "style-guide/colors" },
          { label: "Typography", slug: "style-guide/typography" },
          { label: "Spacing", slug: "style-guide/spacing" },
          { label: "Layout", slug: "style-guide/layout" },
          { label: "Icons", slug: "style-guide/icons" },
          { label: "Utilities", slug: "style-guide/utilities" },
          { label: "Assets", slug: "style-guide/assets" },
          {
            label: "Design Tokens",
            items: [
              { label: "Colors", slug: "style-guide/design-tokens/colors" },
              { label: "Typography", slug: "style-guide/design-tokens/typography" },
            ]
          }
        ],
      },
      {
        label: "Components",
        items: [
          { label: "Accordion", slug: "components/accordion" },
          { label: "Avatar", slug: "components/avatar" },
          { label: "Button", slug: "components/button", badge: { text: 'New', variant: 'note' } },
          { label: "Card", slug: "components/card" },
          
        ],
      },
      { label: "Form Elements", autogenerate: { directory: 'form-elements' } },
      {
        label: "Blocks/Patterns",
        items: [
          { label: "Authentication", autogenerate: { directory: 'patterns/auth' }, },
        ]
      },
      {
        label: "Reference",
        autogenerate: { directory: "reference" },
      },
      {
        label: "Resources",
        collapsed: false,
        items: [
          { 
            label: "🎨 Design Tools", 
            link: "https://www.figma.com/",
            attrs: { target: "_blank", rel: "noopener" }
          },
          { 
            label: "🚀 Deployment", 
            link: "https://vercel.com/",
            attrs: { target: "_blank", rel: "noopener" }
          },
          { 
            label: "📚 Learn More", 
            link: "https://developer.mozilla.org/",
            attrs: { target: "_blank", rel: "noopener" }
          }
        ],
      },
      {
        label: "External Links",
        collapsed: true,
        items: [
          { 
            label: "Tailwind CSS", 
            link: "https://tailwindcss.com/",
            attrs: { target: "_blank", rel: "noopener" }
          },
          { 
            label: "Design System", 
            link: "https://design-system.com/",
            attrs: { target: "_blank", rel: "noopener" }
          },
          { 
            label: "Astro Documentation", 
            link: "https://docs.astro.build/",
            attrs: { target: "_blank", rel: "noopener" }
          },
          { 
            label: "Starlight Guide", 
            link: "https://starlight.astro.build/",
            attrs: { target: "_blank", rel: "noopener" }
          }
        ],
      }
    ],
  }), 
  mdx(), 
  liveCode({
    defaultProps: {
      theme: 'dark',
    }
  }), 
  react()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
});