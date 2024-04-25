import{j as x}from"./jsx-runtime-gfuiFmrk.js";import{r as e}from"./index-B3ehnkiM.js";import{_ as p,$ as h,a as I}from"./index-BtW3vQL8.js";import{$ as v}from"./index-CcyUcsxs.js";import{$ as M}from"./index-gzTY19Q4.js";import{$ as y}from"./index-CzXEFAbz.js";import{h as T,b as k,$ as N,a as S}from"./index-pXUiMtXY.js";import{$ as j}from"./index-DsPCPAgU.js";import{$ as O,b as K,c as z,a as V}from"./index-BgrccdF7.js";import{$ as q}from"./index-XB13z7cY.js";import{$ as C}from"./index-DK5DHDD6.js";import{$ as G}from"./index-C10IWUuP.js";import{$ as L}from"./index-DD6JRj2r.js";import{a as H}from"./utils-DJk2kaG7.js";const E="Popover",[_,Pe]=M(E,[O]),P=O(),[U,l]=_(E),Z=o=>{const{__scopePopover:s,children:a,open:d,defaultOpen:c,onOpenChange:t,modal:r=!1}=o,n=P(s),f=e.useRef(null),[u,b]=e.useState(!1),[m=!1,i]=L({prop:d,defaultProp:c,onChange:t});return e.createElement(z,n,e.createElement(U,{scope:s,contentId:j(),triggerRef:f,open:m,onOpenChange:i,onOpenToggle:e.useCallback(()=>i(g=>!g),[i]),hasCustomAnchor:u,onCustomAnchorAdd:e.useCallback(()=>b(!0),[]),onCustomAnchorRemove:e.useCallback(()=>b(!1),[]),modal:r},a))},B="PopoverTrigger",J=e.forwardRef((o,s)=>{const{__scopePopover:a,...d}=o,c=l(B,a),t=P(a),r=h(s,c.triggerRef),n=e.createElement(G.button,p({type:"button","aria-haspopup":"dialog","aria-expanded":c.open,"aria-controls":c.contentId,"data-state":w(c.open)},d,{ref:r,onClick:v(o.onClick,c.onOpenToggle)}));return c.hasCustomAnchor?n:e.createElement(V,p({asChild:!0},t),n)}),R="PopoverPortal",[Q,W]=_(R,{forceMount:void 0}),X=o=>{const{__scopePopover:s,forceMount:a,children:d,container:c}=o,t=l(R,s);return e.createElement(Q,{scope:s,forceMount:a},e.createElement(C,{present:a||t.open},e.createElement(q,{asChild:!0,container:c},d)))},$="PopoverContent",Y=e.forwardRef((o,s)=>{const a=W($,o.__scopePopover),{forceMount:d=a.forceMount,...c}=o,t=l($,o.__scopePopover);return e.createElement(C,{present:d||t.open},t.modal?e.createElement(ee,p({},c,{ref:s})):e.createElement(oe,p({},c,{ref:s})))}),ee=e.forwardRef((o,s)=>{const a=l($,o.__scopePopover),d=e.useRef(null),c=h(s,d),t=e.useRef(!1);return e.useEffect(()=>{const r=d.current;if(r)return T(r)},[]),e.createElement(k,{as:I,allowPinchZoom:!0},e.createElement(A,p({},o,{ref:c,trapFocus:a.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:v(o.onCloseAutoFocus,r=>{var n;r.preventDefault(),t.current||(n=a.triggerRef.current)===null||n===void 0||n.focus()}),onPointerDownOutside:v(o.onPointerDownOutside,r=>{const n=r.detail.originalEvent,f=n.button===0&&n.ctrlKey===!0,u=n.button===2||f;t.current=u},{checkForDefaultPrevented:!1}),onFocusOutside:v(o.onFocusOutside,r=>r.preventDefault(),{checkForDefaultPrevented:!1})})))}),oe=e.forwardRef((o,s)=>{const a=l($,o.__scopePopover),d=e.useRef(!1),c=e.useRef(!1);return e.createElement(A,p({},o,{ref:s,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r;if((r=o.onCloseAutoFocus)===null||r===void 0||r.call(o,t),!t.defaultPrevented){var n;d.current||(n=a.triggerRef.current)===null||n===void 0||n.focus(),t.preventDefault()}d.current=!1,c.current=!1},onInteractOutside:t=>{var r,n;(r=o.onInteractOutside)===null||r===void 0||r.call(o,t),t.defaultPrevented||(d.current=!0,t.detail.originalEvent.type==="pointerdown"&&(c.current=!0));const f=t.target;((n=a.triggerRef.current)===null||n===void 0?void 0:n.contains(f))&&t.preventDefault(),t.detail.originalEvent.type==="focusin"&&c.current&&t.preventDefault()}}))}),A=e.forwardRef((o,s)=>{const{__scopePopover:a,trapFocus:d,onOpenAutoFocus:c,onCloseAutoFocus:t,disableOutsidePointerEvents:r,onEscapeKeyDown:n,onPointerDownOutside:f,onFocusOutside:u,onInteractOutside:b,...m}=o,i=l($,a),g=P(a);return N(),e.createElement(S,{asChild:!0,loop:!0,trapped:d,onMountAutoFocus:c,onUnmountAutoFocus:t},e.createElement(y,{asChild:!0,disableOutsidePointerEvents:r,onInteractOutside:b,onEscapeKeyDown:n,onPointerDownOutside:f,onFocusOutside:u,onDismiss:()=>i.onOpenChange(!1)},e.createElement(K,p({"data-state":w(i.open),role:"dialog",id:i.contentId},g,m,{ref:s,style:{...m.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}}))))});function w(o){return o?"open":"closed"}const te=Z,ce=J,re=X,F=Y,xe=te,he=ce,D=e.forwardRef(({className:o,align:s="center",sideOffset:a=4,...d},c)=>x.jsx(re,{children:x.jsx(F,{ref:c,align:s,sideOffset:a,className:H("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",o),...d})}));D.displayName=F.displayName;D.__docgenInfo={description:"",methods:[],props:{align:{defaultValue:{value:'"center"',computed:!1},required:!1},sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};export{xe as P,he as a,D as b};
