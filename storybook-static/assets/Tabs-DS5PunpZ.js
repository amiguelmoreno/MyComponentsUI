import{j as n}from"./jsx-runtime-gfuiFmrk.js";import{useMDXComponents as t}from"./index-rbP-kYFP.js";import{M as o,C as s,d as i}from"./index-BtPohTcP.js";import{C as d,D as p}from"./index.stories-C1wbTts0.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-JSgrbDMH.js";import"../sb-preview/runtime.js";import"./index-DeIys0fC.js";import"./index-BtW3vQL8.js";import"./index-Dkj0J1ds.js";import"./index-8sIbGq5v.js";import"./index-DrFu-skq.js";import"./index-CcyUcsxs.js";import"./index-gzTY19Q4.js";import"./index-DgCCy1hh.js";import"./index-CUKvRgbG.js";import"./index-DsPCPAgU.js";import"./index-CiqPuP9r.js";import"./index-C10IWUuP.js";import"./index-BkVs4Xdz.js";import"./index-DD6JRj2r.js";import"./index-DWbqV_Lf.js";import"./index-DK5DHDD6.js";import"./utils-DJk2kaG7.js";import"./index-D5_E73Qc.js";import"./index-DrPcCT0w.js";import"./index-DGzCeWxj.js";import"./index-60VDg0sI.js";import"./index-DuSNxgMV.js";function r(a){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...a.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:d}),`
`,n.jsx(e.h1,{id:"tabs",children:"Tabs"}),`
`,n.jsx(e.p,{children:"A set of layered sections of content—known as tab panels—that are displayed one at a time."}),`
`,n.jsx(s,{of:p}),`
`,n.jsx(i,{}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Label,
  Input,
} from "mycomponentsui";
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Tabs defaultValue='account' className='w-[400px]'>
  <TabsList className='grid w-full grid-cols-2'>
    <TabsTrigger value='account'>Account</TabsTrigger>
    <TabsTrigger value='password'>Password</TabsTrigger>
  </TabsList>
  <TabsContent value='account'>
    <Card>
      <CardHeader>
        <CardTitle>Account</CardTitle>
        <CardDescription>
          Make changes to your account here. Click save when you're done.
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-2'>
        <div className='space-y-1'>
          <Label htmlFor='name'>Name</Label>
          <Input id='name' defaultValue='Pedro Duarte' />
        </div>
        <div className='space-y-1'>
          <Label htmlFor='username'>Username</Label>
          <Input id='username' defaultValue='@peduarte' />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save changes</Button>
      </CardFooter>
    </Card>
  </TabsContent>
  <TabsContent value='password'>
    <Card>
      <CardHeader>
        <CardTitle>Password</CardTitle>
        <CardDescription>
          Change your password here. After saving, you'll be logged out.
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-2'>
        <div className='space-y-1'>
          <Label htmlFor='current'>Current password</Label>
          <Input id='current' type='password' />
        </div>
        <div className='space-y-1'>
          <Label htmlFor='new'>New password</Label>
          <Input id='new' type='password' />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save password</Button>
      </CardFooter>
    </Card>
  </TabsContent>
</Tabs>
`})})]})}function _(a={}){const{wrapper:e}={...t(),...a.components};return e?n.jsx(e,{...a,children:n.jsx(r,{...a})}):r(a)}export{_ as default};
