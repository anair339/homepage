var _JUPYTERLAB;(()=>{"use strict";var e,r,t,n,o,a,i,u,l,f,c,s,d,p,h,v,b,g,m,y,w={274:(e,r,t)=>{var n={"./index":()=>t.e(80).then((()=>()=>t(80))),"./extension":()=>t.e(80).then((()=>()=>t(80))),"./style":()=>t.e(728).then((()=>()=>t(728)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>a})}},j={};function S(e){var r=j[e];if(void 0!==r)return r.exports;var t=j[e]={id:e,exports:{}};return w[e](t,t.exports,S),t.exports}S.m=w,S.c=j,S.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return S.d(r,{a:r}),r},S.d=(e,r)=>{for(var t in r)S.o(r,t)&&!S.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},S.f={},S.e=e=>Promise.all(Object.keys(S.f).reduce(((r,t)=>(S.f[t](e,r),r)),[])),S.u=e=>e+"."+{17:"0bb6d433dfdc6ffcead2",80:"c4d6eb831ddb77a81183",728:"3fff2795471f5386e508",873:"c2b3a902c08ca7f36186",910:"ac15ad91a96883a9cfa0",950:"85a2d66bd3a7ac193e6c"}[e]+".js?v="+{17:"0bb6d433dfdc6ffcead2",80:"c4d6eb831ddb77a81183",728:"3fff2795471f5386e508",873:"c2b3a902c08ca7f36186",910:"ac15ad91a96883a9cfa0",950:"85a2d66bd3a7ac193e6c"}[e],S.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),S.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@jupyterlite/xeus:",S.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var i,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var c=l[f];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==r+o){i=c;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,S.nc&&i.setAttribute("nonce",S.nc),i.setAttribute("data-webpack",r+o),i.src=t),e[t]=[n];var s=(r,n)=>{i.onerror=i.onload=null,clearTimeout(d);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},d=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),u&&document.head.appendChild(i)}},S.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{S.S={};var e={},r={};S.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];S.o(S.S,t)||(S.S[t]={});var a=S.S[t],i="@jupyterlite/xeus",u=(e,r,t,n)=>{var o=a[e]=a[e]||{},u=o[r];(!u||!u.loaded&&(!n!=!u.eager?n:i>u.from))&&(o[r]={get:t,from:i,eager:!!n})},l=[];return"default"===t&&(u("@jupyterlite/xeus","2.1.2",(()=>S.e(80).then((()=>()=>S(80))))),u("coincident","1.2.3",(()=>S.e(910).then((()=>()=>S(910))))),u("comlink","4.4.1",(()=>S.e(17).then((()=>()=>S(17)))))),e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),(()=>{var e;S.g.importScripts&&(e=S.g.location+"");var r=S.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),S.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var i=r[n],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(u=e[a]))[0]?"-":(n>0?".":"")+(n=2,u);return t}var i=[];for(a=1;a<e.length;a++){var u=e[a];i.push(0===u?"not("+l()+")":1===u?"("+l()+" || "+l()+")":2===u?i.pop()+" "+i.pop():o(u))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var i=0,u=1,l=!0;;u++,i++){var f,c,s=u<e.length?(typeof e[u])[0]:"";if(i>=r.length||"o"==(c=(typeof(f=r[i]))[0]))return!l||("u"==s?u>n&&!o:""==s!=o);if("u"==c){if(!l||"u"!=s)return!1}else if(l)if(s==c)if(u<=n){if(f!=e[u])return!1}else{if(o?f>e[u]:f<e[u])return!1;f!=e[u]&&(l=!1)}else if("s"!=s&&"n"!=s){if(o||u<=n)return!1;l=!1,u--}else{if(u<=n||c<s!=o)return!1;l=!1}else"s"!=s&&"n"!=s&&(l=!1,u--)}}var d=[],p=d.pop.bind(d);for(i=1;i<e.length;i++){var h=e[i];d.push(1==h?p()|p():2==h?p()&p():h?a(h,r):!p())}return!!p()},i=(e,r)=>{var t=S.S[e];if(!t||!S.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},u=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},l=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",f=(e,r,t,n)=>{var o=u(e,t);return a(n,o)||s(l(e,t,o,n)),d(e[t][o])},c=(e,r,t)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>!a(t,r)||e&&!n(e,r)?e:r),0))&&o[r]},s=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},d=e=>(e.loaded=1,e.get()),h=(p=e=>function(r,t,n,o){var a=S.I(r);return a&&a.then?a.then(e.bind(e,r,S.S[r],t,n,o)):e(r,S.S[r],t,n,o)})(((e,r,t,n)=>(i(e,t),f(r,0,t,n)))),v=p(((e,r,t,n,o)=>{var a=r&&S.o(r,t)&&c(r,t,n);return a?d(a):o()})),b={},g={115:()=>v("default","coincident",[1,1,2,3],(()=>S.e(910).then((()=>()=>S(910))))),232:()=>h("default","@jupyterlite/contents",[,[2,0,4,0],[2,0,3,0],[2,0,2,0],1,1]),257:()=>h("default","@jupyterlite/kernel",[,[2,0,4,0],[2,0,3,0],[2,0,2,0],1,1]),262:()=>h("default","@lumino/coreutils",[1,2,0,0]),473:()=>h("default","@jupyterlab/coreutils",[1,6,2,5]),602:()=>h("default","@lumino/signaling",[1,2,0,0]),671:()=>h("default","@jupyterlite/server",[,[2,0,4,0],[2,0,3,0],[2,0,2,0],1,1]),721:()=>v("default","comlink",[1,4,4,1],(()=>S.e(17).then((()=>()=>S(17)))))},m={80:[115,232,257,262,473,602,671,721]},y={},S.f.consumes=(e,r)=>{S.o(m,e)&&m[e].forEach((e=>{if(S.o(b,e))return r.push(b[e]);if(!y[e]){var t=r=>{b[e]=0,S.m[e]=t=>{delete S.c[e],t.exports=r()}};y[e]=!0;var n=r=>{delete b[e],S.m[e]=t=>{throw delete S.c[e],r}};try{var o=g[e]();o.then?r.push(b[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}}))},(()=>{S.b=document.baseURI||self.location.href;var e={194:0};S.f.j=(r,t)=>{var n=S.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=S.p+S.u(r),i=new Error;S.l(a,(t=>{if(S.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,u]=t,l=0;if(a.some((r=>0!==e[r]))){for(n in i)S.o(i,n)&&(S.m[n]=i[n]);u&&u(S)}for(r&&r(t);l<a.length;l++)o=a[l],S.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunk_jupyterlite_xeus=self.webpackChunk_jupyterlite_xeus||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),S.nc=void 0;var x=S(274);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["@jupyterlite/xeus"]=x})();