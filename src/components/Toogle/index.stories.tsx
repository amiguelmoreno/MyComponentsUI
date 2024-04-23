import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from ".";
import { Bold, ClipboardCheck, Italic, Underline } from "lucide-react";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "outline"],
      table: {
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg"],
      table: {
        defaultValue: { summary: "default" },
      },
    },
  },
  args: { variant: "default", size: "default" },
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: (args) => (
    <Toggle {...args}>
      <Bold className='h-4 w-4' />
    </Toggle>
  ),
};

export const Group: Story = {
  render: () => (
    <div className='flex gap-2'>
      <Toggle variant={"outline"}>
        <Italic className='h-4 w-4' />
      </Toggle>
      <Toggle variant={"outline"}>
        <Bold className='h-4 w-4' />
      </Toggle>
      <Toggle variant={"outline"}>
        <Underline className='h-4 w-4' />
      </Toggle>
    </div>
  ),
};
