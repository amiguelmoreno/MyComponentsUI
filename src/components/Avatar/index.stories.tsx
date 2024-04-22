import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarImage, AvatarFallback } from ".";

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
