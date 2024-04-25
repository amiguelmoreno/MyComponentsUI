import{j as n}from"./jsx-runtime-gfuiFmrk.js";import{useMDXComponents as o}from"./index-rbP-kYFP.js";import{M as a,C as s,d as r}from"./index-BtPohTcP.js";import{C as l,D as m}from"./index.stories-Bq9uD2Kk.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-JSgrbDMH.js";import"../sb-preview/runtime.js";import"./index-DeIys0fC.js";import"./index-BtW3vQL8.js";import"./index-Dkj0J1ds.js";import"./index-8sIbGq5v.js";import"./index-DrFu-skq.js";import"./index-gzTY19Q4.js";import"./index-CcyUcsxs.js";import"./index-C10IWUuP.js";import"./index-DD6JRj2r.js";import"./index-BkVs4Xdz.js";import"./index-DWbqV_Lf.js";import"./index-DK5DHDD6.js";import"./index-CiqPuP9r.js";import"./index-DsPCPAgU.js";import"./index-CUKvRgbG.js";import"./index-CzXEFAbz.js";import"./index-DTfEcMay.js";import"./index-BOacIOqm.js";import"./index-DrPcCT0w.js";import"./utils-DJk2kaG7.js";import"./chevron-down-D5z6l907.js";import"./createLucideIcon-CvIVernL.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:l}),`
`,n.jsx(e.h1,{id:"navigation-menu",children:"Navigation Menu"}),`
`,n.jsx(e.p,{children:"A collection of links for navigating websites."}),`
`,n.jsx(s,{of:m}),`
`,n.jsx(r,{}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "mycomponentsui";
import { Pencil } from "lucide-react";
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`export const components: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<div className='flex w-[800px] items-center justify-center'>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className='grid gap-3 p-6 md:w-[300px] lg:w-[400px] lg:grid-cols-[.75fr_1fr]'>
            <li className='row-span-3'>
              <NavigationMenuLink asChild>
                <a
                  className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                  href='/'
                >
                  <Pencil className='h-6 w-6' />
                  <div className='mb-2 mt-4 text-lg font-medium'>shadcn/ui</div>
                  <p className='text-sm leading-tight text-muted-foreground'>
                    Beautifully designed components that you can copy and paste
                    into your apps. Accessible. Customizable. Open Source.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
            <ListItem title='Introduction'>
              Re-usable components built using Radix UI and Tailwind CSS.
            </ListItem>
            <ListItem title='Installation'>
              How to install dependencies and structure your app.
            </ListItem>
            <ListItem href='/docs/primitives/typography' title='Typography'>
              Styles for headings, paragraphs, lists...etc
            </ListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Components</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className='grid w-[300px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
            {components.map((component) => (
              <ListItem key={component.title} title={component.title}>
                {component.description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Documentation
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</div>
`})})]})}function U(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{U as default};
