(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7913:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,a=(i=n(7294))&&i.__esModule?i:{default:i},o=n(2199),s=n(1587),c=n(7215);function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u={};function f(e,t,n,r){if(e&&o.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(i?"%"+i:"")]=!0}}var d=a.default.forwardRef((function(e,t){var n,i=e.legacyBehavior,d=void 0===i?!0!==Boolean(!1):i,h=e.href,p=e.as,m=e.children,g=e.prefetch,x=e.passHref,j=e.replace,v=e.shallow,y=e.scroll,b=e.locale,k=e.onClick,_=e.onMouseEnter,N=l(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);n=m,d&&"string"===typeof n&&(n=a.default.createElement("a",null,n));var w,E=!1!==g,L=s.useRouter(),C=a.default.useMemo((function(){var e=o.resolveHref(L,h,!0),t=r(e,2),n=t[0],i=t[1];return{href:n,as:p?o.resolveHref(L,p):i||n}}),[L,h,p]),S=C.href,O=C.as,I=a.default.useRef(S),M=a.default.useRef(O);d&&(w=a.default.Children.only(n));var P=d?w&&"object"===typeof w&&w.ref:t,R=c.useIntersection({rootMargin:"200px"}),H=r(R,3),T=H[0],B=H[1],D=H[2],A=a.default.useCallback((function(e){M.current===O&&I.current===S||(D(),M.current=O,I.current=S),T(e),P&&("function"===typeof P?P(e):"object"===typeof P&&(P.current=e))}),[O,P,S,D,T]);a.default.useEffect((function(){var e=B&&E&&o.isLocalURL(S),t="undefined"!==typeof b?b:L&&L.locale,n=u[S+"%"+O+(t?"%"+t:"")];e&&!n&&f(L,S,O,{locale:t})}),[O,S,B,b,E,L]);var U={ref:A,onClick:function(e){d||"function"!==typeof k||k(e),d&&w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,a,s,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(n))&&(e.preventDefault(),t[i?"replace":"push"](n,r,{shallow:a,locale:c,scroll:s}))}(e,L,S,O,j,v,y,b)},onMouseEnter:function(e){d||"function"!==typeof _||_(e),d&&w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),o.isLocalURL(S)&&f(L,S,O,{priority:!0})}};if(!d||x||"a"===w.type&&!("href"in w.props)){var F="undefined"!==typeof b?b:L&&L.locale,J=L&&L.isLocaleDomain&&o.getDomainLocale(O,F,L&&L.locales,L&&L.domainLocales);U.href=J||o.addBasePath(o.addLocale(O,F,L&&L.defaultLocale))}return d?a.default.cloneElement(w,U):a.default.createElement("a",Object.assign({},N,U),n)}));t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},7215:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,l=e.disabled||!o,u=i.useRef(),f=i.useState(!1),d=r(f,2),h=d[0],p=d[1],m=i.useState(t?t.current:null),g=r(m,2),x=g[0],j=g[1],v=i.useCallback((function(e){u.current&&(u.current(),u.current=void 0),l||h||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=s.get(r):(t=s.get(n),c.push(n));if(t)return t;var i=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(n,t={id:n,observer:a,elements:i}),t}(n),i=r.id,a=r.observer,o=r.elements;return o.set(e,t),a.observe(e),function(){if(o.delete(e),a.unobserve(e),0===o.size){a.disconnect(),s.delete(i);var t=c.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:x,rootMargin:n}))}),[l,x,n,h]),y=i.useCallback((function(){p(!1)}),[]);return i.useEffect((function(){if(!o&&!h){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[h]),i.useEffect((function(){t&&j(t.current)}),[t]),[v,h,y]};var i=n(7294),a=n(8065),o="undefined"!==typeof IntersectionObserver;var s=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9590:function(e,t,n){"use strict";n.d(t,{h:function(){return o}});n(7294);var r=n(7405),i=n.n(r),a=n(5893),o=function(){return(0,a.jsx)("header",{className:"hero is-dark ".concat(i().Header),children:(0,a.jsx)("div",{className:"hero-body",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("h1",{className:"title has-text-centered is-size-4-mobile",children:"yakumomutsuki.github.io"})})})})}},9595:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(1664),i=n.n(r),a=n(7640),o=n.n(a),s=n(9590),c=n(9008),l=n.n(c),u=(n(7294),n(5893)),f=function(e){var t=e.pageTitle,n=e.pageDescription,r=e.pagePath,i=e.pageImg,a=e.pageImgWidth,o=e.pageImgHeight,s=t,c=n,f=r,d=i,h=a||1280,p=o||640;return(0,u.jsxs)(l(),{children:[(0,u.jsx)("title",{children:s}),(0,u.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1.0"}),(0,u.jsx)("meta",{name:"description",content:c}),(0,u.jsx)("meta",{property:"og:url",content:f}),(0,u.jsx)("meta",{property:"og:title",content:s}),(0,u.jsx)("meta",{property:"og:site_name",content:s}),(0,u.jsx)("meta",{property:"og:description",content:c}),(0,u.jsx)("meta",{property:"og:type",content:"website"}),(0,u.jsx)("meta",{property:"og:image",content:d}),(0,u.jsx)("meta",{property:"og:image:width",content:String(h)}),(0,u.jsx)("meta",{property:"og:image:height",content:String(p)}),(0,u.jsx)("meta",{name:"twitter:card",content:d}),(0,u.jsx)("link",{href:"https://use.fontawesome.com/releases/v5.6.1/css/all.css",rel:"stylesheet"}),(0,u.jsx)("link",{rel:"canonical",href:f})]})},d=["Java SE 8 Programmer I (2019-01)","LPIC Level 1 (2019-09)","HTML5 Professional Exam Level1 (2020-01)","HTML5 Professional Exam Level2 (2020-02)","OSS-DB Exam Silver (2020-09)","ITIL Foundation 2011 (2020-12)","LPIC Level 2 (2021-09)","AWS Certified Cloud Practitioner (2021-12)","AWS Certified Solutions Architect \u2013 Associate (2022-01)"],h=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(f,{pageTitle:"yakumomutsuki.github.io",pageDescription:"yakumomutsuki's profile",pagePath:"https://yakumomutsuki.github.io",pageImg:"https://yakumomutsuki.github.io/profile.jpeg"}),(0,u.jsx)(s.h,{}),(0,u.jsx)("main",{className:"container",children:(0,u.jsx)("div",{className:"lead",children:(0,u.jsxs)("div",{className:"columns",children:[(0,u.jsxs)("div",{className:"column is-two-fifths",children:[(0,u.jsx)("div",{className:"is-flex center is-justify-content-center",children:(0,u.jsx)("figure",{className:"image is-128x128",children:(0,u.jsx)("img",{className:"is-rounded",src:"/profile.jpeg",alt:"",width:400,height:400,decoding:"async"})})}),(0,u.jsxs)("div",{className:"has-text-centered",children:[(0,u.jsx)("p",{children:"yakumomutsuki"}),(0,u.jsx)("br",{}),(0,u.jsx)("p",{children:"\u85e4\u6ca2\u5e02\u5728\u4f4f\u306e\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9/\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u306e\u30a8\u30f3\u30b8\u30cb\u30a2\u3067\u3059\u3002"}),(0,u.jsxs)("p",{children:["Developer of frontend, backend.",(0,u.jsx)("br",{}),"Living in Fijisawa, Japan.",(0,u.jsx)("br",{})]})]}),(0,u.jsx)("p",{className:"menu-label",children:"SNS"}),(0,u.jsxs)("ul",{className:"menu-list is-unstyled",children:[(0,u.jsx)("li",{children:(0,u.jsx)("a",{className:"fab fa-twitter ".concat(o().touchable," ").concat(o().icon),href:"https://twitter.com/yakumomutsuki",children:"\xa0Twitter"})}),(0,u.jsx)("li",{children:(0,u.jsx)("a",{className:"fab fa-github ".concat(o().touchable," ").concat(o().icon),href:"https://github.com/yakumomutsuki",children:"\xa0GitHub"})})]})]}),(0,u.jsxs)("div",{className:"column",children:[(0,u.jsxs)("section",{className:"content",children:[(0,u.jsx)("h2",{className:o().heading,children:"Skills"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:"HTML5 / CSS"}),(0,u.jsx)("li",{children:"JavaScript / TypeScript"}),(0,u.jsx)("li",{children:"Vue.js / React.js"}),(0,u.jsx)("li",{children:"Java / Ruby / PHP"})]})]}),(0,u.jsxs)("section",{className:"content",children:[(0,u.jsx)("h2",{className:o().heading,children:"Certified"}),(0,u.jsx)("ul",{children:d.map((function(e,t){return(0,u.jsx)("li",{children:e},t)}))})]}),(0,u.jsxs)("section",{className:"content",children:[(0,u.jsx)("h2",{className:o().heading,children:"Others"}),(0,u.jsx)("ul",{children:(0,u.jsx)("li",{children:(0,u.jsx)(i(),{href:"/blog",children:(0,u.jsx)("a",{children:"Tech Blog"})})})})]})]})]})})})]})}},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9595)}])},7405:function(e){e.exports={Header:"header_Header__NaOBR"}},7640:function(e){e.exports={heading:"index_heading___QVkp",touchable:"index_touchable__FYm4B",icon:"index_icon__Noc_h",rotation:"index_rotation__3dRmS"}},1664:function(e,t,n){e.exports=n(7913)}},function(e){e.O(0,[774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);