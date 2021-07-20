(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12],{40602:function(e,t,n){"use strict";var r=n(27261);function i(){var e=(0,r.Z)(["\n  display: block;\n  max-width: 100% !important;\n\n  ","\n"]);return i=function(){return e},e}var o=n(29163).default.div(i(),(function(e){return e.rules.map((function(t,n){return 0===n?"@media only screen and (max-width: ".concat(t.maxWidth,"px) {\n          & {\n            width: auto !important;\n            margin-left: 1em !important;\n            margin-right: 1em !important;\n          }\n        }"):n===e.rules.length-1?"@media only screen and (min-width: ".concat((e.rules[n-1].maxWidth||0)+1,"px) {\n          & {\n            width: ").concat(t.width,"px;\n            margin-left: auto !important;\n            margin-right: auto !important;\n          }\n        }"):"@media only screen and (min-width: ".concat((e.rules[n-1].maxWidth||0)+1,"px) and (max-width: ").concat(t.maxWidth,"px) {\n          & {\n            width: ").concat(t.width,"px;\n            margin-left: auto !important;\n            margin-right: auto !important;\n          }\n        }")}))}));t.Z=o},25463:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(85893),i=n(27261),o=n(4826),a=n(29163),u=n(31607);function c(){var e=(0,i.Z)(["\n  margin-left: 10px;\n  min-width: 150px;\n"]);return c=function(){return e},e}var s=(0,a.default)(o.ZP)(c());function l(e){var t=e.show,n=e.loading,i=e.text,a=e.handleSubmit,c=e.handleBackClick;return(0,r.jsx)(r.Fragment,{children:t&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.ZP,{variant:"secondary",size:"small",type:"button",onClick:c,children:i.back}),(0,r.jsx)(s,{variant:"primary",size:"small",onClick:a,children:n?(0,r.jsx)(u.Z,{type:"Grid",color:"#FFF",height:18,width:50,visible:!0}):(0,r.jsx)(r.Fragment,{children:i.continue})})]})})}},17849:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(26265),i=n(85893),o=n(24184),a=n(11915);n(67294);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e){switch(e){case"checkbox":return"checked";case"file":return"files";default:return"value"}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={TextWidget:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=s(t);return function(r){var o=r.value,a=r.onChange,u=r.label,s=r.schema,l=r.options,d=r.required,p=r.disabled,f=r.onBlur,h=r.id,v=void 0===h?"":h,m=s.pattern,b=s.minLength,x=s.maxLength,y=l.enumOptions,j=void 0===y?[]:y,g={onChange:function(e){var t=e.target[n];""===t&&(t=void 0),"true"===t&&(t=!0),"false"===t&&(t=!1),a(t)},label:u,name:name,maxLength:x,id:v,required:d,disabled:p,minLength:b,type:t,pattern:m,onBlur:f,value:o||void 0,checked:"undefined"!==typeof o&&o};return"file"===t&&delete g.value,"checkbox"===t&&(g.value=!0),"radio"===t?(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{children:u}),j.map((function(t){return(0,i.jsx)(e,c(c({},g),{},{label:t.label,value:t.value,checked:t.value===o,style:{padding:"2px 0"},size:"small",onBlur:f}),t.value)}))]}):(0,i.jsx)(e,c(c({},g),{},{fullWidth:!0,onBlur:f&&function(e){return f(v,e.target.value)},children:j&&j.map((function(e){var t=e.value,n=e.label;return(0,i.jsx)("option",{value:t,children:n},t)}))}))}}(a.ZP,"input")};function f(e){return(0,i.jsx)(o.ZP,d(d({},e),{},{widgets:p}))}},71332:function(e,t,n){"use strict";n.r(t),n.d(t,{RequestsContext:function(){return ve},default:function(){return me}});var r=n(85893),i=n(809),o=n.n(i),a=n(92447),u=n(27261),c=n(67294),s=n(11163),l=n(64735),d=n(4826),p=(n(96486),n(29163)),f=n(6645);n(84391);function h(){var e=(0,u.Z)(["\n  width: 100%;\n  background: #ffffff;\n  margin: 1em 0em;\n  border: 1px solid rgba(34, 36, 38, 0.15);\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  border-radius: 0.28571429rem;\n  text-align: left;\n  color: rgba(0, 0, 0, 0.87);\n  border-collapse: separate;\n  border-spacing: 0px;\n\n  th:first-child,\n  td:first-child {\n    padding-left: 1em;\n  }\n\n  & th,\n  & td {\n    -webkit-transition: background 0.1s ease, color 0.1s ease;\n    transition: background 0.1s ease, color 0.1s ease;\n  }\n"]);return h=function(){return e},e}var v=p.default.table(h()),m=n(40602),b=n(17625),x=n(51436);function y(){var e=(0,u.Z)(["\n  padding-left: 10px;\n  color: #777777;\n  cursor: pointer;\n  &:hover {\n    color: #137ac8;\n  }\n"]);return y=function(){return e},e}function j(){var e=(0,u.Z)(["\n  border-right: 1px solid #777777;\n  padding-right: 10px;\n  color: #777777;\n  cursor: not-allowed;\n"]);return j=function(){return e},e}function g(){var e=(0,u.Z)(["\n  height: 100%;\n  display: flex;\n"]);return g=function(){return e},e}var w=p.default.div(g()),O=((0,p.default)(b.G)(j()),(0,p.default)(b.G)(y()));function P(e){var t=e.request,n=(0,c.useContext)(ve),i=n.state,o=n.dispatch,a=(0,s.useRouter)(),u=i,l=u.editingRequest,d=u.selectedRequest;return(0,r.jsx)(w,{children:(0,r.jsx)(O,{icon:x.Xcf,size:"2x",role:"button","aria-label":"edit",onClick:function(e){e.stopPropagation(),"draft"!==t.status?(null===d||void 0===d?void 0:d.id)===t.id?o({type:"setEditingRequest",payload:!l}):(o({type:"setEditingRequest",payload:!0}),o({type:"setRequest",payload:t})):a.push("/request/".concat(t.id))}})})}var Z=n(38347),k=n(26265);function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){(0,k.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R=function(e,t){switch(t.type){case"setRequests":return C(C({},e),{},{requests:t.payload});case"setRequest":return C(C({},e),{},{selectedRequest:t.payload});case"setEditingRequest":return C(C({},e),{},{editingRequest:t.payload});case"setUpdatingUrls":return C(C({},e),{},{updatingUrls:t.payload});case"updateRequest":var n=t.payload,r=n.id,i=(0,Z.Z)(n,["id"]),o=e.requests,a=C(C({},e.selectedRequest),i),u=null===o||void 0===o?void 0:o.map((function(e){return e.id===r?a:e}));return C(C({},e),{},{requests:u,selectedRequest:a});default:return e}},D=n(54108),E=n(56841),U=n(17849),I=n(95409);function S(e,t){var n=(0,I.Hp)(e);return{type:"object",properties:(0,k.Z)({},n,{type:"array",items:{type:"string",format:"url"},additionalItems:{type:"string"},default:t})}}function B(){var e=(0,u.Z)(["\n  margin: 0;\n  font-size: 16px;\n  font-weight: lighter;\n  padding-left: 10px;\n  color: #bbbbbb;\n"]);return B=function(){return e},e}function N(){var e=(0,u.Z)(["\n  padding: 15px 0 0 10px;\n"]);return N=function(){return e},e}function F(){var e=(0,u.Z)(["\n  display: flex;\n  align-items: start;\n  &:hover {\n    cursor: pointer;\n  }\n  margin-top: 10px;\n"]);return F=function(){return e},e}function _(){var e=(0,u.Z)(["\n  display: grid;\n  grid-template-columns: 4fr 1fr;\n"]);return _=function(){return e},e}var G=p.default.div(_()),W=p.default.div(F()),z=(0,p.default)(W)(N()),A=p.default.p(B());function H(e){e.TitleField,e.title;return(0,r.jsxs)("div",{children:[e.items.map((function(e){return(0,r.jsx)("div",{children:e.hasRemove&&(0,r.jsxs)(G,{children:[e.children,e.index>0&&(0,r.jsx)(z,{onClick:e.onDropIndexClick(e.index),children:(0,r.jsx)(b.G,{style:{color:"red"},icon:x.uMC})})]})},e.index)})),e.canAdd&&(0,r.jsxs)(W,{onClick:e.onAddClick,children:[(0,r.jsx)(b.G,{style:{color:"#006fc4"},icon:x.KtF,onClick:e.onAddClick}),(0,r.jsx)(A,{children:"Add another URL"})]})]})}var L=n(25463),T=n(69696),J=n(97415),X=n(74150),M=n(31607),K=n(70513),Q=n(9186),V=function(){var e=(0,a.Z)(o().mark((function e(t,n){var r,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,Q.g)(),e.prev=1,e.next=4,K.e.post("installation",{requestId:t,environment:n},r).then((function(e){return e.data}));case 4:return i=e.sent,e.abrupt("return",i);case 8:return e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),Y=function(e){var t=e.requestId,n=e.environment,i=e.panelEnv,u=(0,c.useState)(null),s=u[0],l=u[1],p=(0,c.useState)(!0),f=p[0],h=p[1],v=function(){var e=(0,a.Z)(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),l(null),e.next=4,V(t,n);case 4:r=e.sent,l(r),h(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=s?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("pre",{children:$(s)}),(0,r.jsx)(d.ZP,{variant:"primary-inverse",size:"small",onClick:function(){!function(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy"),document.body.removeChild(t)}catch(n){return document.body.removeChild(t),!1}}($(s))},children:"Copy"}),(0,r.jsx)(d.ZP,{variant:"primary",size:"small",onClick:function(){!function(e,t){var n=window.URL.createObjectURL(new Blob([e],{type:"application/json"})),r=document.createElement("a");r.href=n,r.setAttribute("download",t),document.body.appendChild(r),r.click(),document.body.removeChild(r)}($(s),"installation-".concat(n,".json"))},children:"Download"})]}):(0,r.jsx)(J.ZP,{variant:"info",content:"Failed to load installation JSON"});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(T.ZP,{id:"installation-json-".concat(i),children:[(0,r.jsxs)(T.ZP.Header,{children:["Installation JSON ",(0,r.jsx)(T.ZP.Close,{onClick:function(){l(null)},children:"Close"})]}),(0,r.jsxs)(T.ZP.Content,{children:[(0,r.jsx)(M.Z,{type:"Grid",color:"#000",height:45,width:45,visible:f}),!f&&m]})]}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(X.ZP,{href:"#installation-json-".concat(i),content:"Click for Installation",size:"medium",onClick:v})]})};function $(e){return JSON.stringify(e,void 0,2)}function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){(0,k.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ne(){var e=(0,u.Z)(["\n  padding: 10px;\n"]);return ne=function(){return e},e}function re(){var e=(0,u.Z)(["\n  list-style-type: none;\n  margin: 0;\n  & > li {\n    border-bottom: 1px solid grey;\n  }\n"]);return re=function(){return e},e}var ie=p.default.ul(re()),oe=p.default.div(ne()),ae=function(e){var t=e.panelEnv,n=e.environment,i=(0,c.useContext)(ve),u=i.state,s=i.dispatch,l=u,d=l.editingRequest,p=l.requests,h=l.selectedRequest,v=l.updatingUrls,m=h||{},b=m[(0,I.Hp)(n)],x=(0,c.useState)({}),y=x[0],j=x[1],g=function(){var e=(0,a.Z)(o().mark((function e(t,n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"setUpdatingUrls",payload:!0}),s({type:"updateRequest",payload:te(te({},t.formData),{},{id:m.id})}),e.next=4,(0,f.WN)(te(te({},t.formData),{},{id:m.id}),m);case 4:e.sent,s({type:"setUpdatingUrls",payload:!1}),s({type:"setEditingRequest",payload:!1});case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){var e=m[(0,I.Hp)(n)];S(n,e);j(S(n,e))}),[n,p,m,v]),m?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(oe,{children:d?(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Urls"}),(0,r.jsx)(U.Z,{schema:y,ArrayFieldTemplate:H,onSubmit:function(e){return g(e,y)},children:(0,r.jsx)(L.Z,{show:!0,loading:v||!1,text:{continue:"Submit",back:"Cancel"},handleBackClick:function(){s({type:"setEditingRequest",payload:!1})}})})]}):(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Urls"}),(null===b||void 0===b?void 0:b.length)>0?(0,r.jsx)(ie,{children:b.map((function(e){return(0,r.jsx)("li",{children:e},e)}))}):(0,r.jsx)("span",{children:"No Urls"}),m.id&&"completed"===m.status&&(0,r.jsx)(Y,{requestId:m.id,panelEnv:t,environment:n})]})})}):null},ue=[{title:"Dev Configuration",name:"dev"},{title:"Test Configuration",name:"test"},{title:"Prod Configuration",name:"prod"}];var ce=function(){var e=(0,c.useContext)(ve).state,t=(0,c.useState)(ue[0].name),n=t[0],i=t[1],o=e,a=o.selectedRequest;return o.requests,a?(0,r.jsx)(D.Z,{children:ue.map((function(e){return(0,r.jsx)(E.Z,{eventKey:e.title,title:e.title,onEnter:function(){return function(e){i(e)}(e.name)},children:(0,r.jsx)(ae,{panelEnv:e.name,environment:n})},e.title)}))}):null};function se(){var e=(0,u.Z)(["\n  background-color: ",";\n"]);return se=function(){return e},e}function le(){var e=(0,u.Z)(["\n  & > li {\n    margin-bottom: 0 !important;\n  }\n"]);return le=function(){return e},e}function de(){var e=(0,u.Z)(["\n  font-size: 1.2em;\n  font-weight: 600;\n"]);return de=function(){return e},e}var pe=[{maxWidth:767},{maxWidth:991,width:980},{maxWidth:1199,width:1100},{width:1400}],fe=p.default.div(de()),he=(p.default.ul(le()),p.default.tr(se(),(function(e){return e.active?"#ffed9f":"#f8f8f8"}))),ve=c.createContext({});var me=function(e){e.currentUser;var t=(0,s.useRouter)(),n=(0,c.useState)(!1),i=n[0],u=n[1],p=(0,c.useReducer)(R,{}),h=p[0],b=p[1],x=h.requests,y=void 0===x?{}:x,j=h.selectedRequest,g=(0,c.useMemo)((function(){return{state:h,dispatch:b}}),[h,b]);(0,c.useEffect)((function(){(function(){var e=(0,a.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,(0,f.XJ)();case 3:if(e.t0=e.sent,e.t0){e.next=6;break}e.t0={};case 6:t=e.t0,b({type:"setRequests",payload:t}),u(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var w=function(){var e=(0,a.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((null===j||void 0===j?void 0:j.id)!==t.id){e.next=2;break}return e.abrupt("return");case 2:b({type:"setRequest",payload:t});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=(0,a.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.push("/request");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(i)return"loading...";var Z=j&&"draft"!==j.status;return(0,r.jsxs)(m.Z,{rules:pe,children:[(0,r.jsx)(d.ZP,{variant:"primary-inverse",size:"small",onClick:O,children:"+ Create New..."}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(ve.Provider,{value:g,children:(0,r.jsx)(l.ZP,{cols:Z?2:1,gutter:[5,2],children:(0,r.jsxs)(l.ZP.Row,{collapse:"800",children:[(0,r.jsxs)(l.ZP.Col,{children:[(0,r.jsx)(fe,{children:"My Request List"}),(0,r.jsxs)(v,{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Request ID"}),(0,r.jsx)("th",{children:"Project Name"}),(0,r.jsx)("th",{children:"Status"}),(0,r.jsx)("th",{children:"Actions"})]})}),(0,r.jsx)("tbody",{children:y.length>0?y.map((function(e){return(0,r.jsxs)(he,{active:(null===j||void 0===j?void 0:j.id)===e.id,onClick:function(){return w(e)},children:[(0,r.jsx)("td",{children:e.id}),(0,r.jsx)("td",{children:e.projectName}),(0,r.jsx)("td",{children:e.status}),(0,r.jsx)("td",{children:(0,r.jsx)(P,{request:e})})]},e.id)})):(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:10,children:"No requests found"})})})]})]}),Z&&(0,r.jsx)(l.ZP.Col,{children:(0,r.jsx)(ce,{})})]})})})]})}},84391:function(e,t){"use strict";t.Z={type:"object",required:["devRedirectUrls","testRedirectUrls","prodRedirectUrls"],properties:{realm:{type:"string",title:"Identity Providers Required",enum:["onestopauth","bceidbasic","bceidbusiness","bceidboth"],enumNames:["IDIR/GitHub","IDIR/GitHub + BCeID Basic","IDIR/GitHub + BCeID Business","IDIR/GitHub + BCeID Both"],default:"onestopauth"},devRedirectUrls:{type:"array",title:"Dev Redirect Urls",items:{type:"string",format:"url"},additionalItems:{type:"string"},default:[""]},testRedirectUrls:{type:"array",title:"Test Redirect Urls",items:{type:"string",format:"url"},additionalItems:{type:"string"},default:[""]},prodRedirectUrls:{type:"array",title:"Prod Redirect Urls",items:{type:"string",format:"url"},additionalItems:{type:"string"},default:[""]}}}},6645:function(e,t,n){"use strict";n.d(t,{hG:function(){return p},A_:function(){return f},XJ:function(){return h},WN:function(){return v}});var r=n(809),i=n.n(r),o=n(26265),a=n(92447),u=n(70513),c=n(9186),s=n(95409);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(){var e=(0,a.Z)(i().mark((function e(t){var n,r,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,c.g)(),r=(0,s.hD)(t),e.prev=2,e.next=5,u.e.post("requests",d({},r),n).then((function(e){return e.data}));case 5:return o=e.sent,e.abrupt("return",(0,s.UB)(o));case 9:return e.prev=9,e.t0=e.catch(2),console.error(e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,c.g)(),e.prev=1,e.next=4,u.e.post("request",{requestId:t},n).then((function(e){return e.data}));case 4:return r=e.sent,e.abrupt("return",(0,s.UB)(r));case 8:return e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,a.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,c.g)(),e.prev=1,e.next=4,u.e.get("requests",t).then((function(e){return e.data}));case 4:return n=e.sent,e.abrupt("return",n.map(s.UB));case 8:return e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)(i().mark((function e(t,n){var r,o,a,l,d,p=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=p.length>2&&void 0!==p[2]&&p[2],o=(0,s.hD)(t,n),console.log("processed data is",t),a=(0,c.g)(),e.prev=4,l=r?"requests?submit=true":"requests",e.next=8,u.e.put(l,o,a).then((function(e){return e.data}));case 8:return d=e.sent,e.abrupt("return",(0,s.UB)(d));case 12:return e.prev=12,e.t0=e.catch(4),console.error(e.t0),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t,n){return e.apply(this,arguments)}}()},66810:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-requests",function(){return n(71332)}])}},function(e){e.O(0,[523,101,430,774,888,179],(function(){return t=66810,e(e.s=t);var t}));var t=e.O();_N_E=t}]);