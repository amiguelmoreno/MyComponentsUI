import{j as k}from"./jsx-runtime-gfuiFmrk.js";import{r as t}from"./index-B3ehnkiM.js";import{$ as S,_ as C}from"./index-BtW3vQL8.js";import{$ as D}from"./index-gzTY19Q4.js";import{$ as y}from"./index-CcyUcsxs.js";import{$ as M}from"./index-DD6JRj2r.js";import{$ as q}from"./index-DTfEcMay.js";import{$ as B}from"./index-e03L_g6a.js";import{$ as O}from"./index-DK5DHDD6.js";import{$ as _}from"./index-C10IWUuP.js";import{a as g}from"./utils-DJk2kaG7.js";import{C as A}from"./check-D-Nel7tA.js";const w="Checkbox",[K,ae]=D(w),[L,H]=K(w),T=t.forwardRef((e,n)=>{const{__scopeCheckbox:o,name:d,checked:u,defaultChecked:a,required:b,disabled:i,value:f="on",onCheckedChange:$,...v}=e,[c,m]=t.useState(null),N=S(n,r=>m(r)),h=t.useRef(!1),E=c?!!c.closest("form"):!0,[l=!1,x]=M({prop:u,defaultProp:a,onChange:$}),j=t.useRef(l);return t.useEffect(()=>{const r=c==null?void 0:c.form;if(r){const p=()=>x(j.current);return r.addEventListener("reset",p),()=>r.removeEventListener("reset",p)}},[c,x]),t.createElement(L,{scope:o,state:l,disabled:i},t.createElement(_.button,C({type:"button",role:"checkbox","aria-checked":s(l)?"mixed":l,"aria-required":b,"data-state":P(l),"data-disabled":i?"":void 0,disabled:i,value:f},v,{ref:N,onKeyDown:y(e.onKeyDown,r=>{r.key==="Enter"&&r.preventDefault()}),onClick:y(e.onClick,r=>{x(p=>s(p)?!0:!p),E&&(h.current=r.isPropagationStopped(),h.current||r.stopPropagation())})})),E&&t.createElement(F,{control:c,bubbles:!h.current,name:d,value:f,checked:l,required:b,disabled:i,style:{transform:"translateX(-100%)"}}))}),X="CheckboxIndicator",z=t.forwardRef((e,n)=>{const{__scopeCheckbox:o,forceMount:d,...u}=e,a=H(X,o);return t.createElement(O,{present:d||s(a.state)||a.state===!0},t.createElement(_.span,C({"data-state":P(a.state),"data-disabled":a.disabled?"":void 0},u,{ref:n,style:{pointerEvents:"none",...e.style}})))}),F=e=>{const{control:n,checked:o,bubbles:d=!0,...u}=e,a=t.useRef(null),b=q(o),i=B(n);return t.useEffect(()=>{const f=a.current,$=window.HTMLInputElement.prototype,c=Object.getOwnPropertyDescriptor($,"checked").set;if(b!==o&&c){const m=new Event("click",{bubbles:d});f.indeterminate=s(o),c.call(f,s(o)?!1:o),f.dispatchEvent(m)}},[b,o,d]),t.createElement("input",C({type:"checkbox","aria-hidden":!0,defaultChecked:s(o)?!1:o},u,{tabIndex:-1,ref:a,style:{...e.style,...i,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function s(e){return e==="indeterminate"}function P(e){return s(e)?"indeterminate":e?"checked":"unchecked"}const R=T,G=z,I=t.forwardRef(({className:e,...n},o)=>k.jsx(R,{ref:o,className:g("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",e),...n,children:k.jsx(G,{className:g("flex items-center justify-center text-current"),children:k.jsx(A,{className:"h-4 w-4"})})}));I.displayName=R.displayName;I.__docgenInfo={description:"",methods:[]};export{I as C};
