import{j as a}from"./jsx-runtime-gfuiFmrk.js";import{A as t,a as d,b as p}from"./index-BOOuZKd6.js";import{U as u}from"./user-Bybg_CiX.js";const v={title:"Components/Avatar",component:t,parameters:{layout:"centered"}},r={render:()=>a.jsxs(t,{className:"w-20 h-20",children:[a.jsx(d,{src:"https://github.com/shadcn.png",alt:"avatar"}),a.jsx(p,{children:"CN"})]})},e={render:()=>a.jsxs(t,{className:"w-20 h-20",children:[a.jsx(d,{src:"NoImageFound",alt:"avatar"}),a.jsx(p,{children:a.jsx(u,{className:"w-10 h-10"})})]})};var s,n,o;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    return <Avatar className='w-20 h-20'>
        <AvatarImage src='https://github.com/shadcn.png' alt='avatar' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>;
  }
}`,...(o=(n=r.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var c,l,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return <Avatar className='w-20 h-20'>
        <AvatarImage src='NoImageFound' alt='avatar' />
        <AvatarFallback>
          <User className='w-10 h-10' />
        </AvatarFallback>
      </Avatar>;
  }
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const i=["Default","Fallback"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Fallback:e,__namedExportsOrder:i,default:v},Symbol.toStringTag,{value:"Module"}));export{g as C,r as D,e as F};
