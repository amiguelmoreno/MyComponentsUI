import type { Meta, StoryObj } from "@storybook/react";
import { Loader2, Mail, SendHorizontal } from "lucide-react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      table: {
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
      table: {
        defaultValue: { summary: "default" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "true" },
      },
    },
  },
  args: {
    variant: "default",
    size: "default",
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: ({ ...args }) => {
    return (
      <Button variant={args.variant} size={args.size} disabled={args.disabled}>
        Button
      </Button>
    );
  },
};

export const WithIcon: Story = {
  render: () => {
    return (
      <Button>
        <Mail strokeWidth={2.5} className='mr-2 h-4 w-4' />
        Button with icon
      </Button>
    );
  },
};

export const Icon: Story = {
  render: () => {
    return (
      <Button>
        <SendHorizontal className='h-5 w-5' />
      </Button>
    );
  },
};

export const Loading: Story = {
  render: () => {
    return (
      <Button disabled>
        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
        Please wait
      </Button>
    );
  },
};

export const AsChild: Story = {
  render: () => {
    return (
      <Button asChild>
        <a>Login</a>
      </Button>
    );
  },
};
