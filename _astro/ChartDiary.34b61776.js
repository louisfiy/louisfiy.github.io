import{i,e as o}from"./index.09181c8b.js";import{_ as n}from"./_plugin-vue_export-helper.c27b6911.js";import{o as a,a as c,c as p}from"./runtime-core.esm-bundler.61e7a02c.js";const _={__name:"ChartDiary",setup(s,{expose:r}){r(),a(()=>{let t=i(document.getElementById("chart_diary"));t.setOption({tooltip:{trigger:"axis"},legend:{},xAxis:{type:"category",data:["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"]},yAxis:[{type:"value",min:0,max:15e4},{type:"value",min:0,max:150,position:"right"}],series:[{name:"字数",type:"line",data:[3649,134914,17043,34964,31137,10814,15255,17576,14495,17386,2259,16561],smooth:!0},{name:"篇数",type:"line",data:[7,145,36,38,34,23,15,18,20,3,2,11],smooth:!0,yAxisIndex:1}]}),window.addEventListener("resize",()=>{t.resize()})});const e={get echarts(){return o},onMounted:a};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}},d={id:"chart_diary",class:"w-full h-96"};function m(s,r,e,t,u,l){return c(),p("div",d)}const f=n(_,[["render",m]]);export{f as default};
