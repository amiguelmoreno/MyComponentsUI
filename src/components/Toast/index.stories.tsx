import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";
import { useToast } from "./use-toast";
import { Toaster } from "./toaster";
import { Divide } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Components/Toast",
  component: Button,
  decorators: [
    (Story) => (
      <div>
        <Toaster />
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => {
    const { toast } = useToast();
    return (
      <div className='flex justify-center items-center w-[800px] h-[300px] overflow-hidden '>
        <Button
          className='justify-self-center'
          onClick={() => {
            toast({
              title: "Scheduled: Catch up",
              description: "Friday, February 10, 2023 at 5:57 PM",
            });
          }}
        >
          Show Toast
        </Button>
      </div>
    );
  },
};
