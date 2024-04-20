import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from ".";
import { Button } from "../Button";

const meta: Meta<typeof TooltipProvider> = {
  title: "Components/Tooltip",
  component: TooltipProvider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='default'>Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    ),
  },
};
