import{j as e}from"./jsx-runtime-gfuiFmrk.js";import{A as n,a,b as i,c as s,d as c,e as g,f as d,g as u,h as A}from"./index-dEjL3xIO.js";import{B as D}from"./index-D5_E73Qc.js";const m={title:"Components/Alert Dialog",component:n,parameters:{layout:"centered"}},r={render:()=>e.jsxs(n,{children:[e.jsx(a,{asChild:!0,children:e.jsx(D,{children:"Open"})}),e.jsxs(i,{children:[e.jsxs(s,{children:[e.jsx(c,{children:"Are you absolutely sure?"}),e.jsx(g,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),e.jsxs(d,{children:[e.jsx(u,{children:"Cancel"}),e.jsx(A,{children:"Continue"})]})]})]})};var t,o,l;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    return <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>Open</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>;
  }
}`,...(l=(o=r.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const p=["Default"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:p,default:m},Symbol.toStringTag,{value:"Module"}));export{x as C,r as D};
