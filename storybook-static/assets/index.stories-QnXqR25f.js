import{j as n}from"./jsx-runtime-gfuiFmrk.js";import{D as a,a as c,b as m,c as D,d as M,e as r,f as j,g as t}from"./index-DtjlrCZs.js";import{B as w}from"./index-D5_E73Qc.js";import{r as g}from"./index-B3ehnkiM.js";const I={title:"Components/Dropdown Menu",component:a,parameters:{layout:"centered"}},o={render:()=>n.jsxs(a,{children:[n.jsx(c,{asChild:!0,children:n.jsx(w,{variant:"outline",children:"Open"})}),n.jsxs(m,{children:[n.jsx(D,{children:"My Account"}),n.jsx(M,{}),n.jsx(r,{children:"Profile"}),n.jsx(r,{children:"Billing"}),n.jsx(r,{children:"Team"}),n.jsx(r,{children:"Subscription"})]})]})},e={render:()=>{const[h,x]=g.useState("bottom");return n.jsxs(a,{children:[n.jsx(c,{asChild:!0,children:n.jsx(w,{variant:"outline",children:"Open"})}),n.jsxs(m,{className:"w-56",children:[n.jsx(D,{children:"Panel Position"}),n.jsx(M,{}),n.jsxs(j,{value:h,onValueChange:x,children:[n.jsx(t,{value:"top",children:"Top"}),n.jsx(t,{value:"bottom",children:"Bottom"}),n.jsx(t,{value:"right",children:"Right"})]})]})]})}};var d,s,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline'>Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>;
  }
}`,...(u=(s=o.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var i,p,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [position, setPosition] = useState("bottom");
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline'>Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56'>
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value='top'>Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value='bottom'>Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value='right'>Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>;
  }
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const R=["Default","RadioGroup"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:o,RadioGroup:e,__namedExportsOrder:R,default:I},Symbol.toStringTag,{value:"Module"}));export{S as C,o as D,e as R};
