(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[899],{96964:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let r=n(21024),i=n(68533),o=i._(n(2265)),a=r._(n(54887)),l=r._(n(29232)),u=n(33655),s=n(6921),c=n(98143);n(7707);let d=n(67650),f=r._(n(85324)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,n,r,i,o){let a=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===a)return;e["data-loaded-src"]=a;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}})}function g(e){let[t,n]=o.version.split("."),r=parseInt(t,10),i=parseInt(n,10);return r>18||18===r&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let h=(0,o.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:i,height:a,width:l,decoding:u,className:s,style:c,fetchPriority:d,placeholder:f,loading:p,unoptimized:h,fill:y,onLoadRef:b,onLoadingCompleteRef:v,setBlurComplete:_,setShowAltText:w,onLoad:S,onError:P,...O}=e;return o.default.createElement("img",{...O,...g(d),loading:p,width:l,height:a,decoding:u,"data-nimg":y?"fill":"1",className:s,style:c,sizes:i,srcSet:r,src:n,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(P&&(e.src=e.src),e.complete&&m(e,f,b,v,_,h))},[n,f,b,v,_,P,h,t]),onLoad:e=>{let t=e.currentTarget;m(t,f,b,v,_,h)},onError:e=>{w(!0),"empty"!==f&&_(!0),P&&P(e)}})});function y(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...g(n.fetchPriority)};return t&&a.default.preload?(a.default.preload(n.src,r),null):o.default.createElement(l.default,null,o.default.createElement("link",{key:"__nimg-"+n.src+n.srcSet+n.sizes,rel:"preload",href:n.srcSet?void 0:n.src,...r}))}let b=(0,o.forwardRef)((e,t)=>{let n=(0,o.useContext)(d.RouterContext),r=(0,o.useContext)(c.ImageConfigContext),i=(0,o.useMemo)(()=>{let e=p||r||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:a,onLoadingComplete:l}=e,m=(0,o.useRef)(a);(0,o.useEffect)(()=>{m.current=a},[a]);let g=(0,o.useRef)(l);(0,o.useEffect)(()=>{g.current=l},[l]);let[b,v]=(0,o.useState)(!1),[_,w]=(0,o.useState)(!1),{props:S,meta:P}=(0,u.getImgProps)(e,{defaultLoader:f.default,imgConf:i,blurComplete:b,showAltText:_});return o.default.createElement(o.default.Fragment,null,o.default.createElement(h,{...S,unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:m,onLoadingCompleteRef:g,setBlurComplete:v,setShowAltText:w,ref:t}),P.priority?o.default.createElement(y,{isAppRouter:!n,imgAttributes:S}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},56948:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return o}});let r=n(21024),i=r._(n(2265)),o=i.default.createContext({})},28827:function(e,t){"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},33655:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),n(7707);let r=n(48932),i=n(6921);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var n;let l,u,s,{src:c,sizes:d,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:h,width:y,height:b,fill:v=!1,style:_,onLoad:w,onLoadingComplete:S,placeholder:P="empty",blurDataURL:O,fetchPriority:C,layout:j,objectFit:x,objectPosition:E,lazyBoundary:z,lazyRoot:I,...M}=e,{imgConf:k,showAltText:R,blurComplete:A,defaultLoader:T}=t,D=k||i.imageConfigDefault;if("allSizes"in D)l=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t);l={...D,allSizes:e,deviceSizes:t}}let U=M.loader||T;delete M.loader,delete M.srcSet;let L="__next_img_default"in U;if(L){if("custom"===l.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=U;U=t=>{let{config:n,...r}=t;return e(r)}}if(j){"fill"===j&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[j];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[j];t&&!d&&(d=t)}let N="",W=a(y),B=a(b);if("object"==typeof(n=c)&&(o(n)||void 0!==n.src)){let e=o(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(u=e.blurWidth,s=e.blurHeight,O=O||e.blurDataURL,N=e.src,!v){if(W||B){if(W&&!B){let t=W/e.width;B=Math.round(e.height*t)}else if(!W&&B){let t=B/e.height;W=Math.round(e.width*t)}}else W=e.width,B=e.height}}let F=!p&&("lazy"===m||void 0===m);(!(c="string"==typeof c?c:N)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,F=!1),l.unoptimized&&(f=!0),L&&c.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),p&&(C="high");let G=a(h),Z=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:x,objectPosition:E}:{},R?{}:{color:"transparent"},_),V=A||"empty"===P?null:"blur"===P?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:W,heightInt:B,blurWidth:u,blurHeight:s,blurDataURL:O||"",objectFit:Z.objectFit})+'")':'url("'+P+'")',H=V?{backgroundSize:Z.objectFit||"cover",backgroundPosition:Z.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},q=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:a,loader:l}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let o=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:o,kind:"x"}}(t,i,a),c=u.length-1;return{sizes:a||"w"!==s?a:"100vw",srcSet:u.map((e,r)=>l({config:t,src:n,quality:o,width:e})+" "+("w"===s?e:r+1)+s).join(", "),src:l({config:t,src:n,quality:o,width:u[c]})}}({config:l,src:c,unoptimized:f,width:W,quality:G,sizes:d,loader:U}),Y={...M,loading:F?"lazy":m,fetchPriority:C,width:W,height:B,decoding:"async",className:g,style:{...Z,...H},sizes:q.sizes,srcSet:q.srcSet,src:q.src},$={unoptimized:f,priority:p,placeholder:P,fill:v};return{props:Y,meta:$}}},29232:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return c},default:function(){return m}});let r=n(21024),i=n(68533),o=i._(n(2265)),a=r._(n(65184)),l=n(56948),u=n(43305),s=n(28827);function c(e){void 0===e&&(e=!1);let t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(7707);let f=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:n}=t;return e.reduce(d,[]).reverse().concat(c(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!a)&&n.has(e)?o=!1:(n.add(e),r[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:r})})}let m=function(e){let{children:t}=e,n=(0,o.useContext)(l.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},48932:function(e,t){"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:a}=e,l=r?40*r:t,u=i?40*i:n,s=l&&u?"viewBox='0 0 "+l+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},98143:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return a}});let r=n(21024),i=r._(n(2265)),o=n(6921),a=i.default.createContext(o.imageConfigDefault)},6921:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},62597:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return s},unstable_getImgProps:function(){return u}});let r=n(21024),i=n(33655),o=n(7707),a=n(96964),l=r._(n(85324)),u=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},s=a.Image},85324:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},65184:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let r=n(68533),i=r._(n(2265)),o=i.useLayoutEffect,a=i.useEffect;function l(e){let{headManager:t,reduceComponentsToState:n}=e;function r(){if(t&&t.mountedInstances){let r=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(r,e))}}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=r),()=>{t&&(t._pendingUpdate=r)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},7707:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},16691:function(e,t,n){e.exports=n(62597)},33018:function(e,t,n){"use strict";var r=n(61289);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,o,a){if(a!==r){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},74275:function(e,t,n){e.exports=n(33018)()},61289:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},62913:function(e,t,n){"use strict";var r=n(73043);t.Z=function(e,t,n){"__proto__"==t&&r.Z?(0,r.Z)(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}},73043:function(e,t,n){"use strict";var r=n(12805),i=function(){try{var e=(0,r.Z)(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();t.Z=i},91067:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=Object.prototype.hasOwnProperty,i=function(e,t){return null!=e&&r.call(e,t)},o=n(12494),a=function(e,t){return null!=e&&(0,o.Z)(e,t,i)}}}]);