(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[989],{6243:function(e,t,n){"use strict";n.d(t,{n:function(){return He}});var r=n(7294);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const o=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce(((e,t)=>(e[t.toLowerCase()]=t,e)),{for:"htmlFor"}),i={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},s=["style","script"],l=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,u=/mailto:/i,c=/\n{2,}$/,g=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,p=/^ *> ?/gm,f=/^ {2,}\n/,d=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,h=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,m=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,y=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,v=/^(?:\n *)*\n/,b=/\r\n?/g,k=/^\[\^([^\]]+)](:.*)\n/,x=/^\[\^([^\]]+)]/,w=/\f/g,F=/^\s*?\[(x|\s)\]/,A=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,_=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,E=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,$=/&([a-z]+);/g,S=/^<!--[\s\S]*?(?:-->)/,O=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,C=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,M=/^\{.*\}$/,L=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,j=/^<([^ >]+@[^ >]+)>/,H=/^<([^ >]+:\/[^ >]+)>/,I=/ *\n+$/,P=/(?:^|\n)( *)$/,z=/-([a-z])?/gi,T=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,R=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,N=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,D=/^\[([^\]]*)\] ?\[([^\]]*)\]/,G=/(\[|\])/g,B=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,W=/\t/g,U=/^ *\| */,Z=/(^ *\||\| *$)/g,X=/ *$/,q=/^ *:-+: *$/,K=/^ *:-+ *$/,J=/^ *-+: *$/,V=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,Y=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,Q=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,ee=/^\\([^0-9A-Za-z\s])/,te=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,ne=/^\n+/,re=/^([ \t]*)/,ae=/\\([^0-9A-Z\s])/gi,oe=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +"),ie=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\\n|$)","gm"),se=new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) (?!(?:[*+-]|\\d+\\.) ))\\n*|\\s*\\n*$)"),le="(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",ue=new RegExp("^\\[("+le+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),ce=new RegExp("^!\\[("+le+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),ge=[g,m,h,A,_,S,ie,se,T],pe=[...ge,/^[^\n]+(?:  \n|\n{2,})/,E,C];function fe(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function de(e){return J.test(e)?"right":q.test(e)?"center":K.test(e)?"left":null}function he(e,t,n){const r=n.t;n.t=!0;const a=t(e.trim(),n);n.t=r;let o=[[]];return a.forEach((function(e,t){"tableSeparator"===e.type?0!==t&&t!==a.length-1&&o.push([]):("text"!==e.type||null!=a[t+1]&&"tableSeparator"!==a[t+1].type||(e.content=e.content.replace(X,"")),o[o.length-1].push(e))})),o}function me(e,t,n){n.o=!0;const r=he(e[1],t,n),a=e[2].replace(Z,"").split("|").map(de),o=function(e,t,n){return e.trim().split("\n").map((function(e){return he(e,t,n)}))}(e[3],t,n);return n.o=!1,{align:a,cells:o,header:r,type:"table"}}function ye(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function ve(e){return function(t,n){return n.o?e.exec(t):null}}function be(e){return function(t,n){return n.o||n.u?e.exec(t):null}}function ke(e){return function(t,n){return n.o||n.u?null:e.exec(t)}}function xe(e){return function(t){return e.exec(t)}}function we(e,t,n){if(t.o||t.u)return null;if(n&&!n.endsWith("\n"))return null;let r="";e.split("\n").every((e=>!ge.some((t=>t.test(e)))&&(r+=e+"\n",e.trim())));const a=r.trimEnd();return""==a?null:[r,a]}function Fe(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(e){return null}return e}function Ae(e){return e.replace(ae,"$1")}function _e(e,t,n){const r=n.o||!1,a=n.u||!1;n.o=!0,n.u=!0;const o=e(t,n);return n.o=r,n.u=a,o}function Ee(e,t,n){const r=n.o||!1,a=n.u||!1;n.o=!1,n.u=!0;const o=e(t,n);return n.o=r,n.u=a,o}function $e(e,t,n){return n.o=!1,e(t+"\n\n",n)}const Se=(e,t,n)=>({content:_e(t,e[1],n)});function Oe(){return{}}function Ce(){return null}function Me(...e){return e.filter(Boolean).join(" ")}function Le(e,t,n){let r=e;const a=t.split(".");for(;a.length&&(r=r[a[0]],void 0!==r);)a.shift();return r||n}var je;function He(e,t={}){t.overrides=t.overrides||{},t.slugify=t.slugify||fe,t.namedCodesToUnicode=t.namedCodesToUnicode?a({},i,t.namedCodesToUnicode):i;const n=t.createElement||r.createElement;function Z(e,r,...o){const i=Le(t.overrides,`${e}.props`,{});return n(function(e,t){const n=Le(t,e);return n?"function"==typeof n||"object"==typeof n&&"render"in n?n:Le(t,`${e}.component`,e):e}(e,t.overrides),a({},r,i,{className:Me(null==r?void 0:r.className,i.className)||void 0}),...o)}function X(e){let n=!1;t.forceInline?n=!0:t.forceBlock||(n=!1===B.test(e));const a=ge(le(n?e:`${e.trimEnd().replace(ne,"")}\n\n`,{o:n}));for(;"string"==typeof a[a.length-1]&&!a[a.length-1].trim();)a.pop();if(null===t.wrapper)return a;const o=t.wrapper||(n?"span":"div");let i;if(a.length>1||t.forceWrapper)i=a;else{if(1===a.length)return i=a[0],"string"==typeof i?Z("span",{key:"outer"},i):i;i=null}return r.createElement(o,{key:"outer"},i)}function q(e){const t=e.match(l);return t?t.reduce((function(e,t,n){const a=t.indexOf("=");if(-1!==a){const i=function(e){return-1!==e.indexOf("-")&&null===e.match(O)&&(e=e.replace(z,(function(e,t){return t.toUpperCase()}))),e}(t.slice(0,a)).trim(),s=function(e){const t=e[0];return('"'===t||"'"===t)&&e.length>=2&&e[e.length-1]===t?e.slice(1,-1):e}(t.slice(a+1).trim()),l=o[i]||i,u=e[l]=function(e,t){return"style"===e?t.split(/;\s?/).reduce((function(e,t){const n=t.slice(0,t.indexOf(":"));return e[n.replace(/(-[a-z])/g,(e=>e[1].toUpperCase()))]=t.slice(n.length+1).trim(),e}),{}):"href"===e?Fe(t):(t.match(M)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(i,s);"string"==typeof u&&(E.test(u)||C.test(u))&&(e[l]=r.cloneElement(X(u.trim()),{key:n}))}else"style"!==t&&(e[o[t]||t]=!0);return e}),{}):void 0}const K=[],J={},ae={blockQuote:{i:ke(g),l:je.HIGH,_:(e,t,n)=>({content:t(e[0].replace(p,""),n)}),p:(e,t,n)=>Z("blockquote",{key:n.g},t(e.content,n))},breakLine:{i:xe(f),l:je.HIGH,_:Oe,p:(e,t,n)=>Z("br",{key:n.g})},breakThematic:{i:ke(d),l:je.HIGH,_:Oe,p:(e,t,n)=>Z("hr",{key:n.g})},codeBlock:{i:ke(m),l:je.MAX,_:e=>({content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}),p:(e,t,n)=>Z("pre",{key:n.g},Z("code",{className:e.lang?`lang-${e.lang}`:""},e.content))},codeFenced:{i:ke(h),l:je.MAX,_:e=>({content:e[3],lang:e[2]||void 0,type:"codeBlock"})},codeInline:{i:be(y),l:je.LOW,_:e=>({content:e[2]}),p:(e,t,n)=>Z("code",{key:n.g},e.content)},footnote:{i:ke(k),l:je.MAX,_:e=>(K.push({footnote:e[2],identifier:e[1]}),{}),p:Ce},footnoteReference:{i:ve(x),l:je.HIGH,_:e=>({content:e[1],target:`#${t.slugify(e[1])}`}),p:(e,t,n)=>Z("a",{key:n.g,href:Fe(e.target)},Z("sup",{key:n.g},e.content))},gfmTask:{i:ve(F),l:je.HIGH,_:e=>({completed:"x"===e[1].toLowerCase()}),p:(e,t,n)=>Z("input",{checked:e.completed,key:n.g,readOnly:!0,type:"checkbox"})},heading:{i:ke(A),l:je.HIGH,_:(e,n,r)=>({content:_e(n,e[2],r),id:t.slugify(e[2]),level:e[1].length}),p:(e,t,n)=>(e.tag=`h${e.level}`,Z(e.tag,{id:e.id,key:n.g},t(e.content,n)))},headingSetext:{i:ke(_),l:je.MAX,_:(e,t,n)=>({content:_e(t,e[1],n),level:"="===e[2]?1:2,type:"heading"})},htmlComment:{i:xe(S),l:je.HIGH,_:()=>({}),p:Ce},image:{i:be(ce),l:je.HIGH,_:e=>({alt:e[1],target:Ae(e[2]),title:e[3]}),p:(e,t,n)=>Z("img",{key:n.g,alt:e.alt||void 0,title:e.title||void 0,src:Fe(e.target)})},link:{i:ve(ue),l:je.LOW,_:(e,t,n)=>({content:Ee(t,e[1],n),target:Ae(e[2]),title:e[3]}),p:(e,t,n)=>Z("a",{key:n.g,href:Fe(e.target),title:e.title},t(e.content,n))},linkAngleBraceStyleDetector:{i:ve(H),l:je.MAX,_:e=>({content:[{content:e[1],type:"text"}],target:e[1],type:"link"})},linkBareUrlDetector:{i:(e,t)=>t.m?null:ve(L)(e,t),l:je.MAX,_:e=>({content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"})},linkMailtoDetector:{i:ve(j),l:je.MAX,_(e){let t=e[1],n=e[1];return u.test(n)||(n="mailto:"+n),{content:[{content:t.replace("mailto:",""),type:"text"}],target:n,type:"link"}}},list:{i(e,t,n){const r=P.exec(n);return!r||!t.h&&t.o?null:se.exec(e=r[1]+e)},l:je.HIGH,_(e,t,n){const r=e[2],a=r.length>1,o=a?+r:void 0,i=e[0].replace(c,"\n").match(ie);let s=!1;return{items:i.map((function(e,r){const a=oe.exec(e)[0].length,o=new RegExp("^ {1,"+a+"}","gm"),l=e.replace(o,"").replace(oe,""),u=r===i.length-1,c=-1!==l.indexOf("\n\n")||u&&s;s=c;const g=n.o,p=n.h;let f;n.h=!0,c?(n.o=!1,f=l.replace(I,"\n\n")):(n.o=!0,f=l.replace(I,""));const d=t(f,n);return n.o=g,n.h=p,d})),ordered:a,start:o}},p:(e,t,n)=>Z(e.ordered?"ol":"ul",{key:n.g,start:e.start},e.items.map((function(e,r){return Z("li",{key:r},t(e,n))})))},newlineCoalescer:{i:ke(v),l:je.LOW,_:Oe,p:()=>"\n"},paragraph:{i:we,l:je.LOW,_:Se,p:(e,t,n)=>Z("p",{key:n.g},t(e.content,n))},ref:{i:ve(R),l:je.MAX,_:e=>(J[e[1]]={target:e[2],title:e[4]},{}),p:Ce},refImage:{i:be(N),l:je.MAX,_:e=>({alt:e[1]||void 0,ref:e[2]}),p:(e,t,n)=>Z("img",{key:n.g,alt:e.alt,src:Fe(J[e.ref].target),title:J[e.ref].title})},refLink:{i:ve(D),l:je.MAX,_:(e,t,n)=>({content:t(e[1],n),fallbackContent:t(e[0].replace(G,"\\$1"),n),ref:e[2]}),p:(e,t,n)=>J[e.ref]?Z("a",{key:n.g,href:Fe(J[e.ref].target),title:J[e.ref].title},t(e.content,n)):Z("span",{key:n.g},t(e.fallbackContent,n))},table:{i:ke(T),l:je.HIGH,_:me,p:(e,t,n)=>Z("table",{key:n.g},Z("thead",null,Z("tr",null,e.header.map((function(r,a){return Z("th",{key:a,style:ye(e,a)},t(r,n))})))),Z("tbody",null,e.cells.map((function(r,a){return Z("tr",{key:a},r.map((function(r,a){return Z("td",{key:a,style:ye(e,a)},t(r,n))})))}))))},tableSeparator:{i:function(e,t){return t.t?U.exec(e):null},l:je.HIGH,_:function(){return{type:"tableSeparator"}},p:()=>" | "},text:{i:xe(te),l:je.MIN,_:e=>({content:e[0].replace($,((e,n)=>t.namedCodesToUnicode[n]?t.namedCodesToUnicode[n]:e))}),p:e=>e.content},textBolded:{i:be(V),l:je.MED,_:(e,t,n)=>({content:t(e[2],n)}),p:(e,t,n)=>Z("strong",{key:n.g},t(e.content,n))},textEmphasized:{i:be(Y),l:je.LOW,_:(e,t,n)=>({content:t(e[2],n)}),p:(e,t,n)=>Z("em",{key:n.g},t(e.content,n))},textEscaped:{i:be(ee),l:je.HIGH,_:e=>({content:e[1],type:"text"})},textStrikethroughed:{i:be(Q),l:je.LOW,_:Se,p:(e,t,n)=>Z("del",{key:n.g},t(e.content,n))}};!0!==t.disableParsingRawHTML&&(ae.htmlBlock={i:xe(E),l:je.HIGH,_(e,t,n){const[,r]=e[3].match(re),a=new RegExp(`^${r}`,"gm"),o=e[3].replace(a,""),i=(l=o,pe.some((e=>e.test(l)))?$e:_e);var l;const u=e[1].toLowerCase(),c=-1!==s.indexOf(u);n.m=n.m||"a"===u;const g=c?e[3]:i(t,o,n);return n.m=!1,{attrs:q(e[2]),content:g,noInnerParse:c,tag:c?u:e[1]}},p:(e,t,n)=>Z(e.tag,a({key:n.g},e.attrs),e.noInnerParse?e.content:t(e.content,n))},ae.htmlSelfClosing={i:xe(C),l:je.HIGH,_:e=>({attrs:q(e[2]||""),tag:e[1]}),p:(e,t,n)=>Z(e.tag,a({},e.attrs,{key:n.g}))});const le=function(e){let t=Object.keys(e);function n(r,a){let o=[],i="";for(;r;){let s=0;for(;s<t.length;){const l=t[s],u=e[l],c=u.i(r,a,i);if(c){const e=c[0];r=r.substring(e.length);const t=u._(c,n,a);null==t.type&&(t.type=l),o.push(t),i=e;break}s++}}return o}return t.sort((function(t,n){let r=e[t].l,a=e[n].l;return r!==a?r-a:t<n?-1:1})),function(e,t){return n(function(e){return e.replace(b,"\n").replace(w,"").replace(W,"    ")}(e),t)}}(ae),ge=(de=function(e){return function(t,n,r){return e[t.type].p(t,n,r)}}(ae),function e(t,n={}){if(Array.isArray(t)){const r=n.g,a=[];let o=!1;for(let i=0;i<t.length;i++){n.g=i;const r=e(t[i],n),s="string"==typeof r;s&&o?a[a.length-1]+=r:null!==r&&a.push(r),o=s}return n.g=r,a}return de(t,e,n)});var de;const he=X(e);return K.length?Z("div",null,he,Z("footer",{key:"footer"},K.map((function(e){return Z("div",{id:t.slugify(e.identifier),key:e.identifier},e.identifier,ge(le(e.footnote,{o:!0})))})))):he}!function(e){e[e.MAX=0]="MAX",e[e.HIGH=1]="HIGH",e[e.MED=2]="MED",e[e.LOW=3]="LOW",e[e.MIN=4]="MIN"}(je||(je={}))},7913:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o=(a=n(7294))&&a.__esModule?a:{default:a},i=n(2199),s=n(1587),l=n(7215);function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={};function g(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(a?"%"+a:"")]=!0}}var p=o.default.forwardRef((function(e,t){var n,a=e.legacyBehavior,p=void 0===a?!0!==Boolean(!1):a,f=e.href,d=e.as,h=e.children,m=e.prefetch,y=e.passHref,v=e.replace,b=e.shallow,k=e.scroll,x=e.locale,w=e.onClick,F=e.onMouseEnter,A=u(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);n=h,p&&"string"===typeof n&&(n=o.default.createElement("a",null,n));var _,E=!1!==m,$=s.useRouter(),S=o.default.useMemo((function(){var e=i.resolveHref($,f,!0),t=r(e,2),n=t[0],a=t[1];return{href:n,as:d?i.resolveHref($,d):a||n}}),[$,f,d]),O=S.href,C=S.as,M=o.default.useRef(O),L=o.default.useRef(C);p&&(_=o.default.Children.only(n));var j=p?_&&"object"===typeof _&&_.ref:t,H=l.useIntersection({rootMargin:"200px"}),I=r(H,3),P=I[0],z=I[1],T=I[2],R=o.default.useCallback((function(e){L.current===C&&M.current===O||(T(),L.current=C,M.current=O),P(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[C,j,O,T,P]);o.default.useEffect((function(){var e=z&&E&&i.isLocalURL(O),t="undefined"!==typeof x?x:$&&$.locale,n=c[O+"%"+C+(t?"%"+t:"")];e&&!n&&g($,O,C,{locale:t})}),[C,O,z,x,E,$]);var N={ref:R,onClick:function(e){p||"function"!==typeof w||w(e),p&&_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,s,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),t[a?"replace":"push"](n,r,{shallow:o,locale:l,scroll:s}))}(e,$,O,C,v,b,k,x)},onMouseEnter:function(e){p||"function"!==typeof F||F(e),p&&_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),i.isLocalURL(O)&&g($,O,C,{priority:!0})}};if(!p||y||"a"===_.type&&!("href"in _.props)){var D="undefined"!==typeof x?x:$&&$.locale,G=$&&$.isLocaleDomain&&i.getDomainLocale(C,D,$&&$.locales,$&&$.domainLocales);N.href=G||i.addBasePath(i.addLocale(C,D,$&&$.defaultLocale))}return p?o.default.cloneElement(_,N):o.default.createElement("a",Object.assign({},A,N),n)}));t.default=p,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},7215:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,u=e.disabled||!i,c=a.useRef(),g=a.useState(!1),p=r(g,2),f=p[0],d=p[1],h=a.useState(t?t.current:null),m=r(h,2),y=m[0],v=m[1],b=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),u||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=s.get(r):(t=s.get(n),l.push(n));if(t)return t;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(n,t={id:n,observer:o,elements:a}),t}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),s.delete(a);var t=l.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&d(e)}),{root:y,rootMargin:n}))}),[u,y,n,f]),k=a.useCallback((function(){d(!1)}),[]);return a.useEffect((function(){if(!i&&!f){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),a.useEffect((function(){t&&v(t.current)}),[t]),[b,f,k]};var a=n(7294),o=n(8065),i="undefined"!==typeof IntersectionObserver;var s=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},5776:function(){},1664:function(e,t,n){e.exports=n(7913)},1163:function(e,t,n){e.exports=n(1587)},5660:function(e,t,n){var r=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,r={},a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof o?new o(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var r,o;switch(n=n||{},a.util.type(t)){case"Object":if(o=a.util.objId(t),n[o])return n[o];for(var i in r={},n[o]=r,t)t.hasOwnProperty(i)&&(r[i]=e(t[i],n));return r;case"Array":return o=a.util.objId(t),n[o]?n[o]:(r=[],n[o]=r,t.forEach((function(t,a){r[a]=e(t,n)})),r);default:return t}},getLanguage:function(e){for(;e;){var n=t.exec(e.className);if(n)return n[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,n){e.className=e.className.replace(RegExp(t,"gi"),""),e.classList.add("language-"+n)},currentScript:function(){if("undefined"===typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var r="no-"+t;e;){var a=e.classList;if(a.contains(t))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!n}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var o=(r=r||a.languages)[e],i={};for(var s in o)if(o.hasOwnProperty(s)){if(s==t)for(var l in n)n.hasOwnProperty(l)&&(i[l]=n[l]);n.hasOwnProperty(s)||(i[s]=o[s])}var u=r[e];return r[e]=i,a.languages.DFS(a.languages,(function(t,n){n===u&&t!=e&&(this[t]=i)})),i},DFS:function e(t,n,r,o){o=o||{};var i=a.util.objId;for(var s in t)if(t.hasOwnProperty(s)){n.call(t,s,t[s],r||s);var l=t[s],u=a.util.type(l);"Object"!==u||o[i(l)]?"Array"!==u||o[i(l)]||(o[i(l)]=!0,e(l,n,s,o)):(o[i(l)]=!0,e(l,n,null,o))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var o,i=0;o=r.elements[i++];)a.highlightElement(o,!0===t,r.callback)},highlightElement:function(t,n,r){var o=a.util.getLanguage(t),i=a.languages[o];a.util.setLanguage(t,o);var s=t.parentElement;s&&"pre"===s.nodeName.toLowerCase()&&a.util.setLanguage(s,o);var l={element:t,language:o,grammar:i,code:t.textContent};function u(e){l.highlightedCode=e,a.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,a.hooks.run("after-highlight",l),a.hooks.run("complete",l),r&&r.call(l.element)}if(a.hooks.run("before-sanity-check",l),(s=l.element.parentElement)&&"pre"===s.nodeName.toLowerCase()&&!s.hasAttribute("tabindex")&&s.setAttribute("tabindex","0"),!l.code)return a.hooks.run("complete",l),void(r&&r.call(l.element));if(a.hooks.run("before-highlight",l),l.grammar)if(n&&e.Worker){var c=new Worker(a.filename);c.onmessage=function(e){u(e.data)},c.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else u(a.highlight(l.code,l.grammar,l.language));else u(a.util.encode(l.code))},highlight:function(e,t,n){var r={code:e,grammar:t,language:n};if(a.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),o.stringify(a.util.encode(r.tokens),r.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var r in n)t[r]=n[r];delete t.rest}var a=new l;return u(a,a.head,e),s(e,a,t,a.head,0),function(e){var t=[],n=e.head.next;for(;n!==e.tail;)t.push(n.value),n=n.next;return t}(a)},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,o=0;r=n[o++];)r(t)}},Token:o};function o(e,t,n,r){this.type=e,this.content=t,this.alias=n,this.length=0|(r||"").length}function i(e,t,n,r){e.lastIndex=t;var a=e.exec(n);if(a&&r&&a[1]){var o=a[1].length;a.index+=o,a[0]=a[0].slice(o)}return a}function s(e,t,n,r,l,g){for(var p in n)if(n.hasOwnProperty(p)&&n[p]){var f=n[p];f=Array.isArray(f)?f:[f];for(var d=0;d<f.length;++d){if(g&&g.cause==p+","+d)return;var h=f[d],m=h.inside,y=!!h.lookbehind,v=!!h.greedy,b=h.alias;if(v&&!h.pattern.global){var k=h.pattern.toString().match(/[imsuy]*$/)[0];h.pattern=RegExp(h.pattern.source,k+"g")}for(var x=h.pattern||h,w=r.next,F=l;w!==t.tail&&!(g&&F>=g.reach);F+=w.value.length,w=w.next){var A=w.value;if(t.length>e.length)return;if(!(A instanceof o)){var _,E=1;if(v){if(!(_=i(x,F,e,y))||_.index>=e.length)break;var $=_.index,S=_.index+_[0].length,O=F;for(O+=w.value.length;$>=O;)O+=(w=w.next).value.length;if(F=O-=w.value.length,w.value instanceof o)continue;for(var C=w;C!==t.tail&&(O<S||"string"===typeof C.value);C=C.next)E++,O+=C.value.length;E--,A=e.slice(F,O),_.index-=F}else if(!(_=i(x,0,A,y)))continue;$=_.index;var M=_[0],L=A.slice(0,$),j=A.slice($+M.length),H=F+A.length;g&&H>g.reach&&(g.reach=H);var I=w.prev;if(L&&(I=u(t,I,L),F+=L.length),c(t,I,E),w=u(t,I,new o(p,m?a.tokenize(M,m):M,b,M)),j&&u(t,w,j),E>1){var P={cause:p+","+d,reach:H};s(e,t,n,w.prev,F,P),g&&P.reach>g.reach&&(g.reach=P.reach)}}}}}}function l(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function u(e,t,n){var r=t.next,a={value:n,prev:t,next:r};return t.next=a,r.prev=a,e.length++,a}function c(e,t,n){for(var r=t.next,a=0;a<n&&r!==e.tail;a++)r=r.next;t.next=r,r.prev=t,e.length-=a}if(e.Prism=a,o.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var r="";return t.forEach((function(t){r+=e(t,n)})),r}var o={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},i=t.alias;i&&(Array.isArray(i)?Array.prototype.push.apply(o.classes,i):o.classes.push(i)),a.hooks.run("wrap",o);var s="";for(var l in o.attributes)s+=" "+l+'="'+(o.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+s+">"+o.content+"</"+o.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),r=n.language,o=n.code,i=n.immediateClose;e.postMessage(a.highlight(o,a.languages[r],r)),i&&e.close()}),!1),a):a;var g=a.util.currentScript();function p(){a.manual||a.highlightAll()}if(g&&(a.filename=g.src,g.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var f=document.readyState;"loading"===f||"interactive"===f&&g&&g.defer?document.addEventListener("DOMContentLoaded",p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return a}("undefined"!==typeof window?window:"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=r),"undefined"!==typeof n.g&&(n.g.Prism=r),r.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},r.languages.markup.tag.inside["attr-value"].inside.entity=r.languages.markup.entity,r.languages.markup.doctype.inside["internal-subset"].inside=r.languages.markup,r.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(r.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:r.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};a["language-"+t]={pattern:/[\s\S]+/,inside:r.languages[t]};var o={};o[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:a},r.languages.insertBefore("markup","cdata",o)}}),Object.defineProperty(r.languages.markup.tag,"addAttribute",{value:function(e,t){r.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:r.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),r.languages.html=r.languages.markup,r.languages.mathml=r.languages.markup,r.languages.svg=r.languages.markup,r.languages.xml=r.languages.extend("markup",{}),r.languages.ssml=r.languages.xml,r.languages.atom=r.languages.xml,r.languages.rss=r.languages.xml,function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))}(r),r.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},r.languages.javascript=r.languages.extend("clike",{"class-name":[r.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),r.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,r.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:r.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:r.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:r.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:r.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:r.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),r.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:r.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),r.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),r.languages.markup&&(r.languages.markup.tag.addInlined("script","javascript"),r.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),r.languages.js=r.languages.javascript,function(){if("undefined"!==typeof r&&"undefined"!==typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},t="data-src-status",n="loading",a="loaded",o='pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])';r.hooks.add("before-highlightall",(function(e){e.selector+=", "+o})),r.hooks.add("before-sanity-check",(function(i){var s=i.element;if(s.matches(o)){i.code="",s.setAttribute(t,n);var l=s.appendChild(document.createElement("CODE"));l.textContent="Loading\u2026";var u=s.getAttribute("data-src"),c=i.language;if("none"===c){var g=(/\.(\w+)$/.exec(u)||[,"none"])[1];c=e[g]||g}r.util.setLanguage(l,c),r.util.setLanguage(s,c);var p=r.plugins.autoloader;p&&p.loadLanguages(c),function(e,t,n){var r=new XMLHttpRequest;r.open("GET",e,!0),r.onreadystatechange=function(){4==r.readyState&&(r.status<400&&r.responseText?t(r.responseText):r.status>=400?n("\u2716 Error "+r.status+" while fetching file: "+r.statusText):n("\u2716 Error: File does not exist or is empty"))},r.send(null)}(u,(function(e){s.setAttribute(t,a);var n=function(e){var t=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e||"");if(t){var n=Number(t[1]),r=t[2],a=t[3];return r?a?[n,Number(a)]:[n,void 0]:[n,n]}}(s.getAttribute("data-range"));if(n){var o=e.split(/\r\n?|\n/g),i=n[0],u=null==n[1]?o.length:n[1];i<0&&(i+=o.length),i=Math.max(0,Math.min(i-1,o.length)),u<0&&(u+=o.length),u=Math.max(0,Math.min(u,o.length)),e=o.slice(i,u).join("\n"),s.hasAttribute("data-start")||s.setAttribute("data-start",String(i+1))}l.textContent=e,r.highlightElement(l)}),(function(e){s.setAttribute(t,"failed"),l.textContent=e}))}})),r.plugins.fileHighlight={highlight:function(e){for(var t,n=(e||document).querySelectorAll(o),a=0;t=n[a++];)r.highlightElement(t)}};var i=!1;r.fileHighlight=function(){i||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),i=!0),r.plugins.fileHighlight.highlight.apply(this,arguments)}}}()},4730:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})}}]);