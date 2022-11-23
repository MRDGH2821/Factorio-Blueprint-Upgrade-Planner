/* Qwik Service Worker */
const appBundles=[["q-0d23973f.js",[3,10,15,17],["eh8tATUGfys","qSCVVPfZjbg","Zroklmk0III"]],["q-1d4e3858.js",[]],["q-29a5079f.js",[12,17],["zrbrqoaqXSY"]],["q-349c34b8.js",[10,17],["xYL1qOwPyDI"]],["q-39b5cceb.js",[17]],["q-3ee2db7c.js",[17]],["q-58c470e8.js",[17]],["q-70e310a5.js",[12,17],["AKetNByE5TM"]],["q-7c9b3c02.js",[12,17],["8gdLBszqbaM","EpaZ5qQ4Lg4","kzjavhDI3L0","yiXwCC0m3jY"]],["q-7db51483.js",[17]],["q-a0951415.js",[17]],["q-a57f5680.js",[3,10,17],["BLDYoo3tLKQ","GXu3VmD9z0c"]],["q-b1cd14da.js",[17],["3sccYCDd1Z0","hO3b5j0m2ZI"]],["q-b6e7cbc1.js",[15,17],["4j013OymQac","DNdr2NgB2nw"]],["q-c5370fa1.js",[12,17],["WmYC5H00wtI"]],["q-cdf2610b.js",[]],["q-d6f50a90.js",[12,17],["2Eo7WCpaqI8","TxCFOy819ag"]],["q-e4ebf2ed.js",[]],["q-e50bf751.js",[17],["VkLNXphUh5s"]],["q-fed39973.js",[3,10,15,17],["GGZCwgCNk3s","IgDPwFZlX8E","vJMPhYxN1uA"]]];
const libraryBundleIds=[5];
const linkBundles=[[/^\/Factorio-Blueprint-Upgrade-Planner\/$/,[9,18,10,3]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
