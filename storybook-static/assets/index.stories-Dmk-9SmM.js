import{j as e}from"./jsx-runtime-gfuiFmrk.js";import{C as c,a as i,b as d,c as m,d as p,e as x}from"./index-DGzCeWxj.js";import{L as a}from"./index-60VDg0sI.js";import{I as u}from"./index-DuSNxgMV.js";import{S as j,a as f,b as C,c as h,d as r}from"./index-CtR02GWN.js";import{B as n}from"./index-D5_E73Qc.js";const S={title:"Components/Card",component:c,parameters:{layout:"centered"}},t={render:()=>e.jsxs(c,{className:"w-[350px]",children:[e.jsxs(i,{children:[e.jsx(d,{children:"Create project"}),e.jsx(m,{children:"Deploy your new project in one-click."})]}),e.jsx(p,{children:e.jsx("form",{children:e.jsxs("div",{className:"grid w-full items-center gap-4",children:[e.jsxs("div",{className:"flex flex-col space-y-1.5",children:[e.jsx(a,{htmlFor:"name",children:"Name"}),e.jsx(u,{id:"name",placeholder:"Name of your project"})]}),e.jsxs("div",{className:"flex flex-col space-y-1.5",children:[e.jsx(a,{htmlFor:"framework",children:"Framework"}),e.jsxs(j,{children:[e.jsx(f,{id:"framework",children:e.jsx(C,{placeholder:"Select"})}),e.jsxs(h,{position:"popper",children:[e.jsx(r,{value:"next",children:"Next.js"}),e.jsx(r,{value:"sveltekit",children:"SvelteKit"}),e.jsx(r,{value:"astro",children:"Astro"}),e.jsx(r,{value:"nuxt",children:"Nuxt.js"})]})]})]})]})})}),e.jsxs(x,{className:"flex justify-between",children:[e.jsx(n,{variant:"outline",children:"Cancel"}),e.jsx(n,{children:"Deploy"})]})]})};var l,o,s;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <Card className='w-[350px]'>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className='grid w-full items-center gap-4'>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='name'>Name</Label>
                <Input id='name' placeholder='Name of your project' />
              </div>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='framework'>Framework</Label>
                <Select>
                  <SelectTrigger id='framework'>
                    <SelectValue placeholder='Select' />
                  </SelectTrigger>
                  <SelectContent position='popper'>
                    <SelectItem value='next'>Next.js</SelectItem>
                    <SelectItem value='sveltekit'>SvelteKit</SelectItem>
                    <SelectItem value='astro'>Astro</SelectItem>
                    <SelectItem value='nuxt'>Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className='flex justify-between'>
          <Button variant='outline'>Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>;
  }
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const v=["Default"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:v,default:S},Symbol.toStringTag,{value:"Module"}));export{k as C,t as D};
