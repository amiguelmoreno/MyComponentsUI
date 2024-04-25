import{j as e}from"./jsx-runtime-gfuiFmrk.js";import{T as d,a as c,b as m,c as o,d as l,e as T,f as a,g as b}from"./index-MpzfKCJ6.js";const p={title:"Components/Table",component:d,parameters:{layout:"centered"}},u=[{invoice:"INV001",paymentStatus:"Paid",totalAmount:"$250.00",paymentMethod:"Credit Card"},{invoice:"INV002",paymentStatus:"Pending",totalAmount:"$150.00",paymentMethod:"PayPal"},{invoice:"INV003",paymentStatus:"Unpaid",totalAmount:"$350.00",paymentMethod:"Bank Transfer"},{invoice:"INV004",paymentStatus:"Paid",totalAmount:"$450.00",paymentMethod:"Credit Card"},{invoice:"INV005",paymentStatus:"Paid",totalAmount:"$550.00",paymentMethod:"PayPal"},{invoice:"INV006",paymentStatus:"Pending",totalAmount:"$200.00",paymentMethod:"Bank Transfer"},{invoice:"INV007",paymentStatus:"Unpaid",totalAmount:"$300.00",paymentMethod:"Credit Card"}],n={render:()=>e.jsxs(d,{children:[e.jsx(c,{children:"A list of your recent invoices."}),e.jsx(m,{children:e.jsxs(o,{children:[e.jsx(l,{className:"w-[100px]",children:"Invoice"}),e.jsx(l,{children:"Status"}),e.jsx(l,{children:"Method"}),e.jsx(l,{className:"text-right",children:"Amount"})]})}),e.jsx(T,{children:u.map(t=>e.jsxs(o,{children:[e.jsx(a,{className:"font-medium",children:t.invoice}),e.jsx(a,{children:t.paymentStatus}),e.jsx(a,{children:t.paymentMethod}),e.jsx(a,{className:"text-right",children:t.totalAmount})]},t.invoice))}),e.jsx(b,{children:e.jsxs(o,{children:[e.jsx(a,{colSpan:3,children:"Total"}),e.jsx(a,{className:"text-right",children:"$2,500.00"})]})})]})};var s,i,r;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    return <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className='text-right'>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map(invoice => <TableRow key={invoice.invoice}>
              <TableCell className='font-medium'>{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className='text-right'>
                {invoice.totalAmount}
              </TableCell>
            </TableRow>)}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className='text-right'>$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>;
  }
}`,...(r=(i=n.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const h=["Default"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:h,default:p},Symbol.toStringTag,{value:"Module"}));export{C,n as D};
