(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[950],{74150:function(n,e,t){"use strict";var r=t(95318);e.ZP=function(n){var e=n.content,t=n.external,r=n.children,o=(0,i.default)(n,["content","external","children"]);return s.default.createElement(f,(0,a.default)({target:t?"_blank":"_self"},o),e||r,t&&s.default.createElement(s.default.Fragment,null,"\xa0",s.default.createElement(u.FaSVG,null,s.default.createElement("path",{fill:"currentColor",d:u.ExternalLinkAlt}))))};var o,a=r(t(22122)),i=r(t(19756)),c=r(t(45761)),s=r(t(67294)),l=r(t(29163)),u=t(69829),d={small:"0.8rem",medium:"1rem",large:"1.2rem"};var f=l.default.a(o||(o=(0,c.default)(["\n  font-size: ",";\n  color: #1a5a96;\n\n  &:hover {\n    text-decoration: none;\n    color: blue;\n  }\n\n  &:focus {\n    outline: 4px solid #3b99fc;\n    outline-offset: 1px;\n  }\n"])),(function(n){return d[n.size||"medium"]}))},16530:function(n,e,t){"use strict";var r=t(95318),o=t(20862);e._v=void 0;var a,i=r(t(22122)),c=r(t(19756)),s=r(t(45761)),l=o(t(67294)),u=r(t(86010)),d=r(t(29163)),f=t(80927),p="pg-notification",h="pg-notification-content",x=d.default.input.attrs({type:"checkbox"})(a||(a=(0,s.default)(["\n  position: absolute;\n  left: -100vw;\n\n  &:checked + ."," {\n    display: none;\n  }\n"])),p),m={checkboxId:"",styleProps:{},Sheader:null,Scontent:null,Sgroup:null,Sclose:null},v=l.default.createContext(m),g=function(n,e,t){void 0===t&&(t={});var r=(0,f.processStyle)(n),o=(0,f.processStyle)(t),a=(0,f.createStyleBuilder)(r,e,o),s=e.as||{},d=a(s.container||"aside","container"),m=a(s.header||"header","header"),g=a(s.content||"div","content"),b=a(s.group||"div","group"),j=a("label","close"),y=(0,f.createBootstrap)(r,"notification"),w=function(n){var e=y(n),t=e.id,r=(e.name,e.label,e.ariaLabel,e.styleProps),o=e.children,a=e.className,s=e.rest,f=s.closable,h=(0,c.default)(s,["closable"]),w=t+"-toggle";return l.default.createElement(v.Provider,{value:{checkboxId:w,styleProps:r,Sheader:m,Scontent:g,Sgroup:b,Sclose:j}},f&&l.default.createElement(x,{id:w}),l.default.createElement(d,(0,i.default)({},r,h,{className:(0,u.default)(p,a)}),o))};return w.Header=function(n){var e=n.children,t=n.className,r=(0,c.default)(n,["children","className"]),o=(0,u.default)("pg-notification-header",t),a=(0,l.useContext)(v),s=a.Sheader,d=a.styleProps;return l.default.createElement(s,(0,i.default)({className:o},d,r),e)},w.Content=function(n){var e=n.children,t=n.className,r=(0,c.default)(n,["children","className"]),o=(0,u.default)(h,t),a=(0,l.useContext)(v),s=a.Scontent,d=a.styleProps;return l.default.createElement(s,(0,i.default)({className:o},d,r),e)},w.Group=function(n){var e=n.children,t=n.className,r=(0,c.default)(n,["children","className"]),o=(0,u.default)(h,t),a=(0,l.useContext)(v),s=a.Sgroup,d=a.styleProps;return l.default.createElement(s,(0,i.default)({className:o},d,r),e)},w.Close=function(n){var e=n.children,t=n.className,r=(0,c.default)(n,["children","className"]),o=(0,u.default)("pg-notification-close",t),a=(0,l.useContext)(v),s=a.Sclose,d=a.checkboxId,f=a.styleProps;return l.default.createElement(s,(0,i.default)({className:o,htmlFor:d},f,{role:"button","aria-label":"close"},r),e)},w};e._v=g,g({},{},{})},41340:function(n,e,t){"use strict";t.d(e,{k:function(){return r},r:function(){return o}});var r=function(n){return{type:"setDownloadError",payload:n}},o=function(n){return{type:"setPanelTab",payload:n}}},86701:function(n,e,t){"use strict";t.d(e,{Z:function(){return y}});var r=t(85893),o=t(27261),a=t(67294),i=t(11163),c=t(64735),s=t(29163),l=t(56841),u=t(20374),d=t(40602),f=t(26265);function p(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function h(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){(0,f.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var x={},m=function(n,e){switch(e.type){case"setPanelTab":return h(h({},n),{},{panelTab:e.payload});case"setDownloadError":return h(h({},n),{},{downloadError:e.payload});default:return n}};function v(){var n=(0,o.Z)(["\n  overflow: auto;\n"]);return v=function(){return n},n}var g=[{maxWidth:900,marginTop:0,marginLeft:10,marginRight:10,marginUnit:"px",horizontalAlign:"none"},{width:480,marginTop:0,marginLeft:2.5,marginRight:2.5,marginUnit:"rem",horizontalAlign:"none"}],b=s.default.div(v()),j=a.createContext({});var y=function(n){var e=n.tab,t=n.leftPanel,o=n.rightPanel,s=(0,i.useRouter)(),f=(0,a.useReducer)(m,x),p=f[0],h=f[1],v=(0,a.useMemo)((function(){return{state:p,dispatch:h}}),[p,h]);return(0,r.jsx)(d.Z,{rules:g,children:(0,r.jsx)(j.Provider,{value:v,children:(0,r.jsx)(c.ZP,{cols:10,children:(0,r.jsxs)(c.ZP.Row,{collapse:"1100",gutter:[15,2],children:[(0,r.jsx)(c.ZP.Col,{span:6,children:(0,r.jsxs)(b,{children:[(0,r.jsxs)(u.H,{onSelect:function(n){s.replace("/my-dashboard/".concat(n))},activeKey:e,children:[(0,r.jsx)(l.Z,{eventKey:"integrations",title:"My Projects"}),(0,r.jsx)(l.Z,{eventKey:"teams",title:"My Teams"})]}),t(p,h)]})}),(0,r.jsx)(c.ZP.Col,{span:4,children:o(p,h)})]})})})})}},12512:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Xn}});var r=t(85893),o=t(67294),a=t(27261),i=t(29163),c=t(56841),s=t(26265),l=t(16530),u=t(69829);function d(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function f(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?d(Object(t),!0).forEach((function(e){(0,s.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var p=(0,l._v)({shared:{container:"\n      line-height: 1.5em;\n      border: 1px solid transparent;\n      border-radius: 0.2222em;\n      padding: 1em 0.5em;\n\n      & a {\n        text-decoration: underline;\n      }\n\n      & .pg-notification-content>svg {\n        overflow: initial;\n      }\n    ",close:"\n      cursor: pointer !important;\n      text-align: center;\n      text-decoration: none;\n      border-radius: 0.2222em;\n      padding: 0.4em 0.5em;\n      margin-right: 20px;\n    "},size:{small:{container:"\n        font-size: 0.8rem;\n      "},medium:{container:"\n        font-size: 1rem;\n      "},large:{container:"\n        font-size: 1.2rem;\n      "}},variant:{success:{container:"\n        background-color: #dff0d8;\n        border-color: #d6e9c6;\n        color: #2d4821;\n\n        & a {\n          color: #2b542c;\n        }\n      ",content:"\n        color: #2d4821;\n      ",close:"\n        color: #2d4821;\n        border: 1px solid #2d4821;\n\n        &:hover {\n          background: #2d4821;\n          color: #fff;\n        }\n      ",group:"\n        color: #2d4821;\n      "},info:{container:"\n        background-color: #d9eaf7;\n        border-color: #afd3ee;\n        color: #313132;\n\n        & a {\n          color: #1a5a96;\n        }\n      ",content:"\n        color: #313132;\n      ",close:"\n        color: #313132;\n        border: 1px solid #313132;\n\n        &:hover {\n          background: #313132;\n          color: #fff;\n        }\n      ",group:"\n        color: #313132;\n      "},warning:{container:"\n        background-color: #f9f1c6;\n        border-color: #faebcc;\n        color: #6c4a00;\n\n        & a {\n          color: #66512c;\n        }\n      ",content:"\n        color: #66512c;\n      ",close:"\n        color: #66512c;\n        border: 1px solid #66512c;\n\n        &:hover {\n          background: #66512c;\n          color: #fff;\n        }\n      ",group:"\n        color: #66512c;\n      "},danger:{container:"\n        background-color: #f2dede;\n        border-color: #ebccd1;\n        color: #a12622;\n\n        & a {\n          color: #843534;\n        }\n      ",content:"\n        color: #a12622;\n      ",close:"\n        color: #a12622;\n        border: 1px solid #a12622;\n\n        &:hover {\n          background: #a12622;\n          color: #fff;\n        }\n      ",group:"\n        color: #a12622;\n      "}},flex:{container:"\n      display: flex;\n    ",group:"\n      margin: auto 0.5rem;\n    "}},{defaultProps:{variant:"info",size:"medium",flex:!0},staticProps:[]},{group:{align:{left:"\n        margin-right: auto;\n    ",right:"\n        margin-left: auto;\n    "}}}),h=function(n){switch(n){case"success":return u.CheckCircle;case"info":return u.InfoCircle;case"warning":return u.ExclamationTriangle;default:return u.ExclamationCircle}};function x(n){return(0,r.jsxs)(p,f(f({},n),{},{children:[(0,r.jsx)(p.Group,{style:{marginTop:"1px"},children:(0,r.jsx)(u.FaSVG,{children:(0,r.jsx)("path",{fill:"currentColor",d:h(n.variant)})})}),(0,r.jsx)(p.Content,{children:n.content?n.content:n.children}),n.closable&&(0,r.jsx)(p.Group,{align:"right",children:(0,r.jsx)(p.Close,{children:"x"})})]}))}var m=t(809),v=t.n(m),g=t(64121),b=t(92447),j=t(17625),y=t(51436),w=t(64735),P=t(31607),Z=t(70513),k=function(){var n=(0,b.Z)(v().mark((function n(e,t){var r;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Z.e.post("installation",{requestId:e,environment:t}).then((function(n){return n.data}));case 3:return r=n.sent,n.abrupt("return",[r,null]);case 7:return n.prev=7,n.t0=n.catch(0),console.error(n.t0),n.abrupt("return",[null,n.t0]);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}(),C=function(){var n=(0,b.Z)(v().mark((function n(e,t){var r;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Z.e.put("installation",{requestId:e,environment:t}).then((function(n){return n.data}));case 3:return r=n.sent,n.abrupt("return",[r,null]);case 7:return n.prev=7,n.t0=n.catch(0),console.error(n.t0),n.abrupt("return",[null,n.t0]);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}(),S=t(83024),E=t(30454),O={shared:{button:"\n      border-radius: 0.222em;\n      border-width: 0;\n      padding: 0.6em 1.1em;\n      text-align: center;\n      text-decoration: none;\n      font-weight: 700;\n      letter-spacing: 1px;\n      display: inline-block;\n      cursor: pointer;\n      box-shadow: 0px 0px 0px 2px transparent inset, 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;\n    "},size:{xsmall:{button:"\n        font-size: 0.7rem;\n      "},small:{button:"\n        font-size: 0.8rem;\n      "},medium:{button:"\n        font-size: ".concat(E.n5,";\n      ")},large:{button:"\n        font-size: ".concat(E.zA,";\n      ")}},variant:{primary:{button:"\n        background-color: #D5EDFF;\n        box-shadow: 0px 0px 0px 2px #D5EDFF inset !important;\n        color: #3E3E3E;\n\n        &:hover {\n          text-decoration: underline;\n          background-color: #FFF7D5;\n          box-shadow: 0px 0px 0px 2px #FFF7D5 inset !important;\n          opacity: 0.80;\n        }\n\n        &:active {\n          opacity: 1;\n        }\n      "},grey:{button:"\n        background-color: #B2B2B2;\n        box-shadow: 0px 0px 0px 1px #707070 inset !important;\n        color: #F8F8F8;\n        min-width: 110px;\n\n        &:hover {\n          background-color: ".concat(E.TU,";\n          box-shadow: 0px 0px 0px 1px #707070 inset !important;\n        }\n      ")}}},I=(0,S.applyTheme)(O,{defaultProps:{variant:"primary",size:"medium"},breakProps:[],staticProps:["fullHeight","fullWidth"]}),N=function(n){return JSON.stringify(n,void 0,2)},F=function(n){var e=document.createElement("textarea");e.value=n,document.body.appendChild(e),e.focus(),e.select();try{return document.execCommand("copy"),document.body.removeChild(e),!0}catch(t){return document.body.removeChild(e),!1}},D=function(n,e){var t=window.URL.createObjectURL(new Blob([n],{type:"application/json"})),r=document.createElement("a");r.href=t,r.setAttribute("download",e),document.body.appendChild(r),r.click(),document.body.removeChild(r)},q=t(6434),R=t(70316),z=t(34605),T=t(74150);function G(){var n=(0,a.Z)(["\n  height: var(--field-top-spacing);\n"]);return G=function(){return n},n}function A(){var n=(0,a.Z)(["\n  color: #3e3e3e;\n  font-size: 14px;\n  font-weight: 700;\n"]);return A=function(){return n},n}function _(){var n=(0,a.Z)(["\n  color: #000;\n  font-size: ",";\n  font-weight: bold;\n"]);return _=function(){return n},n}function L(){var n=(0,a.Z)(["\n  text-align: center;\n"]);return L=function(){return n},n}var U=i.default.div(L()),B=i.default.span(_(),E.n5),K=i.default.span(A()),M=i.default.div(G()),H=(0,R.h)((function(n){var e=n.selectedRequest,t=n.alert,a=(0,o.useState)(!1),i=a[0],c=a[1],s=function(){var n=(0,b.Z)(v().mark((function n(t){var r,o,a;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(!0),n.next=3,k(e.id,t);case 3:return r=n.sent,o=(0,g.Z)(r,1),a=o[0],c(!1),n.abrupt("return",a);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,b.Z)(v().mark((function n(e){var r,o,a;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s(e);case 2:r=n.sent,F(N(r)),o=r?"success":"danger",a=r?"Installation copied to clipboard":"Failed to download installation",t.show({variant:o,fadeOut:1e4,closable:!0,content:a});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,b.Z)(v().mark((function n(t){var r;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s(t);case 2:r=n.sent,D(N(r),"".concat(e.projectName,"-installation-").concat(t,".json"));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return i?(0,r.jsxs)(U,{children:[(0,r.jsx)(M,{}),(0,r.jsx)(P.Z,{type:"Grid",color:"#000",height:45,width:45,visible:!0})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(M,{}),(0,r.jsx)(w.ZP,{cols:4,children:(0,q.Dy)(e).map((function(n){return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsxs)(w.ZP.Row,{collapse:"992",gutter:[],align:"center",children:[(0,r.jsx)(w.ZP.Col,{span:1,children:(0,r.jsx)(B,{children:n.display})}),(0,r.jsxs)(w.ZP.Col,{span:3,children:[(0,r.jsx)(I,{size:"medium",variant:"grey",onClick:function(){return l(n.name)},children:"Copy"}),"\xa0",(0,r.jsx)(I,{size:"medium",variant:"grey",onClick:function(){return u(n.name)},children:"Download"}),"\xa0\xa0",(0,r.jsx)(j.G,{color:"green",icon:y.f8k,title:"Ready"}),"\xa0",(0,r.jsx)(K,{children:"Ready"})]})]}),(0,r.jsx)("br",{})]},n.name)}))}),(0,r.jsxs)(z.Z,{children:["For more information on how to use these details, or for the public endpoints associated to your client, see"," ",(0,r.jsx)(T.ZP,{href:"https://github.com/bcgov/sso-requests/blob/dev/docs/developer-guide.md#using-your-integration",external:!0,children:"here"}),"."]})]})})),Y=t(4826),J=t(98806);function X(){var n=(0,a.Z)(["\n  background-color: black;\n"]);return X=function(){return n},n}function W(){var n=(0,a.Z)(["\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n"]);return W=function(){return n},n}function V(){var n=(0,a.Z)(["\n  margin-right: 20px;\n"]);return V=function(){return n},n}function $(){var n=(0,a.Z)(["\n  color: #000;\n  font-size: 1.1rem;\n  font-weight: bold;\n"]);return $=function(){return n},n}function Q(){var n=(0,a.Z)(["\n  height: var(--field-top-spacing);\n"]);return Q=function(){return n},n}var nn=i.default.div(Q()),en=i.default.span($()),tn=(0,i.default)(j.G)(V()),rn=i.default.div(W()),on=i.default.hr(X()),an=(0,R.h)((function(n){var e=n.selectedRequest,t=n.alert,a=(0,o.useState)(null),i=a[0],c=a[1],s=(0,q.Dy)(e),l=function(){var n=(0,b.Z)(v().mark((function n(){var r,o,a,c,s,l;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,C(e.id,(null===i||void 0===i?void 0:i.name)||null);case 2:r=n.sent,o=(0,g.Z)(r,2),a=o[0],c=o[1],s=c?"danger":"success",l=c?"Failed to regenerate secret":"Client Secret Successfully Updated",t.show({variant:s,fadeOut:1e4,closable:!0,content:l}),window.location.hash="#",console.log(a,c);case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(rn,{children:[(0,r.jsx)(tn,{icon:y.eHv,color:"black",title:"Warning",size:"2x"}),(0,r.jsxs)("strong",{children:["You're About to Change Your Client Secret for Your ",null===i||void 0===i?void 0:i.display," Environment."]})," "]}),(0,r.jsx)(on,{}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Once you change your secret, your previous secret will no longer be valid for any applications using it."}),(0,r.jsx)("li",{children:"This means you will need to update any applications using this client with the new JSON details before they are functional again."})]})]});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(nn,{}),s.map((function(n){return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsxs)(en,{children:[n.display,": "]}),!e.publicAccess&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsx)(Y.ZP,{type:"button",onClick:function(){return function(n){c(n),window.location.hash="confirm-new-secret"}(n)},children:"Change your client secret"})]}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]},n.name)}))]}),(0,r.jsx)(J.Z,{id:"confirm-new-secret",content:u,onConfirm:l,icon:y.eHv,title:"You're About to Change Your Client Secret",closable:!0})]})})),cn=function(n){switch(n){case"draft":return"In Draft";case"applied":return"Completed";default:return"Submitted"}},sn=t(90032),ln=t(87522),un=t(98224),dn=t(25367);function fn(n){var e=n.requestId,t=(0,o.useState)(!1),a=t[0],i=t[1],c=(0,o.useState)(!1),s=c[0],l=c[1],u=(0,o.useState)([]),d=u[0],f=u[1],p=function(){var n=(0,b.Z)(v().mark((function n(){var t,r,o;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return");case 2:return i(!0),n.next=5,(0,ln.v)({requestId:e,eventCode:"request-update-success",clearNotifications:!0});case 5:t=n.sent,r=(0,g.Z)(t,2),o=r[0],r[1]?l(!0):o&&f(o.rows),i(!1);case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,o.useEffect)((function(){p()}),[e]),s?(0,r.jsx)(x,{variant:"warning",content:"Failed to load details."}):a?(0,r.jsx)(un.Z,{}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(dn.Z,{events:d})})}var pn=t(20374),hn=t(85330),xn=t(32781),mn=t(51479),vn=t(65982);function gn(){var n=(0,a.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0;\n\n  & p {\n    max-width: 90%;\n    margin: 5px 0;\n  }\n"]);return gn=function(){return n},n}function bn(){var n=(0,a.Z)(["\n  height: ",";\n  width: ",";\n  border-radius: ",";\n  margin: ",";\n  margin-left: 0;\n  border: 2px solid #b3b3b3;\n"]);return bn=function(){return n},n}var jn="15px",yn=i.default.div(bn(),jn,jn,jn,"0"),wn=i.default.li(gn());function Pn(n){var e=n.request.updatedAt,t=new Date(e||"").toLocaleString();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(mn.Z,{now:50}),(0,r.jsxs)(vn.Z,{children:["Last updated at ",t]}),(0,r.jsxs)(xn.Z,{children:[(0,r.jsxs)(wn,{children:["Requirements email sent to IDIM",(0,r.jsx)(j.G,{icon:y.f8k,color:"#00C45B"})]}),(0,r.jsxs)(wn,{children:[(0,r.jsxs)("p",{children:["Please reach out to IDIM if you do not hear back within the next 2-3 business days (",(0,r.jsx)(T.ZP,{href:"mailto:IDIM.Consulting@gov.bc.ca",children:"IDIM.Consulting@gov.bc.ca"}),")"]}),(0,r.jsx)(j.G,{icon:y.FU$,color:"#b3b3b3"})]}),(0,r.jsxs)(wn,{children:[(0,r.jsx)("p",{children:"Access to prod"}),(0,r.jsx)(yn,{})]})]})]})}var Zn=t(3278),kn=t(41340);function Cn(){var n=(0,a.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n"]);return Cn=function(){return n},n}function Sn(){var n=(0,a.Z)(["\n  margin-top: 10px;\n"]);return Sn=function(){return n},n}var En=(0,i.default)(Zn.Z)(Sn()),On=i.default.div(Cn());var In=function(n){var e=n.integration,t=n.state,o=n.dispatch,a=t.panelTab;if(!e)return null;var i=e.status,s=e.bceidApproved,l=cn(i||"draft"),u=(0,q.Jx)(null===e||void 0===e?void 0:e.realm)&&e.prod&&!s,d=null;return"In Draft"===l?d=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsxs)(x,{variant:"info",children:[(0,r.jsx)("div",{children:(0,r.jsx)("strong",{children:"Your request has not been submitted."})}),(0,r.jsx)("div",{children:'To complete your request, click "Edit" button.'})]})]}):"Submitted"===l?d=(0,r.jsx)(pn.H,{activeKey:"Integration-request-summary",children:(0,r.jsx)(c.Z,{eventKey:"Integration-request-summary",title:"Integration Request Summary",children:(0,r.jsx)(On,{children:u?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(hn.wk,{number:1,title:"Access to Dev and/or Test environment(s) - approx 20 mins",variant:"secondary",children:[(0,r.jsx)(sn.Z,{selectedRequest:e}),(0,r.jsx)("br",{})]}),(0,r.jsx)(hn.wk,{number:2,title:"Access to Prod environment - (TBD)",variant:"secondary",children:(0,r.jsx)(Pn,{request:e})})]}):(0,r.jsx)(sn.Z,{selectedRequest:e,title:"Access to environment(s) - approx 20 mins"})})})}):"Completed"===l&&(d=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(pn.H,{activeKey:a,onSelect:function(n){return o((0,kn.r)(n))},children:[(0,r.jsx)(c.Z,{eventKey:"installation-json",title:"Installation JSON",children:(0,r.jsx)(On,{children:(0,r.jsx)(H,{selectedRequest:e})})}),!e.publicAccess&&(0,r.jsx)(c.Z,{eventKey:"configuration-url",title:"Secrets",children:(0,r.jsx)(On,{children:(0,r.jsx)(an,{selectedRequest:e})})}),(0,r.jsx)(c.Z,{eventKey:"history",title:"History",children:(0,r.jsx)(On,{children:(0,r.jsx)(fn,{requestId:e.id})})})]}),u&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(En,{children:"Production Status"}),(0,r.jsx)(Pn,{request:e})]})]})),d},Nn=t(96486),Fn=t(23451),Dn=t(11163),qn=t(61408),Rn=t(6645);function zn(){var n=(0,a.Z)(["\n  color: #006fc4;\n  height: 60px;\n  padding-left: 20px;\n  padding-top: 16px;\n  padding-bottom: 22px;\n  weight: 700;\n  background-color: #f8f8f8;\n"]);return zn=function(){return n},n}function Tn(){var n=(0,a.Z)(["\n  color: #a12622;\n  height: 60px;\n  padding-left: 20px;\n  padding-top: 16px;\n  padding-bottom: 22px;\n  weight: 700;\n  background-color: #f2dede;\n"]);return Tn=function(){return n},n}function Gn(){var n=(0,a.Z)(["\n  margin: 0;\n"]);return Gn=function(){return n},n}function An(){var n=(0,a.Z)(["\n  text-align: center;\n  min-width: 100px;\n"]);return An=function(){return n},n}var _n=i.default.th(An()),Ln=i.default.p(Gn()),Un=i.default.div(Tn()),Bn=i.default.div(zn()),Kn=(0,r.jsxs)(Un,{children:[(0,r.jsx)(j.G,{icon:y.RLE,title:"Unavailable"}),"\xa0 The system is unavailable at this moment. please refresh the page."]}),Mn=function(n){var e=n.message;return(0,r.jsxs)(Bn,{children:[(0,r.jsx)(j.G,{icon:y.sqG,title:"Information"}),"\xa0 ",e]})},Hn=function(n){var e=n.handleNewIntegrationClick,t=n.integrations;return t&&0!=(null===t||void 0===t?void 0:t.length)?(0,r.jsx)(hn.zx,{size:"large",onClick:e,variant:"callout",children:"+ Request SSO Integration"}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:(0,r.jsx)("b",{children:"To request an integration for a Standard Realm, you\u2019ll need the following information:"})}),(0,r.jsxs)("div",{style:{background:"#D9EDFD",textAlign:"center",padding:"16px"},children:[(0,r.jsxs)(w.ZP,{cols:2,style:{textAlign:"left"},children:[(0,r.jsxs)(w.ZP.Row,{collapse:"992",gutter:[],align:"top",children:[(0,r.jsxs)(w.ZP.Col,{span:1,children:[(0,r.jsx)(hn.wk,{number:1,title:"Project Information",children:null}),(0,r.jsxs)(Ln,{children:[(0,r.jsx)(j.G,{icon:y.LEp})," Project Name"]}),(0,r.jsxs)(Ln,{children:[(0,r.jsx)(j.G,{icon:y.LEp})," Project Team Members (Optional)"]}),(0,r.jsxs)(Ln,{children:[(0,r.jsx)(j.G,{icon:y.LEp})," Product Owner or Technical Contact"]})]}),(0,r.jsxs)(w.ZP.Col,{span:1,children:[(0,r.jsx)(hn.wk,{number:2,title:"Technical Info",children:null}),(0,r.jsxs)(Ln,{children:[(0,r.jsx)(j.G,{icon:y.LEp})," Client type (",(0,r.jsx)(T.ZP,{href:"https://github.com/bcgov/ocp-sso/wiki/Using-Your-SSO-Client#confidential-vs-private-client",children:"Public or Confidential, learn more"}),")"]}),(0,r.jsxs)(Ln,{children:[(0,r.jsx)(j.G,{icon:y.LEp})," Identity Provider (IDIR, Azure, BCeID or Basic)"]}),(0,r.jsxs)(Ln,{children:[(0,r.jsx)(j.G,{icon:y.LEp})," Environments (Development, Test, Production)"]}),(0,r.jsxs)(Ln,{children:[(0,r.jsx)(j.G,{icon:y.LEp})," Redirect URIs for selected environments"]})]})]}),(0,r.jsx)("p",{style:{marginTop:"1.25rem"},children:"*You\u2019ll be able to save and return your integration request, anytime throughout the request form."})]}),(0,r.jsx)(hn.zx,{size:"large",onClick:e,variant:"callout",children:"+ Request SSO Integration"})]})]})};function Yn(n){var e,t=n.setIntegration,a=n.state,i=n.dispatch,c=(0,Dn.useRouter)(),s=c.query.integr,l=(0,o.useState)(!0),u=l[0],d=l[1],f=(0,o.useState)([]),p=f[0],h=f[1],x=(0,o.useState)(null),m=(x[0],x[1]),j=(0,o.useState)(s&&Number(s)||void 0),y=j[0],w=j[1],P=a.downloadError,Z=function(){var n=(0,b.Z)(v().mark((function n(){return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c.push("/request");case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),k=function(n){m(n),w(n.id),t(n)},C=function(n){if(h(n||[]),y){var e=n.find((function(n){return(null===n||void 0===n?void 0:n.id)===y}));e?k(e):(null===n||void 0===n?void 0:n.length)>0&&k(n[0])}else(null===n||void 0===n?void 0:n.length)>0&&k(n[0])},S=function(){var n=(0,b.Z)(v().mark((function n(){var e,t,r;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d(!0),n.next=3,(0,Rn.XJ)();case 3:e=n.sent,t=(0,g.Z)(e,2),r=t[0],t[1]?i((0,kn.k)(!0)):C(r||[]),d(!1);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();(0,o.useEffect)((function(){S(),c.replace("/my-dashboard/integrations")}),[]),(0,o.useEffect)((function(){return(0,q.rn)(p||[])&&(clearInterval(e),e=setInterval((0,b.Z)(v().mark((function n(){var t,r,o;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,Rn.XJ)();case 2:t=n.sent,r=(0,g.Z)(t,2),o=r[0],r[1]?clearInterval(e):C(o||[]);case 7:case"end":return n.stop()}}),n)}))),5e3)),function(){e&&clearInterval(e)}}),[p,y]);var E=P?Kn:p&&0!==p.length?(0,r.jsxs)(Fn.Z,{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Request ID"}),(0,r.jsx)("th",{children:"Project Name"}),(0,r.jsx)("th",{children:"Status"}),(0,r.jsx)(_n,{children:"Actions"})]})}),(0,r.jsx)("tbody",{children:null===p||void 0===p?void 0:p.map((function(n){return(0,r.jsxs)("tr",{className:y===n.id?"active":"",onClick:function(){return k(n)},children:[(0,r.jsx)("td",{children:(0,Nn.padStart)(String(n.id),8,"0")}),(0,r.jsx)("td",{children:n.projectName}),(0,r.jsx)("td",{children:cn(n.status||"draft")}),(0,r.jsx)("td",{children:(0,r.jsx)(qn.ZP,{request:n,onDelete:function(){S()}})})]},n.id)}))})]}):(0,r.jsx)(Mn,{message:"No Requests Submitted"});return u?(0,r.jsx)(un.Z,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsx)(Hn,{handleNewIntegrationClick:Z,integrations:p}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),E]})}var Jn=t(86701);var Xn=function(n){n.currentUser;var e=(0,o.useState)(null),t=e[0],a=e[1];return(0,r.jsx)(Jn.Z,{tab:"integrations",leftPanel:function(n,e){return(0,r.jsx)(Yn,{setIntegration:a,state:n,dispatch:e})},rightPanel:function(n,e){return t&&(0,r.jsx)(In,{integration:t,state:n,dispatch:e})}})}},34226:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-dashboard/integrations",function(){return t(12512)}])},51479:function(n,e,t){"use strict";var r=t(22122),o=t(19756),a=t(94184),i=t.n(a),c=t(67294),s=t(76792),l=t(53439),u=["min","now","max","label","srOnly","striped","animated","className","style","variant","bsPrefix"],d=["isChild"],f=["min","now","max","label","srOnly","striped","animated","bsPrefix","variant","className","children"];function p(n,e,t){var r=(n-e)/(t-e)*100;return Math.round(1e3*r)/1e3}function h(n,e){var t,a=n.min,s=n.now,l=n.max,d=n.label,f=n.srOnly,h=n.striped,x=n.animated,m=n.className,v=n.style,g=n.variant,b=n.bsPrefix,j=(0,o.default)(n,u);return c.createElement("div",(0,r.default)({ref:e},j,{role:"progressbar",className:i()(m,b+"-bar",(t={},t["bg-"+g]=g,t[b+"-bar-animated"]=x,t[b+"-bar-striped"]=x||h,t)),style:(0,r.default)({width:p(s,a,l)+"%"},v),"aria-valuenow":s,"aria-valuemin":a,"aria-valuemax":l}),f?c.createElement("span",{className:"sr-only"},d):d)}var x=c.forwardRef((function(n,e){var t=n.isChild,a=(0,o.default)(n,d);if(a.bsPrefix=(0,s.vE)(a.bsPrefix,"progress"),t)return h(a,e);var u=a.min,p=a.now,x=a.max,m=a.label,v=a.srOnly,g=a.striped,b=a.animated,j=a.bsPrefix,y=a.variant,w=a.className,P=a.children,Z=(0,o.default)(a,f);return c.createElement("div",(0,r.default)({ref:e},Z,{className:i()(w,j)}),P?(0,l.U)(P,(function(n){return(0,c.cloneElement)(n,{isChild:!0})})):h({min:u,now:p,max:x,label:m,srOnly:v,striped:g,animated:b,bsPrefix:j,variant:y},e))}));x.displayName="ProgressBar",x.defaultProps={min:0,max:100,animated:!1,isChild:!1,srOnly:!1,striped:!1},e.Z=x}},function(n){n.O(0,[337,284,467,774,888,179],(function(){return e=34226,n(n.s=e);var e}));var e=n.O();_N_E=e}]);