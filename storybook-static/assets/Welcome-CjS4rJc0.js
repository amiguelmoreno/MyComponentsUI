import{j as n}from"./jsx-runtime-gfuiFmrk.js";import{useMDXComponents as s}from"./index-rbP-kYFP.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";function e(o){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...s(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"welcome-to---mycomponentsui--",children:"Welcome to - mycomponentsui -"}),`
`,n.jsxs(r.p,{children:["This is a ",n.jsx(r.strong,{children:"React"})," components library which offers a wide variety of ",n.jsx(r.strong,{children:"fully accessible"})," components and a very minimalist design that allows you to ",n.jsx(r.strong,{children:"customize"})," every component."]}),`
`,n.jsx("br",{}),`
`,n.jsx(r.h2,{id:"set-up",children:"Set up"}),`
`,n.jsx("br",{}),`
`,n.jsx(r.h4,{id:"1-install-npm",children:n.jsx(r.strong,{children:"1. Install npm"})}),`
`,n.jsx(r.p,{children:"Run this command on your terminal in your project folder"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`npm install mycomponentsui
`})}),`
`,n.jsx(r.h4,{id:"2-set-up-tailwindcss",children:n.jsx(r.strong,{children:"2. Set up tailwindcss"})}),`
`,n.jsxs(r.p,{children:["If you don't have Tailwind configured in your project go to ",n.jsx(r.a,{href:"https://tailwindcss.com/docs/installation",rel:"nofollow",children:n.jsx(r.strong,{children:"Tailwind Set Up"})}),". After the installation go to your tailwind.config file replace all the code (keep the configurations that you really want to have) and add:"]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-js",children:`//tailwind.config.js

import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/mycomponentsui/**/*.js",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: \`var(--radius)\`,
        md: \`calc(var(--radius) - 2px)\`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["system-ui", "arial", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
`})}),`
`,n.jsx(r.h4,{id:"3-modify-indexcss",children:n.jsx(r.strong,{children:"3. Modify index.css"})}),`
`,n.jsx(r.p,{children:"Then add this to your index.css file where you have tailwind base, components and utilities. Your file should to look like this:"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-css",children:`/* index.css */

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 47.4% 11.2%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 222.2 47.4% 11.2%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 47.4% 11.2%;

    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;

    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --destructive: 0 100% 50%;
    --destructive-foreground: 210 40% 98%;

    --ring: 215 20.2% 65.1%;

    --radius: 0.5rem;
  }

  .dark {
    --background: 224 71% 4%;
    --foreground: 213 31% 91%;

    --muted: 223 47% 11%;
    --muted-foreground: 215.4 16.3% 56.9%;

    --accent: 216 34% 17%;
    --accent-foreground: 210 40% 98%;

    --popover: 224 71% 4%;
    --popover-foreground: 215 20.2% 65.1%;

    --border: 216 34% 17%;
    --input: 216 34% 17%;

    --card: 224 71% 4%;
    --card-foreground: 213 31% 91%;

    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 1.2%;

    --secondary: 222.2 47.4% 11.2%;
    --secondary-foreground: 210 40% 98%;

    --destructive: 0 63% 31%;
    --destructive-foreground: 210 40% 98%;

    --ring: 216 34% 17%;

    --radius: 0.5rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-feature-settings:
      "rlig" 1,
      "calt" 1;
  }
}
`})}),`
`,n.jsx(r.h4,{id:"4-you-are-ready-to-code",children:n.jsx(r.strong,{children:"4. You are ready to code!"})}),`
`,n.jsxs(r.p,{children:["With this steps you should be all set up to start coding and adding your new components. If you have doubts or problems you can go to ",n.jsx(r.a,{href:"https://ui.shadcn.com/docs",rel:"nofollow",children:n.jsx(r.strong,{children:"ShadcnUI"})})," as this project uses the same components."]})]})}function c(o={}){const{wrapper:r}={...s(),...o.components};return r?n.jsx(r,{...o,children:n.jsx(e,{...o})}):e(o)}export{c as default};
