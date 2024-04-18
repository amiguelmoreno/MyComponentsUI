import type { Meta, StoryObj } from "@storybook/react";
import { Mail, PlayIcon } from "lucide-react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Button",
  },
};

export const WithIcon: Story = {
  args: {
    variant: "default",
    size: "default",
    children: (
      <>
        <Mail className='mr-2 h-4 w-4' />
        Button with icon
      </>
    ),
  },
};

export const Icon: Story = {
  args: {
    variant: "default",
    size: "default",
    children: <PlayIcon></PlayIcon>,
    onClick: () => {
      console.log("a");
    },
  },
};
