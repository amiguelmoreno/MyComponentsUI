import{j as e}from"./jsx-runtime-gfuiFmrk.js";import{r as a}from"./index-B3ehnkiM.js";import{_ as l,$ as pe}from"./index-BtW3vQL8.js";import{$ as me}from"./index-CUKvRgbG.js";import{$ as xe}from"./index-DWbqV_Lf.js";import{$ as j}from"./index-CcyUcsxs.js";import{$ as $e}from"./index-gzTY19Q4.js";import{$ as k}from"./index-DsPCPAgU.js";import{$ as Me,l as he,a as ge,b as ve,c as _e,d as Ie,e as je,f as Se,g as we,h as ye,i as Ce,j as Re,k as Ne,m as Ee,n as Te}from"./index-TaqLbvPe.js";import{$ as H,a as Pe,b as Oe}from"./index-DgCCy1hh.js";import{$ as Y}from"./index-C10IWUuP.js";import{$ as J}from"./index-DD6JRj2r.js";import{a as _}from"./utils-DJk2kaG7.js";import{C as Fe}from"./chevron-right-CA0RwzeB.js";import{C as ke}from"./check-D-Nel7tA.js";import{C as Ae}from"./circle-B-KBxCYh.js";const D="Menubar",[A,De,Ke]=me(D),[Q,Rn]=$e(D,[Ke,H]),m=Me(),X=H(),[Ve,K]=Q(D),Be=a.forwardRef((n,t)=>{const{__scopeMenubar:r,value:o,onValueChange:c,defaultValue:$,loop:p=!0,dir:i,...s}=n,M=xe(i),u=X(r),[g="",f]=J({prop:o,onChange:c,defaultProp:$}),[v,b]=a.useState(null);return a.createElement(Ve,{scope:r,value:g,onMenuOpen:a.useCallback(x=>{f(x),b(x)},[f]),onMenuClose:a.useCallback(()=>f(""),[f]),onMenuToggle:a.useCallback(x=>{f(V=>V?"":x),b(x)},[f]),dir:M,loop:p},a.createElement(A.Provider,{scope:r},a.createElement(A.Slot,{scope:r},a.createElement(Pe,l({asChild:!0},u,{orientation:"horizontal",loop:p,dir:M,currentTabStopId:v,onCurrentTabStopIdChange:b}),a.createElement(Y.div,l({role:"menubar"},s,{ref:t}))))))}),ee="MenubarMenu",[Le,ne]=Q(ee),Ge=n=>{const{__scopeMenubar:t,value:r,...o}=n,c=k(),$=r||c||"LEGACY_REACT_AUTO_VALUE",p=K(ee,t),i=m(t),s=a.useRef(null),M=a.useRef(!1),u=p.value===$;return a.useEffect(()=>{u||(M.current=!1)},[u]),a.createElement(Le,{scope:t,value:$,triggerId:k(),triggerRef:s,contentId:k(),wasKeyboardTriggerOpenRef:M},a.createElement(Ne,l({},i,{open:u,onOpenChange:g=>{g||p.onMenuClose()},modal:!1,dir:p.dir},o)))},G="MenubarTrigger",ze=a.forwardRef((n,t)=>{const{__scopeMenubar:r,disabled:o=!1,...c}=n,$=X(r),p=m(r),i=K(G,r),s=ne(G,r),M=a.useRef(null),u=pe(t,M,s.triggerRef),[g,f]=a.useState(!1),v=i.value===s.value;return a.createElement(A.ItemSlot,{scope:r,value:s.value,disabled:o},a.createElement(Oe,l({asChild:!0},$,{focusable:!o,tabStopId:s.value}),a.createElement(he,l({asChild:!0},p),a.createElement(Y.button,l({type:"button",role:"menuitem",id:s.triggerId,"aria-haspopup":"menu","aria-expanded":v,"aria-controls":v?s.contentId:void 0,"data-highlighted":g?"":void 0,"data-state":v?"open":"closed","data-disabled":o?"":void 0,disabled:o},c,{ref:u,onPointerDown:j(n.onPointerDown,b=>{!o&&b.button===0&&b.ctrlKey===!1&&(i.onMenuOpen(s.value),v||b.preventDefault())}),onPointerEnter:j(n.onPointerEnter,()=>{if(!!i.value&&!v){var x;i.onMenuOpen(s.value),(x=M.current)===null||x===void 0||x.focus()}}),onKeyDown:j(n.onKeyDown,b=>{o||(["Enter"," "].includes(b.key)&&i.onMenuToggle(s.value),b.key==="ArrowDown"&&i.onMenuOpen(s.value),["Enter"," ","ArrowDown"].includes(b.key)&&(s.wasKeyboardTriggerOpenRef.current=!0,b.preventDefault()))}),onFocus:j(n.onFocus,()=>f(!0)),onBlur:j(n.onBlur,()=>f(!1))})))))}),Ue=n=>{const{__scopeMenubar:t,...r}=n,o=m(t);return a.createElement(ge,l({},o,r))},z="MenubarContent",We=a.forwardRef((n,t)=>{const{__scopeMenubar:r,align:o="start",...c}=n,$=m(r),p=K(z,r),i=ne(z,r),s=De(r),M=a.useRef(!1);return a.createElement(ve,l({id:i.contentId,"aria-labelledby":i.triggerId,"data-radix-menubar-content":""},$,c,{ref:t,align:o,onCloseAutoFocus:j(n.onCloseAutoFocus,u=>{if(!!!p.value&&!M.current){var f;(f=i.triggerRef.current)===null||f===void 0||f.focus()}M.current=!1,u.preventDefault()}),onFocusOutside:j(n.onFocusOutside,u=>{const g=u.target;s().some(v=>{var b;return(b=v.ref.current)===null||b===void 0?void 0:b.contains(g)})&&u.preventDefault()}),onInteractOutside:j(n.onInteractOutside,()=>{M.current=!0}),onEntryFocus:u=>{i.wasKeyboardTriggerOpenRef.current||u.preventDefault()},onKeyDown:j(n.onKeyDown,u=>{if(["ArrowRight","ArrowLeft"].includes(u.key)){const g=u.target,f=g.hasAttribute("data-radix-menubar-subtrigger"),v=g.closest("[data-radix-menubar-content]")!==u.currentTarget,x=(p.dir==="rtl"?"ArrowRight":"ArrowLeft")===u.key;if(!x&&f||v&&x)return;let S=s().filter(F=>!F.disabled).map(F=>F.value);x&&S.reverse();const B=S.indexOf(i.value);S=p.loop?tn(S,B+1):S.slice(B+1);const[L]=S;L&&p.onMenuOpen(L)}},{checkForDefaultPrevented:!1}),style:{...n.style,"--radix-menubar-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-menubar-content-available-width":"var(--radix-popper-available-width)","--radix-menubar-content-available-height":"var(--radix-popper-available-height)","--radix-menubar-trigger-width":"var(--radix-popper-anchor-width)","--radix-menubar-trigger-height":"var(--radix-popper-anchor-height)"}}))}),Ze=a.forwardRef((n,t)=>{const{__scopeMenubar:r,...o}=n,c=m(r);return a.createElement(_e,l({},c,o,{ref:t}))}),qe=a.forwardRef((n,t)=>{const{__scopeMenubar:r,...o}=n,c=m(r);return a.createElement(Ie,l({},c,o,{ref:t}))}),He=a.forwardRef((n,t)=>{const{__scopeMenubar:r,...o}=n,c=m(r);return a.createElement(je,l({},c,o,{ref:t}))}),Ye=a.forwardRef((n,t)=>{const{__scopeMenubar:r,...o}=n,c=m(r);return a.createElement(Ee,l({},c,o,{ref:t}))}),Je=a.forwardRef((n,t)=>{const{__scopeMenubar:r,...o}=n,c=m(r);return a.createElement(Se,l({},c,o,{ref:t}))}),Qe=a.forwardRef((n,t)=>{const{__scopeMenubar:r,...o}=n,c=m(r);return a.createElement(we,l({},c,o,{ref:t}))}),Xe=a.forwardRef((n,t)=>{const{__scopeMenubar:r,...o}=n,c=m(r);return a.createElement(ye,l({},c,o,{ref:t}))}),en=n=>{const{__scopeMenubar:t,children:r,open:o,onOpenChange:c,defaultOpen:$}=n,p=m(t),[i=!1,s]=J({prop:o,defaultProp:$,onChange:c});return a.createElement(Te,l({},p,{open:i,onOpenChange:s}),r)},nn=a.forwardRef((n,t)=>{const{__scopeMenubar:r,...o}=n,c=m(r);return a.createElement(Ce,l({"data-radix-menubar-subtrigger":""},c,o,{ref:t}))}),rn=a.forwardRef((n,t)=>{const{__scopeMenubar:r,...o}=n,c=m(r);return a.createElement(Re,l({},c,{"data-radix-menubar-content":""},o,{ref:t,style:{...n.style,"--radix-menubar-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-menubar-content-available-width":"var(--radix-popper-available-width)","--radix-menubar-content-available-height":"var(--radix-popper-available-height)","--radix-menubar-trigger-width":"var(--radix-popper-anchor-width)","--radix-menubar-trigger-height":"var(--radix-popper-anchor-height)"}}))});function tn(n,t){return n.map((r,o)=>n[(t+o)%n.length])}const re=Be,an=Ge,te=ze,on=Ue,ae=We,oe=Ze,ce=qe,de=He,cn=Ye,se=Je,ue=Qe,ie=Xe,dn=en,be=nn,le=rn,N=an,U=dn,sn=cn,O=a.forwardRef(({className:n,...t},r)=>e.jsx(re,{ref:r,className:_("flex h-10 items-center space-x-1 rounded-md border bg-background p-1",n),...t}));O.displayName=re.displayName;const w=a.forwardRef(({className:n,...t},r)=>e.jsx(te,{ref:r,className:_("flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",n),...t}));w.displayName=te.displayName;const E=a.forwardRef(({className:n,inset:t,children:r,...o},c)=>e.jsxs(be,{ref:c,className:_("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",t&&"pl-8",n),...o,children:[r,e.jsx(Fe,{className:"ml-auto h-4 w-4"})]}));E.displayName=be.displayName;const T=a.forwardRef(({className:n,...t},r)=>e.jsx(le,{ref:r,className:_("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...t}));T.displayName=le.displayName;const y=a.forwardRef(({className:n,align:t="start",alignOffset:r=-4,sideOffset:o=8,...c},$)=>e.jsx(on,{children:e.jsx(ae,{ref:$,align:t,alignOffset:r,sideOffset:o,className:_("z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...c})}));y.displayName=ae.displayName;const d=a.forwardRef(({className:n,inset:t,...r},o)=>e.jsx(ce,{ref:o,className:_("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t&&"pl-8",n),...r}));d.displayName=ce.displayName;const P=a.forwardRef(({className:n,children:t,checked:r,...o},c)=>e.jsxs(de,{ref:c,className:_("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),checked:r,...o,children:[e.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:e.jsx(ue,{children:e.jsx(ke,{className:"h-4 w-4"})})}),t]}));P.displayName=de.displayName;const R=a.forwardRef(({className:n,children:t,...r},o)=>e.jsxs(se,{ref:o,className:_("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),...r,children:[e.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:e.jsx(ue,{children:e.jsx(Ae,{className:"h-2 w-2 fill-current"})})}),t]}));R.displayName=se.displayName;const fe=a.forwardRef(({className:n,inset:t,...r},o)=>e.jsx(oe,{ref:o,className:_("px-2 py-1.5 text-sm font-semibold",t&&"pl-8",n),...r}));fe.displayName=oe.displayName;const h=a.forwardRef(({className:n,...t},r)=>e.jsx(ie,{ref:r,className:_("-mx-1 my-1 h-px bg-muted",n),...t}));h.displayName=ie.displayName;const I=({className:n,...t})=>e.jsx("span",{className:_("ml-auto text-xs tracking-widest text-muted-foreground",n),...t});I.displayname="MenubarShortcut";O.__docgenInfo={description:"",methods:[]};w.__docgenInfo={description:"",methods:[]};y.__docgenInfo={description:"",methods:[],props:{align:{defaultValue:{value:'"start"',computed:!1},required:!1},alignOffset:{defaultValue:{value:"-4",computed:!1},required:!1},sideOffset:{defaultValue:{value:"8",computed:!1},required:!1}}};d.__docgenInfo={description:"",methods:[]};h.__docgenInfo={description:"",methods:[]};fe.__docgenInfo={description:"",methods:[]};P.__docgenInfo={description:"",methods:[]};R.__docgenInfo={description:"",methods:[]};T.__docgenInfo={description:"",methods:[]};E.__docgenInfo={description:"",methods:[]};I.__docgenInfo={description:"",methods:[],displayName:"MenubarShortcut"};const un={title:"Components/Menubar",component:O,parameters:{layout:"centered"}},C={render:()=>e.jsxs(O,{children:[e.jsxs(N,{children:[e.jsx(w,{children:"File"}),e.jsxs(y,{children:[e.jsxs(d,{children:["New Tab ",e.jsx(I,{children:"⌘T"})]}),e.jsxs(d,{children:["New Window ",e.jsx(I,{children:"⌘N"})]}),e.jsx(d,{disabled:!0,children:"New Incognito Window"}),e.jsx(h,{}),e.jsxs(U,{children:[e.jsx(E,{children:"Share"}),e.jsxs(T,{children:[e.jsx(d,{children:"Email link"}),e.jsx(d,{children:"Messages"}),e.jsx(d,{children:"Notes"})]})]}),e.jsx(h,{}),e.jsxs(d,{children:["Print... ",e.jsx(I,{children:"⌘P"})]})]})]}),e.jsxs(N,{children:[e.jsx(w,{children:"Edit"}),e.jsxs(y,{children:[e.jsxs(d,{children:["Undo ",e.jsx(I,{children:"⌘Z"})]}),e.jsxs(d,{children:["Redo ",e.jsx(I,{children:"⇧⌘Z"})]}),e.jsx(h,{}),e.jsxs(U,{children:[e.jsx(E,{children:"Find"}),e.jsxs(T,{children:[e.jsx(d,{children:"Search the web"}),e.jsx(h,{}),e.jsx(d,{children:"Find..."}),e.jsx(d,{children:"Find Next"}),e.jsx(d,{children:"Find Previous"})]})]}),e.jsx(h,{}),e.jsx(d,{children:"Cut"}),e.jsx(d,{children:"Copy"}),e.jsx(d,{children:"Paste"})]})]}),e.jsxs(N,{children:[e.jsx(w,{children:"View"}),e.jsxs(y,{children:[e.jsx(P,{children:"Always Show Bookmarks Bar"}),e.jsx(P,{checked:!0,children:"Always Show Full URLs"}),e.jsx(h,{}),e.jsxs(d,{inset:!0,children:["Reload ",e.jsx(I,{children:"⌘R"})]}),e.jsxs(d,{disabled:!0,inset:!0,children:["Force Reload ",e.jsx(I,{children:"⇧⌘R"})]}),e.jsx(h,{}),e.jsx(d,{inset:!0,children:"Toggle Fullscreen"}),e.jsx(h,{}),e.jsx(d,{inset:!0,children:"Hide Sidebar"})]})]}),e.jsxs(N,{children:[e.jsx(w,{children:"Profiles"}),e.jsxs(y,{children:[e.jsxs(sn,{value:"benoit",children:[e.jsx(R,{value:"andy",children:"Andy"}),e.jsx(R,{value:"benoit",children:"Benoit"}),e.jsx(R,{value:"Luis",children:"Luis"})]}),e.jsx(h,{}),e.jsx(d,{inset:!0,children:"Edit..."}),e.jsx(h,{}),e.jsx(d,{inset:!0,children:"Add Profile..."})]})]})]})};var W,Z,q;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    return <Menubar>
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
            <MenubarCheckboxItem checked>
              Always Show Full URLs
            </MenubarCheckboxItem>
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
      </Menubar>;
  }
}`,...(q=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:q.source}}};const bn=["Default"],Nn=Object.freeze(Object.defineProperty({__proto__:null,Default:C,__namedExportsOrder:bn,default:un},Symbol.toStringTag,{value:"Module"}));export{Nn as C,C as D};
