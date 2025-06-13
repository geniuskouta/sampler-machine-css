(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ce=globalThis,Me=ce.ShadowRoot&&(ce.ShadyCSS===void 0||ce.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qe=Symbol(),ze=new WeakMap;let vt=class{constructor(e,r,t){if(this._$cssResult$=!0,t!==qe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Me&&e===void 0){const t=r!==void 0&&r.length===1;t&&(e=ze.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&ze.set(r,e))}return e}toString(){return this.cssText}};const Ot=n=>new vt(typeof n=="string"?n:n+"",void 0,qe),C=(n,...e)=>{const r=n.length===1?n[0]:e.reduce((t,s,o)=>t+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1],n[0]);return new vt(r,n,qe)},Nt=(n,e)=>{if(Me)n.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const t=document.createElement("style"),s=ce.litNonce;s!==void 0&&t.setAttribute("nonce",s),t.textContent=r.cssText,n.appendChild(t)}},Qe=Me?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let r="";for(const t of e.cssRules)r+=t.cssText;return Ot(r)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ft,defineProperty:Tt,getOwnPropertyDescriptor:jt,getOwnPropertyNames:It,getOwnPropertySymbols:Dt,getPrototypeOf:Rt}=Object,O=globalThis,Ge=O.trustedTypes,Mt=Ge?Ge.emptyScript:"",we=O.reactiveElementPolyfillSupport,V=(n,e)=>n,de={toAttribute(n,e){switch(e){case Boolean:n=n?Mt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let r=n;switch(e){case Boolean:r=n!==null;break;case Number:r=n===null?null:Number(n);break;case Object:case Array:try{r=JSON.parse(n)}catch{r=null}}return r}},Ke=(n,e)=>!Ft(n,e),We={attribute:!0,type:String,converter:de,reflect:!1,useDefault:!1,hasChanged:Ke};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),O.litPropertyMetadata??(O.litPropertyMetadata=new WeakMap);let R=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=We){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){const t=Symbol(),s=this.getPropertyDescriptor(e,t,r);s!==void 0&&Tt(this.prototype,e,s)}}static getPropertyDescriptor(e,r,t){const{get:s,set:o}=jt(this.prototype,e)??{get(){return this[r]},set(a){this[r]=a}};return{get:s,set(a){const p=s==null?void 0:s.call(this);o==null||o.call(this,a),this.requestUpdate(e,p,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??We}static _$Ei(){if(this.hasOwnProperty(V("elementProperties")))return;const e=Rt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(V("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(V("properties"))){const r=this.properties,t=[...It(r),...Dt(r)];for(const s of t)this.createProperty(s,r[s])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[t,s]of r)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[r,t]of this.elementProperties){const s=this._$Eu(r,t);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const t=new Set(e.flat(1/0).reverse());for(const s of t)r.unshift(Qe(s))}else e!==void 0&&r.push(Qe(e));return r}static _$Eu(e,r){const t=r.attribute;return t===!1?void 0:typeof t=="string"?t:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const t of r.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Nt(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var t;return(t=r.hostConnected)==null?void 0:t.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var t;return(t=r.hostDisconnected)==null?void 0:t.call(r)})}attributeChangedCallback(e,r,t){this._$AK(e,t)}_$ET(e,r){var o;const t=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,t);if(s!==void 0&&t.reflect===!0){const a=(((o=t.converter)==null?void 0:o.toAttribute)!==void 0?t.converter:de).toAttribute(r,t.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,r){var o,a;const t=this.constructor,s=t._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const p=t.getPropertyOptions(s),c=typeof p.converter=="function"?{fromAttribute:p.converter}:((o=p.converter)==null?void 0:o.fromAttribute)!==void 0?p.converter:de;this._$Em=s,this[s]=c.fromAttribute(r,p.type)??((a=this._$Ej)==null?void 0:a.get(s))??null,this._$Em=null}}requestUpdate(e,r,t){var s;if(e!==void 0){const o=this.constructor,a=this[e];if(t??(t=o.getPropertyOptions(e)),!((t.hasChanged??Ke)(a,r)||t.useDefault&&t.reflect&&a===((s=this._$Ej)==null?void 0:s.get(e))&&!this.hasAttribute(o._$Eu(e,t))))return;this.C(e,r,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:t,reflect:s,wrapped:o},a){t&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??r??this[e]),o!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||t||(r=void 0),this._$AL.set(e,r)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,a]of s){const{wrapped:p}=a,c=this[o];p!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,a,c)}}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$EO)==null||t.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(r)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(t=>{var s;return(s=t.hostUpdated)==null?void 0:s.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(e){}firstUpdated(e){}};R.elementStyles=[],R.shadowRootOptions={mode:"open"},R[V("elementProperties")]=new Map,R[V("finalized")]=new Map,we==null||we({ReactiveElement:R}),(O.reactiveElementVersions??(O.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis,pe=B.trustedTypes,Je=pe?pe.createPolicy("lit-html",{createHTML:n=>n}):void 0,bt="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,gt="?"+E,qt=`<${gt}>`,D=document,H=()=>D.createComment(""),Y=n=>n===null||typeof n!="object"&&typeof n!="function",Ue=Array.isArray,Kt=n=>Ue(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",xe=`[ 	
\f\r]`,L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ze=/-->/g,Xe=/>/g,T=RegExp(`>|${xe}(?:([^\\s"'>=/]+)(${xe}*=${xe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),et=/'/g,tt=/"/g,mt=/^(?:script|style|textarea|title)$/i,Ut=n=>(e,...r)=>({_$litType$:n,strings:e,values:r}),_=Ut(1),M=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),rt=new WeakMap,j=D.createTreeWalker(D,129);function $t(n,e){if(!Ue(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Je!==void 0?Je.createHTML(e):e}const Lt=(n,e)=>{const r=n.length-1,t=[];let s,o=e===2?"<svg>":e===3?"<math>":"",a=L;for(let p=0;p<r;p++){const c=n[p];let d,l,i=-1,u=0;for(;u<c.length&&(a.lastIndex=u,l=a.exec(c),l!==null);)u=a.lastIndex,a===L?l[1]==="!--"?a=Ze:l[1]!==void 0?a=Xe:l[2]!==void 0?(mt.test(l[2])&&(s=RegExp("</"+l[2],"g")),a=T):l[3]!==void 0&&(a=T):a===T?l[0]===">"?(a=s??L,i=-1):l[1]===void 0?i=-2:(i=a.lastIndex-l[2].length,d=l[1],a=l[3]===void 0?T:l[3]==='"'?tt:et):a===tt||a===et?a=T:a===Ze||a===Xe?a=L:(a=T,s=void 0);const h=a===T&&n[p+1].startsWith("/>")?" ":"";o+=a===L?c+qt:i>=0?(t.push(d),c.slice(0,i)+bt+c.slice(i)+E+h):c+E+(i===-2?p:h)}return[$t(n,o+(n[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),t]};class z{constructor({strings:e,_$litType$:r},t){let s;this.parts=[];let o=0,a=0;const p=e.length-1,c=this.parts,[d,l]=Lt(e,r);if(this.el=z.createElement(d,t),j.currentNode=this.el.content,r===2||r===3){const i=this.el.content.firstChild;i.replaceWith(...i.childNodes)}for(;(s=j.nextNode())!==null&&c.length<p;){if(s.nodeType===1){if(s.hasAttributes())for(const i of s.getAttributeNames())if(i.endsWith(bt)){const u=l[a++],h=s.getAttribute(i).split(E),f=/([.?@])?(.*)/.exec(u);c.push({type:1,index:o,name:f[2],strings:h,ctor:f[1]==="."?Bt:f[1]==="?"?Ht:f[1]==="@"?Yt:ge}),s.removeAttribute(i)}else i.startsWith(E)&&(c.push({type:6,index:o}),s.removeAttribute(i));if(mt.test(s.tagName)){const i=s.textContent.split(E),u=i.length-1;if(u>0){s.textContent=pe?pe.emptyScript:"";for(let h=0;h<u;h++)s.append(i[h],H()),j.nextNode(),c.push({type:2,index:++o});s.append(i[u],H())}}}else if(s.nodeType===8)if(s.data===gt)c.push({type:2,index:o});else{let i=-1;for(;(i=s.data.indexOf(E,i+1))!==-1;)c.push({type:7,index:o}),i+=E.length-1}o++}}static createElement(e,r){const t=D.createElement("template");return t.innerHTML=e,t}}function q(n,e,r=n,t){var a,p;if(e===M)return e;let s=t!==void 0?(a=r._$Co)==null?void 0:a[t]:r._$Cl;const o=Y(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((p=s==null?void 0:s._$AO)==null||p.call(s,!1),o===void 0?s=void 0:(s=new o(n),s._$AT(n,r,t)),t!==void 0?(r._$Co??(r._$Co=[]))[t]=s:r._$Cl=s),s!==void 0&&(e=q(n,s._$AS(n,e.values),s,t)),e}class Vt{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:t}=this._$AD,s=((e==null?void 0:e.creationScope)??D).importNode(r,!0);j.currentNode=s;let o=j.nextNode(),a=0,p=0,c=t[0];for(;c!==void 0;){if(a===c.index){let d;c.type===2?d=new X(o,o.nextSibling,this,e):c.type===1?d=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(d=new zt(o,this,e)),this._$AV.push(d),c=t[++p]}a!==(c==null?void 0:c.index)&&(o=j.nextNode(),a++)}return j.currentNode=D,s}p(e){let r=0;for(const t of this._$AV)t!==void 0&&(t.strings!==void 0?(t._$AI(e,t,r),r+=t.strings.length-2):t._$AI(e[r])),r++}}class X{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,t,s){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=t,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=q(this,e,r),Y(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==M&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Kt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==m&&Y(this._$AH)?this._$AA.nextSibling.data=e:this.T(D.createTextNode(e)),this._$AH=e}$(e){var o;const{values:r,_$litType$:t}=e,s=typeof t=="number"?this._$AC(e):(t.el===void 0&&(t.el=z.createElement($t(t.h,t.h[0]),this.options)),t);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(r);else{const a=new Vt(s,this),p=a.u(this.options);a.p(r),this.T(p),this._$AH=a}}_$AC(e){let r=rt.get(e.strings);return r===void 0&&rt.set(e.strings,r=new z(e)),r}k(e){Ue(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let t,s=0;for(const o of e)s===r.length?r.push(t=new X(this.O(H()),this.O(H()),this,this.options)):t=r[s],t._$AI(o),s++;s<r.length&&(this._$AR(t&&t._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){var t;for((t=this._$AP)==null?void 0:t.call(this,!1,!0,r);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class ge{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,t,s,o){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=o,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=m}_$AI(e,r=this,t,s){const o=this.strings;let a=!1;if(o===void 0)e=q(this,e,r,0),a=!Y(e)||e!==this._$AH&&e!==M,a&&(this._$AH=e);else{const p=e;let c,d;for(e=o[0],c=0;c<o.length-1;c++)d=q(this,p[t+c],r,c),d===M&&(d=this._$AH[c]),a||(a=!Y(d)||d!==this._$AH[c]),d===m?e=m:e!==m&&(e+=(d??"")+o[c+1]),this._$AH[c]=d}a&&!s&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Bt extends ge{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}}class Ht extends ge{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}}class Yt extends ge{constructor(e,r,t,s,o){super(e,r,t,s,o),this.type=5}_$AI(e,r=this){if((e=q(this,e,r,0)??m)===M)return;const t=this._$AH,s=e===m&&t!==m||e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive,o=e!==m&&(t===m||s);s&&this.element.removeEventListener(this.name,this,t),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class zt{constructor(e,r,t){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(e){q(this,e)}}const Se=B.litHtmlPolyfillSupport;Se==null||Se(z,X),(B.litHtmlVersions??(B.litHtmlVersions=[])).push("3.3.0");const Qt=(n,e,r)=>{const t=(r==null?void 0:r.renderBefore)??e;let s=t._$litPart$;if(s===void 0){const o=(r==null?void 0:r.renderBefore)??null;t._$litPart$=s=new X(e.insertBefore(H(),o),o,void 0,r??{})}return s._$AI(n),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis;class $ extends R{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Qt(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return M}}var yt;$._$litElement$=!0,$.finalized=!0,(yt=I.litElementHydrateSupport)==null||yt.call(I,{LitElement:$});const Ae=I.litElementPolyfillSupport;Ae==null||Ae({LitElement:$});(I.litElementVersions??(I.litElementVersions=[])).push("4.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=n=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(n,e)}):customElements.define(n,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gt={attribute:!0,type:String,converter:de,reflect:!1,hasChanged:Ke},Wt=(n=Gt,e,r)=>{const{kind:t,metadata:s}=r;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),t==="setter"&&((n=Object.create(n)).wrapped=!0),o.set(r.name,n),t==="accessor"){const{name:a}=r;return{set(p){const c=e.get.call(this);e.set.call(this,p),this.requestUpdate(a,c,n)},init(p){return p!==void 0&&this.C(a,void 0,n,p),p}}}if(t==="setter"){const{name:a}=r;return function(p){const c=this[a];e.call(this,p),this.requestUpdate(a,c,n)}}throw Error("Unsupported decorator location: "+t)};function k(n){return(e,r)=>typeof r=="object"?Wt(n,e,r):((t,s,o)=>{const a=s.hasOwnProperty(o);return s.constructor.createProperty(o,t),a?Object.getOwnPropertyDescriptor(s,o):void 0})(n,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Le(n){return k({...n,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jt=(n,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(n,e,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _t(n,e){return(r,t,s)=>{const o=a=>{var p;return((p=a.renderRoot)==null?void 0:p.querySelector(n))??null};return Jt(r,t,{get(){return o(this)}})}}const x=C`
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
`,S=C`
* {
	box-sizing: border-box;
}
`,Zt=C`
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
`;function Ct(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ee={exports:{}},st;function Pt(){return st||(st=1,function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},n.exports=e.default}(ee,ee.exports)),ee.exports}var Xt=Pt();const te=Ct(Xt);class P{constructor(){this.hosts=new Set,this.queueKeySets=["123456789","qwertyuio","asdfghjkl"],this.playerKeyToKeys={track1:this.queueKeySets[0],track2:this.queueKeySets[1],track3:this.queueKeySets[2]},this.value={players:new Map([["track1",null],["track2",null],["track3",null]]),videoIds:new Map([["track1","RWFa4qNCtY4"],["track2","OodEsjZ88TQ"],["track3","GMcNz9fjC7E"]]),queuePoints:new Map([["track1",{}],["track2",{}],["track3",{}]]),lastPlayerKey:"track1",lastQueueKey:null}}static getInstance(e){return P._instance||(P._instance=new P),e&&(P._instance.hosts.add(e),e.addController(P._instance)),P._instance}getPlayerKeys(){return Object.keys(this.playerKeyToKeys)}getVideoIds(){return this.value.videoIds}setLastPlayerKey(e){this.value.lastPlayerKey!==e&&(this.value.lastPlayerKey=e,this.requestUpdate())}setLastQueueKey(e){this.value.lastQueueKey!==e&&(this.value.lastQueueKey=e,this.requestUpdate())}addInitialPlayer(e,r){this.value.players.set(e,r),this.requestUpdate()}setPlayer(e,r){this.value.players.set(e,r),this.value.lastPlayerKey=e,this.value.lastQueueKey=null,this.requestUpdate()}async setDefaultQueuePoints(e,r){const t=await this.getDuration(r),s=this.createQueuePointsFromDuration(this.playerKeyToKeys[e],t);this.value.queuePoints.set(e,s)}getKeysByPlayerKey(e){return this.playerKeyToKeys[e]}getPlayerByPlayerKey(e){return this.value.players.get(e)??null}getCurrentPlayer(){return this.value.lastPlayerKey?this.value.players.get(this.value.lastPlayerKey)??null:null}getCurrentQueuePoints(){return this.value.lastPlayerKey?this.value.queuePoints.get(this.value.lastPlayerKey)??null:null}async playFromSeekTime(e,r){await e.seekTo(r,!0),await e.getPlayerState()!==te.PLAYING&&await e.playVideo()}async getIsPlaying(e){return await e.getPlayerState().then(r=>r===te.PLAYING).catch(()=>!1)}async setVolume(e,r){await e.setVolume(r)}async getVolume(e){return await e.getVolume()}async setPlaybackRate(e,r){await e.setPlaybackRate(r)}async pauseVideo(e){await e.getPlayerState()===te.PLAYING&&await e.pauseVideo()}async playVideo(e){await e.getPlayerState()!==te.PLAYING&&await e.playVideo()}async getDuration(e){return await e.getDuration()}createQueuePointsFromDuration(e,r){const t={},s=e.length;return e.split("").forEach((o,a)=>{const p=Math.floor(a/s*r);t[o]=p}),t}hostConnected(){this.requestUpdate()}requestUpdate(){for(const e of this.hosts)e.requestUpdate()}}const Fe=new Set;function wt(n,e){if(!(n.target instanceof HTMLInputElement||n.target instanceof HTMLTextAreaElement))for(const r of Fe)r(n.key.toLowerCase(),e)}window.addEventListener("keydown",n=>wt(n,"down"));window.addEventListener("keyup",n=>wt(n,"up"));const he={subscribe:n=>Fe.add(n),unsubscribe:n=>Fe.delete(n)},ue=new Set;function me(n){if(["video-loaded","track-switched","video-play","video-pause"].includes(n.type))for(const e of ue)e(n.type,n.detail)}document.addEventListener("track-switched",me);document.addEventListener("video-loaded",me);document.addEventListener("video-play",me);document.addEventListener("video-pause",me);const Q={subscribe:n=>(ue.add(n),ue),unsubscribe:n=>ue.delete(n),dispatchVideoSwitchedEvent:n=>{document.dispatchEvent(new CustomEvent("track-switched",{bubbles:!0,composed:!0,detail:n}))},dispatchVideoLoadedEvent:n=>{document.dispatchEvent(new CustomEvent("video-loaded",{bubbles:!0,composed:!0,detail:n}))},dispatchVideoPlayEvent:n=>{document.dispatchEvent(new CustomEvent("video-play",{bubbles:!0,composed:!0,detail:n}))},dispatchVideoPauseEvent:n=>{document.dispatchEvent(new CustomEvent("video-pause",{bubbles:!0,composed:!0,detail:n}))}};var er=Object.defineProperty,tr=Object.getOwnPropertyDescriptor,Ve=(n,e,r,t)=>{for(var s=t>1?void 0:t?tr(e,r):e,o=n.length-1,a;o>=0;o--)(a=n[o])&&(s=(t?a(e,r,s):a(s))||s);return t&&s&&er(e,r,s),s};let G=class extends ${constructor(){super(...arguments),this.videoPlayerController=P.getInstance(this),this.handleInputStyle=()=>{const n=parseFloat(this.volumeInput.value),e=12,t=(154-e)/100,s=e+t*n;this.indicator.style.bottom=`${s}px`},this.handleInput=()=>{const n=this.videoPlayerController.getCurrentPlayer();n&&this.videoPlayerController.setVolume(n,Number(this.volumeInput.value)).catch(e=>{console.log(e)})},this.setInitialVolume=(n,e)=>{if(!["track-switched","video-loaded"].includes(n))return;const r=this.videoPlayerController.getCurrentPlayer();r&&this.videoPlayerController.getVolume(r).then(t=>{this.volumeInput.value=String(t),this.handleInputStyle()}).catch(t=>console.log(t))}}connectedCallback(){super.connectedCallback(),Q.subscribe(this.setInitialVolume)}render(){return _`
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
		`}};G.styles=[x,S,Zt];Ve([_t("#volume-adjust")],G.prototype,"volumeInput",2);Ve([_t("#volume-adjust-indicator")],G.prototype,"indicator",2);G=Ve([w("volume-adjust")],G);const rr=C`

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

`;var sr=Object.defineProperty,nr=Object.getOwnPropertyDescriptor,xt=(n,e,r,t)=>{for(var s=t>1?void 0:t?nr(e,r):e,o=n.length-1,a;o>=0;o--)(a=n[o])&&(s=(t?a(e,r,s):a(s))||s);return t&&s&&sr(e,r,s),s};let fe=class extends ${constructor(){super(...arguments),this.speed=1}render(){return _`
		<div class="speed-button-container">
			<span class="speed-button-label">${this.speed}x</span>
			<a class="speed-button"></a>
		</div>
	`}};fe.styles=[x,S,rr];xt([k({type:Number})],fe.prototype,"speed",2);fe=xt([w("speed-adjust-button")],fe);const or=C`
.speed-button-list {
    display: flex;
    justify-content: space-between;
	width: 246px;
}

.speed-button-list:nth-child(n + 2) {
	margin-top: 12px;
}
`;var ar=Object.defineProperty,ir=Object.getOwnPropertyDescriptor,St=(n,e,r,t)=>{for(var s=t>1?void 0:t?ir(e,r):e,o=n.length-1,a;o>=0;o--)(a=n[o])&&(s=(t?a(e,r,s):a(s))||s);return t&&s&&ar(e,r,s),s};let ye=class extends ${constructor(){super(...arguments),this.count=0,this.videoPlayerController=P.getInstance(this),this.handleSetPlaybackRate=async n=>{const e=this.videoPlayerController.getCurrentPlayer();if(!e)return;const t=n.currentTarget.getAttribute("speed");if(!t)return;const s=parseFloat(t);isNaN(s)||await this.videoPlayerController.setPlaybackRate(e,s)}}render(){return _`
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
    `}};ye.styles=[x,S,or];St([k({type:Number})],ye.prototype,"count",2);ye=St([w("speed-adjust-button-group")],ye);const lr=C`

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
`;var cr=Object.defineProperty,ur=Object.getOwnPropertyDescriptor,At=(n,e,r,t)=>{for(var s=t>1?void 0:t?ur(e,r):e,o=n.length-1,a;o>=0;o--)(a=n[o])&&(s=(t?a(e,r,s):a(s))||s);return t&&s&&cr(e,r,s),s};let ve=class extends ${constructor(){super(...arguments),this.speed="1x"}render(){return _`
		<div class="track-button-container">
			<span class="track-button-label">RECORD</span>
			<a class="track-button"></a>
		</div>
	`}};ve.styles=[x,S,lr];At([k({type:String})],ve.prototype,"speed",2);ve=At([w("record-button")],ve);const dr=C`

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
`;var pr=Object.getOwnPropertyDescriptor,hr=(n,e,r,t)=>{for(var s=t>1?void 0:t?pr(e,r):e,o=n.length-1,a;o>=0;o--)(a=n[o])&&(s=a(s)||s);return s};let Te=class extends ${render(){return _`
		<div class="track-button-container">
			<span class="track-button-label">DELETE</span>
			<a class="track-button"></a>
		</div>
	`}};Te.styles=[x,S,dr];Te=hr([w("delete-button")],Te);const fr=C`

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
`;var yr=Object.getOwnPropertyDescriptor,vr=(n,e,r,t)=>{for(var s=t>1?void 0:t?yr(e,r):e,o=n.length-1,a;o>=0;o--)(a=n[o])&&(s=a(s)||s);return s};let je=class extends ${render(){return _`
		<div class="track-button-container">
			<span class="track-button-label">STOP</span>
			<a class="track-button"></a>
		</div>
	`}};je.styles=[x,S,fr];je=vr([w("stop-button")],je);const br=C`

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
`;var gr=Object.getOwnPropertyDescriptor,mr=(n,e,r,t)=>{for(var s=t>1?void 0:t?gr(e,r):e,o=n.length-1,a;o>=0;o--)(a=n[o])&&(s=a(s)||s);return s};let Ie=class extends ${render(){return _`
		<div class="track-button-container">
			<span class="track-button-label">START</span>
			<a class="track-button"></a>
		</div>
	`}};Ie.styles=[x,S,br];Ie=mr([w("start-button")],Ie);const $r=C`
.controller-content-track-functions {
    display: flex;
	width: 246px;
    gap: 18px;
    text-align: center;
}
`;var _r=Object.defineProperty,Cr=Object.getOwnPropertyDescriptor,Be=(n,e,r,t)=>{for(var s=t>1?void 0:t?Cr(e,r):e,o=n.length-1,a;o>=0;o--)(a=n[o])&&(s=(t?a(e,r,s):a(s))||s);return t&&s&&_r(e,r,s),s};let W=class extends ${constructor(){super(...arguments),this.videoPlayerController=P.getInstance(this),this.activeKey=null,this.isPlaying=!1,this.onKey=async(n,e)=>{e==="down"?(this.activeKey=n,await this.toggleVideoBySpaceKey(n)):this.activeKey=null},this.handleClickPlayVideo=async()=>{const n=this.videoPlayerController.getCurrentPlayer();n&&await this.videoPlayerController.playVideo(n)},this.handleClickPauseVideo=async()=>{const n=this.videoPlayerController.getCurrentPlayer();n&&await this.videoPlayerController.pauseVideo(n)}}async toggleVideoPlayer(n){const e=await this.videoPlayerController.getIsPlaying(n);e?await this.videoPlayerController.pauseVideo(n):await this.videoPlayerController.playVideo(n),this.isPlaying=e}async toggleVideoBySpaceKey(n){const e=this.videoPlayerController.getCurrentPlayer();e&&n===" "&&await this.toggleVideoPlayer(e)}connectedCallback(){super.connectedCallback(),he.subscribe(this.onKey)}disconnectedCallback(){he.unsubscribe(this.onKey),super.disconnectedCallback()}render(){return _`
			<nav class="controller-content-track-functions">
				<record-button></record-button>
				<delete-button></delete-button>
				<stop-button @click=${this.handleClickPauseVideo} ?active=${this.isPlaying&&this.activeKey===" "}></stop-button>
				<start-button @click=${this.handleClickPlayVideo} ?active=${!this.isPlaying&&this.activeKey===" "}></start-button>
			</nav>
    `}};W.styles=[x,S,$r];Be([Le()],W.prototype,"activeKey",2);Be([Le()],W.prototype,"isPlaying",2);W=Be([w("track-control-button-group")],W);const Pr=C`
.video-slot {
  display: block;
  height: 180px;
  width: 100%;
  opacity: 0.6;
}
`;var re={exports:{}},ke,nt;function wr(){if(nt)return ke;nt=1;var n;/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/return n=function(){var e={},r={};return e.on=function(t,s){var o={name:t,handler:s};return r[t]=r[t]||[],r[t].unshift(o),o},e.off=function(t){var s=r[t.name].indexOf(t);s!==-1&&r[t.name].splice(s,1)},e.trigger=function(t,s){var o=r[t],a;if(o)for(a=o.length;a--;)o[a].handler(s)},e},ke=n,ke}var se={exports:{}},ne={exports:{}},Ee,ot;function xr(){if(ot)return Ee;ot=1;var n=1e3,e=n*60,r=e*60,t=r*24,s=t*7,o=t*365.25;Ee=function(l,i){i=i||{};var u=typeof l;if(u==="string"&&l.length>0)return a(l);if(u==="number"&&isFinite(l))return i.long?c(l):p(l);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(l))};function a(l){if(l=String(l),!(l.length>100)){var i=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(l);if(i){var u=parseFloat(i[1]),h=(i[2]||"ms").toLowerCase();switch(h){case"years":case"year":case"yrs":case"yr":case"y":return u*o;case"weeks":case"week":case"w":return u*s;case"days":case"day":case"d":return u*t;case"hours":case"hour":case"hrs":case"hr":case"h":return u*r;case"minutes":case"minute":case"mins":case"min":case"m":return u*e;case"seconds":case"second":case"secs":case"sec":case"s":return u*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return u;default:return}}}}function p(l){var i=Math.abs(l);return i>=t?Math.round(l/t)+"d":i>=r?Math.round(l/r)+"h":i>=e?Math.round(l/e)+"m":i>=n?Math.round(l/n)+"s":l+"ms"}function c(l){var i=Math.abs(l);return i>=t?d(l,i,t,"day"):i>=r?d(l,i,r,"hour"):i>=e?d(l,i,e,"minute"):i>=n?d(l,i,n,"second"):l+" ms"}function d(l,i,u,h){var f=i>=u*1.5;return Math.round(l/u)+" "+h+(f?"s":"")}return Ee}var Oe,at;function Sr(){if(at)return Oe;at=1;function n(e){t.debug=t,t.default=t,t.coerce=d,t.disable=p,t.enable=o,t.enabled=c,t.humanize=xr(),t.destroy=l,Object.keys(e).forEach(i=>{t[i]=e[i]}),t.names=[],t.skips=[],t.formatters={};function r(i){let u=0;for(let h=0;h<i.length;h++)u=(u<<5)-u+i.charCodeAt(h),u|=0;return t.colors[Math.abs(u)%t.colors.length]}t.selectColor=r;function t(i){let u,h=null,f,g;function y(...v){if(!y.enabled)return;const b=y,A=Number(new Date),_e=A-(u||A);b.diff=_e,b.prev=u,b.curr=A,u=A,v[0]=t.coerce(v[0]),typeof v[0]!="string"&&v.unshift("%O");let N=0;v[0]=v[0].replace(/%([a-zA-Z%])/g,(F,Pe)=>{if(F==="%%")return"%";N++;const U=t.formatters[Pe];if(typeof U=="function"){const Et=v[N];F=U.call(b,Et),v.splice(N,1),N--}return F}),t.formatArgs.call(b,v),(b.log||t.log).apply(b,v)}return y.namespace=i,y.useColors=t.useColors(),y.color=t.selectColor(i),y.extend=s,y.destroy=t.destroy,Object.defineProperty(y,"enabled",{enumerable:!0,configurable:!1,get:()=>h!==null?h:(f!==t.namespaces&&(f=t.namespaces,g=t.enabled(i)),g),set:v=>{h=v}}),typeof t.init=="function"&&t.init(y),y}function s(i,u){const h=t(this.namespace+(typeof u>"u"?":":u)+i);return h.log=this.log,h}function o(i){t.save(i),t.namespaces=i,t.names=[],t.skips=[];const u=(typeof i=="string"?i:"").trim().replace(/\s+/g,",").split(",").filter(Boolean);for(const h of u)h[0]==="-"?t.skips.push(h.slice(1)):t.names.push(h)}function a(i,u){let h=0,f=0,g=-1,y=0;for(;h<i.length;)if(f<u.length&&(u[f]===i[h]||u[f]==="*"))u[f]==="*"?(g=f,y=h,f++):(h++,f++);else if(g!==-1)f=g+1,y++,h=y;else return!1;for(;f<u.length&&u[f]==="*";)f++;return f===u.length}function p(){const i=[...t.names,...t.skips.map(u=>"-"+u)].join(",");return t.enable(""),i}function c(i){for(const u of t.skips)if(a(i,u))return!1;for(const u of t.names)if(a(i,u))return!0;return!1}function d(i){return i instanceof Error?i.stack||i.message:i}function l(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return t.enable(t.load()),t}return Oe=n,Oe}var it;function Ar(){return it||(it=1,function(n,e){var r={};e.formatArgs=s,e.save=o,e.load=a,e.useColors=t,e.storage=p(),e.destroy=(()=>{let d=!1;return()=>{d||(d=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function t(){if(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let d;return typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&(d=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(d[1],10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function s(d){if(d[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+d[0]+(this.useColors?"%c ":" ")+"+"+n.exports.humanize(this.diff),!this.useColors)return;const l="color: "+this.color;d.splice(1,0,l,"color: inherit");let i=0,u=0;d[0].replace(/%[a-zA-Z%]/g,h=>{h!=="%%"&&(i++,h==="%c"&&(u=i))}),d.splice(u,0,l)}e.log=console.debug||console.log||(()=>{});function o(d){try{d?e.storage.setItem("debug",d):e.storage.removeItem("debug")}catch{}}function a(){let d;try{d=e.storage.getItem("debug")||e.storage.getItem("DEBUG")}catch{}return!d&&typeof process<"u"&&"env"in process&&(d=r.DEBUG),d}function p(){try{return localStorage}catch{}}n.exports=Sr()(e);const{formatters:c}=n.exports;c.j=function(d){try{return JSON.stringify(d)}catch(l){return"[UnexpectedJSONParseError]: "+l.message}}}(ne,ne.exports)),ne.exports}var oe={exports:{}},lt;function kr(){return lt||(lt=1,function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var r=Pt(),t=s(r);function s(o){return o&&o.__esModule?o:{default:o}}e.default={pauseVideo:{acceptableStates:[t.default.ENDED,t.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[t.default.ENDED,t.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[t.default.ENDED,t.default.PLAYING,t.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},n.exports=e.default}(oe,oe.exports)),oe.exports}var ae={exports:{}},ct;function Er(){return ct||(ct=1,function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],n.exports=e.default}(ae,ae.exports)),ae.exports}var ie={exports:{}},ut;function Or(){return ut||(ut=1,function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe","getSphericalProperties","setSphericalProperties"],n.exports=e.default}(ie,ie.exports)),ie.exports}var dt;function Nr(){return dt||(dt=1,function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var r=Ar(),t=l(r),s=kr(),o=l(s),a=Er(),p=l(a),c=Or(),d=l(c);function l(h){return h&&h.__esModule?h:{default:h}}const i=(0,t.default)("youtube-player"),u={};u.proxyEvents=h=>{const f={};for(const g of p.default){const y="on"+g.slice(0,1).toUpperCase()+g.slice(1);f[y]=v=>{i('event "%s"',y,v),h.trigger(g,v)}}return f},u.promisifyPlayer=(h,f=!1)=>{const g={};for(const y of d.default)f&&o.default[y]?g[y]=(...v)=>h.then(b=>{const A=o.default[y],_e=b.getPlayerState(),N=b[y].apply(b,v);return A.stateChangeRequired||Array.isArray(A.acceptableStates)&&!A.acceptableStates.includes(_e)?new Promise(Ce=>{const F=()=>{const Pe=b.getPlayerState();let U;typeof A.timeout=="number"&&(U=setTimeout(()=>{b.removeEventListener("onStateChange",F),Ce()},A.timeout)),Array.isArray(A.acceptableStates)&&A.acceptableStates.includes(Pe)&&(b.removeEventListener("onStateChange",F),clearTimeout(U),Ce())};b.addEventListener("onStateChange",F)}).then(()=>N):N}):g[y]=(...v)=>h.then(b=>b[y].apply(b,v));return g},e.default=u,n.exports=e.default}(se,se.exports)),se.exports}var le={exports:{}},Ne,pt;function Fr(){if(pt)return Ne;pt=1,Ne=function(s,o,a){var p=document.head||document.getElementsByTagName("head")[0],c=document.createElement("script");typeof o=="function"&&(a=o,o={}),o=o||{},a=a||function(){},c.type=o.type||"text/javascript",c.charset=o.charset||"utf8",c.async="async"in o?!!o.async:!0,c.src=s,o.attrs&&n(c,o.attrs),o.text&&(c.text=""+o.text);var d="onload"in c?e:r;d(c,a),c.onload||e(c,a),p.appendChild(c)};function n(t,s){for(var o in s)t.setAttribute(o,s[o])}function e(t,s){t.onload=function(){this.onerror=this.onload=null,s(null,t)},t.onerror=function(){this.onerror=this.onload=null,s(new Error("Failed to load "+this.src),t)}}function r(t,s){t.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,s(null,t))}}return Ne}var ht;function Tr(){return ht||(ht=1,function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var r=Fr(),t=s(r);function s(o){return o&&o.__esModule?o:{default:o}}e.default=o=>new Promise(p=>{if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function){p(window.YT);return}else{const d=window.location.protocol==="http:"?"http:":"https:";(0,t.default)(d+"//www.youtube.com/iframe_api",l=>{l&&o.trigger("error",l)})}const c=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{c&&c(),p(window.YT)}}),n.exports=e.default}(le,le.exports)),le.exports}var ft;function jr(){return ft||(ft=1,function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var r=wr(),t=c(r),s=Nr(),o=c(s),a=Tr(),p=c(a);function c(l){return l&&l.__esModule?l:{default:l}}let d;e.default=(l,i={},u=!1)=>{const h=(0,t.default)();if(d||(d=(0,p.default)(h)),i.events)throw new Error("Event handlers cannot be overwritten.");if(typeof l=="string"&&!document.getElementById(l))throw new Error('Element "'+l+'" does not exist.');i.events=o.default.proxyEvents(h);const f=new Promise(y=>{typeof l=="object"&&l.playVideo instanceof Function?y(l):d.then(v=>{const b=new v.Player(l,i);return h.on("ready",()=>{y(b)}),null})}),g=o.default.promisifyPlayer(f,u);return g.on=h.on,g.off=h.off,g},n.exports=e.default}(re,re.exports)),re.exports}var Ir=jr();const Dr=Ct(Ir);var Rr=Object.defineProperty,Mr=Object.getOwnPropertyDescriptor,He=(n,e,r,t)=>{for(var s=t>1?void 0:t?Mr(e,r):e,o=n.length-1,a;o>=0;o--)(a=n[o])&&(s=(t?a(e,r,s):a(s))||s);return t&&s&&Rr(e,r,s),s};let J=class extends ${constructor(){super(...arguments),this.trackName="track1",this.videoId="",this.videoPlayerController=P.getInstance(this)}render(){return _`
			<div class="video-slot" id=${this.trackName}></div>
		`}firstUpdated(){const n=this.renderRoot.querySelector(`#${this.trackName}`);if(!n){console.error(`Element with ID "${this.trackName}" not found.`);return}const e=Dr(n,{playerVars:{autoplay:0,controls:0,modestbranding:1,rel:0,fs:0,disablekb:1}});e.on("ready",()=>{setTimeout(()=>{Q.dispatchVideoLoadedEvent({trackName:this.trackName})},1e3)}),this.videoPlayerController.addInitialPlayer(this.trackName,e)}updated(n){if(n.has("videoId")&&this.videoId){const e=this.videoPlayerController.getPlayerByPlayerKey(this.trackName);if(!e)return;e.loadVideoById(this.videoId).catch(r=>{console.error(`Failed to load video "${this.videoId}" for ${this.trackName}`,r)})}}};J.styles=[x,S,Pr];He([k({type:String})],J.prototype,"trackName",2);He([k({type:String})],J.prototype,"videoId",2);J=He([w("video-player")],J);const qr=C`

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
`;var Kr=Object.defineProperty,Ur=Object.getOwnPropertyDescriptor,kt=(n,e,r,t)=>{for(var s=t>1?void 0:t?Ur(e,r):e,o=n.length-1,a;o>=0;o--)(a=n[o])&&(s=(t?a(e,r,s):a(s))||s);return t&&s&&Kr(e,r,s),s};let be=class extends ${constructor(){super(...arguments),this.trackName="TRACK1"}render(){return _`
		<div class="track-button-container">
			<span class="track-button-label">${this.trackName}</span>
			<a class="track-button"></a>
		</div>
	`}};be.styles=[x,S,qr];kt([k({type:String})],be.prototype,"trackName",2);be=kt([w("track-switch-button")],be);const Lr=C`
.track-switch-button-list {
    display: flex;
    gap: 18px;
    text-align: center;
    margin-top: 12px;
    justify-content: end;
}
`;var Vr=Object.getOwnPropertyDescriptor,Br=(n,e,r,t)=>{for(var s=t>1?void 0:t?Vr(e,r):e,o=n.length-1,a;o>=0;o--)(a=n[o])&&(s=a(s)||s);return s};let De=class extends ${constructor(){super(...arguments),this.videoPlayerController=P.getInstance(this),this.handleClickTrack=n=>{const r=n.currentTarget.getAttribute("trackName");if(!r)return;const t=r.toLowerCase();this.videoPlayerController.setLastPlayerKey(t),Q.dispatchVideoSwitchedEvent({trackName:t})}}render(){return _`
			<nav class="track-switch-button-list">
				<track-switch-button @click=${this.handleClickTrack} trackName="TRACK1"></track-switch-button>
				<track-switch-button @click=${this.handleClickTrack} trackName="TRACK2"></track-switch-button>
				<track-switch-button @click=${this.handleClickTrack} trackName="TRACK3"></track-switch-button>
			</nav>
    `}};De.styles=[x,S,Lr];De=Br([w("track-switch-button-group")],De);const Hr=C`
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
`;var Yr=Object.defineProperty,zr=Object.getOwnPropertyDescriptor,Ye=(n,e,r,t)=>{for(var s=t>1?void 0:t?zr(e,r):e,o=n.length-1,a;o>=0;o--)(a=n[o])&&(s=(t?a(e,r,s):a(s))||s);return t&&s&&Yr(e,r,s),s};let Z=class extends ${constructor(){super(...arguments),this.padName="1",this.active=!1}render(){return _`
		<a class="sampler-pad">${this.padName}</a>
	`}};Z.styles=[x,S,Hr];Ye([k({type:String})],Z.prototype,"padName",2);Ye([k({type:Boolean,reflect:!0})],Z.prototype,"active",2);Z=Ye([w("sampler-pad")],Z);const Qr=C`
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
`;var Gr=Object.defineProperty,Wr=Object.getOwnPropertyDescriptor,$e=(n,e,r,t)=>{for(var s=t>1?void 0:t?Wr(e,r):e,o=n.length-1,a;o>=0;o--)(a=n[o])&&(s=(t?a(e,r,s):a(s))||s);return t&&s&&Gr(e,r,s),s};let K=class extends ${constructor(){super(...arguments),this.trackName="track1",this.keys=["1","2","3","4","5","6","7","8","9"],this.videoPlayerController=P.getInstance(this),this.activeKey=null,this.onKey=(n,e)=>{e==="down"?(this.activeKey=n,this.playFromQueuePoint(n)):this.activeKey=null},this.playFromQueuePoint=n=>{const e=this.videoPlayerController.getCurrentPlayer();if(!e)return;const r=this.videoPlayerController.getCurrentQueuePoints();r&&Object.prototype.hasOwnProperty.call(r,n)&&this.videoPlayerController.playFromSeekTime(e,Number(r[n])).catch(t=>console.log(t))},this.handleClickPad=n=>{if(!this.videoPlayerController.getCurrentPlayer())return;const t=n.currentTarget.getAttribute("padName");t&&this.playFromQueuePoint(t)},this.handleSetDefaultQueuePoints=(n,e)=>{if(n!=="video-loaded")return;const r=this.videoPlayerController.getPlayerByPlayerKey(e.trackName);r&&this.videoPlayerController.setDefaultQueuePoints(e.trackName,r).catch(t=>console.log(t))},this.handleSwitchPads=(n,e)=>{if(n!=="track-switched"||!this.videoPlayerController.getPlayerByPlayerKey(e.trackName))return;const t=this.videoPlayerController.getKeysByPlayerKey(e.trackName);this.keys=t.split("")}}connectedCallback(){super.connectedCallback(),he.subscribe(this.onKey),Q.subscribe(this.handleSetDefaultQueuePoints),Q.subscribe(this.handleSwitchPads)}disconnectedCallback(){he.unsubscribe(this.onKey),super.disconnectedCallback()}render(){return _`
			<nav class="sampler-pad-group">
				${this.keys.map(n=>_`
				<sampler-pad @click=${this.handleClickPad} padName=${n} ?active=${this.activeKey===n}></sampler-pad>
				`)}
			</nav>
		`}};K.styles=[x,S,Qr];$e([k({type:String})],K.prototype,"trackName",2);$e([k({type:Array})],K.prototype,"keys",2);$e([Le()],K.prototype,"activeKey",2);K=$e([w("sampler-pad-group")],K);const Jr=C`
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
`;var Zr=Object.getOwnPropertyDescriptor,Xr=(n,e,r,t)=>{for(var s=t>1?void 0:t?Zr(e,r):e,o=n.length-1,a;o>=0;o--)(a=n[o])&&(s=a(s)||s);return s};let Re=class extends ${constructor(){super(...arguments),this.videoPlayerController=P.getInstance(this),this.videoHeight=180}get videoIds(){return this.videoPlayerController.getVideoIds()}get playerKeys(){return this.videoPlayerController.getPlayerKeys()}get selectedIndex(){const n=this.videoPlayerController.value.lastPlayerKey;return n?this.playerKeys.indexOf(n):0}render(){return _`
			<div class="video-slot-container">
				<ul class="video-list" style="transform: translateY(-${this.selectedIndex*this.videoHeight}px);">
					${this.playerKeys.map(n=>_`
					<li class="video-item">
						<video-player trackName=${n} videoId=${this.videoIds.get(n)}></video-player>
					</li>
					`)}
				</ul>
			</div>
    `}};Re.styles=[x,S,Jr];Re=Xr([w("video-player-group")],Re);
