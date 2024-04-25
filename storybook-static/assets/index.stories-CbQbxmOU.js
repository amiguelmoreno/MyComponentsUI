import{j as e}from"./jsx-runtime-gfuiFmrk.js";import{B as a}from"./index-D5_E73Qc.js";import{T as v,u as i,a as j}from"./toaster-CpQpXJIR.js";const g={title:"Components/Toast",component:a,decorators:[t=>e.jsxs("div",{children:[e.jsx(v,{}),e.jsx(t,{})]})],parameters:{layout:"centered"}},n={render:()=>{const{toast:t}=i();return e.jsx("div",{className:"flex justify-center items-center w-[800px] h-[300px] overflow-hidden ",children:e.jsx(a,{className:"justify-self-center",onClick:()=>{t({description:"Friday, February 10, 2023 at 5:57 PM"})},children:"Show Toast"})})}},s={render:()=>{const{toast:t}=i();return e.jsx("div",{className:"flex justify-center items-center w-[800px] h-[300px] overflow-hidden ",children:e.jsx(a,{className:"justify-self-center",onClick:()=>{t({title:"Scheduled: Catch up",description:"Your message has been sent."})},children:"Show Toast"})})}},r={render:()=>{const{toast:t}=i();return e.jsx("div",{className:"flex justify-center items-center w-[800px] h-[300px] overflow-hidden ",children:e.jsx(a,{className:"justify-self-center",onClick:()=>{t({title:"Uh oh! Something went wrong.",description:"There was a problem with your request.",action:e.jsx(j,{altText:"Try again",children:"Try again"})})},children:"Show Toast"})})}},o={render:()=>{const{toast:t}=i();return e.jsx("div",{className:"flex justify-center items-center w-[800px] h-[300px] overflow-hidden ",children:e.jsx(a,{variant:"outline",className:"justify-self-center",onClick:()=>{t({variant:"destructive",title:"Uh oh! Something went wrong.",description:"There was a problem with your request.",action:e.jsx(j,{altText:"Try again",children:"Try again"})})},children:"Show Toast"})})}};var c,l,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const {
      toast
    } = useToast();
    return <div className='flex justify-center items-center w-[800px] h-[300px] overflow-hidden '>
        <Button className='justify-self-center' onClick={() => {
        toast({
          description: "Friday, February 10, 2023 at 5:57 PM"
        });
      }}>
          Show Toast
        </Button>
      </div>;
  }
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,h,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const {
      toast
    } = useToast();
    return <div className='flex justify-center items-center w-[800px] h-[300px] overflow-hidden '>
        <Button className='justify-self-center' onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Your message has been sent."
        });
      }}>
          Show Toast
        </Button>
      </div>;
  }
}`,...(m=(h=s.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var p,f,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const {
      toast
    } = useToast();
    return <div className='flex justify-center items-center w-[800px] h-[300px] overflow-hidden '>
        <Button className='justify-self-center' onClick={() => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText='Try again'>Try again</ToastAction>
        });
      }}>
          Show Toast
        </Button>
      </div>;
  }
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var w,T,y;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const {
      toast
    } = useToast();
    return <div className='flex justify-center items-center w-[800px] h-[300px] overflow-hidden '>
        <Button variant='outline' className='justify-self-center' onClick={() => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText='Try again'>Try again</ToastAction>
        });
      }}>
          Show Toast
        </Button>
      </div>;
  }
}`,...(y=(T=o.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};const S=["Default","WithTitle","WithAction","Destructive"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Destructive:o,WithAction:r,WithTitle:s,__namedExportsOrder:S,default:g},Symbol.toStringTag,{value:"Module"}));export{B as C,n as D,s as W,r as a,o as b};
