import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from ".";

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  render: () => <Separator className='w-48 h-1 rounded-full' />,
};
