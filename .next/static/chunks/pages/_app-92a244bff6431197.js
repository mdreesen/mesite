(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4184:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&e.push(i)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var l in n)r.call(n,l)&&n[l]&&e.push(l)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0!==(n=(function(){return a}).apply(t,[]))&&(e.exports=n)}()},1143:function(e){"use strict";e.exports=function(e,t,n,r,a,o,i,l){if(!e){var s;if(void 0===t)s=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,a,o,i,l],c=0;(s=Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}}},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8754)}])},8754:function(e,t,n){"use strict";let r,a;n.r(t),n.d(t,{default:function(){return tp}});var o=n(5893);n(7599),n(5312);var i=n(4184),l=n.n(i);n(4391);var s=n(7294);function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function d(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function f(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function p(e,t){return Object.keys(t).reduce(function(n,r){var a,o,i,l,p,v,m,h,g=n[d(r)],x=n[r],b=c(n,[d(r),r].map(f)),y=t[r],E=(a=e[y],o=(0,s.useRef)(void 0!==x),l=(i=(0,s.useState)(g))[0],p=i[1],v=void 0!==x,m=o.current,o.current=v,!v&&m&&l!==g&&p(g),[v?x:l,(0,s.useCallback)(function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];a&&a.apply(void 0,[e].concat(n)),p(e)},[a])]),N=E[0],C=E[1];return u({},b,((h={})[r]=N,h[y]=C,h))},e)}n(1143);var v=Function.prototype.bind.call(Function.prototype.call,[].slice);function m(e,t){return v(e.querySelectorAll(t))}var h=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e},g=function(e,t){return(0,s.useMemo)(function(){var n,r;return n=h(e),r=h(t),function(e){n&&n(e),r&&r(e)}},[e,t])};let x=s.createContext(null);x.displayName="NavContext";let b=s.createContext(null),y=(e,t=null)=>null!=e?String(e):t||null,E=s.createContext(null);function N(e){return`data-rr-ui-${e}`}var C=function(e){var t=(0,s.useRef)(e);return(0,s.useEffect)(function(){t.current=e},[e]),t};function O(e){var t=C(e);return(0,s.useCallback)(function(){return t.current&&t.current.apply(t,arguments)},[t])}let w=["as","disabled"];function j({tagName:e,disabled:t,href:n,target:r,rel:a,role:o,onClick:i,tabIndex:l=0,type:s}){e||(e=null!=n||null!=r||null!=a?"a":"button");let u={tagName:e};if("button"===e)return[{type:s||"button",disabled:t},u];let c=r=>{var a;if(!t&&("a"!==e||(a=n)&&"#"!==a.trim())||r.preventDefault(),t){r.stopPropagation();return}null==i||i(r)},d=e=>{" "===e.key&&(e.preventDefault(),c(e))};return"a"===e&&(n||(n="#"),t&&(n=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:t?void 0:l,href:n,target:"a"===e?r:void 0,"aria-disabled":t||void 0,rel:"a"===e?a:void 0,onClick:c,onKeyDown:d},u]}let k=s.forwardRef((e,t)=>{let{as:n,disabled:r}=e,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,w),[i,{tagName:l}]=j(Object.assign({tagName:n,disabled:r},a));return(0,o.jsx)(l,Object.assign({},a,i,{ref:t}))});k.displayName="Button";let R=["as","active","eventKey"];function T({key:e,onClick:t,active:n,id:r,role:a,disabled:o}){let i=(0,s.useContext)(b),l=(0,s.useContext)(x),u=(0,s.useContext)(E),c=n,d={role:a};if(l){a||"tablist"!==l.role||(d.role="tab");let f=l.getControllerId(null!=e?e:null),p=l.getControlledId(null!=e?e:null);d[N("event-key")]=e,d.id=f||r,((c=null==n&&null!=e?l.activeKey===e:n)||!(null!=u&&u.unmountOnExit)&&!(null!=u&&u.mountOnEnter))&&(d["aria-controls"]=p)}return"tab"===d.role&&(d["aria-selected"]=c,c||(d.tabIndex=-1),o&&(d.tabIndex=-1,d["aria-disabled"]=!0)),d.onClick=O(n=>{o||(null==t||t(n),null!=e&&i&&!n.isPropagationStopped()&&i(e,n))}),[d,{isActive:c}]}let _=s.forwardRef((e,t)=>{let{as:n=k,active:r,eventKey:a}=e,i=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,R),[l,s]=T(Object.assign({key:y(a,i.href),active:r},i));return l[N("active")]=s.isActive,(0,o.jsx)(n,Object.assign({},i,l,{ref:t}))});_.displayName="NavItem";let S=["as","onSelect","activeKey","role","onKeyDown"],P=()=>{},L=N("event-key"),D=s.forwardRef((e,t)=>{let n,r,{as:a="div",onSelect:i,activeKey:l,role:u,onKeyDown:c}=e,d=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,S),f=(0,s.useReducer)(function(e){return!e},!1)[1],p=(0,s.useRef)(!1),v=(0,s.useContext)(b),h=(0,s.useContext)(E);h&&(u=u||"tablist",l=h.activeKey,n=h.getControlledId,r=h.getControllerId);let N=(0,s.useRef)(null),C=e=>{let t=N.current;if(!t)return null;let n=m(t,`[${L}]:not([aria-disabled=true])`),r=t.querySelector("[aria-selected=true]");if(!r||r!==document.activeElement)return null;let a=n.indexOf(r);if(-1===a)return null;let o=a+e;return o>=n.length&&(o=0),o<0&&(o=n.length-1),n[o]},O=(e,t)=>{null!=e&&(null==i||i(e,t),null==v||v(e,t))},w=e=>{let t;if(null==c||c(e),h){switch(e.key){case"ArrowLeft":case"ArrowUp":t=C(-1);break;case"ArrowRight":case"ArrowDown":t=C(1);break;default:return}t&&(e.preventDefault(),O(t.dataset.rrUiEventKey||null,e),p.current=!0,f())}};(0,s.useEffect)(()=>{if(N.current&&p.current){let e=N.current.querySelector(`[${L}][aria-selected=true]`);null==e||e.focus()}p.current=!1});let j=g(t,N);return(0,o.jsx)(b.Provider,{value:O,children:(0,o.jsx)(x.Provider,{value:{role:u,activeKey:y(l),getControlledId:n||P,getControllerId:r||P},children:(0,o.jsx)(a,Object.assign({},d,{onKeyDown:w,ref:j,role:u}))})})});D.displayName="Nav";var $=Object.assign(D,{Item:_}),M=n(6792);let A=s.createContext(null);A.displayName="NavbarContext";var I=n(9059),B=n(6611),F=(0,B.Z)("nav-item"),K=void 0!==n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product,W="undefined"!=typeof document||K?s.useLayoutEffect:s.useEffect;new WeakMap;let H=["onKeyDown"],V=s.forwardRef((e,t)=>{var n;let{onKeyDown:r}=e,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,H),[i]=j(Object.assign({tagName:"a"},a)),l=O(e=>{i.onKeyDown(e),null==r||r(e)});return(n=a.href)&&"#"!==n.trim()&&"button"!==a.role?(0,o.jsx)("a",Object.assign({ref:t},a,{onKeyDown:r})):(0,o.jsx)("a",Object.assign({ref:t},a,i,{onKeyDown:l}))});V.displayName="Anchor";let U=s.forwardRef(({bsPrefix:e,className:t,as:n=V,active:r,eventKey:a,...i},s)=>{e=(0,M.vE)(e,"nav-link");let[u,c]=T({key:y(a,i.href),active:r,...i});return(0,o.jsx)(n,{...i,...u,ref:s,className:l()(t,e,i.disabled&&"disabled",c.isActive&&"active")})});U.displayName="NavLink",U.defaultProps={disabled:!1};let Z=s.forwardRef((e,t)=>{let n,r;let{as:a="div",bsPrefix:i,variant:u,fill:c,justify:d,navbar:f,navbarScroll:v,className:m,activeKey:h,...g}=p(e,{activeKey:"onSelect"}),x=(0,M.vE)(i,"nav"),b=!1,y=(0,s.useContext)(A),E=(0,s.useContext)(I.Z);return y?(n=y.bsPrefix,b=null==f||f):E&&({cardHeaderBsPrefix:r}=E),(0,o.jsx)($,{as:a,ref:t,activeKey:h,className:l()(m,{[x]:!b,[`${n}-nav`]:b,[`${n}-nav-scroll`]:b&&v,[`${r}-${u}`]:!!r,[`${x}-${u}`]:!!u,[`${x}-fill`]:c,[`${x}-justified`]:d}),...g})});Z.displayName="Nav",Z.defaultProps={justify:!1,fill:!1};var G=Object.assign(Z,{Item:F,Link:U});let X=s.forwardRef(({bsPrefix:e,className:t,as:n,...r},a)=>{e=(0,M.vE)(e,"navbar-brand");let i=n||(r.href?"a":"span");return(0,o.jsx)(i,{...r,ref:a,className:l()(t,e)})});function q(e){return e&&e.ownerDocument||document}X.displayName="NavbarBrand";var Y=/([A-Z])/g,z=/^ms-/;function J(e){return e.replace(Y,"-$1").toLowerCase().replace(z,"-ms-")}var Q=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,ee=function(e,t){var n,r="",a="";if("string"==typeof t)return e.style.getPropertyValue(J(t))||((n=q(e))&&n.defaultView||window).getComputedStyle(e,void 0).getPropertyValue(J(t));Object.keys(t).forEach(function(n){var o=t[n];o||0===o?n&&Q.test(n)?a+=n+"("+o+") ":r+=J(n)+": "+o+";":e.style.removeProperty(J(n))}),a&&(r+="transform: "+a+";"),e.style.cssText+=";"+r};function et(e,t){return(et=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}var en=n(3935),er={disabled:!1},ea=s.createContext(null),eo="unmounted",ei="exited",el="entering",es="entered",eu="exiting",ec=function(e){function t(t,n){r=e.call(this,t,n)||this;var r,a,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(a=ei,r.appearStatus=el):a=es:a=t.unmountOnExit||t.mountOnEnter?eo:ei,r.state={status:a},r.nextCallback=null,r}(n=t).prototype=Object.create(e.prototype),n.prototype.constructor=n,et(n,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===eo?{status:ei}:null};var n,r=t.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==el&&n!==es&&(t=el):(n===el||n===es)&&(t=eu)}this.updateStatus(!1,t)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},r.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){if(this.cancelNextCallback(),t===el){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:en.findDOMNode(this);n&&n.scrollTop}this.performEnter(e)}else this.performExit()}else this.props.unmountOnExit&&this.state.status===ei&&this.setState({status:eo})},r.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[en.findDOMNode(this),r],o=a[0],i=a[1],l=this.getTimeouts(),s=r?l.appear:l.enter;if(!e&&!n||er.disabled){this.safeSetState({status:es},function(){t.props.onEntered(o)});return}this.props.onEnter(o,i),this.safeSetState({status:el},function(){t.props.onEntering(o,i),t.onTransitionEnd(s,function(){t.safeSetState({status:es},function(){t.props.onEntered(o,i)})})})},r.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:en.findDOMNode(this);if(!t||er.disabled){this.safeSetState({status:ei},function(){e.props.onExited(r)});return}this.props.onExit(r),this.safeSetState({status:eu},function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:ei},function(){e.props.onExited(r)})})})},r.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},r.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},r.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:en.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(!n||r){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=a[0],i=a[1];this.props.addEndListener(o,i)}null!=e&&setTimeout(this.nextCallback,e)},r.render=function(){var e=this.state.status;if(e===eo)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,c(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return s.createElement(ea.Provider,{value:null},"function"==typeof n?n(e,r):s.cloneElement(s.Children.only(n),r))},t}(s.Component);function ed(){}ec.contextType=ea,ec.propTypes={},ec.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ed,onEntering:ed,onEntered:ed,onExit:ed,onExiting:ed,onExited:ed},ec.UNMOUNTED=eo,ec.EXITED=ei,ec.ENTERING=el,ec.ENTERED=es,ec.EXITING=eu;var ef=!!("undefined"!=typeof window&&window.document&&window.document.createElement),ep=!1,ev=!1;try{var em={get passive(){return ep=!0},get once(){return ev=ep=!0}};ef&&(window.addEventListener("test",em,em),window.removeEventListener("test",em,!0))}catch(eh){}var eg=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!ev){var a=r.once,o=r.capture,i=n;!ev&&a&&(i=n.__once||function e(r){this.removeEventListener(t,e,o),n.call(this,r)},n.__once=i),e.addEventListener(t,i,ep?r:o)}e.addEventListener(t,n,r)},ex=function(e,t,n,r){var a=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)},eb=function(e,t,n,r){return eg(e,t,n,r),function(){ex(e,t,n,r)}};function ey(e,t){let n=ee(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function eE(e,t){var n,r,a,o,i,l,s,u,c,d,f,p;let v=ey(e,"transitionDuration"),m=ey(e,"transitionDelay"),h=(n=e,r=n=>{n.target===e&&(h(),t(n))},null==(a=v+m)&&(l=-1===(i=ee(n,"transitionDuration")||"").indexOf("ms")?1e3:1,a=parseFloat(i)*l||0),f=(u=!1,c=setTimeout(function(){u||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var a=document.createEvent("HTMLEvents");a.initEvent(t,n,r),e.dispatchEvent(a)}}(n,"transitionend",!0)},a+5),d=eb(n,"transitionend",function(){u=!0},{once:!0}),function(){clearTimeout(c),d()}),p=eb(n,"transitionend",r),function(){f(),p()})}var eN=function(...e){return e.filter(e=>null!=e).reduce((e,t)=>{if("function"!=typeof t)throw Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(...n){e.apply(this,n),t.apply(this,n)}},null)};function eC(e){e.offsetHeight}let eO=s.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:a,onExited:i,addEndListener:l,children:u,childRef:c,...d},f)=>{let p=(0,s.useRef)(null),v=g(p,c),m=e=>{v(e&&"setState"in e?en.findDOMNode(e):null!=e?e:null)},h=e=>t=>{e&&p.current&&e(p.current,t)},x=(0,s.useCallback)(h(e),[e]),b=(0,s.useCallback)(h(t),[t]),y=(0,s.useCallback)(h(n),[n]),E=(0,s.useCallback)(h(r),[r]),N=(0,s.useCallback)(h(a),[a]),C=(0,s.useCallback)(h(i),[i]),O=(0,s.useCallback)(h(l),[l]);return(0,o.jsx)(ec,{ref:f,...d,onEnter:x,onEntered:y,onEntering:b,onExit:E,onExited:C,onExiting:N,addEndListener:O,nodeRef:p,children:"function"==typeof u?(e,t)=>u(e,{...t,ref:m}):s.cloneElement(u,{ref:m})})}),ew={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function ej(e,t){let n=`offset${e[0].toUpperCase()}${e.slice(1)}`,r=t[n],a=ew[e];return r+parseInt(ee(t,a[0]),10)+parseInt(ee(t,a[1]),10)}let ek={[ei]:"collapse",[eu]:"collapsing",[el]:"collapsing",[es]:"collapse show"},eR=s.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:a,className:i,children:u,dimension:c="height",getDimensionValue:d=ej,...f},p)=>{let v="function"==typeof c?c():c,m=(0,s.useMemo)(()=>eN(e=>{e.style[v]="0"},e),[v,e]),h=(0,s.useMemo)(()=>eN(e=>{let t=`scroll${v[0].toUpperCase()}${v.slice(1)}`;e.style[v]=`${e[t]}px`},t),[v,t]),g=(0,s.useMemo)(()=>eN(e=>{e.style[v]=null},n),[v,n]),x=(0,s.useMemo)(()=>eN(e=>{e.style[v]=`${d(v,e)}px`,eC(e)},r),[r,d,v]),b=(0,s.useMemo)(()=>eN(e=>{e.style[v]=null},a),[v,a]);return(0,o.jsx)(eO,{ref:p,addEndListener:eE,...f,"aria-expanded":f.role?f.in:null,onEnter:m,onEntering:h,onEntered:g,onExit:x,onExiting:b,childRef:u.ref,children:(e,t)=>s.cloneElement(u,{...t,className:l()(i,u.props.className,ek[e],"width"===v&&"collapse-horizontal")})})});eR.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:ej};let eT=s.forwardRef(({children:e,bsPrefix:t,...n},r)=>{t=(0,M.vE)(t,"navbar-collapse");let a=(0,s.useContext)(A);return(0,o.jsx)(eR,{in:!!(a&&a.expanded),...n,children:(0,o.jsx)("div",{ref:r,className:t,children:e})})});eT.displayName="NavbarCollapse";let e_=s.forwardRef(({bsPrefix:e,className:t,children:n,label:r,as:a="button",onClick:i,...u},c)=>{e=(0,M.vE)(e,"navbar-toggler");let{onToggle:d,expanded:f}=(0,s.useContext)(A)||{},p=O(e=>{i&&i(e),d&&d()});return"button"===a&&(u.type="button"),(0,o.jsx)(a,{...u,ref:c,onClick:p,"aria-label":r,className:l()(t,e,!f&&"collapsed"),children:n||(0,o.jsx)("span",{className:`${e}-icon`})})});e_.displayName="NavbarToggle",e_.defaultProps={label:"Toggle navigation"};var eS=new WeakMap,eP=function(e,t){if(e&&t){var n=eS.get(t)||new Map;eS.set(t,n);var r=n.get(e);return r||((r=t.matchMedia(e)).refCount=0,n.set(r.media,r)),r}},eL=function(e){var t=Object.keys(e);function n(e,t){return e===t?t:e?e+" and "+t:t}return function(r,a,o){var i,l,u,c,d,f,p,v;return"object"==typeof r?(i=r,o=a,a=!0):(a=a||!0,(l={})[r]=a,i=l),u=(0,s.useMemo)(function(){return Object.entries(i).reduce(function(r,a){var o,i,l=a[0],s=a[1];return("up"===s||!0===s)&&(r=n(r,("number"==typeof(o=e[l])&&(o+="px"),"(min-width: "+o+")"))),("down"===s||!0===s)&&(r=n(r,"(max-width: "+(i="number"==typeof(i=e[t[Math.min(t.indexOf(l)+1,t.length-1)]])?i-.2+"px":"calc("+i+" - 0.2px)")+")")),r},"")},[JSON.stringify(i)]),void 0===(c=o)&&(c="undefined"==typeof window?void 0:window),d=eP(u,c),p=(f=(0,s.useState)(function(){return!!d&&d.matches}))[0],v=f[1],W(function(){var e=eP(u,c);if(!e)return v(!1);var t=eS.get(c),n=function(){v(e.matches)};return e.refCount++,e.addListener(n),n(),function(){e.removeListener(n),e.refCount--,e.refCount<=0&&(null==t||t.delete(e.media)),e=void 0}},[u]),p}}({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});function eD(e){void 0===e&&(e=q());try{var t=e.activeElement;if(!t||!t.nodeName)return null;return t}catch(n){return e.body}}function e$(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}let eM=N("modal-open");var eA=class{constructor({ownerDocument:e,handleContainerOverflow:t=!0,isRTL:n=!1}={}){this.handleContainerOverflow=t,this.isRTL=n,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return function(e=document){let t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){let t={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style={overflow:r.style.overflow,[n]:r.style[n]},e.scrollBarWidth&&(t[n]=`${parseInt(ee(r,n)||"0",10)+e.scrollBarWidth}px`),r.setAttribute(eM,""),ee(r,t)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){let t=this.getElement();t.removeAttribute(eM),Object.assign(t.style,e.style)}add(e){let t=this.modals.indexOf(e);return -1!==t||(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==t||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state))),t}remove(e){let t=this.modals.indexOf(e);-1!==t&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}};let eI=(0,s.createContext)(ef?window:void 0);function eB(){return(0,s.useContext)(eI)}eI.Provider;let eF=(e,t)=>ef?null==e?(t||q()).body:("function"==typeof e&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect))?e:null:null;function eK({children:e,in:t,appear:n,onExited:r,onEntered:a,transition:o}){let i=function({in:e,onTransition:t,initial:n=!0}){let r=(0,s.useRef)(null),a=(0,s.useRef)(!0),o=O(t);return(0,s.useEffect)(()=>{(!a.current||n)&&o({in:e,element:r.current,initial:a.current})},[e,n,o]),(0,s.useEffect)(()=>(a.current=!1,()=>{a.current=!0}),[]),r}({in:!!t,initial:n,onTransition:e=>{let t=()=>{e.in?null==a||a(e.element,e.initial):null==r||r(e.element)};Promise.resolve(o(e)).then(t)}}),l=g(i,e.ref);return(0,s.cloneElement)(e,{ref:l})}function eW(e,t,n){return e?(0,o.jsx)(e,Object.assign({},n)):t?(0,o.jsx)(eK,Object.assign({},n,{transition:t})):n.children}let eH=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"],eV=(0,s.forwardRef)((e,t)=>{var n,a,i,l,u;let{show:c=!1,role:d="dialog",className:f,style:p,children:v,backdrop:m=!0,keyboard:h=!0,onBackdropClick:g,onEscapeKeyDown:x,transition:b,runTransition:y,backdropTransition:E,runBackdropTransition:N,autoFocus:C=!0,enforceFocus:w=!0,restoreFocus:j=!0,restoreFocusOptions:k,renderDialog:R,renderBackdrop:T=e=>(0,o.jsx)("div",Object.assign({},e)),manager:_,container:S,onShow:P,onHide:L=()=>{},onExit:D,onExited:$,onExiting:M,onEnter:A,onEntering:I,onEntered:B}=e,F=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,eH),K=function(e,t){let n=eB(),[r,a]=(0,s.useState)(()=>eF(e,null==n?void 0:n.document));if(!r){let o=eF(e);o&&a(o)}return(0,s.useEffect)(()=>{t&&r&&t(r)},[t,r]),(0,s.useEffect)(()=>{let t=eF(e);t!==r&&a(t)},[e,r]),r}(S),W=function(e){let t=eB(),n=e||(r||(r=new eA({ownerDocument:null==t?void 0:t.document})),r),a=(0,s.useRef)({dialog:null,backdrop:null});return Object.assign(a.current,{add:()=>n.add(a.current),remove:()=>n.remove(a.current),isTopModal:()=>n.isTopModal(a.current),setDialogRef:(0,s.useCallback)(e=>{a.current.dialog=e},[]),setBackdropRef:(0,s.useCallback)(e=>{a.current.backdrop=e},[])})}(_),H=(n=(0,s.useRef)(!0),a=(0,s.useRef)(function(){return n.current}),(0,s.useEffect)(function(){return n.current=!0,function(){n.current=!1}},[]),a.current),V=(i=(0,s.useRef)(null),(0,s.useEffect)(function(){i.current=c}),i.current),[U,Z]=(0,s.useState)(!c),G=(0,s.useRef)(null),X=!!(b||y);(0,s.useImperativeHandle)(t,()=>W,[W]),ef&&!V&&c&&(G.current=eD()),X||c||U?c&&U&&Z(!1):Z(!0);let q=O(()=>{if(W.add(),et.current=eb(document,"keydown",Q),ee.current=eb(document,"focus",()=>setTimeout(z),!0),P&&P(),C){let e=eD(document);W.dialog&&e&&!e$(W.dialog,e)&&(G.current=e,W.dialog.focus())}}),Y=O(()=>{if(W.remove(),null==et.current||et.current(),null==ee.current||ee.current(),j){var e;null==(e=G.current)||null==e.focus||e.focus(k),G.current=null}});(0,s.useEffect)(()=>{c&&K&&q()},[c,K,q]),(0,s.useEffect)(()=>{U&&Y()},[U,Y]),l=()=>{Y()},(u=(0,s.useRef)(l)).current=l,(0,s.useEffect)(function(){return function(){return u.current()}},[]);let z=O(()=>{if(!w||!H()||!W.isTopModal())return;let e=eD();W.dialog&&e&&!e$(W.dialog,e)&&W.dialog.focus()}),J=O(e=>{e.target===e.currentTarget&&(null==g||g(e),!0===m&&L())}),Q=O(e=>{h&&27===e.keyCode&&W.isTopModal()&&(null==x||x(e),e.defaultPrevented||L())}),ee=(0,s.useRef)(),et=(0,s.useRef)(),er=(...e)=>{Z(!0),null==$||$(...e)};if(!K||!(c||X&&!U))return null;let ea=Object.assign({role:d,ref:W.setDialogRef,"aria-modal":"dialog"===d||void 0},F,{style:p,className:f,tabIndex:-1}),eo=R?R(ea):(0,o.jsx)("div",Object.assign({},ea,{children:s.cloneElement(v,{role:"document"})}));eo=eW(b,y,{unmountOnExit:!0,appear:!0,in:!!c,onExit:D,onExiting:M,onExited:er,onEnter:A,onEntering:I,onEntered:B,children:eo});let ei=null;return m&&(ei=eW(E,N,{in:!!c,appear:!0,unmountOnExit:!0,children:ei=T({ref:W.setBackdropRef,onClick:J})})),(0,o.jsx)(o.Fragment,{children:en.createPortal((0,o.jsxs)(o.Fragment,{children:[ei,eo]}),K)})});eV.displayName="Modal";var eU=Object.assign(eV,{Manager:eA});let eZ={[el]:"show",[es]:"show"},eG=s.forwardRef(({className:e,children:t,transitionClasses:n={},...r},a)=>{let i=(0,s.useCallback)((e,t)=>{eC(e),null==r.onEnter||r.onEnter(e,t)},[r]);return(0,o.jsx)(eO,{ref:a,addEndListener:eE,...r,onEnter:i,childRef:t.ref,children:(r,a)=>s.cloneElement(t,{...a,className:l()("fade",e,t.props.className,eZ[r],n[r])})})});eG.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},eG.displayName="Fade";var eX=(0,B.Z)("offcanvas-body");let eq={[el]:"show",[es]:"show"},eY=s.forwardRef(({bsPrefix:e,className:t,children:n,...r},a)=>(e=(0,M.vE)(e,"offcanvas"),(0,o.jsx)(eO,{ref:a,addEndListener:eE,...r,childRef:n.ref,children:(r,a)=>s.cloneElement(n,{...a,className:l()(t,n.props.className,(r===el||r===eu)&&`${e}-toggling`,eq[r])})})));eY.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},eY.displayName="OffcanvasToggling";let ez=s.createContext({onHide(){}});var eJ=n(5697),eQ=n.n(eJ);let e0={"aria-label":eQ().string,onClick:eQ().func,variant:eQ().oneOf(["white"])},e1=s.forwardRef(({className:e,variant:t,...n},r)=>(0,o.jsx)("button",{ref:r,type:"button",className:l()("btn-close",t&&`btn-close-${t}`,e),...n}));e1.displayName="CloseButton",e1.propTypes=e0,e1.defaultProps={"aria-label":"Close"};let e4=s.forwardRef(({closeLabel:e,closeVariant:t,closeButton:n,onHide:r,children:a,...i},l)=>{let u=(0,s.useContext)(ez),c=O(()=>{null==u||u.onHide(),null==r||r()});return(0,o.jsxs)("div",{ref:l,...i,children:[a,n&&(0,o.jsx)(e1,{"aria-label":e,variant:t,onClick:c})]})});e4.defaultProps={closeLabel:"Close",closeButton:!1};let e9=s.forwardRef(({bsPrefix:e,className:t,...n},r)=>(e=(0,M.vE)(e,"offcanvas-header"),(0,o.jsx)(e4,{ref:r,...n,className:l()(t,e)})));e9.displayName="OffcanvasHeader",e9.defaultProps={closeLabel:"Close",closeButton:!1};var e7=n(9602);let e3=(0,e7.Z)("h5");var e2=(0,B.Z)("offcanvas-title",{Component:e3});function e6(e,t){return e.replace(RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}let e5={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class e8 extends eA{adjustAndStore(e,t,n){let r=t.style[e];t.dataset[e]=r,ee(t,{[e]:`${parseFloat(ee(t,e))+n}px`})}restore(e,t){let n=t.dataset[e];void 0!==n&&(delete t.dataset[e],ee(t,{[e]:n}))}setContainerStyle(e){var t,n;super.setContainerStyle(e);let r=this.getElement();if(n="modal-open",(t=r).classList?t.classList.add(n):(t.classList?n&&t.classList.contains(n):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+n+" "))||("string"==typeof t.className?t.className=t.className+" "+n:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+n)),!e.scrollBarWidth)return;let a=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";m(r,e5.FIXED_CONTENT).forEach(t=>this.adjustAndStore(a,t,e.scrollBarWidth)),m(r,e5.STICKY_CONTENT).forEach(t=>this.adjustAndStore(o,t,-e.scrollBarWidth)),m(r,e5.NAVBAR_TOGGLER).forEach(t=>this.adjustAndStore(o,t,e.scrollBarWidth))}removeContainerStyle(e){var t,n;super.removeContainerStyle(e);let r=this.getElement();n="modal-open",(t=r).classList?t.classList.remove(n):"string"==typeof t.className?t.className=e6(t.className,n):t.setAttribute("class",e6(t.className&&t.className.baseVal||"",n));let a=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";m(r,e5.FIXED_CONTENT).forEach(e=>this.restore(a,e)),m(r,e5.STICKY_CONTENT).forEach(e=>this.restore(o,e)),m(r,e5.NAVBAR_TOGGLER).forEach(e=>this.restore(o,e))}}function te(e){return(0,o.jsx)(eY,{...e})}function tt(e){return(0,o.jsx)(eG,{...e})}let tn=s.forwardRef(({bsPrefix:e,className:t,children:n,"aria-labelledby":r,placement:i,responsive:u,show:c,backdrop:d,keyboard:f,scroll:p,onEscapeKeyDown:v,onShow:m,onHide:h,container:g,autoFocus:x,enforceFocus:b,restoreFocus:y,restoreFocusOptions:E,onEntered:N,onExit:C,onExiting:w,onEnter:j,onEntering:k,onExited:R,backdropClassName:T,manager:_,renderStaticNode:S,...P},L)=>{let D=(0,s.useRef)();e=(0,M.vE)(e,"offcanvas");let{onToggle:$}=(0,s.useContext)(A)||{},[I,B]=(0,s.useState)(!1),F=eL(u||"xs","up");(0,s.useEffect)(()=>{B(u?c&&!F:c)},[c,u,F]);let K=O(()=>{null==$||$(),null==h||h()}),W=(0,s.useMemo)(()=>({onHide:K}),[K]),H=(e,...t)=>{e&&(e.style.visibility="visible"),null==j||j(e,...t)},V=(e,...t)=>{e&&(e.style.visibility=""),null==R||R(...t)},U=(0,s.useCallback)(t=>(0,o.jsx)("div",{...t,className:l()(`${e}-backdrop`,T)}),[T,e]),Z=a=>(0,o.jsx)("div",{...a,...P,className:l()(t,u?`${e}-${u}`:e,`${e}-${i}`),"aria-labelledby":r,children:n});return(0,o.jsxs)(o.Fragment,{children:[!I&&(u||S)&&Z({}),(0,o.jsx)(ez.Provider,{value:W,children:(0,o.jsx)(eU,{show:I,ref:L,backdrop:d,container:g,keyboard:f,autoFocus:x,enforceFocus:b&&!p,restoreFocus:y,restoreFocusOptions:E,onEscapeKeyDown:v,onShow:m,onHide:K,onEnter:H,onEntering:k,onEntered:N,onExit:C,onExiting:w,onExited:V,manager:_||(p?(D.current||(D.current=new e8({handleContainerOverflow:!1})),D.current):(a||(a=new e8(void 0)),a)),transition:te,backdropTransition:tt,renderBackdrop:U,renderDialog:Z})})]})});tn.displayName="Offcanvas",tn.defaultProps={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start",renderStaticNode:!1};var tr=Object.assign(tn,{Body:eX,Header:e9,Title:e2});let ta=s.forwardRef((e,t)=>{let n=(0,s.useContext)(A);return(0,o.jsx)(tr,{ref:t,show:!!(null!=n&&n.expanded),...e,renderStaticNode:!0})});ta.displayName="NavbarOffcanvas";let to=(0,B.Z)("navbar-text",{Component:"span"}),ti=s.forwardRef((e,t)=>{let{bsPrefix:n,expand:r,variant:a,bg:i,fixed:u,sticky:c,className:d,as:f="nav",expanded:v,onToggle:m,onSelect:h,collapseOnSelect:g,...x}=p(e,{expanded:"onToggle"}),y=(0,M.vE)(n,"navbar"),E=(0,s.useCallback)((...e)=>{null==h||h(...e),g&&v&&(null==m||m(!1))},[h,g,v,m]);void 0===x.role&&"nav"!==f&&(x.role="navigation");let N=`${y}-expand`;"string"==typeof r&&(N=`${N}-${r}`);let C=(0,s.useMemo)(()=>({onToggle:()=>null==m?void 0:m(!v),bsPrefix:y,expanded:!!v,expand:r}),[y,v,r,m]);return(0,o.jsx)(A.Provider,{value:C,children:(0,o.jsx)(b.Provider,{value:E,children:(0,o.jsx)(f,{ref:t,...x,className:l()(d,y,r&&N,a&&`${y}-${a}`,i&&`bg-${i}`,c&&`sticky-${c}`,u&&`fixed-${u}`)})})})});ti.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},ti.displayName="Navbar";var tl=Object.assign(ti,{Brand:X,Collapse:eT,Offcanvas:ta,Text:to,Toggle:e_});let ts=s.forwardRef(({bsPrefix:e,fluid:t,as:n="div",className:r,...a},i)=>{let s=(0,M.vE)(e,"container"),u="string"==typeof t?`-${t}`:"-fluid";return(0,o.jsx)(n,{ref:i,...a,className:l()(r,t?`${s}${u}`:s)})});ts.displayName="Container",ts.defaultProps={fluid:!1};var tu=n(4047),tc=n.n(tu);let td=()=>(0,o.jsx)(tl,{className:tc().navbar,collapseOnSelect:!0,expand:"lg",variant:"dark",fixed:"top",children:(0,o.jsxs)(ts,{children:[(0,o.jsx)(tl.Toggle,{"aria-controls":"responsive-navbar-nav"}),(0,o.jsxs)(tl.Offcanvas,{className:tc()["navbar-toggler"],id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",placement:"end","aria-label":"Toggle collapsible navigation",children:[(0,o.jsx)(tr.Header,{closeButton:!0}),(0,o.jsx)(tr.Body,{children:(0,o.jsx)(G,{className:"justify-content-end flex-grow-1 pe-3",children:[{name:"Home",link:"/"},{name:"Projects",link:"/projects"},{name:"Contact",link:"/contact"}].map(e=>(0,o.jsx)(G.Link,{href:null==e?void 0:e.link,children:null==e?void 0:e.name},null==e?void 0:e.name))})})]})]})});function tf(e){let{children:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(td,{}),(0,o.jsx)("main",{children:t})]})}function tp(e){let{Component:t,pageProps:n}=e;return(0,o.jsx)(tf,{children:(0,o.jsx)(t,{...n})})}},7599:function(){},4047:function(e){e.exports={navbar:"Navigation_navbar__rwTIF",nav:"Navigation_nav__7ieys","scrolling-active":"Navigation_scrolling-active__rmO8G","navbar-collapse":"Navigation_navbar-collapse__adciy","nav-link":"Navigation_nav-link__g1e_V","nav-logo":"Navigation_nav-logo__HtEUD",navbarMenu:"Navigation_navbarMenu___54dV","navbar-toggler":"Navigation_navbar-toggler__C4hcS"}},5312:function(){},4391:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.default)(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach(function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}}),a})};var r,a=(r=n(2613))&&r.__esModule?r:{default:r};e.exports=t.default},2613:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,o,i){var l=a||"<<anonymous>>",s=i||r;if(null==n[r])return t?Error("Required "+o+" `"+s+"` was not specified in `"+l+"`."):null;for(var u=arguments.length,c=Array(u>6?u-6:0),d=6;d<u;d++)c[d-6]=arguments[d];return e.apply(void 0,[n,r,l,o,s].concat(c))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},2703:function(e,t,n){"use strict";var r=n(414);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},9059:function(e,t,n){"use strict";var r=n(7294);let a=r.createContext(null);a.displayName="CardHeaderContext",t.Z=a},6792:function(e,t,n){"use strict";n.d(t,{vE:function(){return l}});var r=n(7294);n(5893);let a=r.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:o,Provider:i}=a;function l(e,t){let{prefixes:n}=(0,r.useContext)(a);return e||n[t]||t}},6611:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(4184),a=n.n(r),o=/-(.)/g,i=n(7294),l=n(6792),s=n(5893);let u=e=>e[0].toUpperCase()+e.replace(o,function(e,t){return t.toUpperCase()}).slice(1);function c(e,{displayName:t=u(e),Component:n,defaultProps:r}={}){let o=i.forwardRef(({className:t,bsPrefix:r,as:o=n||"div",...i},u)=>{let c=(0,l.vE)(r,e);return(0,s.jsx)(o,{ref:u,className:a()(t,c),...i})});return o.defaultProps=r,o.displayName=t,o}},9602:function(e,t,n){"use strict";var r=n(7294),a=n(4184),o=n.n(a),i=n(5893);t.Z=e=>r.forwardRef((t,n)=>(0,i.jsx)("div",{...t,ref:n,className:o()(t.className,e)}))}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(880)}),_N_E=e.O()}]);