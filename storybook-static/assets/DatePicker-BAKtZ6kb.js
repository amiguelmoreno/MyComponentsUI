import{j as n}from"./jsx-runtime-gfuiFmrk.js";import{useMDXComponents as a}from"./index-rbP-kYFP.js";import{M as m,C as o,d as i}from"./index-BtPohTcP.js";import{C as s,D as p,a as l,W as c,I as d}from"./index.stories-BnYrsvLV.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-JSgrbDMH.js";import"../sb-preview/runtime.js";import"./index-DeIys0fC.js";import"./index-BtW3vQL8.js";import"./index-Dkj0J1ds.js";import"./index-8sIbGq5v.js";import"./index-DrFu-skq.js";import"./utils-DJk2kaG7.js";import"./index-D5_E73Qc.js";import"./index-DrPcCT0w.js";import"./index-CjCZSgEG.js";import"./chevron-left-BBRn037s.js";import"./createLucideIcon-CvIVernL.js";import"./chevron-right-CA0RwzeB.js";import"./index-DVqZzthW.js";import"./index-CcyUcsxs.js";import"./index-gzTY19Q4.js";import"./index-CzXEFAbz.js";import"./index-C10IWUuP.js";import"./index-BkVs4Xdz.js";import"./index-pXUiMtXY.js";import"./index-DsPCPAgU.js";import"./index-CiqPuP9r.js";import"./index-BgrccdF7.js";import"./index-e03L_g6a.js";import"./index-XB13z7cY.js";import"./index-DK5DHDD6.js";import"./index-DD6JRj2r.js";import"./index-CtR02GWN.js";import"./index-BEk9yI-S.js";import"./index-CUKvRgbG.js";import"./index-DWbqV_Lf.js";import"./index-DTfEcMay.js";import"./index-BOacIOqm.js";import"./chevron-down-D5z6l907.js";import"./check-D-Nel7tA.js";import"./index-Diaggc9h.js";import"./index-60VDg0sI.js";import"./toaster-CpQpXJIR.js";import"./x-C5DrP9gb.js";import"./calendar-C85vOEUs.js";function r(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...a(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(m,{of:s}),`
`,n.jsx(e.h1,{id:"date-picker",children:"Date Picker"}),`
`,n.jsx(e.p,{children:"A date picker component with range and presets."}),`
`,n.jsx(o,{of:p}),`
`,n.jsx(i,{}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "mycomponentsui";
import { Calendar } from "mycomponentsui";
import { Popover, PopoverContent, PopoverTrigger } from "mycomponentsui";

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className='mr-2 h-4 w-4' />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
`})}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"date-picker-with-range",children:"Date Picker With Range"}),`
`,n.jsx(o,{of:l}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "mycomponentsui";
import { Calendar } from "mycomponentsui";
import { Popover, PopoverContent, PopoverTrigger } from "mycomponentsui";

export function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id='date'
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className='mr-2 h-4 w-4' />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='start'>
          <Calendar
            initialFocus
            mode='range'
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"with-presets",children:"With Presets"}),`
`,n.jsx(o,{of:c}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "mycomponentsui";
import { Calendar } from "mycomponentsui";
import { Popover, PopoverContent, PopoverTrigger } from "mycomponentsui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "mycomponentsui";

export function DatePickerWithPresets() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className='mr-2 h-4 w-4' />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='flex w-auto flex-col space-y-2 p-2'>
        <Select
          onValueChange={(value) =>
            setDate(addDays(new Date(), parseInt(value)))
          }
        >
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
    </Popover>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"in-form",children:"In Form"}),`
`,n.jsx(o,{of:d}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});

export function DatePickerForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
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
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='dob'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0' align='start'>
                  <Calendar
                    mode='single'
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Your date of birth is used to calculate your age.
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
`})})]})}function mn(t={}){const{wrapper:e}={...a(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{mn as default};
