import{G as c,s as h}from"./index.6eed8bf6.js";const e=[];function d(o,f=c){let n;const i=new Set;function r(t){if(h(o,t)&&(o=t,n)){const b=!e.length;for(const s of i)s[1](),e.push(s,o);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function l(t){r(t(o))}function _(t,b=c){const s=[t,b];return i.add(s),i.size===1&&(n=f(r)||c),t(o),()=>{i.delete(s),i.size===0&&n&&(n(),n=null)}}return{set:r,update:l,subscribe:_}}var u;const p=((u=globalThis.__sveltekit_1av3oyb)==null?void 0:u.base)??"/neo-justine";var a;const q=((a=globalThis.__sveltekit_1av3oyb)==null?void 0:a.assets)??p;export{q as a,p as b,d as w};
