import{j as n}from"./jsx-runtime-gfuiFmrk.js";import{useMDXComponents as t}from"./index-rbP-kYFP.js";import{M as o,C as a,d as l}from"./index-BtPohTcP.js";import{C as i,D as m,S as C,O as c,A as u}from"./index.stories-CThe9OdQ.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-JSgrbDMH.js";import"../sb-preview/runtime.js";import"./index-DeIys0fC.js";import"./index-BtW3vQL8.js";import"./index-Dkj0J1ds.js";import"./index-8sIbGq5v.js";import"./index-DrFu-skq.js";import"./utils-DJk2kaG7.js";import"./index-D5_E73Qc.js";import"./index-DrPcCT0w.js";import"./createLucideIcon-CvIVernL.js";import"./index-DGzCeWxj.js";function r(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:i}),`
`,n.jsx(e.h1,{id:"carousel",children:"Carousel"}),`
`,n.jsxs(e.p,{children:["A carousel with motion and swipe built using Embla. Visit ",n.jsx(e.a,{href:"https://www.embla-carousel.com/get-started/react/",rel:"nofollow",children:n.jsx(e.strong,{children:"Docs"})})," to know every detail."]}),`
`,n.jsx(a,{of:m}),`
`,n.jsx(l,{}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselApi,
  Card,
  CardContent,
} from "mycomponentsui";
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Carousel className='w-full max-w-xs'>
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
`})}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"sizes",children:"Sizes"}),`
`,n.jsx(a,{of:C}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselApi,
  Card,
  CardContent,
} from "mycomponentsui";
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Carousel
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
`})}),`
`,n.jsx(e.h3,{id:"orientation",children:"Orientation"}),`
`,n.jsx(a,{of:c}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselApi,
  Card,
  CardContent,
} from "mycomponentsui";
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Carousel
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
`})}),`
`,n.jsx(e.h3,{id:"api",children:"Api"}),`
`,n.jsx(a,{of:u}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselApi,
  Card,
  CardContent,
} from "mycomponentsui";
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Carousel
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
`})})]})}function k(s={}){const{wrapper:e}={...t(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{k as default};
