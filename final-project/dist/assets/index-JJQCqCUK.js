(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const se=!1;var oe=Array.isArray,ae=Array.from,ne=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,le=Object.getOwnPropertyDescriptors,he=Object.getPrototypeOf;function ue(r){return r()}function st(r){for(var t=0;t<r.length;t++)r[t]()}const F=2,Dt=4,ct=8,Ft=16,B=32,$=64,L=128,W=256,S=512,P=1024,Y=2048,wt=4096,k=8192,ce=16384,fe=1<<18,Ut=1<<19,ot=Symbol("$state");function Pt(r){return r===this.v}function me(r,t){return r!=r?t==t:r!==t||r!==null&&typeof r=="object"||typeof r=="function"}function de(r){return!me(r,this.v)}function ge(r){throw new Error("effect_in_teardown")}function ve(){throw new Error("effect_in_unowned_derived")}function pe(r){throw new Error("effect_orphan")}function xe(){throw new Error("effect_update_depth_exceeded")}function ye(){throw new Error("state_unsafe_local_read")}function be(){throw new Error("state_unsafe_mutation")}let Q=!1;function Te(){Q=!0}function Bt(r){return{f:0,v:r,reactions:null,equals:Pt,version:0}}function Ee(r,t=!1){var i;const e=Bt(r);return t||(e.equals=de),Q&&p!==null&&p.l!==null&&((i=p.l).s??(i.s=[])).push(e),e}function Se(r,t=!1){return Re(Ee(r,t))}function Re(r){return g!==null&&g.f&F&&(A===null?Xe([r]):A.push(r)),r}function _e(r,t){return g!==null&&gt()&&g.f&(F|Ft)&&(A===null||!A.includes(r))&&be(),Ae(r,t)}function Ae(r,t){return r.equals(t)||(r.v=t,r.version=qt(),Ct(r,P),gt()&&d!==null&&d.f&S&&!(d.f&B)&&(b!==null&&b.includes(r)?(w(d,P),rt(d)):U===null?Oe([r]):U.push(r))),t}function Ct(r,t){var e=r.reactions;if(e!==null)for(var i=gt(),s=e.length,o=0;o<s;o++){var a=e[o],l=a.f;l&P||!i&&a===d||(w(a,t),l&(S|L)&&(l&F?Ct(a,Y):rt(a)))}}const De=2;var yt,Lt,It;function Fe(){if(yt===void 0){yt=window;var r=Element.prototype,t=Node.prototype;Lt=xt(t,"firstChild").get,It=xt(t,"nextSibling").get,r.__click=void 0,r.__className="",r.__attributes=null,r.__styles=null,r.__e=void 0,Text.prototype.__t=void 0}}function we(r=""){return document.createTextNode(r)}function Nt(r){return Lt.call(r)}function Ue(r){return It.call(r)}function bt(r,t){return Nt(r)}function Pe(r){var t=F|P;d===null?t|=L:d.f|=Ut;const e={children:null,ctx:p,deps:null,equals:Pt,f:t,fn:r,reactions:null,v:null,version:0,parent:d};if(g!==null&&g.f&F){var i=g;(i.children??(i.children=[])).push(e)}return e}function Mt(r){var t=r.children;if(t!==null){r.children=null;for(var e=0;e<t.length;e+=1){var i=t[e];i.f&F?ft(i):G(i)}}}function Vt(r){var t,e=d;X(r.parent);try{Mt(r),t=Wt(r)}finally{X(e)}return t}function Xt(r){var t=Vt(r),e=(N||r.f&L)&&r.deps!==null?Y:S;w(r,e),r.equals(t)||(r.v=t,r.version=qt())}function ft(r){Mt(r),z(r,0),w(r,k),r.v=r.children=r.deps=r.ctx=r.reactions=null}function Ot(r){d===null&&g===null&&pe(),g!==null&&g.f&L&&ve(),dt&&ge()}function Be(r,t){var e=t.last;e===null?t.last=t.first=r:(e.next=r,r.prev=e,t.last=r)}function tt(r,t,e,i=!0){var s=(r&$)!==0,o=d,a={ctx:p,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:r|P,first:null,fn:t,last:null,next:null,parent:s?null:o,prev:null,teardown:null,transitions:null,version:0};if(e){var l=M;try{Tt(!0),vt(a),a.f|=ce}catch(f){throw G(a),f}finally{Tt(l)}}else t!==null&&rt(a);var h=e&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&Ut)===0;if(!h&&!s&&i&&(o!==null&&Be(a,o),g!==null&&g.f&F)){var u=g;(u.children??(u.children=[])).push(a)}return a}function at(r){Ot();var t=d!==null&&(d.f&B)!==0&&p!==null&&!p.m;if(t){var e=p;(e.e??(e.e=[])).push({fn:r,effect:d,reaction:g})}else{var i=mt(r);return i}}function Ce(r){return Ot(),zt(r)}function Le(r){const t=tt($,r,!0);return()=>{G(t)}}function mt(r){return tt(Dt,r,!1)}function zt(r){return tt(ct,r,!0)}function Ie(r,t=!0){return tt(ct|B,r,!0,t)}function Yt(r){var t=r.teardown;if(t!==null){const e=dt,i=g;Et(!0),V(null);try{t.call(null)}finally{Et(e),V(i)}}}function kt(r){var t=r.deriveds;if(t!==null){r.deriveds=null;for(var e=0;e<t.length;e+=1)ft(t[e])}}function Qt(r,t=!1){var e=r.first;for(r.first=r.last=null;e!==null;){var i=e.next;G(e,t),e=i}}function Ne(r){for(var t=r.first;t!==null;){var e=t.next;t.f&B||G(t),t=e}}function G(r,t=!0){var e=!1;if((t||r.f&fe)&&r.nodes_start!==null){for(var i=r.nodes_start,s=r.nodes_end;i!==null;){var o=i===s?null:Ue(i);i.remove(),i=o}e=!0}Qt(r,t&&!e),kt(r),z(r,0),w(r,k);var a=r.transitions;if(a!==null)for(const h of a)h.stop();Yt(r);var l=r.parent;l!==null&&l.first!==null&&Gt(r),r.next=r.prev=r.teardown=r.ctx=r.deps=r.parent=r.fn=r.nodes_start=r.nodes_end=null}function Gt(r){var t=r.parent,e=r.prev,i=r.next;e!==null&&(e.next=i),i!==null&&(i.prev=e),t!==null&&(t.first===r&&(t.first=i),t.last===r&&(t.last=e))}let nt=!1,lt=[];function Me(){nt=!1;const r=lt.slice();lt=[],st(r)}function Ve(r){nt||(nt=!0,queueMicrotask(Me)),lt.push(r)}function Kt(r){throw new Error("lifecycle_outside_component")}let J=!1,M=!1,dt=!1;function Tt(r){M=r}function Et(r){dt=r}let ht=[],O=0;let g=null;function V(r){g=r}let d=null;function X(r){d=r}let A=null;function Xe(r){A=r}let b=null,E=0,U=null;function Oe(r){U=r}let Ht=0,N=!1,p=null;function qt(){return++Ht}function gt(){return!Q||p!==null&&p.l===null}function et(r){var a,l;var t=r.f;if(t&P)return!0;if(t&Y){var e=r.deps,i=(t&L)!==0;if(e!==null){var s;if(t&W){for(s=0;s<e.length;s++)((a=e[s]).reactions??(a.reactions=[])).push(r);r.f^=W}for(s=0;s<e.length;s++){var o=e[s];if(et(o)&&Xt(o),i&&d!==null&&!N&&!((l=o==null?void 0:o.reactions)!=null&&l.includes(r))&&(o.reactions??(o.reactions=[])).push(r),o.version>r.version)return!0}}i||w(r,S)}return!1}function ze(r,t,e){throw r}function Wt(r){var x;var t=b,e=E,i=U,s=g,o=N,a=A,l=p,h=r.f;b=null,E=0,U=null,g=h&(B|$)?null:r,N=!M&&(h&L)!==0,A=null,p=r.ctx;try{var u=(0,r.fn)(),f=r.deps;if(b!==null){var c;if(z(r,E),f!==null&&E>0)for(f.length=E+b.length,c=0;c<b.length;c++)f[E+c]=b[c];else r.deps=f=b;if(!N)for(c=E;c<f.length;c++)((x=f[c]).reactions??(x.reactions=[])).push(r)}else f!==null&&E<f.length&&(z(r,E),f.length=E);return u}finally{b=t,E=e,U=i,g=s,N=o,A=a,p=l}}function Ye(r,t){let e=t.reactions;if(e!==null){var i=e.indexOf(r);if(i!==-1){var s=e.length-1;s===0?e=t.reactions=null:(e[i]=e[s],e.pop())}}e===null&&t.f&F&&(b===null||!b.includes(t))&&(w(t,Y),t.f&(L|W)||(t.f^=W),z(t,0))}function z(r,t){var e=r.deps;if(e!==null)for(var i=t;i<e.length;i++)Ye(r,e[i])}function vt(r){var t=r.f;if(!(t&k)){w(r,S);var e=d;d=r;try{t&Ft?Ne(r):Qt(r),kt(r),Yt(r);var i=Wt(r);r.teardown=typeof i=="function"?i:null,r.version=Ht}catch(s){ze(s)}finally{d=e}}}function ke(){O>1e3&&(O=0,xe()),O++}function Qe(r){var t=r.length;if(t!==0){ke();var e=M;M=!0;try{for(var i=0;i<t;i++){var s=r[i];s.f&S||(s.f^=S);var o=[];Jt(s,o),Ge(o)}}finally{M=e}}}function Ge(r){var t=r.length;if(t!==0)for(var e=0;e<t;e++){var i=r[e];!(i.f&(k|wt))&&et(i)&&(vt(i),i.deps===null&&i.first===null&&i.nodes_start===null&&(i.teardown===null?Gt(i):i.fn=null))}}function Ke(){if(J=!1,O>1001)return;const r=ht;ht=[],Qe(r),J||(O=0)}function rt(r){J||(J=!0,queueMicrotask(Ke));for(var t=r;t.parent!==null;){t=t.parent;var e=t.f;if(e&($|B)){if(!(e&S))return;t.f^=S}}ht.push(t)}function Jt(r,t){var e=r.first,i=[];t:for(;e!==null;){var s=e.f,o=(s&B)!==0,a=o&&(s&S)!==0;if(!a&&!(s&wt))if(s&ct){o?e.f^=S:et(e)&&vt(e);var l=e.first;if(l!==null){e=l;continue}}else s&Dt&&i.push(e);var h=e.next;if(h===null){let c=e.parent;for(;c!==null;){if(r===c)break t;var u=c.next;if(u!==null){e=u;continue t}c=c.parent}}e=h}for(var f=0;f<i.length;f++)l=i[f],t.push(l),Jt(l,t)}function Z(r){var l;var t=r.f,e=(t&F)!==0;if(e&&t&k){var i=Vt(r);return ft(r),i}if(g!==null){A!==null&&A.includes(r)&&ye();var s=g.deps;b===null&&s!==null&&s[E]===r?E++:b===null?b=[r]:b.push(r),U!==null&&d!==null&&d.f&S&&!(d.f&B)&&U.includes(r)&&(w(d,P),rt(d))}else if(e&&r.deps===null){var o=r,a=o.parent;a!==null&&!((l=a.deriveds)!=null&&l.includes(o))&&(a.deriveds??(a.deriveds=[])).push(o)}return e&&(o=r,et(o)&&Xt(o)),r.v}function it(r){const t=g;try{return g=null,r()}finally{g=t}}const He=~(P|Y|S);function w(r,t){r.f=r.f&He|t}function Zt(r,t=!1,e){p={p,c:null,e:null,m:!1,s:r,x:null,l:null},Q&&!t&&(p.l={s:null,u:null,r1:[],r2:Bt(!1)})}function jt(r){const t=p;if(t!==null){const a=t.e;if(a!==null){var e=d,i=g;t.e=null;try{for(var s=0;s<a.length;s++){var o=a[s];X(o.effect),V(o.reaction),mt(o.fn)}}finally{X(e),V(i)}}p=t.p,t.m=!0}return{}}function qe(r){if(!(typeof r!="object"||!r||r instanceof EventTarget)){if(ot in r)ut(r);else if(!Array.isArray(r))for(let t in r){const e=r[t];typeof e=="object"&&e&&ot in e&&ut(e)}}}function ut(r,t=new Set){if(typeof r=="object"&&r!==null&&!(r instanceof EventTarget)&&!t.has(r)){t.add(r),r instanceof Date&&r.getTime();for(let i in r)try{ut(r[i],t)}catch{}const e=he(r);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const i=le(e);for(let s in i){const o=i[s].get;if(o)try{o.call(r)}catch{}}}}}const We=new Set,St=new Set;function H(r){var pt;var t=this,e=t.ownerDocument,i=r.type,s=((pt=r.composedPath)==null?void 0:pt.call(r))||[],o=s[0]||r.target,a=0,l=r.__root;if(l){var h=s.indexOf(l);if(h!==-1&&(t===document||t===window)){r.__root=t;return}var u=s.indexOf(t);if(u===-1)return;h<=u&&(a=h)}if(o=s[a]||r.target,o!==t){ne(r,"currentTarget",{configurable:!0,get(){return o||e}});var f=g,c=d;V(null),X(null);try{for(var x,T=[];o!==null;){var D=o.assignedSlot||o.parentNode||o.host||null;try{var C=o["__"+i];if(C!==void 0&&!o.disabled)if(oe(C)){var[re,...ie]=C;re.apply(o,[r,...ie])}else C.call(o,r)}catch(K){x?T.push(K):x=K}if(r.cancelBubble||D===t||D===null)break;o=D}if(x){for(let K of T)queueMicrotask(()=>{throw K});throw x}}finally{r.__root=t,delete r.currentTarget,V(f),X(c)}}}function Je(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function Ze(r,t){var e=d;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function $t(r,t){var e=(t&De)!==0,i,s=!r.startsWith("<!>");return()=>{i===void 0&&(i=Je(s?r:"<!>"+r),i=Nt(i));var o=e?document.importNode(i,!0):i.cloneNode(!0);return Ze(o,o),o}}function te(r,t){r!==null&&r.before(t)}const je=["touchstart","touchmove"];function $e(r){return je.includes(r)}function tr(r,t){return er(r,t)}const I=new Map;function er(r,{target:t,anchor:e,props:i={},events:s,context:o,intro:a=!0}){Fe();var l=new Set,h=c=>{for(var x=0;x<c.length;x++){var T=c[x];if(!l.has(T)){l.add(T);var D=$e(T);t.addEventListener(T,H,{passive:D});var C=I.get(T);C===void 0?(document.addEventListener(T,H,{passive:D}),I.set(T,1)):I.set(T,C+1)}}};h(ae(We)),St.add(h);var u=void 0,f=Le(()=>{var c=e??t.appendChild(we());return Ie(()=>{if(o){Zt({});var x=p;x.c=o}s&&(i.$$events=s),u=r(c,i)||{},o&&jt()}),()=>{var D;for(var x of l){t.removeEventListener(x,H);var T=I.get(x);--T===0?(document.removeEventListener(x,H),I.delete(x)):I.set(x,T)}St.delete(h),Rt.delete(u),c!==e&&((D=c.parentNode)==null||D.removeChild(c))}});return Rt.set(u,f),u}let Rt=new WeakMap;function _t(r,t){return r===t||(r==null?void 0:r[ot])===t}function rr(r={},t,e,i){return mt(()=>{var s,o;return zt(()=>{s=o,o=[],it(()=>{r!==e(...o)&&(t(r,...o),s&&_t(e(...s),r)&&t(null,...s))})}),()=>{Ve(()=>{o&&_t(e(...o),r)&&t(null,...o)})}}),r}function ir(r=!1){const t=p,e=t.l.u;if(!e)return;let i=()=>qe(t.s);if(r){let s=0,o={};const a=Pe(()=>{let l=!1;const h=t.s;for(const u in h)h[u]!==o[u]&&(o[u]=h[u],l=!0);return l&&s++,s});i=()=>Z(a)}e.b.length&&Ce(()=>{At(t,i),st(e.b)}),at(()=>{const s=it(()=>e.m.map(ue));return()=>{for(const o of s)typeof o=="function"&&o()}}),e.a.length&&at(()=>{At(t,i),st(e.a)})}function At(r,t){if(r.l.s)for(const e of r.l.s)Z(e);t()}function ee(r){p===null&&Kt(),Q&&p.l!==null?or(p).m.push(r):at(()=>{const t=it(r);if(typeof t=="function")return t})}function sr(r){p===null&&Kt(),ee(()=>()=>it(r))}function or(r){var t=r.l;return t.u??(t.u={a:[],b:[],m:[]})}const ar="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ar);Te();var nr=Object.defineProperty,lr=(r,t,e)=>t in r?nr(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,n=(r,t,e)=>lr(r,typeof t!="symbol"?t+"":t,e);class R{static generateColor(t,e){let i,s;if(!(t.length>0))i=Math.random(),s=1;else{const a=Math.floor(Math.random()*t.length),l=t[a],h=R.HEXtoHSV(l);i=h.h,s=h.s}const o=R.HSVtoRGB(i,s,e);return o.r*=.15,o.g*=.15,o.b*=.15,o}static HEXtoHSV(t){t=t.replace("#","");const e=parseInt(t.substring(0,2),16)/255,i=parseInt(t.substring(2,4),16)/255,s=parseInt(t.substring(4,6),16)/255,o=Math.max(e,i,s),a=Math.min(e,i,s);let l,h;return o===a?l=0:o===e?l=((i-s)/(o-a)+6)%6:o===i?l=(s-e)/(o-a)+2:l=(e-i)/(o-a)+4,l/=6,o===0?h=0:h=(o-a)/o,{h:l,s:h,v:o}}static HEXtoRGB(t){t=t.replace("#","");const e=parseInt(t.substring(0,2),16),i=parseInt(t.substring(2,4),16),s=parseInt(t.substring(4,6),16);return{r:e,g:i,b:s}}static HSVtoRGB(t,e,i){let s=0,o=0,a=0;const l=Math.floor(t*6),h=t*6-l,u=i*(1-e),f=i*(1-h*e),c=i*(1-(1-h)*e);switch(l%6){case 0:s=i,o=c,a=u;break;case 1:s=f,o=i,a=u;break;case 2:s=u,o=i,a=c;break;case 3:s=u,o=f,a=i;break;case 4:s=c,o=u,a=i;break;case 5:s=i,o=u,a=f;break}return{r:s,g:o,b:a}}static normalizeColor(t){return{r:t.r/255,g:t.g/255,b:t.b/255}}}const m={simResolution:128,dyeResolution:1024,captureResolution:512,densityDissipation:1,velocityDissipation:.2,pressure:.8,pressureIterations:20,curl:30,splatRadius:.25,splatForce:6e3,shading:!0,colorful:!0,colorUpdateSpeed:10,colorPalette:[],hover:!0,inverted:!1,backgroundColor:"#000000",transparent:!1,brightness:.5,bloom:!0,bloomIterations:8,bloomResolution:256,bloomIntensity:.8,bloomThreshold:.6,bloomSoftKnee:.7,sunrays:!0,sunraysResolution:196,sunraysWeight:1};class v{static getUniforms(t,e){const i={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<s;o++){const a=e.getActiveUniform(t,o).name;i[a]=e.getUniformLocation(t,a)}return i}static createProgram(t,e,i){const s=i.createProgram();return i.attachShader(s,t),i.attachShader(s,e),i.linkProgram(s),i.getProgramParameter(s,i.LINK_STATUS)||console.trace(i.getProgramInfoLog(s)),s}static compileShader(t,e,i,s){i=v.addKeywords(i,s);const o=t.createShader(e);return t.shaderSource(o,i),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS)?o:(console.trace(t.getShaderInfoLog(o)),null)}static addKeywords(t,e){if(e==null)return t;let i="";return e.forEach(s=>{i+="#define "+s+`
`}),i+t}}class hr{constructor(t,e,i){n(this,"gl"),n(this,"vertexShader"),n(this,"fragmentShaderSource"),n(this,"programs"),n(this,"activeProgram"),n(this,"uniforms"),this.gl=i,this.vertexShader=t,this.fragmentShaderSource=e,this.programs=[],this.activeProgram=null,this.uniforms={}}setKeywords(t){let e=0;for(const s of t)e+=this.hashCode(s);let i=this.programs[e];if(i==null){const s=v.compileShader(this.gl,this.gl.FRAGMENT_SHADER,this.fragmentShaderSource,t);i=v.createProgram(this.vertexShader,s,this.gl),this.programs[e]=i}i!=this.activeProgram&&(this.uniforms=v.getUniforms(i,this.gl),this.activeProgram=i)}hashCode(t){if(t.length===0)return 0;let e=0;for(let i=0;i<t.length;i++)e=(e<<5)-e+t.charCodeAt(i),e|=0;return e}bind(){this.gl.useProgram(this.activeProgram)}}class q{constructor(t,e){n(this,"id",-1),n(this,"texcoordX",0),n(this,"texcoordY",0),n(this,"prevTexcoordX",0),n(this,"prevTexcoordY",0),n(this,"deltaX",0),n(this,"deltaY",0),n(this,"down",!1),n(this,"moved",!1),n(this,"color"),this.color=R.generateColor(t,e)}updatePointerDownData(t,e,i,s,o,a){this.id=t,this.down=!0,this.moved=!1,this.texcoordX=e/s.width,this.texcoordY=1-i/s.height,this.prevTexcoordX=this.texcoordX,this.prevTexcoordY=this.texcoordY,this.deltaX=0,this.deltaY=0,this.color=R.generateColor(o,a)}updatePointerMoveData(t,e,i,s){this.prevTexcoordX=this.texcoordX,this.prevTexcoordY=this.texcoordY,this.texcoordX=t/i.width,this.texcoordY=1-e/i.height,this.deltaX=this.correctDeltaX(this.texcoordX-this.prevTexcoordX,i),this.deltaY=this.correctDeltaY(this.texcoordY-this.prevTexcoordY,i),s?this.moved=Math.abs(this.deltaX)>0||Math.abs(this.deltaY)>0:this.moved=this.down}updatePointerUpData(){this.down=!1}correctDeltaX(t,e){const i=e.width/e.height;return i<1&&(t*=i),t}correctDeltaY(t,e){const i=e.width/e.height;return i>1&&(t/=i),t}}class y{constructor(t,e,i){n(this,"gl"),n(this,"program"),n(this,"uniforms"),this.gl=i,this.uniforms={},this.program=v.createProgram(t,e,i),this.uniforms=v.getUniforms(this.program,i)}bind(){this.gl.useProgram(this.program)}}class ur{constructor(t,e){n(this,"blurProgram"),n(this,"copyProgram"),n(this,"clearProgram"),n(this,"colorProgram"),n(this,"bloomPrefilterProgram"),n(this,"bloomBlurProgram"),n(this,"bloomFinalProgram"),n(this,"sunraysMaskProgram"),n(this,"sunraysProgram"),n(this,"splatProgram"),n(this,"advectionProgram"),n(this,"divergenceProgram"),n(this,"curlProgram"),n(this,"vorticityProgram"),n(this,"pressureProgram"),n(this,"gradienSubtractProgram"),this.blurProgram=new y(e.blurVertexShader,e.blurShader,t),this.copyProgram=new y(e.baseVertexShader,e.copyShader,t),this.clearProgram=new y(e.baseVertexShader,e.clearShader,t),this.colorProgram=new y(e.baseVertexShader,e.colorShader,t),this.bloomPrefilterProgram=new y(e.baseVertexShader,e.bloomPrefilterShader,t),this.bloomBlurProgram=new y(e.baseVertexShader,e.bloomBlurShader,t),this.bloomFinalProgram=new y(e.baseVertexShader,e.bloomFinalShader,t),this.sunraysMaskProgram=new y(e.baseVertexShader,e.sunraysMaskShader,t),this.sunraysProgram=new y(e.baseVertexShader,e.sunraysShader,t),this.splatProgram=new y(e.baseVertexShader,e.splatShader,t),this.advectionProgram=new y(e.baseVertexShader,e.advectionShader,t),this.divergenceProgram=new y(e.baseVertexShader,e.divergenceShader,t),this.curlProgram=new y(e.baseVertexShader,e.curlShader,t),this.vorticityProgram=new y(e.baseVertexShader,e.vorticityShader,t),this.pressureProgram=new y(e.baseVertexShader,e.pressureShader,t),this.gradienSubtractProgram=new y(e.baseVertexShader,e.gradientSubtractShader,t)}}class _{static normalizeTexture(t,e,i){const s=new Uint8Array(t.length);let o=0;for(let a=i-1;a>=0;a--)for(let l=0;l<e;l++){const h=a*e*4+l*4;s[h+0]=_.clamp01(t[o+0])*255,s[h+1]=_.clamp01(t[o+1])*255,s[h+2]=_.clamp01(t[o+2])*255,s[h+3]=_.clamp01(t[o+3])*255,o+=4}return s}static clamp01(t){return Math.min(Math.max(t,0),1)}static framebufferToTexture(t,e){e.bindFramebuffer(e.FRAMEBUFFER,t.fbo);const i=t.width*t.height*4,s=new Float32Array(i);return e.readPixels(0,0,t.width,t.height,e.RGBA,e.FLOAT,s),s}static textureToCanvas(t,e,i){const s=document.createElement("canvas"),o=s.getContext("2d");s.width=e,s.height=i;const a=o.createImageData(e,i);return a.data.set(t),o.putImageData(a,0,0),s}static invertImageColors(t){const e=t.getContext("2d"),i=e.getImageData(0,0,t.width,t.height);for(let s=0;s<i.data.length;s+=4)i.data[s]=255-i.data[s],i.data[s+1]=255-i.data[s+1],i.data[s+2]=255-i.data[s+2];e.putImageData(i,0,0)}static downloadURI(t,e){const i=document.createElement("a");i.download=t,i.href=e,document.body.appendChild(i),i.click(),document.body.removeChild(i)}}class cr{constructor(t,e){n(this,"displayShaderSource"),n(this,"baseVertexShader"),n(this,"blurVertexShader"),n(this,"blurShader"),n(this,"copyShader"),n(this,"clearShader"),n(this,"colorShader"),n(this,"bloomPrefilterShader"),n(this,"bloomBlurShader"),n(this,"bloomFinalShader"),n(this,"sunraysMaskShader"),n(this,"sunraysShader"),n(this,"splatShader"),n(this,"advectionShader"),n(this,"divergenceShader"),n(this,"curlShader"),n(this,"vorticityShader"),n(this,"pressureShader"),n(this,"gradientSubtractShader"),this.displayShaderSource=`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform sampler2D uBloom;
    uniform sampler2D uSunrays;
    uniform sampler2D uDithering;
    uniform vec2 ditherScale;
    uniform vec2 texelSize;

    vec3 linearToGamma (vec3 color) {
    color = max(color, vec3(0));
    return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
    }

    void main () {
    vec3 c = texture2D(uTexture, vUv).rgb;

    #ifdef SHADING
    vec3 lc = texture2D(uTexture, vL).rgb;
    vec3 rc = texture2D(uTexture, vR).rgb;
    vec3 tc = texture2D(uTexture, vT).rgb;
    vec3 bc = texture2D(uTexture, vB).rgb;

    float dx = length(rc) - length(lc);
    float dy = length(tc) - length(bc);

    vec3 n = normalize(vec3(dx, dy, length(texelSize)));
    vec3 l = vec3(0.0, 0.0, 1.0);

    float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
    c *= diffuse;
    #endif

    #ifdef BLOOM
    vec3 bloom = texture2D(uBloom, vUv).rgb;
    #endif

    #ifdef SUNRAYS
    float sunrays = texture2D(uSunrays, vUv).r;
    c *= sunrays;
    #ifdef BLOOM
    bloom *= sunrays;
    #endif
    #endif

    #ifdef BLOOM
    float noise = texture2D(uDithering, vUv * ditherScale).r;
    noise = noise * 2.0 - 1.0;
    bloom += noise / 255.0;
    bloom = linearToGamma(bloom);
    c += bloom;
    #endif

    float a = max(c.r, max(c.g, c.b));
    gl_FragColor = vec4(c, a);
    }
    `,this.baseVertexShader=v.compileShader(t,t.VERTEX_SHADER,`
    precision highp float;

    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform vec2 texelSize;

    void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`),this.blurVertexShader=v.compileShader(t,t.VERTEX_SHADER,`
    precision highp float;

    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform vec2 texelSize;

    void main () {
        vUv = aPosition * 0.5 + 0.5;
        float offset = 1.33333333;
        vL = vUv - texelSize * offset;
        vR = vUv + texelSize * offset;
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`),this.blurShader=v.compileShader(t,t.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform sampler2D uTexture;

    void main () {
        vec4 sum = texture2D(uTexture, vUv) * 0.29411764;
        sum += texture2D(uTexture, vL) * 0.35294117;
        sum += texture2D(uTexture, vR) * 0.35294117;
        gl_FragColor = sum;
    }
`),this.copyShader=v.compileShader(t,t.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    uniform sampler2D uTexture;

    void main () {
        gl_FragColor = texture2D(uTexture, vUv);
    }
`),this.clearShader=v.compileShader(t,t.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    uniform float value;

    void main () {
        gl_FragColor = value * texture2D(uTexture, vUv);
    }
`),this.colorShader=v.compileShader(t,t.FRAGMENT_SHADER,`
    precision mediump float;

    uniform vec4 color;

    void main () {
        gl_FragColor = color;
    }
`),this.bloomPrefilterShader=v.compileShader(t,t.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform vec3 curve;
    uniform float threshold;

    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;
        float br = max(c.r, max(c.g, c.b));
        float rq = clamp(br - curve.x, 0.0, curve.y);
        rq = curve.z * rq * rq;
        c *= max(rq, br - threshold) / max(br, 0.0001);
        gl_FragColor = vec4(c, 0.0);
    }
`),this.bloomBlurShader=v.compileShader(t,t.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;

    void main () {
        vec4 sum = vec4(0.0);
        sum += texture2D(uTexture, vL);
        sum += texture2D(uTexture, vR);
        sum += texture2D(uTexture, vT);
        sum += texture2D(uTexture, vB);
        sum *= 0.25;
        gl_FragColor = sum;
    }
`),this.bloomFinalShader=v.compileShader(t,t.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform float intensity;

    void main () {
        vec4 sum = vec4(0.0);
        sum += texture2D(uTexture, vL);
        sum += texture2D(uTexture, vR);
        sum += texture2D(uTexture, vT);
        sum += texture2D(uTexture, vB);
        sum *= 0.25;
        gl_FragColor = sum * intensity;
    }
`),this.sunraysMaskShader=v.compileShader(t,t.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;

    void main () {
        vec4 c = texture2D(uTexture, vUv);
        float br = max(c.r, max(c.g, c.b));
        c.a = 1.0 - min(max(br * 20.0, 0.0), 0.8);
        gl_FragColor = c;
    }
`),this.sunraysShader=v.compileShader(t,t.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float weight;

    #define ITERATIONS 16

    void main () {
        float Density = 0.3;
        float Decay = 0.95;
        float Exposure = 0.7;

        vec2 coord = vUv;
        vec2 dir = vUv - 0.5;

        dir *= 1.0 / float(ITERATIONS) * Density;
        float illuminationDecay = 1.0;

        float color = texture2D(uTexture, vUv).a;

        for (int i = 0; i < ITERATIONS; i++)
        {
            coord -= dir;
            float col = texture2D(uTexture, coord).a;
            color += col * illuminationDecay * weight;
            illuminationDecay *= Decay;
        }

        gl_FragColor = vec4(color * Exposure, 0.0, 0.0, 1.0);
    }
`),this.splatShader=v.compileShader(t,t.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTarget;
    uniform float aspectRatio;
    uniform vec3 color;
    uniform vec2 point;
    uniform float radius;

    void main () {
        vec2 p = vUv - point.xy;
        p.x *= aspectRatio;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        vec3 base = texture2D(uTarget, vUv).xyz;
        gl_FragColor = vec4(base + splat, 1.0);
    }
`),this.advectionShader=v.compileShader(t,t.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uVelocity;
    uniform sampler2D uSource;
    uniform vec2 texelSize;
    uniform vec2 dyeTexelSize;
    uniform float dt;
    uniform float dissipation;

    vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
        vec2 st = uv / tsize - 0.5;

        vec2 iuv = floor(st);
        vec2 fuv = fract(st);

        vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
        vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
        vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
        vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

        return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
    }

    void main () {
    #ifdef MANUAL_FILTERING
        vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
        vec4 result = bilerp(uSource, coord, dyeTexelSize);
    #else
        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
        vec4 result = texture2D(uSource, coord);
    #endif
        float decay = 1.0 + dissipation * dt;
        gl_FragColor = result / decay;
    }`,e.supportLinearFiltering?null:["MANUAL_FILTERING"]),this.divergenceShader=v.compileShader(t,t.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uVelocity, vL).x;
        float R = texture2D(uVelocity, vR).x;
        float T = texture2D(uVelocity, vT).y;
        float B = texture2D(uVelocity, vB).y;

        vec2 C = texture2D(uVelocity, vUv).xy;
        if (vL.x < 0.0) { L = -C.x; }
        if (vR.x > 1.0) { R = -C.x; }
        if (vT.y > 1.0) { T = -C.y; }
        if (vB.y < 0.0) { B = -C.y; }

        float div = 0.5 * (R - L + T - B);
        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
    }
`),this.curlShader=v.compileShader(t,t.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uVelocity, vL).y;
        float R = texture2D(uVelocity, vR).y;
        float T = texture2D(uVelocity, vT).x;
        float B = texture2D(uVelocity, vB).x;
        float vorticity = R - L - T + B;
        gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
    }
