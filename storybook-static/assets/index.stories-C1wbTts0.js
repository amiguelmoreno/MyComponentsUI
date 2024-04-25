import{j as e}from"./jsx-runtime-gfuiFmrk.js";import{r as n}from"./index-B3ehnkiM.js";import{_ as f}from"./index-BtW3vQL8.js";import{$ as T}from"./index-CcyUcsxs.js";import{$ as z}from"./index-gzTY19Q4.js";import{$ as S,a as U,b as q}from"./index-DgCCy1hh.js";import{$ as J}from"./index-DK5DHDD6.js";import{$ as C}from"./index-C10IWUuP.js";import{$ as Q}from"./index-DWbqV_Lf.js";import{$ as W}from"./index-DD6JRj2r.js";import{$ as X}from"./index-DsPCPAgU.js";import{a as w}from"./utils-DJk2kaG7.js";import{B as N}from"./index-D5_E73Qc.js";import{C as _,a as I,b as F,c as E,d as A,e as D}from"./index-DGzCeWxj.js";import{L as v}from"./index-60VDg0sI.js";import{I as x}from"./index-DuSNxgMV.js";const V="Tabs",[Y,Ne]=z(V,[S]),R=S(),[Z,y]=Y(V),ee=n.forwardRef((a,t)=>{const{__scopeTabs:r,value:s,onValueChange:d,defaultValue:l,orientation:o="horizontal",dir:b,activationMode:p="automatic",...m}=a,i=Q(b),[c,u]=W({prop:s,onChange:d,defaultProp:l});return n.createElement(Z,{scope:r,baseId:X(),value:c,onValueChange:u,orientation:o,dir:i,activationMode:p},n.createElement(C.div,f({dir:i,"data-orientation":o},m,{ref:t})))}),ae="TabsList",te=n.forwardRef((a,t)=>{const{__scopeTabs:r,loop:s=!0,...d}=a,l=y(ae,r),o=R(r);return n.createElement(U,f({asChild:!0},o,{orientation:l.orientation,dir:l.dir,loop:s}),n.createElement(C.div,f({role:"tablist","aria-orientation":l.orientation},d,{ref:t})))}),ne="TabsTrigger",re=n.forwardRef((a,t)=>{const{__scopeTabs:r,value:s,disabled:d=!1,...l}=a,o=y(ne,r),b=R(r),p=k(o.baseId,s),m=B(o.baseId,s),i=s===o.value;return n.createElement(q,f({asChild:!0},b,{focusable:!d,active:i}),n.createElement(C.button,f({type:"button",role:"tab","aria-selected":i,"aria-controls":m,"data-state":i?"active":"inactive","data-disabled":d?"":void 0,disabled:d,id:p},l,{ref:t,onMouseDown:T(a.onMouseDown,c=>{!d&&c.button===0&&c.ctrlKey===!1?o.onValueChange(s):c.preventDefault()}),onKeyDown:T(a.onKeyDown,c=>{[" ","Enter"].includes(c.key)&&o.onValueChange(s)}),onFocus:T(a.onFocus,()=>{const c=o.activationMode!=="manual";!i&&!d&&c&&o.onValueChange(s)})})))}),se="TabsContent",oe=n.forwardRef((a,t)=>{const{__scopeTabs:r,value:s,forceMount:d,children:l,...o}=a,b=y(se,r),p=k(b.baseId,s),m=B(b.baseId,s),i=s===b.value,c=n.useRef(i);return n.useEffect(()=>{const u=requestAnimationFrame(()=>c.current=!1);return()=>cancelAnimationFrame(u)},[]),n.createElement(J,{present:d||i},({present:u})=>n.createElement(C.div,f({"data-state":i?"active":"inactive","data-orientation":b.orientation,role:"tabpanel","aria-labelledby":p,hidden:!u,id:m,tabIndex:0},o,{ref:t,style:{...a.style,animationDuration:c.current?"0s":void 0}}),u&&l))});function k(a,t){return`${a}-trigger-${t}`}function B(a,t){return`${a}-content-${t}`}const ce=ee,G=te,H=re,O=oe,K=ce,j=n.forwardRef(({className:a,...t},r)=>e.jsx(G,{ref:r,className:w("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",a),...t}));j.displayName=G.displayName;const g=n.forwardRef(({className:a,...t},r)=>e.jsx(H,{ref:r,className:w("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",a),...t}));g.displayName=H.displayName;const h=n.forwardRef(({className:a,...t},r)=>e.jsx(O,{ref:r,className:w("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",a),...t}));h.displayName=O.displayName;j.__docgenInfo={description:"",methods:[]};g.__docgenInfo={description:"",methods:[]};h.__docgenInfo={description:"",methods:[]};const de={title:"Components/Tabs",component:K,parameters:{layout:"centered"}},$={render(){return e.jsxs(K,{defaultValue:"account",className:"w-[400px]",children:[e.jsxs(j,{className:"grid w-full grid-cols-2",children:[e.jsx(g,{value:"account",children:"Account"}),e.jsx(g,{value:"password",children:"Password"})]}),e.jsx(h,{value:"account",children:e.jsxs(_,{children:[e.jsxs(I,{children:[e.jsx(F,{children:"Account"}),e.jsx(E,{children:"Make changes to your account here. Click save when you're done."})]}),e.jsxs(A,{className:"space-y-2",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx(v,{htmlFor:"name",children:"Name"}),e.jsx(x,{id:"name",defaultValue:"Pedro Duarte"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(v,{htmlFor:"username",children:"Username"}),e.jsx(x,{id:"username",defaultValue:"@peduarte"})]})]}),e.jsx(D,{children:e.jsx(N,{children:"Save changes"})})]})}),e.jsx(h,{value:"password",children:e.jsxs(_,{children:[e.jsxs(I,{children:[e.jsx(F,{children:"Password"}),e.jsx(E,{children:"Change your password here. After saving, you'll be logged out."})]}),e.jsxs(A,{className:"space-y-2",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx(v,{htmlFor:"current",children:"Current password"}),e.jsx(x,{id:"current",type:"password"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(v,{htmlFor:"new",children:"New password"}),e.jsx(x,{id:"new",type:"password"})]})]}),e.jsx(D,{children:e.jsx(N,{children:"Save password"})})]})})]})}};var M,L,P;$.parameters={...$.parameters,docs:{...(M=$.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render() {
    return <Tabs defaultValue='account' className='w-[400px]'>
        <TabsList className='grid w-full grid-cols-2'>
          <TabsTrigger value='account'>Account</TabsTrigger>
          <TabsTrigger value='password'>Password</TabsTrigger>
        </TabsList>
        <TabsContent value='account'>
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-2'>
              <div className='space-y-1'>
                <Label htmlFor='name'>Name</Label>
                <Input id='name' defaultValue='Pedro Duarte' />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='username'>Username</Label>
                <Input id='username' defaultValue='@peduarte' />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value='password'>
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-2'>
              <div className='space-y-1'>
                <Label htmlFor='current'>Current password</Label>
                <Input id='current' type='password' />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='new'>New password</Label>
                <Input id='new' type='password' />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>;
  }
}`,...(P=(L=$.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};const ie=["Default"],_e=Object.freeze(Object.defineProperty({__proto__:null,Default:$,__namedExportsOrder:ie,default:de},Symbol.toStringTag,{value:"Module"}));export{_e as C,$ as D};
