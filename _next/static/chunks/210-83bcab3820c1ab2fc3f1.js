(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[210],{64735:function(e,t,n){"use strict";t.ZP=void 0;var r={};var a=(0,n(70623).applyTheme)(r,{defaultProps:{},staticProps:[],cols:20,gutter:[5,2]});var o=a;t.ZP=o},74150:function(e,t,n){"use strict";var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.content,n=e.external,r=e.children,a=(0,i.default)(e,["content","external","children"]);return l.default.createElement(d,(0,o.default)({target:n?"_blank":"_self"},a),t||r,n&&l.default.createElement(l.default.Fragment,null,"\xa0",l.default.createElement(s.FaSVG,null,l.default.createElement("path",{fill:"currentColor",d:s.ExternalLinkAlt}))))},t.sizes=void 0;var a,o=r(n(22122)),i=r(n(19756)),u=r(n(45761)),l=r(n(67294)),c=r(n(29163)),s=n(69829),f={small:"0.8rem",medium:"1rem",large:"1.2rem"};t.sizes=f;var d=c.default.a(a||(a=(0,u.default)(["\n  font-size: ",";\n  color: #1a5a96;\n\n  &:hover {\n    text-decoration: none;\n    color: blue;\n  }\n\n  &:focus {\n    outline: 4px solid #3b99fc;\n    outline-offset: 1px;\n  }\n"])),(function(e){return f[e.size||"medium"]}))},70623:function(e,t,n){"use strict";var r=n(95318),a=n(20862);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.applyTheme=void 0;var o,i,u=r(n(19756)),l=r(n(22122)),c=r(n(45761)),s=a(n(67294)),f=r(n(86010)),d=r(n(29163)),p=n(80927),m="pg-grid-col",h={start:"flex-start",center:"center",end:"flex-end","space-between":"space-between","space-around":"space-around"},v={top:"flex-start",center:"center",bottom:"flex-end"},g={styleProps:{},Srow:null,Scol:null,cols:16,gutter:0,gutterUnit:"px",justify:"start",align:"start"},y=s.default.createContext(g),b=function(e,t){var n,r=(0,p.processStyle)(e),a=(0,p.createStyleBuilder)(r,t),g=t.as||{},b=a(g.container||"div","container"),x=a((n=g.row||"div",d.default[n](o||(o=(0,c.default)(["\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    -webkit-box-pack: inherit;\n    -ms-flex-pack: inherit;\n    justify-content: inherit;\n    -webkit-box-align: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n    ","\n  "])),(function(e){return"\n      margin-left: -"+e.gutterHorizontal+e.gutterUnit+";\n      margin-right: -"+e.gutterHorizontal+e.gutterUnit+";\n      row-gap: "+e.gutterVertical+e.gutterUnit+";\n      & > ."+m+" {\n        padding: "+e.gutterVertical+e.gutterUnit+" "+e.gutterHorizontal+e.gutterUnit+";\n      }\n      justify-content: "+h[e.justify]+";\n      align-items: "+v[e.align]+";\n      "+(e.collapse?"@media (max-width: "+e.collapse+"px) {\n              -webkit-box-orient: vertical;\n              -ms-flex-direction: column;\n              flex-direction: column;\n              & > ."+m+" {\n                width: 100% !important;\n              }\n            }\n            ":"")+"\n    "}))),"row"),w=a(function(e){return d.default[e](i||(i=(0,c.default)(["\n    width: ","%;\n  "])),(function(e){return e.width}))}(g.col||"div"),"col"),j=t.cols,O=void 0===j?16:j,k=t.gutter,M=t.gutterUnit,_=t.justify,P=t.align,S=(0,p.createBootstrap)(r,"grid"),C=function(e){var t=S(e),n=(t.id,t.name,t.label,t.ariaLabel,t.styleProps),r=t.children,a=t.className,o=t.rest,i=o.cols;return s.default.createElement(y.Provider,{value:{styleProps:n,Srow:x,Scol:w,cols:i||O,gutter:k,gutterUnit:M,justify:_,align:P}},s.default.createElement(b,(0,l.default)({},o,{className:(0,f.default)("pg-grid-container",a)}),r))};return C.Row=function(e){var t=(0,s.useContext)(y),n=t.Srow,r=t.styleProps,a=t.gutter,o=t.gutterUnit,i=t.justify,c=t.align,d=e.children,p=e.className,m=e.gutter,h=void 0===m?a:m,v=e.gutterUnit,g=void 0===v?o:v,b=e.justify,x=void 0===b?i:b,w=e.align,j=void 0===w?c:w,O=e.collapse,k=(0,u.default)(e,["children","className","gutter","gutterUnit","justify","align","collapse"]),M=(0,f.default)("pg-grid-row",p),_=0,P=0;if(Array.isArray(h))_=h[0]||0,P=h[1]||0;else{var S=h||0;_=S,P=S}return s.default.createElement(n,(0,l.default)({className:M},r,k,{collapse:O||"",gutterHorizontal:_,gutterVertical:P,gutterUnit:g||"px",justify:x||"start",align:j||"start"}),d)},C.Col=function(e){var t=e.children,n=e.className,r=e.span,a=void 0===r?1:r,o=(0,u.default)(e,["children","className","span"]),i=(0,f.default)(m,n),c=(0,s.useContext)(y),d=c.Scol,p=c.cols,h=c.styleProps,v=a/p*100;return s.default.createElement(d,(0,l.default)({className:i},h,o,{width:v}),t)},C};t.applyTheme=b;var x=b({},{});t.default=x},23398:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n(67294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},76393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n(67294))&&r.__esModule?r:{default:r},o=n(23398);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},92775:function(e,t,n){"use strict";var r=n(61682);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(67294)),u=(o=n(73244))&&o.__esModule?o:{default:o},l=n(23398),c=n(41165),s=n(76393);function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var u=a.key.slice(a.key.indexOf("$")+1);e.has(u)?o=!1:e.add(u)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var l=0,c=m.length;l<c;l++){var s=m[l];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var f=a.props[s],d=r[s]||new Set;"name"===s&&i||!d.has(f)?(d.add(f),r[s]=d):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return u["data-href"]=u.href,u.href=void 0,u["data-optimized-fonts"]=!0,i.default.cloneElement(e,u)}return i.default.cloneElement(e,{key:o})}))}var v=function(e){var t=e.children,n=(0,i.useContext)(l.AmpStateContext),r=(0,i.useContext)(c.HeadManagerContext);return i.default.createElement(u.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)};t.default=v},73244:function(e,t,n){"use strict";var r=n(83115),a=n(2553),o=n(62012),i=(n(50450),n(9807)),u=n(27690),l=n(99828);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var a=l(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var s=n(67294),f=function(e){i(n,e);var t=c(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=f},9008:function(e,t,n){e.exports=n(92775)},38164:function(e,t,n){var r=n(54360);e.exports=function(e){if(Array.isArray(e))return r(e)}},61682:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},27381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},95725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},83115:function(e,t,n){var r=n(38164),a=n(27381),o=n(73585),i=n(95725);e.exports=function(e){return r(e)||a(e)||o(e)||i()}}}]);