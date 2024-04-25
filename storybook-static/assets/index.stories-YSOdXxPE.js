import{j as e}from"./jsx-runtime-gfuiFmrk.js";import{S as c,a as T,b as o,c as h,d as t,e as a,f as l}from"./index-CtR02GWN.js";const I={title:"Components/Select",component:c,parameters:{layout:"centered"}},n={render:()=>e.jsxs(c,{children:[e.jsx(T,{className:"w-[180px]",children:e.jsx(o,{placeholder:"Theme"})}),e.jsxs(h,{children:[e.jsx(t,{value:"light",children:"Light"}),e.jsx(t,{value:"dark",children:"Dark"}),e.jsx(t,{value:"system",children:"System"})]})]})},r={render:()=>e.jsxs(c,{children:[e.jsx(T,{className:"w-[280px]",children:e.jsx(o,{placeholder:"Select a timezone"})}),e.jsxs(h,{children:[e.jsxs(a,{children:[e.jsx(l,{children:"North America"}),e.jsx(t,{value:"est",children:"Eastern Standard Time (EST)"}),e.jsx(t,{value:"cst",children:"Central Standard Time (CST)"}),e.jsx(t,{value:"mst",children:"Mountain Standard Time (MST)"}),e.jsx(t,{value:"pst",children:"Pacific Standard Time (PST)"}),e.jsx(t,{value:"akst",children:"Alaska Standard Time (AKST)"}),e.jsx(t,{value:"hst",children:"Hawaii Standard Time (HST)"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Europe & Africa"}),e.jsx(t,{value:"gmt",children:"Greenwich Mean Time (GMT)"}),e.jsx(t,{value:"cet",children:"Central European Time (CET)"}),e.jsx(t,{value:"eet",children:"Eastern European Time (EET)"}),e.jsx(t,{value:"west",children:"Western European Summer Time (WEST)"}),e.jsx(t,{value:"cat",children:"Central Africa Time (CAT)"}),e.jsx(t,{value:"eat",children:"East Africa Time (EAT)"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Asia"}),e.jsx(t,{value:"msk",children:"Moscow Time (MSK)"}),e.jsx(t,{value:"ist",children:"India Standard Time (IST)"}),e.jsx(t,{value:"cst_china",children:"China Standard Time (CST)"}),e.jsx(t,{value:"jst",children:"Japan Standard Time (JST)"}),e.jsx(t,{value:"kst",children:"Korea Standard Time (KST)"}),e.jsx(t,{value:"ist_indonesia",children:"Indonesia Central Standard Time (WITA)"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Australia & Pacific"}),e.jsx(t,{value:"awst",children:"Australian Western Standard Time (AWST)"}),e.jsx(t,{value:"acst",children:"Australian Central Standard Time (ACST)"}),e.jsx(t,{value:"aest",children:"Australian Eastern Standard Time (AEST)"}),e.jsx(t,{value:"nzst",children:"New Zealand Standard Time (NZST)"}),e.jsx(t,{value:"fjt",children:"Fiji Time (FJT)"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"South America"}),e.jsx(t,{value:"art",children:"Argentina Time (ART)"}),e.jsx(t,{value:"bot",children:"Bolivia Time (BOT)"}),e.jsx(t,{value:"brt",children:"Brasilia Time (BRT)"}),e.jsx(t,{value:"clt",children:"Chile Standard Time (CLT)"})]})]})]})};var i,S,s;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    return <Select>
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Theme' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='light'>Light</SelectItem>
          <SelectItem value='dark'>Dark</SelectItem>
          <SelectItem value='system'>System</SelectItem>
        </SelectContent>
      </Select>;
  }
}`,...(s=(S=n.parameters)==null?void 0:S.docs)==null?void 0:s.source}}};var m,d,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <Select>
        <SelectTrigger className='w-[280px]'>
          <SelectValue placeholder='Select a timezone' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>North America</SelectLabel>
            <SelectItem value='est'>Eastern Standard Time (EST)</SelectItem>
            <SelectItem value='cst'>Central Standard Time (CST)</SelectItem>
            <SelectItem value='mst'>Mountain Standard Time (MST)</SelectItem>
            <SelectItem value='pst'>Pacific Standard Time (PST)</SelectItem>
            <SelectItem value='akst'>Alaska Standard Time (AKST)</SelectItem>
            <SelectItem value='hst'>Hawaii Standard Time (HST)</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Europe & Africa</SelectLabel>
            <SelectItem value='gmt'>Greenwich Mean Time (GMT)</SelectItem>
            <SelectItem value='cet'>Central European Time (CET)</SelectItem>
            <SelectItem value='eet'>Eastern European Time (EET)</SelectItem>
            <SelectItem value='west'>
              Western European Summer Time (WEST)
            </SelectItem>
            <SelectItem value='cat'>Central Africa Time (CAT)</SelectItem>
            <SelectItem value='eat'>East Africa Time (EAT)</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Asia</SelectLabel>
            <SelectItem value='msk'>Moscow Time (MSK)</SelectItem>
            <SelectItem value='ist'>India Standard Time (IST)</SelectItem>
            <SelectItem value='cst_china'>China Standard Time (CST)</SelectItem>
            <SelectItem value='jst'>Japan Standard Time (JST)</SelectItem>
            <SelectItem value='kst'>Korea Standard Time (KST)</SelectItem>
            <SelectItem value='ist_indonesia'>
              Indonesia Central Standard Time (WITA)
            </SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Australia & Pacific</SelectLabel>
            <SelectItem value='awst'>
              Australian Western Standard Time (AWST)
            </SelectItem>
            <SelectItem value='acst'>
              Australian Central Standard Time (ACST)
            </SelectItem>
            <SelectItem value='aest'>
              Australian Eastern Standard Time (AEST)
            </SelectItem>
            <SelectItem value='nzst'>
              New Zealand Standard Time (NZST)
            </SelectItem>
            <SelectItem value='fjt'>Fiji Time (FJT)</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>South America</SelectLabel>
            <SelectItem value='art'>Argentina Time (ART)</SelectItem>
            <SelectItem value='bot'>Bolivia Time (BOT)</SelectItem>
            <SelectItem value='brt'>Brasilia Time (BRT)</SelectItem>
            <SelectItem value='clt'>Chile Standard Time (CLT)</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>;
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const v=["Default","Scrollable"],p=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Scrollable:r,__namedExportsOrder:v,default:I},Symbol.toStringTag,{value:"Module"}));export{p as C,n as D,r as S};
