import type { Meta, StoryObj } from "@storybook/react";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
  CommandDialog,
} from ".";

import {
  Calculator,
  CreditCard,
  Settings,
  Smile,
  User,
  Calendar,
} from "lucide-react";
import { useEffect, useState } from "react";

const meta: Meta<typeof Command> = {
  title: "Components/Command",
  component: Command,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Command>;

export const Default: Story = {
  render: () => {
    return (
      <Command className='rounded-lg border shadow-md'>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='Suggestions'>
            <CommandItem>
              <Calendar className='mr-2 h-4 w-4' />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile className='mr-2 h-4 w-4' />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator className='mr-2 h-4 w-4' />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading='Settings'>
            <CommandItem>
              <User className='mr-2 h-4 w-4' />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className='mr-2 h-4 w-4' />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className='mr-2 h-4 w-4' />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );
  },
};

export const Dialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          setOpen((open) => !open);
        }
      };

      document.addEventListener("keydown", down);
      return () => document.removeEventListener("keydown", down);
    }, []);

    return (
      <>
        <p className='text-sm text-muted-foreground'>
          Press{" "}
          <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
            <span className='text-xs'>⌘</span>J
          </kbd>
        </p>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder='Type a command or search...' />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading='Suggestions'>
              <CommandItem>
                <Calendar className='mr-2 h-4 w-4' />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile className='mr-2 h-4 w-4' />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <Calculator className='mr-2 h-4 w-4' />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading='Settings'>
              <CommandItem>
                <User className='mr-2 h-4 w-4' />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCard className='mr-2 h-4 w-4' />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings className='mr-2 h-4 w-4' />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
    );
  },
};
