import{j as n}from"./jsx-runtime-gfuiFmrk.js";import{r as u}from"./index-B3ehnkiM.js";import{a as i}from"./utils-DJk2kaG7.js";import{b as h}from"./index-D5_E73Qc.js";import{C as N}from"./chevron-left-BBRn037s.js";import{C as j}from"./chevron-right-CA0RwzeB.js";import{E as v}from"./ellipsis-C6CPKqMQ.js";const l=({className:e,...a})=>n.jsx("nav",{role:"navigation","aria-label":"pagination",className:i("mx-auto flex w-full justify-center",e),...a});l.displayName="Pagination";const c=u.forwardRef(({className:e,...a},o)=>n.jsx("ul",{ref:o,className:i("flex flex-row items-center gap-1",e),...a}));c.displayName="PaginationContent";const t=u.forwardRef(({className:e,...a},o)=>n.jsx("li",{ref:o,className:i("",e),...a}));t.displayName="PaginationItem";const r=({className:e,isActive:a,size:o="icon",...x})=>n.jsx("a",{"aria-current":a?"page":void 0,className:i(h({variant:a?"outline":"ghost",size:o}),e),...x});r.displayName="PaginationLink";const m=({className:e,...a})=>n.jsxs(r,{"aria-label":"Go to previous page",size:"default",className:i("gap-1 pl-2.5",e),...a,children:[n.jsx(N,{className:"h-4 w-4"}),n.jsx("span",{children:"Previous"})]});m.displayName="PaginationPrevious";const p=({className:e,...a})=>n.jsxs(r,{"aria-label":"Go to next page",size:"default",className:i("gap-1 pr-2.5",e),...a,children:[n.jsx("span",{children:"Next"}),n.jsx(j,{className:"h-4 w-4"})]});p.displayName="PaginationNext";const d=({className:e,...a})=>n.jsxs("span",{"aria-hidden":!0,className:i("flex h-9 w-9 items-center justify-center",e),...a,children:[n.jsx(v,{className:"h-4 w-4"}),n.jsx("span",{className:"sr-only",children:"More pages"})]});d.displayName="PaginationEllipsis";l.__docgenInfo={description:"",methods:[],displayName:"Pagination"};c.__docgenInfo={description:"",methods:[],displayName:"PaginationContent"};d.__docgenInfo={description:"",methods:[],displayName:"PaginationEllipsis"};t.__docgenInfo={description:"",methods:[],displayName:"PaginationItem"};r.__docgenInfo={description:"",methods:[],displayName:"PaginationLink",props:{isActive:{required:!1,tsType:{name:"boolean"},description:""},size:{defaultValue:{value:'"icon"',computed:!1},required:!1}}};p.__docgenInfo={description:"",methods:[],displayName:"PaginationNext"};m.__docgenInfo={description:"",methods:[],displayName:"PaginationPrevious"};const y={title:"Components/Pagination",component:l,parameters:{layout:"centered"}},s={render:()=>{const e=a=>{a.preventDefault()};return n.jsx(l,{children:n.jsxs(c,{children:[n.jsx(t,{children:n.jsx(m,{href:"#",onClick:e})}),n.jsx(t,{children:n.jsx(r,{href:"#",onClick:e,children:"1"})}),n.jsx(t,{children:n.jsx(d,{})}),n.jsx(t,{children:n.jsx(p,{href:"#",onClick:e})})]})})}};var g,f,P;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const preventDefault = (event: React.MouseEvent) => {
      event.preventDefault();
    };
    return <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href='#' onClick={preventDefault} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#' onClick={preventDefault}>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href='#' onClick={preventDefault} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>;
  }
}`,...(P=(f=s.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};const _=["Default"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:s,__namedExportsOrder:_,default:y},Symbol.toStringTag,{value:"Module"}));export{L as C,s as D};
