(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2719],{61200:function(e,t,r){"use strict";var n=r(90275),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,a,c,u,i,l,s,f,d=!1;t||(t={}),c=t.debug||!1;try{if(i=n(),l=document.createRange(),s=document.getSelection(),(f=document.createElement("span")).textContent=e,f.ariaHidden="true",f.style.all="unset",f.style.position="fixed",f.style.top=0,f.style.clip="rect(0, 0, 0, 0)",f.style.whiteSpace="pre",f.style.webkitUserSelect="text",f.style.MozUserSelect="text",f.style.msUserSelect="text",f.style.userSelect="text",f.addEventListener("copy",function(r){if(r.stopPropagation(),t.format){if(r.preventDefault(),void 0===r.clipboardData){c&&console.warn("unable to use e.clipboardData"),c&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var n=o[t.format]||o.default;window.clipboardData.setData(n,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e)}t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))}),document.body.appendChild(f),l.selectNodeContents(f),s.addRange(l),!document.execCommand("copy"))throw Error("copy command was unsuccessful");d=!0}catch(n){c&&console.error("unable to copy using execCommand: ",n),c&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(n){c&&console.error("unable to copy using clipboardData: ",n),c&&console.error("falling back to prompt"),r="message"in t?t.message:"Copy to clipboard: #{key}, Enter",a=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",u=r.replace(/#{\s*key\s*}/g,a),window.prompt(u,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(l):s.removeAllRanges()),f&&document.body.removeChild(f),i()}return d}},28242:function(e,t,r){"use strict";r.d(t,{F:function(){return l},f:function(){return s}});var n=r(3546);let o=["light","dark"],a="(prefers-color-scheme: dark)",c="undefined"==typeof window,u=(0,n.createContext)(void 0),i={setTheme:e=>{},themes:[]},l=()=>{var e;return null!==(e=(0,n.useContext)(u))&&void 0!==e?e:i},s=e=>(0,n.useContext)(u)?n.createElement(n.Fragment,null,e.children):n.createElement(d,e),f=["light","dark"],d=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:r=!0,enableColorScheme:c=!0,storageKey:i="theme",themes:l=f,defaultTheme:s=r?"system":"light",attribute:d="data-theme",value:y,children:h,nonce:g})=>{let[w,Z]=(0,n.useState)(()=>p(i,s)),[j,S]=(0,n.useState)(()=>p(i)),E=y?Object.values(y):l,A=(0,n.useCallback)(e=>{let n=e;if(!n)return;"system"===e&&r&&(n=b());let a=y?y[n]:n,u=t?v():null,i=document.documentElement;if("class"===d?(i.classList.remove(...E),a&&i.classList.add(a)):a?i.setAttribute(d,a):i.removeAttribute(d),c){let e=o.includes(s)?s:null,t=o.includes(n)?n:e;i.style.colorScheme=t}null==u||u()},[]),C=(0,n.useCallback)(e=>{Z(e);try{localStorage.setItem(i,e)}catch(e){}},[e]),x=(0,n.useCallback)(t=>{let n=b(t);S(n),"system"===w&&r&&!e&&A("system")},[w,e]);(0,n.useEffect)(()=>{let e=window.matchMedia(a);return e.addListener(x),x(e),()=>e.removeListener(x)},[x]),(0,n.useEffect)(()=>{let e=e=>{e.key===i&&C(e.newValue||s)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[C]),(0,n.useEffect)(()=>{A(null!=e?e:w)},[e,w]);let T=(0,n.useMemo)(()=>({theme:w,setTheme:C,forcedTheme:e,resolvedTheme:"system"===w?j:w,themes:r?[...l,"system"]:l,systemTheme:r?j:void 0}),[w,C,e,j,r,l]);return n.createElement(u.Provider,{value:T},n.createElement(m,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:r,enableColorScheme:c,storageKey:i,themes:l,defaultTheme:s,attribute:d,value:y,children:h,attrs:E,nonce:g}),h)},m=(0,n.memo)(({forcedTheme:e,storageKey:t,attribute:r,enableSystem:c,enableColorScheme:u,defaultTheme:i,value:l,attrs:s,nonce:f})=>{let d="system"===i,m="class"===r?`var d=document.documentElement,c=d.classList;c.remove(${s.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${r}',s='setAttribute';`,p=u?o.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=(e,t=!1,n=!0)=>{let a=l?l[e]:e,c=t?e+"|| ''":`'${a}'`,i="";return u&&n&&!t&&o.includes(e)&&(i+=`d.style.colorScheme = '${e}';`),"class"===r?i+=t||a?`c.add(${c})`:"null":a&&(i+=`d[s](n,${c})`),i},b=e?`!function(){${m}${v(e)}}()`:c?`!function(){try{${m}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${d})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${l?`var x=${JSON.stringify(l)};`:""}${v(l?"x[e]":"e",!0)}}${d?"":"else{"+v(i,!1,!1)+"}"}${p}}catch(e){}}()`:`!function(){try{${m}var e=localStorage.getItem('${t}');if(e){${l?`var x=${JSON.stringify(l)};`:""}${v(l?"x[e]":"e",!0)}}else{${v(i,!1,!1)};}${p}}catch(t){}}();`;return n.createElement("script",{nonce:f,dangerouslySetInnerHTML:{__html:b}})},()=>!0),p=(e,t)=>{let r;if(!c){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},v=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},b=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},70652:function(e,t,r){e.exports=r(54007)},90275:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},73037:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,{Z:function(){return n}})},1333:function(e,t,r){"use strict";r.d(t,{Pc:function(){return Z},ck:function(){return D},fC:function(){return I}});var n=r(65122),o=r(3546),a=r(65727),c=r(85656),u=r(79869),i=r(47091),l=r(29434),s=r(72205),f=r(17957),d=r(27250),m=r(57541);let p="rovingFocusGroup.onEntryFocus",v={bubbles:!1,cancelable:!0},b="RovingFocusGroup",[y,h,g]=(0,c.B)(b),[w,Z]=(0,i.b)(b,[g]),[j,S]=w(b),E=(0,o.forwardRef)((e,t)=>(0,o.createElement)(y.Provider,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(y.Slot,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(A,(0,n.Z)({},e,{ref:t}))))),A=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:r,orientation:c,loop:i=!1,dir:l,currentTabStopId:b,defaultCurrentTabStopId:y,onCurrentTabStopIdChange:g,onEntryFocus:w,...Z}=e,S=(0,o.useRef)(null),E=(0,u.e)(t,S),A=(0,m.gm)(l),[C=null,x]=(0,d.T)({prop:b,defaultProp:y,onChange:g}),[I,D]=(0,o.useState)(!1),$=(0,f.W)(w),O=h(r),k=(0,o.useRef)(!1),[R,F]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=S.current;if(e)return e.addEventListener(p,$),()=>e.removeEventListener(p,$)},[$]),(0,o.createElement)(j,{scope:r,orientation:c,dir:A,loop:i,currentTabStopId:C,onItemFocus:(0,o.useCallback)(e=>x(e),[x]),onItemShiftTab:(0,o.useCallback)(()=>D(!0),[]),onFocusableItemAdd:(0,o.useCallback)(()=>F(e=>e+1),[]),onFocusableItemRemove:(0,o.useCallback)(()=>F(e=>e-1),[])},(0,o.createElement)(s.WV.div,(0,n.Z)({tabIndex:I||0===R?-1:0,"data-orientation":c},Z,{ref:E,style:{outline:"none",...e.style},onMouseDown:(0,a.M)(e.onMouseDown,()=>{k.current=!0}),onFocus:(0,a.M)(e.onFocus,e=>{let t=!k.current;if(e.target===e.currentTarget&&t&&!I){let t=new CustomEvent(p,v);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=O().filter(e=>e.focusable),t=e.find(e=>e.active),r=e.find(e=>e.id===C),n=[t,r,...e].filter(Boolean),o=n.map(e=>e.ref.current);T(o)}}k.current=!1}),onBlur:(0,a.M)(e.onBlur,()=>D(!1))})))}),C=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:r,focusable:c=!0,active:u=!1,tabStopId:i,...f}=e,d=(0,l.M)(),m=i||d,p=S("RovingFocusGroupItem",r),v=p.currentTabStopId===m,b=h(r),{onFocusableItemAdd:g,onFocusableItemRemove:w}=p;return(0,o.useEffect)(()=>{if(c)return g(),()=>w()},[c,g,w]),(0,o.createElement)(y.ItemSlot,{scope:r,id:m,focusable:c,active:u},(0,o.createElement)(s.WV.span,(0,n.Z)({tabIndex:v?0:-1,"data-orientation":p.orientation},f,{ref:t,onMouseDown:(0,a.M)(e.onMouseDown,e=>{c?p.onItemFocus(m):e.preventDefault()}),onFocus:(0,a.M)(e.onFocus,()=>p.onItemFocus(m)),onKeyDown:(0,a.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){p.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,r){var n;let o=(n=e.key,"rtl"!==r?n:"ArrowLeft"===n?"ArrowRight":"ArrowRight"===n?"ArrowLeft":n);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return x[o]}(e,p.orientation,p.dir);if(void 0!==t){e.preventDefault();let o=b().filter(e=>e.focusable),a=o.map(e=>e.ref.current);if("last"===t)a.reverse();else if("prev"===t||"next"===t){var r,n;"prev"===t&&a.reverse();let o=a.indexOf(e.currentTarget);a=p.loop?(r=a,n=o+1,r.map((e,t)=>r[(n+t)%r.length])):a.slice(o+1)}setTimeout(()=>T(a))}})})))}),x={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function T(e){let t=document.activeElement;for(let r of e)if(r===t||(r.focus(),document.activeElement!==t))return}let I=E,D=C},74225:function(e,t,r){"use strict";r.d(t,{f:function(){return s}});var n=r(65122),o=r(3546),a=r(72205);let c="horizontal",u=["horizontal","vertical"],i=(0,o.forwardRef)((e,t)=>{let{decorative:r,orientation:u=c,...i}=e,s=l(u)?u:c;return(0,o.createElement)(a.WV.div,(0,n.Z)({"data-orientation":s},r?{role:"none"}:{"aria-orientation":"vertical"===s?s:void 0,role:"separator"},i,{ref:t}))});function l(e){return u.includes(e)}i.propTypes={orientation(e,t,r){let n=e[t],o=String(n);return n&&!l(n)?Error(`Invalid prop \`orientation\` of value \`${o}\` supplied to \`${r}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${c}\`.`):null}};let s=i},26581:function(e,t,r){"use strict";var n=r(74913),o=r(77725),a=Object.prototype.hasOwnProperty;t.Z=function(e,t,r){var c=e[t];a.call(e,t)&&(0,o.Z)(c,r)&&(void 0!==r||t in e)||(0,n.Z)(e,t,r)}},74913:function(e,t,r){"use strict";var n=r(27015);t.Z=function(e,t,r){"__proto__"==t&&n.Z?(0,n.Z)(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}},1282:function(e,t){"use strict";t.Z=function(e,t,r){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(r=r>o?o:r)<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var a=Array(o);++n<o;)a[n]=e[n+t];return a}},27015:function(e,t,r){"use strict";var n=r(47404),o=function(){try{var e=(0,n.Z)(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();t.Z=o},43285:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n,o,a=r(68085),c=r(7600),u=r(97589),i=r(38813),l=c.Z?c.Z.isConcatSpreadable:void 0,s=function(e){return(0,i.Z)(e)||(0,u.Z)(e)||!!(l&&e&&e[l])},f=function e(t,r,n,o,c){var u=-1,i=t.length;for(n||(n=s),c||(c=[]);++u<i;){var l=t[u];r>0&&n(l)?r>1?e(l,r-1,n,o,c):(0,a.Z)(c,l):o||(c[c.length]=l)}return c},d=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)},m=Math.max,p=r(27015),v=r(11403),b=p.Z?function(e,t){return(0,p.Z)(e,"toString",{configurable:!0,enumerable:!1,value:function(){return t},writable:!0})}:v.Z,y=Date.now,h=(n=0,o=0,function(){var e=y(),t=16-(e-o);if(o=e,t>0){if(++n>=800)return arguments[0]}else n=0;return b.apply(void 0,arguments)}),g=function(e){var t;return h((t=m((t=void 0,e.length-1),0),function(){for(var r,n=arguments,o=-1,a=m(n.length-t,0),c=Array(a);++o<a;)c[o]=n[t+o];o=-1;for(var u=Array(t+1);++o<t;)u[o]=n[o];return u[t]=(null==(r=c)?0:r.length)?f(r,1):[],d(e,this,u)}),e+"")}},9841:function(e,t,r){"use strict";var n=r(95973),o=r(9111),a=r(82149);t.Z=function(e){return(0,n.Z)(e,a.Z,o.Z)}},8621:function(e,t,r){"use strict";var n=(0,r(34659).Z)(Object.getPrototypeOf,Object);t.Z=n},9111:function(e,t,r){"use strict";var n=r(68085),o=r(8621),a=r(45270),c=r(25407),u=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)(0,n.Z)(t,(0,a.Z)(e)),e=(0,o.Z)(e);return t}:c.Z;t.Z=u},82149:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(30762),o=r(84639),a=r(36586),c=function(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t},u=Object.prototype.hasOwnProperty,i=function(e){if(!(0,o.Z)(e))return c(e);var t=(0,a.Z)(e),r=[];for(var n in e)"constructor"==n&&(t||!u.call(e,n))||r.push(n);return r},l=r(20568),s=function(e){return(0,l.Z)(e)?(0,n.Z)(e,!0):i(e)}},2899:function(e,t,r){"use strict";r.d(t,{Z:function(){return em}});var n=r(64143),o=r(78172),a=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e},c=r(26581),u=r(74913),i=function(e,t,r,n){var o=!r;r||(r={});for(var a=-1,i=t.length;++a<i;){var l=t[a],s=n?n(r[l],e[l],l,r,e):void 0;void 0===s&&(s=e[l]),o?(0,u.Z)(r,l,s):(0,c.Z)(r,l,s)}return r},l=r(70014),s=r(82149),f=r(48717),d="object"==typeof exports&&exports&&!exports.nodeType&&exports,m=d&&"object"==typeof module&&module&&!module.nodeType&&module,p=m&&m.exports===d?f.Z.Buffer:void 0,v=p?p.allocUnsafe:void 0,b=function(e,t){if(t)return e.slice();var r=e.length,n=v?v(r):new e.constructor(r);return e.copy(n),n},y=function(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t},h=r(45270),g=r(9111),w=r(7555),Z=r(9841),j=r(64134),S=Object.prototype.hasOwnProperty,E=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&S.call(e,"index")&&(r.index=e.index,r.input=e.input),r},A=r(90136),C=function(e){var t=new e.constructor(e.byteLength);return new A.Z(t).set(new A.Z(e)),t},x=function(e,t){var r=t?C(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)},T=/\w*$/,I=function(e){var t=new e.constructor(e.source,T.exec(e));return t.lastIndex=e.lastIndex,t},D=r(7600),$=D.Z?D.Z.prototype:void 0,O=$?$.valueOf:void 0,k=function(e,t){var r=t?C(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)},R=function(e,t,r){var n=e.constructor;switch(t){case"[object ArrayBuffer]":return C(e);case"[object Boolean]":case"[object Date]":return new n(+e);case"[object DataView]":return x(e,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return k(e,r);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(e);case"[object RegExp]":return I(e);case"[object Symbol]":return O?Object(O.call(e)):{}}},F=r(84639),M=Object.create,U=function(){function e(){}return function(t){if(!(0,F.Z)(t))return{};if(M)return M(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}(),_=r(8621),L=r(36586),P=r(38813),N=r(90328),B=r(96786),G=r(35270),z=r(20697),K=z.Z&&z.Z.isMap,V=K?(0,G.Z)(K):function(e){return(0,B.Z)(e)&&"[object Map]"==(0,j.Z)(e)},W=z.Z&&z.Z.isSet,H=W?(0,G.Z)(W):function(e){return(0,B.Z)(e)&&"[object Set]"==(0,j.Z)(e)},J="[object Arguments]",X="[object Function]",q="[object Object]",Q={};Q[J]=Q["[object Array]"]=Q["[object ArrayBuffer]"]=Q["[object DataView]"]=Q["[object Boolean]"]=Q["[object Date]"]=Q["[object Float32Array]"]=Q["[object Float64Array]"]=Q["[object Int8Array]"]=Q["[object Int16Array]"]=Q["[object Int32Array]"]=Q["[object Map]"]=Q["[object Number]"]=Q[q]=Q["[object RegExp]"]=Q["[object Set]"]=Q["[object String]"]=Q["[object Symbol]"]=Q["[object Uint8Array]"]=Q["[object Uint8ClampedArray]"]=Q["[object Uint16Array]"]=Q["[object Uint32Array]"]=!0,Q["[object Error]"]=Q[X]=Q["[object WeakMap]"]=!1;var Y=function e(t,r,n,u,f,d){var m,p=1&r,v=2&r,S=4&r;if(n&&(m=f?n(t,u,f,d):n(t)),void 0!==m)return m;if(!(0,F.Z)(t))return t;var A=(0,P.Z)(t);if(A){if(m=E(t),!p)return y(t,m)}else{var C,x,T,I,D=(0,j.Z)(t),$=D==X||"[object GeneratorFunction]"==D;if((0,N.Z)(t))return b(t,p);if(D==q||D==J||$&&!f){if(m=v||$?{}:"function"!=typeof t.constructor||(0,L.Z)(t)?{}:U((0,_.Z)(t)),!p)return v?(x=(C=m)&&i(t,(0,s.Z)(t),C),i(t,(0,g.Z)(t),x)):(I=(T=m)&&i(t,(0,l.Z)(t),T),i(t,(0,h.Z)(t),I))}else{if(!Q[D])return f?t:{};m=R(t,D,p)}}d||(d=new o.Z);var O=d.get(t);if(O)return O;d.set(t,m),H(t)?t.forEach(function(o){m.add(e(o,r,n,o,t,d))}):V(t)&&t.forEach(function(o,a){m.set(a,e(o,r,n,a,t,d))});var k=S?v?Z.Z:w.Z:v?s.Z:l.Z,M=A?void 0:k(t);return a(M||t,function(o,a){M&&(o=t[a=o]),(0,c.Z)(m,a,e(o,r,n,a,t,d))}),m},ee=r(81913),et=function(e){var t=null==e?0:e.length;return t?e[t-1]:void 0},er=r(30586),en=r(1282),eo=r(80143),ea=function(e,t){var r,n;return t=(0,ee.Z)(t,e),r=e,null==(e=(n=t).length<2?r:(0,er.Z)(r,(0,en.Z)(n,0,-1)))||delete e[eo.Z(et(t))]},ec=r(17996),eu=Object.prototype,ei=Function.prototype.toString,el=eu.hasOwnProperty,es=ei.call(Object),ef=function(e){if(!(0,B.Z)(e)||"[object Object]"!=(0,ec.Z)(e))return!1;var t=(0,_.Z)(e);if(null===t)return!0;var r=el.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&ei.call(r)==es},ed=function(e){return ef(e)?void 0:e},em=(0,r(43285).Z)(function(e,t){var r={};if(null==e)return r;var o=!1;t=(0,n.Z)(t,function(t){return t=(0,ee.Z)(t,e),o||(o=t.length>1),t}),i(e,(0,Z.Z)(e),r),o&&(r=Y(r,7,ed));for(var a=t.length;a--;)ea(r,t[a]);return r})}}]);