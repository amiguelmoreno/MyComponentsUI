import { Command } from '.';
import { Meta, StoryObj } from '@storybook/react';

declare const meta: Meta<typeof Command>;
export default meta;
type Story = StoryObj<typeof Command>;
export declare const Default: Story;
export declare const Dialog: Story;
