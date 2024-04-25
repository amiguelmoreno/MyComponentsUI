import{j as t}from"./jsx-runtime-gfuiFmrk.js";import{useMDXComponents as u}from"./index-rbP-kYFP.js";import{M as x,C as o,d as C}from"./index-BtPohTcP.js";import{C as m,D as i,W as M}from"./index.stories-DwSNWoa3.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-JSgrbDMH.js";import"../sb-preview/runtime.js";import"./index-DeIys0fC.js";import"./index-BtW3vQL8.js";import"./index-Dkj0J1ds.js";import"./index-8sIbGq5v.js";import"./index-DrFu-skq.js";import"./index-CcyUcsxs.js";import"./index-gzTY19Q4.js";import"./index-C10IWUuP.js";import"./index-TaqLbvPe.js";import"./index-CUKvRgbG.js";import"./index-DWbqV_Lf.js";import"./index-CzXEFAbz.js";import"./index-BkVs4Xdz.js";import"./index-pXUiMtXY.js";import"./index-DsPCPAgU.js";import"./index-CiqPuP9r.js";import"./index-BgrccdF7.js";import"./index-e03L_g6a.js";import"./index-XB13z7cY.js";import"./index-DK5DHDD6.js";import"./index-DgCCy1hh.js";import"./index-DD6JRj2r.js";import"./utils-DJk2kaG7.js";import"./chevron-right-CA0RwzeB.js";import"./createLucideIcon-CvIVernL.js";import"./check-D-Nel7tA.js";import"./circle-B-KBxCYh.js";function r(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...u(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:m}),`
`,t.jsx(e.h1,{id:"context-menu",children:"Context Menu"}),`
`,t.jsx(e.p,{children:"Displays a menu to the user — such as a set of actions or functions — triggered by a button."}),`
`,t.jsx(o,{of:i}),`
`,t.jsx(C,{}),`
`,t.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "mycomponentsui";
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`<ContextMenu>
  <ContextMenuTrigger>Right click</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Profile</ContextMenuItem>
    <ContextMenuItem>Billing</ContextMenuItem>
    <ContextMenuItem>Team</ContextMenuItem>
    <ContextMenuItem>Subscription</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
`})}),`
`,t.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,t.jsx(e.h3,{id:"with-more-settings",children:"With More Settings"}),`
`,t.jsx(o,{of:M}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "mycomponentsui";

export function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className='flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm'>
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className='w-64'>
        <ContextMenuItem inset>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset disabled>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubContent className='w-48'>
            <ContextMenuItem>
              Save Page As...
              <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>Create Shortcut...</ContextMenuItem>
            <ContextMenuItem>Name Window...</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Developer Tools</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>
          Show Bookmarks Bar
          <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value='pedro'>
          <ContextMenuLabel inset>People</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuRadioItem value='pedro'>
            Pedro Duarte
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value='colm'>Colm Tuite</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}
`})})]})}function J(n={}){const{wrapper:e}={...u(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(r,{...n})}):r(n)}export{J as default};
