(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12],{33134:function(t,e,n){"use strict";n.r(e),n.d(e,{RequestsContext:function(){return Et},default:function(){return Ut}});var r=n(85893),i=n(809),o=n.n(i),a=n(39227),s=n(92447),u=n(27261),c=n(67294),d=n(11163),l=n(17625),p=n(51436),f=n(64735),h=n(96486),x=n(29163),m=n(6645);function v(){var t=(0,u.Z)(["\n  width: 100%;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  text-align: left;\n  border-collapse: separate;\n  border-spacing: 0 5px;\n\n  & thead {\n    font-size: 12px;\n    color: #777777;\n  }\n\n  & tbody {\n    font-size: 16px;\n\n    tr {\n      height: 60px;\n      background-color: #f8f8f8;\n      &:hover {\n        background-color: #fff7d5;\n      }\n      &.active {\n        background-color: #ffed9f;\n      }\n    }\n  }\n\n  th:first-child,\n  td:first-child {\n    padding-left: 1em;\n  }\n\n  & th,\n  & td {\n    border: none;\n  }\n"]);return v=function(){return t},t}var b=x.default.table(v()),g=(0,n(83024).applyTheme)({shared:{button:"\n      border-radius: 0.222em;\n      border-width: 0;\n      padding: 0.6em 1.1em;\n      text-align: center;\n      text-decoration: none;\n      font-weight: 700;\n      letter-spacing: 1px;\n      display: inline-block;\n      cursor: pointer;\n      box-shadow: 0px 0px 0px 2px transparent inset, 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;\n    "},size:{xsmall:{button:"\n        font-size: 0.7rem;\n      "},small:{button:"\n        font-size: 0.8rem;\n      "},medium:{button:"\n        font-size: 1rem;\n      "},large:{button:"\n        font-size: 1.2rem;\n      "}},variant:{primary:{button:"\n        background-color: #D5EDFF;\n        box-shadow: 0px 0px 0px 2px #D5EDFF inset !important;\n        color: #3E3E3E;\n\n        &:hover {\n          text-decoration: underline;\n          background-color: #FFF7D5;\n          box-shadow: 0px 0px 0px 2px #FFF7D5 inset !important;\n          opacity: 0.80;\n        }\n\n        &:active {\n          opacity: 1;\n        }\n      "},grey:{button:"\n        background-color: #B2B2B2;\n        box-shadow: 0px 0px 0px 1px #707070 inset !important;\n        color: #F8F8F8;\n        width: 110px;\n\n        &:hover {\n          background-color: #006FC4;\n          box-shadow: 0px 0px 0px 1px #707070 inset !important;\n        }\n      "}}},{defaultProps:{variant:"primary",size:"medium"},breakProps:[],staticProps:["fullHeight","fullWidth"]}),j=n(40602),y=function(t){return{type:"setRequest",payload:t}},w=function(t){return{type:"setEditingRequest",payload:t}},Z=function(t){return{type:"setUpdatingUrls",payload:t}};function q(){var t=(0,u.Z)(["\n  padding-left: 10px;\n  cursor: pointer;\n  ","\n"]);return q=function(){return t},t}function R(){var t=(0,u.Z)(["\n  border-right: 1px solid #777777;\n  padding-right: 10px;\n  color: #777777;\n  cursor: not-allowed;\n"]);return R=function(){return t},t}function P(){var t=(0,u.Z)(["\n  height: 100%;\n  display: flex;\n"]);return P=function(){return t},t}var k=x.default.div(P()),O=((0,x.default)(l.G)(R()),(0,x.default)(l.G)(q(),(function(t){return t.disabled?"color: #CACACA;":"color: #777777;&:hover { color: #137ac8; }"})));function C(t){var e=t.request,n=(0,c.useContext)(Et),i=n.state,o=n.dispatch,a=(0,d.useRouter)(),s=i,u=s.editingRequest,l=s.selectedRequest,f=["draft","applied"].includes(e.status||"");return(0,r.jsx)(k,{children:(0,r.jsx)(O,{disabled:!f,icon:p.Xcf,size:"2x",role:"button","aria-label":"edit",onClick:function(t){t.stopPropagation(),"draft"!==e.status?(null===l||void 0===l?void 0:l.id)===e.id?o(w(!u)):(o(w(!0)),o(y(e))):a.push("/request/".concat(e.id))}})})}var D=n(38347),F=n(26265);function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(Object(n),!0).forEach((function(e){(0,F.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var U=function(t,e){switch(e.type){case"setRequests":return E(E({},t),{},{requests:e.payload});case"setRequest":return E(E({},t),{},{selectedRequest:e.payload});case"setEditingRequest":return E(E({},t),{},{editingRequest:e.payload});case"setUpdatingUrls":return E(E({},t),{},{updatingUrls:e.payload});case"updateRequest":var n=e.payload,r=n.id,i=(0,D.Z)(n,["id"]),o=t.requests,a=E(E({},t.selectedRequest),i),s=null===o||void 0===o?void 0:o.map((function(t){return t.id===r?a:t}));return E(E({},t),{},{requests:s,selectedRequest:a});default:return t}},z=n(54108),N=n(56841),T=n(45624),I=n(31607),_=n(70513),A=n(9186),G=function(){var t=(0,s.Z)(o().mark((function t(e,n){var r,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=(0,A.g)(),t.prev=1,t.next=4,_.e.post("installation",{requestId:e,environment:n},r).then((function(t){return t.data}));case 4:return i=t.sent,t.abrupt("return",[i,null]);case 8:return t.prev=8,t.t0=t.catch(1),console.error(t.t0),t.abrupt("return",[null,t.t0]);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}(),V=function(t){return JSON.stringify(t,void 0,2)},B=function(t){var e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.focus(),e.select();try{return document.execCommand("copy"),document.body.removeChild(e),!0}catch(n){return document.body.removeChild(e),!1}},W=function(t,e){var n=window.URL.createObjectURL(new Blob([t],{type:"application/json"})),r=document.createElement("a");r.href=n,r.setAttribute("download",e),document.body.appendChild(r),r.click(),document.body.removeChild(r)},X=[{name:"dev",display:"Development"},{name:"test",display:"Test"},{name:"prod",display:"Production"}];function J(){var t=(0,u.Z)(["\n  height: var(--field-top-spacing);\n"]);return J=function(){return t},t}function L(){var t=(0,u.Z)(["\n  color: #3e3e3e;\n  font-size: 14px;\n  font-weight: 700;\n"]);return L=function(){return t},t}function Y(){var t=(0,u.Z)(["\n  color: #000;\n  font-size: 1.1rem;\n"]);return Y=function(){return t},t}function K(){var t=(0,u.Z)(["\n  text-align: center;\n"]);return K=function(){return t},t}var M=x.default.div(K()),H=x.default.span(Y()),$=x.default.span(L()),Q=x.default.div(J()),tt=function(t){var e=t.request,n=(0,c.useState)(!1),i=n[0],u=n[1],d=function(){var t=(0,s.Z)(o().mark((function t(n){var r,i,s;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(!0),t.next=3,G(e.id,n);case 3:return r=t.sent,i=(0,a.Z)(r,2),s=i[0],i[1],u(!1),t.abrupt("return",s);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,s.Z)(o().mark((function t(e){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:n=t.sent,B(V(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=(0,s.Z)(o().mark((function t(n){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(n);case 2:r=t.sent,W(V(r),"".concat(e.projectName,"-installation-").concat(n,".json"));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return i?(0,r.jsxs)(M,{children:[(0,r.jsx)(Q,{}),(0,r.jsx)(I.Z,{type:"Grid",color:"#000",height:45,width:45,visible:!0})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Q,{}),(0,r.jsx)(f.ZP,{cols:4,children:X.map((function(t){return(0,r.jsxs)(c.Fragment,{children:[(0,r.jsxs)(f.ZP.Row,{collapse:"992",gutter:[],children:[(0,r.jsx)(f.ZP.Col,{span:1,children:(0,r.jsx)(H,{children:t.display})}),(0,r.jsxs)(f.ZP.Col,{span:3,children:[(0,r.jsx)(g,{size:"xsmall",variant:"grey",onClick:function(){return h(t.name)},children:"Copy"}),"\xa0",(0,r.jsx)(g,{size:"xsmall",variant:"grey",onClick:function(){return x(t.name)},children:"Download"}),"\xa0\xa0",(0,r.jsx)(l.G,{color:"green",icon:p.f8k}),"\xa0",(0,r.jsx)($,{children:"Ready"})]})]}),(0,r.jsx)("br",{})]},t.name)}))})]})},et=n(17849),nt="^https?:\\/\\/\\w+(\\.\\w+)*(:[0-9]+)?\\/?$",rt={type:"object",required:["devValidRedirectUris","testValidRedirectUris","prodValidRedirectUris"],properties:{devValidRedirectUris:{type:"array",title:"Development",items:{type:"string",pattern:nt},additionalItems:{type:"string",pattern:nt},default:[""]},testValidRedirectUris:{type:"array",title:"Test",items:{type:"string",pattern:nt},additionalItems:{type:"string",pattern:nt},default:[""]},prodValidRedirectUris:{type:"array",title:"Production",items:{type:"string",pattern:nt},additionalItems:{type:"string",pattern:nt},default:[""]}}},it=n(15616),ot=n(3083),at=n(25463);function st(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ut(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?st(Object(n),!0).forEach((function(e){(0,F.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):st(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function ct(){var t=(0,u.Z)(["\n  color: #000;\n  font-size: 1.1rem;\n"]);return ct=function(){return t},t}function dt(){var t=(0,u.Z)(["\n  height: var(--field-top-spacing);\n"]);return dt=function(){return t},t}var lt=x.default.div(dt()),pt=x.default.span(ct()),ft=function(){var t=(0,d.useRouter)(),e=(0,c.useContext)(Et),n=e.state,i=e.dispatch,u=n,l=u.editingRequest,p=u.selectedRequest,f=u.updatingUrls,h=p||{},x=function(){var e=(0,s.Z)(o().mark((function e(n){var r,s,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(Z(!0)),e.next=3,(0,m.WN)(ut(ut({},n.formData),{},{id:h.id}),!0);case 3:r=e.sent,s=(0,a.Z)(r,2),u=s[0],s[1]||(i({type:"updateRequest",payload:u}),t.push({pathname:"/my-requests",query:{id:h.id,mode:"edit"}})),i(Z(!1)),i(w(!1));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,r.jsx)(r.Fragment,{children:l?(0,r.jsx)(et.Z,{schema:rt,ArrayFieldTemplate:ot.Z,formData:h,disabled:f,onSubmit:x,children:(0,r.jsx)(at.Z,{show:!0,loading:f||!1,text:{continue:"Submit",back:"Cancel"},handleBackClick:function(){i(w(!1))}})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(lt,{}),X.map((function(t){var e=h[(0,it.qD)(t.name)]||[];return(0,r.jsxs)(c.Fragment,{children:[(0,r.jsx)(pt,{children:t.display}),(0,r.jsx)("ul",{children:e.length>0?e.map((function(t){return(0,r.jsx)("li",{className:"url",children:t},t)})):(0,r.jsx)("li",{children:"No valid redirect URIs"})}),(0,r.jsx)("br",{})]},t.name)}))]})})},ht=function(t){switch(t){case"draft":return"In Draft";case"applied":return"Active Project";default:return"Request Submitted"}};function xt(){var t=(0,u.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n"]);return xt=function(){return t},t}function mt(){var t=(0,u.Z)(["\n  .nav-link {\n    height: 30px !important;\n    font-size: 16px !important;\n    font-weight: 600 !important;\n    padding-top: 0; !important;\n    border-bottom: 1px solid #707070;\n    border-top: unset !important;\n    border-left: unset !important;\n    border-right: unset !important;\n  }\n  .nav-link.active {\n    background-color: unset !important;\n    border-bottom: 3px solid orange;\n  }\n"]);return mt=function(){return t},t}var vt=(0,x.default)(z.Z)(mt()),bt=x.default.div(xt()),gt=[{title:"Dev Configuration",name:"dev"},{title:"Test Configuration",name:"test"},{title:"Prod Configuration",name:"prod"}];var jt=function(){var t=(0,c.useContext)(Et).state,e=(0,c.useState)(gt[0].name),n=(e[0],e[1],t.selectedRequest);if(!n)return null;var i=ht(n.status||"draft"),o=null;return"In Draft"===i?o=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsx)(T.ZP,{variant:"info",content:"Your request is in draft. Click the 'edit' button to finish the request."})]}):"Request Submitted"===i?o=n.prNumber?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsx)(T.ZP,{variant:"info",content:"Your URI change request is successfully submitted. Return periodically to the dashboard for request status update. The estimated time will be 24 hours."})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsx)(T.ZP,{variant:"info",content:"Your request is successfully submitted. Return periodically to the dashboard for request status update. The estimated time will be 24 hours."})]}):"Active Project"===i&&(o=(0,r.jsxs)(vt,{children:[(0,r.jsx)(N.Z,{eventKey:"configuration-url",title:"Configuration URIs",children:(0,r.jsx)(bt,{children:(0,r.jsx)(ft,{})})}),(0,r.jsx)(N.Z,{eventKey:"installation-json",title:"Installation JSON",children:(0,r.jsx)(bt,{children:(0,r.jsx)(tt,{request:n})})})]})),o},yt=n(98224),wt=n(36028),Zt=n(8109);function qt(){var t=(0,u.Z)(["\n  color: #006fc4;\n  height: 60px;\n  padding-left: 20px;\n  padding-top: 16px;\n  padding-bottom: 22px;\n  weight: 700;\n  background-color: #f8f8f8;\n"]);return qt=function(){return t},t}function Rt(){var t=(0,u.Z)(["\n  color: #a12622;\n  height: 60px;\n  padding-left: 20px;\n  padding-top: 16px;\n  padding-bottom: 22px;\n  weight: 700;\n  background-color: #f2dede;\n"]);return Rt=function(){return t},t}function Pt(){var t=(0,u.Z)(["\n  color: #777777;\n  font-size: 16px;\n  font-weight: 600;\n  height: 30px;\n  border-bottom: 1px solid #707070;\n  margin-bottom: 5px;\n"]);return Pt=function(){return t},t}function kt(){var t=(0,u.Z)(["\n  overflow: auto;\n"]);return kt=function(){return t},t}var Ot=[{maxWidth:1e3,marginTop:10},{maxWidth:1199,width:933,marginTop:20},{maxWidth:1440,width:1127,marginTop:20},{width:1400,marginTop:20}],Ct=x.default.div(kt()),Dt=x.default.div(Pt()),Ft=x.default.div(Rt()),St=x.default.div(qt()),Et=c.createContext({});var Ut=function(t){t.currentUser;var e=(0,d.useRouter)(),n=(0,c.useState)(!1),i=n[0],u=n[1],x=(0,c.useState)(!1),v=x[0],w=x[1],Z=(0,c.useReducer)(U,{}),q=Z[0],R=Z[1],P=q.requests,k=void 0===P?[]:P,O=q.selectedRequest,D=(0,c.useMemo)((function(){return{state:q,dispatch:R}}),[q,R]);(0,c.useEffect)((function(){(function(){var t=(0,s.Z)(o().mark((function t(){var n,r,i,s,c;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(!0),t.next=3,(0,m.XJ)();case 3:n=t.sent,r=(0,a.Z)(n,2),i=r[0],r[1]?w(!0):(R({type:"setRequests",payload:s=i||[]}),(c=e.query.id)&&R(y(s.find((function(t){return t.id===Number(c)}))))),u(!1);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var F=function(){var t=(0,s.Z)(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((null===O||void 0===O?void 0:O.id)!==e.id){t.next=2;break}return t.abrupt("return");case 2:R(y(e));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),S=function(){var t=(0,s.Z)(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.push("/request");case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();if(i)return(0,r.jsx)(yt.Z,{});var E=null;return E=v?(0,r.jsxs)(Ft,{children:[(0,r.jsx)(l.G,{icon:p.RLE}),"\xa0 The system is unavailable at this moment. please refresh the page."]}):0===k.length?(0,r.jsxs)(St,{children:[(0,r.jsx)(l.G,{icon:p.sqG}),"\xa0 No SSO project requests submitted"]}):(0,r.jsxs)(b,{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Request ID"}),(0,r.jsx)("th",{children:"Project Name"}),(0,r.jsx)("th",{children:"Status"}),(0,r.jsx)("th",{children:"Actions"})]})}),(0,r.jsx)("tbody",{children:k.map((function(t){return(0,r.jsxs)("tr",{className:(null===O||void 0===O?void 0:O.id)===t.id?"active":"",onClick:function(){return F(t)},children:[(0,r.jsx)("td",{children:(0,h.padStart)(String(t.id),8,"0")}),(0,r.jsx)("td",{children:t.projectName}),(0,r.jsx)("td",{children:ht(t.status||"draft")}),(0,r.jsx)("td",{children:(0,r.jsx)(C,{request:t})})]},t.id)}))})]}),(0,r.jsxs)(j.Z,{rules:Ot,children:[(0,r.jsx)(g,{size:"small",onClick:S,children:"+ Request Project"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(Et.Provider,{value:D,children:(0,r.jsx)(f.ZP,{cols:2,children:(0,r.jsxs)(f.ZP.Row,{collapse:"800",gutter:[15,2],children:[(0,r.jsx)(f.ZP.Col,{children:(0,r.jsxs)(Ct,{children:[(0,r.jsx)(Dt,{children:"My Project Dashboard"}),E]})}),O&&(0,r.jsx)(f.ZP.Col,{children:(0,r.jsx)(jt,{})})]})})}),e.query.id&&(0,r.jsx)(Zt.Z,{children:(0,r.jsx)(wt.Z,{variant:"success",fadeOut:1e4,closable:!0,content:"Request ID:".concat((0,h.padStart)(String(e.query.id),8,"0")," is successfully submitted!")})})]})}},66810:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-requests",function(){return n(33134)}])}},function(t){t.O(0,[833,877,66,774,888,179],(function(){return e=66810,t(t.s=e);var e}));var e=t.O();_N_E=e}]);