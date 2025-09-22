// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import remarkDirective from "remark-directive";

import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

//plugins
import liveCode from 'astro-live-code'

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkDirective],
  },
  integrations: [starlight({
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
      themes: ["github-dark", "monokai"],
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
        label: "Guides",
        items: [
          // Each item here is one entry in the navigation menu.
          { label: "Example Guide", slug: "guides/example" },
        ],
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
          { label: "Colors", slug: "style-guide/colors" },
          { label: "Typography", slug: "style-guide/typography" },
          { label: "Spacing", slug: "style-guide/spacing" },
          { label: "Utilities", slug: "style-guide/utilities" },
          { label: "Assets", slug: "style-guide/assets" },
        ],
      },
      {
        label: "Components",
        items: [
          { label: "Accordion", slug: "components/accordion" },
          { label: "Avatar", slug: "components/avatar" },
          { label: "Button", slug: "components/button" },
          { label: "Card", slug: "components/card" },
        ],
      },
      {
        label: "Blocks/Patterns",
        items: [
          { label: "Hero", slug: "patterns/hero" },
          { label: "SignUp", slug: "patterns/auth/signup-form" },
          { label: "Login", slug: "patterns/auth/login-form" },
          { label: "Forget Password", slug: "patterns/auth/forget-password" },
        ],
      },
      {
        label: "Reference",
        autogenerate: { directory: "reference" },
      },
    ],
  }), mdx(), liveCode({
    defaultProps: {
      theme: 'light',
    }
  }), react()],
  vite: {
    plugins: [tailwindcss()],
  },
});