import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertTitle, AlertDescription } from ".";
import { Terminal } from "lucide-react";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "destructive"],
      table: {
        defaultValue: { summary: "default" },
      },
    },
  },
  args: { variant: "default" },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: ({ ...args }) => {
    return (
      <Alert variant={args.variant}>
        <Terminal className='h-4 w-4' />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
    );
  },
};

export const Destructive: Story = {
  render: () => {
    return (
      <Alert variant='destructive'>
        <Terminal className='h-4 w-4' />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
    );
  },
};
