import{j as e}from"./jsx-runtime-gfuiFmrk.js";import{r as v}from"./index-B3ehnkiM.js";import{a as w}from"./utils-DJk2kaG7.js";import{L as b}from"./index-60VDg0sI.js";import{B as N}from"./index-D5_E73Qc.js";const r=v.forwardRef(({className:y,...T},j)=>e.jsx("textarea",{className:w("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",y),ref:j,...T}));r.displayName="Textarea";r.__docgenInfo={description:"",methods:[],displayName:"Textarea"};const S={title:"Components/Text Area",component:r,parameters:{layout:"centered"}},s={render:()=>e.jsx(r,{placeholder:"Type your message here.",className:"w-[300px]"})},a={render:()=>e.jsxs("div",{className:"grid w-full gap-1.5",children:[e.jsx(b,{htmlFor:"message",children:"Your message"}),e.jsx(r,{placeholder:"Type your message here.",id:"message"})]})},o={render:()=>e.jsxs("div",{className:"grid w-full gap-1.5",children:[e.jsx(b,{htmlFor:"message-2",children:"Your Message"}),e.jsx(r,{placeholder:"Type your message here.",id:"message-2"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Your message will be copied to the support team."})]})},t={render:()=>e.jsxs("div",{className:"grid w-full gap-2",children:[e.jsx(r,{placeholder:"Type your message here."}),e.jsx(N,{children:"Send message"})]})};var l,d,n;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Textarea placeholder='Type your message here.' className='w-[300px]' />
}`,...(n=(d=s.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var m,c,i;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className='grid w-full gap-1.5'>
      <Label htmlFor='message'>Your message</Label>
      <Textarea placeholder='Type your message here.' id='message' />
    </div>
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,u,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className='grid w-full gap-1.5'>
      <Label htmlFor='message-2'>Your Message</Label>
      <Textarea placeholder='Type your message here.' id='message-2' />
      <p className='text-sm text-muted-foreground'>
        Your message will be copied to the support team.
      </p>
    </div>
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,h,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className='grid w-full gap-2'>
      <Textarea placeholder='Type your message here.' />
      <Button>Send message</Button>
    </div>
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const L=["Default","WithLabel","WithText","WithButton"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:s,WithButton:t,WithLabel:a,WithText:o,__namedExportsOrder:L,default:S},Symbol.toStringTag,{value:"Module"}));export{C,s as D,a as W,o as a,t as b};
