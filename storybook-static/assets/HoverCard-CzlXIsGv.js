import{j as e}from"./jsx-runtime-gfuiFmrk.js";import{useMDXComponents as a}from"./index-rbP-kYFP.js";import{M as o,C as s,d as i}from"./index-BtPohTcP.js";import{C as m,D as c}from"./index.stories-B6Dbxk0R.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-JSgrbDMH.js";import"../sb-preview/runtime.js";import"./index-DeIys0fC.js";import"./index-BtW3vQL8.js";import"./index-Dkj0J1ds.js";import"./index-8sIbGq5v.js";import"./index-DrFu-skq.js";import"./index-CcyUcsxs.js";import"./index-gzTY19Q4.js";import"./index-DD6JRj2r.js";import"./index-BkVs4Xdz.js";import"./index-BgrccdF7.js";import"./index-C10IWUuP.js";import"./index-CiqPuP9r.js";import"./index-e03L_g6a.js";import"./index-DK5DHDD6.js";import"./index-CzXEFAbz.js";import"./utils-DJk2kaG7.js";import"./index-D5_E73Qc.js";import"./index-DrPcCT0w.js";import"./index-BOOuZKd6.js";import"./createLucideIcon-CvIVernL.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:m}),`
`,e.jsx(n.h1,{id:"hover-card",children:"Hover Card"}),`
`,e.jsx(n.p,{children:"For sighted users to preview content available behind a link."}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(i,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
} from "mycomponentsui";
import { CalendarDays } from "lucide-react";
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<div className='w-96 flex items-center justify-center'>
  <HoverCard>
    <HoverCardTrigger asChild>
      <Button variant='link'>@nextjs</Button>
    </HoverCardTrigger>
    <HoverCardContent className='w-80'>
      <div className='flex justify-between space-x-4'>
        <Avatar>
          <AvatarImage src='https://github.com/vercel.png' />
          <AvatarFallback>VC</AvatarFallback>
        </Avatar>
        <div className='space-y-1'>
          <h4 className='text-sm font-semibold'>@nextjs</h4>
          <p className='text-sm'>
            The React Framework – created and maintained by @vercel.
          </p>
          <div className='flex items-center pt-2'>
            <CalendarDays className='mr-2 h-4 w-4 opacity-70' />{" "}
            <span className='text-xs text-muted-foreground'>
              Joined December 2021
            </span>
          </div>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
</div>
`})})]})}function J(r={}){const{wrapper:n}={...a(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{J as default};
