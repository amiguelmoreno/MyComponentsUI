import{j as a}from"./jsx-runtime-gfuiFmrk.js";import{r as o}from"./index-B3ehnkiM.js";import{e as He,g as Je,$ as We,a as Xe}from"./index-DMNmvXcV.js";import{$ as R}from"./index-C10IWUuP.js";import{a as A}from"./utils-DJk2kaG7.js";import{D as Ye,b as Qe}from"./index-B-jIDt67.js";import{c as U}from"./createLucideIcon-CvIVernL.js";import{C as De}from"./calendar-C85vOEUs.js";import{U as Le}from"./user-Bybg_CiX.js";/**
 * @license lucide-react v0.371.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=U("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.371.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=U("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.371.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=U("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.371.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=U("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.371.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=U("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);var je=1,et=.9,tt=.8,nt=.17,de=.1,ie=.999,rt=.9999,at=.99,ot=/[\\\/_+.#"@\[\(\{&]/,lt=/[\\\/_+.#"@\[\(\{&]/g,st=/[\s-]/,Oe=/[\s-]/g;function me(e,r,t,c,s,i,u){if(i===r.length)return s===e.length?je:at;var h=`${s},${i}`;if(u[h]!==void 0)return u[h];for(var v=c.charAt(i),f=t.indexOf(v,s),m=0,g,I,j,N;f>=0;)g=me(e,r,t,c,f+1,i+1,u),g>m&&(f===s?g*=je:ot.test(e.charAt(f-1))?(g*=tt,j=e.slice(s,f-1).match(lt),j&&s>0&&(g*=Math.pow(ie,j.length))):st.test(e.charAt(f-1))?(g*=et,N=e.slice(s,f-1).match(Oe),N&&s>0&&(g*=Math.pow(ie,N.length))):(g*=nt,s>0&&(g*=Math.pow(ie,f-s))),e.charAt(f)!==r.charAt(i)&&(g*=rt)),(g<de&&t.charAt(f-1)===c.charAt(i+1)||c.charAt(i+1)===c.charAt(i)&&t.charAt(f-1)!==c.charAt(i))&&(I=me(e,r,t,c,f+1,i+2,u),I*de>g&&(g=I*de)),g>m&&(m=g),f=t.indexOf(v,f+1);return u[h]=m,m}function ke(e){return e.toLowerCase().replace(Oe," ")}function dt(e,r,t){return e=t&&t.length>0?`${e+" "+t.join(" ")}`:e,me(e,r,ke(e),ke(r),0,0,{})}var B='[cmdk-group=""]',ce='[cmdk-group-items=""]',it='[cmdk-group-heading=""]',pe='[cmdk-item=""]',Ie=`${pe}:not([aria-disabled="true"])`,ue="cmdk-item-select",D="data-value",ct=(e,r,t)=>dt(e,r,t),qe=o.createContext(void 0),T=()=>o.useContext(qe),Be=o.createContext(void 0),fe=()=>o.useContext(Be),Fe=o.createContext(void 0),Ve=o.forwardRef((e,r)=>{let t=K(()=>{var n,d;return{search:"",value:(d=(n=e.value)!=null?n:e.defaultValue)!=null?d:"",filtered:{count:0,items:new Map,groups:new Set}}}),c=K(()=>new Set),s=K(()=>new Map),i=K(()=>new Map),u=K(()=>new Set),h=ze(e),{label:v,children:f,value:m,onValueChange:g,filter:I,shouldFilter:j,loop:N,disablePointerSelection:J=!1,vimBindings:_=!0,...W}=e,he=o.useId(),ge=o.useId(),xe=o.useId(),$=o.useRef(null),y=bt();L(()=>{if(m!==void 0){let n=m.trim();t.current.value=n,S.emit()}},[m]),L(()=>{y(6,ye)},[]);let S=o.useMemo(()=>({subscribe:n=>(u.current.add(n),()=>u.current.delete(n)),snapshot:()=>t.current,setState:(n,d,p)=>{var l,x,C;if(!Object.is(t.current[n],d)){if(t.current[n]=d,n==="search")oe(),re(),y(1,ae);else if(n==="value"&&(p||y(5,ye),((l=h.current)==null?void 0:l.value)!==void 0)){let k=d??"";(C=(x=h.current).onValueChange)==null||C.call(x,k);return}S.emit()}},emit:()=>{u.current.forEach(n=>n())}}),[]),ne=o.useMemo(()=>({value:(n,d,p)=>{var l;d!==((l=i.current.get(n))==null?void 0:l.value)&&(i.current.set(n,{value:d,keywords:p}),t.current.filtered.items.set(n,ve(d,p)),y(2,()=>{re(),S.emit()}))},item:(n,d)=>(c.current.add(n),d&&(s.current.has(d)?s.current.get(d).add(n):s.current.set(d,new Set([n]))),y(3,()=>{oe(),re(),t.current.value||ae(),S.emit()}),()=>{i.current.delete(n),c.current.delete(n),t.current.filtered.items.delete(n);let p=O();y(4,()=>{oe(),(p==null?void 0:p.getAttribute("id"))===n&&ae(),S.emit()})}),group:n=>(s.current.has(n)||s.current.set(n,new Set),()=>{i.current.delete(n),s.current.delete(n)}),filter:()=>h.current.shouldFilter,label:v||e["aria-label"],disablePointerSelection:J,listId:he,inputId:xe,labelId:ge,listInnerRef:$}),[]);function ve(n,d){var p,l;let x=(l=(p=h.current)==null?void 0:p.filter)!=null?l:ct;return n?x(n,t.current.search,d):0}function re(){if(!t.current.search||h.current.shouldFilter===!1)return;let n=t.current.filtered.items,d=[];t.current.filtered.groups.forEach(l=>{let x=s.current.get(l),C=0;x.forEach(k=>{let M=n.get(k);C=Math.max(M,C)}),d.push([l,C])});let p=$.current;q().sort((l,x)=>{var C,k;let M=l.getAttribute("id"),X=x.getAttribute("id");return((C=n.get(X))!=null?C:0)-((k=n.get(M))!=null?k:0)}).forEach(l=>{let x=l.closest(ce);x?x.appendChild(l.parentElement===x?l:l.closest(`${ce} > *`)):p.appendChild(l.parentElement===p?l:l.closest(`${ce} > *`))}),d.sort((l,x)=>x[1]-l[1]).forEach(l=>{let x=$.current.querySelector(`${B}[${D}="${encodeURIComponent(l[0])}"]`);x==null||x.parentElement.appendChild(x)})}function ae(){let n=q().find(p=>p.getAttribute("aria-disabled")!=="true"),d=n==null?void 0:n.getAttribute(D);S.setState("value",d||void 0)}function oe(){var n,d,p,l;if(!t.current.search||h.current.shouldFilter===!1){t.current.filtered.count=c.current.size;return}t.current.filtered.groups=new Set;let x=0;for(let C of c.current){let k=(d=(n=i.current.get(C))==null?void 0:n.value)!=null?d:"",M=(l=(p=i.current.get(C))==null?void 0:p.keywords)!=null?l:[],X=ve(k,M);t.current.filtered.items.set(C,X),X>0&&x++}for(let[C,k]of s.current)for(let M of k)if(t.current.filtered.items.get(M)>0){t.current.filtered.groups.add(C);break}t.current.filtered.count=x}function ye(){var n,d,p;let l=O();l&&(((n=l.parentElement)==null?void 0:n.firstChild)===l&&((p=(d=l.closest(B))==null?void 0:d.querySelector(it))==null||p.scrollIntoView({block:"nearest"})),l.scrollIntoView({block:"nearest"}))}function O(){var n;return(n=$.current)==null?void 0:n.querySelector(`${pe}[aria-selected="true"]`)}function q(){var n;return Array.from((n=$.current)==null?void 0:n.querySelectorAll(Ie))}function le(n){let d=q()[n];d&&S.setState("value",d.getAttribute(D))}function se(n){var d;let p=O(),l=q(),x=l.findIndex(k=>k===p),C=l[x+n];(d=h.current)!=null&&d.loop&&(C=x+n<0?l[l.length-1]:x+n===l.length?l[0]:l[x+n]),C&&S.setState("value",C.getAttribute(D))}function Ce(n){let d=O(),p=d==null?void 0:d.closest(B),l;for(;p&&!l;)p=n>0?yt(p,B):Ct(p,B),l=p==null?void 0:p.querySelector(Ie);l?S.setState("value",l.getAttribute(D)):se(n)}let be=()=>le(q().length-1),we=n=>{n.preventDefault(),n.metaKey?be():n.altKey?Ce(1):se(1)},Se=n=>{n.preventDefault(),n.metaKey?le(0):n.altKey?Ce(-1):se(-1)};return o.createElement(R.div,{ref:r,tabIndex:-1,...W,"cmdk-root":"",onKeyDown:n=>{var d;if((d=W.onKeyDown)==null||d.call(W,n),!n.defaultPrevented)switch(n.key){case"n":case"j":{_&&n.ctrlKey&&we(n);break}case"ArrowDown":{we(n);break}case"p":case"k":{_&&n.ctrlKey&&Se(n);break}case"ArrowUp":{Se(n);break}case"Home":{n.preventDefault(),le(0);break}case"End":{n.preventDefault(),be();break}case"Enter":if(!n.nativeEvent.isComposing&&n.keyCode!==229){n.preventDefault();let p=O();if(p){let l=new Event(ue);p.dispatchEvent(l)}}}}},o.createElement("label",{"cmdk-label":"",htmlFor:ne.inputId,id:ne.labelId,style:St},v),Y(e,n=>o.createElement(Be.Provider,{value:S},o.createElement(qe.Provider,{value:ne},n))))}),mt=o.forwardRef((e,r)=>{var t,c;let s=o.useId(),i=o.useRef(null),u=o.useContext(Fe),h=T(),v=ze(e),f=(c=(t=v.current)==null?void 0:t.forceMount)!=null?c:u==null?void 0:u.forceMount;L(()=>{if(!f)return h.item(s,u==null?void 0:u.id)},[f]);let m=Ue(s,i,[e.value,e.children,i],e.keywords),g=fe(),I=P(y=>y.value&&y.value===m.current),j=P(y=>f||h.filter()===!1?!0:y.search?y.filtered.items.get(s)>0:!0);o.useEffect(()=>{let y=i.current;if(!(!y||e.disabled))return y.addEventListener(ue,N),()=>y.removeEventListener(ue,N)},[j,e.onSelect,e.disabled]);function N(){var y,S;J(),(S=(y=v.current).onSelect)==null||S.call(y,m.current)}function J(){g.setState("value",m.current,!0)}if(!j)return null;let{disabled:_,value:W,onSelect:he,forceMount:ge,keywords:xe,...$}=e;return o.createElement(R.div,{ref:z([i,r]),...$,id:s,"cmdk-item":"",role:"option","aria-disabled":!!_,"aria-selected":!!I,"data-disabled":!!_,"data-selected":!!I,onPointerMove:_||h.disablePointerSelection?void 0:J,onClick:_?void 0:N},e.children)}),ut=o.forwardRef((e,r)=>{let{heading:t,children:c,forceMount:s,...i}=e,u=o.useId(),h=o.useRef(null),v=o.useRef(null),f=o.useId(),m=T(),g=P(j=>s||m.filter()===!1?!0:j.search?j.filtered.groups.has(u):!0);L(()=>m.group(u),[]),Ue(u,h,[e.value,e.heading,v]);let I=o.useMemo(()=>({id:u,forceMount:s}),[s]);return o.createElement(R.div,{ref:z([h,r]),...i,"cmdk-group":"",role:"presentation",hidden:g?void 0:!0},t&&o.createElement("div",{ref:v,"cmdk-group-heading":"","aria-hidden":!0,id:f},t),Y(e,j=>o.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":t?f:void 0},o.createElement(Fe.Provider,{value:I},j))))}),pt=o.forwardRef((e,r)=>{let{alwaysRender:t,...c}=e,s=o.useRef(null),i=P(u=>!u.search);return!t&&!i?null:o.createElement(R.div,{ref:z([s,r]),...c,"cmdk-separator":"",role:"separator"})}),ft=o.forwardRef((e,r)=>{let{onValueChange:t,...c}=e,s=e.value!=null,i=fe(),u=P(m=>m.search),h=P(m=>m.value),v=T(),f=o.useMemo(()=>{var m;let g=(m=v.listInnerRef.current)==null?void 0:m.querySelector(`${pe}[${D}="${encodeURIComponent(h)}"]`);return g==null?void 0:g.getAttribute("id")},[]);return o.useEffect(()=>{e.value!=null&&i.setState("search",e.value)},[e.value]),o.createElement(R.input,{ref:r,...c,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":v.listId,"aria-labelledby":v.labelId,"aria-activedescendant":f,id:v.inputId,type:"text",value:s?e.value:u,onChange:m=>{s||i.setState("search",m.target.value),t==null||t(m.target.value)}})}),ht=o.forwardRef((e,r)=>{let{children:t,label:c="Suggestions",...s}=e,i=o.useRef(null),u=o.useRef(null),h=T();return o.useEffect(()=>{if(u.current&&i.current){let v=u.current,f=i.current,m,g=new ResizeObserver(()=>{m=requestAnimationFrame(()=>{let I=v.offsetHeight;f.style.setProperty("--cmdk-list-height",I.toFixed(1)+"px")})});return g.observe(v),()=>{cancelAnimationFrame(m),g.unobserve(v)}}},[]),o.createElement(R.div,{ref:z([i,r]),...s,"cmdk-list":"",role:"listbox","aria-label":c,id:h.listId},Y(e,v=>o.createElement("div",{ref:z([u,h.listInnerRef]),"cmdk-list-sizer":""},v)))}),gt=o.forwardRef((e,r)=>{let{open:t,onOpenChange:c,overlayClassName:s,contentClassName:i,container:u,...h}=e;return o.createElement(He,{open:t,onOpenChange:c},o.createElement(Je,{container:u},o.createElement(We,{"cmdk-overlay":"",className:s}),o.createElement(Xe,{"aria-label":e.label,"cmdk-dialog":"",className:i},o.createElement(Ve,{ref:r,...h}))))}),xt=o.forwardRef((e,r)=>P(t=>t.filtered.count===0)?o.createElement(R.div,{ref:r,...e,"cmdk-empty":"",role:"presentation"}):null),vt=o.forwardRef((e,r)=>{let{progress:t,children:c,label:s="Loading...",...i}=e;return o.createElement(R.div,{ref:r,...i,"cmdk-loading":"",role:"progressbar","aria-valuenow":t,"aria-valuemin":0,"aria-valuemax":100,"aria-label":s},Y(e,u=>o.createElement("div",{"aria-hidden":!0},u)))}),w=Object.assign(Ve,{List:ht,Item:mt,Input:ft,Group:ut,Separator:pt,Dialog:gt,Empty:xt,Loading:vt});function yt(e,r){let t=e.nextElementSibling;for(;t;){if(t.matches(r))return t;t=t.nextElementSibling}}function Ct(e,r){let t=e.previousElementSibling;for(;t;){if(t.matches(r))return t;t=t.previousElementSibling}}function ze(e){let r=o.useRef(e);return L(()=>{r.current=e}),r}var L=typeof window>"u"?o.useEffect:o.useLayoutEffect;function K(e){let r=o.useRef();return r.current===void 0&&(r.current=e()),r}function z(e){return r=>{e.forEach(t=>{typeof t=="function"?t(r):t!=null&&(t.current=r)})}}function P(e){let r=fe(),t=()=>e(r.snapshot());return o.useSyncExternalStore(r.subscribe,t,t)}function Ue(e,r,t,c=[]){let s=o.useRef(),i=T();return L(()=>{var u;let h=(()=>{var f;for(let m of t){if(typeof m=="string")return m.trim();if(typeof m=="object"&&"current"in m)return m.current?(f=m.current.textContent)==null?void 0:f.trim():s.current}})(),v=c.map(f=>f.trim());i.value(e,h,v),(u=r.current)==null||u.setAttribute(D,h),s.current=h}),s}var bt=()=>{let[e,r]=o.useState(),t=K(()=>new Map);return L(()=>{t.current.forEach(c=>c()),t.current=new Map},[e]),(c,s)=>{t.current.set(c,s),r({})}};function wt(e){let r=e.type;return typeof r=="function"?r(e.props):"render"in r?r.render(e.props):e}function Y({asChild:e,children:r},t){return e&&o.isValidElement(r)?o.cloneElement(wt(r),{ref:r.ref},t(r.props.children)):t(r)}var St={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};const H=o.forwardRef(({className:e,...r},t)=>a.jsx(w,{ref:t,className:A("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",e),...r}));H.displayName=w.displayName;const Te=({children:e,...r})=>a.jsx(Ye,{...r,children:a.jsx(Qe,{className:"overflow-hidden p-0 shadow-lg",children:a.jsx(H,{className:"[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",children:e})})}),Q=o.forwardRef(({className:e,...r},t)=>a.jsxs("div",{className:"flex items-center border-b px-3","cmdk-input-wrapper":"",children:[a.jsx(Ze,{className:"mr-2 h-4 w-4 shrink-0 opacity-50"}),a.jsx(w.Input,{ref:t,className:A("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",e),...r})]}));Q.displayName=w.Input.displayName;const Z=o.forwardRef(({className:e,...r},t)=>a.jsx(w.List,{ref:t,className:A("max-h-[300px] overflow-y-auto overflow-x-hidden",e),...r}));Z.displayName=w.List.displayName;const ee=o.forwardRef((e,r)=>a.jsx(w.Empty,{ref:r,className:"py-6 text-center text-sm",...e}));ee.displayName=w.Empty.displayName;const G=o.forwardRef(({className:e,...r},t)=>a.jsx(w.Group,{ref:t,className:A("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",e),...r}));G.displayName=w.Group.displayName;const te=o.forwardRef(({className:e,...r},t)=>a.jsx(w.Separator,{ref:t,className:A("-mx-1 h-px bg-border",e),...r}));te.displayName=w.Separator.displayName;const b=o.forwardRef(({className:e,...r},t)=>a.jsx(w.Item,{ref:t,className:A("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...r}));b.displayName=w.Item.displayName;const E=({className:e,...r})=>a.jsx("span",{className:A("ml-auto text-xs tracking-widest text-muted-foreground",e),...r});E.displayName="CommandShortcut";H.__docgenInfo={description:"",methods:[]};Te.__docgenInfo={description:"",methods:[],displayName:"CommandDialog",composes:["DialogProps"]};Q.__docgenInfo={description:"",methods:[]};Z.__docgenInfo={description:"",methods:[]};ee.__docgenInfo={description:"",methods:[]};G.__docgenInfo={description:"",methods:[]};b.__docgenInfo={description:"",methods:[]};E.__docgenInfo={description:"",methods:[],displayName:"CommandShortcut"};te.__docgenInfo={description:"",methods:[]};const jt={title:"Components/Command",component:H,parameters:{layout:"centered"}},F={render:()=>a.jsxs(H,{className:"rounded-lg border shadow-md",children:[a.jsx(Q,{placeholder:"Type a command or search..."}),a.jsxs(Z,{children:[a.jsx(ee,{children:"No results found."}),a.jsxs(G,{heading:"Suggestions",children:[a.jsxs(b,{children:[a.jsx(De,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Calendar"})]}),a.jsxs(b,{children:[a.jsx(Ge,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Search Emoji"})]}),a.jsxs(b,{children:[a.jsx(Pe,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Calculator"})]})]}),a.jsx(te,{}),a.jsxs(G,{heading:"Settings",children:[a.jsxs(b,{children:[a.jsx(Le,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Profile"}),a.jsx(E,{children:"⌘P"})]}),a.jsxs(b,{children:[a.jsx(Ae,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Billing"}),a.jsx(E,{children:"⌘B"})]}),a.jsxs(b,{children:[a.jsx(Ke,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Settings"}),a.jsx(E,{children:"⌘S"})]})]})]})]})},V={render:()=>{const[e,r]=o.useState(!1);return o.useEffect(()=>{const t=c=>{c.key==="j"&&(c.metaKey||c.ctrlKey)&&(c.preventDefault(),r(s=>!s))};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[]),a.jsxs(a.Fragment,{children:[a.jsxs("p",{className:"text-sm text-muted-foreground",children:["Press"," ",a.jsxs("kbd",{className:"pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100",children:[a.jsx("span",{className:"text-xs",children:"⌘"}),"J"]})]}),a.jsxs(Te,{open:e,onOpenChange:r,children:[a.jsx(Q,{placeholder:"Type a command or search..."}),a.jsxs(Z,{children:[a.jsx(ee,{children:"No results found."}),a.jsxs(G,{heading:"Suggestions",children:[a.jsxs(b,{children:[a.jsx(De,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Calendar"})]}),a.jsxs(b,{children:[a.jsx(Ge,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Search Emoji"})]}),a.jsxs(b,{children:[a.jsx(Pe,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Calculator"})]})]}),a.jsx(te,{}),a.jsxs(G,{heading:"Settings",children:[a.jsxs(b,{children:[a.jsx(Le,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Profile"}),a.jsx(E,{children:"⌘P"})]}),a.jsxs(b,{children:[a.jsx(Ae,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Billing"}),a.jsx(E,{children:"⌘B"})]}),a.jsxs(b,{children:[a.jsx(Ke,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Settings"}),a.jsx(E,{children:"⌘S"})]})]})]})]})]})}};var Ne,Ee,Re;F.parameters={...F.parameters,docs:{...(Ne=F.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => {
    return <Command className='rounded-lg border shadow-md'>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='Suggestions'>
            <CommandItem>
              <Calendar className='mr-2 h-4 w-4' />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile className='mr-2 h-4 w-4' />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator className='mr-2 h-4 w-4' />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading='Settings'>
            <CommandItem>
              <User className='mr-2 h-4 w-4' />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className='mr-2 h-4 w-4' />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className='mr-2 h-4 w-4' />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>;
  }
}`,...(Re=(Ee=F.parameters)==null?void 0:Ee.docs)==null?void 0:Re.source}}};var _e,$e,Me;V.parameters={...V.parameters,docs:{...(_e=V.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          setOpen(open => !open);
        }
      };
      document.addEventListener("keydown", down);
      return () => document.removeEventListener("keydown", down);
    }, []);
    return <>
        <p className='text-sm text-muted-foreground'>
          Press{" "}
          <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
            <span className='text-xs'>⌘</span>J
          </kbd>
        </p>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder='Type a command or search...' />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading='Suggestions'>
              <CommandItem>
                <Calendar className='mr-2 h-4 w-4' />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile className='mr-2 h-4 w-4' />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <Calculator className='mr-2 h-4 w-4' />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading='Settings'>
              <CommandItem>
                <User className='mr-2 h-4 w-4' />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCard className='mr-2 h-4 w-4' />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings className='mr-2 h-4 w-4' />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>;
  }
}`,...(Me=($e=V.parameters)==null?void 0:$e.docs)==null?void 0:Me.source}}};const kt=["Default","Dialog"],Pt=Object.freeze(Object.defineProperty({__proto__:null,Default:F,Dialog:V,__namedExportsOrder:kt,default:jt},Symbol.toStringTag,{value:"Module"}));export{Pt as C,F as D,V as a};
