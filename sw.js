if(!self.define){let e,s={};const r=(r,n)=>(r=new URL(r+".js",n).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let d={};const o=e=>r(e,a),c={module:{uri:a},exports:d,require:o};s[a]=Promise.all(n.map((e=>c[e]||o(e)))).then((e=>(i(...e),d)))}}define(["./workbox-b75581fc"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/images/reloj.png",revision:"497ff31eade805bcae69ea9fffda73dd"},{url:"index.html",revision:"500d39d129023109253dcf52e3986e57"},{url:"main.css",revision:"5673a281372d72c31d6d84ed65306136"},{url:"manifest.json",revision:"2a7f7654f2f3b6d91a9b5ae61b8ebdbe"},{url:"src/controllers/change-name.js",revision:"cf951df6adae30c6023e9f1a7e934b91"},{url:"src/controllers/name-controller.js",revision:"34abe544fa9d9a763581242127dd11c2"},{url:"src/data/days-weeks.js",revision:"8a07be1af30406530a59fa1ba28dbe59"},{url:"src/functions/getElements.js",revision:"29188d8398e5a8c4b1d42ad386450aba"},{url:"src/functions/update-document.js",revision:"3552dff8a893109abad2c7050b2ecf16"},{url:"src/handle-input.js",revision:"51eef7db7157edc09225e716b0fce326"},{url:"src/hanlde-reloj.js",revision:"3c02a95db50bcaeaa5720aaeabefdef3"},{url:"src/main.js",revision:"0d4e754564be65a9258fee7b1713cf5f"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map