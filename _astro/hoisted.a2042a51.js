import{c as N,d as g}from"./zh-cn.2be70032.js";import"./BaseLayout.astro_astro_type_script_index_0_lang.adbd434a.js";var T={},$={get exports(){return T},set exports(t){T=t}};$.exports=function(t,r,e){t=t||{};var n=r.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(t,r,e,o){return n.fromToBase(t,r,e,o)}e.en.relativeTime=o,n.fromToBase=function(r,n,a,d,s){for(var i,u,f,l=a.$locale().relativeTime||o,m=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],h=m.length,c=0;c<h;c+=1){var y=m[c];y.d&&(i=d?e(r).diff(a,y.d,!0):a.diff(r,y.d,!0));var p=(t.rounding||Math.round)(Math.abs(i));if(f=i>0,p<=y.r||!y.r){p<=1&&c>0&&(y=m[c-1]);var g=l[y.l];s&&(p=s(""+p)),u="string"==typeof g?g.replace("%d",p):g(p,n,y.l,f);break}}if(n)return u;var v=f?l.future:l.past;return"function"==typeof v?v(u):v.replace("%s",u)},n.to=function(t,r){return a(t,r,this,!0)},n.from=function(t,r){return a(t,r,this)};var d=function(t){return t.$u?e.utc():e()};n.toNow=function(t){return this.to(d(this),t)},n.fromNow=function(t){return this.from(d(this),t)}};const j=T;g.locale("zh-cn"),g.extend(j);let H=document.getElementById("site_updated").innerHTML;const E=()=>{document.getElementById("site_updated").innerHTML=g(H).fromNow()};E(),setInterval(E,6e4);