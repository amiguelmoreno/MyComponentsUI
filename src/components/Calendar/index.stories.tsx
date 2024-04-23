import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from ".";

const meta: Meta<typeof Calendar> = {
  title: "Components/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    showOutsideDays: {
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "true" },
      },
    },
    showWeekNumber: {
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "true" },
      },
    },
  },
  args: { showOutsideDays: true, showWeekNumber: false },
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: ({ ...args }) => {
    return (
      <Calendar
        showOutsideDays={args.showOutsideDays}
        showWeekNumber={args.showWeekNumber}
      />
    );
  },
};
