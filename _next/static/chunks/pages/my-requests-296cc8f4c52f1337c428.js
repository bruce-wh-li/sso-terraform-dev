(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12],{3083:function(n,e,t){"use strict";t.d(e,{Z:function(){return y}});var r=t(85893),i=t(27261),o=t(17625),u=t(51436),a=t(29163),c=t(67294);function s(){var n=(0,i.Z)(["\n  font-weight: bold;\n  font-size: 1rem;\n  margin: 0;\n"]);return s=function(){return n},n}function d(){var n=(0,i.Z)(["\n  display: inline-block;\n  margin: 0;\n  margin-top: 5px;\n  font-size: 16px;\n  font-weight: lighter;\n  padding-left: 10px;\n  color: #bbbbbb;\n"]);return d=function(){return n},n}function l(){var n=(0,i.Z)(["\n  position: absolute;\n  right: 10px;\n  top: 10px;\n"]);return l=function(){return n},n}function p(){var n=(0,i.Z)(["\n  display: inline-block;\n  &:hover {\n    cursor: pointer;\n  }\n  margin-top: 0;\n"]);return p=function(){return n},n}function f(){var n=(0,i.Z)(["\n  margin: 0;\n"]);return f=function(){return n},n}function h(){var n=(0,i.Z)(["\n  position: relative;\n  width: 100%;\n  max-width: 400px;\n"]);return h=function(){return n},n}var x=a.default.div(h()),v=a.default.p(f()),b=a.default.div(p()),m=(0,a.default)(b)(l()),j=a.default.p(d()),g=a.default.legend(s());function y(n){var e=n.title,t=n.schema.description;return(0,r.jsxs)("div",{children:[e&&(0,r.jsx)(g,{children:e}),t&&(0,r.jsx)(v,{children:t}),n.items.map((function(n){return(0,r.jsx)(c.Fragment,{children:n.hasRemove&&(0,r.jsxs)(x,{children:[n.children,n.index>0&&(0,r.jsx)(m,{onClick:n.onDropIndexClick(n.index),children:(0,r.jsx)(o.G,{style:{color:"red"},icon:u.uMC})})]})},n.index)})),n.canAdd&&(0,r.jsxs)(b,{onClick:n.onAddClick,children:[(0,r.jsx)(o.G,{style:{color:"#006fc4"},icon:u.KtF,onClick:n.onAddClick}),(0,r.jsx)(j,{children:"Add another URI"})]})]})}},25463:function(n,e,t){"use strict";t.d(e,{Z:function(){return x}});var r=t(85893),i=t(27261),o=t(4826),u=t(29163),a=t(31607),c=t(30454);function s(){var n=(0,i.Z)(["\n  margin-top: ",";\n"]);return s=function(){return n},n}function d(){var n=(0,i.Z)(["\n  min-width: 150px;\n  background-color: #b2b2b2;\n  color: white;\n  box-shadow: none !important;\n\n  &:hover {\n    box-shadow: 0px 0px 0px 2px #006fc4 inset !important;\n    background-color: #b2b2b2;\n  }\n"]);return d=function(){return n},n}function l(){var n=(0,i.Z)(["\n  margin-left: 10px;\n  min-width: 150px;\n"]);return l=function(){return n},n}var p=(0,u.default)(o.ZP)(l()),f=(0,u.default)(o.ZP)(d()),h=u.default.div(s(),c.oc);function x(n){var e=n.show,t=n.loading,i=n.text,o=n.handleSubmit,u=n.handleBackClick,c=n.formSubmission;return(0,r.jsx)(r.Fragment,{children:e&&(0,r.jsxs)(h,{children:[(0,r.jsx)(f,{variant:"secondary",size:"small",type:"button",onClick:u,children:i.back}),(0,r.jsx)(p,{variant:"primary",size:"small",onClick:o,type:c?"submit":"button",children:t?(0,r.jsx)(a.Z,{type:"Grid",color:"#FFF",height:18,width:50,visible:!0}):(0,r.jsx)(r.Fragment,{children:i.continue})})]})})}},17849:function(n,e,t){"use strict";t.d(e,{Z:function(){return x}});var r=t(26265),i=t(85893),o=t(24184),u=t(11915);t(67294);function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n){switch(n){case"checkbox":return"checked";case"file":return"files";default:return"value"}}var d=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=s(e);return function(r){var o=r.value,u=r.onChange,a=r.label,s=r.schema,d=r.options,l=r.required,p=r.disabled,f=r.onBlur,h=r.id,x=void 0===h?"":h,v=r.readonly,b=s.pattern,m=s.minLength,j=s.maxLength,g=d.enumOptions,y=void 0===g?[]:g,w={onChange:function(n){var e=n.target[t];""===e&&(e=void 0),"true"===e&&(e=!0),"false"===e&&(e=!1),u(e)},label:a,name:name,maxLength:j,id:x,required:l,disabled:p,minLength:m,type:e,pattern:b,onBlur:f,readOnly:v,value:o||"",checked:"undefined"!==typeof o&&o};return"file"===e&&delete w.value,"checkbox"===e&&(w.value=!0),"radio"===e?(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{children:a}),y.map((function(e){return(0,i.jsx)(n,c(c({},w),{},{label:e.label,value:e.value,checked:e.value===o,style:{padding:"2px 0"},size:"small",readOnly:v,onBlur:f}),e.value)}))]}):(0,i.jsx)(n,c(c({},w),{},{onBlur:f&&function(n){return f(x,n.target.value)},children:y&&y.map((function(n){var e=n.value,t=n.label;return(0,i.jsx)("option",{value:e,children:t},e)}))}))}},l=t(15616);function p(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function f(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var h={TextWidget:d(u.ZP,"input"),EmailWidget:d(u.ZP,"email")};function x(n){return(0,i.jsx)(o.ZP,f(f({},n),{},{widgets:h,noHtml5Validate:!0,ErrorList:function(){return null},transformErrors:l.O5}))}},54383:function(n,e,t){"use strict";t.r(e),t.d(e,{RequestsContext:function(){return Sn},default:function(){return Un}});var r=t(85893),i=t(809),o=t.n(i),u=t(39227),a=t(92447),c=t(27261),s=t(67294),d=t(11163),l=t(17625),p=t(51436),f=t(64735),h=t(96486),x=t(29163),v=t(6645);function b(){var n=(0,c.Z)(["\n  width: 100%;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  text-align: left;\n  border-collapse: separate;\n  border-spacing: 0 5px;\n\n  & thead {\n    font-size: 12px;\n    color: #777777;\n  }\n\n  & tbody {\n    font-size: 16px;\n\n    tr {\n      height: 60px;\n      background-color: #f8f8f8;\n      &:hover {\n        background-color: #fff7d5;\n      }\n      &.active {\n        background-color: #ffed9f;\n      }\n    }\n  }\n\n  th:first-child,\n  td:first-child {\n    padding-left: 1em;\n  }\n\n  & th,\n  & td {\n    border: none;\n  }\n"]);return b=function(){return n},n}var m=x.default.table(b()),j=(0,t(83024).applyTheme)({shared:{button:"\n      border-radius: 0.222em;\n      border-width: 0;\n      padding: 0.6em 1.1em;\n      text-align: center;\n      text-decoration: none;\n      font-weight: 700;\n      letter-spacing: 1px;\n      display: inline-block;\n      cursor: pointer;\n      box-shadow: 0px 0px 0px 2px transparent inset, 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;\n    "},size:{xsmall:{button:"\n        font-size: 0.7rem;\n      "},small:{button:"\n        font-size: 0.8rem;\n      "},medium:{button:"\n        font-size: 1rem;\n      "},large:{button:"\n        font-size: 1.2rem;\n      "}},variant:{primary:{button:"\n        background-color: #D5EDFF;\n        box-shadow: 0px 0px 0px 2px #D5EDFF inset !important;\n        color: #3E3E3E;\n\n        &:hover {\n          text-decoration: underline;\n          background-color: #FFF7D5;\n          box-shadow: 0px 0px 0px 2px #FFF7D5 inset !important;\n          opacity: 0.80;\n        }\n\n        &:active {\n          opacity: 1;\n        }\n      "},grey:{button:"\n        background-color: #B2B2B2;\n        box-shadow: 0px 0px 0px 1px #707070 inset !important;\n        color: #F8F8F8;\n        width: 110px;\n\n        &:hover {\n          background-color: #006FC4;\n          box-shadow: 0px 0px 0px 1px #707070 inset !important;\n        }\n      "}}},{defaultProps:{variant:"primary",size:"medium"},breakProps:[],staticProps:["fullHeight","fullWidth"]}),g=t(40602),y=function(n){return{type:"setRequest",payload:n}},w=function(n){return{type:"setEditingRequest",payload:n}},O=function(n){return{type:"setUpdatingUrls",payload:n}};function Z(){var n=(0,c.Z)(["\n  padding-left: 10px;\n  cursor: pointer;\n  ","\n"]);return Z=function(){return n},n}function k(){var n=(0,c.Z)(["\n  border-right: 1px solid #777777;\n  padding-right: 10px;\n  color: #777777;\n  cursor: not-allowed;\n"]);return k=function(){return n},n}function P(){var n=(0,c.Z)(["\n  height: 100%;\n  display: flex;\n"]);return P=function(){return n},n}var q=x.default.div(P()),R=((0,x.default)(l.G)(k()),(0,x.default)(l.G)(Z(),(function(n){return n.disabled?"color: #CACACA;":"color: #777777;&:hover { color: #137ac8; }"})));function C(n){var e=n.request,t=(0,s.useContext)(Sn),i=t.state,o=t.dispatch,u=(0,d.useRouter)(),a=i,c=a.editingRequest,l=a.selectedRequest,f=["draft","applied"].includes(e.status||"");return(0,r.jsx)(q,{children:(0,r.jsx)(R,{disabled:!f,icon:p.Xcf,size:"2x",role:"button","aria-label":"edit",onClick:function(n){n.stopPropagation(),"draft"!==e.status?(null===l||void 0===l?void 0:l.id)===e.id?o(w(!c)):(o(w(!0)),o(y(e))):u.push("/request/".concat(e.id))}})})}var D=t(38347),F=t(26265);function E(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function S(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?E(Object(t),!0).forEach((function(e){(0,F.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var U=function(n,e){switch(e.type){case"setRequests":return S(S({},n),{},{requests:e.payload});case"setRequest":return S(S({},n),{},{selectedRequest:e.payload});case"setEditingRequest":return S(S({},n),{},{editingRequest:e.payload});case"setUpdatingUrls":return S(S({},n),{},{updatingUrls:e.payload});case"updateRequest":var t=e.payload,r=t.id,i=(0,D.Z)(t,["id"]),o=n.requests,u=S(S({},n.selectedRequest),i),a=null===o||void 0===o?void 0:o.map((function(n){return n.id===r?u:n}));return S(S({},n),{},{requests:a,selectedRequest:u});default:return n}},z=t(38782),N=t(56841),A=t(45624),T=t(31607),B=t(70513),I=t(9186),_=function(){var n=(0,a.Z)(o().mark((function n(e,t){var r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=(0,I.g)(),n.prev=1,n.next=4,B.e.post("installation",{requestId:e,environment:t},r).then((function(n){return n.data}));case 4:return i=n.sent,n.abrupt("return",[i,null]);case 8:return n.prev=8,n.t0=n.catch(1),console.error(n.t0),n.abrupt("return",[null,n.t0]);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e,t){return n.apply(this,arguments)}}(),G=function(n){return JSON.stringify(n,void 0,2)},L=function(n){var e=document.createElement("textarea");e.value=n,document.body.appendChild(e),e.focus(),e.select();try{return document.execCommand("copy"),document.body.removeChild(e),!0}catch(t){return document.body.removeChild(e),!1}},W=function(n,e){var t=window.URL.createObjectURL(new Blob([n],{type:"application/json"})),r=document.createElement("a");r.href=t,r.setAttribute("download",e),document.body.appendChild(r),r.click(),document.body.removeChild(r)},V=t(57120);function Y(){var n=(0,c.Z)(["\n  height: var(--field-top-spacing);\n"]);return Y=function(){return n},n}function X(){var n=(0,c.Z)(["\n  color: #3e3e3e;\n  font-size: 14px;\n  font-weight: 700;\n"]);return X=function(){return n},n}function H(){var n=(0,c.Z)(["\n  color: #000;\n  font-size: 1.1rem;\n"]);return H=function(){return n},n}function J(){var n=(0,c.Z)(["\n  text-align: center;\n"]);return J=function(){return n},n}var K=x.default.div(J()),M=x.default.span(H()),Q=x.default.span(X()),$=x.default.div(Y()),nn=function(n){var e=n.request,t=(0,s.useState)(!1),i=t[0],c=t[1],d=function(){var n=(0,a.Z)(o().mark((function n(t){var r,i,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(!0),n.next=3,_(e.id,t);case 3:return r=n.sent,i=(0,u.Z)(r,2),a=i[0],i[1],c(!1),n.abrupt("return",a);case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,a.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d(e);case 2:t=n.sent,L(G(t));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,a.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d(t);case 2:r=n.sent,W(G(r),"".concat(e.projectName,"-installation-").concat(t,".json"));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return i?(0,r.jsxs)(K,{children:[(0,r.jsx)($,{}),(0,r.jsx)(T.Z,{type:"Grid",color:"#000",height:45,width:45,visible:!0})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)($,{}),(0,r.jsx)(f.ZP,{cols:4,children:V.T.map((function(n){return(0,r.jsxs)(s.Fragment,{children:[(0,r.jsxs)(f.ZP.Row,{collapse:"992",gutter:[],children:[(0,r.jsx)(f.ZP.Col,{span:1,children:(0,r.jsx)(M,{children:n.display})}),(0,r.jsxs)(f.ZP.Col,{span:3,children:[(0,r.jsx)(j,{size:"xsmall",variant:"grey",onClick:function(){return h(n.name)},children:"Copy"}),"\xa0",(0,r.jsx)(j,{size:"xsmall",variant:"grey",onClick:function(){return x(n.name)},children:"Download"}),"\xa0\xa0",(0,r.jsx)(l.G,{color:"green",icon:p.f8k}),"\xa0",(0,r.jsx)(Q,{children:"Ready"})]})]}),(0,r.jsx)("br",{})]},n.name)}))})]})},en=t(17849),tn="^https?://.+",rn={type:"object",required:["devValidRedirectUris","testValidRedirectUris","prodValidRedirectUris"],properties:{devValidRedirectUris:{type:"array",title:"Development",items:{type:"string",pattern:tn},additionalItems:{type:"string",pattern:tn},default:[""]},testValidRedirectUris:{type:"array",title:"Test",items:{type:"string",pattern:tn},additionalItems:{type:"string",pattern:tn},default:[""]},prodValidRedirectUris:{type:"array",title:"Production",items:{type:"string",pattern:tn},additionalItems:{type:"string",pattern:tn},default:[""]}}},on=t(15616),un=t(3083),an=t(25463);function cn(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function sn(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?cn(Object(t),!0).forEach((function(e){(0,F.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):cn(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function dn(){var n=(0,c.Z)(["\n  color: #000;\n  font-size: 1.1rem;\n"]);return dn=function(){return n},n}function ln(){var n=(0,c.Z)(["\n  height: var(--field-top-spacing);\n"]);return ln=function(){return n},n}var pn=x.default.div(ln()),fn=x.default.span(dn()),hn=function(){var n=(0,d.useRouter)(),e=(0,s.useContext)(Sn),t=e.state,i=e.dispatch,c=t,l=c.editingRequest,p=c.selectedRequest,f=c.updatingUrls,h=p||{},x=function(){var e=(0,a.Z)(o().mark((function e(t){var r,a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(O(!0)),e.next=3,(0,v.WN)(sn(sn({},t.formData),{},{id:h.id}),!0);case 3:r=e.sent,a=(0,u.Z)(r,2),c=a[0],a[1]||(i({type:"updateRequest",payload:c}),n.push({pathname:"/my-requests",query:{id:h.id,mode:"edit"}})),i(O(!1)),i(w(!1));case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,r.jsx)(r.Fragment,{children:l?(0,r.jsx)(en.Z,{schema:rn,ArrayFieldTemplate:un.Z,formData:h,disabled:f,onSubmit:x,children:(0,r.jsx)(an.Z,{formSubmission:!0,show:!0,loading:f||!1,text:{continue:"Submit",back:"Cancel"},handleBackClick:function(){i(w(!1))}})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(pn,{}),V.T.map((function(n){var e=h[(0,on.qD)(n.name)]||[];return(0,r.jsxs)(s.Fragment,{children:[(0,r.jsx)(fn,{children:n.display}),(0,r.jsx)("ul",{children:e.length>0?e.map((function(n){return(0,r.jsx)("li",{className:"url",children:n},n)})):(0,r.jsx)("li",{children:"No valid redirect URIs"})}),(0,r.jsx)("br",{})]},n.name)}))]})})},xn=function(n){switch(n){case"draft":return"In Draft";case"applied":return"Active Project";default:return"Request Submitted"}};function vn(){var n=(0,c.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n"]);return vn=function(){return n},n}function bn(){var n=(0,c.Z)(["\n  .nav-link {\n    height: 30px !important;\n    font-size: 16px !important;\n    font-weight: 600 !important;\n    padding-top: 0; !important;\n    border-bottom: 1px solid #707070;\n    border-top: unset !important;\n    border-left: unset !important;\n    border-right: unset !important;\n  }\n  .nav-link.active {\n    background-color: unset !important;\n    border-bottom: 3px solid orange;\n  }\n"]);return bn=function(){return n},n}var mn=(0,x.default)(z.Z)(bn()),jn=x.default.div(vn()),gn=function(n){return(new Date).getTime()-new Date(n).getTime()},yn=3e5;var wn=function(n){var e=n.activeRequest;if((0,s.useContext)(Sn).state,!e)return null;var t=xn(e.status||"draft"),i=null;return"In Draft"===t?i=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsxs)(A.ZP,{variant:"info",children:[(0,r.jsx)("div",{children:(0,r.jsx)("strong",{children:"Your request has not been submitted."})}),(0,r.jsx)("div",{children:'To complete your request, click "Edit" button.'})]})]}):"Request Submitted"===t?i=e.prNumber?gn(e.updatedAt||"")>yn?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsx)(A.ZP,{variant:"info",children:(0,r.jsx)("div",{children:(0,r.jsx)("strong",{children:"Your URI request has been received and is under review."})})})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsxs)(A.ZP,{variant:"info",children:[(0,r.jsx)("div",{children:(0,r.jsx)("strong",{children:"Your request is successfully submitted."})}),(0,r.jsx)("div",{children:"Your updates will be ready in just a moment\u2026 However, if you experience a delay, don't hesitate to\n                contact us via the toolbar."})]})]}):gn(e.updatedAt||"")>yn?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsx)(A.ZP,{variant:"info",children:(0,r.jsx)("div",{children:(0,r.jsx)("strong",{children:"Your request has been received and is under review."})})})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsxs)(A.ZP,{variant:"info",children:[(0,r.jsx)("div",{children:(0,r.jsx)("strong",{children:"Your request is successfully submitted."})}),(0,r.jsx)("div",{children:"Your project will be ready in just a moment\u2026 However, if you experience a delay, don't hesitate to\n                contact us via the toolbar."})]})]}):"Active Project"===t&&(i=(0,r.jsxs)(mn,{children:[(0,r.jsx)(N.Z,{eventKey:"configuration-url",title:"Configuration URIs",children:(0,r.jsx)(jn,{children:(0,r.jsx)(hn,{})})}),(0,r.jsx)(N.Z,{eventKey:"installation-json",title:"Installation JSON",children:(0,r.jsx)(jn,{children:(0,r.jsx)(nn,{request:e})})})]})),i},On=t(98224);function Zn(){var n=(0,c.Z)(["\n  color: #006fc4;\n  height: 60px;\n  padding-left: 20px;\n  padding-top: 16px;\n  padding-bottom: 22px;\n  weight: 700;\n  background-color: #f8f8f8;\n"]);return Zn=function(){return n},n}function kn(){var n=(0,c.Z)(["\n  color: #a12622;\n  height: 60px;\n  padding-left: 20px;\n  padding-top: 16px;\n  padding-bottom: 22px;\n  weight: 700;\n  background-color: #f2dede;\n"]);return kn=function(){return n},n}function Pn(){var n=(0,c.Z)(["\n  color: #777777;\n  font-size: 16px;\n  font-weight: 600;\n  height: 30px;\n  border-bottom: 1px solid #707070;\n  margin-bottom: 5px;\n"]);return Pn=function(){return n},n}function qn(){var n=(0,c.Z)(["\n  overflow: auto;\n"]);return qn=function(){return n},n}var Rn=[{maxWidth:1e3,marginTop:10},{maxWidth:1199,width:933,marginTop:20},{maxWidth:1440,width:1127,marginTop:20},{width:1400,marginTop:20}],Cn=x.default.div(qn()),Dn=x.default.div(Pn()),Fn=x.default.div(kn()),En=x.default.div(Zn()),Sn=s.createContext({});var Un=function(n){n.currentUser;var e=(0,d.useRouter)(),t=(0,s.useState)(!1),i=t[0],c=t[1],x=(0,s.useState)(!1),b=x[0],O=x[1],Z=(0,s.useState)(0),k=(Z[0],Z[1],(0,s.useReducer)(U,{})),P=k[0],q=k[1],R=P.requests,D=void 0===R?[]:R,F=P.selectedRequest,E=(0,s.useMemo)((function(){return{state:P,dispatch:q}}),[P,q]);(0,s.useEffect)((function(){return function(){var n=(0,a.Z)(o().mark((function n(){var t,r,i,a,s;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(!0),n.next=3,(0,v.XJ)();case 3:t=n.sent,r=(0,u.Z)(t,2),i=r[0],r[1]?O(!0):(q({type:"setRequests",payload:o=a=i||[]}),null!==F&&void 0!==F&&F.id&&y(o.find((function(n){return(null===n||void 0===n?void 0:n.id)===Number(null===F||void 0===F?void 0:F.id)}))),(s=e.query.id)&&q(y(a.find((function(n){return n.id===Number(s)}))))),c(!1);case 9:case"end":return n.stop()}var o}),n)})));return function(){return n.apply(this,arguments)}}()(),function(){}}),[]);var S=function(){var n=(0,a.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((null===F||void 0===F?void 0:F.id)!==e.id){n.next=2;break}return n.abrupt("return");case 2:q(y(e)),q(w(!1));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),z=function(){var n=(0,a.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.push("/request");case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();if(i)return(0,r.jsx)(On.Z,{});var N=null;N=b?(0,r.jsxs)(Fn,{children:[(0,r.jsx)(l.G,{icon:p.RLE}),"\xa0 The system is unavailable at this moment. please refresh the page."]}):0===D.length?(0,r.jsxs)(En,{children:[(0,r.jsx)(l.G,{icon:p.sqG}),"\xa0 No SSO project requests submitted"]}):(0,r.jsxs)(m,{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Request ID"}),(0,r.jsx)("th",{children:"Project Name"}),(0,r.jsx)("th",{children:"Status"}),(0,r.jsx)("th",{children:"Actions"})]})}),(0,r.jsx)("tbody",{children:D.map((function(n){return(0,r.jsxs)("tr",{className:(null===F||void 0===F?void 0:F.id)===n.id?"active":"",onClick:function(){return S(n)},children:[(0,r.jsx)("td",{children:(0,h.padStart)(String(n.id),8,"0")}),(0,r.jsx)("td",{children:n.projectName}),(0,r.jsx)("td",{children:xn(n.status||"draft")}),(0,r.jsx)("td",{children:(0,r.jsx)(C,{request:n})})]},n.id)}))})]});var A=D.find((function(n){return n.id===Number(null===F||void 0===F?void 0:F.id)}));return console.log(A),(0,r.jsxs)(g.Z,{rules:Rn,children:[(0,r.jsx)(j,{size:"small",onClick:z,children:"+ Request Access"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(Sn.Provider,{value:E,children:(0,r.jsx)(f.ZP,{cols:2,children:(0,r.jsxs)(f.ZP.Row,{collapse:"800",gutter:[15,2],children:[(0,r.jsx)(f.ZP.Col,{children:(0,r.jsxs)(Cn,{children:[(0,r.jsx)(Dn,{children:"My Dashboard"}),N]})}),A&&(0,r.jsx)(f.ZP.Col,{children:(0,r.jsx)(wn,{activeRequest:A},A.id+A.status)})]})})})]})}},6645:function(n,e,t){"use strict";t.d(e,{hG:function(){return d},A_:function(){return l},XJ:function(){return p},WN:function(){return f}});var r=t(809),i=t.n(r),o=t(92447),u=t(70513),a=t(9186),c=t(96486),s=t(15616),d=function(){var n=(0,o.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=(0,a.g)(),n.prev=1,n.next=4,u.e.post("requests",e,t).then((function(n){return n.data}));case 4:return r=n.sent,n.abrupt("return",[(0,s.UB)(r),null]);case 8:return n.prev=8,n.t0=n.catch(1),console.error(n.t0),n.abrupt("return",[null,n.t0]);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,o.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=(0,a.g)(),n.prev=1,n.next=4,u.e.post("request",{requestId:e},t).then((function(n){return n.data}));case 4:return r=n.sent,n.abrupt("return",[(0,s.UB)(r),null]);case 8:return n.prev=8,n.t0=n.catch(1),console.error(n.t0),n.abrupt("return",[null,n.t0]);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,o.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=(0,a.g)(),n.prev=1,n.next=4,u.e.get("requests",e).then((function(n){return n.data}));case 4:return t=n.sent,t=(0,c.orderBy)(t,["createdAt"],["desc"]),n.abrupt("return",[t.map(s.UB),null]);case 9:return n.prev=9,n.t0=n.catch(1),console.error(n.t0),n.abrupt("return",[null,n.t0]);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,o.Z)(i().mark((function n(e){var t,r,o,c,d=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=d.length>1&&void 0!==d[1]&&d[1],r=(0,a.g)(),n.prev=2,o="requests",t&&(o="".concat(o,"?submit=true"),e.environments=["dev","test","prod"]),n.next=7,u.e.put(o,e,r).then((function(n){return n.data}));case 7:return c=n.sent,n.abrupt("return",[(0,s.UB)(c),null]);case 11:return n.prev=11,n.t0=n.catch(2),console.error(n.t0),n.abrupt("return",[null,n.t0]);case 15:case"end":return n.stop()}}),n,null,[[2,11]])})));return function(e){return n.apply(this,arguments)}}()},66810:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-requests",function(){return t(54383)}])}},function(n){n.O(0,[522,534,774,888,179],(function(){return e=66810,n(n.s=e);var e}));var e=n.O();_N_E=e}]);