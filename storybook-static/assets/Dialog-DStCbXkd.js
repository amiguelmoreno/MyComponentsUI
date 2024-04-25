import{j as n}from"./jsx-runtime-gfuiFmrk.js";import{useMDXComponents as a}from"./index-rbP-kYFP.js";import{M as l,C as i,d as r}from"./index-BtPohTcP.js";import{C as s,D as m,a as p}from"./index.stories-CrxcsWnP.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-JSgrbDMH.js";import"../sb-preview/runtime.js";import"./index-DeIys0fC.js";import"./index-BtW3vQL8.js";import"./index-Dkj0J1ds.js";import"./index-8sIbGq5v.js";import"./index-DrFu-skq.js";import"./index-B-jIDt67.js";import"./index-DMNmvXcV.js";import"./index-CcyUcsxs.js";import"./index-gzTY19Q4.js";import"./index-DsPCPAgU.js";import"./index-CiqPuP9r.js";import"./index-DD6JRj2r.js";import"./index-BkVs4Xdz.js";import"./index-CzXEFAbz.js";import"./index-C10IWUuP.js";import"./index-pXUiMtXY.js";import"./index-XB13z7cY.js";import"./index-DK5DHDD6.js";import"./utils-DJk2kaG7.js";import"./x-C5DrP9gb.js";import"./createLucideIcon-CvIVernL.js";import"./index-D5_E73Qc.js";import"./index-DrPcCT0w.js";import"./index-60VDg0sI.js";import"./index-DuSNxgMV.js";import"./index-dEjL3xIO.js";function t(e){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...a(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:s}),`
`,n.jsx(o.h1,{id:"dialog",children:"Dialog"}),`
`,n.jsx(o.p,{children:"Displays a callout for user attention."}),`
`,n.jsx(i,{of:m}),`
`,n.jsx(r,{}),`
`,n.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "mycomponentsui";
`})}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`<Dialog>
  <DialogTrigger asChild>
    <Button variant='outline'>Edit Profile</Button>
  </DialogTrigger>
  <DialogContent className='sm:max-w-[425px]'>
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here. Click save when you're done.
      </DialogDescription>
    </DialogHeader>
    <div className='grid gap-4 py-4'>
      <div className='grid grid-cols-4 items-center gap-4'>
        <Label htmlFor='name' className='text-right'>
          Name
        </Label>
        <Input id='name' defaultValue='Pedro Duarte' className='col-span-3' />
      </div>
      <div className='grid grid-cols-4 items-center gap-4'>
        <Label htmlFor='username' className='text-right'>
          Username
        </Label>
        <Input id='username' defaultValue='@peduarte' className='col-span-3' />
      </div>
    </div>
    <AlertDialogFooter>
      <Button type='submit'>Save changes</Button>
    </AlertDialogFooter>
  </DialogContent>
</Dialog>
`})}),`
`,n.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(o.h3,{id:"with-custom-close-button",children:"With Custom Close Button"}),`
`,n.jsx(i,{of:p}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { Copy } from "lucide-react";
import { Button } from "mycomponentsui";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "mycomponentsui";
import { Input } from "mycomponentsui";
import { Label } from "mycomponentsui";
`})}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`<Dialog>
  <DialogTrigger asChild>
    <Button variant='outline'>Share</Button>
  </DialogTrigger>
  <DialogContent className='sm:max-w-md'>
    <DialogHeader>
      <DialogTitle>Share link</DialogTitle>
      <DialogDescription>
        Anyone who has this link will be able to view this.
      </DialogDescription>
    </DialogHeader>
    <div className='flex items-center space-x-2'>
      <div className='grid flex-1 gap-2'>
        <Label htmlFor='link' className='sr-only'>
          Link
        </Label>
        <Input
          id='link'
          defaultValue='https://ui.shadcn.com/docs/installation'
          readOnly
        />
      </div>
      <Button type='submit' size='sm' className='px-3'>
        <span className='sr-only'>Copy</span>
        <Copy className='h-4 w-4' />
      </Button>
    </div>
    <DialogFooter className='sm:justify-start'>
      <DialogClose asChild>
        <Button type='button' variant='secondary'>
          Close
        </Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>
`})})]})}function W(e={}){const{wrapper:o}={...a(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(t,{...e})}):t(e)}export{W as default};
