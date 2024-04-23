import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "../Label";
import { RadioGroup, RadioGroupItem } from "../RadioGroup";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "../Form";
import { toast } from "../Toast/use-toast";
import { Button } from "../Button";
import { Toaster } from "../Toast/toaster";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/Radio Group",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue='option-one'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-one' id='option-one' />
        <Label htmlFor='option-one'>Option One</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-two' id='option-two' />
        <Label htmlFor='option-two'>Option Two</Label>
      </div>
    </RadioGroup>
  ),
};

const FormSchema = z.object({
  type: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
});

export const InForm: Story = {
  decorators: [
    (Story) => (
      <div>
        <Toaster />
        <Story />
      </div>
    ),
  ],
  render: () => {
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
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-2/3 space-y-6 m-36'
        >
          <FormField
            control={form.control}
            name='type'
            render={({ field }) => (
              <FormItem className='space-y-3'>
                <FormLabel>Notify me about...</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className='flex flex-col space-y-1'
                  >
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='all' />
                      </FormControl>
                      <FormLabel className='font-normal'>
                        All new messages
                      </FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='mentions' />
                      </FormControl>
                      <FormLabel className='font-normal'>
                        Direct messages and mentions
                      </FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='none' />
                      </FormControl>
                      <FormLabel className='font-normal'>Nothing</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    );
  },
};
