import{i as n,e as s}from"./index.09181c8b.js";import{_ as c}from"./_plugin-vue_export-helper.c27b6911.js";import{o as a,a as i,c as m}from"./runtime-core.esm-bundler.61e7a02c.js";const l={__name:"ChartIncome",setup(o,{expose:r}){r(),a(()=>{let t=n(document.getElementById("chart_income"));t.setOption({tooltip:{formatter:"{b} {d}%"},legend:{orient:"vertical",left:"left"},series:[{name:"类别",type:"pie",radius:"70%",data:[{value:95.24,name:"工资"},{value:4.62,name:"补贴"},{value:.03,name:"零散"},{value:.11,name:"电子"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}),window.addEventListener("resize",()=>{t.resize()})});const e={get echarts(){return s},onMounted:a};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}},_={id:"chart_income",class:"w-full h-96"};function d(o,r,e,t,p,u){return i(),m("div",_)}const w=c(l,[["render",d]]);export{w as default};
