import{j as e}from"./jsx-runtime-gfuiFmrk.js";import{r as p}from"./index-B3ehnkiM.js";import{$ as D,a as E,b as I,c as H,d as B,e as O,f as L,g as z}from"./index-DMNmvXcV.js";import{c as R}from"./index-DrPcCT0w.js";import{a as n}from"./utils-DJk2kaG7.js";import{X as A}from"./x-C5DrP9gb.js";import{L as S}from"./index-60VDg0sI.js";import{B as h}from"./index-D5_E73Qc.js";import{I as b}from"./index-DuSNxgMV.js";const u=O,f=L,P=I,M=z,x=p.forwardRef(({className:s,...t},a)=>e.jsx(D,{className:n("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",s),...t,ref:a}));x.displayName=D.displayName;const V=R("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),d=p.forwardRef(({side:s="right",className:t,children:a,...F},k)=>e.jsxs(M,{children:[e.jsx(x,{}),e.jsxs(E,{ref:k,className:n(V({side:s}),t),...F,children:[a,e.jsxs(I,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[e.jsx(A,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));d.displayName=E.displayName;const c=({className:s,...t})=>e.jsx("div",{className:n("flex flex-col space-y-2 text-center sm:text-left",s),...t});c.displayName="SheetHeader";const g=({className:s,...t})=>e.jsx("div",{className:n("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",s),...t});g.displayName="SheetFooter";const l=p.forwardRef(({className:s,...t},a)=>e.jsx(H,{ref:a,className:n("text-lg font-semibold text-foreground",s),...t}));l.displayName=H.displayName;const m=p.forwardRef(({className:s,...t},a)=>e.jsx(B,{ref:a,className:n("text-sm text-muted-foreground",s),...t}));m.displayName=B.displayName;x.__docgenInfo={description:"",methods:[]};d.__docgenInfo={description:"",methods:[],props:{side:{defaultValue:{value:'"right"',computed:!1},required:!1}}};c.__docgenInfo={description:"",methods:[],displayName:"SheetHeader"};g.__docgenInfo={description:"",methods:[],displayName:"SheetFooter"};l.__docgenInfo={description:"",methods:[]};m.__docgenInfo={description:"",methods:[]};const U={title:"Components/Sheet",component:u,parameters:{layout:"centered"}},r={render:()=>e.jsxs(u,{children:[e.jsx(f,{asChild:!0,children:e.jsx(h,{variant:"outline",children:"Open"})}),e.jsx(d,{children:e.jsxs(c,{children:[e.jsx(l,{children:"Are you absolutely sure?"}),e.jsx(m,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]})})]})},o={render:()=>{const s=["top","right","bottom","left"];return e.jsx("div",{className:"grid grid-cols-2 gap-2",children:s.map(t=>e.jsxs(u,{children:[e.jsx(f,{asChild:!0,children:e.jsx(h,{variant:"outline",children:t})}),e.jsxs(d,{side:t,children:[e.jsxs(c,{children:[e.jsx(l,{children:"Edit profile"}),e.jsx(m,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(S,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(b,{id:"name",value:"Pedro Duarte",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(S,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(b,{id:"username",value:"@peduarte",className:"col-span-3"})]})]}),e.jsx(g,{children:e.jsx(P,{asChild:!0,children:e.jsx(h,{type:"submit",children:"Save changes"})})})]})]},t))})}},i={render:()=>e.jsxs(u,{children:[e.jsx(f,{asChild:!0,children:e.jsx(h,{variant:"outline",children:"Open"})}),e.jsx(d,{className:"w-[400px] sm:w-[540px] h-[200px] rounded-sm m-2",children:e.jsxs(c,{children:[e.jsx(l,{children:"Are you absolutely sure?"}),e.jsx(m,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]})})]})};var y,j,v;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    return <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline'>Open</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>;
  }
}`,...(v=(j=r.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var N,T,$;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const SHEET_SIDES = (["top", "right", "bottom", "left"] as const);
    return <div className='grid grid-cols-2 gap-2'>
        {SHEET_SIDES.map(side => <Sheet key={side}>
            <SheetTrigger asChild>
              <Button variant='outline'>{side}</Button>
            </SheetTrigger>
            <SheetContent side={side}>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're
                  done.
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
          </Sheet>)}
      </div>;
  }
}`,...($=(T=o.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var C,w,_;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    return <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline'>Open</Button>
        </SheetTrigger>
        <SheetContent className='w-[400px] sm:w-[540px] h-[200px] rounded-sm m-2'>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>;
  }
}`,...(_=(w=i.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};const q=["Default","Side","Size"],te=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Side:o,Size:i,__namedExportsOrder:q,default:U},Symbol.toStringTag,{value:"Module"}));export{te as C,r as D,o as S,i as a};
