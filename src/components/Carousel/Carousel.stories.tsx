import type { Meta, StoryObj } from "@storybook/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselApi,
} from "./Carousel";
import { Card, CardContent } from "../Card";
import { useEffect, useState } from "react";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      table: {
        defaultValue: { summary: "horizontal" },
      },
      description: "Choose between 'horizontal' and 'vertical'",
    },
    opts: {
      options: ["horizontal", "vertical"],
      table: {
        defaultValue: { summary: "{}" },
      },
      description: "Can modify 'align', 'loop', 'duration' ... ",
    },
  },
  args: { orientation: "horizontal", opts: {} },
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: () => {
    return (
      <Carousel className='w-full max-w-xs'>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <span className='text-4xl font-semibold'>{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    return (
      <Carousel
        opts={{
          align: "start",
        }}
        className='w-full max-w-sm'
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className='basis-1/3 '>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <span className='text-3xl font-semibold'>{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  },
};

export const Orientation: Story = {
  render: () => {
    return (
      <Carousel
        opts={{
          align: "center",
        }}
        orientation='vertical'
        className=' max-w-xs m-10'
      >
        <CarouselContent className='-mt-1 h-[200px]'>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className='flex items-center justify-center pt-1 '
            >
              <div className='p-1'>
                <Card>
                  <CardContent className='flex min-w-[300px] items-center justify-center p-6'>
                    <span className='text-3xl font-semibold'>{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  },
};

export const Api: Story = {
  render: () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!api) {
        return;
      }

      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);

      api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1);
      });
    }, [api]);

    return (
      <div>
        <Carousel setApi={setApi} className='w-full max-w-xs'>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <span className='text-4xl font-semibold'>{index + 1}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className='py-2 text-center text-sm text-muted-foreground'>
          Slide {current} of {count}
        </div>
      </div>
    );
  },
};
