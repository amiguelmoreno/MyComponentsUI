import{j as e}from"./jsx-runtime-gfuiFmrk.js";import{C as a}from"./index-Bnne-Tr1.js";import{z as m,u as S,F as N,a as C,b as k,c as w,d as T,e as D,t as z}from"./index-Diaggc9h.js";import{B as Y}from"./index-D5_E73Qc.js";import{T as _,t as O}from"./toaster-CpQpXJIR.js";const P={title:"Components/Checkbox",component:a,parameters:{layout:"centered"},argTypes:{checked:{control:{type:"boolean"},table:{defaultValue:{summary:"true"}}}},args:{checked:!0}},r={render:({...o})=>e.jsx(a,{checked:o.checked})},s={render:()=>e.jsxs("div",{className:"items-top flex space-x-2",children:[e.jsx(a,{id:"terms1"}),e.jsxs("div",{className:"grid gap-1.5 leading-none",children:[e.jsx("label",{htmlFor:"terms1",className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"Accept terms and conditions"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"You agree to our Terms of Service and Privacy Policy."})]})]})},n={render:()=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(a,{id:"terms2",disabled:!0}),e.jsx("label",{htmlFor:"terms2",className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"Accept terms and conditions"})]})},t={decorators:[o=>e.jsxs("div",{children:[e.jsx(_,{}),e.jsx(o,{})]})],render:()=>{const o=m.object({mobile:m.boolean().default(!1).optional()}),i=S({resolver:z(o),defaultValues:{mobile:!0}});function j(c){O({title:"You submitted the following values:",description:e.jsx("pre",{className:"mt-2 w-[340px] rounded-md bg-slate-950 p-4",children:e.jsx("code",{className:"text-white",children:JSON.stringify(c,null,2)})})})}return e.jsx(N,{...i,children:e.jsxs("form",{onSubmit:i.handleSubmit(j),className:"space-y-6 m-36",children:[e.jsx(C,{control:i.control,name:"mobile",render:({field:c})=>e.jsxs(k,{className:"flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4",children:[e.jsx(w,{children:e.jsx(a,{checked:c.value,onCheckedChange:c.onChange})}),e.jsxs("div",{className:"space-y-1 leading-none",children:[e.jsx(T,{children:"Use different settings for my mobile devices"}),e.jsx(D,{children:"You can manage your mobile notifications in the advance setting section."})]})]})}),e.jsx(Y,{type:"submit",children:"Submit"})]})})}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => <Checkbox checked={args.checked} />
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var p,b,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className='items-top flex space-x-2'>
      <Checkbox id='terms1' />
      <div className='grid gap-1.5 leading-none'>
        <label htmlFor='terms1' className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
          Accept terms and conditions
        </label>
        <p className='text-sm text-muted-foreground'>
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var f,h,g;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className='flex items-center space-x-2'>
      <Checkbox id='terms2' disabled />
      <label htmlFor='terms2' className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
        Accept terms and conditions
      </label>
    </div>
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var F,y,v;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  decorators: [Story => <div>
        <Toaster />
        <Story />
      </div>],
  render: () => {
    const FormSchema = z.object({
      mobile: z.boolean().default(false).optional()
    });
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        mobile: true
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
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6 m-36'>
          <FormField control={form.control} name='mobile' render={({
          field
        }) => <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className='space-y-1 leading-none'>
                  <FormLabel>
                    Use different settings for my mobile devices
                  </FormLabel>
                  <FormDescription>
                    You can manage your mobile notifications in the advance
                    setting section.
                  </FormDescription>
                </div>
              </FormItem>} />
          <Button type='submit'>Submit</Button>
        </form>
      </Form>;
  }
}`,...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const A=["Default","WithText","Disabled","FormCheckbox"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Disabled:n,FormCheckbox:t,WithText:s,__namedExportsOrder:A,default:P},Symbol.toStringTag,{value:"Module"}));export{E as C,r as D,t as F,s as W,n as a};
