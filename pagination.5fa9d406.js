function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var l=r("iJYdK");class s{fetchPosts(){return fetch(`${s.BASE_URL}/posts?_limit=20&_page=${this.page}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}constructor(){this.page=1}}e(l)(s,"BASE_URL","https://jsonplaceholder.typicode.com");var a=e(r("amrNH")).template({1:function(e,t,n,o,r){var l=e.lambda,s=e.escapeExpression,a=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="posts__item">\n    <h2 class="posts__title">'+s(l(null!=t?a(t,"title"):t,t))+'</h2>\n    <p class="posts__text">'+s(l(null!=t?a(t,"body"):t,t))+'</p>\n    <p class="posts__id">id: '+s(l(null!=t?a(t,"id"):t,t))+"</p>\n</li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,o,r){var l;return null!=(l=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:1,column:0},end:{line:7,column:9}}}))?l:""},useData:!0});const c=document.querySelector(".js-posts"),i=document.querySelector(".js-load-more"),p=new s;p.fetchPosts().then((e=>{c.innerHTML=a(e)})).catch((e=>{console.log(e)}));i.addEventListener("click",(e=>{p.page+=1,p.fetchPosts().then((e=>{0!==e.length?c.insertAdjacentHTML("beforeend",a(e)):i.style.display="none"})).catch((e=>{console.log(e)}))}));
//# sourceMappingURL=pagination.5fa9d406.js.map
