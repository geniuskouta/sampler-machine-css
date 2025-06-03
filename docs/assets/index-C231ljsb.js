(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=globalThis,it=z.ShadowRoot&&(z.ShadyCSS===void 0||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,at=Symbol(),pt=new WeakMap;let yt=class{constructor(t,s,r){if(this._$cssResult$=!0,r!==at)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const s=this.t;if(it&&t===void 0){const r=s!==void 0&&s.length===1;r&&(t=pt.get(s)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&pt.set(s,t))}return t}toString(){return this.cssText}};const Ut=n=>new yt(typeof n=="string"?n:n+"",void 0,at),b=(n,...t)=>{const s=n.length===1?n[0]:t.reduce((r,e,o)=>r+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+n[o+1],n[0]);return new yt(s,n,at)},Mt=(n,t)=>{if(it)n.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of t){const r=document.createElement("style"),e=z.litNonce;e!==void 0&&r.setAttribute("nonce",e),r.textContent=s.cssText,n.appendChild(r)}},dt=it?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let s="";for(const r of t.cssRules)s+=r.cssText;return Ut(s)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Rt,defineProperty:Ht,getOwnPropertyDescriptor:zt,getOwnPropertyNames:Lt,getOwnPropertySymbols:Bt,getPrototypeOf:qt}=Object,w=globalThis,ut=w.trustedTypes,It=ut?ut.emptyScript:"",X=w.reactiveElementPolyfillSupport,N=(n,t)=>n,L={toAttribute(n,t){switch(t){case Boolean:n=n?It:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let s=n;switch(t){case Boolean:s=n!==null;break;case Number:s=n===null?null:Number(n);break;case Object:case Array:try{s=JSON.parse(n)}catch{s=null}}return s}},lt=(n,t)=>!Rt(n,t),ht={attribute:!0,type:String,converter:L,reflect:!1,useDefault:!1,hasChanged:lt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),w.litPropertyMetadata??(w.litPropertyMetadata=new WeakMap);let E=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=ht){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){const r=Symbol(),e=this.getPropertyDescriptor(t,r,s);e!==void 0&&Ht(this.prototype,t,e)}}static getPropertyDescriptor(t,s,r){const{get:e,set:o}=zt(this.prototype,t)??{get(){return this[s]},set(i){this[s]=i}};return{get:e,set(i){const l=e==null?void 0:e.call(this);o==null||o.call(this,i),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ht}static _$Ei(){if(this.hasOwnProperty(N("elementProperties")))return;const t=qt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(N("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(N("properties"))){const s=this.properties,r=[...Lt(s),...Bt(s)];for(const e of r)this.createProperty(e,s[e])}const t=this[Symbol.metadata];if(t!==null){const s=litPropertyMetadata.get(t);if(s!==void 0)for(const[r,e]of s)this.elementProperties.set(r,e)}this._$Eh=new Map;for(const[s,r]of this.elementProperties){const e=this._$Eu(s,r);e!==void 0&&this._$Eh.set(e,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const e of r)s.unshift(dt(e))}else t!==void 0&&s.push(dt(t));return s}static _$Eu(t,s){const r=s.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(s=>s(this))}addController(t){var s;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)==null||s.call(t))}removeController(t){var s;(s=this._$EO)==null||s.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const r of s.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Mt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostConnected)==null?void 0:r.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostDisconnected)==null?void 0:r.call(s)})}attributeChangedCallback(t,s,r){this._$AK(t,r)}_$ET(t,s){var o;const r=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,r);if(e!==void 0&&r.reflect===!0){const i=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:L).toAttribute(s,r.type);this._$Em=t,i==null?this.removeAttribute(e):this.setAttribute(e,i),this._$Em=null}}_$AK(t,s){var o,i;const r=this.constructor,e=r._$Eh.get(t);if(e!==void 0&&this._$Em!==e){const l=r.getPropertyOptions(e),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((o=l.converter)==null?void 0:o.fromAttribute)!==void 0?l.converter:L;this._$Em=e,this[e]=a.fromAttribute(s,l.type)??((i=this._$Ej)==null?void 0:i.get(e))??null,this._$Em=null}}requestUpdate(t,s,r){var e;if(t!==void 0){const o=this.constructor,i=this[t];if(r??(r=o.getPropertyOptions(t)),!((r.hasChanged??lt)(i,s)||r.useDefault&&r.reflect&&i===((e=this._$Ej)==null?void 0:e.get(t))&&!this.hasAttribute(o._$Eu(t,r))))return;this.C(t,s,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,s,{useDefault:r,reflect:e,wrapped:o},i){r&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,i??s??this[t]),o!==!0||i!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(s=void 0),this._$AL.set(t,s)),e===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[o,i]of e){const{wrapped:l}=i,a=this[o];l!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,i,a)}}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(r=this._$EO)==null||r.forEach(e=>{var o;return(o=e.hostUpdate)==null?void 0:o.call(e)}),this.update(s)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(s)}willUpdate(t){}_$AE(t){var s;(s=this._$EO)==null||s.forEach(r=>{var e;return(e=r.hostUpdated)==null?void 0:e.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(s=>this._$ET(s,this[s]))),this._$EM()}updated(t){}firstUpdated(t){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[N("elementProperties")]=new Map,E[N("finalized")]=new Map,X==null||X({ReactiveElement:E}),(w.reactiveElementVersions??(w.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis,B=D.trustedTypes,bt=B?B.createPolicy("lit-html",{createHTML:n=>n}):void 0,xt="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,wt="?"+x,Vt=`<${wt}>`,O=document,T=()=>O.createComment(""),U=n=>n===null||typeof n!="object"&&typeof n!="function",ct=Array.isArray,Wt=n=>ct(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",Q=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ft=/-->/g,mt=/>/g,A=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$t=/'/g,gt=/"/g,At=/^(?:script|style|textarea|title)$/i,Yt=n=>(t,...s)=>({_$litType$:n,strings:t,values:s}),f=Yt(1),j=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),vt=new WeakMap,S=O.createTreeWalker(O,129);function St(n,t){if(!ct(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return bt!==void 0?bt.createHTML(t):t}const Kt=(n,t)=>{const s=n.length-1,r=[];let e,o=t===2?"<svg>":t===3?"<math>":"",i=k;for(let l=0;l<s;l++){const a=n[l];let p,h,c=-1,v=0;for(;v<a.length&&(i.lastIndex=v,h=i.exec(a),h!==null);)v=i.lastIndex,i===k?h[1]==="!--"?i=ft:h[1]!==void 0?i=mt:h[2]!==void 0?(At.test(h[2])&&(e=RegExp("</"+h[2],"g")),i=A):h[3]!==void 0&&(i=A):i===A?h[0]===">"?(i=e??k,c=-1):h[1]===void 0?c=-2:(c=i.lastIndex-h[2].length,p=h[1],i=h[3]===void 0?A:h[3]==='"'?gt:$t):i===gt||i===$t?i=A:i===ft||i===mt?i=k:(i=A,e=void 0);const y=i===A&&n[l+1].startsWith("/>")?" ":"";o+=i===k?a+Vt:c>=0?(r.push(p),a.slice(0,c)+xt+a.slice(c)+x+y):a+x+(c===-2?l:y)}return[St(n,o+(n[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class M{constructor({strings:t,_$litType$:s},r){let e;this.parts=[];let o=0,i=0;const l=t.length-1,a=this.parts,[p,h]=Kt(t,s);if(this.el=M.createElement(p,r),S.currentNode=this.el.content,s===2||s===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(e=S.nextNode())!==null&&a.length<l;){if(e.nodeType===1){if(e.hasAttributes())for(const c of e.getAttributeNames())if(c.endsWith(xt)){const v=h[i++],y=e.getAttribute(c).split(x),H=/([.?@])?(.*)/.exec(v);a.push({type:1,index:o,name:H[2],strings:y,ctor:H[1]==="."?Ft:H[1]==="?"?Jt:H[1]==="@"?Zt:Z}),e.removeAttribute(c)}else c.startsWith(x)&&(a.push({type:6,index:o}),e.removeAttribute(c));if(At.test(e.tagName)){const c=e.textContent.split(x),v=c.length-1;if(v>0){e.textContent=B?B.emptyScript:"";for(let y=0;y<v;y++)e.append(c[y],T()),S.nextNode(),a.push({type:2,index:++o});e.append(c[v],T())}}}else if(e.nodeType===8)if(e.data===wt)a.push({type:2,index:o});else{let c=-1;for(;(c=e.data.indexOf(x,c+1))!==-1;)a.push({type:7,index:o}),c+=x.length-1}o++}}static createElement(t,s){const r=O.createElement("template");return r.innerHTML=t,r}}function C(n,t,s=n,r){var i,l;if(t===j)return t;let e=r!==void 0?(i=s._$Co)==null?void 0:i[r]:s._$Cl;const o=U(t)?void 0:t._$litDirective$;return(e==null?void 0:e.constructor)!==o&&((l=e==null?void 0:e._$AO)==null||l.call(e,!1),o===void 0?e=void 0:(e=new o(n),e._$AT(n,s,r)),r!==void 0?(s._$Co??(s._$Co=[]))[r]=e:s._$Cl=e),e!==void 0&&(t=C(n,e._$AS(n,t.values),e,r)),t}class Gt{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:r}=this._$AD,e=((t==null?void 0:t.creationScope)??O).importNode(s,!0);S.currentNode=e;let o=S.nextNode(),i=0,l=0,a=r[0];for(;a!==void 0;){if(i===a.index){let p;a.type===2?p=new R(o,o.nextSibling,this,t):a.type===1?p=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(p=new Xt(o,this,t)),this._$AV.push(p),a=r[++l]}i!==(a==null?void 0:a.index)&&(o=S.nextNode(),i++)}return S.currentNode=O,e}p(t){let s=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,s),s+=r.strings.length-2):r._$AI(t[s])),s++}}class R{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,s,r,e){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=r,this.options=e,this._$Cv=(e==null?void 0:e.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=C(this,t,s),U(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==j&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Wt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){var o;const{values:s,_$litType$:r}=t,e=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=M.createElement(St(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===e)this._$AH.p(s);else{const i=new Gt(e,this),l=i.u(this.options);i.p(s),this.T(l),this._$AH=i}}_$AC(t){let s=vt.get(t.strings);return s===void 0&&vt.set(t.strings,s=new M(t)),s}k(t){ct(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let r,e=0;for(const o of t)e===s.length?s.push(r=new R(this.O(T()),this.O(T()),this,this.options)):r=s[e],r._$AI(o),e++;e<s.length&&(this._$AR(r&&r._$AB.nextSibling,e),s.length=e)}_$AR(t=this._$AA.nextSibling,s){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,s);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var s;this._$AM===void 0&&(this._$Cv=t,(s=this._$AP)==null||s.call(this,t))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,r,e,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=s,this._$AM=e,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=d}_$AI(t,s=this,r,e){const o=this.strings;let i=!1;if(o===void 0)t=C(this,t,s,0),i=!U(t)||t!==this._$AH&&t!==j,i&&(this._$AH=t);else{const l=t;let a,p;for(t=o[0],a=0;a<o.length-1;a++)p=C(this,l[r+a],s,a),p===j&&(p=this._$AH[a]),i||(i=!U(p)||p!==this._$AH[a]),p===d?t=d:t!==d&&(t+=(p??"")+o[a+1]),this._$AH[a]=p}i&&!e&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ft extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Jt extends Z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Zt extends Z{constructor(t,s,r,e,o){super(t,s,r,e,o),this.type=5}_$AI(t,s=this){if((t=C(this,t,s,0)??d)===j)return;const r=this._$AH,e=t===d&&r!==d||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==d&&(r===d||e);e&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,t):this._$AH.handleEvent(t)}}class Xt{constructor(t,s,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const tt=D.litHtmlPolyfillSupport;tt==null||tt(M,R),(D.litHtmlVersions??(D.litHtmlVersions=[])).push("3.3.0");const Qt=(n,t,s)=>{const r=(s==null?void 0:s.renderBefore)??t;let e=r._$litPart$;if(e===void 0){const o=(s==null?void 0:s.renderBefore)??null;r._$litPart$=e=new R(t.insertBefore(T(),o),o,void 0,s??{})}return e._$AI(n),e};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis;class u extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const t=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=t.firstChild),t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Qt(s,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return j}}var _t;u._$litElement$=!0,u.finalized=!0,(_t=P.litElementHydrateSupport)==null||_t.call(P,{LitElement:u});const et=P.litElementPolyfillSupport;et==null||et({LitElement:u});(P.litElementVersions??(P.litElementVersions=[])).push("4.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=n=>(t,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const te={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:lt},ee=(n=te,t,s)=>{const{kind:r,metadata:e}=s;let o=globalThis.litPropertyMetadata.get(e);if(o===void 0&&globalThis.litPropertyMetadata.set(e,o=new Map),r==="setter"&&((n=Object.create(n)).wrapped=!0),o.set(s.name,n),r==="accessor"){const{name:i}=s;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(i,a,n)},init(l){return l!==void 0&&this.C(i,void 0,n,l),l}}}if(r==="setter"){const{name:i}=s;return function(l){const a=this[i];t.call(this,l),this.requestUpdate(i,a,n)}}throw Error("Unsupported decorator location: "+r)};function _(n){return(t,s)=>typeof s=="object"?ee(n,t,s):((r,e,o)=>{const i=e.hasOwnProperty(o);return e.constructor.createProperty(o,r),i?Object.getOwnPropertyDescriptor(e,o):void 0})(n,t,s)}const $=b`
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
`,g=b`
* {
	box-sizing: border-box;
}
`,se=b`
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
`;var re=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,Pt=(n,t,s,r)=>{for(var e=r>1?void 0:r?oe(t,s):t,o=n.length-1,i;o>=0;o--)(i=n[o])&&(e=(r?i(t,s,e):i(e))||e);return r&&e&&re(t,s,e),e};let q=class extends u{constructor(){super(...arguments),this.count=0}render(){return f`
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
		`}};q.styles=[$,g,se];Pt([_({type:Number})],q.prototype,"count",2);q=Pt([m("volume-adjust")],q);const ne=b`

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

`;var ie=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,Ot=(n,t,s,r)=>{for(var e=r>1?void 0:r?ae(t,s):t,o=n.length-1,i;o>=0;o--)(i=n[o])&&(e=(r?i(t,s,e):i(e))||e);return r&&e&&ie(t,s,e),e};let I=class extends u{constructor(){super(...arguments),this.speed="1x"}render(){return f`
		<div class="speed-button-container">
			<span class="speed-button-label">${this.speed}</span>
			<a class="speed-button"></a>
		</div>
	`}};I.styles=[$,g,ne];Ot([_({type:String})],I.prototype,"speed",2);I=Ot([m("speed-adjust-button")],I);const le=b`
.speed-button-list {
    display: flex;
    justify-content: space-between;
	width: 246px;
}

.speed-button-list:nth-child(n + 2) {
	margin-top: 12px;
}
`;var ce=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,Et=(n,t,s,r)=>{for(var e=r>1?void 0:r?pe(t,s):t,o=n.length-1,i;o>=0;o--)(i=n[o])&&(e=(r?i(t,s,e):i(e))||e);return r&&e&&ce(t,s,e),e};let V=class extends u{constructor(){super(...arguments),this.count=0}render(){return f`
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
    `}};V.styles=[$,g,le];Et([_({type:Number})],V.prototype,"count",2);V=Et([m("speed-adjust-button-group")],V);const de=b`

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
`;var ue=Object.defineProperty,he=Object.getOwnPropertyDescriptor,jt=(n,t,s,r)=>{for(var e=r>1?void 0:r?he(t,s):t,o=n.length-1,i;o>=0;o--)(i=n[o])&&(e=(r?i(t,s,e):i(e))||e);return r&&e&&ue(t,s,e),e};let W=class extends u{constructor(){super(...arguments),this.speed="1x"}render(){return f`
		<div class="track-button-container">
			<span class="track-button-label">RECORD</span>
			<a class="track-button"></a>
		</div>
	`}};W.styles=[$,g,de];jt([_({type:String})],W.prototype,"speed",2);W=jt([m("record-button")],W);const be=b`

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
`;var fe=Object.getOwnPropertyDescriptor,me=(n,t,s,r)=>{for(var e=r>1?void 0:r?fe(t,s):t,o=n.length-1,i;o>=0;o--)(i=n[o])&&(e=i(e)||e);return e};let st=class extends u{render(){return f`
		<div class="track-button-container">
			<span class="track-button-label">DELETE</span>
			<a class="track-button"></a>
		</div>
	`}};st.styles=[$,g,be];st=me([m("delete-button")],st);const $e=b`

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
`;var ge=Object.getOwnPropertyDescriptor,ve=(n,t,s,r)=>{for(var e=r>1?void 0:r?ge(t,s):t,o=n.length-1,i;o>=0;o--)(i=n[o])&&(e=i(e)||e);return e};let rt=class extends u{render(){return f`
		<div class="track-button-container">
			<span class="track-button-label">STOP</span>
			<a class="track-button"></a>
		</div>
	`}};rt.styles=[$,g,$e];rt=ve([m("stop-button")],rt);const _e=b`

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
`;var ye=Object.getOwnPropertyDescriptor,xe=(n,t,s,r)=>{for(var e=r>1?void 0:r?ye(t,s):t,o=n.length-1,i;o>=0;o--)(i=n[o])&&(e=i(e)||e);return e};let ot=class extends u{render(){return f`
		<div class="track-button-container">
			<span class="track-button-label">START</span>
			<a class="track-button"></a>
		</div>
	`}};ot.styles=[$,g,_e];ot=xe([m("start-button")],ot);const we=b`
.controller-content-track-functions {
    display: flex;
	width: 246px;
    gap: 18px;
    text-align: center;
}
`;var Ae=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,Ct=(n,t,s,r)=>{for(var e=r>1?void 0:r?Se(t,s):t,o=n.length-1,i;o>=0;o--)(i=n[o])&&(e=(r?i(t,s,e):i(e))||e);return r&&e&&Ae(t,s,e),e};let Y=class extends u{constructor(){super(...arguments),this.count=0}render(){return f`
			<nav class="controller-content-track-functions">
				<record-button></record-button>
				<delete-button></delete-button>
				<stop-button></stop-button>
				<start-button></start-button>
			</nav>
    `}};Y.styles=[$,g,we];Ct([_({type:Number})],Y.prototype,"count",2);Y=Ct([m("track-control-button-group")],Y);const Pe=b`
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
`;var Oe=Object.getOwnPropertyDescriptor,Ee=(n,t,s,r)=>{for(var e=r>1?void 0:r?Oe(t,s):t,o=n.length-1,i;o>=0;o--)(i=n[o])&&(e=i(e)||e);return e};let nt=class extends u{render(){return f`
			<div class="video-slot-container" player-container-id="player-a">
            	<iframe class="video-slot" player-id="player-b" id="player-b" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" title="East Of Underground -  I Love You" width="320" height="90" src="https://www.youtube.com/embed/seARsMwjbEU?si=AOUpF9DDAEX9Bjx9"></iframe>
          	</div>
		`}};nt.styles=[$,g,Pe];nt=Ee([m("video-player")],nt);const je=b`

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

.track-button:active {
  box-shadow: 0 1.5px 0 #263b4a;
  transform: translateY(1px);
}
`;var Ce=Object.defineProperty,ke=Object.getOwnPropertyDescriptor,kt=(n,t,s,r)=>{for(var e=r>1?void 0:r?ke(t,s):t,o=n.length-1,i;o>=0;o--)(i=n[o])&&(e=(r?i(t,s,e):i(e))||e);return r&&e&&Ce(t,s,e),e};let K=class extends u{constructor(){super(...arguments),this.trackName="TRACK1"}render(){return f`
		<div class="track-button-container">
			<span class="track-button-label">${this.trackName}</span>
			<a class="track-button"></a>
		</div>
	`}};K.styles=[$,g,je];kt([_({type:String})],K.prototype,"trackName",2);K=kt([m("track-switch-button")],K);const Ne=b`
.track-switch-button-list {
    display: flex;
    gap: 18px;
    text-align: center;
    margin-top: 12px;
    justify-content: end;
}
`;var De=Object.defineProperty,Te=Object.getOwnPropertyDescriptor,Nt=(n,t,s,r)=>{for(var e=r>1?void 0:r?Te(t,s):t,o=n.length-1,i;o>=0;o--)(i=n[o])&&(e=(r?i(t,s,e):i(e))||e);return r&&e&&De(t,s,e),e};let G=class extends u{constructor(){super(...arguments),this.count=0}render(){return f`
			<nav class="track-switch-button-list">
				<track-switch-button trackName="TRACK1"></track-switch-button>
				<track-switch-button trackName="TRACK2"></track-switch-button>
				<track-switch-button trackName="TRACK3"></track-switch-button>
			</nav>
    `}};G.styles=[$,g,Ne];Nt([_({type:Number})],G.prototype,"count",2);G=Nt([m("track-switch-button-group")],G);const Ue=b`
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
.sampler-pad-active {
  color: #e1b12c;
  box-shadow: 0 2px 0 rgba(225, 177, 44, 0.85);
  transform: translateY(2px);
}
`;var Me=Object.defineProperty,Re=Object.getOwnPropertyDescriptor,Dt=(n,t,s,r)=>{for(var e=r>1?void 0:r?Re(t,s):t,o=n.length-1,i;o>=0;o--)(i=n[o])&&(e=(r?i(t,s,e):i(e))||e);return r&&e&&Me(t,s,e),e};let F=class extends u{constructor(){super(...arguments),this.padName="1"}render(){return f`
		<a class="sampler-pad">${this.padName}</a>
	`}};F.styles=[$,g,Ue];Dt([_({type:String})],F.prototype,"padName",2);F=Dt([m("sampler-pad")],F);const He=b`
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
`;var ze=Object.defineProperty,Le=Object.getOwnPropertyDescriptor,Tt=(n,t,s,r)=>{for(var e=r>1?void 0:r?Le(t,s):t,o=n.length-1,i;o>=0;o--)(i=n[o])&&(e=(r?i(t,s,e):i(e))||e);return r&&e&&ze(t,s,e),e};let J=class extends u{constructor(){super(...arguments),this.count=0}render(){return f`
			<nav class="sampler-pad-group">
				<sampler-pad padName="q"></sampler-pad>
				<sampler-pad padName="w"></sampler-pad>
				<sampler-pad padName="e"></sampler-pad>
				<sampler-pad padName="r"></sampler-pad>
				<sampler-pad padName="t"></sampler-pad>
				<sampler-pad padName="y"></sampler-pad>
				<sampler-pad padName="u"></sampler-pad>
				<sampler-pad padName="i"></sampler-pad>
				<sampler-pad padName="o"></sampler-pad>
			</nav>
    `}};J.styles=[$,g,He];Tt([_({type:Number})],J.prototype,"count",2);J=Tt([m("sampler-pad-group")],J);
