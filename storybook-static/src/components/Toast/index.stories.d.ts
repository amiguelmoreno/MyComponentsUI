import { Button } from '../Button';
import { Meta, StoryObj } from '@storybook/react';

declare const meta: Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof Button>;
export declare const Default: Story;
export declare const WithTitle: Story;
export declare const WithAction: Story;
export declare const Destructive: Story;
