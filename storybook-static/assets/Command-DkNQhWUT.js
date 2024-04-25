import{j as n}from"./jsx-runtime-gfuiFmrk.js";import{useMDXComponents as t}from"./index-rbP-kYFP.js";import{M as r,C as a,d}from"./index-BtPohTcP.js";import{C as s,D as p,a as i}from"./index.stories-bb4ZFuK_.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-JSgrbDMH.js";import"../sb-preview/runtime.js";import"./index-DeIys0fC.js";import"./index-BtW3vQL8.js";import"./index-Dkj0J1ds.js";import"./index-8sIbGq5v.js";import"./index-DrFu-skq.js";import"./index-DMNmvXcV.js";import"./index-CcyUcsxs.js";import"./index-gzTY19Q4.js";import"./index-DsPCPAgU.js";import"./index-CiqPuP9r.js";import"./index-DD6JRj2r.js";import"./index-BkVs4Xdz.js";import"./index-CzXEFAbz.js";import"./index-C10IWUuP.js";import"./index-pXUiMtXY.js";import"./index-XB13z7cY.js";import"./index-DK5DHDD6.js";import"./utils-DJk2kaG7.js";import"./index-B-jIDt67.js";import"./x-C5DrP9gb.js";import"./createLucideIcon-CvIVernL.js";import"./calendar-C85vOEUs.js";import"./user-Bybg_CiX.js";function e(o){const m={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...t(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:s}),`
`,n.jsx(m.h1,{id:"command",children:"Command"}),`
`,n.jsx(m.p,{children:"Fast, composable, unstyled command menu for React."}),`
`,n.jsx(a,{of:p}),`
`,n.jsx(d,{}),`
`,n.jsx(m.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(m.pre,{children:n.jsx(m.code,{className:"language-tsx",children:`import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "mycomponentsui";

export function CommandDemo() {
  return (
    <Command className='rounded-lg border shadow-md'>
      <CommandInput placeholder='Type a command or search...' />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading='Suggestions'>
          <CommandItem>
            <Calendar className='mr-2 h-4 w-4' />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile className='mr-2 h-4 w-4' />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <Calculator className='mr-2 h-4 w-4' />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading='Settings'>
          <CommandItem>
            <User className='mr-2 h-4 w-4' />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className='mr-2 h-4 w-4' />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className='mr-2 h-4 w-4' />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
`})}),`
`,n.jsx(m.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(m.h3,{id:"dialog",children:"Dialog"}),`
`,n.jsx(a,{of:i}),`
`,n.jsx(m.pre,{children:n.jsx(m.code,{className:"language-tsx",children:`"use client";

import * as React from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export function CommandDialogDemo() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <p className='text-sm text-muted-foreground'>
        Press{" "}
        <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
          <span className='text-xs'>⌘</span>J
        </kbd>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='Suggestions'>
            <CommandItem>
              <Calendar className='mr-2 h-4 w-4' />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile className='mr-2 h-4 w-4' />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator className='mr-2 h-4 w-4' />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading='Settings'>
            <CommandItem>
              <User className='mr-2 h-4 w-4' />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className='mr-2 h-4 w-4' />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className='mr-2 h-4 w-4' />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
`})})]})}function _(o={}){const{wrapper:m}={...t(),...o.components};return m?n.jsx(m,{...o,children:n.jsx(e,{...o})}):e(o)}export{_ as default};
