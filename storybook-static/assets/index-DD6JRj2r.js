import{r as s}from"./index-B3ehnkiM.js";import{$ as u}from"./index-BkVs4Xdz.js";function b({prop:e,defaultProp:a,onChange:c=()=>{}}){const[t,n]=i({defaultProp:a,onChange:c}),o=e!==void 0,d=o?e:t,f=u(c),$=s.useCallback(r=>{if(o){const l=typeof r=="function"?r(e):r;l!==e&&f(l)}else n(r)},[o,e,n,f]);return[d,$]}function i({defaultProp:e,onChange:a}){const c=s.useState(e),[t]=c,n=s.useRef(t),o=u(a);return s.useEffect(()=>{n.current!==t&&(o(t),n.current=t)},[t,n,o]),c}export{b as $};
