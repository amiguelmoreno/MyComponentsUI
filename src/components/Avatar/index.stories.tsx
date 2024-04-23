import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarImage, AvatarFallback } from ".";
import { User } from "lucide-react";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => {
    return (
      <Avatar className='w-20 h-20'>
        <AvatarImage src='https://github.com/shadcn.png' alt='avatar' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    );
  },
};

export const Fallback: Story = {
  render: () => {
    return (
      <Avatar className='w-20 h-20'>
        <AvatarImage src='' alt='avatar' />
        <AvatarFallback>
          <User className='w-10 h-10' />
        </AvatarFallback>
      </Avatar>
    );
  },
};
