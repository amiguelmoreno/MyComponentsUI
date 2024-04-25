import{j as n}from"./jsx-runtime-gfuiFmrk.js";import{useMDXComponents as m}from"./index-rbP-kYFP.js";import{M as i,C as r,d as s}from"./index-BtPohTcP.js";import{C as a,D as l,I as c}from"./index.stories-BJaCvSzX.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-JSgrbDMH.js";import"../sb-preview/runtime.js";import"./index-DeIys0fC.js";import"./index-BtW3vQL8.js";import"./index-Dkj0J1ds.js";import"./index-8sIbGq5v.js";import"./index-DrFu-skq.js";import"./index-CcyUcsxs.js";import"./index-gzTY19Q4.js";import"./index-DD6JRj2r.js";import"./index-BkVs4Xdz.js";import"./index-DTfEcMay.js";import"./index-e03L_g6a.js";import"./index-CiqPuP9r.js";import"./index-C10IWUuP.js";import"./utils-DJk2kaG7.js";import"./index-Diaggc9h.js";import"./index-60VDg0sI.js";import"./index-DrPcCT0w.js";import"./toaster-CpQpXJIR.js";import"./index-CUKvRgbG.js";import"./index-CzXEFAbz.js";import"./index-XB13z7cY.js";import"./index-DK5DHDD6.js";import"./index-BOacIOqm.js";import"./x-C5DrP9gb.js";import"./createLucideIcon-CvIVernL.js";import"./index-D5_E73Qc.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:a}),`
`,n.jsx(e.h1,{id:"switch",children:"Switch"}),`
`,n.jsx(e.p,{children:"A control that allows the user to toggle between checked and not checked."}),`
`,n.jsx(r,{of:l}),`
`,n.jsx(s,{}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Switch } from "mycomponentsui";
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Switch />
`})}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"inform",children:"InForm"}),`
`,n.jsx(r,{of:c}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "mycomponentsui";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "mycomponentsui";
import { Switch } from "mycomponentsui";
import { toast } from "mycomponentsui";

const FormSchema = z.object({
  marketing_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
});

export function SwitchForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      security_emails: true,
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
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-6'>
        <div>
          <h3 className='mb-4 text-lg font-medium'>Email Notifications</h3>
          <div className='space-y-4'>
            <FormField
              control={form.control}
              name='marketing_emails'
              render={({ field }) => (
                <FormItem className='flex flex-row items-center justify-between rounded-lg border p-4'>
                  <div className='space-y-0.5'>
                    <FormLabel className='text-base'>
                      Marketing emails
                    </FormLabel>
                    <FormDescription>
                      Receive emails about new products, features, and more.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='security_emails'
              render={({ field }) => (
                <FormItem className='flex flex-row items-center justify-between rounded-lg border p-4'>
                  <div className='space-y-0.5'>
                    <FormLabel className='text-base'>Security emails</FormLabel>
                    <FormDescription>
                      Receive emails about your account security.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled
                      aria-readonly
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
}
`})})]})}function G(o={}){const{wrapper:e}={...m(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{G as default};
