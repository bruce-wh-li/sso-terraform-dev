(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[935],{61408:function(e,n,t){"use strict";t.d(n,{W2:function(){return b},Kk:function(){return g},MO:function(){return y},ZP:function(){return w}});var r=t(85893),i=t(809),a=t.n(i),o=t(92447),s=t(27261),c=t(67294),u=t(11163),d=t(29163),l=t(17625),p=t(51436),f=t(50306),h=t(41340),x=t(30454);function v(){var e=(0,s.Z)(["\n  height: 40px;\n  border-right: 2px solid #e3e3e3;\n"]);return v=function(){return e},e}function m(){var e=(0,s.Z)(["\n  cursor: ",";\n  ","\n"]);return m=function(){return e},e}function j(){var e=(0,s.Z)(["\n  height: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding-right: 15px;\n"]);return j=function(){return e},e}var b=d.default.div(j()),g=(0,d.default)(l.G)(m(),(function(e){return e.disabled?"not-allowed":"pointer"}),(function(e){return e.disabled?"color: #CACACA;":"color: #777777;&:hover { color: ".concat(e.activeColor||"#137ac8","; }")})),y=d.default.div(v());function w(e){var n=e.selectedRequest,t=e.request,i=e.setSelectedId,s=e.setActiveTab,d=e.archived,l=void 0!==d&&d,v=(0,c.useContext)(f.RequestsContext),m=v.state,j=v.dispatch,w=(0,u.useRouter)(),Z=m.editingRequest,k=!l&&!["pr","planned","submitted"].includes((null===t||void 0===t?void 0:t.status)||""),q=function(){var e=(0,o.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id&&k){e.next=2;break}return e.abrupt("return");case 2:window.location.hash="delete-modal";case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),O=!l&&["draft","applied"].includes(t.status||"");return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(b,{children:[(0,r.jsx)(g,{disabled:!O,icon:p.Xcf,role:"button","aria-label":"edit",onClick:function(e){"draft"!==t.status?(null===n||void 0===n?void 0:n.id)===t.id?j((0,h.Xx)(!Z)):(j((0,h.Xx)(!0)),i(t.id)):w.push("/request/".concat(t.id))},title:"Edit"}),(0,r.jsx)(y,{}),(0,r.jsx)(g,{icon:p.Mzg,role:"button","aria-label":"view-events",onClick:function(){return s("data-changes")},activeColor:x.Uo,title:"Events"}),(0,r.jsx)(y,{}),(0,r.jsx)(g,{icon:p.$aW,role:"button","aria-label":"delete",onClick:q,disabled:!k,activeColor:x.Uo,title:"Delete"})]})})}},25367:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(85893),i=t(27261),a=(t(67294),t(29163)),o=t(6434);function s(){var e=(0,i.Z)(["\n  margin-top: 20px;\n  max-height: calc(100vh - 250px);\n  overflow: auto;\n"]);return s=function(){return e},e}var c=a.default.div(s());function u(e){var n=e.events;return(0,r.jsx)(c,{children:n&&0!==n.length?n.map((function(e){return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Event Code: "}),e.eventCode]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Created Time: "}),(n=e.createdAt,new Date(n).toLocaleString())]}),e.idirUserDisplayName&&(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Created By: "}),e.idirUserDisplayName]})}),e.details&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{children:(0,r.jsx)("strong",{children:"Details"})}),"request-update-success"===e.eventCode?(0,r.jsxs)(r.Fragment,{children:[(0,o.Sx)(e.details.changes),(0,r.jsx)("strong",{children:"Comment: "}),(0,r.jsx)("p",{children:e.details.comment})]}):(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:JSON.stringify(e.details||{},void 0,2)})})]}),(0,r.jsx)("hr",{})]},e.id);var n})):(0,r.jsx)("div",{children:"No events found"})})}},41340:function(e,n,t){"use strict";t.d(n,{zp:function(){return r},Xx:function(){return i},nd:function(){return a},iW:function(){return o}});var r=function(e){return{type:"setRequests",payload:e}},i=function(e){return{type:"setEditingRequest",payload:e}},a=function(e){return{type:"updateRequest",payload:e}},o=function(e){return{type:"deleteRequest",payload:e}}},23451:function(e,n,t){"use strict";var r=t(27261);function i(){var e=(0,r.Z)(["\n  width: 100%;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  text-align: left;\n  border-collapse: separate;\n  border-spacing: 0 5px;\n\n  & thead {\n    font-size: 12px;\n    color: #777777;\n  }\n\n  & tbody {\n    font-size: 16px;\n\n    tr {\n      height: 60px;\n      background-color: #f8f8f8;\n      &:hover {\n        background-color: #fff7d5;\n      }\n      &.active {\n        background-color: #ffed9f;\n      }\n    }\n  }\n\n  th:first-child,\n  td:first-child {\n    padding-left: 1em;\n  }\n\n  & th,\n  & td {\n    border: none;\n  }\n"]);return i=function(){return e},e}var a=t(29163).default.table(i());n.Z=a},50306:function(e,n,t){"use strict";t.r(n),t.d(n,{RequestsContext:function(){return an},default:function(){return on}});var r=t(85893),i=t(809),a=t.n(i),o=t(39227),s=t(92447),c=t(27261),u=t(67294),d=t(11163),l=t(17625),p=t(51436),f=t(64735),h=t(56841),x=t(96486),v=t(29163),m=t(6645),j=t(23451),b=t(83024),g=t(30454),y={shared:{button:"\n      border-radius: 0.222em;\n      border-width: 0;\n      padding: 0.6em 1.1em;\n      text-align: center;\n      text-decoration: none;\n      font-weight: 700;\n      letter-spacing: 1px;\n      display: inline-block;\n      cursor: pointer;\n      box-shadow: 0px 0px 0px 2px transparent inset, 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;\n    "},size:{xsmall:{button:"\n        font-size: 0.7rem;\n      "},small:{button:"\n        font-size: 0.8rem;\n      "},medium:{button:"\n        font-size: ".concat(g.n5,";\n      ")},large:{button:"\n        font-size: 1.2rem;\n      "}},variant:{primary:{button:"\n        background-color: #D5EDFF;\n        box-shadow: 0px 0px 0px 2px #D5EDFF inset !important;\n        color: #3E3E3E;\n\n        &:hover {\n          text-decoration: underline;\n          background-color: #FFF7D5;\n          box-shadow: 0px 0px 0px 2px #FFF7D5 inset !important;\n          opacity: 0.80;\n        }\n\n        &:active {\n          opacity: 1;\n        }\n      "},grey:{button:"\n        background-color: #B2B2B2;\n        box-shadow: 0px 0px 0px 1px #707070 inset !important;\n        color: #F8F8F8;\n        min-width: 110px;\n\n        &:hover {\n          background-color: ".concat(g.OU,";\n          box-shadow: 0px 0px 0px 1px #707070 inset !important;\n        }\n      ")}}},w=(0,b.applyTheme)(y,{defaultProps:{variant:"primary",size:"medium"},breakProps:[],staticProps:["fullHeight","fullWidth"]}),Z=t(40602),k=t(61408),q=t(26265);function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,q.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var F=function(e,n){switch(n.type){case"setRequests":return C(C({},e),{},{requests:n.payload});case"setEditingRequest":return C(C({},e),{},{editingRequest:n.payload});case"updateRequest":var t=e.requests,r=null===t||void 0===t?void 0:t.map((function(e){return e.id===n.payload.id?n.payload:e}));return C(C({},e),{},{requests:r});case"deleteRequest":var i=e.requests,a=null===i||void 0===i?void 0:i.filter((function(e){return e.id!==n.payload}));return C(C({},e),{},{requests:a});default:return e}},P=t(45624),R=t(31607),S=t(70513),D=function(){var e=(0,s.Z)(a().mark((function e(n,t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.e.post("installation",{requestId:n,environment:t}).then((function(e){return e.data}));case 3:return r=e.sent,e.abrupt("return",[r,null]);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[null,e.t0]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}(),E=function(e){return JSON.stringify(e,void 0,2)},I=function(e){var n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.focus(),n.select();try{return document.execCommand("copy"),document.body.removeChild(n),!0}catch(t){return document.body.removeChild(n),!1}},z=function(e,n){var t=window.URL.createObjectURL(new Blob([e],{type:"application/json"})),r=document.createElement("a");r.href=t,r.setAttribute("download",n),document.body.appendChild(r),r.click(),document.body.removeChild(r)},T=t(57120),G=t(25879);function N(){var e=(0,c.Z)(["\n  height: var(--field-top-spacing);\n"]);return N=function(){return e},e}function B(){var e=(0,c.Z)(["\n  color: #3e3e3e;\n  font-size: 14px;\n  font-weight: 700;\n"]);return B=function(){return e},e}function A(){var e=(0,c.Z)(["\n  color: #000;\n  font-size: ",";\n  font-weight: bold;\n"]);return A=function(){return e},e}function U(){var e=(0,c.Z)(["\n  text-align: center;\n"]);return U=function(){return e},e}var K=v.default.div(U()),W=v.default.span(A(),g.n5),L=v.default.span(B()),X=v.default.div(N()),M=(0,G.l)((function(e){var n=e.selectedRequest,t=e.alert,i=(0,u.useState)(!1),c=i[0],d=i[1],h=function(){var e=(0,s.Z)(a().mark((function e(t){var r,i,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,D(n.id,t);case 3:return r=e.sent,i=(0,o.Z)(r,2),s=i[0],i[1],d(!1),e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x=function(){var e=(0,s.Z)(a().mark((function e(n){var r,i,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(n);case 2:r=e.sent,I(E(r)),i=r?"success":"danger",o=r?"Installation copied to clipboard":"Failed to download installation",t.show({variant:i,fadeOut:1e4,closable:!0,content:o});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,s.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:r=e.sent,z(E(r),"".concat(n.projectName,"-installation-").concat(t,".json"));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return c?(0,r.jsxs)(K,{children:[(0,r.jsx)(X,{}),(0,r.jsx)(R.Z,{type:"Grid",color:"#000",height:45,width:45,visible:!0})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(X,{}),(0,r.jsx)(f.ZP,{cols:4,children:T.Ty.map((function(e){return(0,r.jsxs)(u.Fragment,{children:[(0,r.jsxs)(f.ZP.Row,{collapse:"992",gutter:[],align:"center",children:[(0,r.jsx)(f.ZP.Col,{span:1,children:(0,r.jsx)(W,{children:e.display})}),(0,r.jsxs)(f.ZP.Col,{span:3,children:[(0,r.jsx)(w,{size:"medium",variant:"grey",onClick:function(){return x(e.name)},children:"Copy"}),"\xa0",(0,r.jsx)(w,{size:"medium",variant:"grey",onClick:function(){return v(e.name)},children:"Download"}),"\xa0\xa0",(0,r.jsx)(l.G,{color:"green",icon:p.f8k,title:"Ready"}),"\xa0",(0,r.jsx)(L,{children:"Ready"})]})]}),(0,r.jsx)("br",{})]},e.name)}))})]})})),J=t(17849),_=t(28835);function Y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var H={type:"object",properties:{devValidRedirectUris:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Y(Object(t),!0).forEach((function(n){(0,q.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({type:"array",title:"Development",items:_.Fp,additionalItems:_.Fp,default:[""]},_.ID),testValidRedirectUris:{type:"array",title:"Test",items:_.Fp,additionalItems:_.Fp,default:[""]},prodValidRedirectUris:{type:"array",title:"Production",items:_.Fp,additionalItems:_.Fp,default:[""]}}},V=t(6434),$=t(94679),Q=t(3083),ee=t(1993),ne=t(41340);function te(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function re(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?te(Object(t),!0).forEach((function(n){(0,q.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):te(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function ie(){var e=(0,c.Z)(["\n  color: #000;\n  font-size: 1.1rem;\n"]);return ie=function(){return e},e}function ae(){var e=(0,c.Z)(["\n  height: var(--field-top-spacing);\n"]);return ae=function(){return e},e}var oe=v.default.div(ae()),se=v.default.span(ie()),ce=(0,G.l)((function(e){var n=e.selectedRequest,t=e.alert,i=(0,d.useRouter)(),c=(0,u.useState)(n),l=c[0],p=c[1],f=(0,u.useState)(!1),h=f[0],x=f[1],v=(0,u.useContext)(an),j=v.state,b=v.dispatch,g=j.editingRequest,y=function(){var e=(0,s.Z)(a().mark((function e(r){var s,c,u,d,l;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=re(re({},r.formData),{},{id:n.id}),x(!0),p(s),e.next=5,(0,m.WN)(s,!0);case 5:c=e.sent,u=(0,o.Z)(c,2),d=u[0],(l=u[1])?(p(n),t.show({variant:"info",fadeOut:1e4,closable:!0,content:(0,V.nU)(l).message})):(b((0,ne.nd)(d)),p(d),i.push({pathname:"/my-requests",query:{id:n.id,mode:"edit"}}),b((0,ne.Xx)(!1))),x(!1);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,r.jsx)(r.Fragment,{children:g?(0,r.jsx)(J.Z,{schema:H,ArrayFieldTemplate:Q.Z,formData:l,disabled:h,onSubmit:y,liveValidate:!0,validate:$.M,children:(0,r.jsx)(ee.Z,{formSubmission:!0,show:!0,loading:h||!1,text:{continue:"Submit",back:"Cancel"},handleBackClick:function(){b((0,ne.Xx)(!1))}})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(oe,{}),T.Ty.map((function(e){var t=n[(0,V.qD)(e.name)]||[];return(0,r.jsxs)(u.Fragment,{children:[(0,r.jsx)(se,{children:e.display}),(0,r.jsx)("ul",{children:t.length>0?t.map((function(e){return(0,r.jsx)("li",{className:"url",children:e},e)})):(0,r.jsx)("li",{children:"No valid redirect URIs"})}),(0,r.jsx)("br",{})]},e.name)}))]})})})),ue=function(e){switch(e){case"draft":return"In Draft";case"applied":return"Completed";default:return"Submitted"}},de=t(51479);function le(){var e=(0,c.Z)(["\n  color: #777777;\n  font-size: ",";\n  font-weight: bold;\n  min-height: 30px;\n  border-bottom: 1px solid #707070;\n  margin-bottom: 5px;\n  overflow: wrap;\n"]);return le=function(){return e},e}var pe=v.default.h3(le(),g.CA),fe=t(74150);function he(){var e=(0,c.Z)(["\n  font-size: ",";\n  color: "," !important;\n"]);return he=function(){return e},e}var xe=v.default.p(he(),g.KN,g.we);function ve(){var e=(0,c.Z)(["\n  list-style-type: none;\n  margin: 0;\n  max-width: 330px;\n  position: relative;\n\n  & li {\n    border-bottom: 1px solid #d4d4d4;\n    & svg.svg-inline--fa {\n      position: absolute;\n      right: 0;\n    }\n  }\n"]);return ve=function(){return e},e}function me(){var e=(0,c.Z)(["\n  margin-bottom: 10px;\n"]);return me=function(){return e},e}function je(){var e=(0,c.Z)(["\n  color: ",";\n"]);return je=function(){return e},e}function be(){var e=(0,c.Z)(["\n  margin-top: 20px;\n  border-bottom: none;\n"]);return be=function(){return e},e}function ge(){var e=(0,c.Z)(["\n  color: ",";\n  padding-right: 5px;\n"]);return ge=function(){return e},e}var ye=((0,t(11752).default)()||{}).publicRuntimeConfig,we=(void 0===ye?{}:ye).app_env,Ze=(0,v.default)(l.G)(ge(),g.UH),ke=(0,v.default)(pe)(be()),qe=v.default.a(je(),g.nc),Oe=(0,v.default)(de.Z)(me()),Ce=v.default.ul(ve()),Fe=function(e){switch(e){case"submitted":return 0;case"pr":return 33;case"planned":return 66;default:return 100}};function Pe(e){var n=e.selectedRequest,t=n.status,i=n.prNumber,a=n.updatedAt,o=function(e){switch(e){case"prFailed":case"planFailed":case"applyFailed":return!0;default:return!1}}(t),s=function(e){switch(e){case"submitted":return"Process request submitted...";case"pr":return"Pull request created...";case"planned":return"Terraform plan succeeded...";case"prFailed":case"planFailed":case"applyFailed":return"An error has occurred";default:return""}}(t),c=new Date(a||"").toLocaleString(),u=[(0,r.jsxs)("li",{children:["Process request submitted",(0,r.jsx)(l.G,{icon:p.f8k,color:"#00C45B"})]},"1")],d=function(e){switch(e){case"submitted":return 0;case"pr":return 1;case"prFailed":return 2;case"planned":return 3;case"planFailed":return 4;case"applied":return 5;case"applyFailed":return 6;default:return 0}}(t);if(d<1)u.push((0,r.jsxs)("li",{children:["Pull request created",(0,r.jsx)(l.G,{icon:p.LM3,color:"#B2B2B2",spin:!0})]},"2"));else if(2===d)u.push((0,r.jsxs)("li",{children:["Pull request creation failed",(0,r.jsx)(l.G,{icon:p.nYk,color:"#FF0000"})]},"2"));else{var f="production"===we?"https://github.com/bcgov/sso-terraform/pull/".concat(i):"https://github.com/bcgov/sso-terraform-dev/pull/".concat(i);u.push((0,r.jsxs)("li",{children:["Pull request created (",(0,r.jsx)(fe.ZP,{external:!0,href:f,children:"link"}),")",(0,r.jsx)(l.G,{icon:p.f8k,color:"#00C45B"})]},"2"))}return d<3?u.push((0,r.jsxs)("li",{children:["Terraform plan succeeded",(0,r.jsx)(l.G,{icon:p.LM3,color:"#B2B2B2",spin:!0})]},"3")):4===d?u.push((0,r.jsxs)("li",{children:["Terraform plan failed",(0,r.jsx)(l.G,{icon:p.nYk,color:"#FF0000"})]},"3")):u.push((0,r.jsxs)("li",{children:["Terraform plan succeeded",(0,r.jsx)(l.G,{icon:p.f8k,color:"#00C45B"})]},"3")),d<5?u.push((0,r.jsxs)("li",{children:["Request processed",(0,r.jsx)(l.G,{icon:p.LM3,color:"#B2B2B2",spin:!0})]},"4")):6===d?u.push((0,r.jsxs)("li",{children:["Request failed",(0,r.jsx)(l.G,{icon:p.nYk,color:"#FF0000"})]},"4")):u.push((0,r.jsxs)("li",{children:["Request processed",(0,r.jsx)(l.G,{icon:p.f8k,color:"#00C45B"})]},"4")),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(pe,{children:[(0,r.jsx)(Ze,{icon:p.sqG}),"We are working on your request - Expected processing time is 20 mins"]}),(0,r.jsx)(ke,{children:s}),(0,r.jsx)(Oe,{now:Fe(t),animated:!0,variant:o?"danger":void 0}),(0,r.jsxs)(xe,{children:["Last updated at ",c]}),(0,r.jsx)(Ce,{children:u}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{children:["If there is an error or the process takes longer than 20 mins then,",(0,r.jsx)("br",{}),"please contact our SSO support team by"," ",(0,r.jsx)(qe,{href:"https://chat.developer.gov.bc.ca/channel/sso",target:"_blank",title:"Rocket Chat",children:"Rocket.Chat"})," ","or"," ",(0,r.jsx)(qe,{href:"mailto:bcgov.sso@gov.bc.ca",title:"Pathfinder SSO",target:"blank",children:"Email us"})," "]})]})}var Re=t(87522),Se=t(98224),De=t(25367);function Ee(e){var n=e.requestId,t=(0,u.useState)(!1),i=t[0],c=t[1],d=(0,u.useState)(!1),l=d[0],p=d[1],f=(0,u.useState)([]),h=f[0],x=f[1],v=function(){var e=(0,s.Z)(a().mark((function e(){var t,r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return c(!0),e.next=5,(0,Re.v)({requestId:n,eventCode:"request-update-success"});case 5:t=e.sent,r=(0,o.Z)(t,2),i=r[0],r[1]?p(!0):i&&x(i.rows),c(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){v()}),[n]),l?(0,r.jsx)(P.ZP,{variant:"warning",content:"Failed to load details."}):i?(0,r.jsx)(Se.Z,{}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(De.Z,{events:h})})}var Ie=t(42881);function ze(){var e=(0,c.Z)(["\n  .nav-link {\n    color: "," !important;\n    height: 30px !important;\n    font-size: "," !important;\n    font-weight: 600 !important;\n    padding-top: 0; !important;\n    border-top: unset !important;\n    border-left: unset !important;\n    border-right: unset !important;\n  }\n  .nav-link.active {\n    background-color: unset !important;\n    border-bottom: 3px solid orange;\n  }\n"]);return ze=function(){return e},e}var Te=(0,v.default)(Ie.Z)(ze(),g.we,g.CA);function Ge(){var e=(0,c.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n"]);return Ge=function(){return e},e}var Ne=v.default.div(Ge());var Be=function(e){var n=e.selectedRequest,t=e.defaultTabKey,i=e.setActiveKey,a=e.activeKey,o=void 0===a?t:a;if((0,u.useContext)(an).dispatch,!n)return null;var s=n.status,c=ue(s||"draft"),d=null;return"In Draft"===c?d=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsxs)(P.ZP,{variant:"info",children:[(0,r.jsx)("div",{children:(0,r.jsx)("strong",{children:"Your request has not been submitted."})}),(0,r.jsx)("div",{children:'To complete your request, click "Edit" button.'})]})]}):"Submitted"===c?d=(0,r.jsx)(Pe,{selectedRequest:n}):"Completed"===c&&(d=(0,r.jsxs)(Te,{activeKey:o,onSelect:function(e){return i(e)},children:[(0,r.jsx)(h.Z,{eventKey:"installation-json",title:"Installation JSON",children:(0,r.jsx)(Ne,{children:(0,r.jsx)(M,{selectedRequest:n})})}),(0,r.jsx)(h.Z,{eventKey:"configuration-url",title:"Redirect URIs",children:(0,r.jsx)(Ne,{children:(0,r.jsx)(ce,{selectedRequest:n})})}),(0,r.jsx)(h.Z,{eventKey:"data-changes",title:"Data Changes",children:(0,r.jsx)(Ne,{children:(0,r.jsx)(Ee,{requestId:n.id})})})]})),d},Ae=t(98806),Ue=t(69696),Ke=t(4826),We=t(82401);function Le(){var e=(0,c.Z)(["\n  text-align: center;\n  min-width: 100px;\n"]);return Le=function(){return e},e}function Xe(){var e=(0,c.Z)(["\n  color: #006fc4;\n  height: 60px;\n  padding-left: 20px;\n  padding-top: 16px;\n  padding-bottom: 22px;\n  weight: 700;\n  background-color: #f8f8f8;\n"]);return Xe=function(){return e},e}function Me(){var e=(0,c.Z)(["\n  color: #a12622;\n  height: 60px;\n  padding-left: 20px;\n  padding-top: 16px;\n  padding-bottom: 22px;\n  weight: 700;\n  background-color: #f2dede;\n"]);return Me=function(){return e},e}function Je(){var e=(0,c.Z)(["\n  overflow: auto;\n"]);return Je=function(){return e},e}function _e(){var e=(0,c.Z)(["\n  padding-right: 10px;\n"]);return _e=function(){return e},e}function Ye(){var e=(0,c.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n"]);return Ye=function(){return e},e}function He(){var e=(0,c.Z)(["\n  margin-top: 20px;\n  display: flex;\n  justify-content: flex-end;\n  & button {\n    min-width: 150px;\n    margin-right: 20px;\n    display: inline-block;\n  }\n"]);return He=function(){return e},e}var Ve=[{maxWidth:1e3,marginTop:10},{maxWidth:1199,width:933,marginTop:20},{maxWidth:1440,width:1127,marginTop:20},{width:1400,marginTop:20}],$e=v.default.div(He()),Qe=(v.default.div(Ye()),(0,v.default)(l.G)(_e())),en=v.default.div(Je()),nn=v.default.div(Me()),tn=v.default.div(Xe()),rn=v.default.th(Le()),an=u.createContext({});var on=function(e){e.currentUser;var n,t=(0,d.useRouter)(),i=(0,u.useState)(!1),c=i[0],v=i[1],b=(0,u.useState)(!1),g=b[0],y=b[1],q=(0,u.useState)(void 0),O=q[0],C=q[1],P=(0,u.useReducer)(F,{}),S=P[0],D=P[1],E=(0,u.useState)(!1),I=E[0],z=E[1],T=S.requests,G=void 0===T?[]:T,N=G.find((function(e){return e.id===Number(O)})),B=!["pr","planned","submitted"].includes((null===N||void 0===N?void 0:N.status)||""),A=(0,u.useState)(!1),U=A[0],K=A[1],W=(0,u.useState)(S.editingRequest?"configuration-url":"installation-json"),L=W[0],X=W[1],M=(0,u.useMemo)((function(){return{state:S,dispatch:D}}),[S,D]),J=function(){var e=(0,s.Z)(a().mark((function e(){var n,r,i,s,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,(0,m.XJ)("all");case 3:n=e.sent,r=(0,o.Z)(n,2),i=r[0],r[1]?y(!0):(s=i||[],D((0,ne.zp)(s)),(c=t.query.id)&&C(Number(c))),v(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=(0,s.Z)(a().mark((function e(){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(B){e.next=2;break}return e.abrupt("return");case 2:return z(!0),e.next=5,(0,m.Jl)(O);case 5:n=e.sent,t=(0,o.Z)(n,2),t[0],t[1],D((0,ne.iW)(O||null)),z(!1),J(),window.location.hash="#";case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,u.useEffect)((function(){J()}),[]),(0,u.useEffect)((function(){return function(e){return e.some((function(e){return["submitted","pr","prFailed","planned","planFailed","approved","applyFailed"].includes(e.status||"")}))}(S.requests||[])&&(clearInterval(n),n=setInterval((0,s.Z)(a().mark((function e(){var t,r,i,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.XJ)();case 2:t=e.sent,r=(0,o.Z)(t,2),i=r[0],r[1]?clearInterval(n):((s=i||[]).map((function(e,n){return e.id===O?S.requests[n]:e})),S.editingRequest||D((0,ne.zp)(s)));case 7:case"end":return e.stop()}}),e)}))),5e3)),function(){n&&clearInterval(n)}}),[S.requests,S.editingRequest]);var Y=function(){var e=(0,s.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O!==n.id){e.next=2;break}return e.abrupt("return");case 2:C(null===n||void 0===n?void 0:n.id),D((0,ne.Xx)(!1));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),H=function(){var e=(0,s.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.push("/request");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(c)return(0,r.jsx)(Se.Z,{});var V=null;return V=g?(0,r.jsxs)(nn,{children:[(0,r.jsx)(l.G,{icon:p.RLE,title:"Unavailable"}),"\xa0 The system is unavailable at this moment. please refresh the page."]}):0===G.length?(0,r.jsxs)(tn,{children:[(0,r.jsx)(l.G,{icon:p.sqG,title:"Information"}),"\xa0 No requests submitted"]}):(0,r.jsxs)(j.Z,{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Request ID"}),(0,r.jsx)("th",{children:"Project Name"}),(0,r.jsx)("th",{children:"Status"}),(0,r.jsx)(rn,{children:"Actions"})]})}),(0,r.jsx)("tbody",{children:G.filter((function(e){return U===e.archived})).map((function(e){return(0,r.jsxs)("tr",{className:(null===N||void 0===N?void 0:N.id)===e.id?"active":"",onClick:function(){return Y(e)},children:[(0,r.jsx)("td",{children:(0,x.padStart)(String(e.id),8,"0")}),(0,r.jsx)("td",{children:e.projectName}),(0,r.jsx)("td",{children:ue(e.status||"draft")}),(0,r.jsx)("td",{children:(0,r.jsx)(k.ZP,{request:e,selectedRequest:N,setSelectedId:C,setActiveTab:X,archived:e.archived})})]},e.id)}))})]}),(0,r.jsxs)(Z.Z,{rules:Ve,children:[(0,r.jsx)(w,{size:"medium",onClick:H,children:"+ Request Integration"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsxs)(an.Provider,{value:M,children:[(0,r.jsx)(f.ZP,{cols:2,children:(0,r.jsxs)(f.ZP.Row,{collapse:"800",gutter:[15,2],children:[(0,r.jsx)(f.ZP.Col,{children:(0,r.jsxs)(en,{children:[(0,r.jsxs)(Te,{onSelect:function(e){return K("archived"===e)},children:[(0,r.jsx)(h.Z,{eventKey:"active",title:"My Dashboard",onSelect:function(){K(!1)}}),(0,r.jsx)(h.Z,{eventKey:"archived",title:"Archived",onSelect:function(){return K(!0)}})]}),V]})}),N&&(0,r.jsx)(f.ZP.Col,{children:(0,r.jsx)(Be,{selectedRequest:N,defaultTabKey:L,setActiveKey:X,activeKey:L},N.id+N.status+S.editingRequest)})]})}),(0,r.jsxs)(Ae.Z,{id:"delete-modal",children:[(0,r.jsxs)(Ue.ZP.Header,{children:[(0,r.jsx)(Qe,{icon:p.eHv,title:"Information",size:"2x",style:{paddingRight:"10px"}}),"Confirm Deletion"]}),(0,r.jsxs)(Ue.ZP.Content,{children:["You are about to delete this integration request. This action cannot be undone.",(0,r.jsxs)($e,{children:[(0,r.jsx)(We.Z,{variant:"secondary",onClick:function(){return window.location.hash="#"},children:"Cancel"}),(0,r.jsx)(Ke.ZP,{onClick:_,children:I?(0,r.jsx)(R.Z,{type:"Grid",color:"#FFF",height:18,width:50,visible:!0}):"Delete"})]})]})]})]})]})}},87522:function(e,n,t){"use strict";t.d(n,{v:function(){return s}});var r=t(809),i=t.n(r),a=t(92447),o=t(70513),s=function(){var e=(0,a.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.e.post("events",n).then((function(e){return e.data}));case 3:return t=e.sent,e.abrupt("return",[t,null]);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[null,e.t0]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()}}]);