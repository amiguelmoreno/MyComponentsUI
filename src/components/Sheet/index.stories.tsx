import type { Meta, StoryObj } from "@storybook/react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from ".";
import { Label } from "@radix-ui/react-label";
import { Button } from "../Button";
import { Input } from "../Input";

const meta: Meta<typeof Sheet> = {
  title: "Components/Sheet",
  component: Sheet,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  render: () => {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline'>Open</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    );
  },
};

export const Side: Story = {
  render: () => {
    const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

    return (
      <div className='grid grid-cols-2 gap-2'>
        {SHEET_SIDES.map((side) => (
          <Sheet key={side}>
            <SheetTrigger asChild>
              <Button variant='outline'>{side}</Button>
            </SheetTrigger>
            <SheetContent side={side}>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </SheetDescription>
              </SheetHeader>
              <div className='grid gap-4 py-4'>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='name' className='text-right'>
                    Name
                  </Label>
                  <Input
                    id='name'
                    value='Pedro Duarte'
                    className='col-span-3'
                  />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='username' className='text-right'>
                    Username
                  </Label>
                  <Input
                    id='username'
                    value='@peduarte'
                    className='col-span-3'
                  />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type='submit'>Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        ))}
      </div>
    );
  },
};

export const Size: Story = {
  render: () => {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline'>Open</Button>
        </SheetTrigger>
        <SheetContent className='w-[400px] sm:w-[540px] h-[200px] rounded-sm m-2'>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    );
  },
};
