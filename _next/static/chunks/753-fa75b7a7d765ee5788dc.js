(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[753],{69696:function(e,t,n){"use strict";t.ZP=void 0;var r={shared:{container:"\n      position: fixed;\n      top: 0;\n      left: 0;\n      font-size: 1rem;\n      width: 100%;\n      height: 100%;\n      background: rgba(220,220,220,0.8);\n    ",modal:"\n      max-width: 800px;\n      margin: 2rem auto;\n    ",header:"\n      display: flex;\n      color: #fff;\n      background: #38598A;\n      padding: 1.2em;\n    ",content:"\n      min-height: 5em;\n      background: #fff;\n      padding: 1.5em 1.2em;\n    ",close:"\n      margin-left: auto;\n      color: #fff;\n      font-weight: 600;\n\n      &:hover {\n        color: #fff;\n      }\n    "}};var o=(0,n(68985).applyTheme)(r,{defaultProps:{},staticProps:[]});var a=o;t.ZP=a},68985:function(e,t,n){"use strict";var r=n(95318),o=n(20862);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.applyTheme=void 0;var a,i=r(n(22122)),s=r(n(19756)),f=r(n(45761)),u=o(n(67294)),l=r(n(86010)),c=r(n(29163)),d=n(80927),p={styleProps:{},Sheader:null,Scontent:null,Sfooter:null,Sclose:null},m=u.default.createContext(p),v=function(e,t){var n,r=(0,d.processStyle)(e),o=(0,d.createStyleBuilder)(r,t),p=t.as||{},v=o((n=p.container||"div",c.default[n](a||(a=(0,f.default)(["\n    visibility: hidden;\n\n    &:target {\n      visibility: visible;\n    }\n  "])))),"container"),h=o(p.modal||"div","modal"),g=o(p.header||"header","header"),y=o(p.content||"div","content"),b=o(p.footer||"footer","footer"),w=o("a","close"),x=(0,d.createBootstrap)(r,"modal"),E=function(e){var t=x(e),n=t.id,r=(t.name,t.label,t.ariaLabel,t.styleProps),o=t.children,a=t.className,f=t.rest,c=f.style,d=f.modalStyle,p=(f.onToggle,f.defaultToggled,(0,s.default)(f,["style","modalStyle","onToggle","defaultToggled"]));return u.default.createElement(m.Provider,{value:{styleProps:r,Sheader:g,Scontent:y,Sfooter:b,Sclose:w}},u.default.createElement(v,(0,i.default)({},p,{className:(0,l.default)("pg-modal-container",a),id:n,style:c}),u.default.createElement(h,{className:"pg-modal-main",style:d},o)))};return E.Header=function(e){var t=e.children,n=e.className,r=(0,s.default)(e,["children","className"]),o=(0,l.default)("pg-modal-header",n),a=(0,u.useContext)(m),f=a.Sheader,c=a.styleProps;return u.default.createElement(f,(0,i.default)({className:o},c,r),t)},E.Content=function(e){var t=e.children,n=e.className,r=(0,s.default)(e,["children","className"]),o=(0,l.default)("pg-modal-content",n),a=(0,u.useContext)(m),f=a.Scontent,c=a.styleProps;return u.default.createElement(f,(0,i.default)({className:o},c,r),t)},E.Footer=function(e){var t=e.children,n=e.className,r=(0,s.default)(e,["children","className"]),o=(0,l.default)("pg-modal-footer",n),a=(0,u.useContext)(m),f=a.Sfooter,c=a.styleProps;return u.default.createElement(f,(0,i.default)({className:o},c,r),t)},E.Close=function(e){var t=e.children,n=e.className,r=(0,s.default)(e,["children","className"]),o=(0,l.default)("pg-modal-close",n),a=(0,u.useContext)(m),f=a.Sclose,c=a.styleProps;return u.default.createElement(f,(0,i.default)({className:o},c,{href:"#",role:"button","aria-label":"close"},r),t)},E};t.applyTheme=v;var h=v({},{});t.default=h},94737:function(e,t,n){"use strict";n.d(t,{Z:function(){return ft}});var r=n(22122),o=n(19756),a=n(93552);function i(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}var s=n(67294);function f(){var e=(0,s.useRef)(!0),t=(0,s.useRef)((function(){return e.current}));return(0,s.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}function u(e){var t=function(e){var t=(0,s.useRef)(e);return t.current=e,t}(e);(0,s.useEffect)((function(){return function(){return t.current()}}),[])}var l=Math.pow(2,31)-1;function c(e,t,n){var r=n-Date.now();e.current=r<=l?setTimeout(t,r):setTimeout((function(){return c(e,t,n)}),l)}function d(){var e=f(),t=(0,s.useRef)();return u((function(){return clearTimeout(t.current)})),(0,s.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(r,o){void 0===o&&(o=0),e()&&(n(),o<=l?t.current=setTimeout(r,o):c(t,r,Date.now()+o))},clear:n}}),[])}var p=n(73935);function m(e){return e&&"setState"in e?p.findDOMNode(e):null!=e?e:null}var v=n(42473),h=n.n(v),g=n(18977),y=n(94184),b=n.n(y),w=n(45697),x=n.n(w);function E(){return(0,s.useState)(null)}var O=n(35654),C="top",P="bottom",k="right",D="left",N="auto",S=[C,P,k,D],T="start",R="end",A="viewport",j="popper",M=S.reduce((function(e,t){return e.concat([t+"-"+T,t+"-"+R])}),[]),L=[].concat(S,[N]).reduce((function(e,t){return e.concat([t,t+"-"+T,t+"-"+R])}),[]),B=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];var H=function(e){var t=f();return[e[0],(0,s.useCallback)((function(n){if(t())return e[1](n)}),[t,e[1]])]};function W(e){return e.split("-")[0]}function _(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function Z(e){var t=_(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function q(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function F(e){return e instanceof q(e).Element||e instanceof Element}function U(e){return e instanceof q(e).HTMLElement||e instanceof HTMLElement}function V(e){return"undefined"!==typeof ShadowRoot&&(e instanceof q(e).ShadowRoot||e instanceof ShadowRoot)}function I(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&V(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function z(e){return e?(e.nodeName||"").toLowerCase():null}function K(e){return q(e).getComputedStyle(e)}function X(e){return["table","td","th"].indexOf(z(e))>=0}function Y(e){return((F(e)?e.ownerDocument:e.document)||window.document).documentElement}function $(e){return"html"===z(e)?e:e.assignedSlot||e.parentNode||(V(e)?e.host:null)||Y(e)}function G(e){return U(e)&&"fixed"!==K(e).position?e.offsetParent:null}function J(e){for(var t=q(e),n=G(e);n&&X(n)&&"static"===K(n).position;)n=G(n);return n&&("html"===z(n)||"body"===z(n)&&"static"===K(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&U(e)&&"fixed"===K(e).position)return null;for(var n=$(e);U(n)&&["html","body"].indexOf(z(n))<0;){var r=K(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function Q(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}var ee=Math.max,te=Math.min,ne=Math.round;function re(e,t,n){return ee(e,te(t,n))}function oe(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ae(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var ie={top:"auto",right:"auto",bottom:"auto",left:"auto"};function se(e){var t,n=e.popper,r=e.popperRect,o=e.placement,a=e.offsets,i=e.position,s=e.gpuAcceleration,f=e.adaptive,u=e.roundOffsets,l=!0===u?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:ne(ne(t*r)/r)||0,y:ne(ne(n*r)/r)||0}}(a):"function"===typeof u?u(a):a,c=l.x,d=void 0===c?0:c,p=l.y,m=void 0===p?0:p,v=a.hasOwnProperty("x"),h=a.hasOwnProperty("y"),g=D,y=C,b=window;if(f){var w=J(n),x="clientHeight",E="clientWidth";w===q(n)&&"static"!==K(w=Y(n)).position&&(x="scrollHeight",E="scrollWidth"),w=w,o===C&&(y=P,m-=w[x]-r.height,m*=s?1:-1),o===D&&(g=k,d-=w[E]-r.width,d*=s?1:-1)}var O,N=Object.assign({position:i},f&&ie);return s?Object.assign({},N,((O={})[y]=h?"0":"",O[g]=v?"0":"",O.transform=(b.devicePixelRatio||1)<2?"translate("+d+"px, "+m+"px)":"translate3d("+d+"px, "+m+"px, 0)",O)):Object.assign({},N,((t={})[y]=h?m+"px":"",t[g]=v?d+"px":"",t.transform="",t))}var fe={passive:!0};var ue={left:"right",right:"left",bottom:"top",top:"bottom"};function le(e){return e.replace(/left|right|bottom|top/g,(function(e){return ue[e]}))}var ce={start:"end",end:"start"};function de(e){return e.replace(/start|end/g,(function(e){return ce[e]}))}function pe(e){var t=q(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function me(e){return _(Y(e)).left+pe(e).scrollLeft}function ve(e){var t=K(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function he(e){return["html","body","#document"].indexOf(z(e))>=0?e.ownerDocument.body:U(e)&&ve(e)?e:he($(e))}function ge(e,t){var n;void 0===t&&(t=[]);var r=he(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),a=q(r),i=o?[a].concat(a.visualViewport||[],ve(r)?r:[]):r,s=t.concat(i);return o?s:s.concat(ge($(i)))}function ye(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function be(e,t){return t===A?ye(function(e){var t=q(e),n=Y(e),r=t.visualViewport,o=n.clientWidth,a=n.clientHeight,i=0,s=0;return r&&(o=r.width,a=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=r.offsetLeft,s=r.offsetTop)),{width:o,height:a,x:i+me(e),y:s}}(e)):U(t)?function(e){var t=_(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ye(function(e){var t,n=Y(e),r=pe(e),o=null==(t=e.ownerDocument)?void 0:t.body,a=ee(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),i=ee(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+me(e),f=-r.scrollTop;return"rtl"===K(o||n).direction&&(s+=ee(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:i,x:s,y:f}}(Y(e)))}function we(e,t,n){var r="clippingParents"===t?function(e){var t=ge($(e)),n=["absolute","fixed"].indexOf(K(e).position)>=0&&U(e)?J(e):e;return F(n)?t.filter((function(e){return F(e)&&I(e,n)&&"body"!==z(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),a=o[0],i=o.reduce((function(t,n){var r=be(e,n);return t.top=ee(r.top,t.top),t.right=te(r.right,t.right),t.bottom=te(r.bottom,t.bottom),t.left=ee(r.left,t.left),t}),be(e,a));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function xe(e){return e.split("-")[1]}function Ee(e){var t,n=e.reference,r=e.element,o=e.placement,a=o?W(o):null,i=o?xe(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(a){case C:t={x:s,y:n.y-r.height};break;case P:t={x:s,y:n.y+n.height};break;case k:t={x:n.x+n.width,y:f};break;case D:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var u=a?Q(a):null;if(null!=u){var l="y"===u?"height":"width";switch(i){case T:t[u]=t[u]-(n[l]/2-r[l]/2);break;case R:t[u]=t[u]+(n[l]/2-r[l]/2)}}return t}function Oe(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,a=n.boundary,i=void 0===a?"clippingParents":a,s=n.rootBoundary,f=void 0===s?A:s,u=n.elementContext,l=void 0===u?j:u,c=n.altBoundary,d=void 0!==c&&c,p=n.padding,m=void 0===p?0:p,v=oe("number"!==typeof m?m:ae(m,S)),h=l===j?"reference":j,g=e.elements.reference,y=e.rects.popper,b=e.elements[d?h:l],w=we(F(b)?b:b.contextElement||Y(e.elements.popper),i,f),x=_(g),E=Ee({reference:x,element:y,strategy:"absolute",placement:o}),O=ye(Object.assign({},y,E)),D=l===j?O:x,N={top:w.top-D.top+v.top,bottom:D.bottom-w.bottom+v.bottom,left:w.left-D.left+v.left,right:D.right-w.right+v.right},T=e.modifiersData.offset;if(l===j&&T){var R=T[o];Object.keys(N).forEach((function(e){var t=[k,P].indexOf(e)>=0?1:-1,n=[C,P].indexOf(e)>=0?"y":"x";N[e]+=R[n]*t}))}return N}function Ce(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Pe(e){return[C,k,P,D].some((function(t){return e[t]>=0}))}function ke(e,t,n){void 0===n&&(n=!1);var r=Y(t),o=_(e),a=U(t),i={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(a||!a&&!n)&&(("body"!==z(t)||ve(r))&&(i=function(e){return e!==q(e)&&U(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:pe(e);var t}(t)),U(t)?((s=_(t)).x+=t.clientLeft,s.y+=t.clientTop):r&&(s.x=me(r))),{x:o.left+i.scrollLeft-s.x,y:o.top+i.scrollTop-s.y,width:o.width,height:o.height}}function De(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function Ne(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var Se={placement:"bottom",modifiers:[],strategy:"absolute"};function Te(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function Re(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,a=void 0===o?Se:o;return function(e,t,n){void 0===n&&(n=a);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},Se,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},i=[],s=!1,f={state:o,setOptions:function(n){u(),o.options=Object.assign({},a,o.options,n),o.scrollParents={reference:F(e)?ge(e):e.contextElement?ge(e.contextElement):[],popper:ge(t)};var s=function(e){var t=De(e);return B.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=s.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,a=e.effect;if("function"===typeof a){var s=a({state:o,name:t,instance:f,options:r}),u=function(){};i.push(s||u)}})),f.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(Te(t,n)){o.rects={reference:ke(t,J(n),"fixed"===o.options.strategy),popper:Z(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var a=o.orderedModifiers[r],i=a.fn,u=a.options,l=void 0===u?{}:u,c=a.name;"function"===typeof i&&(o=i({state:o,options:l,name:c,instance:f})||o)}else o.reset=!1,r=-1}}},update:Ne((function(){return new Promise((function(e){f.forceUpdate(),e(o)}))})),destroy:function(){u(),s=!0}};if(!Te(e,t))return f;function u(){i.forEach((function(e){return e()})),i=[]}return f.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}var Ae=Re({defaultModifiers:[{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,i=Oe(t,{elementContext:"reference"}),s=Oe(t,{altBoundary:!0}),f=Ce(i,r),u=Ce(s,o,a),l=Pe(f),c=Pe(u);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:c},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":c})}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=Ee({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,a=n.adaptive,i=void 0===a||a,s=n.roundOffsets,f=void 0===s||s,u={placement:W(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,se(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,se(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,a=void 0===o||o,i=r.resize,s=void 0===i||i,f=q(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&u.forEach((function(e){e.addEventListener("scroll",n.update,fe)})),s&&f.addEventListener("resize",n.update,fe),function(){a&&u.forEach((function(e){e.removeEventListener("scroll",n.update,fe)})),s&&f.removeEventListener("resize",n.update,fe)}},data:{}},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,a=void 0===o?[0,0]:o,i=L.reduce((function(e,n){return e[n]=function(e,t,n){var r=W(e),o=[D,C].indexOf(r)>=0?-1:1,a="function"===typeof n?n(Object.assign({},t,{placement:e})):n,i=a[0],s=a[1];return i=i||0,s=(s||0)*o,[D,k].indexOf(r)>=0?{x:s,y:i}:{x:i,y:s}}(n,t.rects,a),e}),{}),s=i[t.placement],f=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=i}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,a=void 0===o||o,i=n.altAxis,s=void 0===i||i,f=n.fallbackPlacements,u=n.padding,l=n.boundary,c=n.rootBoundary,d=n.altBoundary,p=n.flipVariations,m=void 0===p||p,v=n.allowedAutoPlacements,h=t.options.placement,g=W(h),y=f||(g===h||!m?[le(h)]:function(e){if(W(e)===N)return[];var t=le(e);return[de(e),t,de(t)]}(h)),b=[h].concat(y).reduce((function(e,n){return e.concat(W(n)===N?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,a=n.rootBoundary,i=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,u=void 0===f?L:f,l=xe(r),c=l?s?M:M.filter((function(e){return xe(e)===l})):S,d=c.filter((function(e){return u.indexOf(e)>=0}));0===d.length&&(d=c);var p=d.reduce((function(t,n){return t[n]=Oe(e,{placement:n,boundary:o,rootBoundary:a,padding:i})[W(n)],t}),{});return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}(t,{placement:n,boundary:l,rootBoundary:c,padding:u,flipVariations:m,allowedAutoPlacements:v}):n)}),[]),w=t.rects.reference,x=t.rects.popper,E=new Map,O=!0,R=b[0],A=0;A<b.length;A++){var j=b[A],B=W(j),H=xe(j)===T,_=[C,P].indexOf(B)>=0,Z=_?"width":"height",q=Oe(t,{placement:j,boundary:l,rootBoundary:c,altBoundary:d,padding:u}),F=_?H?k:D:H?P:C;w[Z]>x[Z]&&(F=le(F));var U=le(F),V=[];if(a&&V.push(q[B]<=0),s&&V.push(q[F]<=0,q[U]<=0),V.every((function(e){return e}))){R=j,O=!1;break}E.set(j,V)}if(O)for(var I=function(e){var t=b.find((function(t){var n=E.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return R=t,"break"},z=m?3:1;z>0;z--){if("break"===I(z))break}t.placement!==R&&(t.modifiersData[r]._skip=!0,t.placement=R,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,a=void 0===o||o,i=n.altAxis,s=void 0!==i&&i,f=n.boundary,u=n.rootBoundary,l=n.altBoundary,c=n.padding,d=n.tether,p=void 0===d||d,m=n.tetherOffset,v=void 0===m?0:m,h=Oe(t,{boundary:f,rootBoundary:u,padding:c,altBoundary:l}),g=W(t.placement),y=xe(t.placement),b=!y,w=Q(g),x="x"===w?"y":"x",E=t.modifiersData.popperOffsets,O=t.rects.reference,N=t.rects.popper,S="function"===typeof v?v(Object.assign({},t.rects,{placement:t.placement})):v,R={x:0,y:0};if(E){if(a||s){var A="y"===w?C:D,j="y"===w?P:k,M="y"===w?"height":"width",L=E[w],B=E[w]+h[A],H=E[w]-h[j],_=p?-N[M]/2:0,q=y===T?O[M]:N[M],F=y===T?-N[M]:-O[M],U=t.elements.arrow,V=p&&U?Z(U):{width:0,height:0},I=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},z=I[A],K=I[j],X=re(0,O[M],V[M]),Y=b?O[M]/2-_-X-z-S:q-X-z-S,$=b?-O[M]/2+_+X+K+S:F+X+K+S,G=t.elements.arrow&&J(t.elements.arrow),ne=G?"y"===w?G.clientTop||0:G.clientLeft||0:0,oe=t.modifiersData.offset?t.modifiersData.offset[t.placement][w]:0,ae=E[w]+Y-oe-ne,ie=E[w]+$-oe;if(a){var se=re(p?te(B,ae):B,L,p?ee(H,ie):H);E[w]=se,R[w]=se-L}if(s){var fe="x"===w?C:D,ue="x"===w?P:k,le=E[x],ce=le+h[fe],de=le-h[ue],pe=re(p?te(ce,ae):ce,le,p?ee(de,ie):de);E[x]=pe,R[x]=pe-le}}t.modifiersData[r]=R}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,a=n.elements.arrow,i=n.modifiersData.popperOffsets,s=W(n.placement),f=Q(s),u=[D,k].indexOf(s)>=0?"height":"width";if(a&&i){var l=function(e,t){return oe("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ae(e,S))}(o.padding,n),c=Z(a),d="y"===f?C:D,p="y"===f?P:k,m=n.rects.reference[u]+n.rects.reference[f]-i[f]-n.rects.popper[u],v=i[f]-n.rects.reference[f],h=J(a),g=h?"y"===f?h.clientHeight||0:h.clientWidth||0:0,y=m/2-v/2,b=l[d],w=g-c[u]-l[p],x=g/2-c[u]/2+y,E=re(b,x,w),O=f;n.modifiersData[r]=((t={})[O]=E,t.centerOffset=E-x,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&I(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}]}),je=function(e){return{position:e,top:"0",left:"0",opacity:"0",pointerEvents:"none"}},Me={name:"applyStyles",enabled:!1},Le={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:function(e){var t=e.state;return function(){var e=t.elements,n=e.reference,r=e.popper;if("removeAttribute"in n){var o=(n.getAttribute("aria-describedby")||"").split(",").filter((function(e){return e.trim()!==r.id}));o.length?n.setAttribute("aria-describedby",o.join(",")):n.removeAttribute("aria-describedby")}}},fn:function(e){var t,n=e.state.elements,r=n.popper,o=n.reference,a=null==(t=r.getAttribute("role"))?void 0:t.toLowerCase();if(r.id&&"tooltip"===a&&"setAttribute"in o){var i=o.getAttribute("aria-describedby");if(i&&-1!==i.split(",").indexOf(r.id))return;o.setAttribute("aria-describedby",i?i+","+r.id:r.id)}}},Be=[];var He=function(e,t,n){var a=void 0===n?{}:n,i=a.enabled,f=void 0===i||i,u=a.placement,l=void 0===u?"bottom":u,c=a.strategy,d=void 0===c?"absolute":c,p=a.modifiers,m=void 0===p?Be:p,v=(0,o.default)(a,["enabled","placement","strategy","modifiers"]),h=(0,s.useRef)(),g=(0,s.useCallback)((function(){var e;null==(e=h.current)||e.update()}),[]),y=(0,s.useCallback)((function(){var e;null==(e=h.current)||e.forceUpdate()}),[]),b=H((0,s.useState)({placement:l,update:g,forceUpdate:y,attributes:{},styles:{popper:je(d),arrow:{}}})),w=b[0],x=b[1],E=(0,s.useMemo)((function(){return{name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:function(e){var t=e.state,n={},r={};Object.keys(t.elements).forEach((function(e){n[e]=t.styles[e],r[e]=t.attributes[e]})),x({state:t,styles:n,attributes:r,update:g,forceUpdate:y,placement:t.placement})}}}),[g,y,x]);return(0,s.useEffect)((function(){h.current&&f&&h.current.setOptions({placement:l,strategy:d,modifiers:[].concat(m,[E,Me])})}),[d,l,E,f]),(0,s.useEffect)((function(){if(f&&null!=e&&null!=t)return h.current=Ae(e,t,(0,r.default)({},v,{placement:l,strategy:d,modifiers:[].concat(m,[Le,E])})),function(){null!=h.current&&(h.current.destroy(),h.current=void 0,x((function(e){return(0,r.default)({},e,{attributes:{},styles:{popper:je(d)}})})))}}),[f,e,t]),w},We=n(54302),_e=n(96895),Ze=n(67216),qe=function(){};var Fe=function(e){return e&&("current"in e?e.current:e)};var Ue=function(e,t,n){var r=void 0===n?{}:n,o=r.disabled,a=r.clickTrigger,f=void 0===a?"click":a,u=(0,s.useRef)(!1),l=t||qe,c=(0,s.useCallback)((function(t){var n,r=Fe(e);h()(!!r,"RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"),u.current=!r||!!((n=t).metaKey||n.altKey||n.ctrlKey||n.shiftKey)||!function(e){return 0===e.button}(t)||!!i(r,t.target)}),[e]),d=(0,_e.Z)((function(e){u.current||l(e)})),p=(0,_e.Z)((function(e){27===e.keyCode&&l(e)}));(0,s.useEffect)((function(){if(!o&&null!=e){var t,n=window.event,r=(t=Fe(e),(0,Ze.Z)(m(t))),a=(0,We.Z)(r,f,c,!0),i=(0,We.Z)(r,f,(function(e){e!==n?d(e):n=void 0})),s=(0,We.Z)(r,"keyup",(function(e){e!==n?p(e):n=void 0})),u=[];return"ontouchstart"in r.documentElement&&(u=[].slice.call(r.body.children).map((function(e){return(0,We.Z)(e,"mousemove",qe)}))),function(){a(),i(),s(),u.forEach((function(e){return e()}))}}}),[e,o,f,c,d,p])},Ve=function(e){var t;return"undefined"===typeof document?null:null==e?(0,Ze.Z)().body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(t=e)&&t.nodeType&&e||null)};function Ie(e,t){var n=(0,s.useState)((function(){return Ve(e)})),r=n[0],o=n[1];if(!r){var a=Ve(e);a&&o(a)}return(0,s.useEffect)((function(){t&&r&&t(r)}),[t,r]),(0,s.useEffect)((function(){var t=Ve(e);t!==r&&o(t)}),[e,r]),r}function ze(e){var t,n,o,a,i,s=e.enabled,f=e.enableEvents,u=e.placement,l=e.flip,c=e.offset,d=e.fixed,p=e.containerPadding,m=e.arrowElement,v=e.popperConfig,h=void 0===v?{}:v,g=function(e){var t={};return Array.isArray(e)?(null==e||e.forEach((function(e){t[e.name]=e})),t):e||t}(h.modifiers);return(0,r.default)({},h,{placement:u,enabled:s,strategy:d?"fixed":h.strategy,modifiers:(i=(0,r.default)({},g,{eventListeners:{enabled:f},preventOverflow:(0,r.default)({},g.preventOverflow,{options:p?(0,r.default)({padding:p},null==(t=g.preventOverflow)?void 0:t.options):null==(n=g.preventOverflow)?void 0:n.options}),offset:{options:(0,r.default)({offset:c},null==(o=g.offset)?void 0:o.options)},arrow:(0,r.default)({},g.arrow,{enabled:!!m,options:(0,r.default)({},null==(a=g.arrow)?void 0:a.options,{element:m})}),flip:(0,r.default)({enabled:!!l},g.flip)}),void 0===i&&(i={}),Array.isArray(i)?i:Object.keys(i).map((function(e){return i[e].name=e,i[e]})))})}var Ke=s.forwardRef((function(e,t){var n=e.flip,a=e.offset,i=e.placement,f=e.containerPadding,u=void 0===f?5:f,l=e.popperConfig,c=void 0===l?{}:l,d=e.transition,m=E(),v=m[0],h=m[1],g=E(),y=g[0],b=g[1],w=(0,O.Z)(h,t),x=Ie(e.container),C=Ie(e.target),P=(0,s.useState)(!e.show),k=P[0],D=P[1],N=He(C,v,ze({placement:i,enableEvents:!!e.show,containerPadding:u||5,flip:n,offset:a,arrowElement:y,popperConfig:c})),S=N.styles,T=N.attributes,R=(0,o.default)(N,["styles","attributes"]);e.show?k&&D(!1):e.transition||k||D(!0);var A=e.show||d&&!k;if(Ue(v,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!A)return null;var j=e.children((0,r.default)({},R,{show:!!e.show,props:(0,r.default)({},T.popper,{style:S.popper,ref:w}),arrowProps:(0,r.default)({},T.arrow,{style:S.arrow,ref:b})}));if(d){var M=e.onExit,L=e.onExiting,B=e.onEnter,H=e.onEntering,W=e.onEntered;j=s.createElement(d,{in:e.show,appear:!0,onExit:M,onExiting:L,onExited:function(){D(!0),e.onExited&&e.onExited.apply(e,arguments)},onEnter:B,onEntering:H,onEntered:W},j)}return x?p.createPortal(j,x):null}));Ke.displayName="Overlay",Ke.propTypes={show:x().bool,placement:x().oneOf(L),target:x().any,container:x().any,flip:x().bool,children:x().func.isRequired,containerPadding:x().number,popperConfig:x().object,rootClose:x().bool,rootCloseEvent:x().oneOf(["click","mousedown"]),rootCloseDisabled:x().bool,onHide:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o;return e.rootClose?(o=x().func).isRequired.apply(o,[e].concat(n)):x().func.apply(x(),[e].concat(n))},transition:x().elementType,onEnter:x().func,onEntering:x().func,onEntered:x().func,onExit:x().func,onExiting:x().func,onExited:x().func};var Xe=Ke;function Ye(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}var $e=n(76792);function Ge(e){var t=window.getComputedStyle(e);return{top:parseFloat(t.marginTop)||0,right:parseFloat(t.marginRight)||0,bottom:parseFloat(t.marginBottom)||0,left:parseFloat(t.marginLeft)||0}}var Je=n(19526),Qe=["children","transition","popperConfig"],et=["props","arrowProps","show","update","forceUpdate","placement","state"],tt={transition:Je.Z,rootClose:!1,show:!1,placement:"top"};function nt(e){var t=e.children,n=e.transition,a=e.popperConfig,i=void 0===a?{}:a,f=(0,o.default)(e,Qe),u=(0,s.useRef)({}),l=function(){var e=(0,s.useRef)(null),t=(0,s.useRef)(null),n=(0,s.useRef)(null),r=(0,$e.vE)(void 0,"popover"),o=(0,$e.vE)(void 0,"dropdown-menu");return[(0,s.useCallback)((function(n){n&&(Ye(n,r)||Ye(n,o))&&(t.current=Ge(n),n.style.margin="0",e.current=n)}),[r,o]),[(0,s.useMemo)((function(){return{name:"offset",options:{offset:function(e){var n=e.placement;if(!t.current)return[0,0];var r=t.current,o=r.top,a=r.left,i=r.bottom,s=r.right;switch(n.split("-")[0]){case"top":return[0,i];case"left":return[0,s];case"bottom":return[0,o];case"right":return[0,a];default:return[0,0]}}}}}),[t]),(0,s.useMemo)((function(){return{name:"arrow",options:{padding:function(){if(!n.current)return 0;var e=n.current,t=e.top,r=e.right,o=t||r;return{top:o,left:o,right:o,bottom:o}}}}}),[n]),(0,s.useMemo)((function(){return{name:"popoverArrowMargins",enabled:!0,phase:"main",requiresIfExists:["arrow"],effect:function(t){var o=t.state;if(e.current&&o.elements.arrow&&Ye(e.current,r)){if(o.modifiersData["arrow#persistent"]){var a=Ge(o.elements.arrow),i=a.top,s=a.right,f=i||s;o.modifiersData["arrow#persistent"].padding={top:f,left:f,right:f,bottom:f}}else n.current=Ge(o.elements.arrow);return o.elements.arrow.style.margin="0",function(){o.elements.arrow&&(o.elements.arrow.style.margin="")}}}}}),[r])]]}(),c=l[0],d=l[1],p=!0===n?Je.Z:n||null;return s.createElement(Xe,(0,r.default)({},f,{ref:c,popperConfig:(0,r.default)({},i,{modifiers:d.concat(i.modifiers||[])}),transition:p}),(function(e){var a,i=e.props,f=e.arrowProps,l=e.show,c=e.update,d=(e.forceUpdate,e.placement),p=e.state,v=(0,o.default)(e,et);!function(e,t){var n=e.ref,r=t.ref;e.ref=n.__wrapped||(n.__wrapped=function(e){return n(m(e))}),t.ref=r.__wrapped||(r.__wrapped=function(e){return r(m(e))})}(i,f);var h=Object.assign(u.current,{state:p,scheduleUpdate:c,placement:d,outOfBoundaries:(null==p||null==(a=p.modifiersData.hide)?void 0:a.isReferenceHidden)||!1});return"function"===typeof t?t((0,r.default)({},v,i,{placement:d,show:l},!n&&l&&{className:"show"},{popper:h,arrowProps:f})):s.cloneElement(t,(0,r.default)({},v,i,{placement:d,arrowProps:f,popper:h,className:b()(t.props.className,!n&&l&&"show"),style:(0,r.default)({},t.props.style,i.style)}))}))}nt.defaultProps=tt;var rt=nt,ot=["trigger","overlay","children","popperConfig","show","defaultShow","onToggle","delay","placement","flip"],at=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){return this.props.children},t}(s.Component);function it(e,t,n){var r=t[0],o=r.currentTarget,a=r.relatedTarget||r.nativeEvent[n];a&&a===o||i(o,a)||e.apply(void 0,t)}function st(e){var t=e.trigger,n=e.overlay,a=e.children,i=e.popperConfig,f=void 0===i?{}:i,u=e.show,l=e.defaultShow,c=void 0!==l&&l,p=e.onToggle,v=e.delay,h=e.placement,y=e.flip,b=void 0===y?h&&-1!==h.indexOf("auto"):y,w=(0,o.default)(e,ot),x=(0,s.useRef)(null),E=d(),O=(0,s.useRef)(""),C=(0,g.$c)(u,c,p),P=C[0],k=C[1],D=function(e){return e&&"object"===typeof e?e:{show:e,hide:e}}(v),N="function"!==typeof a?s.Children.only(a).props:{},S=N.onFocus,T=N.onBlur,R=N.onClick,A=(0,s.useCallback)((function(){return m(x.current)}),[]),j=(0,s.useCallback)((function(){E.clear(),O.current="show",D.show?E.set((function(){"show"===O.current&&k(!0)}),D.show):k(!0)}),[D.show,k,E]),M=(0,s.useCallback)((function(){E.clear(),O.current="hide",D.hide?E.set((function(){"hide"===O.current&&k(!1)}),D.hide):k(!1)}),[D.hide,k,E]),L=(0,s.useCallback)((function(){j();for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];null==S||S.apply(void 0,t)}),[j,S]),B=(0,s.useCallback)((function(){M();for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];null==T||T.apply(void 0,t)}),[M,T]),H=(0,s.useCallback)((function(){k(!P),R&&R.apply(void 0,arguments)}),[R,k,P]),W=(0,s.useCallback)((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];it(j,t,"fromElement")}),[j]),_=(0,s.useCallback)((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];it(M,t,"toElement")}),[M]),Z=null==t?[]:[].concat(t),q={};return-1!==Z.indexOf("click")&&(q.onClick=H),-1!==Z.indexOf("focus")&&(q.onFocus=L,q.onBlur=B),-1!==Z.indexOf("hover")&&(q.onMouseOver=W,q.onMouseOut=_),s.createElement(s.Fragment,null,"function"===typeof a?a((0,r.default)({},q,{ref:x})):s.createElement(at,{ref:x},(0,s.cloneElement)(a,q)),s.createElement(rt,(0,r.default)({},w,{show:P,onHide:M,flip:b,placement:h,popperConfig:f,target:A}),n))}st.defaultProps={defaultShow:!1,trigger:["hover","focus"]};var ft=st},19611:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(22122),o=n(19756),a=n(94184),i=n.n(a),s=n(67294),f=(n(55638),n(76792)),u=["as","bsPrefix","className","children"],l=s.forwardRef((function(e,t){var n=e.as,a=void 0===n?"div":n,l=e.bsPrefix,c=e.className,d=e.children,p=(0,o.default)(e,u);return l=(0,f.vE)(l,"popover-header"),s.createElement(a,(0,r.default)({ref:t},p,{className:i()(l,c)}),d)})),c=["as","bsPrefix","className","children"],d=s.forwardRef((function(e,t){var n=e.as,a=void 0===n?"div":n,u=e.bsPrefix,l=e.className,d=e.children,p=(0,o.default)(e,c);return u=(0,f.vE)(u,"popover-body"),s.createElement(a,(0,r.default)({ref:t},p,{className:i()(l,u)}),d)})),p=["bsPrefix","placement","className","style","children","content","arrowProps","popper","show"],m=s.forwardRef((function(e,t){var n=e.bsPrefix,a=e.placement,u=e.className,l=e.style,c=e.children,m=e.content,v=e.arrowProps,h=(e.popper,e.show,(0,o.default)(e,p)),g=(0,f.vE)(n,"popover"),y=((null==a?void 0:a.split("-"))||[])[0];return s.createElement("div",(0,r.default)({ref:t,role:"tooltip",style:l,"x-placement":y,className:i()(u,g,y&&"bs-popover-"+y)},h),s.createElement("div",(0,r.default)({className:"arrow"},v)),m?s.createElement(d,null,c):c)}));m.defaultProps={placement:"right"},m.Title=l,m.Content=d;var v=m}}]);