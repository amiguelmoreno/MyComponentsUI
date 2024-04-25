import{j as e}from"./jsx-runtime-gfuiFmrk.js";import{F as i,z as o,u as c,a as u,b as d,d as p,c as f,e as b,f as h,t as F}from"./index-Diaggc9h.js";import{B as x}from"./index-D5_E73Qc.js";import{I as j}from"./index-DuSNxgMV.js";import{T as S,t as g}from"./toaster-CpQpXJIR.js";const y={title:"Components/Form",component:i,parameters:{layout:"centered"}},v=o.object({username:o.string().min(2,{message:"Username must be at least 2 characters."})}),n={decorators:[r=>e.jsxs("div",{children:[e.jsx(S,{}),e.jsx(r,{})]})],render:()=>{o.object({username:o.string().min(2,{message:"Username must be at least 2 characters."})});const r=c({resolver:F(v),defaultValues:{username:""}});function l(s){g({title:"You submitted the following values:",description:e.jsx("pre",{className:"mt-2 w-[340px] rounded-md bg-slate-950 p-4",children:e.jsx("code",{className:"text-white",children:JSON.stringify(s,null,2)})})})}return e.jsx(i,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(l),className:"space-y-8 w-[300px] m-36",children:[e.jsx(u,{control:r.control,name:"username",render:({field:s})=>e.jsxs(d,{children:[e.jsx(p,{children:"Username"}),e.jsx(f,{children:e.jsx(j,{placeholder:"shadcn",...s})}),e.jsx(b,{children:"This is your public display name."}),e.jsx(h,{})]})}),e.jsx(x,{type:"submit",children:"Submit"})]})})}};var t,a,m;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  decorators: [Story => <div>
        <Toaster />
        <Story />
      </div>],
  render: () => {
    const FormSchema = z.object({
      username: z.string().min(2, {
        message: "Username must be at least 2 characters."
      })
    });
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
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
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 w-[300px] m-36'>
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
}`,...(m=(a=n.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const w=["Default"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:w,default:y},Symbol.toStringTag,{value:"Module"}));export{T as C,n as D};
