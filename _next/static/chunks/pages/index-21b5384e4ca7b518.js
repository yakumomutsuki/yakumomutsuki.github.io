(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7285:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},9546:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=s,t.useAmp=function(){return s(a.default.useContext(i.AmpStateContext))};var r,a=(r=n(7294))&&r.__esModule?r:{default:r},i=n(7285);function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,i=e.hasQuery,s=void 0!==i&&i;return n||a&&s}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},6505:function(e,t,n){"use strict";var r=n(930);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=d,t.default=void 0;var i,s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),o=(i=n(148))&&i.__esModule?i:{default:i},c=n(7285),u=n(523),l=n(9546);n(7206);function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[s.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=s.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var i=!0,s=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){s=!0;var o=a.key.slice(a.key.indexOf("$")+1);e.has(o)?i=!1:e.add(o)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(var c=0,u=p.length;c<u;c++){var l=p[c];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var d=a.props[l],f=r[l]||new Set;"name"===l&&s||!f.has(d)?(f.add(d),r[l]=f):i=!1}}}return i}}()).reverse().map((function(e,n){var i=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return o["data-href"]=o.href,o.href=void 0,o["data-optimized-fonts"]=!0,s.default.cloneElement(e,o)}return s.default.cloneElement(e,{key:i})}))}var m=function(e){var t=e.children,n=s.useContext(c.AmpStateContext),r=s.useContext(u.HeadManagerContext);return s.default.createElement(o.default,{reduceComponentsToState:h,headManager:r,inAmpMode:l.isInAmpMode(n)},t)};t.default=m,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},148:function(e,t,n){"use strict";var r=n(7980),a=n(3227),i=n(8361),s=(n(2191),n(5971)),o=n(2715),c=n(1193);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return o(this,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294));var d=function(e){s(n,e);var t=u(n);function n(e){var i;return a(this,n),(i=t.call(this,e)).emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},128:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(9008),a=n.n(r),i=n(7640),s=n.n(i),o=(n(7294),n(7405)),c=n.n(o),u=n(5893),l=function(){return(0,u.jsx)("header",{className:"hero is-dark ".concat(c().Header),children:(0,u.jsx)("div",{className:"hero-body",children:(0,u.jsx)("div",{className:"container",children:(0,u.jsx)("h1",{className:"title has-text-centered is-size-4-mobile",children:"yakumomutsuki.github.io"})})})})},d=["Java SE 8 Programmer I (2019-01)","LPIC Level 1 (2019-09)","HTML5 Professional Exam Level1 (2020-01)","HTML5 Professional Exam Level2 (2020-02)","OSS-DB Exam Silver (2020-09)","ITIL Foundation 2011 (2020-12)","LPIC Level 2 (2021-09)","AWS Certified Cloud Practitioner (2021-12)","AWS Certified Solutions Architect \u2013 Associate (2022-01)"],f=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(a(),{children:[(0,u.jsx)("title",{children:"yakumomutsuki.github.io"}),(0,u.jsx)("link",{href:"https://use.fontawesome.com/releases/v5.6.1/css/all.css",rel:"stylesheet"}),(0,u.jsx)("meta",{name:"description",content:"yakumomutsuki's profile"})]}),(0,u.jsx)(l,{}),(0,u.jsx)("main",{className:"container",children:(0,u.jsx)("div",{className:"lead",children:(0,u.jsxs)("div",{className:"columns",children:[(0,u.jsxs)("div",{className:"column is-two-fifths",children:[(0,u.jsx)("div",{className:"is-flex center is-justify-content-center",children:(0,u.jsx)("figure",{className:"image is-128x128",children:(0,u.jsx)("img",{className:"is-rounded",src:"/profile.jpeg",alt:"",width:400,height:400,decoding:"async"})})}),(0,u.jsxs)("div",{className:"has-text-centered",children:[(0,u.jsx)("p",{children:"yakumomutsuki"}),(0,u.jsx)("br",{}),(0,u.jsxs)("p",{children:["\u85e4\u6ca2\u5e02\u5728\u4f4f\u306e\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9/\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u306e\u30a8\u30f3\u30b8\u30cb\u30a2\u3067\u3059\u3002",(0,u.jsx)("br",{}),"\u52e4\u52d9\u5148\u306f\u6c50\u7559\u306eWeb\u7cfb\u4f01\u696d\u3067\u3059\u3002"]}),(0,u.jsxs)("p",{children:["Working in IT / Web at Minato, Japan.",(0,u.jsx)("br",{}),"Developer of frontend, backend.",(0,u.jsx)("br",{}),"Living in Fijisawa, Japan.",(0,u.jsx)("br",{})]})]}),(0,u.jsx)("p",{className:"menu-label",children:"SNS"}),(0,u.jsxs)("ul",{className:"menu-list is-unstyled",children:[(0,u.jsx)("li",{children:(0,u.jsx)("a",{className:"fab fa-twitter ".concat(s().touchable," ").concat(s().icon),href:"https://twitter.com/yakumomutsuki",children:"\xa0Twitter"})}),(0,u.jsx)("li",{children:(0,u.jsx)("a",{className:"fab fa-github ".concat(s().touchable," ").concat(s().icon),href:"https://github.com/yakumomutsuki",children:"\xa0GitHub"})})]})]}),(0,u.jsx)("div",{className:"column",children:(0,u.jsxs)("section",{children:[(0,u.jsx)("h2",{className:s().heading,children:"Skills"}),(0,u.jsx)("div",{className:"content",children:(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:"HTML5 / CSS"}),(0,u.jsx)("li",{children:"JavaScript / TypeScript"}),(0,u.jsx)("li",{children:"Vue.js / React.js"}),(0,u.jsx)("li",{children:"Java / Ruby / PHP"})]})}),(0,u.jsx)("h2",{className:s().heading,children:"Certified"}),(0,u.jsx)("div",{className:"content",children:(0,u.jsx)("ul",{children:d.map((function(e,t){return(0,u.jsx)("li",{children:e},t)}))})})]})})]})})})]})}},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(128)}])},7405:function(e){e.exports={Header:"header_Header__NaOBR"}},7640:function(e){e.exports={heading:"index_heading___QVkp",touchable:"index_touchable__FYm4B",icon:"index_icon__Noc_h",rotation:"index_rotation__3dRmS"}},9008:function(e,t,n){e.exports=n(6505)}},function(e){e.O(0,[774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);