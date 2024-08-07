import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button/Button";
import { useToast } from "./use-toast";
import { Toaster } from "./toaster";
import { ToastAction } from ".";

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

export const WithTitle: Story = {
  render: () => {
    const { toast } = useToast();
    return (
      <div className='flex justify-center items-center w-[800px] h-[300px] overflow-hidden '>
        <Button
          className='justify-self-center'
          onClick={() => {
            toast({
              title: "Scheduled: Catch up",
              description: "Your message has been sent.",
            });
          }}
        >
          Show Toast
        </Button>
      </div>
    );
  },
};

export const WithAction: Story = {
  render: () => {
    const { toast } = useToast();
    return (
      <div className='flex justify-center items-center w-[800px] h-[300px] overflow-hidden '>
        <Button
          className='justify-self-center'
          onClick={() => {
            toast({
              title: "Uh oh! Something went wrong.",
              description: "There was a problem with your request.",
              action: <ToastAction altText='Try again'>Try again</ToastAction>,
            });
          }}
        >
          Show Toast
        </Button>
      </div>
    );
  },
};

export const Destructive: Story = {
  render: () => {
    const { toast } = useToast();
    return (
      <div className='flex justify-center items-center w-[800px] h-[300px] overflow-hidden '>
        <Button
          variant='outline'
          className='justify-self-center'
          onClick={() => {
            toast({
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
              description: "There was a problem with your request.",
              action: <ToastAction altText='Try again'>Try again</ToastAction>,
            });
          }}
        >
          Show Toast
        </Button>
      </div>
    );
  },
};
