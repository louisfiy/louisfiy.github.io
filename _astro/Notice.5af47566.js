import{_ as l}from"./_plugin-vue_export-helper.c27b6911.js";import{w as a,a as i,c as _,x as c,y as m,z as p,A as u}from"./runtime-core.esm-bundler.61e7a02c.js";const f="/_astro/close.21c65cc6.svg",x={__name:"Notice",props:{text:String,extClass:String},setup(e,{expose:s}){s();const t=e;let r=a(!0);const o={props:t,get show(){return r},set show(e){r=e},ref:a,get close(){return f}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}},d={class:"flex-1 mr-1 text-sm text-gray-600"},g=["src"];function w(e,s,t,r,o,a){return r.show?(i(),_("div",{key:0,class:p(["note warning flex items-center",t.extClass])},[c("span",d,m(t.text),1),c("img",{class:"cursor-pointer",src:r.close,alt:"Close",onClick:s[0]||(s[0]=e=>r.show=!1)},null,8,g)],2)):u("",!0)}const S=l(x,[["render",w]]);export{S as default};