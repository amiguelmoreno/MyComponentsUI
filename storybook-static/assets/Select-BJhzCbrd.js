import{j as e}from"./jsx-runtime-gfuiFmrk.js";import{useMDXComponents as c}from"./index-rbP-kYFP.js";import{M as m,C as n,d as r}from"./index-BtPohTcP.js";import{C as S,D as i,S as o}from"./index.stories-YSOdXxPE.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-JSgrbDMH.js";import"../sb-preview/runtime.js";import"./index-DeIys0fC.js";import"./index-BtW3vQL8.js";import"./index-Dkj0J1ds.js";import"./index-8sIbGq5v.js";import"./index-DrFu-skq.js";import"./index-CtR02GWN.js";import"./index-BEk9yI-S.js";import"./index-CcyUcsxs.js";import"./index-CUKvRgbG.js";import"./index-gzTY19Q4.js";import"./index-DWbqV_Lf.js";import"./index-CzXEFAbz.js";import"./index-C10IWUuP.js";import"./index-BkVs4Xdz.js";import"./index-pXUiMtXY.js";import"./index-DsPCPAgU.js";import"./index-CiqPuP9r.js";import"./index-BgrccdF7.js";import"./index-e03L_g6a.js";import"./index-XB13z7cY.js";import"./index-DD6JRj2r.js";import"./index-DTfEcMay.js";import"./index-BOacIOqm.js";import"./utils-DJk2kaG7.js";import"./chevron-down-D5z6l907.js";import"./createLucideIcon-CvIVernL.js";import"./check-D-Nel7tA.js";function a(l){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...c(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:S}),`
`,e.jsx(t.h1,{id:"select",children:"Select"}),`
`,e.jsx(t.p,{children:"Displays a list of options for the user to pick from—triggered by a button."}),`
`,e.jsx(n,{of:i}),`
`,e.jsx(r,{}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "mycomponentsui";
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<Select>
  <SelectTrigger className='w-[180px]'>
    <SelectValue placeholder='Theme' />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value='light'>Light</SelectItem>
    <SelectItem value='dark'>Dark</SelectItem>
    <SelectItem value='system'>System</SelectItem>
  </SelectContent>
</Select>
`})}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"scrollable",children:"Scrollable"}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "mycomponentsui";
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<Select>
  <SelectTrigger className='w-[280px]'>
    <SelectValue placeholder='Select a timezone' />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>North America</SelectLabel>
      <SelectItem value='est'>Eastern Standard Time (EST)</SelectItem>
      <SelectItem value='cst'>Central Standard Time (CST)</SelectItem>
      <SelectItem value='mst'>Mountain Standard Time (MST)</SelectItem>
      <SelectItem value='pst'>Pacific Standard Time (PST)</SelectItem>
      <SelectItem value='akst'>Alaska Standard Time (AKST)</SelectItem>
      <SelectItem value='hst'>Hawaii Standard Time (HST)</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>Europe & Africa</SelectLabel>
      <SelectItem value='gmt'>Greenwich Mean Time (GMT)</SelectItem>
      <SelectItem value='cet'>Central European Time (CET)</SelectItem>
      <SelectItem value='eet'>Eastern European Time (EET)</SelectItem>
      <SelectItem value='west'>Western European Summer Time (WEST)</SelectItem>
      <SelectItem value='cat'>Central Africa Time (CAT)</SelectItem>
      <SelectItem value='eat'>East Africa Time (EAT)</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>Asia</SelectLabel>
      <SelectItem value='msk'>Moscow Time (MSK)</SelectItem>
      <SelectItem value='ist'>India Standard Time (IST)</SelectItem>
      <SelectItem value='cst_china'>China Standard Time (CST)</SelectItem>
      <SelectItem value='jst'>Japan Standard Time (JST)</SelectItem>
      <SelectItem value='kst'>Korea Standard Time (KST)</SelectItem>
      <SelectItem value='ist_indonesia'>
        Indonesia Central Standard Time (WITA)
      </SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>Australia & Pacific</SelectLabel>
      <SelectItem value='awst'>
        Australian Western Standard Time (AWST)
      </SelectItem>
      <SelectItem value='acst'>
        Australian Central Standard Time (ACST)
      </SelectItem>
      <SelectItem value='aest'>
        Australian Eastern Standard Time (AEST)
      </SelectItem>
      <SelectItem value='nzst'>New Zealand Standard Time (NZST)</SelectItem>
      <SelectItem value='fjt'>Fiji Time (FJT)</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>South America</SelectLabel>
      <SelectItem value='art'>Argentina Time (ART)</SelectItem>
      <SelectItem value='bot'>Bolivia Time (BOT)</SelectItem>
      <SelectItem value='brt'>Brasilia Time (BRT)</SelectItem>
      <SelectItem value='clt'>Chile Standard Time (CLT)</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
`})})]})}function H(l={}){const{wrapper:t}={...c(),...l.components};return t?e.jsx(t,{...l,children:e.jsx(a,{...l})}):a(l)}export{H as default};
