(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{59809:function(e,t,n){"use strict";var r=n(95318);t.ZP=function(e){var t=e.title,n=e.children,r=(0,a.default)(e,["title","children"]);return o.default.createElement(i,r,o.default.createElement(i.Header,null,t),o.default.createElement(i.Content,null,n))};var a=r(n(19756)),o=r(n(67294)),l={shared:{container:"\n      font-size: 1rem;\n    ",header:"\n      color: #fff;\n      background: #38598A;\n      padding: 1.2em;\n    ",content:"\n      min-height: 5em;\n      background: #F2F2F2;\n      padding: 1.5em 1.2em;\n    "}};var i=(0,n(51342).applyTheme)(l,{defaultProps:{},staticProps:[]})},64735:function(e,t,n){"use strict";t.ZP=void 0;var r={};var a=(0,n(70623).applyTheme)(r,{defaultProps:{},staticProps:[],cols:20,gutter:[5,2]});var o=a;t.ZP=o},74150:function(e,t,n){"use strict";var r=n(95318);t.ZP=function(e){var t=e.content,n=e.external,r=e.children,a=(0,l.default)(e,["content","external","children"]);return u.default.createElement(f,(0,o.default)({target:n?"_blank":"_self"},a),t||r,n&&u.default.createElement(u.default.Fragment,null,"\xa0",u.default.createElement(s.FaSVG,null,u.default.createElement("path",{fill:"currentColor",d:s.ExternalLinkAlt}))))};var a,o=r(n(22122)),l=r(n(19756)),i=r(n(45761)),u=r(n(67294)),c=r(n(29163)),s=n(69829),d={small:"0.8rem",medium:"1rem",large:"1.2rem"};var f=c.default.a(a||(a=(0,i.default)(["\n  font-size: ",";\n  color: #1a5a96;\n\n  &:hover {\n    text-decoration: none;\n    color: blue;\n  }\n\n  &:focus {\n    outline: 4px solid #3b99fc;\n    outline-offset: 1px;\n  }\n"])),(function(e){return d[e.size||"medium"]}))},51342:function(e,t,n){"use strict";var r=n(95318),a=n(20862);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.applyTheme=void 0;var o,l,i=r(n(22122)),u=r(n(19756)),c=r(n(45761)),s=a(n(67294)),d=r(n(86010)),f=r(n(29163)),p=n(80927),m="pg-card",h="pg-card-content",g="pg-card-toggle-on",v="pg-card-toggle-off",y=f.default.input.attrs({type:"checkbox","aria-label":"toggle contents visibility"})(o||(o=(0,c.default)(["\n  position: absolute;\n  left: -100vw;\n\n  & + ."," ."," {\n    display: none;\n  }\n\n  & + ."," ."," {\n    display: block;\n  }\n\n  &:checked + ."," ."," {\n    display: block;\n  }\n\n  &:checked + ."," ."," {\n    display: none;\n  }\n\n  &:checked + ."," > ."," {\n    display: block;\n  }\n"])),m,g,m,v,m,g,m,v,m,h),x={checkboxId:"",styleProps:{},Sheader:null,Scontent:null,Stoggle:null},b=s.default.createContext(x),w=function(e,t){var n,r=(0,p.processStyle)(e),a=(0,p.createStyleBuilder)(r,t),o=t.as||{},x=a(o.container||"section","container"),w=a(o.header||"header","header"),j=a("label","toggle"),k=a(t.toggleable?(n=o.content||"div",f.default[n](l||(l=(0,c.default)(["\n    display: none;\n  "])))):o.content||"div","content"),P=(0,p.createBootstrap)(r,"card"),S=function(e){var n=P(e),r=n.id,a=(n.name,n.label,n.ariaLabel,n.styleProps),o=n.children,l=n.className,c=n.rest,f=c.onToggle,p=c.defaultToggled,h=(0,u.default)(c,["onToggle","defaultToggled"]),g=r+"-toggle";return s.default.createElement(b.Provider,{value:{checkboxId:g,styleProps:a,Stoggle:j,Sheader:w,Scontent:k}},t.toggleable&&s.default.createElement(y,{id:g,onChange:function(e){return f(e,e.target.checked)},defaultChecked:p}),s.default.createElement(x,(0,i.default)({},h,{className:(0,d.default)(m,l)}),o))};return S.Toggle=function(e){var t=e.children,n=e.className,r=(0,u.default)(e,["children","className"]),a=(0,d.default)("pg-card-toggle",n),o=(0,s.useContext)(b),l=o.checkboxId,c=o.Stoggle,f=o.styleProps;return s.default.createElement(c,(0,i.default)({className:a,htmlFor:l},f,r),t)},S.ToggleOn=function(e){var t=e.children,n=e.className,r=(0,u.default)(e,["children","className"]),a=(0,d.default)(g,n),o=(0,s.useContext)(b),l=o.checkboxId,c=o.Stoggle,f=o.styleProps;return s.default.createElement(c,(0,i.default)({className:a,htmlFor:l},f,r),t)},S.ToggleOff=function(e){var t=e.children,n=e.className,r=(0,u.default)(e,["children","className"]),a=(0,d.default)(v,n),o=(0,s.useContext)(b),l=o.checkboxId,c=o.Stoggle,f=o.styleProps;return s.default.createElement(c,(0,i.default)({className:a,htmlFor:l},f,r),t)},S.Header=function(e){var t=e.children,n=e.className,r=(0,u.default)(e,["children","className"]),a=(0,d.default)("pg-card-header",n),o=(0,s.useContext)(b),l=o.Sheader,c=o.styleProps;return s.default.createElement(l,(0,i.default)({className:a},c,r),t)},S.Content=function(e){var t=e.children,n=e.className,r=(0,u.default)(e,["children","className"]),a=(0,d.default)(h,n),o=(0,s.useContext)(b),l=o.Scontent,c=o.styleProps;return s.default.createElement(l,(0,i.default)({className:a},c,r),t)},S};t.applyTheme=w;var j=w({},{});t.default=j},70623:function(e,t,n){"use strict";var r=n(95318),a=n(20862);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.applyTheme=void 0;var o,l,i=r(n(19756)),u=r(n(22122)),c=r(n(45761)),s=a(n(67294)),d=r(n(86010)),f=r(n(29163)),p=n(80927),m="pg-grid-col",h={start:"flex-start",center:"center",end:"flex-end","space-between":"space-between","space-around":"space-around"},g={top:"flex-start",center:"center",bottom:"flex-end"},v={styleProps:{},Srow:null,Scol:null,cols:16,gutter:0,gutterUnit:"px",justify:"start",align:"start"},y=s.default.createContext(v),x=function(e,t){var n,r=(0,p.processStyle)(e),a=(0,p.createStyleBuilder)(r,t),v=t.as||{},x=a(v.container||"div","container"),b=a((n=v.row||"div",f.default[n](o||(o=(0,c.default)(["\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    -webkit-box-pack: inherit;\n    -ms-flex-pack: inherit;\n    justify-content: inherit;\n    -webkit-box-align: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n    ","\n  "])),(function(e){return"\n      margin-left: -"+e.gutterHorizontal+e.gutterUnit+";\n      margin-right: -"+e.gutterHorizontal+e.gutterUnit+";\n      row-gap: "+e.gutterVertical+e.gutterUnit+";\n      & > ."+m+" {\n        padding: "+e.gutterVertical+e.gutterUnit+" "+e.gutterHorizontal+e.gutterUnit+";\n      }\n      justify-content: "+h[e.justify]+";\n      align-items: "+g[e.align]+";\n      "+(e.collapse?"@media (max-width: "+e.collapse+"px) {\n              -webkit-box-orient: vertical;\n              -ms-flex-direction: column;\n              flex-direction: column;\n              & > ."+m+" {\n                width: 100% !important;\n              }\n            }\n            ":"")+"\n    "}))),"row"),w=a(function(e){return f.default[e](l||(l=(0,c.default)(["\n    width: ","%;\n  "])),(function(e){return e.width}))}(v.col||"div"),"col"),j=t.cols,k=void 0===j?16:j,P=t.gutter,S=t.gutterUnit,O=t.justify,C=t.align,_=(0,p.createBootstrap)(r,"grid"),E=function(e){var t=_(e),n=(t.id,t.name,t.label,t.ariaLabel,t.styleProps),r=t.children,a=t.className,o=t.rest,l=o.cols;return s.default.createElement(y.Provider,{value:{styleProps:n,Srow:b,Scol:w,cols:l||k,gutter:P,gutterUnit:S,justify:O,align:C}},s.default.createElement(x,(0,u.default)({},o,{className:(0,d.default)("pg-grid-container",a)}),r))};return E.Row=function(e){var t=(0,s.useContext)(y),n=t.Srow,r=t.styleProps,a=t.gutter,o=t.gutterUnit,l=t.justify,c=t.align,f=e.children,p=e.className,m=e.gutter,h=void 0===m?a:m,g=e.gutterUnit,v=void 0===g?o:g,x=e.justify,b=void 0===x?l:x,w=e.align,j=void 0===w?c:w,k=e.collapse,P=(0,i.default)(e,["children","className","gutter","gutterUnit","justify","align","collapse"]),S=(0,d.default)("pg-grid-row",p),O=0,C=0;if(Array.isArray(h))O=h[0]||0,C=h[1]||0;else{var _=h||0;O=_,C=_}return s.default.createElement(n,(0,u.default)({className:S},r,P,{collapse:k||"",gutterHorizontal:O,gutterVertical:C,gutterUnit:v||"px",justify:b||"start",align:j||"start"}),f)},E.Col=function(e){var t=e.children,n=e.className,r=e.span,a=void 0===r?1:r,o=(0,i.default)(e,["children","className","span"]),l=(0,d.default)(m,n),c=(0,s.useContext)(y),f=c.Scol,p=c.cols,h=c.styleProps,g=a/p*100;return s.default.createElement(f,(0,u.default)({className:l},h,o,{width:g}),t)},E};t.applyTheme=x;var b=x({},{});t.default=b},23398:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n(67294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},76393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=l,t.useAmp=function(){return l(a.default.useContext(o.AmpStateContext))};var r,a=(r=n(67294))&&r.__esModule?r:{default:r},o=n(23398);function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,l=void 0!==o&&o;return n||a&&l}},92775:function(e,t,n){"use strict";var r=n(61682);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var o,l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(67294)),i=(o=n(73244))&&o.__esModule?o:{default:o},u=n(23398),c=n(41165),s=n(76393);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[l.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(l.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=l.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,l=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){l=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var u=0,c=m.length;u<c;u++){var s=m[u];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var d=a.props[s],f=r[s]||new Set;"name"===s&&l||!f.has(d)?(f.add(d),r[s]=f):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,l.default.cloneElement(e,i)}return l.default.cloneElement(e,{key:o})}))}var g=function(e){var t=e.children,n=(0,l.useContext)(u.AmpStateContext),r=(0,l.useContext)(c.HeadManagerContext);return l.default.createElement(i.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)};t.default=g},73244:function(e,t,n){"use strict";var r=n(83115),a=n(2553),o=n(62012),l=(n(50450),n(9807)),i=n(27690),u=n(99828);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var s=n(67294),d=function(e){l(n,e);var t=c(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=d},12562:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(85893),a=n(27261),o=(n(67294),n(9008)),l=n(29163),i=n(64735),u=n(59809),c=n(74150),s=n(4826);function d(){var e=(0,a.Z)(["\n  padding: 1rem 5rem;\n"]);return d=function(){return e},e}var f=l.default.div(d());function p(e){e.currentUser;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:"SSO Requests"}),(0,r.jsx)("meta",{name:"description",content:"The request process workflow tool for the RedHat SSO Dev Exchange service"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(f,{children:(0,r.jsx)(i.ZP,{cols:3,gutter:[5,2],children:(0,r.jsxs)(i.ZP.Row,{collapse:"800",children:[(0,r.jsx)(i.ZP.Col,{span:2,children:(0,r.jsxs)(u.ZP,{title:"SSO Request Form",children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",(0,r.jsx)("br",{})," ",(0,r.jsx)("br",{}),(0,r.jsx)(s.ZP,{size:"small",children:"Click Me!"}),(0,r.jsx)("br",{})," ",(0,r.jsx)("br",{}),(0,r.jsxs)(c.ZP,{href:"#link1",children:["Do you have any questions? Click here to ",(0,r.jsx)("strong",{children:"ask"})]})]})}),(0,r.jsx)(i.ZP.Col,{children:(0,r.jsxs)(u.ZP,{title:"SSO Request Form",children:["aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",(0,r.jsx)("br",{})," ",(0,r.jsx)("br",{}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(c.ZP,{href:"#link1",content:"link1"})}),(0,r.jsx)("li",{children:(0,r.jsx)(c.ZP,{href:"#link1",content:"link2"})})]})]})})]})})})]})}},45301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(12562)}])},9008:function(e,t,n){e.exports=n(92775)},38164:function(e,t,n){var r=n(54360);e.exports=function(e){if(Array.isArray(e))return r(e)}},61682:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},27381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},95725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},83115:function(e,t,n){var r=n(38164),a=n(27381),o=n(73585),l=n(95725);e.exports=function(e){return r(e)||a(e)||o(e)||l()}}},function(e){e.O(0,[774,888,179],(function(){return t=45301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);