import{c as Q,g as K}from"./_commonjsHelpers.Cpj98o6Y.js";var X={exports:{}};X.exports=function(){var t=1e3,e=6e4,n=36e5,s="millisecond",r="second",i="minute",u="hour",a="day",o="week",c="month",h="quarter",f="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},y=function(t,e,n){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(n)+t},M={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),s=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+y(s,2,"0")+":"+y(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var s=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(s,c),i=n-r<0,u=e.clone().add(s+(i?-1:1),c);return+(-(s+(n-r)/(i?r-u:u-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:f,w:o,d:a,D:d,h:u,m:i,s:r,ms:s,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p="en",g={};g[p]=v;var D="$isDayjsObject",Y=function(t){return t instanceof O||!(!t||!t[D])},_=function t(e,n,s){var r;if(!e)return p;if("string"==typeof e){var i=e.toLowerCase();g[i]&&(r=i),n&&(g[i]=n,r=i);var u=e.split("-");if(!r&&u.length>1)return t(u[0])}else{var a=e.name;g[a]=e,r=a}return!s&&r&&(p=r),r||!s&&p},S=function(t,e){if(Y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new O(n)},w=M;w.l=_,w.i=Y,w.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var O=function(){function v(t){this.$L=_(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[D]=!0}var y=v.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match($);if(s){var r=s[2]-1||0,i=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],r,s[3]||1,s[4]||0,s[5]||0,s[6]||0,i)):new Date(s[1],r,s[3]||1,s[4]||0,s[5]||0,s[6]||0,i)}}return new Date(e)}(t),this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return w},y.isValid=function(){return this.$d.toString()!==l},y.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return S(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<S(t)},y.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,s=!!w.u(e)||e,h=w.p(t),l=function(t,e){var r=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return s?r:r.endOf(a)},$=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(h){case f:return s?l(1,0):l(31,11);case c:return s?l(1,v):l(0,v+1);case o:var p=this.$locale().weekStart||0,g=(m<p?m+7:m)-p;return l(s?y-g:y+(6-g),v);case a:case d:return $(M+"Hours",0);case u:return $(M+"Minutes",1);case i:return $(M+"Seconds",2);case r:return $(M+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,o=w.p(t),h="set"+(this.$u?"UTC":""),l=(n={},n[a]=h+"Date",n[d]=h+"Date",n[c]=h+"Month",n[f]=h+"FullYear",n[u]=h+"Hours",n[i]=h+"Minutes",n[r]=h+"Seconds",n[s]=h+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===f){var m=this.clone().set(d,1);m.$d[l]($),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[w.p(t)]()},y.add=function(s,h){var d,l=this;s=Number(s);var $=w.p(h),m=function(t){var e=S(l);return w.w(e.date(e.date()+Math.round(t*s)),l)};if($===c)return this.set(c,this.$M+s);if($===f)return this.set(f,this.$y+s);if($===a)return m(1);if($===o)return m(7);var v=(d={},d[i]=e,d[u]=n,d[r]=t,d)[$]||1,y=this.$d.getTime()+s*v;return w.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var s=t||"YYYY-MM-DDTHH:mm:ssZ",r=w.z(this),i=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,h=n.meridiem,f=function(t,n,r,i){return t&&(t[n]||t(e,s))||r[n].slice(0,i)},d=function(t){return w.s(i%12||12,t,"0")},$=h||function(t,e,n){var s=t<12?"AM":"PM";return n?s.toLowerCase():s};return s.replace(m,(function(t,s){return s||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return w.s(e.$y,4,"0");case"M":return a+1;case"MM":return w.s(a+1,2,"0");case"MMM":return f(n.monthsShort,a,c,3);case"MMMM":return f(c,a);case"D":return e.$D;case"DD":return w.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return f(n.weekdaysMin,e.$W,o,2);case"ddd":return f(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(i);case"HH":return w.s(i,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(i,u,!0);case"A":return $(i,u,!1);case"m":return String(u);case"mm":return w.s(u,2,"0");case"s":return String(e.$s);case"ss":return w.s(e.$s,2,"0");case"SSS":return w.s(e.$ms,3,"0");case"Z":return r}return null}(t)||r.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(s,d,l){var $,m=this,v=w.p(d),y=S(s),M=(y.utcOffset()-this.utcOffset())*e,p=this-y,g=function(){return w.m(m,y)};switch(v){case f:$=g()/12;break;case c:$=g();break;case h:$=g()/3;break;case o:$=(p-M)/6048e5;break;case a:$=(p-M)/864e5;break;case u:$=p/n;break;case i:$=p/e;break;case r:$=p/t;break;default:$=p}return l?$:w.a($)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return g[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),s=_(t,e,!0);return s&&(n.$L=s),n},y.clone=function(){return w.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},v}(),H=O.prototype;return S.prototype=H,[["$ms",s],["$s",r],["$m",i],["$H",u],["$W",a],["$M",c],["$y",f],["$D",d]].forEach((function(t){H[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,O,S),t.$i=!0),S},S.locale=_,S.isDayjs=Y,S.unix=function(t){return S(1e3*t)},S.en=g[p],S.Ls=g,S.p={},S}();var tt=X.exports;const P=K(tt);var nt={exports:{}};nt.exports=function(t){function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(t),s={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t,e){return"W"===e?t+"周":t+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(t,e){var n=100*t+e;return n<600?"凌晨":n<900?"早上":n<1100?"上午":n<1300?"中午":n<1800?"下午":"晚上"}};return n.default.locale(s,null,!0),s}(tt);var it=nt.exports;const ut=K(it);var et={exports:{}};!function(t,e){var n,s,r;et.exports=(n="minute",s=/[+-]\d\d(?::?\d\d)?/g,r=/([+-]|\d\d)/g,function(t,e,i){var u=e.prototype;i.utc=function(t){return new e({date:t,utc:!0,args:arguments})},u.utc=function(t){var e=i(this.toDate(),{locale:this.$L,utc:!0});return t?e.add(this.utcOffset(),n):e},u.local=function(){return i(this.toDate(),{locale:this.$L,utc:!1})};var a=u.parse;u.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),a.call(this,t)};var o=u.init;u.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else o.call(this)};var c=u.utcOffset;u.utcOffset=function(t,e){var i=this.$utils().u;if(i(t))return this.$u?0:i(this.$offset)?c.call(this):this.$offset;if("string"==typeof t&&null===(t=function(t){void 0===t&&(t="");var e=t.match(s);if(!e)return null;var n=(""+e[0]).match(r)||["-",0,0],i=n[0],u=60*+n[1]+ +n[2];return 0===u?0:"+"===i?u:-u}(t)))return this;var u=Math.abs(t)<=16?60*t:t,a=this;if(e)return a.$offset=u,a.$u=0===t,a;if(0!==t){var o=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(a=this.local().add(u+o,n)).$offset=u,a.$x.$localOffset=o}else a=this.utc();return a};var h=u.format;u.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return h.call(this,e)},u.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},u.isUTC=function(){return!!this.$u},u.toISOString=function(){return this.toDate().toISOString()},u.toString=function(){return this.toDate().toUTCString()};var f=u.toDate;u.toDate=function(t){return"s"===t&&this.$offset?i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():f.call(this)};var d=u.diff;u.diff=function(t,e,n){if(t&&this.$u===t.$u)return d.call(this,t,e,n);var s=this.local(),r=i(t).local();return d.call(s,r,e,n)}})}();var ot=et.exports;const at=K(ot);var rt={exports:({},function(t,e,n){t=t||{};var s=e.prototype,r={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(t,e,n,r){return s.fromToBase(t,e,n,r)}n.en.relativeTime=r,s.fromToBase=function(e,s,i,u,a){for(var o,c,h,f=i.$locale().relativeTime||r,d=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],l=d.length,$=0;$<l;$+=1){var m=d[$];m.d&&(o=u?n(e).diff(i,m.d,!0):i.diff(e,m.d,!0));var v=(t.rounding||Math.round)(Math.abs(o));if(h=o>0,v<=m.r||!m.r){v<=1&&$>0&&(m=d[$-1]);var y=f[m.l];a&&(v=a(""+v)),c="string"==typeof y?y.replace("%d",v):y(v,s,m.l,h);break}}if(s)return c;var M=h?f.future:f.past;return"function"==typeof M?M(c):M.replace("%s",c)},s.to=function(t,e){return i(t,e,this,!0)},s.from=function(t,e){return i(t,e,this)};var u=function(t){return t.$u?n.utc():n()};s.toNow=function(t){return this.to(u(this),t)},s.fromNow=function(t){return this.from(u(this),t)}})},ct=rt.exports;const ht=K(ct);var st={exports:{}};!function(t,e){var n,s,r,i,u,a,o,c,h,f,d,l,$,m,v,y,M,p,g,D;st.exports=(o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,d={years:c=31536e6,months:h=2628e6,days:a=864e5,hours:u=36e5,minutes:i=6e4,seconds:r=1e3,milliseconds:1,weeks:6048e5},l=function(t){return t instanceof g},$=function(t,e,n){return new g(t,n,e.$l)},m=function(t){return s.p(t)+"s"},v=function(t){return t<0},y=function(t){return v(t)?Math.ceil(t):Math.floor(t)},M=function(t){return Math.abs(t)},p=function(t,e){return t?v(t)?{negative:!0,format:""+M(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},g=function(){function t(t,e,n){var s=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return $(t*d[m(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){s.$d[m(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var r=t.match(f);if(r){var i=r.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=i[0],this.$d.months=i[1],this.$d.weeks=i[2],this.$d.days=i[3],this.$d.hours=i[4],this.$d.minutes=i[5],this.$d.seconds=i[6],this.calMilliseconds(),this}}return this}var e=t.prototype;return e.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*d[n]}),0)},e.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=y(t/c),t%=c,this.$d.months=y(t/h),t%=h,this.$d.days=y(t/a),t%=a,this.$d.hours=y(t/u),t%=u,this.$d.minutes=y(t/i),t%=i,this.$d.seconds=y(t/r),t%=r,this.$d.milliseconds=t},e.toISOString=function(){var t=p(this.$d.years,"Y"),e=p(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var s=p(n,"D"),r=p(this.$d.hours,"H"),i=p(this.$d.minutes,"M"),u=this.$d.seconds||0;this.$d.milliseconds&&(u+=this.$d.milliseconds/1e3,u=Math.round(1e3*u)/1e3);var a=p(u,"S"),o=t.negative||e.negative||s.negative||r.negative||i.negative||a.negative,c=r.format||i.format||a.format?"T":"",h=(o?"-":"")+"P"+t.format+e.format+s.format+c+r.format+i.format+a.format;return"P"===h||"-P"===h?"P0D":h},e.toJSON=function(){return this.toISOString()},e.format=function(t){var e=t||"YYYY-MM-DDTHH:mm:ss",n={Y:this.$d.years,YY:s.s(this.$d.years,2,"0"),YYYY:s.s(this.$d.years,4,"0"),M:this.$d.months,MM:s.s(this.$d.months,2,"0"),D:this.$d.days,DD:s.s(this.$d.days,2,"0"),H:this.$d.hours,HH:s.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:s.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:s.s(this.$d.seconds,2,"0"),SSS:s.s(this.$d.milliseconds,3,"0")};return e.replace(o,(function(t,e){return e||String(n[t])}))},e.as=function(t){return this.$ms/d[m(t)]},e.get=function(t){var e=this.$ms,n=m(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?y(e/d[n]):this.$d[n],e||0},e.add=function(t,e,n){var s;return s=e?t*d[m(e)]:l(t)?t.$ms:$(t,this).$ms,$(this.$ms+s*(n?-1:1),this)},e.subtract=function(t,e){return this.add(t,e,!0)},e.locale=function(t){var e=this.clone();return e.$l=t,e},e.clone=function(){return $(this.$ms,this)},e.humanize=function(t){return n().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},e.valueOf=function(){return this.asMilliseconds()},e.milliseconds=function(){return this.get("milliseconds")},e.asMilliseconds=function(){return this.as("milliseconds")},e.seconds=function(){return this.get("seconds")},e.asSeconds=function(){return this.as("seconds")},e.minutes=function(){return this.get("minutes")},e.asMinutes=function(){return this.as("minutes")},e.hours=function(){return this.get("hours")},e.asHours=function(){return this.as("hours")},e.days=function(){return this.get("days")},e.asDays=function(){return this.as("days")},e.weeks=function(){return this.get("weeks")},e.asWeeks=function(){return this.as("weeks")},e.months=function(){return this.get("months")},e.asMonths=function(){return this.as("months")},e.years=function(){return this.get("years")},e.asYears=function(){return this.as("years")},t}(),D=function(t,e,n){return t.add(e.years()*n,"y").add(e.months()*n,"M").add(e.days()*n,"d").add(e.hours()*n,"h").add(e.minutes()*n,"m").add(e.seconds()*n,"s").add(e.milliseconds()*n,"ms")},function(t,e,r){n=r,s=r().$utils(),r.duration=function(t,e){var n=r.locale();return $(t,{$l:n},e)},r.isDuration=l;var i=e.prototype.add,u=e.prototype.subtract;e.prototype.add=function(t,e){return l(t)?D(this,t,1):i.bind(this)(t,e)},e.prototype.subtract=function(t,e){return l(t)?D(this,t,-1):u.bind(this)(t,e)}})}();var ft=st.exports;const dt=K(ft);P.locale(ut),P.extend(at),P.extend(ht),P.extend(dt);const $t=t=>P(t).fromNow(),mt=(t,e="Y 年 M 月 D 天 H 时 m 分")=>{let n=P(t),s=P();return P.duration(s.diff(n)).format(e)};export{mt as g,$t as r};