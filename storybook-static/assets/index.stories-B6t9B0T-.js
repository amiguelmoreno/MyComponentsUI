import{j as e}from"./jsx-runtime-gfuiFmrk.js";import{L as t}from"./index-60VDg0sI.js";import{C as i}from"./index-Bnne-Tr1.js";const l={title:"Components/Label",component:t,parameters:{layout:"centered"}},r={render:()=>e.jsx(t,{htmlFor:"email",children:"Your email address"})},s={render:()=>e.jsx("div",{children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(i,{id:"terms"}),e.jsx(t,{htmlFor:"terms",children:"Accept terms and conditions"})]})})};var o,a,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <Label htmlFor='email'>Your email address</Label>
}`,...(n=(a=r.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var c,m,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div>
      <div className='flex items-center space-x-2'>
        <Checkbox id='terms' />
        <Label htmlFor='terms'>Accept terms and conditions</Label>
      </div>
    </div>
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const p=["Default","InCheckbox"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:r,InCheckbox:s,__namedExportsOrder:p,default:l},Symbol.toStringTag,{value:"Module"}));export{h as C,r as D,s as I};
