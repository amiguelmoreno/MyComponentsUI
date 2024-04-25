import type { Meta, StoryObj } from "@storybook/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from ".";
import { Pencil } from "lucide-react";
import { ListItem, components } from "./exampledata";

const meta: Meta<typeof NavigationMenu> = {
  title: "Components/Navigation Menu",
  component: NavigationMenu,
  parameters: {
    layout: "centered",
    docs: { story: { height: "500px" } },
  },
};

export default meta;

type Story = StoryObj<typeof NavigationMenu>;

export const Default: Story = {
  render() {
    return (
      <div className='flex w-[800px] items-center justify-center'>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid gap-3 p-6 md:w-[300px] lg:w-[400px] lg:grid-cols-[.75fr_1fr]'>
                  <li className='row-span-3'>
                    <NavigationMenuLink asChild>
                      <a
                        className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                        href='/'
                      >
                        <Pencil className='h-6 w-6' />
                        <div className='mb-2 mt-4 text-lg font-medium'>
                          shadcn/ui
                        </div>
                        <p className='text-sm leading-tight text-muted-foreground'>
                          Beautifully designed components that you can copy and
                          paste into your apps. Accessible. Customizable. Open
                          Source.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem title='Introduction'>
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem title='Installation'>
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem
                    href='/docs/primitives/typography'
                    title='Typography'
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid w-[300px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
                  {components.map((component) => (
                    <ListItem key={component.title} title={component.title}>
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentation
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    );
  },
};
