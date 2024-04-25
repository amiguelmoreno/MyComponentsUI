import{j as e}from"./jsx-runtime-gfuiFmrk.js";import{useMDXComponents as n}from"./index-rbP-kYFP.js";import{M as i,C as a,d as m}from"./index-BtPohTcP.js";import{C as l,D as p}from"./index.stories-Dmk-9SmM.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-JSgrbDMH.js";import"../sb-preview/runtime.js";import"./index-DeIys0fC.js";import"./index-BtW3vQL8.js";import"./index-Dkj0J1ds.js";import"./index-8sIbGq5v.js";import"./index-DrFu-skq.js";import"./index-DGzCeWxj.js";import"./utils-DJk2kaG7.js";import"./index-60VDg0sI.js";import"./index-C10IWUuP.js";import"./index-DrPcCT0w.js";import"./index-DuSNxgMV.js";import"./index-CtR02GWN.js";import"./index-BEk9yI-S.js";import"./index-CcyUcsxs.js";import"./index-CUKvRgbG.js";import"./index-gzTY19Q4.js";import"./index-DWbqV_Lf.js";import"./index-CzXEFAbz.js";import"./index-BkVs4Xdz.js";import"./index-pXUiMtXY.js";import"./index-DsPCPAgU.js";import"./index-CiqPuP9r.js";import"./index-BgrccdF7.js";import"./index-e03L_g6a.js";import"./index-XB13z7cY.js";import"./index-DD6JRj2r.js";import"./index-DTfEcMay.js";import"./index-BOacIOqm.js";import"./chevron-down-D5z6l907.js";import"./createLucideIcon-CvIVernL.js";import"./check-D-Nel7tA.js";import"./index-D5_E73Qc.js";function o(r){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l}),`
`,e.jsx(t.h1,{id:"card",children:"Card"}),`
`,e.jsx(t.p,{children:"Displays a card with header, content, and footer."}),`
`,e.jsx(a,{of:p}),`
`,e.jsx(m,{}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { Alert, AlertTitle, AlertDescription } from "mycomponentsui";
import { Terminal } from "lucide-react";
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<Card className='w-[350px]'>
  <CardHeader>
    <CardTitle>Create project</CardTitle>
    <CardDescription>Deploy your new project in one-click.</CardDescription>
  </CardHeader>
  <CardContent>
    <form>
      <div className='grid w-full items-center gap-4'>
        <div className='flex flex-col space-y-1.5'>
          <Label htmlFor='name'>Name</Label>
          <Input id='name' placeholder='Name of your project' />
        </div>
        <div className='flex flex-col space-y-1.5'>
          <Label htmlFor='framework'>Framework</Label>
          <Select>
            <SelectTrigger id='framework'>
              <SelectValue placeholder='Select' />
            </SelectTrigger>
            <SelectContent position='popper'>
              <SelectItem value='next'>Next.js</SelectItem>
              <SelectItem value='sveltekit'>SvelteKit</SelectItem>
              <SelectItem value='astro'>Astro</SelectItem>
              <SelectItem value='nuxt'>Nuxt.js</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </form>
  </CardContent>
  <CardFooter className='flex justify-between'>
    <Button variant='outline'>Cancel</Button>
    <Button>Deploy</Button>
  </CardFooter>
</Card>
`})})]})}function W(r={}){const{wrapper:t}={...n(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(o,{...r})}):o(r)}export{W as default};
