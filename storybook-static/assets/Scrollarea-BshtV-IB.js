import{j as n}from"./jsx-runtime-gfuiFmrk.js";import{useMDXComponents as a}from"./index-rbP-kYFP.js";import{M as s,C as o,d as i}from"./index-BtPohTcP.js";import{C as l,D as m,W as c,H as p}from"./index.stories-CcuJaFnF.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-JSgrbDMH.js";import"../sb-preview/runtime.js";import"./index-DeIys0fC.js";import"./index-BtW3vQL8.js";import"./index-Dkj0J1ds.js";import"./index-8sIbGq5v.js";import"./index-DrFu-skq.js";import"./index-C10IWUuP.js";import"./index-DK5DHDD6.js";import"./index-CiqPuP9r.js";import"./index-gzTY19Q4.js";import"./index-BkVs4Xdz.js";import"./index-DWbqV_Lf.js";import"./index-BEk9yI-S.js";import"./index-CcyUcsxs.js";import"./utils-DJk2kaG7.js";import"./index-mdR0UVGi.js";function r(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...a(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:l}),`
`,n.jsx(t.h1,{id:"scroll-area",children:"Scroll Area"}),`
`,n.jsx(t.p,{children:"Augments native scroll functionality for custom, cross-browser styling."}),`
`,n.jsx(o,{of:m}),`
`,n.jsx(i,{}),`
`,n.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { ScrollArea } from "mycomponentsui";
`})}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`<ScrollArea className='h-[200px] w-[350px] rounded-md border p-4'>
  Jokester began sneaking into the castle in the middle of the night and leaving
  jokes all over the place: under the king's pillow, in his soup, even in the
  royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
  then, one day, the people of the kingdom discovered that the jokes left by
  Jokester were so funny that they couldn't help but laugh. And once they
  started laughing, they couldn't stop.
</ScrollArea>
`})}),`
`,n.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(t.h3,{id:"withitems",children:"WithItems"}),`
`,n.jsx(o,{of:c}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => \`v1.2.0-beta.\${a.length - i}\`
);

export function ScrollAreaDemo() {
  return (
    <ScrollArea className='h-72 w-48 rounded-md border'>
      <div className='p-4'>
        <h4 className='mb-4 text-sm font-medium leading-none'>Tags</h4>
        {tags.map((tag) => (
          <>
            <div key={tag} className='text-sm'>
              {tag}
            </div>
            <Separator className='my-2' />
          </>
        ))}
      </div>
    </ScrollArea>
  );
}
`})}),`
`,n.jsx(t.h3,{id:"horizontal",children:"Horizontal"}),`
`,n.jsx(o,{of:p}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import * as React from "react";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export interface Artwork {
  artist: string;
  art: string;
}

export const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
];

export function ScrollAreaHorizontalDemo() {
  return (
    <ScrollArea className='w-96 whitespace-nowrap rounded-md border'>
      <div className='flex w-max space-x-4 p-4'>
        {works.map((artwork) => (
          <figure key={artwork.artist} className='shrink-0'>
            <div className='overflow-hidden rounded-md'>
              <Image
                src={artwork.art}
                alt={\`Photo by \${artwork.artist}\`}
                className='aspect-[3/4] h-fit w-fit object-cover'
                width={300}
                height={400}
              />
            </div>
            <figcaption className='pt-2 text-xs text-muted-foreground'>
              Photo by{" "}
              <span className='font-semibold text-foreground'>
                {artwork.artist}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation='horizontal' />
    </ScrollArea>
  );
}
`})})]})}function J(e={}){const{wrapper:t}={...a(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(r,{...e})}):r(e)}export{J as default};
