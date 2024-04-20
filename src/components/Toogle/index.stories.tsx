import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from ".";
import { ClipboardCheck } from "lucide-react";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Toggle {...args}>
      <ClipboardCheck className='h-4 w-4' />
    </Toggle>
  ),
};
