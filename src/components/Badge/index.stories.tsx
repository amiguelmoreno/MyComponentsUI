import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from ".";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "secondary", "destructive", "outline"],
      table: {
        defaultValue: { summary: "default" },
      },
    },
  },
  args: { variant: "default" },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: ({ ...args }) => {
    return <Badge variant={args.variant}>Badge</Badge>;
  },
};

export const Secondary: Story = {
  render: () => {
    return <Badge variant='secondary'>Badge</Badge>;
  },
};

export const Outline: Story = {
  render: () => {
    return <Badge variant='outline'>Badge</Badge>;
  },
};

export const Destructive: Story = {
  render: () => {
    return <Badge variant='destructive'>Badge</Badge>;
  },
};
