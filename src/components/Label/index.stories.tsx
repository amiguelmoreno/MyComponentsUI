import type { Meta, StoryObj } from "@storybook/react";
import { Label } from ".";
import { Checkbox } from "../Checkbox";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: () => <Label htmlFor='email'>Your email address</Label>,
};

export const InCheckbox: Story = {
  render: () => (
    <div>
      <div className='flex items-center space-x-2'>
        <Checkbox id='terms' />
        <Label htmlFor='terms'>Accept terms and conditions</Label>
      </div>
    </div>
  ),
};
