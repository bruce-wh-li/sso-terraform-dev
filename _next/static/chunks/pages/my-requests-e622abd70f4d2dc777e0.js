(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12],{23451:function(e,n,t){"use strict";var r=t(27261);function i(){var e=(0,r.Z)(["\n  width: 100%;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  text-align: left;\n  border-collapse: separate;\n  border-spacing: 0 5px;\n\n  & thead {\n    font-size: 12px;\n    color: #777777;\n  }\n\n  & tbody {\n    font-size: 16px;\n\n    tr {\n      height: 60px;\n      background-color: #f8f8f8;\n      &:hover {\n        background-color: #fff7d5;\n      }\n      &.active {\n        background-color: #ffed9f;\n      }\n    }\n  }\n\n  th:first-child,\n  td:first-child {\n    padding-left: 1em;\n  }\n\n  & th,\n  & td {\n    border: none;\n  }\n"]);return i=function(){return e},e}var o=t(29163).default.table(i());n.Z=o},46744:function(e,n,t){"use strict";t.r(n),t.d(n,{RequestsContext:function(){return pn},default:function(){return fn}});var r=t(85893),i=t(809),o=t.n(i),a=t(39227),s=t(92447),u=t(27261),c=t(67294),l=t(11163),d=t(17625),p=t(51436),f=t(64735),h=t(96486),x=t(29163),v=t(6645),m=t(23451),b=t(83024),j=t(30454),g={shared:{button:"\n      border-radius: 0.222em;\n      border-width: 0;\n      padding: 0.6em 1.1em;\n      text-align: center;\n      text-decoration: none;\n      font-weight: 700;\n      letter-spacing: 1px;\n      display: inline-block;\n      cursor: pointer;\n      box-shadow: 0px 0px 0px 2px transparent inset, 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;\n    "},size:{xsmall:{button:"\n        font-size: 0.7rem;\n      "},small:{button:"\n        font-size: 0.8rem;\n      "},medium:{button:"\n        font-size: ".concat(j.n5,";\n      ")},large:{button:"\n        font-size: 1.2rem;\n      "}},variant:{primary:{button:"\n        background-color: #D5EDFF;\n        box-shadow: 0px 0px 0px 2px #D5EDFF inset !important;\n        color: #3E3E3E;\n\n        &:hover {\n          text-decoration: underline;\n          background-color: #FFF7D5;\n          box-shadow: 0px 0px 0px 2px #FFF7D5 inset !important;\n          opacity: 0.80;\n        }\n\n        &:active {\n          opacity: 1;\n        }\n      "},grey:{button:"\n        background-color: #B2B2B2;\n        box-shadow: 0px 0px 0px 1px #707070 inset !important;\n        color: #F8F8F8;\n        min-width: 110px;\n\n        &:hover {\n          background-color: ".concat(j.OU,";\n          box-shadow: 0px 0px 0px 1px #707070 inset !important;\n        }\n      ")}}},y=(0,b.applyTheme)(g,{defaultProps:{variant:"primary",size:"medium"},breakProps:[],staticProps:["fullHeight","fullWidth"]}),w=t(40602),Z=function(e){return{type:"setRequests",payload:e}},k=function(e){return{type:"setEditingRequest",payload:e}};function q(){var e=(0,u.Z)(["\n  height: 40px;\n  border-right: 2px solid #e3e3e3;\n"]);return q=function(){return e},e}function O(){var e=(0,u.Z)(["\n  margin-left: 15px;\n"]);return O=function(){return e},e}function P(){var e=(0,u.Z)(["\n  margin-right: 15px;\n  &:hover {\n    ","\n  }\n"]);return P=function(){return e},e}function R(){var e=(0,u.Z)(["\n  cursor: ",";\n  ","\n"]);return R=function(){return e},e}function F(){var e=(0,u.Z)(["\n  height: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n"]);return F=function(){return e},e}var C=x.default.div(F()),S=(0,x.default)(d.G)(R(),(function(e){return e.disabled?"not-allowed":"pointer"}),(function(e){return e.disabled?"color: #CACACA;":"color: #777777;&:hover { color: #137ac8; }"})),D=(0,x.default)(S)(P(),(function(e){return null!==e&&void 0!==e&&e.disabled?"":"color: ".concat(j.Uo,";")})),E=(0,x.default)(S)(O()),I=x.default.div(q());function G(e){var n=e.selectedRequest,t=e.request,i=e.setSelectedId,a=(0,c.useContext)(pn),u=a.state,d=a.dispatch,f=(0,l.useRouter)(),h=u.editingRequest,x=!["pr","planned","submitted"].includes((null===t||void 0===t?void 0:t.status)||""),v=function(){var e=(0,s.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id&&x){e.next=2;break}return e.abrupt("return");case 2:window.location.hash="delete-modal";case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=["draft","applied"].includes(t.status||"");return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(C,{children:[(0,r.jsx)(E,{disabled:!m,icon:p.Xcf,role:"button","aria-label":"edit",onClick:function(e){"draft"!==t.status?(null===n||void 0===n?void 0:n.id)===t.id?d(k(!h)):(d(k(!0)),i(t.id)):f.push("/request/".concat(t.id))},title:"Edit"}),(0,r.jsx)(I,{}),(0,r.jsx)(D,{icon:p.$aW,role:"button","aria-label":"delete",onClick:v,disabled:!x,title:"Delete"})]})})}var T=t(26265);function z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function N(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?z(Object(t),!0).forEach((function(n){(0,T.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var B=function(e,n){switch(n.type){case"setRequests":return N(N({},e),{},{requests:n.payload});case"setEditingRequest":return N(N({},e),{},{editingRequest:n.payload});case"updateRequest":var t=e.requests,r=null===t||void 0===t?void 0:t.map((function(e){return e.id===n.payload.id?n.payload:e}));return N(N({},e),{},{requests:r});case"deleteRequest":var i=e.requests,o=null===i||void 0===i?void 0:i.filter((function(e){return e.id!==n.payload}));return N(N({},e),{},{requests:o});default:return e}},_=t(42881),U=t(56841),A=t(45624),L=t(31607),W=t(70513),K=function(){var e=(0,s.Z)(o().mark((function e(n,t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.e.post("installation",{requestId:n,environment:t}).then((function(e){return e.data}));case 3:return r=e.sent,e.abrupt("return",[r,null]);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[null,e.t0]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}(),M=function(e){return JSON.stringify(e,void 0,2)},J=function(e){var n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.focus(),n.select();try{return document.execCommand("copy"),document.body.removeChild(n),!0}catch(t){return document.body.removeChild(n),!1}},X=function(e,n){var t=window.URL.createObjectURL(new Blob([e],{type:"application/json"})),r=document.createElement("a");r.href=t,r.setAttribute("download",n),document.body.appendChild(r),r.click(),document.body.removeChild(r)},Y=t(57120),H=t(25879);function V(){var e=(0,u.Z)(["\n  height: var(--field-top-spacing);\n"]);return V=function(){return e},e}function $(){var e=(0,u.Z)(["\n  color: #3e3e3e;\n  font-size: 14px;\n  font-weight: 700;\n"]);return $=function(){return e},e}function Q(){var e=(0,u.Z)(["\n  color: #000;\n  font-size: ",";\n  font-weight: bold;\n"]);return Q=function(){return e},e}function ee(){var e=(0,u.Z)(["\n  text-align: center;\n"]);return ee=function(){return e},e}var ne=x.default.div(ee()),te=x.default.span(Q(),j.n5),re=x.default.span($()),ie=x.default.div(V()),oe=(0,H.l)((function(e){var n=e.selectedRequest,t=e.alert,i=(0,c.useState)(!1),u=i[0],l=i[1],h=function(){var e=(0,s.Z)(o().mark((function e(t){var r,i,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,K(n.id,t);case 3:return r=e.sent,i=(0,a.Z)(r,2),s=i[0],i[1],l(!1),e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x=function(){var e=(0,s.Z)(o().mark((function e(n){var r,i,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(n);case 2:r=e.sent,J(M(r)),i=r?"success":"danger",a=r?"Installation copied to clipboard":"Failed to download installation",t.show({variant:i,fadeOut:1e4,closable:!0,content:a});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,s.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:r=e.sent,X(M(r),"".concat(n.projectName,"-installation-").concat(t,".json"));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return u?(0,r.jsxs)(ne,{children:[(0,r.jsx)(ie,{}),(0,r.jsx)(L.Z,{type:"Grid",color:"#000",height:45,width:45,visible:!0})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ie,{}),(0,r.jsx)(f.ZP,{cols:4,children:Y.T.map((function(e){return(0,r.jsxs)(c.Fragment,{children:[(0,r.jsxs)(f.ZP.Row,{collapse:"992",gutter:[],align:"center",children:[(0,r.jsx)(f.ZP.Col,{span:1,children:(0,r.jsx)(te,{children:e.display})}),(0,r.jsxs)(f.ZP.Col,{span:3,children:[(0,r.jsx)(y,{size:"medium",variant:"grey",onClick:function(){return x(e.name)},children:"Copy"}),"\xa0",(0,r.jsx)(y,{size:"medium",variant:"grey",onClick:function(){return v(e.name)},children:"Download"}),"\xa0\xa0",(0,r.jsx)(d.G,{color:"green",icon:p.f8k,title:"Ready"}),"\xa0",(0,r.jsx)(re,{children:"Ready"})]})]}),(0,r.jsx)("br",{})]},e.name)}))})]})})),ae=t(17849),se=t(28835);function ue(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var ce={type:"object",properties:{devValidRedirectUris:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ue(Object(t),!0).forEach((function(n){(0,T.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ue(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({type:"array",title:"Development",items:se.Fp,additionalItems:se.Fp,default:[""]},se.ID),testValidRedirectUris:{type:"array",title:"Test",items:se.Fp,additionalItems:se.Fp,default:[""]},prodValidRedirectUris:{type:"array",title:"Production",items:se.Fp,additionalItems:se.Fp,default:[""]}}},le=t(15616),de=t(94679),pe=t(3083),fe=t(1993);function he(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function xe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?he(Object(t),!0).forEach((function(n){(0,T.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):he(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function ve(){var e=(0,u.Z)(["\n  color: #000;\n  font-size: 1.1rem;\n"]);return ve=function(){return e},e}function me(){var e=(0,u.Z)(["\n  height: var(--field-top-spacing);\n"]);return me=function(){return e},e}var be=x.default.div(me()),je=x.default.span(ve()),ge=function(e){var n=e.selectedRequest,t=(0,l.useRouter)(),i=(0,c.useState)(n),u=i[0],d=i[1],p=(0,c.useState)(!1),f=p[0],h=p[1],x=(0,c.useContext)(pn),m=x.state,b=x.dispatch,j=m.editingRequest,g=function(){var e=(0,s.Z)(o().mark((function e(r){var i,s,u,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=xe(xe({},r.formData),{},{id:n.id}),h(!0),d(i),e.next=5,(0,v.WN)(i,!0);case 5:s=e.sent,u=(0,a.Z)(s,2),c=u[0],u[1]?d(n):(b({type:"updateRequest",payload:c}),d(c),t.push({pathname:"/my-requests",query:{id:n.id,mode:"edit"}})),h(!1),b(k(!1));case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,r.jsx)(r.Fragment,{children:j?(0,r.jsx)(ae.Z,{schema:ce,ArrayFieldTemplate:pe.Z,formData:u,disabled:f,onSubmit:g,liveValidate:!0,validate:de.M,children:(0,r.jsx)(fe.Z,{formSubmission:!0,show:!0,loading:f||!1,text:{continue:"Submit",back:"Save and Close"},handleBackClick:function(){b(k(!1))}})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(be,{}),Y.T.map((function(e){var t=n[(0,le.qD)(e.name)]||[];return(0,r.jsxs)(c.Fragment,{children:[(0,r.jsx)(je,{children:e.display}),(0,r.jsx)("ul",{children:t.length>0?t.map((function(e){return(0,r.jsx)("li",{className:"url",children:e},e)})):(0,r.jsx)("li",{children:"No valid redirect URIs"})}),(0,r.jsx)("br",{})]},e.name)}))]})})},ye=function(e){switch(e){case"draft":return"In Draft";case"applied":return"Completed";default:return"Submitted"}},we=t(51479);function Ze(){var e=(0,u.Z)(["\n  color: #777777;\n  font-size: ",";\n  font-weight: bold;\n  min-height: 30px;\n  border-bottom: 1px solid #707070;\n  margin-bottom: 5px;\n  overflow: wrap;\n"]);return Ze=function(){return e},e}var ke=x.default.h3(Ze(),j.CA),qe=t(74150);function Oe(){var e=(0,u.Z)(["\n  font-size: ",";\n  color: "," !important;\n"]);return Oe=function(){return e},e}var Pe=x.default.p(Oe(),j.KN,j.we);function Re(){var e=(0,u.Z)(["\n  list-style-type: none;\n  margin: 0;\n  max-width: 330px;\n  position: relative;\n\n  & li {\n    border-bottom: 1px solid #d4d4d4;\n    & svg.svg-inline--fa {\n      position: absolute;\n      right: 0;\n    }\n  }\n"]);return Re=function(){return e},e}function Fe(){var e=(0,u.Z)(["\n  margin-bottom: 10px;\n"]);return Fe=function(){return e},e}function Ce(){var e=(0,u.Z)(["\n  color: ",";\n"]);return Ce=function(){return e},e}function Se(){var e=(0,u.Z)(["\n  margin-top: 20px;\n  border-bottom: none;\n"]);return Se=function(){return e},e}function De(){var e=(0,u.Z)(["\n  color: ",";\n  padding-right: 5px;\n"]);return De=function(){return e},e}var Ee=((0,t(11752).default)()||{}).publicRuntimeConfig,Ie=(void 0===Ee?{}:Ee).app_env,Ge=(0,x.default)(d.G)(De(),j.UH),Te=(0,x.default)(ke)(Se()),ze=x.default.a(Ce(),j.nc),Ne=(0,x.default)(we.Z)(Fe()),Be=x.default.ul(Re()),_e=function(e){switch(e){case"submitted":return 0;case"pr":return 33;case"planned":return 66;default:return 100}};function Ue(e){var n=e.selectedRequest,t=n.status,i=n.prNumber,o=n.updatedAt,a=function(e){switch(e){case"prFailed":case"planFailed":case"applyFailed":return!0;default:return!1}}(t),s=function(e){switch(e){case"submitted":return"Process request submitted...";case"pr":return"Pull request created...";case"planned":return"Terraform plan succeeded...";case"prFailed":case"planFailed":case"applyFailed":return"An error has occurred";default:return""}}(t),u=new Date(o||"").toLocaleString(),c=[(0,r.jsxs)("li",{children:["Process request submitted",(0,r.jsx)(d.G,{icon:p.f8k,color:"#00C45B"})]},"1")],l=function(e){switch(e){case"submitted":return 0;case"pr":return 1;case"prFailed":return 2;case"planned":return 3;case"planFailed":return 4;case"applied":return 5;case"applyFailed":return 6;default:return 0}}(t);if(l<1)c.push((0,r.jsxs)("li",{children:["Pull request created",(0,r.jsx)(d.G,{icon:p.LM3,color:"#B2B2B2",spin:!0})]},"2"));else if(2===l)c.push((0,r.jsxs)("li",{children:["Pull request creation failed",(0,r.jsx)(d.G,{icon:p.nYk,color:"#FF0000"})]},"2"));else{var f="production"===Ie?"https://github.com/bcgov/sso-terraform/pull/".concat(i):"https://github.com/bcgov/sso-terraform-dev/pull/".concat(i);c.push((0,r.jsxs)("li",{children:["Pull request created (",(0,r.jsx)(qe.ZP,{external:!0,href:f,children:"link"}),")",(0,r.jsx)(d.G,{icon:p.f8k,color:"#00C45B"})]},"2"))}return l<3?c.push((0,r.jsxs)("li",{children:["Terraform plan succeeded",(0,r.jsx)(d.G,{icon:p.LM3,color:"#B2B2B2",spin:!0})]},"3")):4===l?c.push((0,r.jsxs)("li",{children:["Terraform plan failed",(0,r.jsx)(d.G,{icon:p.nYk,color:"#FF0000"})]},"3")):c.push((0,r.jsxs)("li",{children:["Terraform plan succeeded",(0,r.jsx)(d.G,{icon:p.f8k,color:"#00C45B"})]},"3")),l<5?c.push((0,r.jsxs)("li",{children:["Request processed",(0,r.jsx)(d.G,{icon:p.LM3,color:"#B2B2B2",spin:!0})]},"4")):6===l?c.push((0,r.jsxs)("li",{children:["Request failed",(0,r.jsx)(d.G,{icon:p.nYk,color:"#FF0000"})]},"4")):c.push((0,r.jsxs)("li",{children:["Request processed",(0,r.jsx)(d.G,{icon:p.f8k,color:"#00C45B"})]},"4")),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(ke,{children:[(0,r.jsx)(Ge,{icon:p.sqG}),"We are working on your request - Expected processing time is 20 mins"]}),(0,r.jsx)(Te,{children:s}),(0,r.jsx)(Ne,{now:_e(t),animated:!0,variant:a?"danger":void 0}),(0,r.jsxs)(Pe,{children:["Last updated at ",u]}),(0,r.jsx)(Be,{children:c}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{children:["If there is an error or the process takes longer than 20 mins then,",(0,r.jsx)("br",{}),"please contact our SSO support team by"," ",(0,r.jsx)(ze,{href:"https://chat.developer.gov.bc.ca/channel/sso",target:"_blank",title:"Rocket Chat",children:"Rocket.Chat"})," ","or"," ",(0,r.jsx)(ze,{href:"mailto:zorin.samji@gov.bc.ca",title:"Pathfinder SSO",target:"blank",children:"Email us"})," "]})]})}function Ae(){var e=(0,u.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n"]);return Ae=function(){return e},e}function Le(){var e=(0,u.Z)(["\n  .nav-link {\n    color: "," !important;\n    height: 30px !important;\n    font-size: "," !important;\n    font-weight: 600 !important;\n    padding-top: 0; !important;\n    border-top: unset !important;\n    border-left: unset !important;\n    border-right: unset !important;\n  }\n  .nav-link.active {\n    background-color: unset !important;\n    border-bottom: 3px solid orange;\n  }\n"]);return Le=function(){return e},e}var We=(0,x.default)(_.Z)(Le(),j.we,j.CA),Ke=x.default.div(Ae());var Me=function(e){var n=e.selectedRequest,t=e.defaultTabKey,i=(0,c.useState)(t),o=i[0],a=i[1];if((0,c.useContext)(pn).dispatch,!n)return null;var s=n.status,u=ye(s||"draft"),l=null;return"In Draft"===u?l=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsxs)(A.ZP,{variant:"info",children:[(0,r.jsx)("div",{children:(0,r.jsx)("strong",{children:"Your request has not been submitted."})}),(0,r.jsx)("div",{children:'To complete your request, click "Edit" button.'})]})]}):"Submitted"===u?l=(0,r.jsx)(Ue,{selectedRequest:n}):"Completed"===u&&(l=(0,r.jsxs)(We,{activeKey:o,onSelect:function(e){return a(e)},children:[(0,r.jsx)(U.Z,{eventKey:"installation-json",title:"Installation JSON",children:(0,r.jsx)(Ke,{children:(0,r.jsx)(oe,{selectedRequest:n})})}),(0,r.jsx)(U.Z,{eventKey:"configuration-url",title:"Redirect URIs",children:(0,r.jsx)(Ke,{children:(0,r.jsx)(ge,{selectedRequest:n})})})]})),l},Je=t(98224),Xe=t(98806),Ye=t(69696),He=t(4826),Ve=t(82401);function $e(){var e=(0,u.Z)(["\n  text-align: center;\n"]);return $e=function(){return e},e}function Qe(){var e=(0,u.Z)(["\n  color: #006fc4;\n  height: 60px;\n  padding-left: 20px;\n  padding-top: 16px;\n  padding-bottom: 22px;\n  weight: 700;\n  background-color: #f8f8f8;\n"]);return Qe=function(){return e},e}function en(){var e=(0,u.Z)(["\n  color: #a12622;\n  height: 60px;\n  padding-left: 20px;\n  padding-top: 16px;\n  padding-bottom: 22px;\n  weight: 700;\n  background-color: #f2dede;\n"]);return en=function(){return e},e}function nn(){var e=(0,u.Z)(["\n  overflow: auto;\n"]);return nn=function(){return e},e}function tn(){var e=(0,u.Z)(["\n  padding-right: 10px;\n"]);return tn=function(){return e},e}function rn(){var e=(0,u.Z)(["\n  margin-top: 20px;\n  display: flex;\n  justify-content: flex-end;\n  & button {\n    min-width: 150px;\n    margin-right: 20px;\n    display: inline-block;\n  }\n"]);return rn=function(){return e},e}var on=[{maxWidth:1e3,marginTop:10},{maxWidth:1199,width:933,marginTop:20},{maxWidth:1440,width:1127,marginTop:20},{width:1400,marginTop:20}],an=x.default.div(rn()),sn=(0,x.default)(d.G)(tn()),un=x.default.div(nn()),cn=x.default.div(en()),ln=x.default.div(Qe()),dn=x.default.th($e()),pn=c.createContext({});var fn=function(e){e.currentUser;var n,t=(0,l.useRouter)(),i=(0,c.useState)(!1),u=i[0],x=i[1],b=(0,c.useState)(!1),j=b[0],g=b[1],q=(0,c.useState)(void 0),O=q[0],P=q[1],R=(0,c.useReducer)(B,{}),F=R[0],C=R[1],S=(0,c.useState)(!1),D=S[0],E=S[1],I=F.requests,T=void 0===I?[]:I,z=T.find((function(e){return e.id===Number(O)})),N=!["pr","planned","submitted"].includes((null===z||void 0===z?void 0:z.status)||""),_=(0,c.useMemo)((function(){return{state:F,dispatch:C}}),[F,C]),U=function(){var e=(0,s.Z)(o().mark((function e(){var n,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N){e.next=2;break}return e.abrupt("return");case 2:return E(!0),e.next=5,(0,v.Jl)(O);case 5:n=e.sent,t=(0,a.Z)(n,2),t[0],t[1],C({type:"deleteRequest",payload:O||null}),E(!1),window.location.hash="#";case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){(function(){var e=(0,s.Z)(o().mark((function e(){var n,r,i,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,(0,v.XJ)();case 3:n=e.sent,r=(0,a.Z)(n,2),i=r[0],r[1]?g(!0):(C(Z(i||[])),(s=t.query.id)&&P(Number(s))),x(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),(0,c.useEffect)((function(){return function(e){return e.some((function(e){return["submitted","pr","prFailed","planned","planFailed","approved","applyFailed"].includes(e.status||"")}))}(F.requests||[])&&(clearInterval(n),n=setInterval((0,s.Z)(o().mark((function e(){var t,r,i,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.XJ)();case 2:t=e.sent,r=(0,a.Z)(t,2),i=r[0],r[1]?clearInterval(n):((s=i||[]).map((function(e,n){return e.id===O?F.requests[n]:e})),F.editingRequest||C(Z(s)));case 7:case"end":return e.stop()}}),e)}))),5e3)),function(){n&&clearInterval(n)}}),[F.requests,F.editingRequest]);var A=function(){var e=(0,s.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O!==n.id){e.next=2;break}return e.abrupt("return");case 2:P(null===n||void 0===n?void 0:n.id),C(k(!1));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),W=function(){var e=(0,s.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.push("/request");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(u)return(0,r.jsx)(Je.Z,{});var K=null;return K=j?(0,r.jsxs)(cn,{children:[(0,r.jsx)(d.G,{icon:p.RLE,title:"Unavailable"}),"\xa0 The system is unavailable at this moment. please refresh the page."]}):0===T.length?(0,r.jsxs)(ln,{children:[(0,r.jsx)(d.G,{icon:p.sqG,title:"Information"}),"\xa0 No requests submitted"]}):(0,r.jsxs)(m.Z,{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Request ID"}),(0,r.jsx)("th",{children:"Project Name"}),(0,r.jsx)("th",{children:"Status"}),(0,r.jsx)(dn,{children:"Actions"})]})}),(0,r.jsx)("tbody",{children:T.map((function(e){return(0,r.jsxs)("tr",{className:(null===z||void 0===z?void 0:z.id)===e.id?"active":"",onClick:function(){return A(e)},children:[(0,r.jsx)("td",{children:(0,h.padStart)(String(e.id),8,"0")}),(0,r.jsx)("td",{children:e.projectName}),(0,r.jsx)("td",{children:ye(e.status||"draft")}),(0,r.jsx)("td",{children:(0,r.jsx)(G,{request:e,selectedRequest:z,setSelectedId:P})})]},e.id)}))})]}),(0,r.jsxs)(w.Z,{rules:on,children:[(0,r.jsx)(y,{size:"medium",onClick:W,children:"+ Request Integration"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsxs)(pn.Provider,{value:_,children:[(0,r.jsx)(f.ZP,{cols:2,children:(0,r.jsxs)(f.ZP.Row,{collapse:"800",gutter:[15,2],children:[(0,r.jsx)(f.ZP.Col,{children:(0,r.jsxs)(un,{children:[(0,r.jsx)(ke,{children:"My Dashboard"}),K]})}),z&&(0,r.jsx)(f.ZP.Col,{children:(0,r.jsx)(Me,{selectedRequest:z,defaultTabKey:F.editingRequest?"configuration-url":"installation-json"},z.id+z.status+F.editingRequest)})]})}),(0,r.jsxs)(Xe.Z,{id:"delete-modal",children:[(0,r.jsxs)(Ye.ZP.Header,{children:[(0,r.jsx)(sn,{icon:p.eHv,title:"Information",size:"2x",style:{paddingRight:"10px"}}),"Confirm Deletion"]}),(0,r.jsxs)(Ye.ZP.Content,{children:["You are about to delete this integration request. This action cannot be undone.",(0,r.jsxs)(an,{children:[(0,r.jsx)(Ve.Z,{variant:"secondary",onClick:function(){return window.location.hash="#"},children:"Cancel"}),(0,r.jsx)(He.ZP,{onClick:U,children:D?(0,r.jsx)(L.Z,{type:"Grid",color:"#FFF",height:18,width:50,visible:!0}):"Delete"})]})]})]})]})]})}},66810:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-requests",function(){return t(46744)}])}},function(e){e.O(0,[738,962,887,774,888,179],(function(){return n=66810,e(e.s=n);var n}));var n=e.O();_N_E=n}]);