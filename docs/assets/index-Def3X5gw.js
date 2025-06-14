(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ye=globalThis,Ve=ye.ShadowRoot&&(ye.ShadyCSS===void 0||ye.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Be=Symbol(),Je=new WeakMap;let Ct=class{constructor(e,r,t){if(this._$cssResult$=!0,t!==Be)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Ve&&e===void 0){const t=r!==void 0&&r.length===1;t&&(e=Je.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&Je.set(r,e))}return e}toString(){return this.cssText}};const It=s=>new Ct(typeof s=="string"?s:s+"",void 0,Be),$=(s,...e)=>{const r=s.length===1?s[0]:e.reduce((t,o,n)=>t+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[n+1],s[0]);return new Ct(r,s,Be)},Nt=(s,e)=>{if(Ve)s.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const t=document.createElement("style"),o=ye.litNonce;o!==void 0&&t.setAttribute("nonce",o),t.textContent=r.cssText,s.appendChild(t)}},Xe=Ve?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let r="";for(const t of e.cssRules)r+=t.cssText;return It(r)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Dt,defineProperty:qt,getOwnPropertyDescriptor:Ft,getOwnPropertyNames:Mt,getOwnPropertySymbols:Tt,getPrototypeOf:Rt}=Object,j=globalThis,et=j.trustedTypes,Ut=et?et.emptyScript:"",ke=j.reactiveElementPolyfillSupport,H=(s,e)=>s,ve={toAttribute(s,e){switch(e){case Boolean:s=s?Ut:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let r=s;switch(e){case Boolean:r=s!==null;break;case Number:r=s===null?null:Number(s);break;case Object:case Array:try{r=JSON.parse(s)}catch{r=null}}return r}},Qe=(s,e)=>!Dt(s,e),tt={attribute:!0,type:String,converter:ve,reflect:!1,useDefault:!1,hasChanged:Qe};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),j.litPropertyMetadata??(j.litPropertyMetadata=new WeakMap);let T=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=tt){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){const t=Symbol(),o=this.getPropertyDescriptor(e,t,r);o!==void 0&&qt(this.prototype,e,o)}}static getPropertyDescriptor(e,r,t){const{get:o,set:n}=Ft(this.prototype,e)??{get(){return this[r]},set(a){this[r]=a}};return{get:o,set(a){const p=o==null?void 0:o.call(this);n==null||n.call(this,a),this.requestUpdate(e,p,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??tt}static _$Ei(){if(this.hasOwnProperty(H("elementProperties")))return;const e=Rt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(H("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(H("properties"))){const r=this.properties,t=[...Mt(r),...Tt(r)];for(const o of t)this.createProperty(o,r[o])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[t,o]of r)this.elementProperties.set(t,o)}this._$Eh=new Map;for(const[r,t]of this.elementProperties){const o=this._$Eu(r,t);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const t=new Set(e.flat(1/0).reverse());for(const o of t)r.unshift(Xe(o))}else e!==void 0&&r.push(Xe(e));return r}static _$Eu(e,r){const t=r.attribute;return t===!1?void 0:typeof t=="string"?t:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const t of r.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Nt(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var t;return(t=r.hostConnected)==null?void 0:t.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var t;return(t=r.hostDisconnected)==null?void 0:t.call(r)})}attributeChangedCallback(e,r,t){this._$AK(e,t)}_$ET(e,r){var n;const t=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,t);if(o!==void 0&&t.reflect===!0){const a=(((n=t.converter)==null?void 0:n.toAttribute)!==void 0?t.converter:ve).toAttribute(r,t.type);this._$Em=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,r){var n,a;const t=this.constructor,o=t._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const p=t.getPropertyOptions(o),u=typeof p.converter=="function"?{fromAttribute:p.converter}:((n=p.converter)==null?void 0:n.fromAttribute)!==void 0?p.converter:ve;this._$Em=o,this[o]=u.fromAttribute(r,p.type)??((a=this._$Ej)==null?void 0:a.get(o))??null,this._$Em=null}}requestUpdate(e,r,t){var o;if(e!==void 0){const n=this.constructor,a=this[e];if(t??(t=n.getPropertyOptions(e)),!((t.hasChanged??Qe)(a,r)||t.useDefault&&t.reflect&&a===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(n._$Eu(e,t))))return;this.C(e,r,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:t,reflect:o,wrapped:n},a){t&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??r??this[e]),n!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||t||(r=void 0),this._$AL.set(e,r)),o===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,a]of o){const{wrapped:p}=a,u=this[n];p!==!0||this._$AL.has(n)||u===void 0||this.C(n,void 0,a,u)}}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$EO)==null||t.forEach(o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)}),this.update(r)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(t=>{var o;return(o=t.hostUpdated)==null?void 0:o.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(e){}firstUpdated(e){}};T.elementStyles=[],T.shadowRootOptions={mode:"open"},T[H("elementProperties")]=new Map,T[H("finalized")]=new Map,ke==null||ke({ReactiveElement:T}),(j.reactiveElementVersions??(j.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=globalThis,be=Y.trustedTypes,rt=be?be.createPolicy("lit-html",{createHTML:s=>s}):void 0,wt="$lit$",O=`lit$${Math.random().toFixed(9).slice(2)}$`,$t="?"+O,Lt=`<${$t}>`,F=document,z=()=>F.createComment(""),G=s=>s===null||typeof s!="object"&&typeof s!="function",He=Array.isArray,Vt=s=>He(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Ee=`[ 	
\f\r]`,Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,st=/-->/g,ot=/>/g,N=RegExp(`>|${Ee}(?:([^\\s"'>=/]+)(${Ee}*=${Ee}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nt=/'/g,at=/"/g,_t=/^(?:script|style|textarea|title)$/i,Bt=s=>(e,...r)=>({_$litType$:s,strings:e,values:r}),m=Bt(1),M=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),it=new WeakMap,D=F.createTreeWalker(F,129);function xt(s,e){if(!He(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return rt!==void 0?rt.createHTML(e):e}const Qt=(s,e)=>{const r=s.length-1,t=[];let o,n=e===2?"<svg>":e===3?"<math>":"",a=Q;for(let p=0;p<r;p++){const u=s[p];let d,l,i=-1,c=0;for(;c<u.length&&(a.lastIndex=c,l=a.exec(u),l!==null);)c=a.lastIndex,a===Q?l[1]==="!--"?a=st:l[1]!==void 0?a=ot:l[2]!==void 0?(_t.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=N):l[3]!==void 0&&(a=N):a===N?l[0]===">"?(a=o??Q,i=-1):l[1]===void 0?i=-2:(i=a.lastIndex-l[2].length,d=l[1],a=l[3]===void 0?N:l[3]==='"'?at:nt):a===at||a===nt?a=N:a===st||a===ot?a=Q:(a=N,o=void 0);const h=a===N&&s[p+1].startsWith("/>")?" ":"";n+=a===Q?u+Lt:i>=0?(t.push(d),u.slice(0,i)+wt+u.slice(i)+O+h):u+O+(i===-2?p:h)}return[xt(s,n+(s[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),t]};class W{constructor({strings:e,_$litType$:r},t){let o;this.parts=[];let n=0,a=0;const p=e.length-1,u=this.parts,[d,l]=Qt(e,r);if(this.el=W.createElement(d,t),D.currentNode=this.el.content,r===2||r===3){const i=this.el.content.firstChild;i.replaceWith(...i.childNodes)}for(;(o=D.nextNode())!==null&&u.length<p;){if(o.nodeType===1){if(o.hasAttributes())for(const i of o.getAttributeNames())if(i.endsWith(wt)){const c=l[a++],h=o.getAttribute(i).split(O),y=/([.?@])?(.*)/.exec(c);u.push({type:1,index:n,name:y[2],strings:h,ctor:y[1]==="."?Yt:y[1]==="?"?zt:y[1]==="@"?Gt:Ce}),o.removeAttribute(i)}else i.startsWith(O)&&(u.push({type:6,index:n}),o.removeAttribute(i));if(_t.test(o.tagName)){const i=o.textContent.split(O),c=i.length-1;if(c>0){o.textContent=be?be.emptyScript:"";for(let h=0;h<c;h++)o.append(i[h],z()),D.nextNode(),u.push({type:2,index:++n});o.append(i[c],z())}}}else if(o.nodeType===8)if(o.data===$t)u.push({type:2,index:n});else{let i=-1;for(;(i=o.data.indexOf(O,i+1))!==-1;)u.push({type:7,index:n}),i+=O.length-1}n++}}static createElement(e,r){const t=F.createElement("template");return t.innerHTML=e,t}}function R(s,e,r=s,t){var a,p;if(e===M)return e;let o=t!==void 0?(a=r._$Co)==null?void 0:a[t]:r._$Cl;const n=G(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==n&&((p=o==null?void 0:o._$AO)==null||p.call(o,!1),n===void 0?o=void 0:(o=new n(s),o._$AT(s,r,t)),t!==void 0?(r._$Co??(r._$Co=[]))[t]=o:r._$Cl=o),o!==void 0&&(e=R(s,o._$AS(s,e.values),o,t)),e}class Ht{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:t}=this._$AD,o=((e==null?void 0:e.creationScope)??F).importNode(r,!0);D.currentNode=o;let n=D.nextNode(),a=0,p=0,u=t[0];for(;u!==void 0;){if(a===u.index){let d;u.type===2?d=new re(n,n.nextSibling,this,e):u.type===1?d=new u.ctor(n,u.name,u.strings,this,e):u.type===6&&(d=new Wt(n,this,e)),this._$AV.push(d),u=t[++p]}a!==(u==null?void 0:u.index)&&(n=D.nextNode(),a++)}return D.currentNode=F,o}p(e){let r=0;for(const t of this._$AV)t!==void 0&&(t.strings!==void 0?(t._$AI(e,t,r),r+=t.strings.length-2):t._$AI(e[r])),r++}}class re{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,t,o){this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=t,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=R(this,e,r),G(e)?e===C||e==null||e===""?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==M&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Vt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==C&&G(this._$AH)?this._$AA.nextSibling.data=e:this.T(F.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:t}=e,o=typeof t=="number"?this._$AC(e):(t.el===void 0&&(t.el=W.createElement(xt(t.h,t.h[0]),this.options)),t);if(((n=this._$AH)==null?void 0:n._$AD)===o)this._$AH.p(r);else{const a=new Ht(o,this),p=a.u(this.options);a.p(r),this.T(p),this._$AH=a}}_$AC(e){let r=it.get(e.strings);return r===void 0&&it.set(e.strings,r=new W(e)),r}k(e){He(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let t,o=0;for(const n of e)o===r.length?r.push(t=new re(this.O(z()),this.O(z()),this,this.options)):t=r[o],t._$AI(n),o++;o<r.length&&(this._$AR(t&&t._$AB.nextSibling,o),r.length=o)}_$AR(e=this._$AA.nextSibling,r){var t;for((t=this._$AP)==null?void 0:t.call(this,!1,!0,r);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class Ce{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,t,o,n){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=r,this._$AM=o,this.options=n,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=C}_$AI(e,r=this,t,o){const n=this.strings;let a=!1;if(n===void 0)e=R(this,e,r,0),a=!G(e)||e!==this._$AH&&e!==M,a&&(this._$AH=e);else{const p=e;let u,d;for(e=n[0],u=0;u<n.length-1;u++)d=R(this,p[t+u],r,u),d===M&&(d=this._$AH[u]),a||(a=!G(d)||d!==this._$AH[u]),d===C?e=C:e!==C&&(e+=(d??"")+n[u+1]),this._$AH[u]=d}a&&!o&&this.j(e)}j(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Yt extends Ce{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===C?void 0:e}}class zt extends Ce{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==C)}}class Gt extends Ce{constructor(e,r,t,o,n){super(e,r,t,o,n),this.type=5}_$AI(e,r=this){if((e=R(this,e,r,0)??C)===M)return;const t=this._$AH,o=e===C&&t!==C||e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive,n=e!==C&&(t===C||o);o&&this.element.removeEventListener(this.name,this,t),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class Wt{constructor(e,r,t){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(e){R(this,e)}}const Oe=Y.litHtmlPolyfillSupport;Oe==null||Oe(W,re),(Y.litHtmlVersions??(Y.litHtmlVersions=[])).push("3.3.0");const Zt=(s,e,r)=>{const t=(r==null?void 0:r.renderBefore)??e;let o=t._$litPart$;if(o===void 0){const n=(r==null?void 0:r.renderBefore)??null;t._$litPart$=o=new re(e.insertBefore(z(),n),n,void 0,r??{})}return o._$AI(s),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=globalThis;let g=class extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Zt(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return M}};var Pt;g._$litElement$=!0,g.finalized=!0,(Pt=q.litElementHydrateSupport)==null||Pt.call(q,{LitElement:g});const je=q.litElementPolyfillSupport;je==null||je({LitElement:g});(q.litElementVersions??(q.litElementVersions=[])).push("4.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=s=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jt={attribute:!0,type:String,converter:ve,reflect:!1,hasChanged:Qe},Xt=(s=Jt,e,r)=>{const{kind:t,metadata:o}=r;let n=globalThis.litPropertyMetadata.get(o);if(n===void 0&&globalThis.litPropertyMetadata.set(o,n=new Map),t==="setter"&&((s=Object.create(s)).wrapped=!0),n.set(r.name,s),t==="accessor"){const{name:a}=r;return{set(p){const u=e.get.call(this);e.set.call(this,p),this.requestUpdate(a,u,s)},init(p){return p!==void 0&&this.C(a,void 0,s,p),p}}}if(t==="setter"){const{name:a}=r;return function(p){const u=this[a];e.call(this,p),this.requestUpdate(a,u,s)}}throw Error("Unsupported decorator location: "+t)};function k(s){return(e,r)=>typeof r=="object"?Xt(s,e,r):((t,o,n)=>{const a=o.hasOwnProperty(n);return o.constructor.createProperty(n,t),a?Object.getOwnPropertyDescriptor(o,n):void 0})(s,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function we(s){return k({...s,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const er=(s,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(s,e,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function se(s,e){return(r,t,o)=>{const n=a=>{var p;return((p=a.renderRoot)==null?void 0:p.querySelector(s))??null};return er(r,t,{get(){return n(this)}})}}const x=$`
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
	display: block;
}
body {
	line-height: 1;
}
ol,
ul {
	list-style: none;
}
blockquote,
q {
	quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
	content: "";
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`,S=$`
* {
	box-sizing: border-box;
}
`,tr=$`
.controller-content-volume {
	writing-mode: vertical-lr;
	direction: rtl;
	cursor: pointer;
	position: relative;
	width: 60px;
	height: 180px;
	border: 1px solid #a7a59a;
	border-radius: 2px;
	text-align: center;
}

.volume-adjust-meter {
	writing-mode: horizontal-tb;
	width: 100%;
	height: 100%;
	padding: 12px 0;
	position: relative;
}

.controller-content-volume::before {
	content: "";
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 12px;
	margin: 0 auto;
	height: calc(100% - 24px);
	width: calc(100% - 16px);
	background: repeating-linear-gradient(
		to bottom,
		#a7a59a,
		#a7a59a 1px,
		transparent 1px,
		transparent 16px
	);
}

.volume-adjust-meter-indicator {
	background-color: #dacba6;
	position: absolute;
	display: block;
	height: 18px;
	width: 40px;
	border-radius: 4px;
	box-shadow: 0 4px 0 #c4b694;
	margin: 0 auto;
	padding-top: 6px;
	padding-left: 2px;
	left: 0;
	right: 0;
}

.volume-adjust-meter-indicator::before {
	content: "";
	display: block;
	height: 2px;
	background-color: #31384c;
	box-shadow: inset 0 1px 0 #6f778d, inset 1px 0 0 #6f778d;
}

.volume-adjust-meter::before {
	content: "";
	display: inline-block;
	width: 6px;
	background-color: #1c181d;
	box-shadow: inset 1.5px 0 0 rgba(255, 255, 255, 0.5),
		4px 0 0 #dbd7cc, -4px 0 0 #dbd7cc;
	height: 100%;
}

.volume-adjust {
	opacity: 0;
	position: absolute;
	display: block;
	height: calc(100% - 24px);
	top: 0;
	left: 0;
	right: 0;
	bottom: 12px;
	cursor: pointer;
}

.volume-adjust-meter-label {
	color: #87857d;
	writing-mode: horizontal-tb;
	position: absolute;
	font-size: 11px;
	display: block;
	top: -6px;
	left: 0;
	right: 0;
	margin: 0 auto;
	text-align: center;
	width: 42px;
	height: 38px;
	background-color: #dbd7cc;
}
`;function St(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ne={exports:{}},lt;function At(){return lt||(lt=1,function(s,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},s.exports=e.default}(ne,ne.exports)),ne.exports}var rr=At();const ae=St(rr);class w{constructor(){this.hosts=new Set,this.queueKeySets=["123456789","qwertyuio","asdfghjkl"],this.playerKeyToKeys={track1:this.queueKeySets[0],track2:this.queueKeySets[1],track3:this.queueKeySets[2]},this.value={players:new Map([["track1",null],["track2",null],["track3",null]]),videoIds:new Map([["track1","jL99kKewy_Q"],["track2",""],["track3",""]]),queuePoints:new Map([["track1",{}],["track2",{}],["track3",{}]]),playerDurations:new Map([["track1",0],["track2",0],["track3",0]]),lastPlayerKey:"track1",lastQueueKey:null,showRecordModal:!1}}static getInstance(e){return w._instance||(w._instance=new w),e&&(w._instance.hosts.add(e),e.addController(w._instance)),w._instance}getPlayerKeyByQueueKey(e){for(const[r,t]of Object.entries(this.playerKeyToKeys))if(t.includes(e))return r;return null}getShowRecordModal(){return this.value.showRecordModal}setShowRecordModal(e){this.value.showRecordModal=e,this.requestUpdate()}getLastPlayerKey(){return this.value.lastPlayerKey}getPlayerKeys(){return Object.keys(this.playerKeyToKeys)}getVideoIds(){return this.value.videoIds}getLastQueueKey(){return this.value.lastQueueKey}setVideoId(e,r){this.value.videoIds.set(e,r),this.requestUpdate()}updateLastQueuePoint(e){if(!this.value.lastPlayerKey||!this.value.lastQueueKey)return;const r=this.value.queuePoints.get(this.value.lastPlayerKey);r&&(r[this.value.lastQueueKey]=e,this.requestUpdate())}setLastPlayerKey(e){this.value.lastPlayerKey!==e&&(this.value.lastPlayerKey=e,this.requestUpdate())}setLastQueueKey(e){this.value.lastQueueKey!==e&&(this.value.lastQueueKey=e,this.requestUpdate())}addInitialPlayer(e,r){this.value.players.set(e,r),this.requestUpdate()}setPlayer(e,r){this.value.players.set(e,r),this.value.lastPlayerKey=e,this.value.lastQueueKey=null,this.requestUpdate()}async setDefaultQueuePoints(e,r){const t=await this.getDuration(r),o=this.createQueuePointsFromDuration(this.playerKeyToKeys[e],t);this.value.queuePoints.set(e,o),this.value.playerDurations.set(e,t)}getKeysByPlayerKey(e){return this.playerKeyToKeys[e]}getPlayerByPlayerKey(e){return this.value.players.get(e)??null}getCurrentPlayer(){return this.value.lastPlayerKey?this.value.players.get(this.value.lastPlayerKey)??null:null}getCurrentQueuePoints(){return this.value.lastPlayerKey?this.value.queuePoints.get(this.value.lastPlayerKey)??null:null}getQueuePointsByPlayerKey(e){return this.value.queuePoints.get(e)??null}async playFromSeekTime(e,r){await e.seekTo(r,!0),await e.getPlayerState()!==ae.PLAYING&&await e.playVideo()}async getIsPlaying(e){return await e.getPlayerState().then(r=>r===ae.PLAYING).catch(()=>!1)}async setVolume(e,r){await e.setVolume(r)}async getVolume(e){return await e.getVolume()}async setPlaybackRate(e,r){await e.setPlaybackRate(r)}async pauseVideo(e){await e.getPlayerState()===ae.PLAYING&&await e.pauseVideo()}async playVideo(e){await e.getPlayerState()!==ae.PLAYING&&await e.playVideo()}getCachedDurationByPlayerKey(e){return this.value.playerDurations.get(e)??0}async getDuration(e){return await e.getDuration()}async loadVideoById(e,r){await e.loadVideoById(r)}createQueuePointsFromDuration(e,r){const t={},o=e.length;return e.split("").forEach((n,a)=>{const p=Math.floor(a/o*r);t[n]=p}),t}hostConnected(){this.requestUpdate()}requestUpdate(){for(const e of this.hosts)e.requestUpdate()}}const qe=new Set;function kt(s,e){if(!(s.target instanceof HTMLInputElement||s.target instanceof HTMLTextAreaElement))for(const r of qe)r(s.key.toLowerCase(),e)}window.addEventListener("keydown",s=>kt(s,"down"));window.addEventListener("keyup",s=>kt(s,"up"));const U={subscribe:s=>qe.add(s),unsubscribe:s=>qe.delete(s)},fe=new Set;function oe(s){if(["video-loaded","pad-pointerdown","track-switched","video-play","video-pause"].includes(s.type))for(const e of fe)e(s.type,s.detail)}document.addEventListener("pad-pointerdown",oe);document.addEventListener("track-switched",oe);document.addEventListener("video-loaded",oe);document.addEventListener("video-play",oe);document.addEventListener("video-pause",oe);const E={subscribe:s=>(fe.add(s),fe),unsubscribe:s=>fe.delete(s),dispatchPadPointerdownEvent:s=>{document.dispatchEvent(new CustomEvent("pad-pointerdown",{bubbles:!0,composed:!0,detail:s}))},dispatchVideoSwitchedEvent:s=>{document.dispatchEvent(new CustomEvent("track-switched",{bubbles:!0,composed:!0,detail:s}))},dispatchVideoLoadedEvent:s=>{document.dispatchEvent(new CustomEvent("video-loaded",{bubbles:!0,composed:!0,detail:s}))},dispatchVideoPlayEvent:s=>{document.dispatchEvent(new CustomEvent("video-play",{bubbles:!0,composed:!0,detail:s}))},dispatchVideoPauseEvent:s=>{document.dispatchEvent(new CustomEvent("video-pause",{bubbles:!0,composed:!0,detail:s}))}};var sr=Object.defineProperty,or=Object.getOwnPropertyDescriptor,Ye=(s,e,r,t)=>{for(var o=t>1?void 0:t?or(e,r):e,n=s.length-1,a;n>=0;n--)(a=s[n])&&(o=(t?a(e,r,o):a(o))||o);return t&&o&&sr(e,r,o),o};let Z=class extends g{constructor(){super(...arguments),this.videoPlayerController=w.getInstance(this),this.handleInputStyle=()=>{const s=parseFloat(this.volumeInput.value),e=12,t=(154-e)/100,o=e+t*s;this.indicator.style.bottom=`${o}px`},this.handleInput=()=>{const s=this.videoPlayerController.getCurrentPlayer();s&&this.videoPlayerController.setVolume(s,Number(this.volumeInput.value)).catch(e=>{console.log(e)})},this.setInitialVolume=(s,e)=>{if(!["track-switched","video-loaded"].includes(s))return;const r=this.videoPlayerController.getCurrentPlayer();r&&this.videoPlayerController.getVolume(r).then(t=>{this.volumeInput.value=String(t),this.handleInputStyle()}).catch(t=>console.log(t))}}connectedCallback(){super.connectedCallback(),E.subscribe(this.setInitialVolume)}render(){return m`
			<nav class="controller-content-volume">
				<span class="volume-adjust-meter-label">Volume</span>
				<div class="volume-adjust-meter">
					<div
						id="volume-adjust-indicator"
						class="volume-adjust-meter-indicator"
						style="bottom: 92px;"
					></div>
				</div>
				<input
					id="volume-adjust"
					class="volume-adjust"
					type="range"
					step="0.01"
					min="0"
					max="100"
					@input=${this.handleInputStyle}
					@change=${this.handleInput}
				/>
			</nav>
		`}};Z.styles=[x,S,tr];Ye([se("#volume-adjust")],Z.prototype,"volumeInput",2);Ye([se("#volume-adjust-indicator")],Z.prototype,"indicator",2);Z=Ye([_("volume-adjust")],Z);const nr=$`

.speed-button-container {
    display: inline-block;
    width: 50px;
}

.speed-button-label {
    font-family: system-ui;
    font-size: 9px;
    display: block;
    color: #dacba6;
    background-color: #87857d;
    padding: 1.5px 3px;
    width: 32px;
    text-align: center;
    margin: 0 auto;
    border-radius: 2px;
}

.speed-button {
    display: block;
    height: 16px;
    background-color: #dacba6;
    box-shadow: 0 3px 0 #c4b694;
    border-radius: 16px;
    transition: box-shadow 0.1s ease-in-out, transform 0.1s ease-in-out;
    cursor: pointer;
    margin-top: 4px;
}

.speed-button:active {
    box-shadow: 0 1.5px 0 #c4b694;
    transform: translateY(1px);
}

`;var ar=Object.defineProperty,ir=Object.getOwnPropertyDescriptor,Et=(s,e,r,t)=>{for(var o=t>1?void 0:t?ir(e,r):e,n=s.length-1,a;n>=0;n--)(a=s[n])&&(o=(t?a(e,r,o):a(o))||o);return t&&o&&ar(e,r,o),o};let ge=class extends g{constructor(){super(...arguments),this.speed=1}render(){return m`
		<div class="speed-button-container">
			<span class="speed-button-label">${this.speed}x</span>
			<a class="speed-button"></a>
		</div>
	`}};ge.styles=[x,S,nr];Et([k({type:Number})],ge.prototype,"speed",2);ge=Et([_("speed-adjust-button")],ge);const lr=$`
.speed-button-list {
    display: flex;
    justify-content: space-between;
	width: 246px;
}

.speed-button-list:nth-child(n + 2) {
	margin-top: 12px;
}
`;var ur=Object.defineProperty,cr=Object.getOwnPropertyDescriptor,Ot=(s,e,r,t)=>{for(var o=t>1?void 0:t?cr(e,r):e,n=s.length-1,a;n>=0;n--)(a=s[n])&&(o=(t?a(e,r,o):a(o))||o);return t&&o&&ur(e,r,o),o};let me=class extends g{constructor(){super(...arguments),this.count=0,this.videoPlayerController=w.getInstance(this),this.handleSetPlaybackRate=async s=>{const e=this.videoPlayerController.getCurrentPlayer();if(!e)return;const t=s.currentTarget.getAttribute("speed");if(!t)return;const o=parseFloat(t);isNaN(o)||await this.videoPlayerController.setPlaybackRate(e,o)}}render(){return m`
			<nav class="speed-button-list">
				<speed-adjust-button @click=${this.handleSetPlaybackRate} speed="0.25"></speed-adjust-button>
				<speed-adjust-button @click=${this.handleSetPlaybackRate} speed="0.5"></speed-adjust-button>
				<speed-adjust-button @click=${this.handleSetPlaybackRate} speed="0.75"></speed-adjust-button>
				<speed-adjust-button @click=${this.handleSetPlaybackRate} speed="1"></speed-adjust-button>
			</nav>
			<nav class="speed-button-list">
				<speed-adjust-button @click=${this.handleSetPlaybackRate} speed="1.25"></speed-adjust-button>
				<speed-adjust-button @click=${this.handleSetPlaybackRate} speed="1.5"></speed-adjust-button>
				<speed-adjust-button @click=${this.handleSetPlaybackRate} speed="1.75"></speed-adjust-button>
				<speed-adjust-button @click=${this.handleSetPlaybackRate} speed="2"></speed-adjust-button>
			</nav>
    `}};me.styles=[x,S,lr];Ot([k({type:Number})],me.prototype,"count",2);me=Ot([_("speed-adjust-button-group")],me);const dr=$`

.track-button-container {
	text-align: center;
}

.track-button {
	display: block;
    width: 48px;
    height: 34px;
    border-radius: 4px;
	background-color: #d56165;
    box-shadow: 0 4px 0 #914749;
    margin-top: 4px;
    cursor: pointer;
    transition: box-shadow 0.1s ease-in-out, transform 0.1s ease-in-out;
}


.track-button-label {
    color: #87857d;
    font-size: 9px;
}

.track-button:active {
    box-shadow: 0 2px 0 #914749;
	transform: translateY(2px);
}
`;var pr=Object.getOwnPropertyDescriptor,hr=(s,e,r,t)=>{for(var o=t>1?void 0:t?pr(e,r):e,n=s.length-1,a;n>=0;n--)(a=s[n])&&(o=a(o)||o);return o};let Fe=class extends g{constructor(){super(...arguments),this.videoPlayerController=w.getInstance(this),this.handleOpenRecordModal=s=>{this.videoPlayerController.setShowRecordModal(!0)}}render(){return m`
		<div class="track-button-container">
			<span class="track-button-label">RECORD</span>
			<a @click=${this.handleOpenRecordModal} class="track-button"></a>
		</div>
	`}};Fe.styles=[x,S,dr];Fe=hr([_("record-button")],Fe);const yr=$`

.track-button-container {
	text-align: center;
}

.track-button {
	display: block;
    width: 48px;
    height: 34px;
    border-radius: 4px;
	background-color: #d56165;
    box-shadow: 0 4px 0 #914749;
    margin-top: 4px;
    cursor: pointer;
    transition: box-shadow 0.1s ease-in-out, transform 0.1s ease-in-out;
}


.track-button-label {
    color: #87857d;
    font-size: 9px;
}

.track-button:active {
    box-shadow: 0 2px 0 #914749;
	transform: translateY(2px);
}
`;var fr=Object.getOwnPropertyDescriptor,vr=(s,e,r,t)=>{for(var o=t>1?void 0:t?fr(e,r):e,n=s.length-1,a;n>=0;n--)(a=s[n])&&(o=a(o)||o);return o};let Me=class extends g{constructor(){super(...arguments),this.videoPlayerController=w.getInstance(this),this.handleClickDelete=s=>{const e=this.videoPlayerController.getCurrentPlayer();if(!e)return;this.videoPlayerController.loadVideoById(e,"").catch(t=>console.log(t));const r=this.videoPlayerController.getLastPlayerKey();this.videoPlayerController.setVideoId(r,"")}}render(){return m`
		<div class="track-button-container">
			<span class="track-button-label">DELETE</span>
			<a class="track-button" @click=${this.handleClickDelete}></a>
		</div>
	`}};Me.styles=[x,S,yr];Me=vr([_("delete-button")],Me);const br=$`

.track-button-container {
	text-align: center;
}

.track-button {
	display: block;
    width: 48px;
    height: 34px;
    border-radius: 4px;
    background-color: #f7e9d0;
    box-shadow: 0 4px 0 #c6beae;
    margin-top: 4px;
    cursor: pointer;
    transition: box-shadow 0.1s ease-in-out, transform 0.1s ease-in-out;
}

.track-button-label {
    color: #87857d;
    font-size: 9px;
}

.track-button:active,
:host([active]) .track-button {
    box-shadow: 0 2px 0 #c6beae;
    transform: translateY(2px);
}
`;var gr=Object.getOwnPropertyDescriptor,mr=(s,e,r,t)=>{for(var o=t>1?void 0:t?gr(e,r):e,n=s.length-1,a;n>=0;n--)(a=s[n])&&(o=a(o)||o);return o};let Te=class extends g{render(){return m`
		<div class="track-button-container">
			<span class="track-button-label">STOP</span>
			<a class="track-button"></a>
		</div>
	`}};Te.styles=[x,S,br];Te=mr([_("stop-button")],Te);const Pr=$`

.track-button-container {
	text-align: center;
}

.track-button {
	display: block;
    width: 48px;
    height: 34px;
    border-radius: 4px;
    background-color: #f7e9d0;
    box-shadow: 0 4px 0 #c6beae;
    margin-top: 4px;
    cursor: pointer;
    transition: box-shadow 0.1s ease-in-out, transform 0.1s ease-in-out;
}

.track-button-label {
    color: #87857d;
    font-size: 9px;
}

.track-button:active,
:host([active]) .track-button {
    box-shadow: 0 2px 0 #c6beae;
    transform: translateY(2px);
}
`;var Cr=Object.getOwnPropertyDescriptor,wr=(s,e,r,t)=>{for(var o=t>1?void 0:t?Cr(e,r):e,n=s.length-1,a;n>=0;n--)(a=s[n])&&(o=a(o)||o);return o};let Re=class extends g{render(){return m`
		<div class="track-button-container">
			<span class="track-button-label">START</span>
			<a class="track-button"></a>
		</div>
	`}};Re.styles=[x,S,Pr];Re=wr([_("start-button")],Re);const $r=$`
.controller-content-track-functions {
    display: flex;
	width: 246px;
    gap: 18px;
    text-align: center;
}
`;var _r=Object.defineProperty,xr=Object.getOwnPropertyDescriptor,ze=(s,e,r,t)=>{for(var o=t>1?void 0:t?xr(e,r):e,n=s.length-1,a;n>=0;n--)(a=s[n])&&(o=(t?a(e,r,o):a(o))||o);return t&&o&&_r(e,r,o),o};let J=class extends g{constructor(){super(...arguments),this.videoPlayerController=w.getInstance(this),this.activeKey=null,this.isPlaying=!1,this.onKey=async(s,e)=>{e==="down"?(this.activeKey=s,await this.toggleVideoBySpaceKey(s)):this.activeKey=null},this.handleClickPlayVideo=async()=>{const s=this.videoPlayerController.getCurrentPlayer();s&&await this.videoPlayerController.playVideo(s)},this.handleClickPauseVideo=async()=>{const s=this.videoPlayerController.getCurrentPlayer();s&&await this.videoPlayerController.pauseVideo(s)}}async toggleVideoPlayer(s){const e=await this.videoPlayerController.getIsPlaying(s);e?await this.videoPlayerController.pauseVideo(s):await this.videoPlayerController.playVideo(s),this.isPlaying=e}async toggleVideoBySpaceKey(s){const e=this.videoPlayerController.getCurrentPlayer();e&&s===" "&&await this.toggleVideoPlayer(e)}connectedCallback(){super.connectedCallback(),U.subscribe(this.onKey)}disconnectedCallback(){U.unsubscribe(this.onKey),super.disconnectedCallback()}render(){return m`
			<nav class="controller-content-track-functions">
				<record-button></record-button>
				<delete-button></delete-button>
				<stop-button @click=${this.handleClickPauseVideo} ?active=${this.isPlaying&&this.activeKey===" "}></stop-button>
				<start-button @click=${this.handleClickPlayVideo} ?active=${!this.isPlaying&&this.activeKey===" "}></start-button>
			</nav>
    `}};J.styles=[x,S,$r];ze([we()],J.prototype,"activeKey",2);ze([we()],J.prototype,"isPlaying",2);J=ze([_("track-control-button-group")],J);const Sr=$`
.video-slot {
  display: block;
  height: 180px;
  width: 100%;
  opacity: 0.6;
}
`;var ie={exports:{}},Ke,ut;function Ar(){if(ut)return Ke;ut=1;var s;/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/return s=function(){var e={},r={};return e.on=function(t,o){var n={name:t,handler:o};return r[t]=r[t]||[],r[t].unshift(n),n},e.off=function(t){var o=r[t.name].indexOf(t);o!==-1&&r[t.name].splice(o,1)},e.trigger=function(t,o){var n=r[t],a;if(n)for(a=n.length;a--;)n[a].handler(o)},e},Ke=s,Ke}var le={exports:{}},ue={exports:{}},Ie,ct;function kr(){if(ct)return Ie;ct=1;var s=1e3,e=s*60,r=e*60,t=r*24,o=t*7,n=t*365.25;Ie=function(l,i){i=i||{};var c=typeof l;if(c==="string"&&l.length>0)return a(l);if(c==="number"&&isFinite(l))return i.long?u(l):p(l);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(l))};function a(l){if(l=String(l),!(l.length>100)){var i=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(l);if(i){var c=parseFloat(i[1]),h=(i[2]||"ms").toLowerCase();switch(h){case"years":case"year":case"yrs":case"yr":case"y":return c*n;case"weeks":case"week":case"w":return c*o;case"days":case"day":case"d":return c*t;case"hours":case"hour":case"hrs":case"hr":case"h":return c*r;case"minutes":case"minute":case"mins":case"min":case"m":return c*e;case"seconds":case"second":case"secs":case"sec":case"s":return c*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}}}function p(l){var i=Math.abs(l);return i>=t?Math.round(l/t)+"d":i>=r?Math.round(l/r)+"h":i>=e?Math.round(l/e)+"m":i>=s?Math.round(l/s)+"s":l+"ms"}function u(l){var i=Math.abs(l);return i>=t?d(l,i,t,"day"):i>=r?d(l,i,r,"hour"):i>=e?d(l,i,e,"minute"):i>=s?d(l,i,s,"second"):l+" ms"}function d(l,i,c,h){var y=i>=c*1.5;return Math.round(l/c)+" "+h+(y?"s":"")}return Ie}var Ne,dt;function Er(){if(dt)return Ne;dt=1;function s(e){t.debug=t,t.default=t,t.coerce=d,t.disable=p,t.enable=n,t.enabled=u,t.humanize=kr(),t.destroy=l,Object.keys(e).forEach(i=>{t[i]=e[i]}),t.names=[],t.skips=[],t.formatters={};function r(i){let c=0;for(let h=0;h<i.length;h++)c=(c<<5)-c+i.charCodeAt(h),c|=0;return t.colors[Math.abs(c)%t.colors.length]}t.selectColor=r;function t(i){let c,h=null,y,P;function f(...v){if(!f.enabled)return;const b=f,A=Number(new Date),xe=A-(c||A);b.diff=xe,b.prev=c,b.curr=A,c=A,v[0]=t.coerce(v[0]),typeof v[0]!="string"&&v.unshift("%O");let K=0;v[0]=v[0].replace(/%([a-zA-Z%])/g,(I,Ae)=>{if(I==="%%")return"%";K++;const B=t.formatters[Ae];if(typeof B=="function"){const Kt=v[K];I=B.call(b,Kt),v.splice(K,1),K--}return I}),t.formatArgs.call(b,v),(b.log||t.log).apply(b,v)}return f.namespace=i,f.useColors=t.useColors(),f.color=t.selectColor(i),f.extend=o,f.destroy=t.destroy,Object.defineProperty(f,"enabled",{enumerable:!0,configurable:!1,get:()=>h!==null?h:(y!==t.namespaces&&(y=t.namespaces,P=t.enabled(i)),P),set:v=>{h=v}}),typeof t.init=="function"&&t.init(f),f}function o(i,c){const h=t(this.namespace+(typeof c>"u"?":":c)+i);return h.log=this.log,h}function n(i){t.save(i),t.namespaces=i,t.names=[],t.skips=[];const c=(typeof i=="string"?i:"").trim().replace(/\s+/g,",").split(",").filter(Boolean);for(const h of c)h[0]==="-"?t.skips.push(h.slice(1)):t.names.push(h)}function a(i,c){let h=0,y=0,P=-1,f=0;for(;h<i.length;)if(y<c.length&&(c[y]===i[h]||c[y]==="*"))c[y]==="*"?(P=y,f=h,y++):(h++,y++);else if(P!==-1)y=P+1,f++,h=f;else return!1;for(;y<c.length&&c[y]==="*";)y++;return y===c.length}function p(){const i=[...t.names,...t.skips.map(c=>"-"+c)].join(",");return t.enable(""),i}function u(i){for(const c of t.skips)if(a(i,c))return!1;for(const c of t.names)if(a(i,c))return!0;return!1}function d(i){return i instanceof Error?i.stack||i.message:i}function l(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return t.enable(t.load()),t}return Ne=s,Ne}var pt;function Or(){return pt||(pt=1,function(s,e){var r={};e.formatArgs=o,e.save=n,e.load=a,e.useColors=t,e.storage=p(),e.destroy=(()=>{let d=!1;return()=>{d||(d=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function t(){if(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let d;return typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&(d=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(d[1],10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function o(d){if(d[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+d[0]+(this.useColors?"%c ":" ")+"+"+s.exports.humanize(this.diff),!this.useColors)return;const l="color: "+this.color;d.splice(1,0,l,"color: inherit");let i=0,c=0;d[0].replace(/%[a-zA-Z%]/g,h=>{h!=="%%"&&(i++,h==="%c"&&(c=i))}),d.splice(c,0,l)}e.log=console.debug||console.log||(()=>{});function n(d){try{d?e.storage.setItem("debug",d):e.storage.removeItem("debug")}catch{}}function a(){let d;try{d=e.storage.getItem("debug")||e.storage.getItem("DEBUG")}catch{}return!d&&typeof process<"u"&&"env"in process&&(d=r.DEBUG),d}function p(){try{return localStorage}catch{}}s.exports=Er()(e);const{formatters:u}=s.exports;u.j=function(d){try{return JSON.stringify(d)}catch(l){return"[UnexpectedJSONParseError]: "+l.message}}}(ue,ue.exports)),ue.exports}var ce={exports:{}},ht;function jr(){return ht||(ht=1,function(s,e){Object.defineProperty(e,"__esModule",{value:!0});var r=At(),t=o(r);function o(n){return n&&n.__esModule?n:{default:n}}e.default={pauseVideo:{acceptableStates:[t.default.ENDED,t.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[t.default.ENDED,t.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[t.default.ENDED,t.default.PLAYING,t.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},s.exports=e.default}(ce,ce.exports)),ce.exports}var de={exports:{}},yt;function Kr(){return yt||(yt=1,function(s,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],s.exports=e.default}(de,de.exports)),de.exports}var pe={exports:{}},ft;function Ir(){return ft||(ft=1,function(s,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe","getSphericalProperties","setSphericalProperties"],s.exports=e.default}(pe,pe.exports)),pe.exports}var vt;function Nr(){return vt||(vt=1,function(s,e){Object.defineProperty(e,"__esModule",{value:!0});var r=Or(),t=l(r),o=jr(),n=l(o),a=Kr(),p=l(a),u=Ir(),d=l(u);function l(h){return h&&h.__esModule?h:{default:h}}const i=(0,t.default)("youtube-player"),c={};c.proxyEvents=h=>{const y={};for(const P of p.default){const f="on"+P.slice(0,1).toUpperCase()+P.slice(1);y[f]=v=>{i('event "%s"',f,v),h.trigger(P,v)}}return y},c.promisifyPlayer=(h,y=!1)=>{const P={};for(const f of d.default)y&&n.default[f]?P[f]=(...v)=>h.then(b=>{const A=n.default[f],xe=b.getPlayerState(),K=b[f].apply(b,v);return A.stateChangeRequired||Array.isArray(A.acceptableStates)&&!A.acceptableStates.includes(xe)?new Promise(Se=>{const I=()=>{const Ae=b.getPlayerState();let B;typeof A.timeout=="number"&&(B=setTimeout(()=>{b.removeEventListener("onStateChange",I),Se()},A.timeout)),Array.isArray(A.acceptableStates)&&A.acceptableStates.includes(Ae)&&(b.removeEventListener("onStateChange",I),clearTimeout(B),Se())};b.addEventListener("onStateChange",I)}).then(()=>K):K}):P[f]=(...v)=>h.then(b=>b[f].apply(b,v));return P},e.default=c,s.exports=e.default}(le,le.exports)),le.exports}var he={exports:{}},De,bt;function Dr(){if(bt)return De;bt=1,De=function(o,n,a){var p=document.head||document.getElementsByTagName("head")[0],u=document.createElement("script");typeof n=="function"&&(a=n,n={}),n=n||{},a=a||function(){},u.type=n.type||"text/javascript",u.charset=n.charset||"utf8",u.async="async"in n?!!n.async:!0,u.src=o,n.attrs&&s(u,n.attrs),n.text&&(u.text=""+n.text);var d="onload"in u?e:r;d(u,a),u.onload||e(u,a),p.appendChild(u)};function s(t,o){for(var n in o)t.setAttribute(n,o[n])}function e(t,o){t.onload=function(){this.onerror=this.onload=null,o(null,t)},t.onerror=function(){this.onerror=this.onload=null,o(new Error("Failed to load "+this.src),t)}}function r(t,o){t.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,o(null,t))}}return De}var gt;function qr(){return gt||(gt=1,function(s,e){Object.defineProperty(e,"__esModule",{value:!0});var r=Dr(),t=o(r);function o(n){return n&&n.__esModule?n:{default:n}}e.default=n=>new Promise(p=>{if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function){p(window.YT);return}else{const d=window.location.protocol==="http:"?"http:":"https:";(0,t.default)(d+"//www.youtube.com/iframe_api",l=>{l&&n.trigger("error",l)})}const u=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{u&&u(),p(window.YT)}}),s.exports=e.default}(he,he.exports)),he.exports}var mt;function Fr(){return mt||(mt=1,function(s,e){Object.defineProperty(e,"__esModule",{value:!0});var r=Ar(),t=u(r),o=Nr(),n=u(o),a=qr(),p=u(a);function u(l){return l&&l.__esModule?l:{default:l}}let d;e.default=(l,i={},c=!1)=>{const h=(0,t.default)();if(d||(d=(0,p.default)(h)),i.events)throw new Error("Event handlers cannot be overwritten.");if(typeof l=="string"&&!document.getElementById(l))throw new Error('Element "'+l+'" does not exist.');i.events=n.default.proxyEvents(h);const y=new Promise(f=>{typeof l=="object"&&l.playVideo instanceof Function?f(l):d.then(v=>{const b=new v.Player(l,i);return h.on("ready",()=>{f(b)}),null})}),P=n.default.promisifyPlayer(y,c);return P.on=h.on,P.off=h.off,P},s.exports=e.default}(ie,ie.exports)),ie.exports}var Mr=Fr();const Tr=St(Mr);var Rr=Object.defineProperty,Ur=Object.getOwnPropertyDescriptor,Ge=(s,e,r,t)=>{for(var o=t>1?void 0:t?Ur(e,r):e,n=s.length-1,a;n>=0;n--)(a=s[n])&&(o=(t?a(e,r,o):a(o))||o);return t&&o&&Rr(e,r,o),o};let X=class extends g{constructor(){super(...arguments),this.trackName="track1",this.videoId="",this.videoPlayerController=w.getInstance(this)}render(){return m`
			<div class="video-slot" id=${this.trackName}></div>
		`}firstUpdated(){const s=this.renderRoot.querySelector(`#${this.trackName}`);if(!s){console.error(`Element with ID "${this.trackName}" not found.`);return}const e=Tr(s,{playerVars:{autoplay:0,controls:0,modestbranding:1,rel:1,fs:0,disablekb:1}});this.videoPlayerController.addInitialPlayer(this.trackName,e)}updated(s){if(s.has("videoId")){const e=this.renderRoot.querySelector(`#${this.trackName}`);if(!e)return;if(this.videoId===""){e.style.opacity="0";return}e.style.opacity="";const r=this.videoPlayerController.getPlayerByPlayerKey(this.trackName);if(!r)return;this.videoPlayerController.loadVideoById(r,this.videoId).then(()=>{setTimeout(()=>{E.dispatchVideoLoadedEvent({trackName:this.trackName})},2e3)}).catch(t=>{console.error(`Failed to load video "${this.videoId}" for ${this.trackName}`,t)})}}};X.styles=[x,S,Sr];Ge([k({type:String})],X.prototype,"trackName",2);Ge([k({type:String})],X.prototype,"videoId",2);X=Ge([_("video-player")],X);const Lr=$`

.track-button-container {
  text-align: center;
}

.track-button-label {
  color: #87857d;
  font-size: 9px;
}

.track-button {
  display: block;
  width: 48px;
  border-radius: 4px;
  background-color: #505b76;
  box-shadow: 0 3px 0 #263b4a;
  height: 16px;
  margin-top: 4px;
  cursor: pointer;
  transition: box-shadow 0.1s ease-in-out, transform 0.1s ease-in-out;
}

.track-button:active,
.track-button-active {
  box-shadow: 0 2px 0 rgba(225, 162, 44, 0.85);
  transform: translateY(1px);
}
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vr={ATTRIBUTE:1},Br=s=>(...e)=>({_$litDirective$:s,values:e});class Qr{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,t){this._$Ct=e,this._$AM=r,this._$Ci=t}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hr=Br(class extends Qr{constructor(s){var e;if(super(s),s.type!==Vr.ATTRIBUTE||s.name!=="class"||((e=s.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(e=>s[e]).join(" ")+" "}update(s,[e]){var t,o;if(this.st===void 0){this.st=new Set,s.strings!==void 0&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((t=this.nt)!=null&&t.has(n))&&this.st.add(n);return this.render(e)}const r=s.element.classList;for(const n of this.st)n in e||(r.remove(n),this.st.delete(n));for(const n in e){const a=!!e[n];a===this.st.has(n)||(o=this.nt)!=null&&o.has(n)||(a?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return M}});var Yr=Object.defineProperty,zr=Object.getOwnPropertyDescriptor,We=(s,e,r,t)=>{for(var o=t>1?void 0:t?zr(e,r):e,n=s.length-1,a;n>=0;n--)(a=s[n])&&(o=(t?a(e,r,o):a(o))||o);return t&&o&&Yr(e,r,o),o};let ee=class extends g{constructor(){super(...arguments),this.trackName="TRACK1",this.active=!1}render(){const s={"track-button":!0,"track-button-active":this.active};return m`
		<div class="track-button-container">
			<span class="track-button-label">${this.trackName}</span>
			<a class=${Hr(s)}></a>
		</div>
	`}};ee.styles=[x,S,Lr];We([k({type:String})],ee.prototype,"trackName",2);We([k({type:Boolean})],ee.prototype,"active",2);ee=We([_("track-switch-button")],ee);const Gr=$`
.track-switch-button-list {
    display: flex;
    gap: 18px;
    text-align: center;
    margin-top: 12px;
    justify-content: end;
}
`;var Wr=Object.defineProperty,Zr=Object.getOwnPropertyDescriptor,jt=(s,e,r,t)=>{for(var o=t>1?void 0:t?Zr(e,r):e,n=s.length-1,a;n>=0;n--)(a=s[n])&&(o=(t?a(e,r,o):a(o))||o);return t&&o&&Wr(e,r,o),o};let Pe=class extends g{constructor(){super(...arguments),this.videoPlayerController=w.getInstance(this),this.activePlayerKey=this.videoPlayerController.getLastPlayerKey(),this.handleClickTrack=s=>{const r=s.currentTarget.getAttribute("trackName");if(!r)return;const t=r.toLowerCase();this.videoPlayerController.setLastPlayerKey(t),E.dispatchVideoSwitchedEvent({trackName:t})},this.handleVideoSwitched=(s,e)=>{s==="track-switched"&&(this.activePlayerKey=e.trackName)}}get playerKeys(){return this.videoPlayerController.getPlayerKeys()}connectedCallback(){super.connectedCallback(),E.subscribe(this.handleVideoSwitched)}render(){return m`
			<nav class="track-switch-button-list">
				${this.playerKeys.map(s=>m`<track-switch-button @click=${this.handleClickTrack} trackName=${s.toUpperCase()} .active=${s===this.activePlayerKey}></track-switch-button>`)}
			</nav>
    `}};Pe.styles=[x,S,Gr];jt([we()],Pe.prototype,"activePlayerKey",2);Pe=jt([_("track-switch-button-group")],Pe);const Jr=$`
.sampler-pad {
  font-family: system-ui;
  color: #dbd7cc;
  display: inline-flex;
  font-size: 13px;
  font-weight: bold;
  background-color: #a19e9a;
  width: 84px;
  height: 84px;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  box-shadow: 0 4px 0 rgb(99, 110, 114);
  transition: box-shadow 0.1s ease-in-out, transform 0.1s ease-in-out, color 0.1s ease-in-out;
}

.sampler-pad:active,
:host([active]) .sampler-pad {
  color: #e1b12c;
  box-shadow: 0 2px 0 rgba(225, 177, 44, 0.85);
  transform: translateY(2px);
}
`;var Xr=Object.defineProperty,es=Object.getOwnPropertyDescriptor,Ze=(s,e,r,t)=>{for(var o=t>1?void 0:t?es(e,r):e,n=s.length-1,a;n>=0;n--)(a=s[n])&&(o=(t?a(e,r,o):a(o))||o);return t&&o&&Xr(e,r,o),o};let te=class extends g{constructor(){super(...arguments),this.padName="1",this.active=!1}render(){return m`
		<a class="sampler-pad">${this.padName}</a>
	`}};te.styles=[x,S,Jr];Ze([k({type:String})],te.prototype,"padName",2);Ze([k({type:Boolean,reflect:!0})],te.prototype,"active",2);te=Ze([_("sampler-pad")],te);const ts=$`
.sampler-pad-group {
    display: flex;
    flex-wrap: wrap;
    width: 300px;
    gap: 12px;
    justify-content: center;
    background-color: #a0a7a4;
    padding: 12px;
    border-radius: 4px;
    margin-top: 16px;
}
`;var rs=Object.defineProperty,ss=Object.getOwnPropertyDescriptor,$e=(s,e,r,t)=>{for(var o=t>1?void 0:t?ss(e,r):e,n=s.length-1,a;n>=0;n--)(a=s[n])&&(o=(t?a(e,r,o):a(o))||o);return t&&o&&rs(e,r,o),o};let L=class extends g{constructor(){super(...arguments),this.trackName="track1",this.keys=["1","2","3","4","5","6","7","8","9"],this.videoPlayerController=w.getInstance(this),this.activeKey=null,this.onKey=(s,e)=>{e==="down"?(this.activeKey=s,this.setPlayerByKey(s),this.playFromQueuePoint(s)):this.activeKey=null},this.setPlayerByKey=s=>{const e=this.videoPlayerController.getPlayerKeyByQueueKey(s);e&&(this.videoPlayerController.setLastPlayerKey(e),E.dispatchVideoSwitchedEvent({trackName:e}))},this.playFromQueuePoint=s=>{const e=this.videoPlayerController.getCurrentPlayer();if(!e)return;const r=this.videoPlayerController.getCurrentQueuePoints();r&&Object.prototype.hasOwnProperty.call(r,s)&&(this.videoPlayerController.playFromSeekTime(e,Number(r[s])).catch(t=>console.log(t)),this.videoPlayerController.setLastQueueKey(s))},this.handleClickPad=s=>{if(!this.videoPlayerController.getCurrentPlayer())return;const t=s.currentTarget.getAttribute("padName");t&&(this.playFromQueuePoint(t),E.dispatchPadPointerdownEvent({trackName:this.trackName}))},this.handleSetDefaultQueuePoints=(s,e)=>{if(s!=="video-loaded")return;const r=this.videoPlayerController.getPlayerByPlayerKey(e.trackName);r&&(this.videoPlayerController.setDefaultQueuePoints(e.trackName,r).catch(t=>console.log(t)),this.videoPlayerController.pauseVideo(r).catch(t=>console.log(t)))},this.handleSwitchPads=(s,e)=>{if(s!=="track-switched"||!this.videoPlayerController.getPlayerByPlayerKey(e.trackName))return;const t=this.videoPlayerController.getKeysByPlayerKey(e.trackName);this.keys=t.split("")}}connectedCallback(){super.connectedCallback(),U.subscribe(this.onKey),E.subscribe(this.handleSetDefaultQueuePoints),E.subscribe(this.handleSwitchPads)}disconnectedCallback(){U.unsubscribe(this.onKey),super.disconnectedCallback()}render(){return m`
			<nav class="sampler-pad-group">
				${this.keys.map(s=>m`
				<sampler-pad @pointerdown=${this.handleClickPad} padName=${s} ?active=${this.activeKey===s}></sampler-pad>
				`)}
			</nav>
		`}};L.styles=[x,S,ts];$e([k({type:String})],L.prototype,"trackName",2);$e([k({type:Array})],L.prototype,"keys",2);$e([we()],L.prototype,"activeKey",2);L=$e([_("sampler-pad-group")],L);const os=$`
.video-slot-container {
  overflow: hidden;
  width: 320px;
  height: 180px;
  background-color: #e0f2f1;
  border-radius: 4px;
  box-shadow: 0 5px 0 #1c181d,
              0 -5px 0 #1c181d,
              7px -5px 0 #1c181d,
              -7px 5px 0 #1c181d,
              7px 0 0 #1c181d,
              -7px 0 0 #1c181d,
              -7px -5px 0 #1c181d,
              7px 5px 0 #1c181d;

}

.video-item:nth-child {
	margin-top: 14px;
}
`;var ns=Object.getOwnPropertyDescriptor,as=(s,e,r,t)=>{for(var o=t>1?void 0:t?ns(e,r):e,n=s.length-1,a;n>=0;n--)(a=s[n])&&(o=a(o)||o);return o};let Ue=class extends g{constructor(){super(...arguments),this.videoPlayerController=w.getInstance(this),this.videoHeight=180}get videoIds(){return this.videoPlayerController.getVideoIds()}get playerKeys(){return this.videoPlayerController.getPlayerKeys()}get selectedIndex(){const s=this.videoPlayerController.value.lastPlayerKey;return s?this.playerKeys.indexOf(s):0}render(){return m`
			<div class="video-slot-container">
				<ul class="video-list" style="transform: translateY(-${this.selectedIndex*this.videoHeight}px);">
					${this.playerKeys.map(s=>m`
					<li class="video-item">
						<video-player trackName=${s} videoId=${this.videoIds.get(s)}></video-player>
					</li>
					`)}
				</ul>
			</div>
    `}};Ue.styles=[x,S,os];Ue=as([_("video-player-group")],Ue);const is=$`

.record-modal-backdrop {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
}

.record-modal {
	position: absolute;
	top: calc(50% - 200px);
	left: 0;
	right: 0;
	display: block;
	margin: 0 auto;
	width: 320px;
}

.record-modal-content {
	padding: 10px 10px 16px;
}

.youtube-url-input {
	color: #2d3436;
    display: block;
    width: 100%;
    height: 48px;
    border-radius: 4px;
    border: none;
    padding: 4px 8px;
	background-color: #dbd7cc;
	box-shadow: 4px 4px 0 #95a5a6;
}

.youtube-url-input:focus {
	border: none;
	outline: none;
}

.close-button-wrapper {
	display: relative;
}

.close-button {
	position: absolute;
	right: 0;
	top: 0;
	background-color: #bdc3c7;
	border-radius: 100%;
	display: inline-flex;
	width: 28px;
	height: 28px;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	box-shadow: 0 1px 12px rgba(0, 0, 0, 0.2);
}
`;var ls=Object.getOwnPropertyDescriptor,us=(s,e,r,t)=>{for(var o=t>1?void 0:t?ls(e,r):e,n=s.length-1,a;n>=0;n--)(a=s[n])&&(o=a(o)||o);return o};let Le=class extends g{constructor(){super(...arguments),this.videoPlayerController=w.getInstance(this),this.handleChangeYoutubeUrl=s=>{const r=s.target.value,t=this.parseVideoIDFromURL(r);if(!t)return;const o=this.videoPlayerController.getLastPlayerKey();this.videoPlayerController.setVideoId(o,t)},this.handleCloseModal=s=>{this.videoPlayerController.setShowRecordModal(!1)}}get showRecordModal(){return this.videoPlayerController.getShowRecordModal()}parseVideoIDFromURL(s){try{const e=new URL(s);let r=null;return(e.hostname==="www.youtube.com"||e.hostname==="youtube.com")&&e.pathname==="/watch"?r=e.searchParams.get("v"):e.hostname==="youtu.be"&&(r=e.pathname.slice(1)),r&&/^[a-zA-Z0-9_-]{11}$/.test(r)?r:null}catch{return null}}render(){return this.showRecordModal?m`
		<div class="record-modal-backdrop">
		</div>

		<div class="record-modal">
			<div class="close-button-wrapper">
				<a class="close-button" @click=${this.handleCloseModal}>
					<svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 -960 960 960" fill="#505b76"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
				</a>
			</div>
			<div class="record-modal-content">
				<input
					@keydown=${s=>s.stopPropagation()}
					@keyup=${s=>s.stopPropagation()}
					@change=${this.handleChangeYoutubeUrl}
					name="youtube-url"
					class="youtube-url-input"
					type="text"
					placeholder="Paste youtube url"
				/>
			</div>
		</div>
	`:null}};Le.styles=[x,S,is];Le=us([_("record-modal")],Le);const cs=$`
.queue-point-adjust-container {
    height: 60px;
    position: relative;
    background: #34495e;
}

.queue-point-adjust-meter {
    height: 100%;
    border-right: 8px solid #e74c3c;
    position: relative;
    text-align: right;
}

.queue-point-adjust-meter-key {
    color: #bdc3c7;
    font-family: system-ui;
    font-size: 13px;
    position: absolute;
    bottom: -18px;
    text-transform: uppercase;
    font-weight: bold;
}

.queue-point-adjust {
    opacity: 0;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
}
`;var ds=Object.defineProperty,ps=Object.getOwnPropertyDescriptor,_e=(s,e,r,t)=>{for(var o=t>1?void 0:t?ps(e,r):e,n=s.length-1,a;n>=0;n--)(a=s[n])&&(o=(t?a(e,r,o):a(o))||o);return t&&o&&ds(e,r,o),o};let V=class extends g{constructor(){super(...arguments),this.videoPlayerController=w.getInstance(this),this.updateQueuePointStyle=s=>{if(!this.player)return;const e=this.videoPlayerController.getLastQueueKey();if(!e)return;const r=this.videoPlayerController.getCurrentQueuePoints();if(!r||!Object.prototype.hasOwnProperty.call(r,e))return;const t=this.playerDuration;this.queuePointAdjustMeter.style.width=`${s/t*100}%`,this.queuePointMeterKey.textContent=e},this.handleInputQueuePoint=s=>{const e=s.currentTarget;this.updateQueuePointStyle(Number(e.value))},this.onKey=(s,e)=>{if(e==="down"){const r=this.videoPlayerController.getPlayerKeyByQueueKey(s);if(!r)return;const t=this.videoPlayerController.getQueuePointsByPlayerKey(r);if(!t)return;this.updateQueuePointAdjustValue(t[s]),this.updateQueuePointStyle(t[s])}},this.handleUpdateQueuePointAdjustMax=(s,e)=>{if(!["video-loaded","track-switched"].includes(s)||!this.player)return;const r=this.playerDuration;this.queuePointAdjust&&r>0&&(this.queuePointAdjust.max=String(r))},this.handleChangeQueuePoint=s=>{const e=s.currentTarget;this.videoPlayerController.updateLastQueuePoint(Number(e.value))},this.handlePadPointerdown=(s,e)=>{if(s!=="pad-pointerdown")return;const r=e.trackName;console.log(r);const t=this.videoPlayerController.getQueuePointsByPlayerKey(r);if(!t)return;const o=this.videoPlayerController.getLastQueueKey();o&&(this.updateQueuePointAdjustValue(t[o]),this.updateQueuePointStyle(t[o]))}}get player(){return this.videoPlayerController.getCurrentPlayer()}get playerDuration(){const s=this.videoPlayerController.getLastPlayerKey();return this.videoPlayerController.getCachedDurationByPlayerKey(s)}updateQueuePointAdjustValue(s){this.player&&this.queuePointAdjust&&(this.queuePointAdjust.value=String(s))}connectedCallback(){super.connectedCallback(),U.subscribe(this.onKey),E.subscribe(this.handleUpdateQueuePointAdjustMax),E.subscribe(this.handlePadPointerdown)}disconnectedCallback(){U.unsubscribe(this.onKey),super.disconnectedCallback()}render(){return m`
		<div class="queue-point-adjust-container">
				<div class="queue-point-adjust-meter" id="queue-point-adjust-meter" style="width: 0px;">
					<span class="queue-point-adjust-meter-key" id="queue-point-adjust-meter-key"></span>
				</div>
				<input class="queue-point-adjust" type="range" @input=${this.handleInputQueuePoint} @change=${this.handleChangeQueuePoint} id="queue-point-adjust" step="0.01" max="100">
		</div>
		`}};V.styles=[x,S,cs];_e([se("#queue-point-adjust")],V.prototype,"queuePointAdjust",2);_e([se("#queue-point-adjust-meter")],V.prototype,"queuePointAdjustMeter",2);_e([se("#queue-point-adjust-meter-key")],V.prototype,"queuePointMeterKey",2);V=_e([_("queue-point-adjust")],V);
