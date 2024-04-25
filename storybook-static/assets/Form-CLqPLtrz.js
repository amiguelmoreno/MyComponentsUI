import{j as o}from"./jsx-runtime-gfuiFmrk.js";import{useMDXComponents as e}from"./index-rbP-kYFP.js";import{M as m,C as i,d as s}from"./index-BtPohTcP.js";import{C as a,D as l}from"./index.stories-BhDv4BtY.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-JSgrbDMH.js";import"../sb-preview/runtime.js";import"./index-DeIys0fC.js";import"./index-BtW3vQL8.js";import"./index-Dkj0J1ds.js";import"./index-8sIbGq5v.js";import"./index-DrFu-skq.js";import"./index-Diaggc9h.js";import"./utils-DJk2kaG7.js";import"./index-60VDg0sI.js";import"./index-C10IWUuP.js";import"./index-DrPcCT0w.js";import"./index-D5_E73Qc.js";import"./index-DuSNxgMV.js";import"./toaster-CpQpXJIR.js";import"./index-CcyUcsxs.js";import"./index-CUKvRgbG.js";import"./index-gzTY19Q4.js";import"./index-CzXEFAbz.js";import"./index-BkVs4Xdz.js";import"./index-XB13z7cY.js";import"./index-DK5DHDD6.js";import"./index-CiqPuP9r.js";import"./index-DD6JRj2r.js";import"./index-BOacIOqm.js";import"./x-C5DrP9gb.js";import"./createLucideIcon-CvIVernL.js";function t(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:a}),`
`,o.jsx(n.h1,{id:"form",children:"Form"}),`
`,o.jsxs(n.p,{children:["Building forms with React Hook Form and Zod. Visit ",o.jsx(n.a,{href:"https://ui.shadcn.com/docs/components/form",rel:"nofollow",children:o.jsx(n.strong,{children:"Docs"})})," to know every detail."]}),`
`,o.jsx(n.p,{children:"Forms are tricky. They are one of the most common things you'll build in a web application, but also one of the most complex."}),`
`,o.jsx(n.p,{children:"Well-designed HTML forms are:"}),`
`,o.jsxs(n.ul,{children:[`
`,o.jsx(n.li,{children:"Well-structured and semantically correct."}),`
`,o.jsx(n.li,{children:"Easy to use and navigate (keyboard)."}),`
`,o.jsx(n.li,{children:"Accessible with ARIA attributes and proper labels."}),`
`,o.jsx(n.li,{children:"Has support for client and server side validation."}),`
`,o.jsx(n.li,{children:"Well-styled and consistent with the rest of the application."}),`
`]}),`
`,o.jsx(i,{of:l}),`
`,o.jsx(s,{}),`
`,o.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-tsx",children:`"use client";

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
`})})]})}function _(r={}){const{wrapper:n}={...e(),...r.components};return n?o.jsx(n,{...r,children:o.jsx(t,{...r})}):t(r)}export{_ as default};
