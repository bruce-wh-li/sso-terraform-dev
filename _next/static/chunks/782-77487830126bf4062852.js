(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[782],{61408:function(e,n,t){"use strict";t.d(n,{W2:function(){return b},Kk:function(){return j},MO:function(){return y},ZP:function(){return w}});var r=t(85893),i=t(809),o=t.n(i),a=t(92447),s=t(27261),c=t(67294),u=t(11163),l=t(29163),d=t(17625),p=t(51436),f=t(37509),h=t(41340),x=t(30454);function v(){var e=(0,s.Z)(["\n  height: 40px;\n  border-right: 2px solid #e3e3e3;\n"]);return v=function(){return e},e}function m(){var e=(0,s.Z)(["\n  cursor: ",";\n  ","\n  ",";\n"]);return m=function(){return e},e}function g(){var e=(0,s.Z)(["\n  height: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding-right: 15px;\n"]);return g=function(){return e},e}var b=l.default.div(g()),j=(0,l.default)(d.G)(m(),(function(e){return e.disabled?"not-allowed":"pointer"}),(function(e){return e.disabled?"color: #CACACA;":"color: #777777;&:hover { color: ".concat(e.activeColor||"#137ac8","; }")}),(function(e){return e.isUnread?"color: ".concat(x.Uo):""})),y=l.default.div(v());function w(e){var n=e.selectedRequest,t=e.request,i=e.setSelectedId,s=e.setActiveTab,l=e.archived,d=void 0!==l&&l,v=(0,c.useContext)(f.RequestsContext),m=v.state,g=v.dispatch,w=(0,u.useRouter)(),Z=m.editingRequest,k=!d&&!["pr","planned","submitted"].includes((null===t||void 0===t?void 0:t.status)||""),C=function(){var e=(0,a.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id&&k){e.next=2;break}return e.abrupt("return");case 2:window.location.hash="delete-modal";case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),q=function(){var e=(0,a.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s("data-changes"),t.hasUnreadNotifications=!1;case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=!d&&["draft","applied"].includes(t.status||"");return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(b,{children:[(0,r.jsx)(j,{disabled:!O,icon:p.Xcf,role:"button","aria-label":"edit",onClick:function(e){"draft"!==t.status?(s("configuration-url"),e.stopPropagation(),(null===n||void 0===n?void 0:n.id)===t.id?g((0,h.Xx)(!Z)):(g((0,h.Xx)(!0)),i(t.id))):w.push("/request/".concat(t.id))},title:"Edit"}),(0,r.jsx)(y,{}),(0,r.jsx)(j,{icon:p.Mzg,role:"button","aria-label":"view-events",onClick:q,activeColor:x.Uo,title:"Events",isUnread:null===t||void 0===t?void 0:t.hasUnreadNotifications}),(0,r.jsx)(y,{}),(0,r.jsx)(j,{icon:p.$aW,role:"button","aria-label":"delete",onClick:C,disabled:!k,activeColor:x.Uo,title:"Delete"})]})})}},25367:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(85893),i=t(27261),o=(t(67294),t(29163)),a=t(6434);function s(){var e=(0,i.Z)(["\n  margin-top: 20px;\n  max-height: calc(100vh - 250px);\n  overflow: auto;\n"]);return s=function(){return e},e}var c=o.default.div(s());function u(e){var n=e.events;return(0,r.jsx)(c,{children:n&&0!==n.length?n.map((function(e){return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Event Code: "}),e.eventCode]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Created Time: "}),(n=e.createdAt,new Date(n).toLocaleString())]}),e.idirUserDisplayName&&(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Created By: "}),e.idirUserDisplayName]})}),e.details&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{children:(0,r.jsx)("strong",{children:"Details"})}),"request-update-success"===e.eventCode?(0,r.jsxs)(r.Fragment,{children:[(0,a.Sx)(e.details.changes),(0,r.jsx)("strong",{children:"Comment: "}),(0,r.jsx)("p",{children:e.details.comment})]}):(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:JSON.stringify(e.details||{},void 0,2)})})]}),(0,r.jsx)("hr",{})]},e.id);var n})):(0,r.jsx)("div",{children:"No events found"})})}},41340:function(e,n,t){"use strict";t.d(n,{zp:function(){return r},Xx:function(){return i},nd:function(){return o},iW:function(){return a}});var r=function(e){return{type:"setRequests",payload:e}},i=function(e){return{type:"setEditingRequest",payload:e}},o=function(e){return{type:"updateRequest",payload:e}},a=function(e){return{type:"deleteRequest",payload:e}}},23451:function(e,n,t){"use strict";var r=t(27261);function i(){var e=(0,r.Z)(["\n  width: 100%;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  text-align: left;\n  border-collapse: separate;\n  border-spacing: 0 5px;\n\n  & thead {\n    font-size: 12px;\n    color: #777777;\n  }\n\n  & tbody {\n    font-size: 16px;\n\n    tr {\n      height: 60px;\n      background-color: #f8f8f8;\n      &:hover {\n        background-color: #fff7d5;\n      }\n      &.active {\n        background-color: #ffed9f;\n      }\n    }\n  }\n\n  th:first-child,\n  td:first-child {\n    padding-left: 1em;\n  }\n\n  & th,\n  & td {\n    border: none;\n  }\n"]);return i=function(){return e},e}var o=t(29163).default.table(i());n.Z=o},37509:function(e,n,t){"use strict";t.r(n),t.d(n,{RequestsContext:function(){return kn},default:function(){return Cn}});var r=t(85893),i=t(809),o=t.n(i),a=t(39227),s=t(92447),c=t(27261),u=t(67294),l=t(11163),d=t(17625),p=t(51436),f=t(64735),h=t(56841),x=t(96486),v=t(29163),m=t(6645),g=t(23451),b=t(83024),j=t(30454),y={shared:{button:"\n      border-radius: 0.222em;\n      border-width: 0;\n      padding: 0.6em 1.1em;\n      text-align: center;\n      text-decoration: none;\n      font-weight: 700;\n      letter-spacing: 1px;\n      display: inline-block;\n      cursor: pointer;\n      box-shadow: 0px 0px 0px 2px transparent inset, 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;\n    "},size:{xsmall:{button:"\n        font-size: 0.7rem;\n      "},small:{button:"\n        font-size: 0.8rem;\n      "},medium:{button:"\n        font-size: ".concat(j.n5,";\n      ")},large:{button:"\n        font-size: ".concat(j.zA,";\n      ")}},variant:{primary:{button:"\n        background-color: #D5EDFF;\n        box-shadow: 0px 0px 0px 2px #D5EDFF inset !important;\n        color: #3E3E3E;\n\n        &:hover {\n          text-decoration: underline;\n          background-color: #FFF7D5;\n          box-shadow: 0px 0px 0px 2px #FFF7D5 inset !important;\n          opacity: 0.80;\n        }\n\n        &:active {\n          opacity: 1;\n        }\n      "},grey:{button:"\n        background-color: #B2B2B2;\n        box-shadow: 0px 0px 0px 1px #707070 inset !important;\n        color: #F8F8F8;\n        min-width: 110px;\n\n        &:hover {\n          background-color: ".concat(j.TU,";\n          box-shadow: 0px 0px 0px 1px #707070 inset !important;\n        }\n      ")}}},w=(0,b.applyTheme)(y,{defaultProps:{variant:"primary",size:"medium"},breakProps:[],staticProps:["fullHeight","fullWidth"]}),Z=t(40602),k=t(61408),C=t(26265);function q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?q(Object(t),!0).forEach((function(n){(0,C.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var F=function(e,n){switch(n.type){case"setRequests":return O(O({},e),{},{requests:n.payload});case"setEditingRequest":return O(O({},e),{},{editingRequest:n.payload});case"updateRequest":var t=e.requests,r=null===t||void 0===t?void 0:t.map((function(e){return e.id===n.payload.id?n.payload:e}));return O(O({},e),{},{requests:r});case"deleteRequest":var i=e.requests,o=null===i||void 0===i?void 0:i.filter((function(e){return e.id!==n.payload}));return O(O({},e),{},{requests:o});default:return e}},P=t(45624),R=t(31607),S=t(70513),D=function(){var e=(0,s.Z)(o().mark((function e(n,t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.e.post("installation",{requestId:n,environment:t}).then((function(e){return e.data}));case 3:return r=e.sent,e.abrupt("return",[r,null]);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[null,e.t0]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}(),I=function(){var e=(0,s.Z)(o().mark((function e(n,t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.e.put("installation",{requestId:n,environment:t}).then((function(e){return e.data}));case 3:return r=e.sent,e.abrupt("return",[r,null]);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[null,e.t0]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}(),E=function(e){return JSON.stringify(e,void 0,2)},U=function(e){var n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.focus(),n.select();try{return document.execCommand("copy"),document.body.removeChild(n),!0}catch(t){return document.body.removeChild(n),!1}},z=function(e,n){var t=window.URL.createObjectURL(new Blob([e],{type:"application/json"})),r=document.createElement("a");r.href=t,r.setAttribute("download",n),document.body.appendChild(r),r.click(),document.body.removeChild(r)},A=t(6434),N=t(25879);function G(){var e=(0,c.Z)(["\n  height: var(--field-top-spacing);\n"]);return G=function(){return e},e}function T(){var e=(0,c.Z)(["\n  color: #3e3e3e;\n  font-size: 14px;\n  font-weight: 700;\n"]);return T=function(){return e},e}function B(){var e=(0,c.Z)(["\n  color: #000;\n  font-size: ",";\n  font-weight: bold;\n"]);return B=function(){return e},e}function K(){var e=(0,c.Z)(["\n  text-align: center;\n"]);return K=function(){return e},e}var L=v.default.div(K()),M=v.default.span(B(),j.n5),X=v.default.span(T()),Y=v.default.div(G()),J=(0,N.l)((function(e){var n=e.selectedRequest,t=e.alert,i=(0,u.useState)(!1),c=i[0],l=i[1],h=function(){var e=(0,s.Z)(o().mark((function e(t){var r,i,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,D(n.id,t);case 3:return r=e.sent,i=(0,a.Z)(r,2),s=i[0],i[1],l(!1),e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x=function(){var e=(0,s.Z)(o().mark((function e(n){var r,i,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(n);case 2:r=e.sent,U(E(r)),i=r?"success":"danger",a=r?"Installation copied to clipboard":"Failed to download installation",t.show({variant:i,fadeOut:1e4,closable:!0,content:a});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,s.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:r=e.sent,z(E(r),"".concat(n.projectName,"-installation-").concat(t,".json"));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return c?(0,r.jsxs)(L,{children:[(0,r.jsx)(Y,{}),(0,r.jsx)(R.Z,{type:"Grid",color:"#000",height:45,width:45,visible:!0})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Y,{}),(0,r.jsx)(f.ZP,{cols:4,children:(0,A.Dy)(n).map((function(e){return(0,r.jsxs)(u.Fragment,{children:[(0,r.jsxs)(f.ZP.Row,{collapse:"992",gutter:[],align:"center",children:[(0,r.jsx)(f.ZP.Col,{span:1,children:(0,r.jsx)(M,{children:e.display})}),(0,r.jsxs)(f.ZP.Col,{span:3,children:[(0,r.jsx)(w,{size:"medium",variant:"grey",onClick:function(){return x(e.name)},children:"Copy"}),"\xa0",(0,r.jsx)(w,{size:"medium",variant:"grey",onClick:function(){return v(e.name)},children:"Download"}),"\xa0\xa0",(0,r.jsx)(d.G,{color:"green",icon:p.f8k,title:"Ready"}),"\xa0",(0,r.jsx)(X,{children:"Ready"})]})]}),(0,r.jsx)("br",{})]},e.name)}))})]})})),W=t(17849),H=t(28835);function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function V(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(Object(t),!0).forEach((function(n){(0,C.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var $=t(94679),Q=t(3083),ee=t(1993),ne=t(41340),te=t(4826),re=t(69696),ie=t(98806);function oe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ae(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?oe(Object(t),!0).forEach((function(n){(0,C.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):oe(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function se(){var e=(0,c.Z)(["\n  width: 200px;\n"]);return se=function(){return e},e}function ce(){var e=(0,c.Z)(["\n  text-align: center;\n"]);return ce=function(){return e},e}function ue(){var e=(0,c.Z)(["\n  background-color: black;\n"]);return ue=function(){return e},e}function le(){var e=(0,c.Z)(["\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n"]);return le=function(){return e},e}function de(){var e=(0,c.Z)(["\n  margin-right: 20px;\n"]);return de=function(){return e},e}function pe(){var e=(0,c.Z)(["\n  color: #000;\n  font-size: 1.1rem;\n  font-weight: bold;\n"]);return pe=function(){return e},e}function fe(){var e=(0,c.Z)(["\n  height: var(--field-top-spacing);\n"]);return fe=function(){return e},e}var he=v.default.div(fe()),xe=v.default.span(pe()),ve=(0,v.default)(d.G)(de()),me=v.default.div(le()),ge=v.default.hr(ue()),be=v.default.div(ce()),je=(0,v.default)(te.ZP)(se()),ye=(0,N.l)((function(e){var n=e.selectedRequest,t=e.alert,i=(0,l.useRouter)(),c=(0,u.useState)(n),d=c[0],f=c[1],h=(0,u.useState)(!1),x=h[0],v=h[1],g=(0,u.useState)(!1),b=g[0],j=g[1],y=(0,u.useState)(null),w=y[0],Z=y[1],k=(0,u.useContext)(kn),C=k.state,q=k.dispatch,O=C.editingRequest,F=function(e){var n={type:"object",properties:{devValidRedirectUris:V({type:"array",title:"Development",items:H.Fp,additionalItems:H.Fp,default:[""],addItemText:"Add another URI"},H.ID)}};return e.includes("test")&&(n.properties.testValidRedirectUris={type:"array",title:"Test",items:H.Fp,additionalItems:H.Fp,default:[""],addItemText:"Add another URI"}),e.includes("prod")&&(n.properties.prodValidRedirectUris={type:"array",title:"Production",items:H.Fp,additionalItems:H.Fp,default:[""],addItemText:"Add another URI"}),n}(null===n||void 0===n?void 0:n.environments),P=function(){var e=(0,s.Z)(o().mark((function e(r){var s,c,u,l,d;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=ae(ae({},r.formData),{},{id:n.id}),v(!0),f(s),e.next=5,(0,m.WN)(s,!0);case 5:c=e.sent,u=(0,a.Z)(c,2),l=u[0],(d=u[1])?(f(n),t.show({variant:"info",fadeOut:1e4,closable:!0,content:(0,A.nU)(d).message})):(q((0,ne.nd)(l)),f(l),i.push({pathname:"/my-requests",query:{id:n.id,mode:"edit"}}),q((0,ne.Xx)(!1))),v(!1);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),S=function(){var e=(0,s.Z)(o().mark((function e(){var r,i,s,c,u,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,I(n.id,(null===w||void 0===w?void 0:w.name)||null);case 3:r=e.sent,i=(0,a.Z)(r,2),s=i[0],c=i[1],u=c?"danger":"success",l=c?"Failed to regenerate secret":"Client Secret Successfully Updated",t.show({variant:u,fadeOut:1e4,closable:!0,content:l}),j(!1),window.location.hash="#",console.log(s,c);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,r.jsxs)(r.Fragment,{children:[O?(0,r.jsx)(W.Z,{schema:F,ArrayFieldTemplate:Q.Z,formData:d,disabled:x,onSubmit:P,liveValidate:!0,validate:$.M,children:(0,r.jsx)(ee.Z,{formSubmission:!0,show:!0,loading:x||!1,text:{continue:"Submit",back:"Cancel"},handleBackClick:function(){q((0,ne.Xx)(!1))}})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(he,{}),(0,A.Dy)(n).map((function(e){var t=n[(0,A.qD)(e.name)]||[];return(0,r.jsxs)(u.Fragment,{children:[(0,r.jsx)(xe,{children:e.display}),(0,r.jsx)("ul",{children:t.length>0?t.map((function(e){return(0,r.jsx)("li",{className:"url",children:e},e)})):(0,r.jsx)("li",{children:"No valid redirect URIs"})}),!n.publicAccess&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(te.ZP,{type:"button",onClick:function(){return function(e){Z(e),window.location.hash="confirm-new-secret"}(e)},children:"Change your client secret"})}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]},e.name)}))]}),(0,r.jsxs)(ie.Z,{id:"confirm-new-secret",children:[(0,r.jsxs)(re.ZP.Header,{children:["You're About to Change Your Client Secret ",(0,r.jsx)(re.ZP.Close,{onClick:function(){window.location.hash="#",Z(null)},children:"X"})]}),(0,r.jsxs)(re.ZP.Content,{children:[(0,r.jsxs)(me,{children:[(0,r.jsx)(ve,{icon:p.eHv,color:"black",title:"Warning",size:"2x"}),(0,r.jsxs)("strong",{children:["You're About to Change Your Client Secret for Your ",null===w||void 0===w?void 0:w.display," Environment."]})," "]}),(0,r.jsx)(ge,{}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Once you change your secret, your previous secret will no longer be valid for any applications using it."}),(0,r.jsx)("li",{children:"This means you will need to update any applications using this client with the new JSON details before they are functional again."})]}),(0,r.jsx)(be,{children:(0,r.jsx)(je,{onClick:S,children:b?(0,r.jsx)(R.Z,{type:"Grid",color:"#FFF",height:18,width:50,visible:!0}):"Change Secret"})})]})]})]})})),we=function(e){switch(e){case"draft":return"In Draft";case"applied":return"Completed";default:return"Submitted"}},Ze=t(51479);function ke(){var e=(0,c.Z)(["\n  color: #777777;\n  font-size: ",";\n  font-weight: bold;\n  min-height: 30px;\n  border-bottom: 1px solid #707070;\n  margin-bottom: 5px;\n  overflow: wrap;\n"]);return ke=function(){return e},e}var Ce=v.default.h3(ke(),j.CA),qe=t(74150);function Oe(){var e=(0,c.Z)(["\n  font-size: ",";\n  color: "," !important;\n"]);return Oe=function(){return e},e}var Fe=v.default.p(Oe(),j.KN,j.we),Pe=t(11752);function Re(){var e=(0,c.Z)(["\n  list-style-type: none;\n  margin: 0;\n  position: relative;\n\n  & li {\n    border-bottom: 1px solid #d4d4d4;\n    & svg.svg-inline--fa {\n      position: absolute;\n      right: 0;\n    }\n\n    & div.icon {\n      position: absolute;\n      right: 0;\n      bottom: 5px;\n    }\n  }\n"]);return Re=function(){return e},e}var Se=v.default.ul(Re());function De(){var e=(0,c.Z)(["\n  margin-bottom: 10px;\n"]);return De=function(){return e},e}function Ie(){var e=(0,c.Z)(["\n  color: ",";\n"]);return Ie=function(){return e},e}function Ee(){var e=(0,c.Z)(["\n  margin-top: 20px;\n  border-bottom: none;\n"]);return Ee=function(){return e},e}function Ue(){var e=(0,c.Z)(["\n  color: ",";\n  padding-right: 5px;\n"]);return Ue=function(){return e},e}var ze=((0,Pe.default)()||{}).publicRuntimeConfig,Ae=(void 0===ze?{}:ze).app_env,Ne=(0,v.default)(d.G)(Ue(),j.UH),Ge=(0,v.default)(Ce)(Ee()),Te=v.default.a(Ie(),j.nc),Be=(0,v.default)(Ze.Z)(De()),Ke=function(e){switch(e){case"submitted":return 0;case"pr":return 33;case"planned":return 66;default:return 100}};function Le(e){var n=e.selectedRequest,t=n.status,i=n.prNumber,o=n.updatedAt,a=n.realm,s=function(e){switch(e){case"prFailed":case"planFailed":case"applyFailed":return!0;default:return!1}}(t),c=function(e){switch(e){case"submitted":return"Process request submitted...";case"pr":return"Pull request created...";case"planned":return"Terraform plan succeeded...";case"prFailed":case"planFailed":case"applyFailed":return"An error has occurred";default:return""}}(t),u=new Date(o||"").toLocaleString(),l=(0,A.Jx)(a),f=[(0,r.jsxs)("li",{children:["Process request submitted",(0,r.jsx)(d.G,{icon:p.f8k,color:"#00C45B"})]},"1")],h=function(e){switch(e){case"submitted":return 0;case"pr":return 1;case"prFailed":return 2;case"planned":return 3;case"planFailed":return 4;case"applied":return 5;case"applyFailed":return 6;default:return 0}}(t);if(h<1)f.push((0,r.jsxs)("li",{children:["Pull request created",(0,r.jsx)(d.G,{icon:p.LM3,color:"#B2B2B2",spin:!0})]},"2"));else if(2===h)f.push((0,r.jsxs)("li",{children:["Pull request creation failed",(0,r.jsx)(d.G,{icon:p.nYk,color:"#FF0000"})]},"2"));else{var x="production"===Ae?"https://github.com/bcgov/sso-terraform/pull/".concat(i):"https://github.com/bcgov/sso-terraform-dev/pull/".concat(i);f.push((0,r.jsxs)("li",{children:["Pull request created (",(0,r.jsx)(qe.ZP,{external:!0,href:x,children:"link"}),")",(0,r.jsx)(d.G,{icon:p.f8k,color:"#00C45B"})]},"2"))}return h<3?f.push((0,r.jsxs)("li",{children:["Terraform plan succeeded",(0,r.jsx)(d.G,{icon:p.LM3,color:"#B2B2B2",spin:!0})]},"3")):4===h?f.push((0,r.jsxs)("li",{children:["Terraform plan failed",(0,r.jsx)(d.G,{icon:p.nYk,color:"#FF0000"})]},"3")):f.push((0,r.jsxs)("li",{children:["Terraform plan succeeded",(0,r.jsx)(d.G,{icon:p.f8k,color:"#00C45B"})]},"3")),h<5?f.push((0,r.jsxs)("li",{children:["Request processed",(0,r.jsx)(d.G,{icon:p.LM3,color:"#B2B2B2",spin:!0})]},"4")):6===h?f.push((0,r.jsxs)("li",{children:["Request failed",(0,r.jsx)(d.G,{icon:p.nYk,color:"#FF0000"})]},"4")):f.push((0,r.jsxs)("li",{children:["Request processed",(0,r.jsx)(d.G,{icon:p.f8k,color:"#00C45B"})]},"4")),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(Ce,{children:[(0,r.jsx)(Ne,{icon:p.sqG}),"We are working on your request ",l&&"for your BCeID integration"," - Expected processing time is 20 mins"]}),(0,r.jsx)(Ge,{children:c}),(0,r.jsx)(Be,{now:Ke(t),animated:!0,variant:s?"danger":void 0}),(0,r.jsxs)(Fe,{children:["Last updated at ",u]}),(0,r.jsx)(Se,{children:f}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{children:["If there is an error or the process takes longer than 20 mins then, please contact our SSO support team by"," ",(0,r.jsx)(Te,{href:"https://chat.developer.gov.bc.ca/channel/sso",target:"_blank",title:"Rocket Chat",children:"Rocket.Chat"})," ","or"," ",(0,r.jsx)(Te,{href:"mailto:bcgov.sso@gov.bc.ca",title:"Pathfinder SSO",target:"blank",children:"Email us"})," "]})]})}var Me=t(87522),Xe=t(98224),Ye=t(25367);function Je(e){var n=e.requestId,t=(0,u.useState)(!1),i=t[0],c=t[1],l=(0,u.useState)(!1),d=l[0],p=l[1],f=(0,u.useState)([]),h=f[0],x=f[1],v=function(){var e=(0,s.Z)(o().mark((function e(){var t,r,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return c(!0),e.next=5,(0,Me.v)({requestId:n,eventCode:"request-update-success",clearNotifications:!0});case 5:t=e.sent,r=(0,a.Z)(t,2),i=r[0],r[1]?p(!0):i&&x(i.rows),c(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){v()}),[n]),d?(0,r.jsx)(P.ZP,{variant:"warning",content:"Failed to load details."}):i?(0,r.jsx)(Xe.Z,{}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(Ye.Z,{events:h})})}var We=t(42881);function He(){var e=(0,c.Z)(["\n  .nav-link {\n    color: "," !important;\n    height: 30px !important;\n    font-size: "," !important;\n    font-weight: 600 !important;\n    padding-top: 0; !important;\n    border-top: unset !important;\n    border-left: unset !important;\n    border-right: unset !important;\n  }\n  .nav-link.active {\n    background-color: unset !important;\n    border-bottom: 3px solid orange;\n  }\n"]);return He=function(){return e},e}var _e=(0,v.default)(We.Z)(He(),j.we,j.CA);function Ve(){var e=(0,c.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n"]);return Ve=function(){return e},e}var $e=v.default.div(Ve());var Qe=function(e){var n=e.selectedRequest,t=e.defaultTabKey,i=e.setActiveKey,o=e.activeKey,a=void 0===o?t:o;if((0,u.useContext)(kn).dispatch,!n)return null;var s=n.status,c=we(s||"draft"),l=null;return"In Draft"===c?l=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsxs)(P.ZP,{variant:"info",children:[(0,r.jsx)("div",{children:(0,r.jsx)("strong",{children:"Your request has not been submitted."})}),(0,r.jsx)("div",{children:'To complete your request, click "Edit" button.'})]})]}):"Submitted"===c?l=(0,r.jsx)(Le,{selectedRequest:n}):"Completed"===c&&(l=(0,r.jsxs)(_e,{activeKey:a,onSelect:function(e){return i(e)},children:[(0,r.jsx)(h.Z,{eventKey:"installation-json",title:"Installation JSON",children:(0,r.jsx)($e,{children:(0,r.jsx)(J,{selectedRequest:n})})}),(0,r.jsx)(h.Z,{eventKey:"configuration-url",title:"URIs & Secrets",children:(0,r.jsx)($e,{children:(0,r.jsx)(ye,{selectedRequest:n})})}),(0,r.jsx)(h.Z,{eventKey:"data-changes",title:"Data Changes",children:(0,r.jsx)($e,{children:(0,r.jsx)(Je,{requestId:n.id})})})]})),l},en=t(82401);function nn(){var e=(0,c.Z)(["\n  margin-top: 20px;\n  border-bottom: none;\n"]);return nn=function(){return e},e}function tn(){var e=(0,c.Z)(["\n  height: ",";\n  width: ",";\n  line-height: ",";\n  border-radius: ",";\n  margin: ",";\n  margin-left: 0;\n  border: 2px solid #b3b3b3;\n"]);return tn=function(){return e},e}var rn="15px",on=v.default.div(tn(),rn,rn,rn,rn,"0"),an=(0,v.default)(Ce)(nn());function sn(e){e.request;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(an,{children:"Expected processing time for prod"}),(0,r.jsxs)(Se,{children:[(0,r.jsxs)("li",{children:["Introduction email submitted",(0,r.jsx)(d.G,{icon:p.f8k,color:"#00C45B"})]}),(0,r.jsxs)("li",{children:["Please reach out to IDIM if you do not hear back within the next 2-3 business days (",(0,r.jsx)(qe.ZP,{href:"mailto:IDIM.Consulting@gov.bc.ca",children:"IDIM.Consulting@gov.bc.ca"}),")",(0,r.jsx)(d.G,{icon:p.FU$,color:"#b3b3b3"})]}),(0,r.jsxs)("li",{children:["Access to prod",(0,r.jsx)(on,{className:"icon"})]})]})]})}function cn(){var e=(0,c.Z)(["\n  margin-bottom: 16px;\n"]);return cn=function(){return e},e}function un(){var e=(0,c.Z)(["\n  text-align: center;\n  min-width: 100px;\n"]);return un=function(){return e},e}function ln(){var e=(0,c.Z)(["\n  color: #006fc4;\n  height: 60px;\n  padding-left: 20px;\n  padding-top: 16px;\n  padding-bottom: 22px;\n  weight: 700;\n  background-color: #f8f8f8;\n"]);return ln=function(){return e},e}function dn(){var e=(0,c.Z)(["\n  color: #a12622;\n  height: 60px;\n  padding-left: 20px;\n  padding-top: 16px;\n  padding-bottom: 22px;\n  weight: 700;\n  background-color: #f2dede;\n"]);return dn=function(){return e},e}function pn(){var e=(0,c.Z)(["\n  overflow: auto;\n"]);return pn=function(){return e},e}function fn(){var e=(0,c.Z)(["\n  padding-right: 10px;\n"]);return fn=function(){return e},e}function hn(){var e=(0,c.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n"]);return hn=function(){return e},e}function xn(){var e=(0,c.Z)(["\n  margin-top: 20px;\n  display: flex;\n  justify-content: flex-end;\n  & button {\n    min-width: 150px;\n    margin-right: 20px;\n    display: inline-block;\n  }\n"]);return xn=function(){return e},e}var vn=[{maxWidth:900,marginTop:0,marginLeft:10,marginRight:10,marginUnit:"px",horizontalAlign:"none"},{width:480,marginTop:0,marginLeft:2.5,marginRight:2.5,marginUnit:"rem",horizontalAlign:"none"}],mn=v.default.div(xn()),gn=(v.default.div(hn()),(0,v.default)(d.G)(fn())),bn=v.default.div(pn()),jn=v.default.div(dn()),yn=v.default.div(ln()),wn=v.default.th(un()),Zn=(0,v.default)(w)(cn()),kn=u.createContext({});var Cn=function(e){e.currentUser;var n,t=(0,l.useRouter)(),i=(0,u.useState)(!1),c=i[0],v=i[1],b=(0,u.useState)(!1),j=b[0],y=b[1],w=(0,u.useState)(void 0),C=w[0],q=w[1],O=(0,u.useReducer)(F,{}),P=O[0],S=O[1],D=(0,u.useState)(!1),I=D[0],E=D[1],U=P.requests,z=void 0===U?[]:U,N=z.find((function(e){return e.id===Number(C)})),G=!["pr","planned","submitted"].includes((null===N||void 0===N?void 0:N.status)||""),T=(0,u.useState)(!1),B=T[0],K=T[1],L=(0,u.useState)(P.editingRequest?"configuration-url":"installation-json"),M=L[0],X=L[1],Y=(N||{}).realm,J=(0,A.Jx)(Y),W=(0,u.useMemo)((function(){return{state:P,dispatch:S}}),[P,S]),H=function(){var e=(0,s.Z)(o().mark((function e(){var n,r,i,s,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,(0,m.XJ)("all");case 3:n=e.sent,r=(0,a.Z)(n,2),i=r[0],r[1]?y(!0):(s=i||[],S((0,ne.zp)(s)),(c=t.query.id)&&q(Number(c))),v(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=(0,s.Z)(o().mark((function e(){var n,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(G){e.next=2;break}return e.abrupt("return");case 2:return E(!0),e.next=5,(0,m.Jl)(C);case 5:n=e.sent,t=(0,a.Z)(n,2),t[0],t[1],S((0,ne.iW)(C||null)),E(!1),H(),window.location.hash="#";case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,u.useEffect)((function(){H()}),[]),(0,u.useEffect)((function(){return function(e){return e.some((function(e){return["submitted","pr","prFailed","planned","planFailed","approved","applyFailed"].includes(e.status||"")}))}(P.requests||[])&&(clearInterval(n),n=setInterval((0,s.Z)(o().mark((function e(){var t,r,i,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.XJ)("all");case 2:t=e.sent,r=(0,a.Z)(t,2),i=r[0],r[1]?clearInterval(n):((s=i||[]).map((function(e,n){return e.id===C?P.requests[n]:e})),P.editingRequest||S((0,ne.zp)(s)));case 7:case"end":return e.stop()}}),e)}))),5e3)),function(){n&&clearInterval(n)}}),[P.requests,P.editingRequest]);var V=function(){var e=(0,s.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C!==n.id){e.next=2;break}return e.abrupt("return");case 2:q(null===n||void 0===n?void 0:n.id),S((0,ne.Xx)(!1));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),$=function(){var e=(0,s.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.push("/request");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(c)return(0,r.jsx)(Xe.Z,{});var Q=null;return Q=j?(0,r.jsxs)(jn,{children:[(0,r.jsx)(d.G,{icon:p.RLE,title:"Unavailable"}),"\xa0 The system is unavailable at this moment. please refresh the page."]}):0===z.length?(0,r.jsxs)(yn,{children:[(0,r.jsx)(d.G,{icon:p.sqG,title:"Information"}),"\xa0 No requests submitted"]}):(0,r.jsxs)(g.Z,{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Request ID"}),(0,r.jsx)("th",{children:"Project Name"}),(0,r.jsx)("th",{children:"Status"}),(0,r.jsx)(wn,{children:"Actions"})]})}),(0,r.jsx)("tbody",{children:z.filter((function(e){return B===e.archived})).map((function(e){return(0,r.jsxs)("tr",{className:(null===N||void 0===N?void 0:N.id)===e.id?"active":"",onClick:function(){return V(e)},children:[(0,r.jsx)("td",{children:(0,x.padStart)(String(e.id),8,"0")}),(0,r.jsx)("td",{children:e.projectName}),(0,r.jsx)("td",{children:we(e.status||"draft")}),(0,r.jsx)("td",{children:(0,r.jsx)(k.ZP,{request:e,selectedRequest:N,setSelectedId:q,setActiveTab:X,archived:e.archived})})]},e.id)}))})]}),(0,r.jsxs)(Z.Z,{rules:vn,children:[(0,r.jsx)(Zn,{size:"large",onClick:$,children:"+ Request Integration"}),(0,r.jsxs)(kn.Provider,{value:W,children:[(0,r.jsx)(f.ZP,{cols:10,children:(0,r.jsxs)(f.ZP.Row,{collapse:"1100",gutter:[15,2],children:[(0,r.jsx)(f.ZP.Col,{span:6,children:(0,r.jsxs)(bn,{children:[(0,r.jsxs)(_e,{onSelect:function(e){return K("archived"===e)},children:[(0,r.jsx)(h.Z,{eventKey:"active",title:"My Dashboard"}),(0,r.jsx)(h.Z,{eventKey:"archived",title:"Archived"})]}),Q]})}),N&&(0,r.jsxs)(f.ZP.Col,{span:4,children:[(0,r.jsx)(Qe,{selectedRequest:N,defaultTabKey:M,setActiveKey:X,activeKey:M},N.id+N.status+P.editingRequest),J&&(0,r.jsx)(sn,{request:N})]})]})}),(0,r.jsxs)(ie.Z,{id:"delete-modal",children:[(0,r.jsxs)(re.ZP.Header,{children:[(0,r.jsx)(gn,{icon:p.eHv,title:"Information",size:"2x",style:{paddingRight:"10px"}}),"Confirm Deletion"]}),(0,r.jsxs)(re.ZP.Content,{children:["You are about to delete this integration request. This action cannot be undone.",(0,r.jsxs)(mn,{children:[(0,r.jsx)(en.Z,{variant:"secondary",onClick:function(){return window.location.hash="#"},children:"Cancel"}),(0,r.jsx)(te.ZP,{onClick:_,children:I?(0,r.jsx)(R.Z,{type:"Grid",color:"#FFF",height:18,width:50,visible:!0}):"Delete"})]})]})]})]})]})}},87522:function(e,n,t){"use strict";t.d(n,{v:function(){return s}});var r=t(809),i=t.n(r),o=t(92447),a=t(70513),s=function(){var e=(0,o.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.e.post("events",n).then((function(e){return e.data}));case 3:return t=e.sent,e.abrupt("return",[t,null]);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[null,e.t0]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()}}]);