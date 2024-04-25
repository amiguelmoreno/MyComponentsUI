import{j as e}from"./jsx-runtime-gfuiFmrk.js";import{useMDXComponents as m}from"./index-rbP-kYFP.js";import{M as s,C as r,d as i}from"./index-BtPohTcP.js";import{C as a,D as c,W as l,a as d,F as p}from"./index.stories-CqWTV4y2.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-JSgrbDMH.js";import"../sb-preview/runtime.js";import"./index-DeIys0fC.js";import"./index-BtW3vQL8.js";import"./index-Dkj0J1ds.js";import"./index-8sIbGq5v.js";import"./index-DrFu-skq.js";import"./index-Bnne-Tr1.js";import"./index-gzTY19Q4.js";import"./index-CcyUcsxs.js";import"./index-DD6JRj2r.js";import"./index-BkVs4Xdz.js";import"./index-DTfEcMay.js";import"./index-e03L_g6a.js";import"./index-CiqPuP9r.js";import"./index-DK5DHDD6.js";import"./index-C10IWUuP.js";import"./utils-DJk2kaG7.js";import"./check-D-Nel7tA.js";import"./createLucideIcon-CvIVernL.js";import"./index-Diaggc9h.js";import"./index-60VDg0sI.js";import"./index-DrPcCT0w.js";import"./index-D5_E73Qc.js";import"./toaster-CpQpXJIR.js";import"./index-CUKvRgbG.js";import"./index-CzXEFAbz.js";import"./index-XB13z7cY.js";import"./index-BOacIOqm.js";import"./x-C5DrP9gb.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a}),`
`,e.jsx(n.h1,{id:"checkbox",children:"Checkbox"}),`
`,e.jsx(n.p,{children:"A control that allows the user to toggle between checked and not checked."}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(i,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Checkbox } from "mycomponentsui";
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Checkbox />
`})}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"withtext",children:"WithText"}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Checkbox } from "mycomponentsui";
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<div className='items-top flex space-x-2'>
  <Checkbox id='terms1' />
  <div className='grid gap-1.5 leading-none'>
    <label
      htmlFor='terms1'
      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
    >
      Accept terms and conditions
    </label>
    <p className='text-sm text-muted-foreground'>
      You agree to our Terms of Service and Privacy Policy.
    </p>
  </div>
</div>
`})}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Checkbox } from "mycomponentsui";
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<div className='flex items-center space-x-2'>
  <Checkbox id='terms2' disabled />
  <label
    htmlFor='terms2'
    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
  >
    Accept terms and conditions
  </label>
</div>
`})}),`
`,e.jsx(n.h3,{id:"formcheckbox",children:"FormCheckbox"}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {
  Checkbox,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  Button,
  toast,
} from "mycomponentsui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const FormSchema = z.object({
  mobile: z.boolean().default(false).optional(),
});

export function CheckboxForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      mobile: true,
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
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <FormField
          control={form.control}
          name='mobile'
          render={({ field }) => (
            <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className='space-y-1 leading-none'>
                <FormLabel>
                  Use different settings for my mobile devices
                </FormLabel>
                <FormDescription>
                  You can manage your mobile notifications in the{" "}
                  <a href='/examples/forms'>mobile settings</a> page.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
}
`})})]})}function H(o={}){const{wrapper:n}={...m(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{H as default};
