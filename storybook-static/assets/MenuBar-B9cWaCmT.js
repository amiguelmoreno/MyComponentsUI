import{j as n}from"./jsx-runtime-gfuiFmrk.js";import{useMDXComponents as a}from"./index-rbP-kYFP.js";import{M as u,C as b,d as o}from"./index-BtPohTcP.js";import{C as M,D as m}from"./index.stories-CEk1MbLz.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-JSgrbDMH.js";import"../sb-preview/runtime.js";import"./index-DeIys0fC.js";import"./index-BtW3vQL8.js";import"./index-Dkj0J1ds.js";import"./index-8sIbGq5v.js";import"./index-DrFu-skq.js";import"./index-CUKvRgbG.js";import"./index-gzTY19Q4.js";import"./index-DWbqV_Lf.js";import"./index-CcyUcsxs.js";import"./index-DsPCPAgU.js";import"./index-CiqPuP9r.js";import"./index-TaqLbvPe.js";import"./index-CzXEFAbz.js";import"./index-C10IWUuP.js";import"./index-BkVs4Xdz.js";import"./index-pXUiMtXY.js";import"./index-BgrccdF7.js";import"./index-e03L_g6a.js";import"./index-XB13z7cY.js";import"./index-DK5DHDD6.js";import"./index-DgCCy1hh.js";import"./index-DD6JRj2r.js";import"./utils-DJk2kaG7.js";import"./chevron-right-CA0RwzeB.js";import"./createLucideIcon-CvIVernL.js";import"./check-D-Nel7tA.js";import"./circle-B-KBxCYh.js";function t(r){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(u,{of:M}),`
`,n.jsx(e.h1,{id:"menubar",children:"Menubar"}),`
`,n.jsx(e.p,{children:"A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands."}),`
`,n.jsx(b,{of:m}),`
`,n.jsx(o,{}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "mycomponentsui";
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        New Window <MenubarShortcut>⌘N</MenubarShortcut>
      </MenubarItem>
      <MenubarItem disabled>New Incognito Window</MenubarItem>
      <MenubarSeparator />
      <MenubarSub>
        <MenubarSubTrigger>Share</MenubarSubTrigger>
        <MenubarSubContent>
          <MenubarItem>Email link</MenubarItem>
          <MenubarItem>Messages</MenubarItem>
          <MenubarItem>Notes</MenubarItem>
        </MenubarSubContent>
      </MenubarSub>
      <MenubarSeparator />
      <MenubarItem>
        Print... <MenubarShortcut>⌘P</MenubarShortcut>
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        Undo <MenubarShortcut>⌘Z</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarSub>
        <MenubarSubTrigger>Find</MenubarSubTrigger>
        <MenubarSubContent>
          <MenubarItem>Search the web</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Find...</MenubarItem>
          <MenubarItem>Find Next</MenubarItem>
          <MenubarItem>Find Previous</MenubarItem>
        </MenubarSubContent>
      </MenubarSub>
      <MenubarSeparator />
      <MenubarItem>Cut</MenubarItem>
      <MenubarItem>Copy</MenubarItem>
      <MenubarItem>Paste</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>View</MenubarTrigger>
    <MenubarContent>
      <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
      <MenubarCheckboxItem checked>Always Show Full URLs</MenubarCheckboxItem>
      <MenubarSeparator />
      <MenubarItem inset>
        Reload <MenubarShortcut>⌘R</MenubarShortcut>
      </MenubarItem>
      <MenubarItem disabled inset>
        Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem inset>Toggle Fullscreen</MenubarItem>
      <MenubarSeparator />
      <MenubarItem inset>Hide Sidebar</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Profiles</MenubarTrigger>
    <MenubarContent>
      <MenubarRadioGroup value='benoit'>
        <MenubarRadioItem value='andy'>Andy</MenubarRadioItem>
        <MenubarRadioItem value='benoit'>Benoit</MenubarRadioItem>
        <MenubarRadioItem value='Luis'>Luis</MenubarRadioItem>
      </MenubarRadioGroup>
      <MenubarSeparator />
      <MenubarItem inset>Edit...</MenubarItem>
      <MenubarSeparator />
      <MenubarItem inset>Add Profile...</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
`})})]})}function H(r={}){const{wrapper:e}={...a(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{H as default};
