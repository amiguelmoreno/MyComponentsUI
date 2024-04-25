import{j as e}from"./jsx-runtime-gfuiFmrk.js";import{useMDXComponents as i}from"./index-rbP-kYFP.js";import{M as s,C as o,d as a}from"./index-BtPohTcP.js";import{C as h,D as m,S as l,a as p}from"./index.stories-WWCGR2xg.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-JSgrbDMH.js";import"../sb-preview/runtime.js";import"./index-DeIys0fC.js";import"./index-BtW3vQL8.js";import"./index-Dkj0J1ds.js";import"./index-8sIbGq5v.js";import"./index-DrFu-skq.js";import"./index-DMNmvXcV.js";import"./index-CcyUcsxs.js";import"./index-gzTY19Q4.js";import"./index-DsPCPAgU.js";import"./index-CiqPuP9r.js";import"./index-DD6JRj2r.js";import"./index-BkVs4Xdz.js";import"./index-CzXEFAbz.js";import"./index-C10IWUuP.js";import"./index-pXUiMtXY.js";import"./index-XB13z7cY.js";import"./index-DK5DHDD6.js";import"./index-DrPcCT0w.js";import"./utils-DJk2kaG7.js";import"./x-C5DrP9gb.js";import"./createLucideIcon-CvIVernL.js";import"./index-60VDg0sI.js";import"./index-D5_E73Qc.js";import"./index-DuSNxgMV.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:h}),`
`,e.jsx(n.h1,{id:"sheet",children:"Sheet"}),`
`,e.jsx(n.p,{children:"Extends the Dialog component to display content that complements the main content of the screen."}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(a,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Button,
} from "mycomponentsui";
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Sheet>
  <SheetTrigger asChild>
    <Button variant='outline'>Open</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
`})}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"side",children:"Side"}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`"use client";

import { Button } from "mycomponentsui";
import { Input } from "mycomponentsui";
import { Label } from "mycomponentsui";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "mycomponentsui";

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export function SheetSide() {
  return (
    <div className='grid grid-cols-2 gap-2'>
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant='outline'>{side}</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className='grid gap-4 py-4'>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='name' className='text-right'>
                  Name
                </Label>
                <Input id='name' value='Pedro Duarte' className='col-span-3' />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='username' className='text-right'>
                  Username
                </Label>
                <Input id='username' value='@peduarte' className='col-span-3' />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type='submit'>Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"size",children:"Size"}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Button,
} from "mycomponentsui";
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Sheet>
  <SheetTrigger asChild>
    <Button variant='outline'>Open</Button>
  </SheetTrigger>
  <SheetContent className='w-[400px] sm:w-[540px] h-[200px] rounded-sm m-2'>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
`})})]})}function q(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{q as default};
