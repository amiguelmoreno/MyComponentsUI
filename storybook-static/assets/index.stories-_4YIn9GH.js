import{j as e}from"./jsx-runtime-gfuiFmrk.js";import{r as c}from"./index-B3ehnkiM.js";import{_ as j}from"./index-BtW3vQL8.js";import{$ as N}from"./index-CcyUcsxs.js";import{$ as T}from"./index-DD6JRj2r.js";import{$ as k}from"./index-C10IWUuP.js";import{c as w}from"./index-DrPcCT0w.js";import{a as _}from"./utils-DJk2kaG7.js";import{c as f}from"./createLucideIcon-CvIVernL.js";/**
 * @license lucide-react v0.371.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=f("Bold",[["path",{d:"M14 12a4 4 0 0 0 0-8H6v8",key:"v2sylx"}],["path",{d:"M15 20a4 4 0 0 0 0-8H6v8Z",key:"1ef5ya"}]]);/**
 * @license lucide-react v0.371.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=f("Italic",[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]]);/**
 * @license lucide-react v0.371.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=f("Underline",[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]]),z=c.forwardRef((a,o)=>{const{pressed:n,defaultPressed:l=!1,onPressedChange:i,...h}=a,[d=!1,$]=T({prop:n,onChange:i,defaultProp:l});return c.createElement(k.button,j({type:"button","aria-pressed":d,"data-state":d?"on":"off","data-disabled":a.disabled?"":void 0},h,{ref:o,onClick:N(a.onClick,()=>{a.disabled||$(!d)})}))}),v=z,I=w("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"},size:{default:"h-10 px-3",sm:"h-9 px-2.5",lg:"h-11 px-5"}},defaultVariants:{variant:"default",size:"default"}}),t=c.forwardRef(({className:a,variant:o,size:n,...l},i)=>e.jsx(v,{ref:i,className:_(I({variant:o,size:n,className:a})),...l}));t.displayName=v.displayName;t.__docgenInfo={description:"",methods:[]};const S={title:"Components/Toggle",component:t,parameters:{layout:"centered"},argTypes:{variant:{control:{type:"select"},options:["default","outline"],table:{defaultValue:{summary:"default"}}},size:{control:{type:"select"},options:["default","sm","lg"],table:{defaultValue:{summary:"default"}}}},args:{variant:"default",size:"default"}},r={render:a=>e.jsx(t,{...a,children:e.jsx(y,{className:"h-4 w-4"})})},s={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t,{variant:"outline",children:e.jsx(P,{className:"h-4 w-4"})}),e.jsx(t,{variant:"outline",children:e.jsx(y,{className:"h-4 w-4"})}),e.jsx(t,{variant:"outline",children:e.jsx(C,{className:"h-4 w-4"})})]})};var u,m,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Toggle {...args}>
      <Bold className='h-4 w-4' />
    </Toggle>
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,b,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className='flex gap-2'>
      <Toggle variant={"outline"}>
        <Italic className='h-4 w-4' />
      </Toggle>
      <Toggle variant={"outline"}>
        <Bold className='h-4 w-4' />
      </Toggle>
      <Toggle variant={"outline"}>
        <Underline className='h-4 w-4' />
      </Toggle>
    </div>
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const V=["Default","Group"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Group:s,__namedExportsOrder:V,default:S},Symbol.toStringTag,{value:"Module"}));export{L as C,r as D,s as G};
