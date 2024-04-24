import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from ".";

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
