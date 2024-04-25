import{j as e}from"./jsx-runtime-gfuiFmrk.js";import{r as t}from"./index-B3ehnkiM.js";import{a as g}from"./index-BtW3vQL8.js";import{a as d}from"./utils-DJk2kaG7.js";import{C as j}from"./chevron-right-CA0RwzeB.js";const i=t.forwardRef(({...r},a)=>e.jsx("nav",{ref:a,"aria-label":"breadcrumb",...r}));i.displayName="Breadcrumb";const u=t.forwardRef(({className:r,...a},o)=>e.jsx("ol",{ref:o,className:d("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",r),...a}));u.displayName="BreadcrumbList";const s=t.forwardRef(({className:r,...a},o)=>e.jsx("li",{ref:o,className:d("inline-flex items-center gap-1.5",r),...a}));s.displayName="BreadcrumbItem";const m=t.forwardRef(({asChild:r,className:a,...o},f)=>{const x=r?g:"a";return e.jsx(x,{ref:f,className:d("transition-colors hover:text-foreground cursor-pointer",a),...o})});m.displayName="BreadcrumbLink";const p=t.forwardRef(({className:r,...a},o)=>e.jsx("span",{ref:o,role:"link","aria-disabled":"true","aria-current":"page",className:d("font-normal text-foreground cursor-pointer",r),...a}));p.displayName="BreadcrumbPage";const c=({children:r,className:a,...o})=>e.jsx("li",{role:"presentation","aria-hidden":"true",className:d("[&>svg]:size-3.5",a),...o,children:r??e.jsx(j,{})});c.displayName="BreadcrumbSeparator";i.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb"};u.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};s.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};m.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink"};p.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};c.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};const h={title:"Components/Breadcrumb",component:i,parameters:{layout:"centered"}},n={render:()=>e.jsx(i,{children:e.jsxs(u,{children:[e.jsx(s,{children:e.jsx(m,{children:"Home"})}),e.jsx(c,{}),e.jsx(s,{children:e.jsx(m,{children:"Components"})}),e.jsx(c,{}),e.jsx(s,{children:e.jsx(p,{children:"Breadcrumb"})})]})})};var l,b,B;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>;
  }
}`,...(B=(b=n.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};const _=["Default"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:_,default:h},Symbol.toStringTag,{value:"Module"}));export{S as C,n as D};
