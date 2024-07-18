import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from ".";
import { Label } from "../Label";
import { Button } from "../Button/Button";

const meta: Meta<typeof Textarea> = {
  title: "Components/Text Area",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: () => (
    <Textarea placeholder='Type your message here.' className='w-[300px]' />
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className='grid w-full gap-1.5'>
      <Label htmlFor='message'>Your message</Label>
      <Textarea placeholder='Type your message here.' id='message' />
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className='grid w-full gap-1.5'>
      <Label htmlFor='message-2'>Your Message</Label>
      <Textarea placeholder='Type your message here.' id='message-2' />
      <p className='text-sm text-muted-foreground'>
        Your message will be copied to the support team.
      </p>
    </div>
  ),
};

export const WithButton: Story = {
  render: () => (
    <div className='grid w-full gap-2'>
      <Textarea placeholder='Type your message here.' />
      <Button>Send message</Button>
    </div>
  ),
};
