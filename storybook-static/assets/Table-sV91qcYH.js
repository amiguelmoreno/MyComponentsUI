import{j as e}from"./jsx-runtime-gfuiFmrk.js";import{useMDXComponents as o}from"./index-rbP-kYFP.js";import{M as l,C as i,d as s}from"./index-BtPohTcP.js";import{C as r,D as m}from"./index.stories-87mNXXls.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-JSgrbDMH.js";import"../sb-preview/runtime.js";import"./index-DeIys0fC.js";import"./index-BtW3vQL8.js";import"./index-Dkj0J1ds.js";import"./index-8sIbGq5v.js";import"./index-DrFu-skq.js";import"./index-MpzfKCJ6.js";import"./utils-DJk2kaG7.js";function a(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:r}),`
`,e.jsx(n.h1,{id:"table",children:"Table"}),`
`,e.jsxs(n.p,{children:["A responsive table component. Visit ",e.jsx(n.a,{href:"https://ui.shadcn.com/docs/components/table",rel:"nofollow",children:e.jsx(n.strong,{children:"Docs"})})," to know every detail."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(s,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Alert, AlertTitle, AlertDescription } from "mycomponentsui";
import { Terminal } from "lucide-react";
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Table>
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
    {invoices.map((invoice) => (
      <TableRow key={invoice.invoice}>
        <TableCell className='font-medium'>{invoice.invoice}</TableCell>
        <TableCell>{invoice.paymentStatus}</TableCell>
        <TableCell>{invoice.paymentMethod}</TableCell>
        <TableCell className='text-right'>{invoice.totalAmount}</TableCell>
      </TableRow>
    ))}
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={3}>Total</TableCell>
      <TableCell className='text-right'>$2,500.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>
`})})]})}function N(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{N as default};
