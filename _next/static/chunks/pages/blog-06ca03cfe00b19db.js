(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7913:function(e,t,r){"use strict";var n=r(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o=(a=r(7294))&&a.__esModule?a:{default:a},c=r(2199),i=r(1587),l=r(7215);function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s={};function f(e,t,r,n){if(e&&c.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(a?"%"+a:"")]=!0}}var d=o.default.forwardRef((function(e,t){var r,a=e.legacyBehavior,d=void 0===a?!0!==Boolean(!1):a,p=e.href,m=e.as,h=e.children,v=e.prefetch,_=e.passHref,g=e.replace,y=e.shallow,b=e.scroll,x=e.locale,j=e.onClick,N=e.onMouseEnter,C=u(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);r=h,d&&"string"===typeof r&&(r=o.default.createElement("a",null,r));var E,k=!1!==v,I=i.useRouter(),w=o.default.useMemo((function(){var e=c.resolveHref(I,p,!0),t=n(e,2),r=t[0],a=t[1];return{href:r,as:m?c.resolveHref(I,m):a||r}}),[I,p,m]),O=w.href,M=w.as,L=o.default.useRef(O),S=o.default.useRef(M);d&&(E=o.default.Children.only(r));var R=d?E&&"object"===typeof E&&E.ref:t,T=l.useIntersection({rootMargin:"200px"}),H=n(T,3),P=H[0],A=H[1],U=H[2],B=o.default.useCallback((function(e){S.current===M&&L.current===O||(U(),S.current=M,L.current=O),P(e),R&&("function"===typeof R?R(e):"object"===typeof R&&(R.current=e))}),[M,R,O,U,P]);o.default.useEffect((function(){var e=A&&k&&c.isLocalURL(O),t="undefined"!==typeof x?x:I&&I.locale,r=s[O+"%"+M+(t?"%"+t:"")];e&&!r&&f(I,O,M,{locale:t})}),[M,O,A,x,k,I]);var D={ref:B,onClick:function(e){d||"function"!==typeof j||j(e),d&&E.props&&"function"===typeof E.props.onClick&&E.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,i,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),t[a?"replace":"push"](r,n,{shallow:o,locale:l,scroll:i}))}(e,I,O,M,g,y,b,x)},onMouseEnter:function(e){d||"function"!==typeof N||N(e),d&&E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(e),c.isLocalURL(O)&&f(I,O,M,{priority:!0})}};if(!d||_||"a"===E.type&&!("href"in E.props)){var K="undefined"!==typeof x?x:I&&I.locale,q=I&&I.isLocaleDomain&&c.getDomainLocale(M,K,I&&I.locales,I&&I.domainLocales);D.href=q||c.addBasePath(c.addLocale(M,K,I&&I.defaultLocale))}return d?o.default.cloneElement(E,D):o.default.createElement("a",Object.assign({},C,D),r)}));t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},7215:function(e,t,r){"use strict";var n=r(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,u=e.disabled||!c,s=a.useRef(),f=a.useState(!1),d=n(f,2),p=d[0],m=d[1],h=a.useState(t?t.current:null),v=n(h,2),_=v[0],g=v[1],y=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),u||p||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=l.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=i.get(n):(t=i.get(r),l.push(r));if(t)return t;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(r,t={id:r,observer:o,elements:a}),t}(r),a=n.id,o=n.observer,c=n.elements;return c.set(e,t),o.observe(e),function(){if(c.delete(e),o.unobserve(e),0===c.size){o.disconnect(),i.delete(a);var t=l.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&m(e)}),{root:_,rootMargin:r}))}),[u,_,r,p]),b=a.useCallback((function(){m(!1)}),[]);return a.useEffect((function(){if(!c&&!p){var e=o.requestIdleCallback((function(){return m(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[p]),a.useEffect((function(){t&&g(t.current)}),[t]),[y,p,b]};var a=r(7294),o=r(8065),c="undefined"!==typeof IntersectionObserver;var i=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9590:function(e,t,r){"use strict";r.d(t,{h:function(){return c}});r(7294);var n=r(7405),a=r.n(n),o=r(5893),c=function(){return(0,o.jsx)("header",{className:"hero is-dark ".concat(a().Header),children:(0,o.jsx)("div",{className:"hero-body",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("h1",{className:"title has-text-centered is-size-4-mobile",children:"yakumomutsuki.github.io"})})})})}},8149:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return h},default:function(){return v}});var n=r(9008),a=r.n(n),o=r(1664),c=r.n(o),i=r(7294);function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],c=!0,i=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);c=!0);}catch(l){i=!0,a=l}finally{try{c||null==r.return||r.return()}finally{if(i)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"===typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=r(1944),f=r.n(s),d=r(5893),p=function(e){var t=e.imgSrc,r=e.text,n=u(i.useState(!0),2),a=n[0],o=n[1];return(0,d.jsxs)("div",{className:"card",children:[(0,d.jsx)("div",{className:"card-image",children:a?(0,d.jsx)("img",{className:f().Card__Img,src:t,alt:"",onError:function(e){e.target instanceof HTMLImageElement&&o(!1)}}):(0,d.jsx)("div",{className:"".concat(f().Card__Img," ").concat(f().Card__Img__NonExist)})}),(0,d.jsx)("div",{className:"card-content ".concat(f().Card__Text),children:r})]})},m=r(9590),h=!0,v=function(e){var t=e.entries,r=function(e){return e.headerImage?e.headerImage.fields.file.url:""};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(a(),{children:[(0,d.jsx)("title",{children:"yakumomutsuki | blog "}),(0,d.jsx)("meta",{name:"description",content:"yakumomutsuki's blog"})]}),(0,d.jsx)(c(),{href:"/",children:(0,d.jsx)("a",{children:(0,d.jsx)(m.h,{})})}),(0,d.jsx)("main",{className:"container",children:(0,d.jsx)("div",{className:"lead",children:(0,d.jsxs)("div",{className:"content",children:[(0,d.jsx)("h1",{className:"heading",children:"\u30d6\u30ed\u30b0\u4e00\u89a7"}),(0,d.jsx)("div",{className:"columns is-multiline",children:t.map((function(e,t){return(0,d.jsx)(c(),{href:(n=e.id,"/blog/contents/".concat(n)),children:(0,d.jsx)("a",{className:"block column is-4-desktop is-6-tablet",children:(0,d.jsx)(p,{imgSrc:r(e),text:e.title})})},"card_".concat(t));var n}))})]})})})]})}},7801:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return r(8149)}])},1944:function(e){e.exports={Card:"card_Card__QV5ix",Card__Img:"card_Card__Img__sFuvk",Card__Img__NonExist:"card_Card__Img__NonExist__N3T9R",Card__Text:"card_Card__Text__qwDN_"}},7405:function(e){e.exports={Header:"header_Header__NaOBR"}},1664:function(e,t,r){e.exports=r(7913)}},function(e){e.O(0,[774,888,179],(function(){return t=7801,e(e.s=t);var t}));var t=e.O();_N_E=t}]);