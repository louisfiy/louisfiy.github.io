import{i as s,e as i}from"./index.BHYfdMNC.js";import{_ as o}from"./_plugin-vue_export-helper.DlAUqK2U.js";import{c as n,d as c,o as p}from"./runtime-core.esm-bundler.Dt3y3fWI.js";const d={__name:"ChartDiary",setup(a,{expose:r}){r(),c(()=>{let t=s(document.getElementById("chart_diary"));t.setOption({tooltip:{trigger:"axis"},legend:{},xAxis:{type:"category",data:["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"]},yAxis:[{type:"value",min:0,max:15e4},{type:"value",min:0,max:150,position:"right"}],series:[{name:"字数",type:"line",data:[3649,134914,17043,34964,31137,10814,15255,17576,14495,17386,2259,16561],smooth:!0},{name:"篇数",type:"line",data:[7,145,36,38,34,23,15,18,20,3,2,11],smooth:!0,yAxisIndex:1}]}),window.addEventListener("resize",()=>{t.resize()})});const e={get echarts(){return i}};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}},_={id:"chart_diary",class:"w-full h-96"};function m(a,r,e,t,u,l){return p(),n("div",_)}const f=o(d,[["render",m]]);export{f as default};
