import{j as _}from"./jsx-runtime-gfuiFmrk.js";import{r as e}from"./index-B3ehnkiM.js";import{$ as B,_ as y,a as Ze}from"./index-BtW3vQL8.js";import{r as Te}from"./index-DeIys0fC.js";import{$ as Ce}from"./index-BEk9yI-S.js";import{$ as T}from"./index-CcyUcsxs.js";import{$ as Je}from"./index-CUKvRgbG.js";import{$ as Qe}from"./index-gzTY19Q4.js";import{$ as et}from"./index-DWbqV_Lf.js";import{$ as tt}from"./index-CzXEFAbz.js";import{h as ot,$ as nt,b as ct,a as rt}from"./index-pXUiMtXY.js";import{$ as ve}from"./index-DsPCPAgU.js";import{$ as Re,a as at,c as st,b as lt}from"./index-BgrccdF7.js";import{$ as it}from"./index-XB13z7cY.js";import{$ as D}from"./index-C10IWUuP.js";import{$ as dt}from"./index-BkVs4Xdz.js";import{$ as ye}from"./index-DD6JRj2r.js";import{$ as U}from"./index-CiqPuP9r.js";import{$ as ft}from"./index-DTfEcMay.js";import{$ as pt}from"./index-BOacIOqm.js";import{a as z}from"./utils-DJk2kaG7.js";import{C as Ne}from"./chevron-down-D5z6l907.js";import{c as ut}from"./createLucideIcon-CvIVernL.js";import{C as mt}from"./check-D-Nel7tA.js";/**
 * @license lucide-react v0.371.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=ut("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]),ht=[" ","Enter","ArrowUp","ArrowDown"],gt=[" ","Enter"],le="Select",[ie,de,vt]=Je(le),[te,Po]=Qe(le,[vt,Re]),xe=Re(),[xt,Y]=te(le),[wt,St]=te(le),bt=o=>{const{__scopeSelect:n,children:t,open:r,defaultOpen:l,onOpenChange:f,value:a,defaultValue:c,onValueChange:s,dir:i,name:$,autoComplete:C,disabled:I,required:E}=o,u=xe(n),[h,w]=e.useState(null),[m,d]=e.useState(null),[g,oe]=e.useState(!1),M=et(i),[ne=!1,R]=ye({prop:r,defaultProp:l,onChange:f}),[O,q]=ye({prop:a,defaultProp:c,onChange:s}),Z=e.useRef(null),G=h?!!h.closest("form"):!0,[L,W]=e.useState(new Set),F=Array.from(L).map(P=>P.props.value).join(";");return e.createElement(st,u,e.createElement(xt,{required:E,scope:n,trigger:h,onTriggerChange:w,valueNode:m,onValueNodeChange:d,valueNodeHasChildren:g,onValueNodeHasChildrenChange:oe,contentId:ve(),value:O,onValueChange:q,open:ne,onOpenChange:R,dir:M,triggerPointerDownPosRef:Z,disabled:I},e.createElement(ie.Provider,{scope:n},e.createElement(wt,{scope:o.__scopeSelect,onNativeOptionAdd:e.useCallback(P=>{W(V=>new Set(V).add(P))},[]),onNativeOptionRemove:e.useCallback(P=>{W(V=>{const H=new Set(V);return H.delete(P),H})},[])},t)),G?e.createElement(Ae,{key:F,"aria-hidden":!0,required:E,tabIndex:-1,name:$,autoComplete:C,value:O,onChange:P=>q(P.target.value),disabled:I},O===void 0?e.createElement("option",{value:""}):null,Array.from(L)):null))},Ct="SelectTrigger",yt=e.forwardRef((o,n)=>{const{__scopeSelect:t,disabled:r=!1,...l}=o,f=xe(t),a=Y(Ct,t),c=a.disabled||r,s=B(n,a.onTriggerChange),i=de(t),[$,C,I]=Le(u=>{const h=i().filter(d=>!d.disabled),w=h.find(d=>d.value===a.value),m=Ve(h,u,w);m!==void 0&&a.onValueChange(m.value)}),E=()=>{c||(a.onOpenChange(!0),I())};return e.createElement(at,y({asChild:!0},f),e.createElement(D.button,y({type:"button",role:"combobox","aria-controls":a.contentId,"aria-expanded":a.open,"aria-required":a.required,"aria-autocomplete":"none",dir:a.dir,"data-state":a.open?"open":"closed",disabled:c,"data-disabled":c?"":void 0,"data-placeholder":ke(a.value)?"":void 0},l,{ref:s,onClick:T(l.onClick,u=>{u.currentTarget.focus()}),onPointerDown:T(l.onPointerDown,u=>{const h=u.target;h.hasPointerCapture(u.pointerId)&&h.releasePointerCapture(u.pointerId),u.button===0&&u.ctrlKey===!1&&(E(),a.triggerPointerDownPosRef.current={x:Math.round(u.pageX),y:Math.round(u.pageY)},u.preventDefault())}),onKeyDown:T(l.onKeyDown,u=>{const h=$.current!=="";!(u.ctrlKey||u.altKey||u.metaKey)&&u.key.length===1&&C(u.key),!(h&&u.key===" ")&&ht.includes(u.key)&&(E(),u.preventDefault())})})))}),Et="SelectValue",_t=e.forwardRef((o,n)=>{const{__scopeSelect:t,className:r,style:l,children:f,placeholder:a="",...c}=o,s=Y(Et,t),{onValueNodeHasChildrenChange:i}=s,$=f!==void 0,C=B(n,s.onValueNodeChange);return U(()=>{i($)},[i,$]),e.createElement(D.span,y({},c,{ref:C,style:{pointerEvents:"none"}}),ke(s.value)?e.createElement(e.Fragment,null,a):f)}),It=e.forwardRef((o,n)=>{const{__scopeSelect:t,children:r,...l}=o;return e.createElement(D.span,y({"aria-hidden":!0},l,{ref:n}),r||"▼")}),Pt=o=>e.createElement(it,y({asChild:!0},o)),ee="SelectContent",Tt=e.forwardRef((o,n)=>{const t=Y(ee,o.__scopeSelect),[r,l]=e.useState();if(U(()=>{l(new DocumentFragment)},[]),!t.open){const f=r;return f?Te.createPortal(e.createElement(Oe,{scope:o.__scopeSelect},e.createElement(ie.Slot,{scope:o.__scopeSelect},e.createElement("div",null,o.children))),f):null}return e.createElement(Rt,y({},o,{ref:n}))}),j=10,[Oe,X]=te(ee),Rt=e.forwardRef((o,n)=>{const{__scopeSelect:t,position:r="item-aligned",onCloseAutoFocus:l,onEscapeKeyDown:f,onPointerDownOutside:a,side:c,sideOffset:s,align:i,alignOffset:$,arrowPadding:C,collisionBoundary:I,collisionPadding:E,sticky:u,hideWhenDetached:h,avoidCollisions:w,...m}=o,d=Y(ee,t),[g,oe]=e.useState(null),[M,ne]=e.useState(null),R=B(n,p=>oe(p)),[O,q]=e.useState(null),[Z,G]=e.useState(null),L=de(t),[W,F]=e.useState(!1),P=e.useRef(!1);e.useEffect(()=>{if(g)return ot(g)},[g]),nt();const V=e.useCallback(p=>{const[S,...N]=L().map(x=>x.ref.current),[b]=N.slice(-1),v=document.activeElement;for(const x of p)if(x===v||(x==null||x.scrollIntoView({block:"nearest"}),x===S&&M&&(M.scrollTop=0),x===b&&M&&(M.scrollTop=M.scrollHeight),x==null||x.focus(),document.activeElement!==v))return},[L,M]),H=e.useCallback(()=>V([O,g]),[V,O,g]);e.useEffect(()=>{W&&H()},[W,H]);const{onOpenChange:J,triggerPointerDownPosRef:K}=d;e.useEffect(()=>{if(g){let p={x:0,y:0};const S=b=>{var v,x,k,A;p={x:Math.abs(Math.round(b.pageX)-((v=(x=K.current)===null||x===void 0?void 0:x.x)!==null&&v!==void 0?v:0)),y:Math.abs(Math.round(b.pageY)-((k=(A=K.current)===null||A===void 0?void 0:A.y)!==null&&k!==void 0?k:0))}},N=b=>{p.x<=10&&p.y<=10?b.preventDefault():g.contains(b.target)||J(!1),document.removeEventListener("pointermove",S),K.current=null};return K.current!==null&&(document.addEventListener("pointermove",S),document.addEventListener("pointerup",N,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",S),document.removeEventListener("pointerup",N,{capture:!0})}}},[g,J,K]),e.useEffect(()=>{const p=()=>J(!1);return window.addEventListener("blur",p),window.addEventListener("resize",p),()=>{window.removeEventListener("blur",p),window.removeEventListener("resize",p)}},[J]);const[fe,re]=Le(p=>{const S=L().filter(v=>!v.disabled),N=S.find(v=>v.ref.current===document.activeElement),b=Ve(S,p,N);b&&setTimeout(()=>b.ref.current.focus())}),pe=e.useCallback((p,S,N)=>{const b=!P.current&&!N;(d.value!==void 0&&d.value===S||b)&&(q(p),b&&(P.current=!0))},[d.value]),ue=e.useCallback(()=>g==null?void 0:g.focus(),[g]),Q=e.useCallback((p,S,N)=>{const b=!P.current&&!N;(d.value!==void 0&&d.value===S||b)&&G(p)},[d.value]),ae=r==="popper"?Ee:Nt,ce=ae===Ee?{side:c,sideOffset:s,align:i,alignOffset:$,arrowPadding:C,collisionBoundary:I,collisionPadding:E,sticky:u,hideWhenDetached:h,avoidCollisions:w}:{};return e.createElement(Oe,{scope:t,content:g,viewport:M,onViewportChange:ne,itemRefCallback:pe,selectedItem:O,onItemLeave:ue,itemTextRefCallback:Q,focusSelectedItem:H,selectedItemText:Z,position:r,isPositioned:W,searchRef:fe},e.createElement(ct,{as:Ze,allowPinchZoom:!0},e.createElement(rt,{asChild:!0,trapped:d.open,onMountAutoFocus:p=>{p.preventDefault()},onUnmountAutoFocus:T(l,p=>{var S;(S=d.trigger)===null||S===void 0||S.focus({preventScroll:!0}),p.preventDefault()})},e.createElement(tt,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:f,onPointerDownOutside:a,onFocusOutside:p=>p.preventDefault(),onDismiss:()=>d.onOpenChange(!1)},e.createElement(ae,y({role:"listbox",id:d.contentId,"data-state":d.open?"open":"closed",dir:d.dir,onContextMenu:p=>p.preventDefault()},m,ce,{onPlaced:()=>F(!0),ref:R,style:{display:"flex",flexDirection:"column",outline:"none",...m.style},onKeyDown:T(m.onKeyDown,p=>{const S=p.ctrlKey||p.altKey||p.metaKey;if(p.key==="Tab"&&p.preventDefault(),!S&&p.key.length===1&&re(p.key),["ArrowUp","ArrowDown","Home","End"].includes(p.key)){let b=L().filter(v=>!v.disabled).map(v=>v.ref.current);if(["ArrowUp","End"].includes(p.key)&&(b=b.slice().reverse()),["ArrowUp","ArrowDown"].includes(p.key)){const v=p.target,x=b.indexOf(v);b=b.slice(x+1)}setTimeout(()=>V(b)),p.preventDefault()}})}))))))}),Nt=e.forwardRef((o,n)=>{const{__scopeSelect:t,onPlaced:r,...l}=o,f=Y(ee,t),a=X(ee,t),[c,s]=e.useState(null),[i,$]=e.useState(null),C=B(n,R=>$(R)),I=de(t),E=e.useRef(!1),u=e.useRef(!0),{viewport:h,selectedItem:w,selectedItemText:m,focusSelectedItem:d}=a,g=e.useCallback(()=>{if(f.trigger&&f.valueNode&&c&&i&&h&&w&&m){const R=f.trigger.getBoundingClientRect(),O=i.getBoundingClientRect(),q=f.valueNode.getBoundingClientRect(),Z=m.getBoundingClientRect();if(f.dir!=="rtl"){const v=Z.left-O.left,x=q.left-v,k=R.left-x,A=R.width+k,me=Math.max(A,O.width),$e=window.innerWidth-j,he=Ce(x,[j,$e-me]);c.style.minWidth=A+"px",c.style.left=he+"px"}else{const v=O.right-Z.right,x=window.innerWidth-q.right-v,k=window.innerWidth-R.right-x,A=R.width+k,me=Math.max(A,O.width),$e=window.innerWidth-j,he=Ce(x,[j,$e-me]);c.style.minWidth=A+"px",c.style.right=he+"px"}const G=I(),L=window.innerHeight-j*2,W=h.scrollHeight,F=window.getComputedStyle(i),P=parseInt(F.borderTopWidth,10),V=parseInt(F.paddingTop,10),H=parseInt(F.borderBottomWidth,10),J=parseInt(F.paddingBottom,10),K=P+V+W+J+H,fe=Math.min(w.offsetHeight*5,K),re=window.getComputedStyle(h),pe=parseInt(re.paddingTop,10),ue=parseInt(re.paddingBottom,10),Q=R.top+R.height/2-j,ae=L-Q,ce=w.offsetHeight/2,p=w.offsetTop+ce,S=P+V+p,N=K-S;if(S<=Q){const v=w===G[G.length-1].ref.current;c.style.bottom="0px";const x=i.clientHeight-h.offsetTop-h.offsetHeight,k=Math.max(ae,ce+(v?ue:0)+x+H),A=S+k;c.style.height=A+"px"}else{const v=w===G[0].ref.current;c.style.top="0px";const k=Math.max(Q,P+h.offsetTop+(v?pe:0)+ce)+N;c.style.height=k+"px",h.scrollTop=S-Q+h.offsetTop}c.style.margin=`${j}px 0`,c.style.minHeight=fe+"px",c.style.maxHeight=L+"px",r==null||r(),requestAnimationFrame(()=>E.current=!0)}},[I,f.trigger,f.valueNode,c,i,h,w,m,f.dir,r]);U(()=>g(),[g]);const[oe,M]=e.useState();U(()=>{i&&M(window.getComputedStyle(i).zIndex)},[i]);const ne=e.useCallback(R=>{R&&u.current===!0&&(g(),d==null||d(),u.current=!1)},[g,d]);return e.createElement(Ot,{scope:t,contentWrapper:c,shouldExpandOnScrollRef:E,onScrollButtonChange:ne},e.createElement("div",{ref:s,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:oe}},e.createElement(D.div,y({},l,{ref:C,style:{boxSizing:"border-box",maxHeight:"100%",...l.style}}))))}),Ee=e.forwardRef((o,n)=>{const{__scopeSelect:t,align:r="start",collisionPadding:l=j,...f}=o,a=xe(t);return e.createElement(lt,y({},a,f,{ref:n,align:r,collisionPadding:l,style:{boxSizing:"border-box",...f.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}}))}),[Ot,we]=te(ee,{}),_e="SelectViewport",Dt=e.forwardRef((o,n)=>{const{__scopeSelect:t,...r}=o,l=X(_e,t),f=we(_e,t),a=B(n,l.onViewportChange),c=e.useRef(0);return e.createElement(e.Fragment,null,e.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),e.createElement(ie.Slot,{scope:t},e.createElement(D.div,y({"data-radix-select-viewport":"",role:"presentation"},r,{ref:a,style:{position:"relative",flex:1,overflow:"auto",...r.style},onScroll:T(r.onScroll,s=>{const i=s.currentTarget,{contentWrapper:$,shouldExpandOnScrollRef:C}=f;if(C!=null&&C.current&&$){const I=Math.abs(c.current-i.scrollTop);if(I>0){const E=window.innerHeight-j*2,u=parseFloat($.style.minHeight),h=parseFloat($.style.height),w=Math.max(u,h);if(w<E){const m=w+I,d=Math.min(E,m),g=m-d;$.style.height=d+"px",$.style.bottom==="0px"&&(i.scrollTop=g>0?g:0,$.style.justifyContent="flex-end")}}}c.current=i.scrollTop})}))))}),Mt="SelectGroup",[kt,At]=te(Mt),Lt=e.forwardRef((o,n)=>{const{__scopeSelect:t,...r}=o,l=ve();return e.createElement(kt,{scope:t,id:l},e.createElement(D.div,y({role:"group","aria-labelledby":l},r,{ref:n})))}),Vt="SelectLabel",Bt=e.forwardRef((o,n)=>{const{__scopeSelect:t,...r}=o,l=At(Vt,t);return e.createElement(D.div,y({id:l.id},r,{ref:n}))}),ge="SelectItem",[Ht,De]=te(ge),jt=e.forwardRef((o,n)=>{const{__scopeSelect:t,value:r,disabled:l=!1,textValue:f,...a}=o,c=Y(ge,t),s=X(ge,t),i=c.value===r,[$,C]=e.useState(f??""),[I,E]=e.useState(!1),u=B(n,m=>{var d;return(d=s.itemRefCallback)===null||d===void 0?void 0:d.call(s,m,r,l)}),h=ve(),w=()=>{l||(c.onValueChange(r),c.onOpenChange(!1))};if(r==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return e.createElement(Ht,{scope:t,value:r,disabled:l,textId:h,isSelected:i,onItemTextChange:e.useCallback(m=>{C(d=>{var g;return d||((g=m==null?void 0:m.textContent)!==null&&g!==void 0?g:"").trim()})},[])},e.createElement(ie.ItemSlot,{scope:t,value:r,disabled:l,textValue:$},e.createElement(D.div,y({role:"option","aria-labelledby":h,"data-highlighted":I?"":void 0,"aria-selected":i&&I,"data-state":i?"checked":"unchecked","aria-disabled":l||void 0,"data-disabled":l?"":void 0,tabIndex:l?void 0:-1},a,{ref:u,onFocus:T(a.onFocus,()=>E(!0)),onBlur:T(a.onBlur,()=>E(!1)),onPointerUp:T(a.onPointerUp,w),onPointerMove:T(a.onPointerMove,m=>{if(l){var d;(d=s.onItemLeave)===null||d===void 0||d.call(s)}else m.currentTarget.focus({preventScroll:!0})}),onPointerLeave:T(a.onPointerLeave,m=>{if(m.currentTarget===document.activeElement){var d;(d=s.onItemLeave)===null||d===void 0||d.call(s)}}),onKeyDown:T(a.onKeyDown,m=>{var d;((d=s.searchRef)===null||d===void 0?void 0:d.current)!==""&&m.key===" "||(gt.includes(m.key)&&w(),m.key===" "&&m.preventDefault())})}))))}),se="SelectItemText",Wt=e.forwardRef((o,n)=>{const{__scopeSelect:t,className:r,style:l,...f}=o,a=Y(se,t),c=X(se,t),s=De(se,t),i=St(se,t),[$,C]=e.useState(null),I=B(n,m=>C(m),s.onItemTextChange,m=>{var d;return(d=c.itemTextRefCallback)===null||d===void 0?void 0:d.call(c,m,s.value,s.disabled)}),E=$==null?void 0:$.textContent,u=e.useMemo(()=>e.createElement("option",{key:s.value,value:s.value,disabled:s.disabled},E),[s.disabled,s.value,E]),{onNativeOptionAdd:h,onNativeOptionRemove:w}=i;return U(()=>(h(u),()=>w(u)),[h,w,u]),e.createElement(e.Fragment,null,e.createElement(D.span,y({id:s.textId},f,{ref:I})),s.isSelected&&a.valueNode&&!a.valueNodeHasChildren?Te.createPortal(f.children,a.valueNode):null)}),Ft="SelectItemIndicator",Kt=e.forwardRef((o,n)=>{const{__scopeSelect:t,...r}=o;return De(Ft,t).isSelected?e.createElement(D.span,y({"aria-hidden":!0},r,{ref:n})):null}),Ie="SelectScrollUpButton",Ut=e.forwardRef((o,n)=>{const t=X(Ie,o.__scopeSelect),r=we(Ie,o.__scopeSelect),[l,f]=e.useState(!1),a=B(n,r.onScrollButtonChange);return U(()=>{if(t.viewport&&t.isPositioned){let s=function(){const i=c.scrollTop>0;f(i)};const c=t.viewport;return s(),c.addEventListener("scroll",s),()=>c.removeEventListener("scroll",s)}},[t.viewport,t.isPositioned]),l?e.createElement(Me,y({},o,{ref:a,onAutoScroll:()=>{const{viewport:c,selectedItem:s}=t;c&&s&&(c.scrollTop=c.scrollTop-s.offsetHeight)}})):null}),Pe="SelectScrollDownButton",zt=e.forwardRef((o,n)=>{const t=X(Pe,o.__scopeSelect),r=we(Pe,o.__scopeSelect),[l,f]=e.useState(!1),a=B(n,r.onScrollButtonChange);return U(()=>{if(t.viewport&&t.isPositioned){let s=function(){const i=c.scrollHeight-c.clientHeight,$=Math.ceil(c.scrollTop)<i;f($)};const c=t.viewport;return s(),c.addEventListener("scroll",s),()=>c.removeEventListener("scroll",s)}},[t.viewport,t.isPositioned]),l?e.createElement(Me,y({},o,{ref:a,onAutoScroll:()=>{const{viewport:c,selectedItem:s}=t;c&&s&&(c.scrollTop=c.scrollTop+s.offsetHeight)}})):null}),Me=e.forwardRef((o,n)=>{const{__scopeSelect:t,onAutoScroll:r,...l}=o,f=X("SelectScrollButton",t),a=e.useRef(null),c=de(t),s=e.useCallback(()=>{a.current!==null&&(window.clearInterval(a.current),a.current=null)},[]);return e.useEffect(()=>()=>s(),[s]),U(()=>{var i;const $=c().find(C=>C.ref.current===document.activeElement);$==null||(i=$.ref.current)===null||i===void 0||i.scrollIntoView({block:"nearest"})},[c]),e.createElement(D.div,y({"aria-hidden":!0},l,{ref:n,style:{flexShrink:0,...l.style},onPointerDown:T(l.onPointerDown,()=>{a.current===null&&(a.current=window.setInterval(r,50))}),onPointerMove:T(l.onPointerMove,()=>{var i;(i=f.onItemLeave)===null||i===void 0||i.call(f),a.current===null&&(a.current=window.setInterval(r,50))}),onPointerLeave:T(l.onPointerLeave,()=>{s()})}))}),qt=e.forwardRef((o,n)=>{const{__scopeSelect:t,...r}=o;return e.createElement(D.div,y({"aria-hidden":!0},r,{ref:n}))});function ke(o){return o===""||o===void 0}const Ae=e.forwardRef((o,n)=>{const{value:t,...r}=o,l=e.useRef(null),f=B(n,l),a=ft(t);return e.useEffect(()=>{const c=l.current,s=window.HTMLSelectElement.prototype,$=Object.getOwnPropertyDescriptor(s,"value").set;if(a!==t&&$){const C=new Event("change",{bubbles:!0});$.call(c,t),c.dispatchEvent(C)}},[a,t]),e.createElement(pt,{asChild:!0},e.createElement("select",y({},r,{ref:f,defaultValue:t})))});Ae.displayName="BubbleSelect";function Le(o){const n=dt(o),t=e.useRef(""),r=e.useRef(0),l=e.useCallback(a=>{const c=t.current+a;n(c),function s(i){t.current=i,window.clearTimeout(r.current),i!==""&&(r.current=window.setTimeout(()=>s(""),1e3))}(c)},[n]),f=e.useCallback(()=>{t.current="",window.clearTimeout(r.current)},[]);return e.useEffect(()=>()=>window.clearTimeout(r.current),[]),[t,l,f]}function Ve(o,n,t){const l=n.length>1&&Array.from(n).every(i=>i===n[0])?n[0]:n,f=t?o.indexOf(t):-1;let a=Gt(o,Math.max(f,0));l.length===1&&(a=a.filter(i=>i!==t));const s=a.find(i=>i.textValue.toLowerCase().startsWith(l.toLowerCase()));return s!==t?s:void 0}function Gt(o,n){return o.map((t,r)=>o[(n+r)%o.length])}const Yt=bt,Be=yt,Xt=_t,Zt=It,Jt=Pt,He=Tt,Qt=Dt,eo=Lt,je=Bt,We=jt,to=Wt,oo=Kt,Fe=Ut,Ke=zt,Ue=qt,To=Yt,Ro=eo,No=Xt,ze=e.forwardRef(({className:o,children:n,...t},r)=>_.jsxs(Be,{ref:r,className:z("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",o),...t,children:[n,_.jsx(Zt,{asChild:!0,children:_.jsx(Ne,{className:"h-4 w-4 opacity-50"})})]}));ze.displayName=Be.displayName;const Se=e.forwardRef(({className:o,...n},t)=>_.jsx(Fe,{ref:t,className:z("flex cursor-default items-center justify-center py-1",o),...n,children:_.jsx($t,{className:"h-4 w-4"})}));Se.displayName=Fe.displayName;const be=e.forwardRef(({className:o,...n},t)=>_.jsx(Ke,{ref:t,className:z("flex cursor-default items-center justify-center py-1",o),...n,children:_.jsx(Ne,{className:"h-4 w-4"})}));be.displayName=Ke.displayName;const qe=e.forwardRef(({className:o,children:n,position:t="popper",...r},l)=>_.jsx(Jt,{children:_.jsxs(He,{ref:l,className:z("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",o),position:t,...r,children:[_.jsx(Se,{}),_.jsx(Qt,{className:z("p-1",t==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:n}),_.jsx(be,{})]})}));qe.displayName=He.displayName;const Ge=e.forwardRef(({className:o,...n},t)=>_.jsx(je,{ref:t,className:z("py-1.5 pl-8 pr-2 text-sm font-semibold",o),...n}));Ge.displayName=je.displayName;const Ye=e.forwardRef(({className:o,children:n,...t},r)=>_.jsxs(We,{ref:r,className:z("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",o),...t,children:[_.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:_.jsx(oo,{children:_.jsx(mt,{className:"h-4 w-4"})})}),_.jsx(to,{children:n})]}));Ye.displayName=We.displayName;const Xe=e.forwardRef(({className:o,...n},t)=>_.jsx(Ue,{ref:t,className:z("-mx-1 my-1 h-px bg-muted",o),...n}));Xe.displayName=Ue.displayName;ze.__docgenInfo={description:"",methods:[]};qe.__docgenInfo={description:"",methods:[],props:{position:{defaultValue:{value:'"popper"',computed:!1},required:!1}}};Ge.__docgenInfo={description:"",methods:[]};Ye.__docgenInfo={description:"",methods:[]};Xe.__docgenInfo={description:"",methods:[]};Se.__docgenInfo={description:"",methods:[]};be.__docgenInfo={description:"",methods:[]};export{To as S,ze as a,No as b,qe as c,Ye as d,Ro as e,Ge as f};
