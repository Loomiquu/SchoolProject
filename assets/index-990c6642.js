(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const p={context:void 0,registry:void 0};function U(e){p.context=e}const mt=(e,n)=>e===n,Se=Symbol("solid-proxy"),de={equals:mt};let ne=null,He=Qe;const _=1,se=2,Ke={owned:null,cleanups:null,context:null,owner:null},me={};var y=null;let f=null,x=null,O=null,C=null,pe=0;function Ae(e,n){const t=x,r=y,s=e.length===0,o=n===void 0?r:n,i=s?Ke:{owned:null,cleanups:null,context:o?o.context:null,owner:o},l=s?e:()=>e(()=>L(()=>H(i)));y=i,x=null;try{return k(l,!0)}finally{x=t,y=r}}function T(e,n){n=n?Object.assign({},de,n):de;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},r=s=>(typeof s=="function"&&(f&&f.running&&f.sources.has(t)?s=s(t.tValue):s=s(t.value)),Je(t,s));return[Ge.bind(t),r]}function $e(e,n,t){const r=ce(e,n,!0,_);Q(r)}function M(e,n,t){const r=ce(e,n,!1,_);Q(r)}function wt(e,n,t){He=Ot;const r=ce(e,n,!1,_),s=W&&K(W);s&&(r.suspense=s),(!t||!t.render)&&(r.user=!0),C?C.push(r):Q(r)}function A(e,n,t){t=t?Object.assign({},de,t):de;const r=ce(e,n,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=t.equals||void 0,Q(r),Ge.bind(r)}function bt(e){return e&&typeof e=="object"&&"then"in e}function St(e,n,t){let r,s,o;arguments.length===2&&typeof n=="object"||arguments.length===1?(r=!0,s=e,o=n||{}):(r=e,s=n,o=t||{});let i=null,l=me,u=null,a=!1,c=!1,d="initialValue"in o,g=typeof r=="function"&&A(r);const w=new Set,[P,b]=(o.storage||T)(o.initialValue),[$,R]=T(void 0),[N,V]=T(void 0,{equals:!1}),[q,I]=T(d?"ready":"unresolved");if(p.context){u=`${p.context.id}${p.context.count++}`;let h;o.ssrLoadFrom==="initial"?l=o.initialValue:p.load&&(h=p.load(u))&&(l=h)}function B(h,m,v,j){return i===h&&(i=null,j!==void 0&&(d=!0),(h===l||m===l)&&o.onHydrated&&queueMicrotask(()=>o.onHydrated(j,{value:m})),l=me,f&&h&&a?(f.promises.delete(h),a=!1,k(()=>{f.running=!0,Y(m,v)},!1)):Y(m,v)),m}function Y(h,m){k(()=>{m===void 0&&b(()=>h),I(m!==void 0?"errored":d?"ready":"unresolved"),R(m);for(const v of w.keys())v.decrement();w.clear()},!1)}function Z(){const h=W&&K(W),m=P(),v=$();if(v!==void 0&&!i)throw v;return x&&!x.user&&h&&$e(()=>{N(),i&&(h.resolved&&f&&a?f.promises.add(i):w.has(h)||(h.increment(),w.add(h)))}),m}function E(h=!0){if(h!==!1&&c)return;c=!1;const m=g?g():r;if(a=f&&f.running,m==null||m===!1){B(i,L(P));return}f&&i&&f.promises.delete(i);const v=l!==me?l:L(()=>s(m,{value:P(),refetching:h}));return bt(v)?(i=v,"value"in v?(v.status==="success"?B(i,v.value,void 0,m):B(i,void 0,void 0,m),v):(c=!0,queueMicrotask(()=>c=!1),k(()=>{I(d?"refreshing":"pending"),V()},!1),v.then(j=>B(v,j,void 0,m),j=>B(v,void 0,et(j),m)))):(B(i,v,void 0,m),v)}return Object.defineProperties(Z,{state:{get:()=>q()},error:{get:()=>$()},loading:{get(){const h=q();return h==="pending"||h==="refreshing"}},latest:{get(){if(!d)return Z();const h=$();if(h&&!i)throw h;return P()}}}),g?$e(()=>E(!1)):E(!1),[Z,{refetch:E,mutate:b}]}function L(e){if(x===null)return e();const n=x;x=null;try{return e()}finally{x=n}}function We(e,n,t){const r=Array.isArray(e);let s,o=t&&t.defer;return i=>{let l;if(r){l=Array(e.length);for(let a=0;a<e.length;a++)l[a]=e[a]()}else l=e();if(o){o=!1;return}const u=L(()=>n(l,s,i));return s=l,u}}function le(e){return y===null||(y.cleanups===null?y.cleanups=[e]:y.cleanups.push(e)),e}function xt(e,n){ne||(ne=Symbol("error")),y=ce(void 0,void 0,!0),y.context={...y.context,[ne]:[n]},f&&f.running&&f.sources.add(y);try{return e()}catch(t){ue(t)}finally{y=y.owner}}function Xe(){return y}function Pt(e,n){const t=y,r=x;y=e,x=null;try{return k(n,!0)}catch(s){ue(s)}finally{y=t,x=r}}function Et(e){if(f&&f.running)return e(),f.done;const n=x,t=y;return Promise.resolve().then(()=>{x=n,y=t;let r;return W&&(r=f||(f={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),r.done||(r.done=new Promise(s=>r.resolve=s)),r.running=!0),k(e,!1),x=y=null,r?r.done:void 0})}const[nr,Te]=T(!1);function vt(e){C.push.apply(C,e),e.length=0}function J(e,n){const t=Symbol("context");return{id:t,Provider:$t(t),defaultValue:e}}function K(e){return y&&y.context&&y.context[e.id]!==void 0?y.context[e.id]:e.defaultValue}function ze(e){const n=A(e),t=A(()=>xe(n()));return t.toArray=()=>{const r=t();return Array.isArray(r)?r:r!=null?[r]:[]},t}let W;function At(){return W||(W=J())}function Ge(){const e=f&&f.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===_)Q(this);else{const n=O;O=null,k(()=>ge(this),!1),O=n}if(x){const n=this.observers?this.observers.length:0;x.sources?(x.sources.push(this),x.sourceSlots.push(n)):(x.sources=[this],x.sourceSlots=[n]),this.observers?(this.observers.push(x),this.observerSlots.push(x.sources.length-1)):(this.observers=[x],this.observerSlots=[x.sources.length-1])}return e&&f.sources.has(this)?this.tValue:this.value}function Je(e,n,t){let r=f&&f.running&&f.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(r,n)){if(f){const s=f.running;(s||!t&&f.sources.has(e))&&(f.sources.add(e),e.tValue=n),s||(e.value=n)}else e.value=n;e.observers&&e.observers.length&&k(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s],i=f&&f.running;i&&f.disposed.has(o)||((i?!o.tState:!o.state)&&(o.pure?O.push(o):C.push(o),o.observers&&Ye(o)),i?o.tState=_:o.state=_)}if(O.length>1e6)throw O=[],new Error},!1)}return n}function Q(e){if(!e.fn)return;H(e);const n=pe;Le(e,f&&f.running&&f.sources.has(e)?e.tValue:e.value,n),f&&!f.running&&f.sources.has(e)&&queueMicrotask(()=>{k(()=>{f&&(f.running=!0),x=y=e,Le(e,e.tValue,n),x=y=null},!1)})}function Le(e,n,t){let r;const s=y,o=x;x=y=e;try{r=e.fn(n)}catch(i){return e.pure&&(f&&f.running?(e.tState=_,e.tOwned&&e.tOwned.forEach(H),e.tOwned=void 0):(e.state=_,e.owned&&e.owned.forEach(H),e.owned=null)),e.updatedAt=t+1,ue(i)}finally{x=o,y=s}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?Je(e,r,!0):f&&f.running&&e.pure?(f.sources.add(e),e.tValue=r):e.value=r,e.updatedAt=t)}function ce(e,n,t,r=_,s){const o={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:y,context:y?y.context:null,pure:t};return f&&f.running&&(o.state=0,o.tState=r),y===null||y!==Ke&&(f&&f.running&&y.pure?y.tOwned?y.tOwned.push(o):y.tOwned=[o]:y.owned?y.owned.push(o):y.owned=[o]),o}function he(e){const n=f&&f.running;if((n?e.tState:e.state)===0)return;if((n?e.tState:e.state)===se)return ge(e);if(e.suspense&&L(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<pe);){if(n&&f.disposed.has(e))return;(n?e.tState:e.state)&&t.push(e)}for(let r=t.length-1;r>=0;r--){if(e=t[r],n){let s=e,o=t[r+1];for(;(s=s.owner)&&s!==o;)if(f.disposed.has(s))return}if((n?e.tState:e.state)===_)Q(e);else if((n?e.tState:e.state)===se){const s=O;O=null,k(()=>ge(e,t[0]),!1),O=s}}}function k(e,n){if(O)return e();let t=!1;n||(O=[]),C?t=!0:C=[],pe++;try{const r=e();return Ct(t),r}catch(r){t||(C=null),O=null,ue(r)}}function Ct(e){if(O&&(Qe(O),O=null),e)return;let n;if(f){if(!f.promises.size&&!f.queue.size){const r=f.sources,s=f.disposed;C.push.apply(C,f.effects),n=f.resolve;for(const o of C)"tState"in o&&(o.state=o.tState),delete o.tState;f=null,k(()=>{for(const o of s)H(o);for(const o of r){if(o.value=o.tValue,o.owned)for(let i=0,l=o.owned.length;i<l;i++)H(o.owned[i]);o.tOwned&&(o.owned=o.tOwned),delete o.tValue,delete o.tOwned,o.tState=0}Te(!1)},!1)}else if(f.running){f.running=!1,f.effects.push.apply(f.effects,C),C=null,Te(!0);return}}const t=C;C=null,t.length&&k(()=>He(t),!1),n&&n()}function Qe(e){for(let n=0;n<e.length;n++)he(e[n])}function Ot(e){let n,t=0;for(n=0;n<e.length;n++){const r=e[n];r.user?e[t++]=r:he(r)}if(p.context){if(p.count){p.effects||(p.effects=[]),p.effects.push(...e.slice(0,t));return}else p.effects&&(e=[...p.effects,...e],t+=p.effects.length,delete p.effects);U()}for(n=0;n<t;n++)he(e[n])}function ge(e,n){const t=f&&f.running;t?e.tState=0:e.state=0;for(let r=0;r<e.sources.length;r+=1){const s=e.sources[r];if(s.sources){const o=t?s.tState:s.state;o===_?s!==n&&(!s.updatedAt||s.updatedAt<pe)&&he(s):o===se&&ge(s,n)}}}function Ye(e){const n=f&&f.running;for(let t=0;t<e.observers.length;t+=1){const r=e.observers[t];(n?!r.tState:!r.state)&&(n?r.tState=se:r.state=se,r.pure?O.push(r):C.push(r),r.observers&&Ye(r))}}function H(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),r=e.sourceSlots.pop(),s=t.observers;if(s&&s.length){const o=s.pop(),i=t.observerSlots.pop();r<s.length&&(o.sourceSlots[i]=r,s[r]=o,t.observerSlots[r]=i)}}if(f&&f.running&&e.pure){if(e.tOwned){for(n=e.tOwned.length-1;n>=0;n--)H(e.tOwned[n]);delete e.tOwned}Ze(e,!0)}else if(e.owned){for(n=e.owned.length-1;n>=0;n--)H(e.owned[n]);e.owned=null}if(e.cleanups){for(n=e.cleanups.length-1;n>=0;n--)e.cleanups[n]();e.cleanups=null}f&&f.running?e.tState=0:e.state=0}function Ze(e,n){if(n||(e.tState=0,f.disposed.add(e)),e.owned)for(let t=0;t<e.owned.length;t++)Ze(e.owned[t])}function et(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Re(e,n,t){try{for(const r of n)r(e)}catch(r){ue(r,t&&t.owner||null)}}function ue(e,n=y){const t=ne&&n&&n.context&&n.context[ne],r=et(e);if(!t)throw r;C?C.push({fn(){Re(r,t,n)},state:_}):Re(r,t,n)}function xe(e){if(typeof e=="function"&&!e.length)return xe(e());if(Array.isArray(e)){const n=[];for(let t=0;t<e.length;t++){const r=xe(e[t]);Array.isArray(r)?n.push.apply(n,r):n.push(r)}return n}return e}function $t(e,n){return function(r){let s;return M(()=>s=L(()=>(y.context={...y.context,[e]:r.value},ze(()=>r.children))),void 0),s}}function S(e,n){return L(()=>e(n||{}))}function ae(){return!0}const Tt={get(e,n,t){return n===Se?t:e.get(n)},has(e,n){return n===Se?!0:e.has(n)},set:ae,deleteProperty:ae,getOwnPropertyDescriptor(e,n){return{configurable:!0,enumerable:!0,get(){return e.get(n)},set:ae,deleteProperty:ae}},ownKeys(e){return e.keys()}};function we(e){return(e=typeof e=="function"?e():e)?e:{}}function Lt(){for(let e=0,n=this.length;e<n;++e){const t=this[e]();if(t!==void 0)return t}}function Rt(...e){let n=!1;for(let o=0;o<e.length;o++){const i=e[o];n=n||!!i&&Se in i,e[o]=typeof i=="function"?(n=!0,A(i)):i}if(n)return new Proxy({get(o){for(let i=e.length-1;i>=0;i--){const l=we(e[i])[o];if(l!==void 0)return l}},has(o){for(let i=e.length-1;i>=0;i--)if(o in we(e[i]))return!0;return!1},keys(){const o=[];for(let i=0;i<e.length;i++)o.push(...Object.keys(we(e[i])));return[...new Set(o)]}},Tt);const t={},r={},s=new Set;for(let o=e.length-1;o>=0;o--){const i=e[o];if(!i)continue;const l=Object.getOwnPropertyNames(i);for(let u=0,a=l.length;u<a;u++){const c=l[u];if(c==="__proto__"||c==="constructor")continue;const d=Object.getOwnPropertyDescriptor(i,c);if(!s.has(c))d.get?(s.add(c),Object.defineProperty(t,c,{enumerable:!0,configurable:!0,get:Lt.bind(r[c]=[d.get.bind(i)])})):(d.value!==void 0&&s.add(c),t[c]=d.value);else{const g=r[c];g?d.get?g.push(d.get.bind(i)):d.value!==void 0&&g.push(()=>d.value):t[c]===void 0&&(t[c]=d.value)}}}return t}function Ne(e){let n,t;const r=s=>{const o=p.context;if(o){const[l,u]=T();p.count||(p.count=0),p.count++,(t||(t=e())).then(a=>{U(o),p.count--,u(()=>a.default),U()}),n=l}else if(!n){const[l]=St(()=>(t||(t=e())).then(u=>u.default));n=l}let i;return A(()=>(i=n())&&L(()=>{if(!o)return i(s);const l=p.context;U(o);const u=i(s);return U(l),u}))};return r.preload=()=>t||((t=e()).then(s=>n=()=>s.default),t),r}let Nt=0;function kt(){const e=p.context;return e?`${e.id}${e.count++}`:`cl-${Nt++}`}const _t=e=>`Stale read from <${e}>.`;function Ce(e){const n=e.keyed,t=A(()=>e.when,void 0,{equals:(r,s)=>n?r===s:!r==!s});return A(()=>{const r=t();if(r){const s=e.children;return typeof s=="function"&&s.length>0?L(()=>s(n?r:()=>{if(!L(t))throw _t("Show");return e.when})):s}return e.fallback},void 0,void 0)}let z;function tt(){z&&[...z].forEach(e=>e())}function jt(e){let n;p.context&&p.load&&(n=p.load(p.context.id+p.context.count));const[t,r]=T(n,void 0);return z||(z=new Set),z.add(r),le(()=>z.delete(r)),A(()=>{let s;if(s=t()){const o=e.fallback;return typeof o=="function"&&o.length?L(()=>o(s,()=>r())):o}return xt(()=>e.children,r)},void 0,void 0)}const It=J();function Bt(e){let n=0,t,r,s,o,i;const[l,u]=T(!1),a=At(),c={increment:()=>{++n===1&&u(!0)},decrement:()=>{--n===0&&u(!1)},inFallback:l,effects:[],resolved:!1},d=Xe();if(p.context&&p.load){const P=p.context.id+p.context.count;let b=p.load(P);if(b&&(typeof b!="object"||b.status!=="success")&&(s=b),s&&s!=="$$f"){const[$,R]=T(void 0,{equals:!1});o=$,s.then(()=>{p.gather(P),U(r),R(),U()}).catch(N=>{if(N||p.done)return N&&(i=N),R()})}}const g=K(It);g&&(t=g.register(c.inFallback));let w;return le(()=>w&&w()),S(a.Provider,{value:c,get children(){return A(()=>{if(i)throw i;if(r=p.context,o)return o(),o=void 0;r&&s==="$$f"&&U();const P=A(()=>e.children);return A(b=>{const $=c.inFallback(),{showContent:R=!0,showFallback:N=!0}=t?t():{};if((!$||s&&s!=="$$f")&&R)return c.resolved=!0,w&&w(),w=r=s=void 0,vt(c.effects),P();if(N)return w?b:Ae(V=>(w=V,r&&(U({id:r.id+"f",count:0}),r=void 0),e.fallback),d)})})}})}const Ut=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Mt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Ut]),Vt=new Set(["innerHTML","textContent","innerText","children"]),qt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Ft=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Dt(e,n){const t=Ft[e];return typeof t=="object"?t[n]?t.$:void 0:t}const Ht=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Kt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Wt(e,n,t){let r=t.length,s=n.length,o=r,i=0,l=0,u=n[s-1].nextSibling,a=null;for(;i<s||l<o;){if(n[i]===t[l]){i++,l++;continue}for(;n[s-1]===t[o-1];)s--,o--;if(s===i){const c=o<r?l?t[l-1].nextSibling:t[o-l]:u;for(;l<o;)e.insertBefore(t[l++],c)}else if(o===l)for(;i<s;)(!a||!a.has(n[i]))&&n[i].remove(),i++;else if(n[i]===t[o-1]&&t[l]===n[s-1]){const c=n[--s].nextSibling;e.insertBefore(t[l++],n[i++].nextSibling),e.insertBefore(t[--o],c),n[s]=t[o]}else{if(!a){a=new Map;let d=l;for(;d<o;)a.set(t[d],d++)}const c=a.get(n[i]);if(c!=null)if(l<c&&c<o){let d=i,g=1,w;for(;++d<s&&d<o&&!((w=a.get(n[d]))==null||w!==c+g);)g++;if(g>c-l){const P=n[i];for(;l<c;)e.insertBefore(t[l++],P)}else e.replaceChild(t[l++],n[i++])}else i++;else n[i++].remove()}}}const ke="_$DX_DELEGATE";function Xt(e,n,t,r={}){let s;return Ae(o=>{s=o,n===document?e():Ee(n,e(),n.firstChild?null:void 0,t)},r.owner),()=>{s(),n.textContent=""}}function zt(e,n,t){let r;const s=()=>{const i=document.createElement("template");return i.innerHTML=e,t?i.content.firstChild.firstChild:i.content.firstChild},o=n?()=>L(()=>document.importNode(r||(r=s()),!0)):()=>(r||(r=s())).cloneNode(!0);return o.cloneNode=o,o}function Oe(e,n=window.document){const t=n[ke]||(n[ke]=new Set);for(let r=0,s=e.length;r<s;r++){const o=e[r];t.has(o)||(t.add(o),n.addEventListener(o,tn))}}function Pe(e,n,t){p.context||(t==null?e.removeAttribute(n):e.setAttribute(n,t))}function Gt(e,n,t,r){p.context||(r==null?e.removeAttributeNS(n,t):e.setAttributeNS(n,t,r))}function Jt(e,n){p.context||(n==null?e.removeAttribute("class"):e.className=n)}function nt(e,n,t,r){if(r)Array.isArray(t)?(e[`$$${n}`]=t[0],e[`$$${n}Data`]=t[1]):e[`$$${n}`]=t;else if(Array.isArray(t)){const s=t[0];e.addEventListener(n,t[0]=o=>s.call(e,t[1],o))}else e.addEventListener(n,t)}function Qt(e,n,t={}){const r=Object.keys(n||{}),s=Object.keys(t);let o,i;for(o=0,i=s.length;o<i;o++){const l=s[o];!l||l==="undefined"||n[l]||(_e(e,l,!1),delete t[l])}for(o=0,i=r.length;o<i;o++){const l=r[o],u=!!n[l];!l||l==="undefined"||t[l]===u||!u||(_e(e,l,!0),t[l]=u)}return t}function Yt(e,n,t){if(!n)return t?Pe(e,"style"):n;const r=e.style;if(typeof n=="string")return r.cssText=n;typeof t=="string"&&(r.cssText=t=void 0),t||(t={}),n||(n={});let s,o;for(o in t)n[o]==null&&r.removeProperty(o),delete t[o];for(o in n)s=n[o],s!==t[o]&&(r.setProperty(o,s),t[o]=s);return t}function oe(e,n={},t,r){const s={};return r||M(()=>s.children=G(e,n.children,s.children)),M(()=>n.ref&&n.ref(e)),M(()=>Zt(e,n,t,!0,s,!0)),s}function Ee(e,n,t,r){if(t!==void 0&&!r&&(r=[]),typeof n!="function")return G(e,n,r,t);M(s=>G(e,n(),s,t),r)}function Zt(e,n,t,r,s={},o=!1){n||(n={});for(const i in s)if(!(i in n)){if(i==="children")continue;s[i]=je(e,i,null,s[i],t,o)}for(const i in n){if(i==="children"){r||G(e,n.children);continue}const l=n[i];s[i]=je(e,i,l,s[i],t,o)}}function en(e){return e.toLowerCase().replace(/-([a-z])/g,(n,t)=>t.toUpperCase())}function _e(e,n,t){const r=n.trim().split(/\s+/);for(let s=0,o=r.length;s<o;s++)e.classList.toggle(r[s],t)}function je(e,n,t,r,s,o){let i,l,u,a,c;if(n==="style")return Yt(e,t,r);if(n==="classList")return Qt(e,t,r);if(t===r)return r;if(n==="ref")o||t(e);else if(n.slice(0,3)==="on:"){const d=n.slice(3);r&&e.removeEventListener(d,r),t&&e.addEventListener(d,t)}else if(n.slice(0,10)==="oncapture:"){const d=n.slice(10);r&&e.removeEventListener(d,r,!0),t&&e.addEventListener(d,t,!0)}else if(n.slice(0,2)==="on"){const d=n.slice(2).toLowerCase(),g=Ht.has(d);if(!g&&r){const w=Array.isArray(r)?r[0]:r;e.removeEventListener(d,w)}(g||t)&&(nt(e,d,t,g),g&&Oe([d]))}else if(n.slice(0,5)==="attr:")Pe(e,n.slice(5),t);else if((c=n.slice(0,5)==="prop:")||(u=Vt.has(n))||!s&&((a=Dt(n,e.tagName))||(l=Mt.has(n)))||(i=e.nodeName.includes("-"))){if(c)n=n.slice(5),l=!0;else if(p.context)return t;n==="class"||n==="className"?Jt(e,t):i&&!l&&!u?e[en(n)]=t:e[a||n]=t}else{const d=s&&n.indexOf(":")>-1&&Kt[n.split(":")[0]];d?Gt(e,d,n,t):Pe(e,qt[n]||n,t)}return t}function tn(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),p.registry&&!p.done&&(p.done=_$HY.done=!0);t;){const r=t[n];if(r&&!t.disabled){const s=t[`${n}Data`];if(s!==void 0?r.call(t,s,e):r.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function G(e,n,t,r,s){if(p.context){!t&&(t=[...e.childNodes]);let l=[];for(let u=0;u<t.length;u++){const a=t[u];a.nodeType===8&&a.data.slice(0,2)==="!$"?a.remove():l.push(a)}t=l}for(;typeof t=="function";)t=t();if(n===t)return t;const o=typeof n,i=r!==void 0;if(e=i&&t[0]&&t[0].parentNode||e,o==="string"||o==="number"){if(p.context)return t;if(o==="number"&&(n=n.toString()),i){let l=t[0];l&&l.nodeType===3?l.data=n:l=document.createTextNode(n),t=X(e,t,r,l)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||o==="boolean"){if(p.context)return t;t=X(e,t,r)}else{if(o==="function")return M(()=>{let l=n();for(;typeof l=="function";)l=l();t=G(e,l,t,r)}),()=>t;if(Array.isArray(n)){const l=[],u=t&&Array.isArray(t);if(ve(l,n,t,s))return M(()=>t=G(e,l,t,r,!0)),()=>t;if(p.context){if(!l.length)return t;if(r===void 0)return[...e.childNodes];let a=l[0],c=[a];for(;(a=a.nextSibling)!==r;)c.push(a);return t=c}if(l.length===0){if(t=X(e,t,r),i)return t}else u?t.length===0?Ie(e,l,r):Wt(e,t,l):(t&&X(e),Ie(e,l));t=l}else if(n.nodeType){if(p.context&&n.parentNode)return t=i?[n]:n;if(Array.isArray(t)){if(i)return t=X(e,t,r,n);X(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function ve(e,n,t,r){let s=!1;for(let o=0,i=n.length;o<i;o++){let l=n[o],u=t&&t[o],a;if(!(l==null||l===!0||l===!1))if((a=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))s=ve(e,l,u)||s;else if(a==="function")if(r){for(;typeof l=="function";)l=l();s=ve(e,Array.isArray(l)?l:[l],Array.isArray(u)?u:[u])||s}else e.push(l),s=!0;else{const c=String(l);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return s}function Ie(e,n,t=null){for(let r=0,s=n.length;r<s;r++)e.insertBefore(n[r],t)}function X(e,n,t,r){if(t===void 0)return e.textContent="";const s=r||document.createTextNode("");if(n.length){let o=!1;for(let i=n.length-1;i>=0;i--){const l=n[i];if(s!==l){const u=l.parentNode===e;!o&&!i?u?e.replaceChild(s,l):e.insertBefore(s,t):u&&l.remove()}else o=!0}}else e.insertBefore(s,t);return[s]}function nn(e){return p.context?void 0:e.children}const rt=!1,rn="modulepreload",sn=function(e){return"/"+e},Be={},Ue=function(n,t,r){if(!t||t.length===0)return n();const s=document.getElementsByTagName("link");return Promise.all(t.map(o=>{if(o=sn(o),o in Be)return;Be[o]=!0;const i=o.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(!!r)for(let c=s.length-1;c>=0;c--){const d=s[c];if(d.href===o&&(!i||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":rn,i||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),i)return new Promise((c,d)=>{a.addEventListener("load",c),a.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>n()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})};function on(e,n){e&&n&&Xt(e,n===document?n.body:n)}const st=J(),ln=["title","meta"],Me=[],Ve=["name","http-equiv","content","charset","media"].concat(["property"]),qe=(e,n)=>{const t=Object.fromEntries(Object.entries(e.props).filter(([r])=>n.includes(r)).sort());return(Object.hasOwn(t,"name")||Object.hasOwn(t,"property"))&&(t.name=t.name||t.property,delete t.property),e.tag+JSON.stringify(t)};function cn(){if(!p.context){const t=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(t,r=>r.parentNode.removeChild(r))}const e=new Map;function n(t){if(t.ref)return t.ref;let r=document.querySelector(`[data-sm="${t.id}"]`);return r?(r.tagName.toLowerCase()!==t.tag&&(r.parentNode&&r.parentNode.removeChild(r),r=document.createElement(t.tag)),r.removeAttribute("data-sm")):r=document.createElement(t.tag),r}return{addTag(t){if(ln.indexOf(t.tag)!==-1){const o=t.tag==="title"?Me:Ve,i=qe(t,o);e.has(i)||e.set(i,[]);let l=e.get(i),u=l.length;l=[...l,t],e.set(i,l);let a=n(t);t.ref=a,oe(a,t.props);let c=null;for(var r=u-1;r>=0;r--)if(l[r]!=null){c=l[r];break}return a.parentNode!=document.head&&document.head.appendChild(a),c&&c.ref&&document.head.removeChild(c.ref),u}let s=n(t);return t.ref=s,oe(s,t.props),s.parentNode!=document.head&&document.head.appendChild(s),-1},removeTag(t,r){const s=t.tag==="title"?Me:Ve,o=qe(t,s);if(t.ref){const i=e.get(o);if(i){if(t.ref.parentNode){t.ref.parentNode.removeChild(t.ref);for(let l=r-1;l>=0;l--)i[l]!=null&&document.head.appendChild(i[l].ref)}i[r]=null,e.set(o,i)}else t.ref.parentNode&&t.ref.parentNode.removeChild(t.ref)}}}}const un=e=>{const n=cn();return S(st.Provider,{value:n,get children(){return e.children}})},ot=(e,n,t)=>(an({tag:e,props:n,setting:t,id:kt(),get name(){return n.name||n.property}}),null);function an(e){let n;if(n=n||K(st),!n)throw new Error("<MetaProvider /> should be in the tree");M(()=>{const t=n.addTag(e);le(()=>n.removeTag(e,t))})}const fn=e=>ot("title",e,{escape:!0,close:!0}),Fe=e=>ot("meta",e);function dn(e,n,t){return e.addEventListener(n,t),()=>e.removeEventListener(n,t)}function hn([e,n],t,r){return[t?()=>t(e()):e,r?s=>n(r(s)):n]}function gn(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function pn(e,n){const t=gn(`#${e}`);t?t.scrollIntoView():n&&window.scrollTo(0,0)}function yn(e,n,t,r){let s=!1;const o=l=>typeof l=="string"?{value:l}:l,i=hn(T(o(e()),{equals:(l,u)=>l.value===u.value}),void 0,l=>(!s&&n(l),l));return t&&le(t((l=e())=>{s=!0,i[1](o(l)),s=!1})),{signal:i,utils:r}}function mn(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:T({value:""})};return e}function wn(){return yn(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:n,scroll:t,state:r})=>{n?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),pn(window.location.hash.slice(1),t)},e=>dn(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function bn(){let e=new Set;function n(s){return e.add(s),()=>e.delete(s)}let t=!1;function r(s,o){if(t)return!(t=!1);const i={to:s,options:o,defaultPrevented:!1,preventDefault:()=>i.defaultPrevented=!0};for(const l of e)l.listener({...i,from:l.location,retry:u=>{u&&(t=!0),l.navigate(s,o)}});return!i.defaultPrevented}return{subscribe:n,confirm:r}}const Sn=/^(?:[a-z0-9]+:)?\/\//i,xn=/^\/+|(\/)\/+$/g;function re(e,n=!1){const t=e.replace(xn,"$1");return t?n||/^[?#]/.test(t)?t:"/"+t:""}function fe(e,n,t){if(Sn.test(n))return;const r=re(e),s=t&&re(t);let o="";return!s||n.startsWith("/")?o=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?o=r+s:o=s,(o||"/")+re(n,!o)}function Pn(e,n){if(e==null)throw new Error(n);return e}function it(e,n){return re(e).replace(/\/*(\*.*)?$/g,"")+re(n)}function En(e){const n={};return e.searchParams.forEach((t,r)=>{n[r]=t}),n}function vn(e,n,t){const[r,s]=e.split("/*",2),o=r.split("/").filter(Boolean),i=o.length;return l=>{const u=l.split("/").filter(Boolean),a=u.length-i;if(a<0||a>0&&s===void 0&&!n)return null;const c={path:i?"":"/",params:{}},d=g=>t===void 0?void 0:t[g];for(let g=0;g<i;g++){const w=o[g],P=u[g],b=w[0]===":",$=b?w.slice(1):w;if(b&&be(P,d($)))c.params[$]=P;else if(b||!be(P,w))return null;c.path+=`/${P}`}if(s){const g=a?u.slice(-a).join("/"):"";if(be(g,d(s)))c.params[s]=g;else return null}return c}}function be(e,n){const t=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return n===void 0?!0:typeof n=="string"?t(n):typeof n=="function"?n(e):Array.isArray(n)?n.some(t):n instanceof RegExp?n.test(e):!1}function An(e){const[n,t]=e.pattern.split("/*",2),r=n.split("/").filter(Boolean);return r.reduce((s,o)=>s+(o.startsWith(":")?2:3),r.length-(t===void 0?0:1))}function lt(e){const n=new Map,t=Xe();return new Proxy({},{get(r,s){return n.has(s)||Pt(t,()=>n.set(s,A(()=>e()[s]))),n.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function ct(e){let n=/(\/?\:[^\/]+)\?/.exec(e);if(!n)return[e];let t=e.slice(0,n.index),r=e.slice(n.index+n[0].length);const s=[t,t+=n[1]];for(;n=/^(\/\:[^\/]+)\?/.exec(r);)s.push(t+=n[1]),r=r.slice(n[0].length);return ct(r).reduce((o,i)=>[...o,...s.map(l=>l+i)],[])}const Cn=100,ut=J(),ye=J(),at=()=>Pn(K(ut),"Make sure your app is wrapped in a <Router />");let ie;const ft=()=>ie||K(ye)||at().base;function On(e,n="",t){const{component:r,data:s,children:o}=e,i=!o||Array.isArray(o)&&!o.length,l={key:e,element:r?()=>S(r,{}):()=>{const{element:u}=e;return u===void 0&&t?S(t,{}):u},preload:e.component?r.preload:e.preload,data:s};return dt(e.path).reduce((u,a)=>{for(const c of ct(a)){const d=it(n,c),g=i?d:d.split("/*",1)[0];u.push({...l,originalPath:c,pattern:g,matcher:vn(g,!i,e.matchFilters)})}return u},[])}function $n(e,n=0){return{routes:e,score:An(e[e.length-1])*1e4-n,matcher(t){const r=[];for(let s=e.length-1;s>=0;s--){const o=e[s],i=o.matcher(t);if(!i)return null;r.unshift({...i,route:o})}return r}}}function dt(e){return Array.isArray(e)?e:[e]}function ht(e,n="",t,r=[],s=[]){const o=dt(e);for(let i=0,l=o.length;i<l;i++){const u=o[i];if(u&&typeof u=="object"&&u.hasOwnProperty("path")){const a=On(u,n,t);for(const c of a){r.push(c);const d=Array.isArray(u.children)&&u.children.length===0;if(u.children&&!d)ht(u.children,c.pattern,t,r,s);else{const g=$n([...r],s.length);s.push(g)}r.pop()}}}return r.length?s:s.sort((i,l)=>l.score-i.score)}function Tn(e,n){for(let t=0,r=e.length;t<r;t++){const s=e[t].matcher(n);if(s)return s}return[]}function Ln(e,n){const t=new URL("http://sar"),r=A(u=>{const a=e();try{return new URL(a,t)}catch{return console.error(`Invalid path ${a}`),u}},t,{equals:(u,a)=>u.href===a.href}),s=A(()=>r().pathname),o=A(()=>r().search,!0),i=A(()=>r().hash),l=A(()=>"");return{get pathname(){return s()},get search(){return o()},get hash(){return i()},get state(){return n()},get key(){return l()},query:lt(We(o,()=>En(r())))}}function Rn(e,n="",t,r){const{signal:[s,o],utils:i={}}=mn(e),l=i.parsePath||(E=>E),u=i.renderPath||(E=>E),a=i.beforeLeave||bn(),c=fe("",n),d=void 0;if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!s().value&&o({value:c,replace:!0,scroll:!1});const[g,w]=T(!1),P=async E=>{w(!0);try{await Et(E)}finally{w(!1)}},[b,$]=T(s().value),[R,N]=T(s().state),V=Ln(b,R),q=[],I={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath(E){return fe(c,E)}};if(t)try{ie=I,I.data=t({data:void 0,params:{},location:V,navigate:Y(I)})}finally{ie=void 0}function B(E,h,m){L(()=>{if(typeof h=="number"){h&&(i.go?a.confirm(h,m)&&i.go(h):console.warn("Router integration does not support relative routing"));return}const{replace:v,resolve:j,scroll:F,state:ee}={replace:!1,resolve:!0,scroll:!0,...m},D=j?E.resolvePath(h):fe("",h);if(D===void 0)throw new Error(`Path '${h}' is not a routable path`);if(q.length>=Cn)throw new Error("Too many redirects");const te=b();if((D!==te||ee!==R())&&!rt){if(a.confirm(D,m)){const yt=q.push({value:te,replace:v,scroll:F,state:R()});P(()=>{$(D),N(ee),tt()}).then(()=>{q.length===yt&&Z({value:D,state:ee})})}}})}function Y(E){return E=E||K(ye)||I,(h,m)=>B(E,h,m)}function Z(E){const h=q[0];h&&((E.value!==h.value||E.state!==h.state)&&o({...E,replace:h.replace,scroll:h.scroll}),q.length=0)}M(()=>{const{value:E,state:h}=s();L(()=>{E!==b()&&P(()=>{$(E),N(h)})})});{let E=function(h){if(h.defaultPrevented||h.button!==0||h.metaKey||h.altKey||h.ctrlKey||h.shiftKey)return;const m=h.composedPath().find(te=>te instanceof Node&&te.nodeName.toUpperCase()==="A");if(!m||!m.hasAttribute("link"))return;const v=m.href;if(m.target||!v&&!m.hasAttribute("state"))return;const j=(m.getAttribute("rel")||"").split(/\s+/);if(m.hasAttribute("download")||j&&j.includes("external"))return;const F=new URL(v);if(F.origin!==window.location.origin||c&&F.pathname&&!F.pathname.toLowerCase().startsWith(c.toLowerCase()))return;const ee=l(F.pathname+F.search+F.hash),D=m.getAttribute("state");h.preventDefault(),B(I,ee,{resolve:!1,replace:m.hasAttribute("replace"),scroll:!m.hasAttribute("noscroll"),state:D&&JSON.parse(D)})};Oe(["click"]),document.addEventListener("click",E),le(()=>document.removeEventListener("click",E))}return{base:I,out:d,location:V,isRouting:g,renderPath:u,parsePath:l,navigatorFactory:Y,beforeLeave:a}}function Nn(e,n,t,r,s){const{base:o,location:i,navigatorFactory:l}=e,{pattern:u,element:a,preload:c,data:d}=r().route,g=A(()=>r().path);c&&c();const w={parent:n,pattern:u,get child(){return t()},path:g,params:s,data:n.data,outlet:a,resolvePath(P){return fe(o.path(),P,g())}};if(d)try{ie=w,w.data=d({data:n.data,params:s,location:i,navigate:l(w)})}finally{ie=void 0}return w}const kn=e=>{const{source:n,url:t,base:r,data:s,out:o}=e,i=n||wn(),l=Rn(i,r,s);return S(ut.Provider,{value:l,get children(){return e.children}})},_n=e=>{const n=at(),t=ft(),r=ze(()=>e.children),s=A(()=>ht(r(),it(t.pattern,e.base||""),jn)),o=A(()=>Tn(s(),n.location.pathname)),i=lt(()=>{const c=o(),d={};for(let g=0;g<c.length;g++)Object.assign(d,c[g].params);return d});n.out&&n.out.matches.push(o().map(({route:c,path:d,params:g})=>({originalPath:c.originalPath,pattern:c.pattern,path:d,params:g})));const l=[];let u;const a=A(We(o,(c,d,g)=>{let w=d&&c.length===d.length;const P=[];for(let b=0,$=c.length;b<$;b++){const R=d&&d[b],N=c[b];g&&R&&N.route.key===R.route.key?P[b]=g[b]:(w=!1,l[b]&&l[b](),Ae(V=>{l[b]=V,P[b]=Nn(n,P[b-1]||t,()=>a()[b+1],()=>o()[b],i)}))}return l.splice(c.length).forEach(b=>b()),g&&w?g:(u=P[0],P)}));return S(Ce,{get when(){return a()&&u},keyed:!0,children:c=>S(ye.Provider,{value:c,get children(){return c.outlet()}})})},jn=()=>{const e=ft();return S(Ce,{get when(){return e.child},keyed:!0,children:n=>S(ye.Provider,{value:n,get children(){return n.outlet()}})})},In=[{component:Ne(()=>Ue(()=>import("./_...404_-f38ca189.js"),[])),path:"/*404"},{component:Ne(()=>Ue(()=>import("./index-a3e3ce22.js"),[])),path:"/"}],Bn=()=>In,gt="$FETCH",pt=J({$type:gt}),Un=()=>K(pt),Mn=_n,Vn=zt("<div><div><p id=error-message></p><button id=reset-errors>Clear errors and retry</button><pre>");function qn(e){return S(jt,{fallback:(n,t)=>S(Ce,{get when(){return!e.fallback},get fallback(){return A(()=>!!e.fallback)()&&e.fallback(n,t)},get children(){return S(Fn,{error:n})}}),get children(){return e.children}})}function Fn(e){return wt(()=>console.error(e.error)),console.log(e.error),(()=>{const n=Vn(),t=n.firstChild,r=t.firstChild,s=r.nextSibling,o=s.nextSibling;return n.style.setProperty("padding","16px"),t.style.setProperty("background-color","rgba(252, 165, 165)"),t.style.setProperty("color","rgb(153, 27, 27)"),t.style.setProperty("border-radius","5px"),t.style.setProperty("overflow","scroll"),t.style.setProperty("padding","16px"),t.style.setProperty("margin-bottom","8px"),r.style.setProperty("font-weight","bold"),Ee(r,()=>e.error.message),nt(s,"click",tt,!0),s.style.setProperty("color","rgba(252, 165, 165)"),s.style.setProperty("background-color","rgb(153, 27, 27)"),s.style.setProperty("border-radius","5px"),s.style.setProperty("padding","4px 8px"),o.style.setProperty("margin-top","8px"),o.style.setProperty("width","100%"),Ee(o,()=>e.error.stack),n})()}Oe(["click"]);const Dn=!1,Hn=!1,Kn=!1;function Wn(){return Kn}function Xn(){return Dn}function zn(){return Un(),[Hn,S(nn,{get children(){return[S(Wn,{}),A(()=>rt)]}})]}function Gn(){return[S(Xn,{}),S(zn,{})]}function Jn(e){return oe(document.documentElement,e,!1,!0),e.children}function Qn(e){return oe(document.head,e,!1,!0),e.children}function Yn(e){return oe(document.body,e,!1,!0),e.children}function Zn(){return S(Jn,{lang:"en",get children(){return[S(Qn,{get children(){return[S(fn,{children:"QuizL"}),S(Fe,{charset:"utf-8"}),S(Fe,{name:"viewport",content:"width=device-width, initial-scale=1"})]}}),S(Yn,{get children(){return[S(Bt,{get children(){return S(qn,{get children(){return S(Mn,{get children(){return S(Bn,{})}})}})}}),S(Gn,{})]}})]}})}const De=Object.values(Object.assign({}))[0],er=De?De.default:void 0,tr=({routerProps:e}={})=>{let n={get request(){},get clientAddress(){},get locals(){},get prevUrl(){},get responseHeaders(){},get tags(){},get env(){},get routerContext(){},setStatusCode(o){},getStatusCode(){},$type:gt,fetch,$islands:new Set,mutation:!1};function t(o){return S(kn,o)}const r="/";let s=r;if(r.startsWith("http"))try{s=new URL(r).pathname}catch{console.warn("BASE_URL starts with http, but `new URL` failed to parse it. Please check your BASE_URL:",r)}return S(pt.Provider,{value:n,get children(){return S(un,{get children(){return S(t,Rt({base:s,data:er},e,{get children(){return S(Zn,{})}}))}})}})};on(()=>S(tr,{}),document);export{fn as T,S as c,Ee as i,le as o,zt as t,Un as u};
