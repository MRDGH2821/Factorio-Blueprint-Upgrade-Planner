import{U as v,P as L,_ as j,B as x,l as A}from"./q-e6c54110.js";import{g as R}from"./q-80e769b9.js";import"./q-682571dd.js";const T=i=>{const u=i.BPstore,l=i.CFGstore;return v(x,{children:[v("button",{"preventdefault:input":!0,"preventdefault:click":!0,onClick$:L(()=>j(()=>Promise.resolve().then(()=>U),void 0),"s_GXu3VmD9z0c",[u,l]),children:"Download!"}),v("p",{children:v("i",{children:"If there are any errors, it will be in the downloaded file. And ultimately the game will show errors if any."})})]})};var d=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g={exports:{}};(function(i,u){(function(l,s){s()})(d,function(){function l(e,t){return typeof t>"u"?t={autoBom:!1}:typeof t!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e}function s(e,t,a){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){p(o.response,t,a)},o.onerror=function(){console.error("could not download file")},o.send()}function y(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch{}return 200<=t.status&&299>=t.status}function f(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var r=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof d=="object"&&d.global===d?d:void 0,h=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),p=r.saveAs||(typeof window!="object"||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!h?function(e,t,a){var o=r.URL||r.webkitURL,n=document.createElement("a");t=t||e.name||"download",n.download=t,n.rel="noopener",typeof e=="string"?(n.href=e,n.origin===location.origin?f(n):y(n.href)?s(e,t,a):f(n,n.target="_blank")):(n.href=o.createObjectURL(e),setTimeout(function(){o.revokeObjectURL(n.href)},4e4),setTimeout(function(){f(n)},0))}:"msSaveOrOpenBlob"in navigator?function(e,t,a){if(t=t||e.name||"download",typeof e!="string")navigator.msSaveOrOpenBlob(l(e,a),t);else if(y(e))s(e,t,a);else{var o=document.createElement("a");o.href=e,o.target="_blank",setTimeout(function(){f(o)})}}:function(e,t,a,o){if(o=o||open("","_blank"),o&&(o.document.title=o.document.body.innerText="downloading..."),typeof e=="string")return s(e,t,a);var n=e.type==="application/octet-stream",E=/constructor/i.test(r.HTMLElement)||r.safari,b=/CriOS\/[\d]+/.test(navigator.userAgent);if((b||n&&E||h)&&typeof FileReader<"u"){var w=new FileReader;w.onloadend=function(){var c=w.result;c=b?c:c.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=c:location=c,o=null},w.readAsDataURL(e)}else{var _=r.URL||r.webkitURL,m=_.createObjectURL(e);o?o.location=m:location.href=m,o=null,setTimeout(function(){_.revokeObjectURL(m)},4e4)}});r.saveAs=p.saveAs=p,i.exports=p})})(g);const O=g.exports,S=()=>{const[i,u]=A(),l=R(u,i);O.saveAs(l,`Converted blueprint ${new Date().toUTCString()}.txt`)},U=Object.freeze(Object.defineProperty({__proto__:null,s_BLDYoo3tLKQ:T,s_GXu3VmD9z0c:S},Symbol.toStringTag,{value:"Module"}));export{T as s_BLDYoo3tLKQ,S as s_GXu3VmD9z0c};