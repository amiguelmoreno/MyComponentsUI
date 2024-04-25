import{j as e}from"./jsx-runtime-gfuiFmrk.js";import{D as l,a as u,b as h,c as p,d as x,e as D,f as j,g as y}from"./index-B-jIDt67.js";import{B as n}from"./index-D5_E73Qc.js";import{L as i}from"./index-60VDg0sI.js";import{I as t}from"./index-DuSNxgMV.js";import{f as N}from"./index-dEjL3xIO.js";import{c as f}from"./createLucideIcon-CvIVernL.js";/**
 * @license lucide-react v0.371.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=f("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),v={title:"Components/Dialog",component:l,parameters:{layout:"centered"}},a={render:()=>e.jsxs(l,{children:[e.jsx(u,{asChild:!0,children:e.jsx(n,{variant:"outline",children:"Edit Profile"})}),e.jsxs(h,{className:"sm:max-w-[425px]",children:[e.jsxs(p,{children:[e.jsx(x,{children:"Edit profile"}),e.jsx(D,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(i,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(t,{id:"name",defaultValue:"Pedro Duarte",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(i,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(t,{id:"username",defaultValue:"@peduarte",className:"col-span-3"})]})]}),e.jsx(N,{children:e.jsx(n,{type:"submit",children:"Save changes"})})]})]})},s={render:()=>e.jsxs(l,{children:[e.jsx(u,{asChild:!0,children:e.jsx(n,{variant:"outline",children:"Share"})}),e.jsxs(h,{className:"sm:max-w-md",children:[e.jsxs(p,{children:[e.jsx(x,{children:"Share link"}),e.jsx(D,{children:"Anyone who has this link will be able to view this."})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsxs("div",{className:"grid flex-1 gap-2",children:[e.jsx(i,{htmlFor:"link",className:"sr-only",children:"Link"}),e.jsx(t,{id:"link",defaultValue:"https://ui.shadcn.com/docs/installation",readOnly:!0})]}),e.jsxs(n,{type:"submit",size:"sm",className:"px-3",children:[e.jsx("span",{className:"sr-only",children:"Copy"}),e.jsx(C,{className:"h-4 w-4"})]})]}),e.jsx(j,{className:"sm:justify-start",children:e.jsx(y,{asChild:!0,children:e.jsx(n,{type:"button",variant:"secondary",children:"Close"})})})]})]})};var r,o,c;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <Dialog>
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
      </Dialog>;
  }
}`,...(c=(o=a.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var d,m,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return <Dialog>
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
              <Input id='link' defaultValue='https://ui.shadcn.com/docs/installation' readOnly />
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
      </Dialog>;
  }
}`,...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const b=["Default","CustomCloseButton"],V=Object.freeze(Object.defineProperty({__proto__:null,CustomCloseButton:s,Default:a,__namedExportsOrder:b,default:v},Symbol.toStringTag,{value:"Module"}));export{V as C,a as D,s as a};
