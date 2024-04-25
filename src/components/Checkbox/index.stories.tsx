import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from ".";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "../Form";
import { Button } from "../Button";
import { toast } from "../Toast/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Toaster } from "../Toast/toaster";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    checked: {
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "true" },
      },
    },
  },
  args: { checked: true },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: ({ ...args }) => <Checkbox checked={args.checked} />,
};

export const WithText: Story = {
  render: () => (
    <div className='items-top flex space-x-2'>
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
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className='flex items-center space-x-2'>
      <Checkbox id='terms2' disabled />
      <label
        htmlFor='terms2'
        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
      >
        Accept terms and conditions
      </label>
    </div>
  ),
};

export const FormCheckbox: Story = {
  decorators: [
    (Story) => (
      <div>
        <Toaster />
        <Story />
      </div>
    ),
  ],
  render: () => {
    const FormSchema = z.object({
      mobile: z.boolean().default(false).optional(),
    });

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
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6 m-36'>
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
                    You can manage your mobile notifications in the advance
                    setting section.
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    );
  },
};
