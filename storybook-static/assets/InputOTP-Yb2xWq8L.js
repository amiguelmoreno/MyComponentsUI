import{j as n}from"./jsx-runtime-gfuiFmrk.js";import{useMDXComponents as u}from"./index-rbP-kYFP.js";import{M as s,C as o,d as i}from"./index-BtPohTcP.js";import{C as a,D as l,W as p}from"./index.stories-B80A-Zbj.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-JSgrbDMH.js";import"../sb-preview/runtime.js";import"./index-DeIys0fC.js";import"./index-BtW3vQL8.js";import"./index-Dkj0J1ds.js";import"./index-8sIbGq5v.js";import"./index-DrFu-skq.js";import"./utils-DJk2kaG7.js";import"./createLucideIcon-CvIVernL.js";function r(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...u(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:a}),`
`,n.jsx(t.h1,{id:"input-otp",children:"Input OTP"}),`
`,n.jsx(t.p,{children:"Accessible one-time password component with copy paste functionality."}),`
`,n.jsx(o,{of:l}),`
`,n.jsx(i,{}),`
`,n.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "mycomponentsui";
`})}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
`})}),`
`,n.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(t.h3,{id:"withseparator",children:"WithSeparator"}),`
`,n.jsx(o,{of:p}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "mycomponentsui";
`})}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
`})}),`
`,n.jsx(t.h3,{id:"controlled",children:"Controlled"}),`
`,n.jsx(o,{of:p}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`"use client";

import * as React from "react";

import { InputOTP, InputOTPGroup, InputOTPSlot } from "mycomponentsui";

export function InputOTPControlled() {
  const [value, setValue] = React.useState("");

  return (
    <div className='space-y-2'>
      <InputOTP
        maxLength={6}
        value={value}
        onChange={(value) => setValue(value)}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <div className='text-center text-sm'>
        {value === "" ? (
          <>Enter your one-time password.</>
        ) : (
          <>You entered: {value}</>
        )}
      </div>
    </div>
  );
}
`})})]})}function G(e={}){const{wrapper:t}={...u(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(r,{...e})}):r(e)}export{G as default};
