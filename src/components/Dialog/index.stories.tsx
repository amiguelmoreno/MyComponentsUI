import type { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from ".";
import { Button } from "../Button/Button";
import { Label } from "../Label";
import { Input } from "../Input";
import { AlertDialogFooter } from "../AlertDialog/AlertDialog";
import { Copy } from "lucide-react";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant='outline'>Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='name' className='text-right'>
                Name
              </Label>
              <Input
                id='name'
                defaultValue='Pedro Duarte'
                className='col-span-3'
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='username' className='text-right'>
                Username
              </Label>
              <Input
                id='username'
                defaultValue='@peduarte'
                className='col-span-3'
              />
            </div>
          </div>
          <AlertDialogFooter>
            <Button type='submit'>Save changes</Button>
          </AlertDialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

export const CustomCloseButton: Story = {
  render: () => {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant='outline'>Share</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-md'>
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className='flex items-center space-x-2'>
            <div className='grid flex-1 gap-2'>
              <Label htmlFor='link' className='sr-only'>
                Link
              </Label>
              <Input
                id='link'
                defaultValue='https://ui.shadcn.com/docs/installation'
                readOnly
              />
            </div>
            <Button type='submit' size='sm' className='px-3'>
              <span className='sr-only'>Copy</span>
              <Copy className='h-4 w-4' />
            </Button>
          </div>
          <DialogFooter className='sm:justify-start'>
            <DialogClose asChild>
              <Button type='button' variant='secondary'>
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};
