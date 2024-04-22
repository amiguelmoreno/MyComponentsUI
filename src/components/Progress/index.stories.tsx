import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from ".";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  render: () => {
    return <Progress className='w-72' value={33}></Progress>;
  },
};
