import{c}from"./index.c97107e6.js";import{s}from"./index.5e636078.js";import{F as i}from"./Favorite.218f086a.js";import"./dayjs.min.63f98895.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./runtime-core.esm-bundler.45595617.js";const r={};function a(n){return n.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,e)=>s({src:r[e].src,...r[e].attributes}))}const o=a(`<!--某篇文章的重定向页-->
<script type="text/javascript">
  location.href = '/doc/p20211231/'
<\/script>`),p={title:"#2021年终总结",date:"2022-01-01T00:00:00.000Z",categories:["随笔"],tags:["年终总结"],hide:!0},u="D:/Shin/astro-site/src/content/doc/2021-12-25.md",m=void 0;function F(){return`\r
<!--某篇文章的重定向页-->\r
<script type="text/javascript">\r
  location.href = '/doc/p20211231/'\r
<\/script>`}function _(){return o}function b(){return[]}async function f(){const{layout:n,...t}=p;return t.file=u,t.url=m,c(i,{"set:html":o})}f[Symbol.for("astro.needsHeadRendering")]=!0;export{f as Content,_ as compiledContent,f as default,u as file,p as frontmatter,b as getHeadings,r as images,F as rawContent,m as url};
