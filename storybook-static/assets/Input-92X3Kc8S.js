import{j as n}from"./jsx-runtime-gfuiFmrk.js";import{useMDXComponents as m}from"./index-rbP-kYFP.js";import{M as i,C as t,d as s}from"./index-BtPohTcP.js";import{C as a,D as l,F as p,a as c,W as d,b as u,I as h}from"./index.stories-C93AG6G4.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-JSgrbDMH.js";import"../sb-preview/runtime.js";import"./index-DeIys0fC.js";import"./index-BtW3vQL8.js";import"./index-Dkj0J1ds.js";import"./index-8sIbGq5v.js";import"./index-DrFu-skq.js";import"./index-DuSNxgMV.js";import"./utils-DJk2kaG7.js";import"./index-60VDg0sI.js";import"./index-C10IWUuP.js";import"./index-DrPcCT0w.js";import"./index-D5_E73Qc.js";import"./index-Diaggc9h.js";import"./toaster-CpQpXJIR.js";import"./index-CcyUcsxs.js";import"./index-CUKvRgbG.js";import"./index-gzTY19Q4.js";import"./index-CzXEFAbz.js";import"./index-BkVs4Xdz.js";import"./index-XB13z7cY.js";import"./index-DK5DHDD6.js";import"./index-CiqPuP9r.js";import"./index-DD6JRj2r.js";import"./index-BOacIOqm.js";import"./x-C5DrP9gb.js";import"./createLucideIcon-CvIVernL.js";function r(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:a}),`
`,n.jsx(e.h1,{id:"input",children:"Input"}),`
`,n.jsx(e.p,{children:"Displays a form input field or a component that looks like an input field."}),`
`,n.jsx(t,{of:l}),`
`,n.jsx(s,{}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Input } from "mycomponentsui";
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Input type='email' placeholder='Email' />
`})}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"file",children:"File"}),`
`,n.jsx(t,{of:p}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Input, Label } from "mycomponentsui";
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<div className='grid w-full max-w-sm items-center gap-1.5'>
  <Label htmlFor='picture'>Picture</Label>
  <Input id='picture' type='file' />
</div>
`})}),`
`,n.jsx(e.h3,{id:"disable",children:"Disable"}),`
`,n.jsx(t,{of:c}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Input } from "mycomponentsui";
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Input disabled type='email' placeholder='Email' />
`})}),`
`,n.jsx(e.h3,{id:"with-label",children:"With Label"}),`
`,n.jsx(t,{of:d}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Input, Label } from "mycomponentsui";
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<div className='grid w-full max-w-sm items-center gap-1.5'>
  <Label htmlFor='email'>Email</Label>
  <Input type='email' id='email' placeholder='Email' />
</div>
`})}),`
`,n.jsx(e.h3,{id:"with-button",children:"With Button"}),`
`,n.jsx(t,{of:u}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Input, Button } from "mycomponentsui";
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<div className='flex w-full max-w-sm items-center space-x-2'>
  <Input type='email' placeholder='Email' />
  <Button type='submit'>Subscribe</Button>
</div>
`})}),`
`,n.jsx(e.h3,{id:"in-form",children:"In Form"}),`
`,n.jsx(t,{of:h}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-2/3 space-y-6'>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder='shadcn' {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
}
`})})]})}function G(o={}){const{wrapper:e}={...m(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(r,{...o})}):r(o)}export{G as default};
