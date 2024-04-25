import{j as n}from"./jsx-runtime-gfuiFmrk.js";import{useMDXComponents as s}from"./index-rbP-kYFP.js";import{M as r,C as e}from"./index-BtPohTcP.js";import{C as a,D as m,W as c,a as p,b as u}from"./index.stories-CbQbxmOU.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-JSgrbDMH.js";import"../sb-preview/runtime.js";import"./index-DeIys0fC.js";import"./index-BtW3vQL8.js";import"./index-Dkj0J1ds.js";import"./index-8sIbGq5v.js";import"./index-DrFu-skq.js";import"./index-D5_E73Qc.js";import"./index-DrPcCT0w.js";import"./utils-DJk2kaG7.js";import"./toaster-CpQpXJIR.js";import"./index-CcyUcsxs.js";import"./index-CUKvRgbG.js";import"./index-gzTY19Q4.js";import"./index-CzXEFAbz.js";import"./index-C10IWUuP.js";import"./index-BkVs4Xdz.js";import"./index-XB13z7cY.js";import"./index-DK5DHDD6.js";import"./index-CiqPuP9r.js";import"./index-DD6JRj2r.js";import"./index-BOacIOqm.js";import"./x-C5DrP9gb.js";import"./createLucideIcon-CvIVernL.js";function i(o){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:a}),`
`,n.jsx(t.h1,{id:"toast",children:"Toast"}),`
`,n.jsx(t.p,{children:"A message that is displayed temporarily."}),`
`,n.jsx(e,{of:m}),`
`,n.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(t.p,{children:"You have to add Toaster to your layout like this:"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { Toaster } from "mycomponentsui";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
`})}),`
`,n.jsx(t.p,{children:"Then you can add the toast in all of the children components"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`"use client";

import { Button } from "mycomponentsui";
import { useToast } from "mycomponentsui";

export function ToastSimple() {
  const { toast } = useToast();

  return (
    <Button
      variant='outline'
      onClick={() => {
        toast({
          description: "Your message has been sent.",
        });
      }}
    >
      Show Toast
    </Button>
  );
}
`})}),`
`,n.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(t.h3,{id:"with-title",children:"With Title"}),`
`,n.jsx(e,{of:c}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`"use client";

import { Button } from "mycomponentsui";
import { useToast } from "mycomponentsui";

export function ToastWithTitle() {
  const { toast } = useToast();

  return (
    <Button
      variant='outline'
      onClick={() => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      }}
    >
      Show Toast
    </Button>
  );
}
`})}),`
`,n.jsx(t.h3,{id:"with-action",children:"With Action"}),`
`,n.jsx(e,{of:p}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`"use client";

import { Button } from "mycomponentsui";
import { ToastAction } from "mycomponentsui";
import { useToast } from "mycomponentsui";

export function ToastWithAction() {
  const { toast } = useToast();

  return (
    <Button
      variant='outline'
      onClick={() => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText='Try again'>Try again</ToastAction>,
        });
      }}
    >
      Show Toast
    </Button>
  );
}
`})}),`
`,n.jsx(t.h3,{id:"destructive",children:"Destructive"}),`
`,n.jsx(e,{of:u}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`"use client";

import { Button } from "mycomponentsui";
import { ToastAction } from "mycomponentsui";
import { useToast } from "mycomponentsui";

export function ToastDestructive() {
  const { toast } = useToast();

  return (
    <Button
      variant='outline'
      onClick={() => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText='Try again'>Try again</ToastAction>,
        });
      }}
    >
      Show Toast
    </Button>
  );
}
`})})]})}function z(o={}){const{wrapper:t}={...s(),...o.components};return t?n.jsx(t,{...o,children:n.jsx(i,{...o})}):i(o)}export{z as default};
