window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;Fluid.utils={listenScroll:function(e){var t=new Debouncer(e);window.addEventListener("scroll",t,false);t.handleEvent();return t},unlistenScroll:function(e){window.removeEventListener("scroll",e)},scrollToElement:function(e,t){var n=jQuery(e).offset();if(n){jQuery("html,body").animate({scrollTop:n.top+(t||0),easing:"swing"})}},elementVisible:function(e,t){t=t&&t>=0?t:0;var n=e.getBoundingClientRect();var i=window.innerHeight||document.documentElement.clientHeight;var r=n.top;return r>=0&&r<=i*(t+1)||r<=0&&r>=-(i*t)-n.height},waitElementVisible:function(e,t,n){var i=typeof window!=="undefined";var r=i&&!("onscroll"in window)||typeof navigator!=="undefined"&&/(gle|ing|ro|msn)bot|crawl|spider|yand|duckgo/i.test(navigator.userAgent);if(!i||r){return}n=n&&n>=0?n:0;function o(e){if(Fluid.utils.elementVisible(e,n)){t();return}if("IntersectionObserver"in window){var i=new IntersectionObserver((function(e,n){if(e[0].isIntersecting){t();n.disconnect()}}),{threshold:[0],rootMargin:(window.innerHeight||document.documentElement.clientHeight)*n+"px"});i.observe(e)}else{var r=Fluid.utils.listenScroll((function(){if(Fluid.utils.elementVisible(e,n)){Fluid.utils.unlistenScroll(r);t()}}))}}if(typeof e==="string"){this.waitElementLoaded(e,(function(e){o(e)}))}else{o(e)}},waitElementLoaded:function(e,t){var n=typeof window!=="undefined";var i=n&&!("onscroll"in window)||typeof navigator!=="undefined"&&/(gle|ing|ro|msn)bot|crawl|spider|yand|duckgo/i.test(navigator.userAgent);if(!n||i){return}if("MutationObserver"in window){var r=new MutationObserver((function(n,i){var r=document.querySelector(e);if(r){t(r);i.disconnect()}}));r.observe(document,{childList:true,subtree:true})}else{document.addEventListener("DOMContentLoaded",(function(){var n=function(){var i=document.querySelector(e);if(i){t(i)}else{setTimeout(n,100)}};n()}))}},createScript:function(e,t,n){var i=document.createElement("script");i.setAttribute("src",e);i.setAttribute("type","text/javascript");i.setAttribute("charset","UTF-8");if(n)i.setAttribute("id",n);i.async=false;if(typeof t==="function"){if(window.attachEvent){i.onreadystatechange=function(){var e=i.readyState;if(e==="loaded"||e==="complete"){i.onreadystatechange=null;t()}}}else{i.onload=t}}var r=document.getElementsByTagName("script");var o=r.length>0?r[r.length-1]:document.head||document.documentElement;o.parentNode.insertBefore(i,o.nextSibling)},createCssLink:function(e){var t=document.createElement("link");t.setAttribute("rel","stylesheet");t.setAttribute("type","text/css");t.setAttribute("href",e);var n=document.getElementsByTagName("link")[0]||document.getElementsByTagName("head")[0]||document.head||document.documentElement;n.parentNode.insertBefore(t,n)},loadComments:function(e,t){var n=document.querySelector("#comments[lazyload]");if(n){var i=function(){t();n.removeAttribute("lazyload")};Fluid.utils.waitElementVisible(e,i,CONFIG.lazyload.offset_factor)}else{t()}},getBackgroundLightness(e){var t=e;if(typeof e==="string"){t=document.querySelector(e)}var n=t.ownerDocument.defaultView;if(!n){n=window}var i=n.getComputedStyle(t).backgroundColor.replace(/rgba*\(/,"").replace(")","").split(/,\s*/);if(i.length<3){return 0}var r=.213*i[0]+.715*i[1]+.072*i[2];return r===0||r>255/2?1:-1},retry(e,t,n){if(n<=0){return}var i=function(){if(--n>=0&&!e()){setTimeout(i,t)}};setTimeout(i,t)}};function Debouncer(e){this.callback=e;this.ticking=false}Debouncer.prototype={constructor:Debouncer,update:function(){this.callback&&this.callback();this.ticking=false},requestTick:function(){if(!this.ticking){requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this)));this.ticking=true}},handleEvent:function(){this.requestTick()}};