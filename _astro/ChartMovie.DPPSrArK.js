import{i as s,e as o}from"./index.CB2GCiyw.js";import{_ as i}from"./_plugin-vue_export-helper.DlAUqK2U.js";import{d as n,c,o as p}from"./runtime-core.esm-bundler.DnbW5WxB.js";const _={__name:"ChartMovie",setup(r,{expose:a}){a(),n(()=>{let t=s(document.getElementById("chart_movie"));t.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{},xAxis:{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]},yAxis:{type:"value"},series:[{name:"电影",data:[5,5,1,5,4,14,21,12,14,29,9,14],type:"bar",stack:"观影量"},{name:"剧集",data:[7,5,6,12,8,7,2,0,1,2,4,1],type:"bar",stack:"观影量"},{name:"短片",data:[6,16,4,10,12,0,0,0,1,9,4,0],type:"bar",stack:"观影量"}]}),window.addEventListener("resize",()=>{t.resize()})});const e={get echarts(){return o}};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}},d={id:"chart_movie",class:"w-full h-96"};function m(r,a,e,t,u,l){return p(),c("div",d)}const v=i(_,[["render",m]]);export{v as default};
