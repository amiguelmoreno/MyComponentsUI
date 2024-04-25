import{j as a}from"./jsx-runtime-gfuiFmrk.js";import{r as e}from"./index-B3ehnkiM.js";import{a as ne}from"./utils-DJk2kaG7.js";import{c as $e}from"./createLucideIcon-CvIVernL.js";/**
 * @license lucide-react v0.371.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=$e("Dot",[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]]);var ze=Object.defineProperty,qe=Object.defineProperties,Ye=Object.getOwnPropertyDescriptors,re=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable,Se=(t,r,o)=>r in t?ze(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,Ue=(t,r)=>{for(var o in r||(r={}))Ce.call(r,o)&&Se(t,o,r[o]);if(re)for(var o of re(r))Me.call(r,o)&&Se(t,o,r[o]);return t},Je=(t,r)=>qe(t,Ye(r)),Ke=(t,r)=>{var o={};for(var u in t)Ce.call(t,u)&&r.indexOf(u)<0&&(o[u]=t[u]);if(t!=null&&re)for(var u of re(t))r.indexOf(u)<0&&Me.call(t,u)&&(o[u]=t[u]);return o},Qe="^\\d+$";function Xe(t){let r=setTimeout(t,0),o=setTimeout(t,10),u=setTimeout(t,50);return[r,o,u]}function Ze(t){let r=e.useRef();return e.useEffect(()=>{r.current=t}),r.current}var et=18,ke=40,tt=`${ke}px`,nt=["[data-lastpass-icon-root]","com-1password-button","[data-dashlanecreated]",'[style$="2147483647 !important;"]'].join(",");function rt({containerRef:t,inputRef:r,pushPasswordManagerStrategy:o,isFocused:u}){let T=e.useRef({done:!1,refocused:!1}),[c,D]=e.useState(!1),[S,Q]=e.useState(!1),[N,X]=e.useState(!1),oe=e.useMemo(()=>o==="none"?!1:(o==="increase-width"||o==="experimental-no-flickering")&&c&&S,[c,S,o]),w=e.useCallback(()=>{let x=t.current,f=r.current;if(!x||!f||N||o==="none")return;let i=x,b=i.getBoundingClientRect().left+i.offsetWidth,W=i.getBoundingClientRect().top+i.offsetHeight/2,Z=b-et,ee=W;if(!(document.querySelectorAll(nt).length===0&&document.elementFromPoint(Z,ee)===x)&&(D(!0),X(!0),!T.current.refocused&&document.activeElement===f)){let H=[f.selectionStart,f.selectionEnd];f.blur(),f.focus(),f.setSelectionRange(H[0],H[1]),T.current.refocused=!0}},[t,r,N,o]);return e.useEffect(()=>{let x=t.current;if(!x||o==="none")return;function f(){let b=window.innerWidth-x.getBoundingClientRect().right;Q(b>=ke)}f();let i=setInterval(f,1e3);return()=>{clearInterval(i)}},[t,o]),e.useEffect(()=>{let x=u||document.activeElement===r.current;if(o==="none"||!x)return;let f=setTimeout(w,0),i=setTimeout(w,2e3),b=setTimeout(w,5e3),W=setTimeout(()=>{X(!0)},6e3);return()=>{clearTimeout(f),clearTimeout(i),clearTimeout(b),clearTimeout(W)}},[r,u,o,w]),{hasPWMBadge:c,willPushPWMBadge:oe,PWM_BADGE_SPACE_WIDTH:tt}}var _e=e.createContext({}),Re=e.forwardRef((t,r)=>{var o=t,{value:u,onChange:T,maxLength:c,textAlign:D="left",pattern:S=Qe,inputMode:Q="numeric",onComplete:N,pushPasswordManagerStrategy:X="increase-width",containerClassName:oe,noScriptCSSFallback:w=ot,render:x,children:f}=o,i=Ke(o,["value","onChange","maxLength","textAlign","pattern","inputMode","onComplete","pushPasswordManagerStrategy","containerClassName","noScriptCSSFallback","render","children"]),b,W,Z,ee,H;let[De,Ne]=e.useState(typeof i.defaultValue=="string"?i.defaultValue:""),m=u??De,E=Ze(m),$=e.useCallback(n=>{T==null||T(n),Ne(n)},[T]),P=e.useMemo(()=>S?typeof S=="string"?new RegExp(S):S:null,[S]),p=e.useRef(null),ae=e.useRef(null),le=e.useRef({value:m,onChange:$,isIOS:typeof window<"u"&&((W=(b=window==null?void 0:window.CSS)==null?void 0:b.supports)==null?void 0:W.call(b,"-webkit-touch-callout","none"))}),te=e.useRef({prev:[(Z=p.current)==null?void 0:Z.selectionStart,(ee=p.current)==null?void 0:ee.selectionEnd,(H=p.current)==null?void 0:H.selectionDirection]});e.useImperativeHandle(r,()=>p.current,[]),e.useEffect(()=>{let n=p.current,l=ae.current;if(!n||!l)return;le.current.value!==n.value&&le.current.onChange(n.value),te.current.prev=[n.selectionStart,n.selectionEnd,n.selectionDirection];function g(){if(document.activeElement!==n){z(null),q(null);return}let s=n.selectionStart,h=n.selectionEnd,I=n.selectionDirection,M=n.maxLength,k=n.value,G=te.current.prev,j=-1,y=-1,_;if(k.length!==0&&s!==null&&h!==null){let Le=s===h,Fe=s===k.length&&k.length<M;if(Le&&!Fe){let R=s;if(R===0)j=0,y=1,_="forward";else if(R===M)j=R-1,y=R,_="backward";else if(M>1&&k.length>1){let ue=0;if(G[0]!==null&&G[1]!==null){_=R<G[1]?"backward":"forward";let He=G[0]===G[1]&&G[0]<M;_==="backward"&&!He&&(ue=-1)}j=ue+R,y=ue+R+1}}j!==-1&&y!==-1&&j!==y&&p.current.setSelectionRange(j,y,_)}let ve=j!==-1?j:s,he=y!==-1?y:h,Ge=_??I;z(ve),q(he),te.current.prev=[ve,he,Ge]}if(document.addEventListener("selectionchange",g,{capture:!0}),g(),document.activeElement===n&&ie(!0),!document.getElementById("input-otp-style")){let s=document.createElement("style");if(s.id="input-otp-style",document.head.appendChild(s),s.sheet){let h="background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";Y(s.sheet,"[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"),Y(s.sheet,`[data-input-otp]:autofill { ${h} }`),Y(s.sheet,`[data-input-otp]:-webkit-autofill { ${h} }`),Y(s.sheet,"@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"),Y(s.sheet,"[data-input-otp] + * { pointer-events: all !important; }")}}let v=()=>{l&&l.style.setProperty("--root-height",`${n.clientHeight}px`)};v();let O=new ResizeObserver(v);return O.observe(n),()=>{document.removeEventListener("selectionchange",g,{capture:!0}),O.disconnect()}},[]);let[de,pe]=e.useState(!1),[V,ie]=e.useState(!1),[C,z]=e.useState(null),[A,q]=e.useState(null);e.useEffect(()=>{Xe(()=>{var n,l,g,v;(n=p.current)==null||n.dispatchEvent(new Event("input"));let O=(l=p.current)==null?void 0:l.selectionStart,s=(g=p.current)==null?void 0:g.selectionEnd,h=(v=p.current)==null?void 0:v.selectionDirection;O!==null&&s!==null&&(z(O),q(s),te.current.prev=[O,s,h])})},[m,V]),e.useEffect(()=>{E!==void 0&&m!==E&&E.length<c&&m.length===c&&(N==null||N(m))},[c,N,E,m]);let B=rt({containerRef:ae,inputRef:p,pushPasswordManagerStrategy:X,isFocused:V}),me=e.useCallback(n=>{let l=n.currentTarget.value.slice(0,c);if(l.length>0&&P&&!P.test(l)){n.preventDefault();return}typeof E=="string"&&l.length<E.length&&document.dispatchEvent(new Event("selectionchange")),$(l)},[c,$,E,P]),fe=e.useCallback(()=>{var n;if(p.current){let l=Math.min(p.current.value.length,c-1),g=p.current.value.length;(n=p.current)==null||n.setSelectionRange(l,g),z(l),q(g)}ie(!0)},[c]),ge=e.useCallback(n=>{var l,g;let v=p.current;if(!le.current.isIOS||!n.clipboardData||!v)return;let O=n.clipboardData.getData("text/plain");n.preventDefault();let s=(l=p.current)==null?void 0:l.selectionStart,h=(g=p.current)==null?void 0:g.selectionEnd,I=(s!==h?m.slice(0,s)+O+m.slice(h):m.slice(0,s)+O+m.slice(s)).slice(0,c);if(I.length>0&&P&&!P.test(I))return;v.value=I,$(I);let M=Math.min(I.length,c-1),k=I.length;v.setSelectionRange(M,k),z(M),q(k)},[c,$,P,m]),We=e.useMemo(()=>({position:"relative",cursor:i.disabled?"default":"text",userSelect:"none",WebkitUserSelect:"none",pointerEvents:"none"}),[i.disabled]),xe=e.useMemo(()=>({position:"absolute",inset:0,width:B.willPushPWMBadge?`calc(100% + ${B.PWM_BADGE_SPACE_WIDTH})`:"100%",clipPath:B.willPushPWMBadge?`inset(0 ${B.PWM_BADGE_SPACE_WIDTH} 0 0)`:void 0,height:"100%",display:"flex",textAlign:D,opacity:"1",color:"transparent",pointerEvents:"all",background:"transparent",caretColor:"transparent",border:"0 solid transparent",outline:"0 solid transparent",boxShadow:"none",lineHeight:"1",letterSpacing:"-.5em",fontSize:"var(--root-height)",fontFamily:"monospace",fontVariantNumeric:"tabular-nums"}),[B.PWM_BADGE_SPACE_WIDTH,B.willPushPWMBadge,D]),Ae=e.useMemo(()=>e.createElement("input",Je(Ue({autoComplete:i.autoComplete||"one-time-code"},i),{"data-input-otp":!0,"data-input-otp-mss":C,"data-input-otp-mse":A,inputMode:Q,pattern:P==null?void 0:P.source,style:xe,maxLength:c,value:m,ref:p,onPaste:n=>{var l;ge(n),(l=i.onPaste)==null||l.call(i,n)},onChange:me,onMouseOver:n=>{var l;pe(!0),(l=i.onMouseOver)==null||l.call(i,n)},onMouseLeave:n=>{var l;pe(!1),(l=i.onMouseLeave)==null||l.call(i,n)},onFocus:n=>{var l;fe(),(l=i.onFocus)==null||l.call(i,n)},onBlur:n=>{var l;ie(!1),(l=i.onBlur)==null||l.call(i,n)}})),[me,fe,ge,Q,xe,c,A,C,i,P==null?void 0:P.source,m]),se=e.useMemo(()=>({slots:Array.from({length:c}).map((n,l)=>{let g=V&&C!==null&&A!==null&&(C===A&&l===C||l>=C&&l<A),v=m[l]!==void 0?m[l]:null;return{char:v,isActive:g,hasFakeCaret:g&&v===null}}),isFocused:V,isHovering:!i.disabled&&de}),[V,de,c,A,C,i.disabled,m]),Be=e.useMemo(()=>x?x(se):e.createElement(_e.Provider,{value:se},f),[f,se,x]);return e.createElement(e.Fragment,null,w!==null&&e.createElement("noscript",null,e.createElement("style",null,w)),e.createElement("div",{ref:ae,"data-input-otp-container":!0,style:We,className:oe},Be,e.createElement("div",{style:{position:"absolute",inset:0,pointerEvents:"none"}},Ae)))});Re.displayName="Input";function Y(t,r){try{t.insertRule(r)}catch{console.error("input-otp could not insert CSS rule:",r)}}var ot=`
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;const F=e.forwardRef(({className:t,containerClassName:r,...o},u)=>a.jsx(Re,{ref:u,containerClassName:ne("flex items-center gap-2 has-[:disabled]:opacity-50",r),className:ne("disabled:cursor-not-allowed",t),...o}));F.displayName="InputOTP";const L=e.forwardRef(({className:t,...r},o)=>a.jsx("div",{ref:o,className:ne("flex items-center",t),...r}));L.displayName="InputOTPGroup";const d=e.forwardRef(({index:t,className:r,...o},u)=>{const T=e.useContext(_e),{char:c,hasFakeCaret:D,isActive:S}=T.slots[t];return a.jsxs("div",{ref:u,className:ne("relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",S&&"z-10 ring-2 ring-ring ring-offset-background",r),...o,children:[c,D&&a.jsx("div",{className:"pointer-events-none absolute inset-0 flex items-center justify-center",children:a.jsx("div",{className:"h-4 w-px animate-caret-blink bg-foreground duration-1000"})})]})});d.displayName="InputOTPSlot";const ce=e.forwardRef(({...t},r)=>a.jsx("div",{ref:r,role:"separator",...t,children:a.jsx(Ve,{})}));ce.displayName="InputOTPSeparator";F.__docgenInfo={description:"",methods:[],displayName:"InputOTP"};L.__docgenInfo={description:"",methods:[],displayName:"InputOTPGroup"};d.__docgenInfo={description:"",methods:[],displayName:"InputOTPSlot"};ce.__docgenInfo={description:"",methods:[],displayName:"InputOTPSeparator"};const at={title:"Components/Input OTP",component:F,parameters:{layout:"centered"}},U={render:()=>a.jsx(F,{maxLength:6,children:a.jsxs(L,{children:[a.jsx(d,{index:0}),a.jsx(d,{index:1}),a.jsx(d,{index:2}),a.jsx(d,{index:3}),a.jsx(d,{index:4}),a.jsx(d,{index:5})]})})},J={render:()=>a.jsxs(F,{maxLength:6,children:[a.jsxs(L,{children:[a.jsx(d,{index:0}),a.jsx(d,{index:1}),a.jsx(d,{index:2})]}),a.jsx(ce,{}),a.jsxs(L,{children:[a.jsx(d,{index:3}),a.jsx(d,{index:4}),a.jsx(d,{index:5})]})]})},K={render:()=>{const[t,r]=e.useState("");return a.jsxs("div",{className:"space-y-2",children:[a.jsx(F,{maxLength:6,value:t,onChange:o=>r(o),children:a.jsxs(L,{children:[a.jsx(d,{index:0}),a.jsx(d,{index:1}),a.jsx(d,{index:2}),a.jsx(d,{index:3}),a.jsx(d,{index:4}),a.jsx(d,{index:5})]})}),a.jsx("div",{className:"text-center text-sm",children:t===""?a.jsx(a.Fragment,{children:"Enter your one-time password."}):a.jsxs(a.Fragment,{children:["You entered: ",t]})})]})}};var Pe,be,Oe;U.parameters={...U.parameters,docs:{...(Pe=U.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: () => {
    return <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>;
  }
}`,...(Oe=(be=U.parameters)==null?void 0:be.docs)==null?void 0:Oe.source}}};var Te,Ie,je;J.parameters={...J.parameters,docs:{...(Te=J.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => {
    return <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>;
  }
}`,...(je=(Ie=J.parameters)==null?void 0:Ie.docs)==null?void 0:je.source}}};var ye,we,Ee;K.parameters={...K.parameters,docs:{...(ye=K.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <div className='space-y-2'>
        <InputOTP maxLength={6} value={value} onChange={value => setValue(value)}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <div className='text-center text-sm'>
          {value === "" ? <>Enter your one-time password.</> : <>You entered: {value}</>}
        </div>
      </div>;
  }
}`,...(Ee=(we=K.parameters)==null?void 0:we.docs)==null?void 0:Ee.source}}};const lt=["Default","WithSeparator","Controlled"],dt=Object.freeze(Object.defineProperty({__proto__:null,Controlled:K,Default:U,WithSeparator:J,__namedExportsOrder:lt,default:at},Symbol.toStringTag,{value:"Module"}));export{dt as C,U as D,J as W};
