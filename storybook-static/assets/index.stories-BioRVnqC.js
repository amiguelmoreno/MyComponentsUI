import{j as e}from"./jsx-runtime-gfuiFmrk.js";import{r as d}from"./index-B3ehnkiM.js";import{c as A}from"./index-DrPcCT0w.js";import{a as c}from"./utils-DJk2kaG7.js";import{c as h}from"./createLucideIcon-CvIVernL.js";/**
 * @license lucide-react v0.371.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=h("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]),j=A("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 border-2 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),o=d.forwardRef(({className:t,variant:r,...a},y)=>e.jsx("div",{ref:y,role:"alert",className:c(j({variant:r}),t),...a}));o.displayName="Alert";const i=d.forwardRef(({className:t,...r},a)=>e.jsx("h5",{ref:a,className:c("mb-1 font-medium leading-none tracking-tight",t),...r}));i.displayName="AlertTitle";const l=d.forwardRef(({className:t,...r},a)=>e.jsx("div",{ref:a,className:c("text-sm [&_p]:leading-relaxed",t),...r}));l.displayName="AlertDescription";o.__docgenInfo={description:"",methods:[],displayName:"Alert"};i.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};l.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};const N={title:"Components/Alert",component:o,parameters:{layout:"centered"},argTypes:{variant:{control:{type:"select"},options:["default","destructive"],table:{defaultValue:{summary:"default"}}}},args:{variant:"default"}},n={render:({...t})=>e.jsxs(o,{variant:t.variant,children:[e.jsx(x,{className:"h-4 w-4"}),e.jsx(i,{children:"Heads up!"}),e.jsx(l,{children:"You can add components and dependencies to your app using the cli."})]})},s={render:()=>e.jsxs(o,{variant:"destructive",children:[e.jsx(x,{className:"h-4 w-4"}),e.jsx(i,{children:"Heads up!"}),e.jsx(l,{children:"You can add components and dependencies to your app using the cli."})]})};var p,u,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => {
    return <Alert variant={args.variant}>
        <Terminal className='h-4 w-4' />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>;
  }
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var v,g,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    return <Alert variant='destructive'>
        <Terminal className='h-4 w-4' />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>;
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const T=["Default","Destructive"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Destructive:s,__namedExportsOrder:T,default:N},Symbol.toStringTag,{value:"Module"}));export{S as C,n as D,s as a};
