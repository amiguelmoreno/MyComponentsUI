import{j as e}from"./jsx-runtime-gfuiFmrk.js";import{a as m}from"./utils-DJk2kaG7.js";import{B as c}from"./index-D5_E73Qc.js";import{f as n,C as u,a as B}from"./index-CjCZSgEG.js";import{P as p,a as f,b as x}from"./index-DVqZzthW.js";import{r as v}from"./index-B3ehnkiM.js";import{S as _,a as z,b as M,c as O,d as i}from"./index-CtR02GWN.js";import{z as S,u as R,F as W,a as q,b as V,d as Y,c as E,e as A,f as J,t as $}from"./index-Diaggc9h.js";import{T as G,t as H}from"./toaster-CpQpXJIR.js";import{C as h}from"./calendar-C85vOEUs.js";const K={title:"Components/DatePicker",parameters:{layout:"centered"}},o={render:()=>{const[t,a]=v.useState();return e.jsxs(p,{children:[e.jsx(f,{asChild:!0,children:e.jsxs(c,{variant:"outline",className:m("w-[280px] justify-start text-left font-normal",!t&&"text-muted-foreground"),children:[e.jsx(h,{className:"mr-2 h-4 w-4"}),t?n(t,"PPP"):e.jsx("span",{children:"Pick a date"})]})}),e.jsx(x,{className:"w-auto p-0",children:e.jsx(u,{mode:"single",selected:t,onSelect:a,initialFocus:!0})})]})}},s={render:()=>{const[t,a]=v.useState({from:new Date(2022,0,20),to:B(new Date(2022,0,20),20)});return e.jsxs(p,{children:[e.jsx(f,{asChild:!0,children:e.jsxs(c,{id:"date",variant:"outline",className:m("w-[300px] justify-start text-left font-normal",!t&&"text-muted-foreground"),children:[e.jsx(h,{className:"mr-2 h-4 w-4"}),t!=null&&t.from?t.to?e.jsxs(e.Fragment,{children:[n(t.from,"LLL dd, y")," -"," ",n(t.to,"LLL dd, y")]}):n(t.from,"LLL dd, y"):e.jsx("span",{children:"Pick a date"})]})}),e.jsx(x,{className:"w-auto p-0",align:"start",children:e.jsx(u,{initialFocus:!0,mode:"range",defaultMonth:t==null?void 0:t.from,selected:t,onSelect:a,numberOfMonths:2})})]})}},l={render:()=>{const[t,a]=v.useState();return e.jsxs(p,{children:[e.jsx(f,{asChild:!0,children:e.jsxs(c,{variant:"outline",className:m("w-[280px] justify-start text-left font-normal",!t&&"text-muted-foreground"),children:[e.jsx(h,{className:"mr-2 h-4 w-4"}),t?n(t,"PPP"):e.jsx("span",{children:"Pick a date"})]})}),e.jsxs(x,{className:"flex w-auto flex-col space-y-2 p-2",children:[e.jsxs(_,{onValueChange:g=>a(B(new Date,parseInt(g))),children:[e.jsx(z,{children:e.jsx(M,{placeholder:"Select"})}),e.jsxs(O,{position:"popper",children:[e.jsx(i,{value:"0",children:"Today"}),e.jsx(i,{value:"1",children:"Tomorrow"}),e.jsx(i,{value:"3",children:"In 3 days"}),e.jsx(i,{value:"7",children:"In a week"})]})]}),e.jsx("div",{className:"rounded-md border",children:e.jsx(u,{mode:"single",selected:t,onSelect:a})})]})]})}},d={decorators:[t=>e.jsxs("div",{children:[e.jsx(G,{}),e.jsx(t,{})]})],render:()=>{const t=S.object({dob:S.date({required_error:"A date of birth is required."})}),a=R({resolver:$(t)});function g(r){H({title:"You submitted the following values:",description:e.jsx("pre",{className:"mt-2 w-[340px] rounded-md bg-slate-950 p-4",children:e.jsx("code",{className:"text-white",children:JSON.stringify(r,null,2)})})})}return e.jsx(W,{...a,children:e.jsxs("form",{onSubmit:a.handleSubmit(g),className:"space-y-8 m-36",children:[e.jsx(q,{control:a.control,name:"dob",render:({field:r})=>e.jsxs(V,{className:"flex flex-col",children:[e.jsx(Y,{children:"Date of birth"}),e.jsxs(p,{children:[e.jsx(f,{asChild:!0,children:e.jsx(E,{children:e.jsxs(c,{variant:"outline",className:m("w-[240px] pl-3 text-left font-normal",!r.value&&"text-muted-foreground"),children:[r.value?n(r.value,"PPP"):e.jsx("span",{children:"Pick a date"}),e.jsx(h,{className:"ml-auto h-4 w-4 opacity-50"})]})})}),e.jsx(x,{className:"w-auto p-0",align:"start",children:e.jsx(u,{mode:"single",selected:r.value,onSelect:r.onChange,disabled:j=>j>new Date||j<new Date("1900-01-01"),initialFocus:!0})})]}),e.jsx(A,{children:"Your date of birth is used to calculate your age."}),e.jsx(J,{})]})}),e.jsx(c,{type:"submit",children:"Submit"})]})})}};var P,w,b;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date>();
    return <Popover>
        <PopoverTrigger asChild>
          <Button variant={"outline"} className={cn("w-[280px] justify-start text-left font-normal", !date && "text-muted-foreground")}>
            <CalendarIcon className='mr-2 h-4 w-4' />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0'>
          <Calendar mode='single' selected={date} onSelect={setDate} initialFocus />
        </PopoverContent>
      </Popover>;
  }
}`,...(b=(w=o.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var C,y,F;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<DateRange | undefined>({
      from: new Date(2022, 0, 20),
      to: addDays(new Date(2022, 0, 20), 20)
    });
    return <Popover>
        <PopoverTrigger asChild>
          <Button id='date' variant={"outline"} className={cn("w-[300px] justify-start text-left font-normal", !date && "text-muted-foreground")}>
            <CalendarIcon className='mr-2 h-4 w-4' />
            {date?.from ? date.to ? <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </> : format(date.from, "LLL dd, y") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='start'>
          <Calendar initialFocus mode='range' defaultMonth={date?.from} selected={date} onSelect={setDate} numberOfMonths={2} />
        </PopoverContent>
      </Popover>;
  }
}`,...(F=(y=s.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var D,N,I;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date>();
    return <Popover>
        <PopoverTrigger asChild>
          <Button variant={"outline"} className={cn("w-[280px] justify-start text-left font-normal", !date && "text-muted-foreground")}>
            <CalendarIcon className='mr-2 h-4 w-4' />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='flex w-auto flex-col space-y-2 p-2'>
          <Select onValueChange={value => setDate(addDays(new Date(), parseInt(value)))}>
            <SelectTrigger>
              <SelectValue placeholder='Select' />
            </SelectTrigger>
            <SelectContent position='popper'>
              <SelectItem value='0'>Today</SelectItem>
              <SelectItem value='1'>Tomorrow</SelectItem>
              <SelectItem value='3'>In 3 days</SelectItem>
              <SelectItem value='7'>In a week</SelectItem>
            </SelectContent>
          </Select>
          <div className='rounded-md border'>
            <Calendar mode='single' selected={date} onSelect={setDate} />
          </div>
        </PopoverContent>
      </Popover>;
  }
}`,...(I=(N=l.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var L,T,k;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  decorators: [Story => <div>
        <Toaster />
        <Story />
      </div>],
  render: () => {
    const FormSchema = z.object({
      dob: z.date({
        required_error: "A date of birth is required."
      })
    });
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema)
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
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 m-36'>
          <FormField control={form.control} name='dob' render={({
          field
        }) => <FormItem className='flex flex-col'>
                <FormLabel>Date of birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button variant={"outline"} className={cn("w-[240px] pl-3 text-left font-normal", !field.value && "text-muted-foreground")}>
                        {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                        <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0' align='start'>
                    <Calendar mode='single' selected={field.value} onSelect={field.onChange} disabled={date => date > new Date() || date < new Date("1900-01-01")} initialFocus />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Your date of birth is used to calculate your age.
                </FormDescription>
                <FormMessage />
              </FormItem>} />
          <Button type='submit'>Submit</Button>
        </form>
      </Form>;
  }
}`,...(k=(T=d.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Q=["Default","DatePickerWithRange","WithPresets","InForm"],le=Object.freeze(Object.defineProperty({__proto__:null,DatePickerWithRange:s,Default:o,InForm:d,WithPresets:l,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{le as C,o as D,d as I,l as W,s as a};
