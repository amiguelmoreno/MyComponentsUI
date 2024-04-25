import{j as e}from"./jsx-runtime-gfuiFmrk.js";import{I as r}from"./index-DuSNxgMV.js";import{L as B}from"./index-60VDg0sI.js";import{B as D}from"./index-D5_E73Qc.js";import{z as c,u as T,F as _,a as z,b as O,d as W,c as M,e as P,f as U,t as J}from"./index-Diaggc9h.js";import{T as R,t as V}from"./toaster-CpQpXJIR.js";const Y={title:"Components/Input",component:r,parameters:{layout:"centered"}},a={render:()=>e.jsx(r,{type:"email",placeholder:"Email"})},t={render:()=>e.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[e.jsx(B,{htmlFor:"picture",children:"Picture"}),e.jsx(r,{id:"picture",type:"file"})]})},o={render:()=>e.jsx(r,{disabled:!0,type:"email",placeholder:"Email"})},n={render:()=>e.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[e.jsx(B,{htmlFor:"email",children:"Email"}),e.jsx(r,{type:"email",id:"email",placeholder:"Email"})]})},m={render:()=>e.jsxs("div",{className:"flex w-full max-w-sm items-center space-x-2",children:[e.jsx(r,{type:"email",placeholder:"Email"}),e.jsx(D,{type:"submit",children:"Subscribe"})]})},k=c.object({username:c.string().min(2,{message:"Username must be at least 2 characters."})}),l={decorators:[s=>e.jsxs("div",{children:[e.jsx(R,{}),e.jsx(s,{})]})],render:()=>{const s=T({resolver:J(k),defaultValues:{username:""}});function C(i){V({title:"You submitted the following values:",description:e.jsx("pre",{className:"mt-2 w-[340px] rounded-md bg-slate-950 p-4",children:e.jsx("code",{className:"text-white",children:JSON.stringify(i,null,2)})})})}return e.jsx(_,{...s,children:e.jsxs("form",{onSubmit:s.handleSubmit(C),className:"w-2/3 space-y-6 m-36",children:[e.jsx(z,{control:s.control,name:"username",render:({field:i})=>e.jsxs(O,{children:[e.jsx(W,{children:"Username"}),e.jsx(M,{children:e.jsx(r,{placeholder:"shadcn",...i})}),e.jsx(P,{children:"This is your public display name."}),e.jsx(U,{})]})}),e.jsx(D,{type:"submit",children:"Submit"})]})})}};var d,p,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Input type='email' placeholder='Email' />
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,b,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label htmlFor='picture'>Picture</Label>
      <Input id='picture' type='file' />
    </div>
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var x,F,j;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Input disabled type='email' placeholder='Email' />
}`,...(j=(F=o.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var y,S,g;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label htmlFor='email'>Email</Label>
      <Input type='email' id='email' placeholder='Email' />
    </div>
}`,...(g=(S=n.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var w,v,I;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className='flex w-full max-w-sm items-center space-x-2'>
      <Input type='email' placeholder='Email' />
      <Button type='submit'>Subscribe</Button>
    </div>
}`,...(I=(v=m.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var N,E,L;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  decorators: [Story => <div>
        <Toaster />
        <Story />
      </div>],
  render: () => {
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        username: ""
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
        <form onSubmit={form.handleSubmit(onSubmit)} className='w-2/3 space-y-6 m-36'>
          <FormField control={form.control} name='username' render={({
          field
        }) => <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder='shadcn' {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>} />
          <Button type='submit'>Submit</Button>
        </form>
      </Form>;
  }
}`,...(L=(E=l.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const q=["Default","File","Disable","WithLabel","WithButton","InForm"],Z=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Disable:o,File:t,InForm:l,WithButton:m,WithLabel:n,__namedExportsOrder:q,default:Y},Symbol.toStringTag,{value:"Module"}));export{Z as C,a as D,t as F,l as I,n as W,o as a,m as b};
