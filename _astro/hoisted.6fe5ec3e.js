import"./BaseLayout.astro_astro_type_script_index_0_lang.adbd434a.js";const y={"Content-Type":"application/json"},u=({serverURL:t,lang:e,paths:a,signal:i})=>(({serverURL:n,lang:s,paths:l,type:c,signal:h})=>fetch(`${n}/article?path=${encodeURIComponent(l.join(","))}&type=${encodeURIComponent(c.join(","))}&lang=${s}`,{signal:h}).then(o=>o.json()))({serverURL:t,lang:e,paths:a,type:["time"],signal:i}).then(n=>Array.isArray(n)?n:[n]),w=t=>(({serverURL:e,lang:a,path:i,type:n,action:s})=>fetch(`${e}/article?lang=${a}`,{method:"POST",headers:y,body:JSON.stringify({path:i,type:n,action:s})}).then(l=>l.json()))({...t,type:"time",action:"inc"}),g=t=>{const e=((a="")=>a.replace(/\/$/u,""))(t);return/^(https?:)?\/\//.test(e)?e:`https://${e}`},f=t=>{t.name!=="AbortError"&&console.error(t.message)},d=t=>t.dataset.path||t.getAttribute("id"),m=(t,e)=>{e.forEach((a,i)=>{a.innerText=t[i].toString()})},v=({serverURL:t,path:e=window.location.pathname,selector:a=".waline-pageview-count",update:i=!0,lang:n=navigator.language})=>{const s=new AbortController,l=Array.from(document.querySelectorAll(a)),c=o=>{const r=d(o);return r!==null&&e!==r},h=o=>u({serverURL:g(t),paths:o.map(r=>d(r)||e),lang:n,signal:s.signal}).then(r=>m(r,o)).catch(f);if(i){const o=l.filter(p=>!c(p)),r=l.filter(c);w({serverURL:g(t),path:e,lang:n}).then(p=>m(new Array(o.length).fill(p),o)),r.length&&h(r)}else h(l);return s.abort.bind(s)};/^(localhost|127.0.0.1|192.168.)/.test(window.location.hostname)||v({serverURL:"https://www.louisfiy.top",path:window.location.pathname,update:/^(louisfiy.com)/.test(window.location.hostname)});document.getElementById("close").addEventListener("click",()=>{document.getElementById("notice").setAttribute("class","hidden")});
