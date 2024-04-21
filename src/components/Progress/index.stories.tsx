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
  args: { value: 33 },
};
