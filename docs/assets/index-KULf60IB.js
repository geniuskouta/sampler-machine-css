(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=globalThis,st=z.ShadowRoot&&(z.ShadyCSS===void 0||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,rt=Symbol(),it=new WeakMap;let mt=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==rt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(st&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=it.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&it.set(e,t))}return t}toString(){return this.cssText}};const Pt=n=>new mt(typeof n=="string"?n:n+"",void 0,rt),b=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((r,s,o)=>r+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1],n[0]);return new mt(e,n,rt)},Ot=(n,t)=>{if(st)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),s=z.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=e.cssText,n.appendChild(r)}},at=st?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return Pt(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ct,defineProperty:jt,getOwnPropertyDescriptor:kt,getOwnPropertyNames:Ut,getOwnPropertySymbols:Tt,getPrototypeOf:Dt}=Object,x=globalThis,lt=x.trustedTypes,Mt=lt?lt.emptyScript:"",K=x.reactiveElementPolyfillSupport,k=(n,t)=>n,L={toAttribute(n,t){switch(t){case Boolean:n=n?Mt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},ot=(n,t)=>!Ct(n,t),ct={attribute:!0,type:String,converter:L,reflect:!1,useDefault:!1,hasChanged:ot};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),x.litPropertyMetadata??(x.litPropertyMetadata=new WeakMap);let P=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ct){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,e);s!==void 0&&jt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){const{get:s,set:o}=kt(this.prototype,t)??{get(){return this[e]},set(i){this[e]=i}};return{get:s,set(i){const l=s==null?void 0:s.call(this);o==null||o.call(this,i),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ct}static _$Ei(){if(this.hasOwnProperty(k("elementProperties")))return;const t=Dt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(k("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(k("properties"))){const e=this.properties,r=[...Ut(e),...Tt(e)];for(const s of r)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,s]of e)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const s=this._$Eu(e,r);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)e.unshift(at(s))}else t!==void 0&&e.push(at(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ot(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){var o;const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const i=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:L).toAttribute(e,r.type);this._$Em=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,e){var o,i;const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const l=r.getPropertyOptions(s),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((o=l.converter)==null?void 0:o.fromAttribute)!==void 0?l.converter:L;this._$Em=s,this[s]=a.fromAttribute(e,l.type)??((i=this._$Ej)==null?void 0:i.get(s))??null,this._$Em=null}}requestUpdate(t,e,r){var s;if(t!==void 0){const o=this.constructor,i=this[t];if(r??(r=o.getPropertyOptions(t)),!((r.hasChanged??ot)(i,e)||r.useDefault&&r.reflect&&i===((s=this._$Ej)==null?void 0:s.get(t))&&!this.hasAttribute(o._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:s,wrapped:o},i){r&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,i??e??this[t]),o!==!0||i!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,i]of s){const{wrapped:l}=i,a=this[o];l!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,i,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(r=this._$EO)==null||r.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[k("elementProperties")]=new Map,P[k("finalized")]=new Map,K==null||K({ReactiveElement:P}),(x.reactiveElementVersions??(x.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=globalThis,B=U.trustedTypes,dt=B?B.createPolicy("lit-html",{createHTML:n=>n}):void 0,gt="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,_t="?"+y,Nt=`<${_t}>`,E=document,T=()=>E.createComment(""),D=n=>n===null||typeof n!="object"&&typeof n!="function",nt=Array.isArray,Ht=n=>nt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",G=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pt=/-->/g,ht=/>/g,A=RegExp(`>|${G}(?:([^\\s"'>=/]+)(${G}*=${G}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ut=/'/g,bt=/"/g,vt=/^(?:script|style|textarea|title)$/i,Rt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),$=Rt(1),O=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ft=new WeakMap,w=E.createTreeWalker(E,129);function yt(n,t){if(!nt(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return dt!==void 0?dt.createHTML(t):t}const zt=(n,t)=>{const e=n.length-1,r=[];let s,o=t===2?"<svg>":t===3?"<math>":"",i=j;for(let l=0;l<e;l++){const a=n[l];let d,h,c=-1,f=0;for(;f<a.length&&(i.lastIndex=f,h=i.exec(a),h!==null);)f=i.lastIndex,i===j?h[1]==="!--"?i=pt:h[1]!==void 0?i=ht:h[2]!==void 0?(vt.test(h[2])&&(s=RegExp("</"+h[2],"g")),i=A):h[3]!==void 0&&(i=A):i===A?h[0]===">"?(i=s??j,c=-1):h[1]===void 0?c=-2:(c=i.lastIndex-h[2].length,d=h[1],i=h[3]===void 0?A:h[3]==='"'?bt:ut):i===bt||i===ut?i=A:i===pt||i===ht?i=j:(i=A,s=void 0);const v=i===A&&n[l+1].startsWith("/>")?" ":"";o+=i===j?a+Nt:c>=0?(r.push(d),a.slice(0,c)+gt+a.slice(c)+y+v):a+y+(c===-2?l:v)}return[yt(n,o+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class M{constructor({strings:t,_$litType$:e},r){let s;this.parts=[];let o=0,i=0;const l=t.length-1,a=this.parts,[d,h]=zt(t,e);if(this.el=M.createElement(d,r),w.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=w.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(gt)){const f=h[i++],v=s.getAttribute(c).split(y),R=/([.?@])?(.*)/.exec(f);a.push({type:1,index:o,name:R[2],strings:v,ctor:R[1]==="."?Bt:R[1]==="?"?qt:R[1]==="@"?It:F}),s.removeAttribute(c)}else c.startsWith(y)&&(a.push({type:6,index:o}),s.removeAttribute(c));if(vt.test(s.tagName)){const c=s.textContent.split(y),f=c.length-1;if(f>0){s.textContent=B?B.emptyScript:"";for(let v=0;v<f;v++)s.append(c[v],T()),w.nextNode(),a.push({type:2,index:++o});s.append(c[f],T())}}}else if(s.nodeType===8)if(s.data===_t)a.push({type:2,index:o});else{let c=-1;for(;(c=s.data.indexOf(y,c+1))!==-1;)a.push({type:7,index:o}),c+=y.length-1}o++}}static createElement(t,e){const r=E.createElement("template");return r.innerHTML=t,r}}function C(n,t,e=n,r){var i,l;if(t===O)return t;let s=r!==void 0?(i=e._$Co)==null?void 0:i[r]:e._$Cl;const o=D(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),o===void 0?s=void 0:(s=new o(n),s._$AT(n,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=s:e._$Cl=s),s!==void 0&&(t=C(n,s._$AS(n,t.values),s,r)),t}class Lt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,s=((t==null?void 0:t.creationScope)??E).importNode(e,!0);w.currentNode=s;let o=w.nextNode(),i=0,l=0,a=r[0];for(;a!==void 0;){if(i===a.index){let d;a.type===2?d=new N(o,o.nextSibling,this,t):a.type===1?d=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(d=new Vt(o,this,t)),this._$AV.push(d),a=r[++l]}i!==(a==null?void 0:a.index)&&(o=w.nextNode(),i++)}return w.currentNode=E,s}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class N{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,r,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),D(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==O&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ht(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&D(this._$AH)?this._$AA.nextSibling.data=t:this.T(E.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=M.createElement(yt(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const i=new Lt(s,this),l=i.u(this.options);i.p(e),this.T(l),this._$AH=i}}_$AC(t){let e=ft.get(t.strings);return e===void 0&&ft.set(t.strings,e=new M(t)),e}k(t){nt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,s=0;for(const o of t)s===e.length?e.push(r=new N(this.O(T()),this.O(T()),this,this.options)):r=e[s],r._$AI(o),s++;s<e.length&&(this._$AR(r&&r._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class F{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,s,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=p}_$AI(t,e=this,r,s){const o=this.strings;let i=!1;if(o===void 0)t=C(this,t,e,0),i=!D(t)||t!==this._$AH&&t!==O,i&&(this._$AH=t);else{const l=t;let a,d;for(t=o[0],a=0;a<o.length-1;a++)d=C(this,l[r+a],e,a),d===O&&(d=this._$AH[a]),i||(i=!D(d)||d!==this._$AH[a]),d===p?t=p:t!==p&&(t+=(d??"")+o[a+1]),this._$AH[a]=d}i&&!s&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Bt extends F{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class qt extends F{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class It extends F{constructor(t,e,r,s,o){super(t,e,r,s,o),this.type=5}_$AI(t,e=this){if((t=C(this,t,e,0)??p)===O)return;const r=this._$AH,s=t===p&&r!==p||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==p&&(r===p||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Vt{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const J=U.litHtmlPolyfillSupport;J==null||J(M,N),(U.litHtmlVersions??(U.litHtmlVersions=[])).push("3.3.0");const Wt=(n,t,e)=>{const r=(e==null?void 0:e.renderBefore)??t;let s=r._$litPart$;if(s===void 0){const o=(e==null?void 0:e.renderBefore)??null;r._$litPart$=s=new N(t.insertBefore(T(),o),o,void 0,e??{})}return s._$AI(n),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=globalThis;class u extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Wt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return O}}var $t;u._$litElement$=!0,u.finalized=!0,($t=S.litElementHydrateSupport)==null||$t.call(S,{LitElement:u});const Z=S.litElementPolyfillSupport;Z==null||Z({LitElement:u});(S.litElementVersions??(S.litElementVersions=[])).push("4.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:ot},Ft=(n=Yt,t,e)=>{const{kind:r,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),r==="setter"&&((n=Object.create(n)).wrapped=!0),o.set(e.name,n),r==="accessor"){const{name:i}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(i,a,n)},init(l){return l!==void 0&&this.C(i,void 0,n,l),l}}}if(r==="setter"){const{name:i}=e;return function(l){const a=this[i];t.call(this,l),this.requestUpdate(i,a,n)}}throw Error("Unsupported decorator location: "+r)};function H(n){return(t,e)=>typeof e=="object"?Ft(n,t,e):((r,s,o)=>{const i=s.hasOwnProperty(o);return s.constructor.createProperty(o,r),i?Object.getOwnPropertyDescriptor(s,o):void 0})(n,t,e)}const g=b`
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
`,_=b`
* {
	box-sizing: border-box;
}
`,Kt=b`
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
`;var Gt=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,xt=(n,t,e,r)=>{for(var s=r>1?void 0:r?Jt(t,e):t,o=n.length-1,i;o>=0;o--)(i=n[o])&&(s=(r?i(t,e,s):i(s))||s);return r&&s&&Gt(t,e,s),s};let q=class extends u{constructor(){super(...arguments),this.count=0}render(){return $`
			<nav class="controller-content-volume">
				<span class="volume-adjust-meter-label">Volume</span>
				<div class="volume-adjust-meter">
					<div
						class="volume-adjust-meter-indicator"
						style="bottom: 92px;"
					></div>
				</div>
				<input
					class="volume-adjust"
					type="range"
					step="0.01"
				/>
			</nav>
		`}};q.styles=[g,_,Kt];xt([H({type:Number})],q.prototype,"count",2);q=xt([m("volume-adjust")],q);const Zt=b`

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

`;var Xt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,At=(n,t,e,r)=>{for(var s=r>1?void 0:r?Qt(t,e):t,o=n.length-1,i;o>=0;o--)(i=n[o])&&(s=(r?i(t,e,s):i(s))||s);return r&&s&&Xt(t,e,s),s};let I=class extends u{constructor(){super(...arguments),this.speed="1x"}render(){return $`
		<div class="speed-button-container">
			<span class="speed-button-label">${this.speed}</span>
			<a class="speed-button"></a>
		</div>
	`}};I.styles=[g,_,Zt];At([H({type:String})],I.prototype,"speed",2);I=At([m("speed-adjust-button")],I);const te=b`
.speed-button-list {
    display: flex;
    justify-content: space-between;
	width: 246px;
}

.speed-button-list:nth-child(n + 2) {
	margin-top: 12px;
}
`;var ee=Object.defineProperty,se=Object.getOwnPropertyDescriptor,wt=(n,t,e,r)=>{for(var s=r>1?void 0:r?se(t,e):t,o=n.length-1,i;o>=0;o--)(i=n[o])&&(s=(r?i(t,e,s):i(s))||s);return r&&s&&ee(t,e,s),s};let V=class extends u{constructor(){super(...arguments),this.count=0}render(){return $`
			<nav class="speed-button-list">
				<speed-adjust-button speed="0.25x"></speed-adjust-button>
				<speed-adjust-button speed="0.5x"></speed-adjust-button>
				<speed-adjust-button speed="0.75x"></speed-adjust-button>
				<speed-adjust-button speed="1x"></speed-adjust-button>
			</nav>
			<nav class="speed-button-list">
				<speed-adjust-button speed="1.25x"></speed-adjust-button>
				<speed-adjust-button speed="1.5x"></speed-adjust-button>
				<speed-adjust-button speed="1.75x"></speed-adjust-button>
				<speed-adjust-button speed="2x"></speed-adjust-button>
			</nav>
    `}};V.styles=[g,_,te];wt([H({type:Number})],V.prototype,"count",2);V=wt([m("speed-adjust-button-group")],V);const re=b`

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
`;var oe=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,St=(n,t,e,r)=>{for(var s=r>1?void 0:r?ne(t,e):t,o=n.length-1,i;o>=0;o--)(i=n[o])&&(s=(r?i(t,e,s):i(s))||s);return r&&s&&oe(t,e,s),s};let W=class extends u{constructor(){super(...arguments),this.speed="1x"}render(){return $`
		<div class="track-button-container">
			<span class="track-button-label">RECORD</span>
			<a class="track-button"></a>
		</div>
	`}};W.styles=[g,_,re];St([H({type:String})],W.prototype,"speed",2);W=St([m("record-button")],W);const ie=b`

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
`;var ae=Object.getOwnPropertyDescriptor,le=(n,t,e,r)=>{for(var s=r>1?void 0:r?ae(t,e):t,o=n.length-1,i;o>=0;o--)(i=n[o])&&(s=i(s)||s);return s};let X=class extends u{render(){return $`
		<div class="track-button-container">
			<span class="track-button-label">DELETE</span>
			<a class="track-button"></a>
		</div>
	`}};X.styles=[g,_,ie];X=le([m("delete-button")],X);const ce=b`

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

.track-button:active {
    box-shadow: 0 2px 0 #c6beae;
    transform: translateY(2px);
}
`;var de=Object.getOwnPropertyDescriptor,pe=(n,t,e,r)=>{for(var s=r>1?void 0:r?de(t,e):t,o=n.length-1,i;o>=0;o--)(i=n[o])&&(s=i(s)||s);return s};let Q=class extends u{render(){return $`
		<div class="track-button-container">
			<span class="track-button-label">STOP</span>
			<a class="track-button"></a>
		</div>
	`}};Q.styles=[g,_,ce];Q=pe([m("stop-button")],Q);const he=b`

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

.track-button:active {
    box-shadow: 0 2px 0 #c6beae;
    transform: translateY(2px);
}
`;var ue=Object.getOwnPropertyDescriptor,be=(n,t,e,r)=>{for(var s=r>1?void 0:r?ue(t,e):t,o=n.length-1,i;o>=0;o--)(i=n[o])&&(s=i(s)||s);return s};let tt=class extends u{render(){return $`
		<div class="track-button-container">
			<span class="track-button-label">START</span>
			<a class="track-button"></a>
		</div>
	`}};tt.styles=[g,_,he];tt=be([m("start-button")],tt);const fe=b`
.controller-content-track-functions {
    display: flex;
	width: 246px;
    gap: 18px;
    text-align: center;
}
`;var $e=Object.defineProperty,me=Object.getOwnPropertyDescriptor,Et=(n,t,e,r)=>{for(var s=r>1?void 0:r?me(t,e):t,o=n.length-1,i;o>=0;o--)(i=n[o])&&(s=(r?i(t,e,s):i(s))||s);return r&&s&&$e(t,e,s),s};let Y=class extends u{constructor(){super(...arguments),this.count=0}render(){return $`
			<nav class="controller-content-track-functions">
				<record-button></record-button>
				<delete-button></delete-button>
				<stop-button></stop-button>
				<start-button></start-button>
			</nav>
    `}};Y.styles=[g,_,fe];Et([H({type:Number})],Y.prototype,"count",2);Y=Et([m("track-control-button-group")],Y);const ge=b`
.video-slot-container {
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

.video-slot {
  display: block;
  height: 100%;
  opacity: 0.6;
}
`;var _e=Object.getOwnPropertyDescriptor,ve=(n,t,e,r)=>{for(var s=r>1?void 0:r?_e(t,e):t,o=n.length-1,i;o>=0;o--)(i=n[o])&&(s=i(s)||s);return s};let et=class extends u{render(){return $`
			<div class="video-slot-container" player-container-id="player-a">
				aaa
            	<iframe class="video-slot" player-id="player-b" id="player-b" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" title="East Of Underground -  I Love You" width="320" height="90" src="https://www.youtube.com/embed/seARsMwjbEU?si=AOUpF9DDAEX9Bjx9"></iframe>
          	</div>
		`}};et.styles=[g,_,ge];et=ve([m("video-player")],et);
