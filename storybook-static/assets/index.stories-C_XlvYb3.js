import{j as o}from"./jsx-runtime-gfuiFmrk.js";import{c as S}from"./index-DrPcCT0w.js";import{a as j}from"./utils-DJk2kaG7.js";const h=S("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function e({className:s,variant:x,...b}){return o.jsx("div",{className:j(h({variant:x}),s),...b})}e.__docgenInfo={description:"",methods:[],displayName:"Badge",composes:["VariantProps"]};const _={title:"Components/Badge",component:e,parameters:{layout:"centered"},argTypes:{variant:{control:{type:"select"},options:["default","secondary","destructive","outline"],table:{defaultValue:{summary:"default"}}}},args:{variant:"default"}},r={render:({...s})=>o.jsx(e,{variant:s.variant,children:"Badge"})},a={render:()=>o.jsx(e,{variant:"secondary",children:"Badge"})},t={render:()=>o.jsx(e,{variant:"outline",children:"Badge"})},n={render:()=>o.jsx(e,{variant:"destructive",children:"Badge"})};var d,c,i;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => {
    return <Badge variant={args.variant}>Badge</Badge>;
  }
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var u,g,l;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    return <Badge variant='secondary'>Badge</Badge>;
  }
}`,...(l=(g=a.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var p,m,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return <Badge variant='outline'>Badge</Badge>;
  }
}`,...(f=(m=t.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var v,y,B;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    return <Badge variant='destructive'>Badge</Badge>;
  }
}`,...(B=(y=n.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const O=["Default","Secondary","Outline","Destructive"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Destructive:n,Outline:t,Secondary:a,__namedExportsOrder:O,default:_},Symbol.toStringTag,{value:"Module"}));export{E as C,r as D,t as O,a as S,n as a};
