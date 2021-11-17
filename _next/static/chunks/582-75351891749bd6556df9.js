(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[582],{61408:function(e,n,t){"use strict";t.d(n,{W2:function(){return g},Kk:function(){return b},MO:function(){return y},ZP:function(){return w}});var r=t(85893),i=t(809),o=t.n(i),a=t(92447),s=t(27261),c=t(67294),u=t(11163),l=t(29163),d=t(17625),p=t(51436),f=t(81789),h=t(41340),x=t(30454);function v(){var e=(0,s.Z)(["\n  height: 40px;\n  border-right: 2px solid #e3e3e3;\n"]);return v=function(){return e},e}function m(){var e=(0,s.Z)(["\n  cursor: ",";\n  ","\n  ",";\n"]);return m=function(){return e},e}function j(){var e=(0,s.Z)(["\n  height: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding-right: 15px;\n"]);return j=function(){return e},e}var g=l.default.div(j()),b=(0,l.default)(d.G)(m(),(function(e){return e.disabled?"not-allowed":"pointer"}),(function(e){return e.disabled?"color: #CACACA;":"color: #777777;&:hover { color: ".concat(e.activeColor||"#137ac8","; }")}),(function(e){return e.isUnread?"color: ".concat(x.Uo):""})),y=l.default.div(v());function w(e){var n=e.selectedRequest,t=e.request,i=e.setSelectedId,s=e.setActiveTab,l=e.archived,d=void 0!==l&&l,v=(0,c.useContext)(f.RequestsContext),m=v.state,j=v.dispatch,w=(0,u.useRouter)(),Z=m.editingRequest,k=!d&&!["pr","planned","submitted"].includes((null===t||void 0===t?void 0:t.status)||""),q=function(){var e=(0,a.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id&&k){e.next=2;break}return e.abrupt("return");case 2:window.location.hash="delete-modal";case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),C=function(){var e=(0,a.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s("data-changes"),t.hasUnreadNotifications=!1;case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=!d&&["draft","applied"].includes(t.status||"");return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(g,{children:[(0,r.jsx)(b,{disabled:!F,icon:p.Xcf,role:"button","aria-label":"edit",onClick:function(e){"draft"!==t.status?(s("configuration-url"),e.stopPropagation(),(null===n||void 0===n?void 0:n.id)===t.id?j((0,h.Xx)(!Z)):(j((0,h.Xx)(!0)),i(t.id))):w.push("/request/".concat(t.id))},title:"Edit"}),(0,r.jsx)(y,{}),(0,r.jsx)(b,{icon:p.Mzg,role:"button","aria-label":"view-events",onClick:C,activeColor:x.Uo,title:"Events",isUnread:null===t||void 0===t?void 0:t.hasUnreadNotifications}),(0,r.jsx)(y,{}),(0,r.jsx)(b,{icon:p.$aW,role:"button","aria-label":"delete",onClick:q,disabled:!k,activeColor:x.Uo,title:"Delete"})]})})}},25367:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(85893),i=t(27261),o=(t(67294),t(29163)),a=t(6434);function s(){var e=(0,i.Z)(["\n  margin-top: 20px;\n  max-height: calc(100vh - 250px);\n  overflow: auto;\n"]);return s=function(){return e},e}var c=o.default.div(s());function u(e){var n=e.events;return(0,r.jsx)(c,{children:n&&0!==n.length?n.map((function(e){return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Event Code: "}),e.eventCode]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Created Time: "}),(n=e.createdAt,new Date(n).toLocaleString())]}),e.idirUserDisplayName&&(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Created By: "}),e.idirUserDisplayName]})}),e.details&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{children:(0,r.jsx)("strong",{children:"Details"})}),"request-update-success"===e.eventCode?(0,r.jsxs)(r.Fragment,{children:[(0,a.Sx)(e.details.changes),(0,r.jsx)("strong",{children:"Comment: "}),(0,r.jsx)("p",{children:e.details.comment})]}):(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:JSON.stringify(e.details||{},void 0,2)})})]}),(0,r.jsx)("hr",{})]},e.id);var n})):(0,r.jsx)("div",{children:"No events found"})})}},41340:function(e,n,t){"use strict";t.d(n,{zp:function(){return r},Xx:function(){return i},nd:function(){return o},iW:function(){return a}});var r=function(e){return{type:"setRequests",payload:e}},i=function(e){return{type:"setEditingRequest",payload:e}},o=function(e){return{type:"updateRequest",payload:e}},a=function(e){return{type:"deleteRequest",payload:e}}},23451:function(e,n,t){"use strict";var r=t(27261);function i(){var e=(0,r.Z)(["\n  width: 100%;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  text-align: left;\n  border-collapse: separate;\n  border-spacing: 0 5px;\n\n  & thead {\n    font-size: 12px;\n    color: #777777;\n  }\n\n  & tbody {\n    font-size: 16px;\n\n    tr {\n      height: 60px;\n      background-color: #f8f8f8;\n      &:hover {\n        background-color: #fff7d5;\n      }\n      &.active {\n        background-color: #ffed9f;\n      }\n    }\n  }\n\n  th:first-child,\n  td:first-child {\n    padding-left: 1em;\n  }\n\n  & th,\n  & td {\n    border: none;\n  }\n"]);return i=function(){return e},e}var o=t(29163).default.table(i());n.Z=o},81789:function(e,n,t){"use strict";t.r(n),t.d(n,{RequestsContext:function(){return Sn},default:function(){return Dn}});var r=t(85893),i=t(809),o=t.n(i),a=t(39227),s=t(92447),c=t(27261),u=t(67294),l=t(11163),d=t(17625),p=t(51436),f=t(64735),h=t(56841),x=t(96486),v=t(29163),m=t(6645),j=t(23451),g=t(83024),b=t(30454),y={shared:{button:"\n      border-radius: 0.222em;\n      border-width: 0;\n      padding: 0.6em 1.1em;\n      text-align: center;\n      text-decoration: none;\n      font-weight: 700;\n      letter-spacing: 1px;\n      display: inline-block;\n      cursor: pointer;\n      box-shadow: 0px 0px 0px 2px transparent inset, 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;\n    "},size:{xsmall:{button:"\n        font-size: 0.7rem;\n      "},small:{button:"\n        font-size: 0.8rem;\n      "},medium:{button:"\n        font-size: ".concat(b.n5,";\n      ")},large:{button:"\n        font-size: ".concat(b.zA,";\n      ")}},variant:{primary:{button:"\n        background-color: #D5EDFF;\n        box-shadow: 0px 0px 0px 2px #D5EDFF inset !important;\n        color: #3E3E3E;\n\n        &:hover {\n          text-decoration: underline;\n          background-color: #FFF7D5;\n          box-shadow: 0px 0px 0px 2px #FFF7D5 inset !important;\n          opacity: 0.80;\n        }\n\n        &:active {\n          opacity: 1;\n        }\n      "},grey:{button:"\n        background-color: #B2B2B2;\n        box-shadow: 0px 0px 0px 1px #707070 inset !important;\n        color: #F8F8F8;\n        min-width: 110px;\n\n        &:hover {\n          background-color: ".concat(b.TU,";\n          box-shadow: 0px 0px 0px 1px #707070 inset !important;\n        }\n      ")}}},w=(0,g.applyTheme)(y,{defaultProps:{variant:"primary",size:"medium"},breakProps:[],staticProps:["fullHeight","fullWidth"]}),Z=t(40602),k=t(61408),q=t(26265);function C(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function F(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?C(Object(t),!0).forEach((function(n){(0,q.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var P=function(e,n){switch(n.type){case"setRequests":return F(F({},e),{},{requests:n.payload});case"setEditingRequest":return F(F({},e),{},{editingRequest:n.payload});case"updateRequest":var t=e.requests,r=null===t||void 0===t?void 0:t.map((function(e){return e.id===n.payload.id?n.payload:e}));return F(F({},e),{},{requests:r});case"deleteRequest":var i=e.requests,o=null===i||void 0===i?void 0:i.filter((function(e){return e.id!==n.payload}));return F(F({},e),{},{requests:o});default:return e}},O=t(45624),R=t(31607),S=t(70513),D=function(){var e=(0,s.Z)(o().mark((function e(n,t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.e.post("installation",{requestId:n,environment:t}).then((function(e){return e.data}));case 3:return r=e.sent,e.abrupt("return",[r,null]);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[null,e.t0]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}(),I=function(){var e=(0,s.Z)(o().mark((function e(n,t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.e.put("installation",{requestId:n,environment:t}).then((function(e){return e.data}));case 3:return r=e.sent,e.abrupt("return",[r,null]);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[null,e.t0]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}(),A=function(e){return JSON.stringify(e,void 0,2)},z=function(e){var n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.focus(),n.select();try{return document.execCommand("copy"),document.body.removeChild(n),!0}catch(t){return document.body.removeChild(n),!1}},U=function(e,n){var t=window.URL.createObjectURL(new Blob([e],{type:"application/json"})),r=document.createElement("a");r.href=t,r.setAttribute("download",n),document.body.appendChild(r),r.click(),document.body.removeChild(r)},E=t(6434),T=t(25879);function G(){var e=(0,c.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]);return G=function(){return e},e}function N(){var e=(0,c.Z)(["\n  margin-right: 10px;\n"]);return N=function(){return e},e}var B=(0,v.default)(d.G)(N()),K=v.default.div(G());function L(e){var n=e.children;return(0,r.jsxs)(K,{children:[(0,r.jsx)(B,{icon:p.sqG,color:b.UH,size:"2x"}),(0,r.jsx)("span",{children:(0,r.jsx)("em",{children:n})})]})}var M=t(74150);function X(){var e=(0,c.Z)(["\n  height: var(--field-top-spacing);\n"]);return X=function(){return e},e}function Y(){var e=(0,c.Z)(["\n  color: #3e3e3e;\n  font-size: 14px;\n  font-weight: 700;\n"]);return Y=function(){return e},e}function J(){var e=(0,c.Z)(["\n  color: #000;\n  font-size: ",";\n  font-weight: bold;\n"]);return J=function(){return e},e}function W(){var e=(0,c.Z)(["\n  text-align: center;\n"]);return W=function(){return e},e}var H=v.default.div(W()),_=v.default.span(J(),b.n5),V=v.default.span(Y()),$=v.default.div(X()),Q=(0,T.l)((function(e){var n=e.selectedRequest,t=e.alert,i=(0,u.useState)(!1),c=i[0],l=i[1],h=function(){var e=(0,s.Z)(o().mark((function e(t){var r,i,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,D(n.id,t);case 3:return r=e.sent,i=(0,a.Z)(r,1),s=i[0],l(!1),e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x=function(){var e=(0,s.Z)(o().mark((function e(n){var r,i,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(n);case 2:r=e.sent,z(A(r)),i=r?"success":"danger",a=r?"Installation copied to clipboard":"Failed to download installation",t.show({variant:i,fadeOut:1e4,closable:!0,content:a});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,s.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:r=e.sent,U(A(r),"".concat(n.projectName,"-installation-").concat(t,".json"));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return c?(0,r.jsxs)(H,{children:[(0,r.jsx)($,{}),(0,r.jsx)(R.Z,{type:"Grid",color:"#000",height:45,width:45,visible:!0})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)($,{}),(0,r.jsx)(f.ZP,{cols:4,children:(0,E.Dy)(n).map((function(e){return(0,r.jsxs)(u.Fragment,{children:[(0,r.jsxs)(f.ZP.Row,{collapse:"992",gutter:[],align:"center",children:[(0,r.jsx)(f.ZP.Col,{span:1,children:(0,r.jsx)(_,{children:e.display})}),(0,r.jsxs)(f.ZP.Col,{span:3,children:[(0,r.jsx)(w,{size:"medium",variant:"grey",onClick:function(){return x(e.name)},children:"Copy"}),"\xa0",(0,r.jsx)(w,{size:"medium",variant:"grey",onClick:function(){return v(e.name)},children:"Download"}),"\xa0\xa0",(0,r.jsx)(d.G,{color:"green",icon:p.f8k,title:"Ready"}),"\xa0",(0,r.jsx)(V,{children:"Ready"})]})]}),(0,r.jsx)("br",{})]},e.name)}))}),(0,r.jsxs)(L,{children:["For more information on how to use these details, or for the public endpoints associated to your client, see"," ",(0,r.jsx)(M.ZP,{href:"https://github.com/bcgov/sso-requests/blob/dev/docs/developer-guide.md#using-your-integration",external:!0,children:"here"}),"."]})]})})),ee=t(17849),ne=t(28835);function te(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function re(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?te(Object(t),!0).forEach((function(n){(0,q.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):te(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var ie=t(94679),oe=t(3083),ae=t(1993),se=t(41340),ce=t(4826),ue=t(69696),le=t(98806);function de(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function pe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?de(Object(t),!0).forEach((function(n){(0,q.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):de(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function fe(){var e=(0,c.Z)(["\n  width: 200px;\n"]);return fe=function(){return e},e}function he(){var e=(0,c.Z)(["\n  text-align: center;\n"]);return he=function(){return e},e}function xe(){var e=(0,c.Z)(["\n  background-color: black;\n"]);return xe=function(){return e},e}function ve(){var e=(0,c.Z)(["\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n"]);return ve=function(){return e},e}function me(){var e=(0,c.Z)(["\n  margin-right: 20px;\n"]);return me=function(){return e},e}function je(){var e=(0,c.Z)(["\n  color: #000;\n  font-size: 1.1rem;\n  font-weight: bold;\n"]);return je=function(){return e},e}function ge(){var e=(0,c.Z)(["\n  height: var(--field-top-spacing);\n"]);return ge=function(){return e},e}var be=v.default.div(ge()),ye=v.default.span(je()),we=(0,v.default)(d.G)(me()),Ze=v.default.div(ve()),ke=v.default.hr(xe()),qe=v.default.div(he()),Ce=(0,v.default)(ce.ZP)(fe()),Fe=(0,T.l)((function(e){var n=e.selectedRequest,t=e.alert,i=(0,l.useRouter)(),c=(0,u.useState)(n),d=c[0],f=c[1],h=(0,u.useState)(!1),x=h[0],v=h[1],j=(0,u.useState)(!1),g=j[0],b=j[1],y=(0,u.useState)(null),w=y[0],Z=y[1],k=(0,u.useContext)(Sn),q=k.state,C=k.dispatch,F=q.editingRequest,P=function(e){var n=e.map((function(e){return e.name})),t={type:"object",properties:{devValidRedirectUris:re({type:"array",title:"Development",items:ne.Fp,additionalItems:ne.Fp,default:[""],addItemText:"Add another URI"},ne.ID)}};return n.includes("test")&&(t.properties.testValidRedirectUris={type:"array",title:"Test",items:ne.Fp,additionalItems:ne.Fp,default:[""],addItemText:"Add another URI"}),n.includes("prod")&&(t.properties.prodValidRedirectUris={type:"array",title:"Production",items:ne.Fp,additionalItems:ne.Fp,default:[""],addItemText:"Add another URI"}),t}((0,E.Dy)(n)),O=function(){var e=(0,s.Z)(o().mark((function e(r){var s,c,u,l,d;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=pe(pe({},r.formData),{},{id:n.id}),v(!0),f(s),e.next=5,(0,m.WN)(s,!0);case 5:c=e.sent,u=(0,a.Z)(c,2),l=u[0],(d=u[1])?(f(n),t.show({variant:"info",fadeOut:1e4,closable:!0,content:(0,E.nU)(d).message})):(C((0,se.nd)(l)),f(l),i.push({pathname:"/my-requests",query:{id:n.id,mode:"edit"}}),C((0,se.Xx)(!1))),v(!1);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),S=function(){var e=(0,s.Z)(o().mark((function e(){var r,i,s,c,u,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,I(n.id,(null===w||void 0===w?void 0:w.name)||null);case 3:r=e.sent,i=(0,a.Z)(r,2),s=i[0],c=i[1],u=c?"danger":"success",l=c?"Failed to regenerate secret":"Client Secret Successfully Updated",t.show({variant:u,fadeOut:1e4,closable:!0,content:l}),b(!1),window.location.hash="#",console.log(s,c);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,r.jsxs)(r.Fragment,{children:[F?(0,r.jsx)(ee.Z,{schema:P,ArrayFieldTemplate:oe.Z,formData:d,disabled:x,onSubmit:O,liveValidate:!0,validate:ie.M,children:(0,r.jsx)(ae.Z,{formSubmission:!0,show:!0,loading:x||!1,text:{continue:"Submit",back:"Cancel"},handleBackClick:function(){C((0,se.Xx)(!1))}})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(be,{}),(0,E.Dy)(n).map((function(e){var t=n[(0,E.qD)(e.name)]||[];return(0,r.jsxs)(u.Fragment,{children:[(0,r.jsx)(ye,{children:e.display}),(0,r.jsx)("ul",{children:t.length>0?t.map((function(e){return(0,r.jsx)("li",{className:"url",children:e},e)})):(0,r.jsx)("li",{children:"No valid redirect URIs"})}),!n.publicAccess&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(ce.ZP,{type:"button",onClick:function(){return function(e){Z(e),window.location.hash="confirm-new-secret"}(e)},children:"Change your client secret"})}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]},e.name)}))]}),(0,r.jsxs)(le.Z,{id:"confirm-new-secret",children:[(0,r.jsxs)(ue.ZP.Header,{children:["You're About to Change Your Client Secret ",(0,r.jsx)(ue.ZP.Close,{onClick:function(){window.location.hash="#",Z(null)},children:"X"})]}),(0,r.jsxs)(ue.ZP.Content,{children:[(0,r.jsxs)(Ze,{children:[(0,r.jsx)(we,{icon:p.eHv,color:"black",title:"Warning",size:"2x"}),(0,r.jsxs)("strong",{children:["You're About to Change Your Client Secret for Your ",null===w||void 0===w?void 0:w.display," Environment."]})," "]}),(0,r.jsx)(ke,{}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Once you change your secret, your previous secret will no longer be valid for any applications using it."}),(0,r.jsx)("li",{children:"This means you will need to update any applications using this client with the new JSON details before they are functional again."})]}),(0,r.jsx)(qe,{children:(0,r.jsx)(Ce,{onClick:S,children:g?(0,r.jsx)(R.Z,{type:"Grid",color:"#FFF",height:18,width:50,visible:!0}):"Change Secret"})})]})]})]})})),Pe=function(e){switch(e){case"draft":return"In Draft";case"applied":return"Completed";default:return"Submitted"}},Oe=t(51479);function Re(){var e=(0,c.Z)(["\n  color: #777777;\n  font-size: ",";\n  font-weight: bold;\n  min-height: 30px;\n  border-bottom: 1px solid #707070;\n  margin-bottom: 5px;\n  overflow: wrap;\n"]);return Re=function(){return e},e}var Se=v.default.h3(Re(),b.CA);function De(){var e=(0,c.Z)(["\n  font-size: ",";\n  color: "," !important;\n"]);return De=function(){return e},e}var Ie=v.default.p(De(),b.KN,b.we),Ae=t(11752);function ze(){var e=(0,c.Z)(["\n  list-style-type: none;\n  margin: 0;\n  position: relative;\n\n  & li {\n    border-bottom: 1px solid #d4d4d4;\n    & svg.svg-inline--fa {\n      position: absolute;\n      right: 0;\n    }\n\n    & div.icon {\n      position: absolute;\n      right: 0;\n      bottom: 5px;\n    }\n  }\n"]);return ze=function(){return e},e}var Ue=v.default.ul(ze());function Ee(){var e=(0,c.Z)(["\n  margin-bottom: 10px;\n"]);return Ee=function(){return e},e}function Te(){var e=(0,c.Z)(["\n  color: ",";\n"]);return Te=function(){return e},e}function Ge(){var e=(0,c.Z)(["\n  font-size: 14px;\n"]);return Ge=function(){return e},e}function Ne(){var e=(0,c.Z)(["\n  border-bottom: none;\n  margin-top: 10px;\n"]);return Ne=function(){return e},e}var Be=((0,Ae.default)()||{}).publicRuntimeConfig,Ke=(void 0===Be?{}:Be).app_env,Le=(0,v.default)(Se)(Ne()),Me=(0,v.default)(Le)(Ge()),Xe=v.default.a(Te(),b.nc),Ye=(0,v.default)(Oe.Z)(Ee()),Je=function(e){switch(e){case"submitted":return 0;case"pr":return 33;case"planned":return 66;default:return 100}};function We(e){var n=e.selectedRequest,t=e.showTitle,i=void 0===t||t,o=n.status,a=n.prNumber,s=n.updatedAt,c=n.realm,u=function(e){switch(e){case"prFailed":case"planFailed":case"applyFailed":return!0;default:return!1}}(o),l=function(e){switch(e){case"submitted":return"Process request submitted...";case"pr":return"Pull request created...";case"planned":return"Terraform plan succeeded...";case"prFailed":case"planFailed":case"applyFailed":return"An error has occurred";default:return""}}(o),f=new Date(s||"").toLocaleString(),h=(0,E.Jx)(c),x=[(0,r.jsxs)("li",{children:["Process request submitted",(0,r.jsx)(d.G,{icon:p.f8k,color:"#00C45B"})]},"1")],v=function(e){switch(e){case"submitted":return 0;case"pr":return 1;case"prFailed":return 2;case"planned":return 3;case"planFailed":return 4;case"applied":return 5;case"applyFailed":return 6;default:return 0}}(o);if(v<1)x.push((0,r.jsxs)("li",{children:["Pull request created",(0,r.jsx)(d.G,{icon:p.LM3,color:"#B2B2B2",spin:!0})]},"2"));else if(2===v)x.push((0,r.jsxs)("li",{children:["Pull request creation failed",(0,r.jsx)(d.G,{icon:p.nYk,color:"#FF0000"})]},"2"));else{var m="production"===Ke?"https://github.com/bcgov/sso-terraform/pull/".concat(a):"https://github.com/bcgov/sso-terraform-dev/pull/".concat(a);x.push((0,r.jsxs)("li",{children:["Pull request created (",(0,r.jsx)(M.ZP,{external:!0,href:m,children:"link"}),")",(0,r.jsx)(d.G,{icon:p.f8k,color:"#00C45B"})]},"2"))}return v<3?x.push((0,r.jsxs)("li",{children:["Terraform plan succeeded",(0,r.jsx)(d.G,{icon:p.LM3,color:"#B2B2B2",spin:!0})]},"3")):4===v?x.push((0,r.jsxs)("li",{children:["Terraform plan failed",(0,r.jsx)(d.G,{icon:p.nYk,color:"#FF0000"})]},"3")):x.push((0,r.jsxs)("li",{children:["Terraform plan succeeded",(0,r.jsx)(d.G,{icon:p.f8k,color:"#00C45B"})]},"3")),v<5?x.push((0,r.jsxs)("li",{children:["Request processed",(0,r.jsx)(d.G,{icon:p.LM3,color:"#B2B2B2",spin:!0})]},"4")):6===v?x.push((0,r.jsxs)("li",{children:["Request failed",(0,r.jsx)(d.G,{icon:p.nYk,color:"#FF0000"})]},"4")):x.push((0,r.jsxs)("li",{children:["Request processed",(0,r.jsx)(d.G,{icon:p.f8k,color:"#00C45B"})]},"4")),(0,r.jsxs)(r.Fragment,{children:[i&&(0,r.jsxs)(Le,{children:["Access to ",h&&"Dev and/or Test"," environment(s) - approx 20 mins"]}),(0,r.jsx)(Me,{children:l}),(0,r.jsx)(Ye,{now:Je(o),animated:!0,variant:u?"danger":void 0}),(0,r.jsxs)(Ie,{children:["Last updated at ",f]}),(0,r.jsx)(Ue,{children:x}),(0,r.jsx)("br",{}),(0,r.jsxs)(L,{children:["If there is an error or the process takes longer than 20 mins then, please contact our SSO support team by"," ",(0,r.jsx)(Xe,{href:"https://chat.developer.gov.bc.ca/channel/sso",target:"_blank",title:"Rocket Chat",children:"Rocket.Chat"})," ","or"," ",(0,r.jsx)(Xe,{href:"mailto:bcgov.sso@gov.bc.ca",title:"Pathfinder SSO",target:"blank",children:"Email us"})," "]})]})}var He=t(87522),_e=t(98224),Ve=t(25367);function $e(e){var n=e.requestId,t=(0,u.useState)(!1),i=t[0],c=t[1],l=(0,u.useState)(!1),d=l[0],p=l[1],f=(0,u.useState)([]),h=f[0],x=f[1],v=function(){var e=(0,s.Z)(o().mark((function e(){var t,r,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return c(!0),e.next=5,(0,He.v)({requestId:n,eventCode:"request-update-success",clearNotifications:!0});case 5:t=e.sent,r=(0,a.Z)(t,2),i=r[0],r[1]?p(!0):i&&x(i.rows),c(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){v()}),[n]),d?(0,r.jsx)(O.ZP,{variant:"warning",content:"Failed to load details."}):i?(0,r.jsx)(_e.Z,{}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(Ve.Z,{events:h})})}var Qe=t(42881);function en(){var e=(0,c.Z)(["\n  .nav-link {\n    color: "," !important;\n    height: 30px !important;\n    font-size: "," !important;\n    font-weight: 600 !important;\n    padding-top: 0; !important;\n    border-top: unset !important;\n    border-left: unset !important;\n    border-right: unset !important;\n  }\n  .nav-link.active {\n    background-color: unset !important;\n    border-bottom: 3px solid orange;\n  }\n"]);return en=function(){return e},e}var nn=(0,v.default)(Qe.Z)(en(),b.we,b.CA),tn=t(37868);function rn(){var e=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0;\n\n  & p {\n    max-width: 90%;\n    margin: 5px 0;\n  }\n"]);return rn=function(){return e},e}function on(){var e=(0,c.Z)(["\n  height: ",";\n  width: ",";\n  border-radius: ",";\n  margin: ",";\n  margin-left: 0;\n  border: 2px solid #b3b3b3;\n"]);return on=function(){return e},e}var an="15px",sn=v.default.div(on(),an,an,an,"0"),cn=v.default.li(rn());function un(e){var n=e.request.updatedAt,t=new Date(n||"").toLocaleString();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Oe.Z,{now:50}),(0,r.jsxs)(Ie,{children:["Last updated at ",t]}),(0,r.jsxs)(Ue,{children:[(0,r.jsxs)(cn,{children:["Requirements email sent to IDIM",(0,r.jsx)(d.G,{icon:p.f8k,color:"#00C45B"})]}),(0,r.jsxs)(cn,{children:[(0,r.jsxs)("p",{children:["Please reach out to IDIM if you do not hear back within the next 2-3 business days (",(0,r.jsx)(M.ZP,{href:"mailto:IDIM.Consulting@gov.bc.ca",children:"IDIM.Consulting@gov.bc.ca"}),")"]}),(0,r.jsx)(d.G,{icon:p.FU$,color:"#b3b3b3"})]}),(0,r.jsxs)(cn,{children:[(0,r.jsx)("p",{children:"Access to prod"}),(0,r.jsx)(sn,{})]})]})]})}function ln(){var e=(0,c.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n"]);return ln=function(){return e},e}function dn(){var e=(0,c.Z)(["\n  margin-top: 10px;\n"]);return dn=function(){return e},e}var pn=(0,v.default)(Se)(dn()),fn=v.default.div(ln());var hn=function(e){var n=e.selectedRequest,t=e.defaultTabKey,i=e.setActiveKey,o=e.activeKey,a=void 0===o?t:o;if(!n)return null;var s=n.status,c=Pe(s||"draft"),u=(0,E.Jx)(null===n||void 0===n?void 0:n.realm)&&n.prod,l=null;return"In Draft"===c?l=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsxs)(O.ZP,{variant:"info",children:[(0,r.jsx)("div",{children:(0,r.jsx)("strong",{children:"Your request has not been submitted."})}),(0,r.jsx)("div",{children:'To complete your request, click "Edit" button.'})]})]}):"Submitted"===c?l=(0,r.jsx)(nn,{activeKey:"Integration-request-summary",children:(0,r.jsx)(h.Z,{eventKey:"Integration-request-summary",title:"Integration Request Summary",children:(0,r.jsx)(fn,{children:u?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(tn.Z,{number:1,title:"Access to Dev and/or Test environment(s) - approx 20 mins",variant:"secondary",children:[(0,r.jsx)(We,{selectedRequest:n,showTitle:!1}),(0,r.jsx)("br",{})]}),(0,r.jsx)(tn.Z,{number:2,title:"Access to Prod environment - (TBD)",variant:"secondary",children:(0,r.jsx)(un,{request:n})})]}):(0,r.jsx)(We,{selectedRequest:n})})})}):"Completed"===c&&(l=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(nn,{activeKey:a,onSelect:function(e){return i(e)},children:[(0,r.jsx)(h.Z,{eventKey:"installation-json",title:"Installation JSON",children:(0,r.jsx)(fn,{children:(0,r.jsx)(Q,{selectedRequest:n})})}),(0,r.jsx)(h.Z,{eventKey:"configuration-url",title:"URIs & Secrets",children:(0,r.jsx)(fn,{children:(0,r.jsx)(Fe,{selectedRequest:n})})}),(0,r.jsx)(h.Z,{eventKey:"data-changes",title:"Data Changes",children:(0,r.jsx)(fn,{children:(0,r.jsx)($e,{requestId:n.id})})})]}),u&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(pn,{children:"Production Status"}),(0,r.jsx)(un,{request:n})]})]})),l},xn=t(82401);function vn(){var e=(0,c.Z)(["\n  margin-bottom: 16px;\n"]);return vn=function(){return e},e}function mn(){var e=(0,c.Z)(["\n  text-align: center;\n  min-width: 100px;\n"]);return mn=function(){return e},e}function jn(){var e=(0,c.Z)(["\n  color: #006fc4;\n  height: 60px;\n  padding-left: 20px;\n  padding-top: 16px;\n  padding-bottom: 22px;\n  weight: 700;\n  background-color: #f8f8f8;\n"]);return jn=function(){return e},e}function gn(){var e=(0,c.Z)(["\n  color: #a12622;\n  height: 60px;\n  padding-left: 20px;\n  padding-top: 16px;\n  padding-bottom: 22px;\n  weight: 700;\n  background-color: #f2dede;\n"]);return gn=function(){return e},e}function bn(){var e=(0,c.Z)(["\n  overflow: auto;\n"]);return bn=function(){return e},e}function yn(){var e=(0,c.Z)(["\n  padding-right: 10px;\n"]);return yn=function(){return e},e}function wn(){var e=(0,c.Z)(["\n  margin-top: 20px;\n  display: flex;\n  justify-content: flex-end;\n  & button {\n    min-width: 150px;\n    margin-right: 20px;\n    display: inline-block;\n  }\n"]);return wn=function(){return e},e}var Zn=[{maxWidth:900,marginTop:0,marginLeft:10,marginRight:10,marginUnit:"px",horizontalAlign:"none"},{width:480,marginTop:0,marginLeft:2.5,marginRight:2.5,marginUnit:"rem",horizontalAlign:"none"}],kn=v.default.div(wn()),qn=(0,v.default)(d.G)(yn()),Cn=v.default.div(bn()),Fn=v.default.div(gn()),Pn=v.default.div(jn()),On=v.default.th(mn()),Rn=(0,v.default)(w)(vn()),Sn=u.createContext({});var Dn=function(e){e.currentUser;var n,t=(0,l.useRouter)(),i=(0,u.useState)(!1),c=i[0],v=i[1],g=(0,u.useState)(!1),b=g[0],y=g[1],w=(0,u.useState)(void 0),q=w[0],C=w[1],F=(0,u.useReducer)(P,{}),O=F[0],S=F[1],D=(0,u.useState)(!1),I=D[0],A=D[1],z=O.requests,U=void 0===z?[]:z,E=U.find((function(e){return e.id===Number(q)})),T=!["pr","planned","submitted"].includes((null===E||void 0===E?void 0:E.status)||""),G=(0,u.useState)(!1),N=G[0],B=G[1],K=(0,u.useState)(O.editingRequest?"configuration-url":"installation-json"),L=K[0],M=K[1],X=(0,u.useMemo)((function(){return{state:O,dispatch:S}}),[O,S]),Y=function(){var e=(0,s.Z)(o().mark((function e(){var n,r,i,s,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,(0,m.XJ)("all");case 3:n=e.sent,r=(0,a.Z)(n,2),i=r[0],r[1]?y(!0):(s=i||[],S((0,se.zp)(s)),(c=t.query.id)&&C(Number(c))),v(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=(0,s.Z)(o().mark((function e(){var n,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T){e.next=2;break}return e.abrupt("return");case 2:return A(!0),e.next=5,(0,m.Jl)(q);case 5:n=e.sent,t=(0,a.Z)(n,2),t[0],t[1],S((0,se.iW)(q||null)),A(!1),Y(),window.location.hash="#";case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,u.useEffect)((function(){Y()}),[]),(0,u.useEffect)((function(){return function(e){return e.some((function(e){return["submitted","pr","prFailed","planned","planFailed","approved","applyFailed"].includes(e.status||"")}))}(O.requests||[])&&(clearInterval(n),n=setInterval((0,s.Z)(o().mark((function e(){var t,r,i,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.XJ)("all");case 2:t=e.sent,r=(0,a.Z)(t,2),i=r[0],r[1]?clearInterval(n):(s=i||[],O.editingRequest||S((0,se.zp)(s)));case 7:case"end":return e.stop()}}),e)}))),5e3)),function(){n&&clearInterval(n)}}),[O.requests,O.editingRequest]);var W=function(){var e=(0,s.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(q!==n.id){e.next=2;break}return e.abrupt("return");case 2:C(null===n||void 0===n?void 0:n.id),S((0,se.Xx)(!1));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),H=function(){var e=(0,s.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.push("/request");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(c)return(0,r.jsx)(_e.Z,{});var _=null;return _=b?(0,r.jsxs)(Fn,{children:[(0,r.jsx)(d.G,{icon:p.RLE,title:"Unavailable"}),"\xa0 The system is unavailable at this moment. please refresh the page."]}):0===U.length?(0,r.jsxs)(Pn,{children:[(0,r.jsx)(d.G,{icon:p.sqG,title:"Information"}),"\xa0 No requests submitted"]}):(0,r.jsxs)(j.Z,{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Request ID"}),(0,r.jsx)("th",{children:"Project Name"}),(0,r.jsx)("th",{children:"Status"}),(0,r.jsx)(On,{children:"Actions"})]})}),(0,r.jsx)("tbody",{children:U.filter((function(e){return N===e.archived})).map((function(e){return(0,r.jsxs)("tr",{className:(null===E||void 0===E?void 0:E.id)===e.id?"active":"",onClick:function(){return W(e)},children:[(0,r.jsx)("td",{children:(0,x.padStart)(String(e.id),8,"0")}),(0,r.jsx)("td",{children:e.projectName}),(0,r.jsx)("td",{children:Pe(e.status||"draft")}),(0,r.jsx)("td",{children:(0,r.jsx)(k.ZP,{request:e,selectedRequest:E,setSelectedId:C,setActiveTab:M,archived:e.archived})})]},e.id)}))})]}),(0,r.jsxs)(Z.Z,{rules:Zn,children:[(0,r.jsx)(Rn,{size:"large",onClick:H,children:"+ Request Integration"}),(0,r.jsxs)(Sn.Provider,{value:X,children:[(0,r.jsx)(f.ZP,{cols:10,children:(0,r.jsxs)(f.ZP.Row,{collapse:"1100",gutter:[15,2],children:[(0,r.jsx)(f.ZP.Col,{span:6,children:(0,r.jsxs)(Cn,{children:[(0,r.jsxs)(nn,{onSelect:function(e){return B("archived"===e)},children:[(0,r.jsx)(h.Z,{eventKey:"active",title:"My Dashboard"}),(0,r.jsx)(h.Z,{eventKey:"archived",title:"Archived"})]}),_]})}),E&&(0,r.jsx)(f.ZP.Col,{span:4,children:(0,r.jsx)(hn,{selectedRequest:E,defaultTabKey:L,setActiveKey:M,activeKey:L},E.id+E.status+O.editingRequest)})]})}),(0,r.jsxs)(le.Z,{id:"delete-modal",children:[(0,r.jsxs)(ue.ZP.Header,{children:[(0,r.jsx)(qn,{icon:p.eHv,title:"Information",size:"2x",style:{paddingRight:"10px"}}),"Confirm Deletion"]}),(0,r.jsxs)(ue.ZP.Content,{children:["You are about to delete this integration request. This action cannot be undone.",(0,r.jsxs)(kn,{children:[(0,r.jsx)(xn.Z,{variant:"secondary",onClick:function(){return window.location.hash="#"},children:"Cancel"}),(0,r.jsx)(ce.ZP,{onClick:J,children:I?(0,r.jsx)(R.Z,{type:"Grid",color:"#FFF",height:18,width:50,visible:!0}):"Delete"})]})]})]})]})]})}},87522:function(e,n,t){"use strict";t.d(n,{v:function(){return s}});var r=t(809),i=t.n(r),o=t(92447),a=t(70513),s=function(){var e=(0,o.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.e.post("events",n).then((function(e){return e.data}));case 3:return t=e.sent,e.abrupt("return",[t,null]);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[null,e.t0]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()}}]);