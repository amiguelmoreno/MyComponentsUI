import{j as e}from"./jsx-runtime-gfuiFmrk.js";import{B as r}from"./index-D5_E73Qc.js";import{c as i}from"./createLucideIcon-CvIVernL.js";/**
 * @license lucide-react v0.371.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=i("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.371.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=i("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.371.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=i("SendHorizontal",[["path",{d:"m3 3 3 9-3 9 19-9Z",key:"1aobqy"}],["path",{d:"M6 12h16",key:"s4cdu5"}]]),C={title:"Components/Button",component:r,parameters:{layout:"centered"},argTypes:{variant:{control:{type:"select"},options:["default","destructive","outline","secondary","ghost","link"],table:{defaultValue:{summary:"default"}}},size:{control:{type:"select"},options:["default","sm","lg","icon"],table:{defaultValue:{summary:"default"}}},disabled:{control:{type:"boolean"},table:{defaultValue:{summary:"true"}}}},args:{variant:"default",size:"default",disabled:!1}},t={render:({...d})=>e.jsx(r,{variant:d.variant,size:d.size,disabled:d.disabled,children:"Button"})},a={render:()=>e.jsxs(r,{children:[e.jsx(L,{strokeWidth:2.5,className:"mr-2 h-4 w-4"}),"Button with icon"]})},n={render:()=>e.jsx(r,{children:e.jsx(k,{className:"h-5 w-5"})})},s={render:()=>e.jsxs(r,{disabled:!0,children:[e.jsx(S,{className:"mr-2 h-4 w-4 animate-spin"}),"Please wait"]})},o={render:()=>e.jsx(r,{asChild:!0,children:e.jsx("a",{children:"Login"})})};var c,l,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => {
    return <Button variant={args.variant} size={args.size} disabled={args.disabled}>
        Button
      </Button>;
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,p,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <Button>
        <Mail strokeWidth={2.5} className='mr-2 h-4 w-4' />
        Button with icon
      </Button>;
  }
}`,...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,f,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    return <Button>
        <SendHorizontal className='h-5 w-5' />
      </Button>;
  }
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var B,b,x;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    return <Button disabled>
        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
        Please wait
      </Button>;
  }
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var j,w,z;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    return <Button asChild>
        <a>Login</a>
      </Button>;
  }
}`,...(z=(w=o.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const v=["Default","WithIcon","Icon","Loading","AsChild"],_=Object.freeze(Object.defineProperty({__proto__:null,AsChild:o,Default:t,Icon:n,Loading:s,WithIcon:a,__namedExportsOrder:v,default:C},Symbol.toStringTag,{value:"Module"}));export{o as A,_ as C,t as D,n as I,s as L,a as W};
