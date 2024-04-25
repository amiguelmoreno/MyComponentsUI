import{j as n}from"./jsx-runtime-gfuiFmrk.js";import{useMDXComponents as p}from"./index-rbP-kYFP.js";import{M as i,C as r,d as u}from"./index-BtPohTcP.js";import{C as d,D as m,R as a}from"./index.stories-QnXqR25f.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-JSgrbDMH.js";import"../sb-preview/runtime.js";import"./index-DeIys0fC.js";import"./index-BtW3vQL8.js";import"./index-Dkj0J1ds.js";import"./index-8sIbGq5v.js";import"./index-DrFu-skq.js";import"./index-DtjlrCZs.js";import"./index-CcyUcsxs.js";import"./index-gzTY19Q4.js";import"./index-DD6JRj2r.js";import"./index-BkVs4Xdz.js";import"./index-C10IWUuP.js";import"./index-TaqLbvPe.js";import"./index-CUKvRgbG.js";import"./index-DWbqV_Lf.js";import"./index-CzXEFAbz.js";import"./index-pXUiMtXY.js";import"./index-DsPCPAgU.js";import"./index-CiqPuP9r.js";import"./index-BgrccdF7.js";import"./index-e03L_g6a.js";import"./index-XB13z7cY.js";import"./index-DK5DHDD6.js";import"./index-DgCCy1hh.js";import"./utils-DJk2kaG7.js";import"./chevron-right-CA0RwzeB.js";import"./createLucideIcon-CvIVernL.js";import"./check-D-Nel7tA.js";import"./circle-B-KBxCYh.js";import"./index-D5_E73Qc.js";import"./index-DrPcCT0w.js";function t(e){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...p(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:d}),`
`,n.jsx(o.h1,{id:"dropdown-menu",children:"Dropdown Menu"}),`
`,n.jsx(o.p,{children:"Displays a menu to the user — such as a set of actions or functions — triggered by a button."}),`
`,n.jsx(r,{of:m}),`
`,n.jsx(u,{}),`
`,n.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "mycomponentsui";
`})}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant='outline'>Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
`})}),`
`,n.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(o.h3,{id:"radiogroup",children:"RadioGroup"}),`
`,n.jsx(r,{of:a}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`"use client";

import * as React from "react";

import { Button } from "mycomponentsui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "mycomponentsui";

export function DropdownMenuRadioGroup() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value='top'>Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='bottom'>Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='right'>Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
`})})]})}function Q(e={}){const{wrapper:o}={...p(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(t,{...e})}):t(e)}export{Q as default};