`),this.vorticityShader=v.compileShader(t,t.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uVelocity;
    uniform sampler2D uCurl;
    uniform float curl;
    uniform float dt;

    void main () {
        float L = texture2D(uCurl, vL).x;
        float R = texture2D(uCurl, vR).x;
        float T = texture2D(uCurl, vT).x;
        float B = texture2D(uCurl, vB).x;
        float C = texture2D(uCurl, vUv).x;

        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
        force /= length(force) + 0.0001;
        force *= curl * C;
        force.y *= -1.0;

        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity += force * dt;
        velocity = min(max(velocity, -1000.0), 1000.0);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
`),this.pressureShader=v.compileShader(t,t.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uDivergence;

    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        float C = texture2D(uPressure, vUv).x;
        float divergence = texture2D(uDivergence, vUv).x;
        float pressure = (L + R + B + T - divergence) * 0.25;
        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
    }
`),this.gradientSubtractShader=v.compileShader(t,t.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity.xy -= vec2(R - L, T - B);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
`)}}class j{static ditheringTexture(t){return j.createTextureAsync("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABGUUKwAAAeK0lEQVR4AT3aBbRuVdUG4HW5hNLdSHd3CyjdEtLd3Y1wKZHuLgFJRenuBqW7u7tTlu8zx//9ZwwG8J397b3WnG/NtU9bYokl+nfffdf//e9/96uuuqrPN998/ZRTTukbb7xxP/zww/u+++7bf/vb3/YddtihP/roo32SSSbpL7zwQj/99NP7Vltt1X/88ce+8sor13Vvv/12Hzp0aF999dX7Bx980P/617/2WWedtX/55Zd9++237zPMMEP/05/+1DfYYIP+0EMP9amnnrq/9957/ZZbbum//PJLf+yxx/pJJ53URxtttL7WWmv1P//5z/3bb7/t9913X63t9ddf7wsvvHBff/31+6GHHtovu+yyPuecc/YbbrihH3300fXshRZaqF900UW1zv/85z991FFHrfXce++9ffjhh+/nnXdeXe8e7tsuv/zy+vKEE07YDzzwwNpoz4/FPfnkk32VVVbpd911V7/66qv7Mccc0y+99NI+yiij9KWWWqoffPDB/frrr6+HWfjss8/e77jjju6ev/vd72ojNrfiiiv21lo98Pzzz6/fnXjiif0f//hH33rrrWujFr7JJpvU/d5///1+wQUX9N12261PNdVUfbnlluvDDTdc//TTT+vzW2+9tY844oj9q6++6i+++GKffPLJaz3W+fXXX1fx3N/6vv/++3rOG2+8Uc/66KOP+njjjVff22OPPXr7+OOPq4oqftZZZ3VdtLkxxhijX3zxxd0XFGeOOebof/zjH/tee+1VC7nnnnv6uuuuWwt55ZVXqurbbLNNH3fccdWv77333t0innrqqX7QQQf1tddeu3uWh88zzzz9m2++6WONNVZt7txzz61njDTSSP2AAw7oM888c1988cX77bffXgvdaKON+rBhw/oEE0xQKJltttn6Lrvs0k844YS+5ppr9i233LK/8847tTYo23bbbfurr75ahYYQaFUk9/Zd31twwQX7yCOP3JuO6cIzzzxTEJppppmqUzrrc50dMmRIf+211/rPP//cF1lkkeqKToK3ii+66KL98ccf74cddlhfZ511+gMPPNCnnXbavsACC9RGJ5tssv7Pf/6zFrLrrrvWxp5++ulC3DXXXFMFff7557uigjy6TTzxxP3zzz8vNM0999zVHDT6wx/+0H/44Yc+6aST1vXW869//aufccYZfZxxxql1oLIGQp/naQLaLbvssoVkdF9ttdUKTUPcaJZZZmnbbbddW2yxxVoW2rKolg0oTgtn0KTluvbggw+2VVddtWXxLbxvJ598cptuuulaqt/CxxZet2hHW2ONNdr444/fbrrpppYCtUCxhUr1WXShpRMtm2tZaJtxxhlbEFf3iP60LLq+Hzq18Lxlg/X9l156qT3yyCP17JtvvrmFw23eeedtvhO0tf3337+eEU1pKVRbYYUV2hZbbNGuu+46KG/Rl5ZN138HPW333Xdv1tJwRJfxjcDoIjHSAb9bb731+u9///uC0MMPP1y8JnogN+aYY5aYqSYhAm1dG3vssTtagPRRRx3VL7zwwu67BImwTTHFFP1vf/tbJ2r3339/T+H7lFNO+f/d9nkWXx3NQquDUObaaaaZpr/55pt9n332qa6iVZrQ05zSEDq133771f1Qw/OJIo2xt3POOafEkMin+L2BK9VNhfumm25am3rrrbf68ccf36effvp+2223lYh88sknxbtUvT7DJ4W54oor+tlnn103tWgLALt0qzaGYoR0zz337F988UUPKop/xx13XBXYIs8888wqqE0RS4JrU6eeempPt8shUIuKe4Zn0g+/41o777xzv+SSS+q7zz33XLmaooK6vaA1rXj55ZeLvhpMY9wHpDuOuRne/v3vfy9h2nHHHTue//rXv64v4h6r0TkbmWiiiTpx+u9//1uL9eC77767ukjEPJDlsUnCR5zYKx7TC87gc0oNGRBEYzbccMNyH88gnksuuSSKVhe5FEvlNoQN8o499tjSp2WWWaZ0gaYQa41TQAJ+5ZVXlk3TtBtvvLGa9Nlnn5VQN/bA71XYZiyanbAYAsOaQMoiRhhhhE683Cj873PNNVc93Pep/vLLL19dJXooQt0hhig9++yz5QTuwUp15c477ywnIcC+S4/cCxVlCcW3Ps2QP6i3Qi+99NKFsJ9++qlHa6rwHMyawZzS/+pXvypas1CiOfroo1c2WWmllaqAHAXyhqZDw6LmJWpZeEsh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",t)}static getTextureScale(t,e,i){return{x:e/t.width,y:i/t.height}}static createTextureAsync(t,e){const i=e.createTexture();e.bindTexture(e.TEXTURE_2D,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.texImage2D(e.TEXTURE_2D,0,e.RGB,1,1,0,e.RGB,e.UNSIGNED_BYTE,new Uint8Array([255,255,255]));const s={texture:i,width:1,height:1,attach(a){return e.activeTexture(e.TEXTURE0+a),e.bindTexture(e.TEXTURE_2D,i),a}},o=new Image;return o.onload=()=>{s.width=o.width,s.height=o.height,e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGB,e.RGB,e.UNSIGNED_BYTE,o)},o.src=t,s}}class fr{constructor(t){n(this,"hasStarted",!1),n(this,"simResolution",m.simResolution),n(this,"dyeResolution",m.dyeResolution),n(this,"captureResolution",m.captureResolution),n(this,"densityDissipation",m.densityDissipation),n(this,"velocityDissipation",m.velocityDissipation),n(this,"pressure",m.pressure),n(this,"pressureIterations",m.pressureIterations),n(this,"curl",m.curl),n(this,"splatRadius",m.splatRadius),n(this,"splatForce",m.splatForce),n(this,"shading",m.shading),n(this,"colorful",m.colorful),n(this,"colorUpdateSpeed",m.colorUpdateSpeed),n(this,"colorPalette",m.colorPalette),n(this,"hover",m.hover),n(this,"backgroundColor",m.backgroundColor),n(this,"transparent",m.transparent),n(this,"brightness",m.brightness),n(this,"bloom",m.bloom),n(this,"bloomIterations",m.bloomIterations),n(this,"bloomResolution",m.bloomResolution),n(this,"bloomIntensity",m.bloomIntensity),n(this,"bloomThreshold",m.bloomThreshold),n(this,"bloomSoftKnee",m.bloomSoftKnee),n(this,"sunrays",m.sunrays),n(this,"sunraysResolution",m.sunraysResolution),n(this,"sunraysWeight",m.sunraysWeight),n(this,"paused",!1),n(this,"drawWhilePaused",!1),n(this,"_inverted",!1),n(this,"canvas"),n(this,"gl"),n(this,"ext"),n(this,"splatStack",[]),n(this,"pointers",[]),n(this,"programs"),n(this,"bloomFramebuffers",[]),n(this,"ditheringTexture"),n(this,"displayMaterial"),n(this,"lastUpdateTime",Date.now()),n(this,"colorUpdateTimer",0),n(this,"_dye"),n(this,"_velocity"),n(this,"_divergence"),n(this,"_curl"),n(this,"_pressure"),n(this,"_bloom"),n(this,"_sunrays"),n(this,"_sunraysTemp"),n(this,"animationFrameID"),n(this,"handleMouseDown",a=>{const l=this.scaleByPixelRatio(a.offsetX),h=this.scaleByPixelRatio(a.offsetY);let u=this.pointers.find(f=>f.id==-1);u||(u=new q(this.colorPalette,this.brightness)),u.updatePointerDownData(-1,l,h,this.canvas,this.colorPalette,this.brightness)}),n(this,"handleMouseMove",a=>{const l=this.scaleByPixelRatio(a.offsetX),h=this.scaleByPixelRatio(a.offsetY);let u=this.pointers.find(f=>f.id==-1);u||(u=new q(this.colorPalette,this.brightness)),u.updatePointerMoveData(l,h,this.canvas,this.hover)}),n(this,"handleMouseUp",()=>{this.hover||this.pointers[0].updatePointerUpData()}),n(this,"handleTouchStart",a=>{const l=a.targetTouches;for(;l.length>=this.pointers.length;)this.pointers.push(new q(this.colorPalette,this.brightness));for(let h=0;h<l.length;h++){const u=this.scaleByPixelRatio(l[h].pageX),f=this.scaleByPixelRatio(l[h].pageY);this.pointers[h+1].updatePointerDownData(l[h].identifier,u,f,this.canvas,this.colorPalette,this.brightness)}}),n(this,"handleTouchMove",a=>{const l=a.targetTouches;for(let h=0;h<l.length;h++){const u=this.pointers[h+1],f=this.scaleByPixelRatio(l[h].pageX),c=this.scaleByPixelRatio(l[h].pageY);u.updatePointerMoveData(f,c,this.canvas,this.hover)}}),n(this,"handleTouchEnd",a=>{const l=a.changedTouches;for(const h of l){const u=this.pointers.find(f=>f.id===h.identifier);u&&u.updatePointerUpData()}});let e=t.querySelector("canvas");e||(e=document.createElement("canvas"),t.appendChild(e)),this.canvas=e,this.canvas.style.width="100%",this.canvas.style.height="100%",this.resizeCanvas(),this.inverted=m.inverted;const{gl:i,ext:s}=this.getWebGLContext();this.gl=i,this.ext=s,this.isMobile()&&(this.dyeResolution/=2),this.ext.supportLinearFiltering||(this.dyeResolution/=2,this.shading=!1,this.bloom=!1,this.sunrays=!1);const o=new cr(this.gl,this.ext);this.blitInit(),this.ditheringTexture=j.ditheringTexture(this.gl),this.programs=new ur(this.gl,o),this.displayMaterial=new hr(o.baseVertexShader,o.displayShaderSource,this.gl),this.update=this.update.bind(this)}start(){this.pointers.push(new q(this.colorPalette,this.brightness)),this.updateKeywords(),this.initFramebuffers(),this.update(),this.canvas.addEventListener("mousedown",this.handleMouseDown),this.canvas.addEventListener("mousemove",this.handleMouseMove),window.addEventListener("mouseup",this.handleMouseUp),this.canvas.addEventListener("touchstart",this.handleTouchStart,{passive:!1,capture:!0}),this.canvas.addEventListener("touchmove",this.handleTouchMove,{passive:!1,capture:!0}),window.addEventListener("touchend",this.handleTouchEnd),this.hasStarted=!0}stop(){this.pointers=[],cancelAnimationFrame(this.animationFrameID),this.canvas.removeEventListener("mousedown",this.handleMouseDown),this.canvas.removeEventListener("mousemove",this.handleMouseMove),window.removeEventListener("mouseup",this.handleMouseUp),this.canvas.removeEventListener("touchstart",this.handleTouchStart),this.canvas.removeEventListener("touchmove",this.handleTouchMove),window.removeEventListener("touchend",this.handleTouchEnd),this.hasStarted=!1}scaleByPixelRatio(t){const e=window.devicePixelRatio||1;return Math.floor(t*e)}resizeCanvas(){const t=this.scaleByPixelRatio(this.canvas.clientWidth),e=this.scaleByPixelRatio(this.canvas.clientHeight);return this.canvas.width!=t||this.canvas.height!=e?(this.canvas.width=t,this.canvas.height=e,!0):!1}supportRenderTextureFormat(t,e,i,s){const o=t.createTexture();t.bindTexture(t.TEXTURE_2D,o),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,e,4,4,0,i,s,null);const a=t.createFramebuffer();return t.bindFramebuffer(t.FRAMEBUFFER,a),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,o,0),t.checkFramebufferStatus(t.FRAMEBUFFER)==t.FRAMEBUFFER_COMPLETE}getSupportedFormat(t,e,i,s){if(!this.supportRenderTextureFormat(t,e,i,s))switch(e){case t.R16F:return this.getSupportedFormat(t,t.RG16F,t.RG,s);case t.RG16F:return this.getSupportedFormat(t,t.RGBA16F,t.RGBA,s);default:return null}return{internalFormat:e,format:i}}getWebGLContext(){const t={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let e=this.canvas.getContext("webgl2",t);const i=!!e;i||(e=this.canvas.getContext("webgl",t)??this.canvas.getContext("experimental-webgl",t));let s,o;i?(e.getExtension("EXT_color_buffer_float"),o=e.getExtension("OES_texture_float_linear")):(s=e.getExtension("OES_texture_half_float"),o=e.getExtension("OES_texture_half_float_linear")),e.clearColor(0,0,0,1);const a=i?e.HALF_FLOAT:s?s.HALF_FLOAT_OES:0;let l,h,u;return i?(l=this.getSupportedFormat(e,e.RGBA16F,e.RGBA,a),h=this.getSupportedFormat(e,e.RG16F,e.RG,a),u=this.getSupportedFormat(e,e.R16F,e.RED,a)):(l=this.getSupportedFormat(e,e.RGBA,e.RGBA,a),h=this.getSupportedFormat(e,e.RGBA,e.RGBA,a),u=this.getSupportedFormat(e,e.RGBA,e.RGBA,a)),{gl:e,ext:{formatRGBA:l,formatRG:h,formatR:u,halfFloatTexType:a,supportLinearFiltering:o}}}isMobile(){return/Mobi|Android/i.test(navigator.userAgent)}updateKeywords(){const t=[];this.shading&&t.push("SHADING"),this.bloom&&t.push("BLOOM"),this.sunrays&&t.push("SUNRAYS"),this.displayMaterial.setKeywords(t)}initFramebuffers(){const t=this.getResolution(this.simResolution),e=this.getResolution(this.dyeResolution),i=this.ext.halfFloatTexType,s=this.ext.formatRGBA,o=this.ext.formatRG,a=this.ext.formatR,l=this.ext.supportLinearFiltering?this.gl.LINEAR:this.gl.NEAREST;this.gl.disable(this.gl.BLEND),this._dye?this._dye=this.resizeDoubleFBO(this._dye,e.width,e.height,s.internalFormat,s.format,i,l):this._dye=this.createDoubleFBO(e.width,e.height,s.internalFormat,s.format,i,l),this._velocity?this._velocity=this.resizeDoubleFBO(this._velocity,t.width,t.height,o.internalFormat,o.format,i,l):this._velocity=this.createDoubleFBO(t.width,t.height,o.internalFormat,o.format,i,l),this._divergence=this.createFBO(t.width,t.height,a.internalFormat,a.format,i,this.gl.NEAREST),this._curl=this.createFBO(t.width,t.height,a.internalFormat,a.format,i,this.gl.NEAREST),this._pressure=this.createDoubleFBO(t.width,t.height,a.internalFormat,a.format,i,this.gl.NEAREST),this.initBloomFramebuffers(),this.initSunraysFramebuffers()}getResolution(t){let e=this.gl.drawingBufferWidth/this.gl.drawingBufferHeight;e<1&&(e=1/e);const i=Math.round(t),s=Math.round(t*e);return this.gl.drawingBufferWidth>this.gl.drawingBufferHeight?{width:s,height:i}:{width:i,height:s}}createDoubleFBO(t,e,i,s,o,a){let l=this.createFBO(t,e,i,s,o,a),h=this.createFBO(t,e,i,s,o,a);return{width:t,height:e,texelSizeX:l.texelSizeX,texelSizeY:l.texelSizeY,get read(){return l},set read(u){l=u},get write(){return h},set write(u){h=u},swap(){const u=l;l=h,h=u}}}resizeFBO(t,e,i,s,o,a,l){const h=this.createFBO(e,i,s,o,a,l);return this.programs.copyProgram.bind(),this.gl.uniform1i(this.programs.copyProgram.uniforms.uTexture,t.attach(0)),this.blit(h),h}resizeDoubleFBO(t,e,i,s,o,a,l){return t.width===e&&t.height===i||(t.read=this.resizeFBO(t.read,e,i,s,o,a,l),t.write=this.createFBO(e,i,s,o,a,l),t.width=e,t.height=i,t.texelSizeX=1/e,t.texelSizeY=1/i),t}createFBO(t,e,i,s,o,a){this.gl.activeTexture(this.gl.TEXTURE0);const l=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,l),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,a),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,a),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texImage2D(this.gl.TEXTURE_2D,0,i,t,e,0,s,o,null);const h=this.gl.createFramebuffer();this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,h),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,l,0),this.gl.viewport(0,0,t,e),this.gl.clear(this.gl.COLOR_BUFFER_BIT);const u=1/t,f=1/e,c=this.gl;return{texture:l,fbo:h,width:t,height:e,texelSizeX:u,texelSizeY:f,attach(x){return c.activeTexture(c.TEXTURE0+x),c.bindTexture(c.TEXTURE_2D,l),x}}}initBloomFramebuffers(){const t=this.getResolution(this.bloomResolution),e=this.ext.halfFloatTexType,i=this.ext.formatRGBA,s=this.ext.supportLinearFiltering?this.gl.LINEAR:this.gl.NEAREST;this._bloom=this.createFBO(t.width,t.height,i.internalFormat,i.format,e,s),this.bloomFramebuffers.length=0;for(let o=0;o<this.bloomIterations;o++){const a=t.width>>o+1,l=t.height>>o+1;if(a<2||l<2)break;const h=this.createFBO(a,l,i.internalFormat,i.format,e,s);this.bloomFramebuffers.push(h)}}initSunraysFramebuffers(){const t=this.getResolution(this.sunraysResolution),e=this.ext.halfFloatTexType,i=this.ext.formatR,s=this.ext.supportLinearFiltering?this.gl.LINEAR:this.gl.NEAREST;this._sunrays=this.createFBO(t.width,t.height,i.internalFormat,i.format,e,s),this._sunraysTemp=this.createFBO(t.width,t.height,i.internalFormat,i.format,e,s)}blitInit(){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.gl.createBuffer()),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),this.gl.STATIC_DRAW),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.gl.createBuffer()),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(0,2,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(0)}blit(t,e=!1){t===null?(this.gl.viewport(0,0,this.gl.drawingBufferWidth,this.gl.drawingBufferHeight),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null)):(this.gl.viewport(0,0,t.width,t.height),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,t.fbo)),e&&(this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT)),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0)}multipleSplats(t){for(let e=0;e<t;e++){const i=R.generateColor(this.colorPalette,this.brightness);i.r*=10,i.g*=10,i.b*=10;const s=Math.random(),o=Math.random(),a=1e3*(Math.random()-.5),l=1e3*(Math.random()-.5);this.splat(s,o,a,l,i)}}splat(t,e,i,s,o){this.programs.splatProgram.bind(),this.gl.uniform1i(this.programs.splatProgram.uniforms.uTarget,this._velocity.read.attach(0)),this.gl.uniform1f(this.programs.splatProgram.uniforms.aspectRatio,this.canvas.width/this.canvas.height),this.gl.uniform2f(this.programs.splatProgram.uniforms.point,t,e),this.gl.uniform3f(this.programs.splatProgram.uniforms.color,i,s,0),this.gl.uniform1f(this.programs.splatProgram.uniforms.radius,this.correctRadius(this.splatRadius/100)),this.blit(this._velocity.write),this._velocity.swap(),this.gl.uniform1i(this.programs.splatProgram.uniforms.uTarget,this._dye.read.attach(0)),this.gl.uniform3f(this.programs.splatProgram.uniforms.color,o.r,o.g,o.b),this.blit(this._dye.write),this._dye.swap()}correctRadius(t){const e=this.canvas.width/this.canvas.height;return e>1&&(t*=e),t}update(){const t=this.calcDeltaTime();this.resizeCanvas()&&this.initFramebuffers(),this.updateColors(t),this.applyInputs(),this.paused||this.step(t),this.render(null),this.animationFrameID=requestAnimationFrame(this.update)}calcDeltaTime(){const t=Date.now();let e=(t-this.lastUpdateTime)/1e3;return e=Math.min(e,.016666),this.lastUpdateTime=t,e}updateColors(t){this.colorful&&(this.colorUpdateTimer+=t*this.colorUpdateSpeed,this.colorUpdateTimer>=1&&(this.colorUpdateTimer=this.wrap(this.colorUpdateTimer,0,1),this.pointers.forEach(e=>{e.color=R.generateColor(this.colorPalette,this.brightness)})))}wrap(t,e,i){const s=i-e;return s==0?e:(t-e)%s+e}applyInputs(){this.splatStack.length>0&&this.multipleSplats(this.splatStack.pop()),this.pointers.forEach(t=>{t.moved&&(t.moved=!1,this.splatPointer(t))})}splatPointer(t){if(this.paused&&!this.drawWhilePaused)return;const e=t.deltaX*this.splatForce,i=t.deltaY*this.splatForce;this.splat(t.texcoordX,t.texcoordY,e,i,t.color)}step(t){this.gl.disable(this.gl.BLEND),this.programs.curlProgram.bind(),this.gl.uniform2f(this.programs.curlProgram.uniforms.texelSize,this._velocity.texelSizeX,this._velocity.texelSizeY),this.gl.uniform1i(this.programs.curlProgram.uniforms.uVelocity,this._velocity.read.attach(0)),this.blit(this._curl),this.programs.vorticityProgram.bind(),this.gl.uniform2f(this.programs.vorticityProgram.uniforms.texelSize,this._velocity.texelSizeX,this._velocity.texelSizeY),this.gl.uniform1i(this.programs.vorticityProgram.uniforms.uVelocity,this._velocity.read.attach(0)),this.gl.uniform1i(this.programs.vorticityProgram.uniforms.uCurl,this._curl.attach(1)),this.gl.uniform1f(this.programs.vorticityProgram.uniforms.curl,this.curl),this.gl.uniform1f(this.programs.vorticityProgram.uniforms.dt,t),this.blit(this._velocity.write),this._velocity.swap(),this.programs.divergenceProgram.bind(),this.gl.uniform2f(this.programs.divergenceProgram.uniforms.texelSize,this._velocity.texelSizeX,this._velocity.texelSizeY),this.gl.uniform1i(this.programs.divergenceProgram.uniforms.uVelocity,this._velocity.read.attach(0)),this.blit(this._divergence),this.programs.clearProgram.bind(),this.gl.uniform1i(this.programs.clearProgram.uniforms.uTexture,this._pressure.read.attach(0)),this.gl.uniform1f(this.programs.clearProgram.uniforms.value,this.pressure),this.blit(this._pressure.write),this._pressure.swap(),this.programs.pressureProgram.bind(),this.gl.uniform2f(this.programs.pressureProgram.uniforms.texelSize,this._velocity.texelSizeX,this._velocity.texelSizeY),this.gl.uniform1i(this.programs.pressureProgram.uniforms.uDivergence,this._divergence.attach(0));for(let i=0;i<this.pressureIterations;i++)this.gl.uniform1i(this.programs.pressureProgram.uniforms.uPressure,this._pressure.read.attach(1)),this.blit(this._pressure.write),this._pressure.swap();this.programs.gradienSubtractProgram.bind(),this.gl.uniform2f(this.programs.gradienSubtractProgram.uniforms.texelSize,this._velocity.texelSizeX,this._velocity.texelSizeY),this.gl.uniform1i(this.programs.gradienSubtractProgram.uniforms.uPressure,this._pressure.read.attach(0)),this.gl.uniform1i(this.programs.gradienSubtractProgram.uniforms.uVelocity,this._velocity.read.attach(1)),this.blit(this._velocity.write),this._velocity.swap(),this.programs.advectionProgram.bind(),this.gl.uniform2f(this.programs.advectionProgram.uniforms.texelSize,this._velocity.texelSizeX,this._velocity.texelSizeY),this.ext.supportLinearFiltering||this.gl.uniform2f(this.programs.advectionProgram.uniforms.dyeTexelSize,this._velocity.texelSizeX,this._velocity.texelSizeY);const e=this._velocity.read.attach(0);this.gl.uniform1i(this.programs.advectionProgram.uniforms.uVelocity,e),this.gl.uniform1i(this.programs.advectionProgram.uniforms.uSource,e),this.gl.uniform1f(this.programs.advectionProgram.uniforms.dt,t),this.gl.uniform1f(this.programs.advectionProgram.uniforms.dissipation,this.velocityDissipation),this.blit(this._velocity.write),this._velocity.swap(),this.ext.supportLinearFiltering||this.gl.uniform2f(this.programs.advectionProgram.uniforms.dyeTexelSize,this._dye.texelSizeX,this._dye.texelSizeY),this.gl.uniform1i(this.programs.advectionProgram.uniforms.uVelocity,this._velocity.read.attach(0)),this.gl.uniform1i(this.programs.advectionProgram.uniforms.uSource,this._dye.read.attach(1)),this.gl.uniform1f(this.programs.advectionProgram.uniforms.dissipation,this.densityDissipation),this.blit(this._dye.write),this._dye.swap()}render(t){this.bloom&&this.applyBloom(this._dye.read,this._bloom),this.sunrays&&(this.applySunrays(this._dye.read,this._dye.write,this._sunrays),this.blur(this._sunrays,this._sunraysTemp,1)),t===null||!this.transparent?(this.gl.blendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.enable(this.gl.BLEND)):this.gl.disable(this.gl.BLEND),this.transparent||this.drawColor(t,R.normalizeColor(R.HEXtoRGB(this.backgroundColor))),this.drawDisplay(t)}drawColor(t,e){this.programs.colorProgram.bind(),this.gl.uniform4f(this.programs.colorProgram.uniforms.color,e.r,e.g,e.b,1),this.blit(t)}drawDisplay(t){const e=t===null?this.gl.drawingBufferWidth:t.width,i=t===null?this.gl.drawingBufferHeight:t.height;if(this.displayMaterial.bind(),this.shading&&this.gl.uniform2f(this.displayMaterial.uniforms.texelSize,1/e,1/i),this.gl.uniform1i(this.displayMaterial.uniforms.uTexture,this._dye.read.attach(0)),this.bloom){this.gl.uniform1i(this.displayMaterial.uniforms.uBloom,this._bloom.attach(1)),this.gl.uniform1i(this.displayMaterial.uniforms.uDithering,this.ditheringTexture.attach(2));const s=j.getTextureScale(this.ditheringTexture,e,i);this.gl.uniform2f(this.displayMaterial.uniforms.ditherScale,s.x,s.y)}this.sunrays&&this.gl.uniform1i(this.displayMaterial.uniforms.uSunrays,this._sunrays.attach(3)),this.blit(t)}applyBloom(t,e){if(this.bloomFramebuffers.length<2)return;let i=e;this.gl.disable(this.gl.BLEND),this.programs.bloomPrefilterProgram.bind();const s=this.bloomThreshold*this.bloomSoftKnee+1e-4,o=this.bloomThreshold-s,a=s*2,l=.25/s;this.gl.uniform3f(this.programs.bloomPrefilterProgram.uniforms.curve,o,a,l),this.gl.uniform1f(this.programs.bloomPrefilterProgram.uniforms.threshold,this.bloomThreshold),this.gl.uniform1i(this.programs.bloomPrefilterProgram.uniforms.uTexture,t.attach(0)),this.blit(i),this.programs.bloomBlurProgram.bind();for(const h of this.bloomFramebuffers)h&&(this.gl.uniform2f(this.programs.bloomBlurProgram.uniforms.texelSize,i.texelSizeX,i.texelSizeY),this.gl.uniform1i(this.programs.bloomBlurProgram.uniforms.uTexture,i.attach(0)),this.blit(h),i=h);this.gl.blendFunc(this.gl.ONE,this.gl.ONE),this.gl.enable(this.gl.BLEND);for(let h=this.bloomFramebuffers.length-2;h>=0;h--){const u=this.bloomFramebuffers[h];this.gl.uniform2f(this.programs.bloomBlurProgram.uniforms.texelSize,i.texelSizeX,i.texelSizeY),this.gl.uniform1i(this.programs.bloomBlurProgram.uniforms.uTexture,i.attach(0)),this.gl.viewport(0,0,u.width,u.height),this.blit(u),i=u}this.gl.disable(this.gl.BLEND),this.programs.bloomFinalProgram.bind(),this.gl.uniform2f(this.programs.bloomFinalProgram.uniforms.texelSize,i.texelSizeX,i.texelSizeY),this.gl.uniform1i(this.programs.bloomFinalProgram.uniforms.uTexture,i.attach(0)),this.gl.uniform1f(this.programs.bloomFinalProgram.uniforms.intensity,this.bloomIntensity),this.blit(e)}applySunrays(t,e,i){this.gl.disable(this.gl.BLEND),this.programs.sunraysMaskProgram.bind(),this.gl.uniform1i(this.programs.sunraysMaskProgram.uniforms.uTexture,t.attach(0)),this.blit(e),this.programs.sunraysProgram.bind(),this.gl.uniform1f(this.programs.sunraysProgram.uniforms.weight,this.sunraysWeight),this.gl.uniform1i(this.programs.sunraysProgram.uniforms.uTexture,e.attach(0)),this.blit(i)}blur(t,e,i){this.programs.blurProgram.bind();for(let s=0;s<i;s++)this.gl.uniform2f(this.programs.blurProgram.uniforms.texelSize,t.texelSizeX,0),this.gl.uniform1i(this.programs.blurProgram.uniforms.uTexture,t.attach(0)),this.blit(e),this.gl.uniform2f(this.programs.blurProgram.uniforms.texelSize,0,t.texelSizeY),this.gl.uniform1i(this.programs.blurProgram.uniforms.uTexture,e.attach(0)),this.blit(t)}captureScreenshot(){const t=this.getResolution(this.captureResolution),e=this.createFBO(t.width,t.height,this.ext.formatRGBA.internalFormat,this.ext.formatRGBA.format,this.ext.halfFloatTexType,this.gl.NEAREST);this.render(e);const i=_.framebufferToTexture(e,this.gl),s=_.normalizeTexture(i,e.width,e.height),o=_.textureToCanvas(s,e.width,e.height);this.inverted&&_.invertImageColors(o);const a=o.toDataURL();_.downloadURI("fluid.png",a),URL.revokeObjectURL(a)}get inverted(){return this._inverted}set inverted(t){this._inverted=t,this.canvas.style.filter=t?"invert(1)":"none"}}class mr{constructor(t=document.body){n(this,"container"),n(this,"simulation"),this.container=t,this.container.style.outline="none",this.container.style.position="relative",this.container.style.display="flex",this.container.style.justifyContent="center",this.container.style.alignItems="center",this.simulation=new fr(t)}start(){this.simulation.hasStarted||this.simulation.start()}stop(){this.simulation.hasStarted&&this.simulation.stop()}togglePause(t=!1){return this.simulation.hasStarted?(this.simulation.paused=!this.simulation.paused,this.simulation.paused&&(this.simulation.drawWhilePaused=t),this.simulation.paused):!1}multipleSplats(t){this.simulation.hasStarted&&this.simulation.multipleSplats(t)}splatAtLocation(t,e,i,s,o){if(!this.simulation.hasStarted)return;const a=t/this.simulation.canvas.width,l=1-e/this.simulation.canvas.clientHeight;let h=o?R.HEXtoRGB(o):void 0;h||(h=R.generateColor(this.simulation.colorPalette,this.simulation.brightness)),h.r*=10,h.g*=10,h.b*=10,this.simulation.splat(a,l,i,s,h)}downloadScreenshot(){this.simulation.hasStarted&&this.simulation.captureScreenshot()}setConfig(t){t.simResolution!==void 0&&(this.simulation.simResolution=t.simResolution),t.dyeResolution!==void 0&&(this.simulation.dyeResolution=t.dyeResolution),t.captureResolution!==void 0&&(this.simulation.captureResolution=t.captureResolution),t.densityDissipation!==void 0&&(this.simulation.densityDissipation=t.densityDissipation),t.velocityDissipation!==void 0&&(this.simulation.velocityDissipation=t.velocityDissipation),t.pressure!==void 0&&(this.simulation.pressure=t.pressure),t.pressureIterations!==void 0&&(this.simulation.pressureIterations=t.pressureIterations),t.curl!==void 0&&(this.simulation.curl=t.curl),t.splatRadius!==void 0&&(this.simulation.splatRadius=t.splatRadius),t.splatForce!==void 0&&(this.simulation.splatForce=t.splatForce),t.shading!==void 0&&(this.simulation.shading=t.shading),t.colorful!==void 0&&(this.simulation.colorful=t.colorful),t.colorUpdateSpeed!==void 0&&(this.simulation.colorUpdateSpeed=t.colorUpdateSpeed),t.colorPalette!==void 0&&(this.simulation.colorPalette=t.colorPalette),t.hover!==void 0&&(this.simulation.hover=t.hover),t.backgroundColor!==void 0&&(this.simulation.backgroundColor=t.backgroundColor),t.inverted!==void 0&&(this.simulation.inverted=t.inverted),t.transparent!==void 0&&(this.simulation.transparent=t.transparent),t.brightness!==void 0&&(this.simulation.brightness=t.brightness),t.bloom!==void 0&&(this.simulation.bloom=t.bloom),t.bloomIterations!==void 0&&(this.simulation.bloomIterations=t.bloomIterations),t.bloomResolution!==void 0&&(this.simulation.bloomResolution=t.bloomResolution),t.bloomIntensity!==void 0&&(this.simulation.bloomIntensity=t.bloomIntensity),t.bloomThreshold!==void 0&&(this.simulation.bloomThreshold=t.bloomThreshold),t.bloomSoftKnee!==void 0&&(this.simulation.bloomSoftKnee=t.bloomSoftKnee),t.sunrays!==void 0&&(this.simulation.sunrays=t.sunrays),t.sunraysResolution!==void 0&&(this.simulation.sunraysResolution=t.sunraysResolution),t.sunraysWeight!==void 0&&(this.simulation.sunraysWeight=t.sunraysWeight),this.simulation.hasStarted&&((t.dyeResolution!==void 0||t.simResolution!==void 0)&&this.simulation.initFramebuffers(),(t.shading!==void 0||t.bloom!==void 0||t.sunrays!==void 0)&&this.simulation.updateKeywords())}}var dr=$t('<div style="width: 100vw; height 100vh"></div>');function gr(r,t){Zt(t,!1);let e=Se(),i;ee(()=>{i=new mr(Z(e)),i.setConfig({colorPalette:["#e8f8ff"],backgroundColor:"#ffffff",curl:0,bloom:!1}),i.start()}),sr(()=>{i.stop()}),ir();var s=dr();rr(s,o=>_e(e,o),()=>Z(e)),te(r,s),jt()}var vr=$t('<main><div id="landing-hero" class="svelte-1sw3ylg"><!> <div id="landing-text" class="svelte-1sw3ylg"><h1 class="svelte-1sw3ylg">Brandt YouRan Li</h1></div></div></main>');function pr(r){var t=vr(),e=bt(t),i=bt(e);gr(i,{}),te(r,t)}tr(pr,{target:document.getElementById("app")});
