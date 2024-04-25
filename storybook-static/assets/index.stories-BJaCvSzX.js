import{j as e}from"./jsx-runtime-gfuiFmrk.js";import{r as s}from"./index-B3ehnkiM.js";import{$ as A,_ as y}from"./index-BtW3vQL8.js";import{$ as J}from"./index-CcyUcsxs.js";import{$ as V}from"./index-gzTY19Q4.js";import{$ as Y}from"./index-DD6JRj2r.js";import{$ as U}from"./index-DTfEcMay.js";import{$ as W}from"./index-e03L_g6a.js";import{$ as B}from"./index-C10IWUuP.js";import{a as S}from"./utils-DJk2kaG7.js";import{z as v,u as X,F as G,a as F,b as j,d as C,e as N,c as _,t as K}from"./index-Diaggc9h.js";import{T as Q,t as Z}from"./toaster-CpQpXJIR.js";import{B as ee}from"./index-D5_E73Qc.js";const T="Switch",[te,Se]=V(T),[oe,re]=te(T),ne=s.forwardRef((t,n)=>{const{__scopeSwitch:r,name:o,checked:a,defaultChecked:f,required:l,disabled:c,value:m="on",onCheckedChange:x,...k}=t,[i,$]=s.useState(null),L=A(n,h=>$(h)),g=s.useRef(!1),w=i?!!i.closest("form"):!0,[p=!1,q]=Y({prop:a,defaultProp:f,onChange:x});return s.createElement(oe,{scope:r,checked:p,disabled:c},s.createElement(B.button,y({type:"button",role:"switch","aria-checked":p,"aria-required":l,"data-state":M(p),"data-disabled":c?"":void 0,disabled:c,value:m},k,{ref:L,onClick:J(t.onClick,h=>{q(H=>!H),w&&(g.current=h.isPropagationStopped(),g.current||h.stopPropagation())})})),w&&s.createElement(ce,{control:i,bubbles:!g.current,name:o,value:m,checked:p,required:l,disabled:c,style:{transform:"translateX(-100%)"}}))}),se="SwitchThumb",ae=s.forwardRef((t,n)=>{const{__scopeSwitch:r,...o}=t,a=re(se,r);return s.createElement(B.span,y({"data-state":M(a.checked),"data-disabled":a.disabled?"":void 0},o,{ref:n}))}),ce=t=>{const{control:n,checked:r,bubbles:o=!0,...a}=t,f=s.useRef(null),l=U(r),c=W(n);return s.useEffect(()=>{const m=f.current,x=window.HTMLInputElement.prototype,i=Object.getOwnPropertyDescriptor(x,"checked").set;if(l!==r&&i){const $=new Event("click",{bubbles:o});i.call(m,r),m.dispatchEvent($)}},[l,r,o]),s.createElement("input",y({type:"checkbox","aria-hidden":!0,defaultChecked:r},a,{tabIndex:-1,ref:f,style:{...t.style,...c,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function M(t){return t?"checked":"unchecked"}const O=ne,ie=ae,d=s.forwardRef(({className:t,...n},r)=>e.jsx(O,{className:S("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",t),...n,ref:r,children:e.jsx(ie,{className:S("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})}));d.displayName=O.displayName;d.__docgenInfo={description:"",methods:[]};const de={title:"Components/Switch",component:d,parameters:{layout:"centered"}},u={render:()=>e.jsx(d,{})},b={decorators:[t=>e.jsxs("div",{children:[e.jsx(Q,{}),e.jsx(t,{})]})],render:()=>{const t=v.object({marketing_emails:v.boolean().default(!1).optional(),security_emails:v.boolean()}),n=X({resolver:K(t),defaultValues:{security_emails:!0}});function r(o){Z({title:"You submitted the following values:",description:e.jsx("pre",{className:"mt-2 w-[340px] rounded-md bg-slate-950 p-4",children:e.jsx("code",{className:"text-white",children:JSON.stringify(o,null,2)})})})}return e.jsx(G,{...n,children:e.jsxs("form",{onSubmit:n.handleSubmit(r),className:"w-[500px] space-y-6 m-36",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 text-lg font-medium",children:"Email Notifications"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(F,{control:n.control,name:"marketing_emails",render:({field:o})=>e.jsxs(j,{className:"flex flex-row items-center justify-between rounded-lg border p-4",children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx(C,{className:"text-base",children:"Marketing emails"}),e.jsx(N,{children:"Receive emails about new products, features, and more."})]}),e.jsx(_,{children:e.jsx(d,{checked:o.value,onCheckedChange:o.onChange})})]})}),e.jsx(F,{control:n.control,name:"security_emails",render:({field:o})=>e.jsxs(j,{className:"flex flex-row items-center justify-between rounded-lg border p-4",children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx(C,{className:"text-base",children:"Security emails"}),e.jsx(N,{children:"Receive emails about your account security."})]}),e.jsx(_,{children:e.jsx(d,{checked:o.value,onCheckedChange:o.onChange,disabled:!0,"aria-readonly":!0})})]})})]})]}),e.jsx(ee,{type:"submit",children:"Submit"})]})})}};var E,I,R;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Switch />
}`,...(R=(I=u.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var P,z,D;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  decorators: [Story => <div>
        <Toaster />
        <Story />
      </div>],
  render: () => {
    const FormSchema = z.object({
      marketing_emails: z.boolean().default(false).optional(),
      security_emails: z.boolean()
    });
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        security_emails: true
      }
    });
    function onSubmit(data: z.infer<typeof FormSchema>) {
      toast({
        title: "You submitted the following values:",
        description: <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
            <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
          </pre>
      });
    }
    return <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='w-[500px] space-y-6 m-36'>
          <div>
            <h3 className='mb-4 text-lg font-medium'>Email Notifications</h3>
            <div className='space-y-4'>
              <FormField control={form.control} name='marketing_emails' render={({
              field
            }) => <FormItem className='flex flex-row items-center justify-between rounded-lg border p-4'>
                    <div className='space-y-0.5'>
                      <FormLabel className='text-base'>
                        Marketing emails
                      </FormLabel>
                      <FormDescription>
                        Receive emails about new products, features, and more.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                  </FormItem>} />
              <FormField control={form.control} name='security_emails' render={({
              field
            }) => <FormItem className='flex flex-row items-center justify-between rounded-lg border p-4'>
                    <div className='space-y-0.5'>
                      <FormLabel className='text-base'>
                        Security emails
                      </FormLabel>
                      <FormDescription>
                        Receive emails about your account security.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch checked={field.value} onCheckedChange={field.onChange} disabled aria-readonly />
                    </FormControl>
                  </FormItem>} />
            </div>
          </div>
          <Button type='submit'>Submit</Button>
        </form>
      </Form>;
  }
}`,...(D=(z=b.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};const le=["Default","InForm"],Fe=Object.freeze(Object.defineProperty({__proto__:null,Default:u,InForm:b,__namedExportsOrder:le,default:de},Symbol.toStringTag,{value:"Module"}));export{Fe as C,u as D,b as I};
