import{g as s}from"./utils.qmN5-p6Z.js";import{s as a}from"./config.data.UNkqF-VM.js";import{_ as u}from"./_plugin-vue_export-helper.x3n3nnut.js";import{r as _,d as p,o as c,c as d,t as f}from"./runtime-core.esm-bundler.tE4fdYq7.js";const m={__name:"Duration",setup(t,{expose:e}){e();let r=_("");const n=()=>{r.value=s(a.initTime)};p((()=>{n(),setInterval(n,28e3)}));const o={get duration(){return r},set duration(t){r=t},update:n,get getDuration(){return s},get siteConfig(){return a}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}},l={class:"indent-1"};function g(t,e,r,n,s,a){return c(),d("p",l,"已运行 "+f(n.duration),1)}const $=u(m,[["render",g]]);export{$ as default};