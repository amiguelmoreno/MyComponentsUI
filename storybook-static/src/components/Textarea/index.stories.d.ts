import { Textarea } from '.';
import { Meta, StoryObj } from '@storybook/react';

declare const meta: Meta<typeof Textarea>;
export default meta;
type Story = StoryObj<typeof Textarea>;
export declare const Default: Story;
export declare const WithLabel: Story;
export declare const WithText: Story;
export declare const WithButton: Story;
