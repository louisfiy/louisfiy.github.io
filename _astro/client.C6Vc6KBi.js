import{c as m,d as y}from"./runtime-dom.esm-bundler.B277ASSZ.js";import{m as S,D as r,S as A}from"./runtime-core.esm-bundler.DnbW5WxB.js";const g=()=>{},h=S({props:{value:String,name:String,hydrate:{type:Boolean,default:!0}},setup({name:n,value:t,hydrate:a}){if(!t)return()=>null;let c=a?"astro-slot":"astro-static-slot";return()=>r(c,{name:n,innerHTML:t})}});let i=new WeakMap;const k=n=>async(t,a,c,{client:l})=>{if(!n.hasAttribute("ssr"))return;const f=t.name?`${t.name} Host`:void 0,u={};for(const[s,o]of Object.entries(c))u[s]=()=>r(h,{value:o,name:s==="default"?void 0:s});const p=l!=="only",d=p?m:y;let e=i.get(n);if(e)e.props=a,e.slots=u,e.component.$forceUpdate();else{e={props:a,slots:u};const s=d({name:f,render(){let o=r(t,e.props,e.slots);return e.component=this,H(t.setup)&&(o=r(A,null,o)),o}});await g(),s.mount(n,p),i.set(n,e)}n.addEventListener("astro:unmount",()=>app.unmount(),{once:!0})};function H(n){const t=n?.constructor;return t&&t.name==="AsyncFunction"}export{k as default};
