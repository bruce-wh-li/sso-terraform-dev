(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{61408:function(e,n,t){"use strict";t.d(n,{W2:function(){return b},Kk:function(){return g},MO:function(){return y},ZP:function(){return w}});var r=t(85893),i=t(809),o=t.n(i),a=t(92447),s=t(27261),c=t(67294),u=t(11163),l=t(29163),d=t(17625),p=t(51436),f=t(49054),h=t(41340),x=t(30454);function v(){var e=(0,s.Z)(["\n  height: 40px;\n  border-right: 2px solid #e3e3e3;\n"]);return v=function(){return e},e}function m(){var e=(0,s.Z)(["\n  cursor: ",";\n  ","\n  ",";\n"]);return m=function(){return e},e}function j(){var e=(0,s.Z)(["\n  height: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding-right: 15px;\n  & > * {\n    margin-left: 15px;\n  }\n"]);return j=function(){return e},e}var b=l.default.div(j()),g=(0,l.default)(d.G)(m(),(function(e){return e.disabled?"not-allowed":"pointer"}),(function(e){return e.disabled?"color: #CACACA;":"color: black; &:hover { color: ".concat(e.activeColor||"#137ac8","; }")}),(function(e){return e.isUnread?"color: ".concat(x.Uo):""})),y=l.default.div(v());function w(e){var n=e.request,t=(0,c.useContext)(f.RequestsContext),i=t.state,s=t.dispatch,l=(0,u.useRouter)(),d=i.editingRequest,v=i.activeRequestId,m=(n||{}).archived,j=!m&&!["pr","planned","submitted"].includes((null===n||void 0===n?void 0:n.status)||""),y=function(){var e=(0,a.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("draft"!==n.status){e.next=2;break}return e.abrupt("return",l.push("/request/".concat(n.id)));case 2:s((0,h.r2)("configuration-url")),t.stopPropagation(),v===n.id?s((0,h.Xx)(!d)):(s((0,h.Xx)(!0)),s((0,h.Ld)(n.id)));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),w=function(){var e=(0,a.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.id&&j){e.next=2;break}return e.abrupt("return");case 2:window.location.hash="delete-modal";case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Z=!m&&["draft","applied"].includes(n.status||"");return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(b,{children:[(0,r.jsx)(g,{disabled:!Z,icon:p.Xcf,role:"button","aria-label":"edit",onClick:y,title:"Edit",size:"lg"}),(0,r.jsx)(g,{icon:p.$aW,role:"button","aria-label":"delete",onClick:w,disabled:!j,activeColor:x.Uo,title:"Delete",size:"lg"})]})})}},25367:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(85893),i=t(27261),o=(t(67294),t(29163)),a=t(6434);function s(){var e=(0,i.Z)(["\n  margin-top: 20px;\n  max-height: calc(100vh - 250px);\n  overflow: auto;\n"]);return s=function(){return e},e}var c=o.default.div(s());function u(e){var n=e.events;return(0,r.jsx)(c,{children:n&&0!==n.length?n.map((function(e){return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Event Code: "}),e.eventCode]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Created Time: "}),(n=e.createdAt,new Date(n).toLocaleString())]}),e.idirUserDisplayName&&(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Created By: "}),e.idirUserDisplayName]})}),e.details&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{children:(0,r.jsx)("strong",{children:"Details"})}),"request-update-success"===e.eventCode?(0,r.jsxs)(r.Fragment,{children:[(0,a.Sx)(e.details.changes),(0,r.jsx)("strong",{children:"Comment: "}),(0,r.jsx)("p",{children:e.details.comment})]}):(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:JSON.stringify(e.details||{},void 0,2)})})]}),(0,r.jsx)("hr",{})]},e.id);var n})):(0,r.jsx)("div",{children:"No events found"})})}},65982:function(e,n,t){"use strict";var r=t(27261),i=t(29163),o=t(30454);function a(){var e=(0,r.Z)(["\n  font-size: ",";\n  color: "," !important;\n"]);return a=function(){return e},e}n.Z=i.default.p(a(),o.KN,o.we)},34605:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r=t(85893),i=t(27261),o=(t(67294),t(29163)),a=t(17625),s=t(51436),c=t(30454);function u(){var e=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]);return u=function(){return e},e}function l(){var e=(0,i.Z)(["\n  margin-right: 10px;\n"]);return l=function(){return e},e}var d=(0,o.default)(a.G)(l()),p=o.default.div(u());function f(e){var n=e.children;return(0,r.jsxs)(p,{children:[(0,r.jsx)(d,{icon:s.sqG,color:c.UH,size:"2x"}),(0,r.jsx)("span",{children:(0,r.jsx)("em",{children:n})})]})}},20374:function(e,n,t){"use strict";t.d(n,{H:function(){return c}});var r=t(27261),i=t(29163),o=t(42881),a=t(30454);function s(){var e=(0,r.Z)(["\n  .nav-link {\n    color: black !important;\n    height: 30px !important;\n    font-size: "," !important;\n    font-weight: 600 !important;\n    padding-top: 0; !important;\n    border-top: unset !important;\n    border-left: unset !important;\n    border-right: unset !important;\n  }\n  .nav-link.active {\n    background-color: unset !important;\n    border-bottom: 3px solid orange;\n  }\n"]);return s=function(){return e},e}var c=(0,i.default)(o.Z)(s(),a.CA)},3278:function(e,n,t){"use strict";var r=t(27261),i=t(29163),o=t(30454);function a(){var e=(0,r.Z)(["\n  color: #777777;\n  font-size: ",";\n  font-weight: bold;\n  min-height: 30px;\n  border-bottom: 1px solid #707070;\n  margin-bottom: 5px;\n  overflow: wrap;\n"]);return a=function(){return e},e}var s=i.default.h3(a(),o.CA);n.Z=s},32781:function(e,n,t){"use strict";var r=t(27261),i=t(29163);function o(){var e=(0,r.Z)(["\n  list-style-type: none;\n  margin: 0;\n  position: relative;\n\n  & li {\n    border-bottom: 1px solid #d4d4d4;\n    & svg.svg-inline--fa {\n      position: absolute;\n      right: 0;\n    }\n\n    & div.icon {\n      position: absolute;\n      right: 0;\n      bottom: 5px;\n    }\n  }\n"]);return o=function(){return e},e}n.Z=i.default.ul(o())},90032:function(e,n,t){"use strict";t.d(n,{Z:function(){return C}});var r=t(85893),i=t(27261),o=t(51479),a=t(3278),s=t(17625),c=t(51436),u=t(74150),l=t(29163),d=t(30454),p=t(65982),f=t(11752),h=t(32781),x=t(34605);function v(){var e=(0,i.Z)(["\n  margin-bottom: 10px;\n"]);return v=function(){return e},e}function m(){var e=(0,i.Z)(["\n  color: ",";\n"]);return m=function(){return e},e}function j(){var e=(0,i.Z)(["\n  font-size: 14px;\n"]);return j=function(){return e},e}function b(){var e=(0,i.Z)(["\n  border-bottom: none;\n  margin-top: 10px;\n"]);return b=function(){return e},e}var g=((0,f.default)()||{}).publicRuntimeConfig,y=(void 0===g?{}:g).app_env,w=(0,l.default)(a.Z)(b()),Z=(0,l.default)(w)(j()),k=l.default.a(m(),d.nc),q=(0,l.default)(o.Z)(v()),P=function(e){switch(e){case"submitted":return 0;case"pr":return 33;case"planned":return 66;default:return 100}};function C(e){var n=e.selectedRequest,t=e.title,i=n.status,o=n.prNumber,a=n.updatedAt,l=function(e){switch(e){case"prFailed":case"planFailed":case"applyFailed":return!0;default:return!1}}(i),d=function(e){switch(e){case"submitted":return"Process request submitted...";case"pr":return"Pull request created...";case"planned":return"Terraform plan succeeded...";case"prFailed":case"planFailed":case"applyFailed":return"An error has occurred";default:return""}}(i),f=new Date(a||"").toLocaleString(),v=[(0,r.jsxs)("li",{children:["Process request submitted",(0,r.jsx)(s.G,{icon:c.f8k,color:"#00C45B"})]},"1")],m=function(e){switch(e){case"submitted":return 0;case"pr":return 1;case"prFailed":return 2;case"planned":return 3;case"planFailed":return 4;case"applied":return 5;case"applyFailed":return 6;default:return 0}}(i);if(m<1)v.push((0,r.jsxs)("li",{children:["Pull request created",(0,r.jsx)(s.G,{icon:c.LM3,color:"#B2B2B2",spin:!0})]},"2"));else if(2===m)v.push((0,r.jsxs)("li",{children:["Pull request creation failed",(0,r.jsx)(s.G,{icon:c.nYk,color:"#FF0000"})]},"2"));else{var j="production"===y?"https://github.com/bcgov/sso-terraform/pull/".concat(o):"https://github.com/bcgov/sso-terraform-dev/pull/".concat(o);v.push((0,r.jsxs)("li",{children:["Pull request created (",(0,r.jsx)(u.ZP,{external:!0,href:j,children:"link"}),")",(0,r.jsx)(s.G,{icon:c.f8k,color:"#00C45B"})]},"2"))}return m<3?v.push((0,r.jsxs)("li",{children:["Terraform plan succeeded",(0,r.jsx)(s.G,{icon:c.LM3,color:"#B2B2B2",spin:!0})]},"3")):4===m?v.push((0,r.jsxs)("li",{children:["Terraform plan failed",(0,r.jsx)(s.G,{icon:c.nYk,color:"#FF0000"})]},"3")):v.push((0,r.jsxs)("li",{children:["Terraform plan succeeded",(0,r.jsx)(s.G,{icon:c.f8k,color:"#00C45B"})]},"3")),m<5?v.push((0,r.jsxs)("li",{children:["Request processed",(0,r.jsx)(s.G,{icon:c.LM3,color:"#B2B2B2",spin:!0})]},"4")):6===m?v.push((0,r.jsxs)("li",{children:["Request failed",(0,r.jsx)(s.G,{icon:c.nYk,color:"#FF0000"})]},"4")):v.push((0,r.jsxs)("li",{children:["Request processed",(0,r.jsx)(s.G,{icon:c.f8k,color:"#00C45B"})]},"4")),(0,r.jsxs)(r.Fragment,{children:[t&&(0,r.jsx)(w,{children:t}),(0,r.jsx)(Z,{children:d}),(0,r.jsx)(q,{now:P(i),animated:!0,variant:l?"danger":void 0}),(0,r.jsxs)(p.Z,{children:["Last updated at ",f]}),(0,r.jsx)(h.Z,{children:v}),(0,r.jsx)("br",{}),(0,r.jsxs)(x.Z,{children:["If there is an error or the process takes longer than 20 mins then, please contact our SSO support team by"," ",(0,r.jsx)(k,{href:"https://chat.developer.gov.bc.ca/channel/sso",target:"_blank",title:"Rocket Chat",children:"Rocket.Chat"})," ","or"," ",(0,r.jsx)(k,{href:"mailto:bcgov.sso@gov.bc.ca",title:"Pathfinder SSO",target:"blank",children:"Email us"})," "]})]})}},41340:function(e,n,t){"use strict";t.d(n,{zp:function(){return r},Xx:function(){return i},nd:function(){return o},iW:function(){return a},Ti:function(){return s},kK:function(){return c},Ld:function(){return u},M4:function(){return l},$v:function(){return d},r2:function(){return p}});var r=function(e){return{type:"setRequests",payload:e}},i=function(e){return{type:"setEditingRequest",payload:e}},o=function(e){return{type:"updateRequest",payload:e}},a=function(e){return{type:"deleteRequest",payload:e}},s=function(e){return{type:"setTeams",payload:e}},c=function(e){return{type:"setDownloadError",payload:e}},u=function(e){return{type:"setActiveRequestId",payload:e}},l=function(e){return{type:"setActiveTeamId",payload:e}},d=function(e){return{type:"setTableTab",payload:e}},p=function(e){return{type:"setPanelTab",payload:e}}},23451:function(e,n,t){"use strict";var r=t(27261),i=t(29163),o=t(30454);function a(){var e=(0,r.Z)(["\n  width: 100%;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  text-align: left;\n  border-collapse: separate;\n  border-spacing: 0 ","px;\n\n  & thead {\n    font-size: 16px;\n    color: black;\n\n    & th {\n      min-width: 140px;\n    }\n  }\n\n  & tbody {\n    font-size: 16px;\n\n    tr {\n      height: ","px;\n      background-color: #f8f8f8;\n      &:hover {\n        background-color: #f0f8fe;\n        cursor: pointer;\n      }\n      &.active {\n        background-color: #f0f8fe;\n        font-weight: bold;\n        border: 2px solid #9fadc0 !important;\n      }\n    }\n  }\n\n  td:first-child {\n    padding-left: 1em;\n    text-align: left;\n  }\n\n  th:last-child {\n    text-align: right;\n  }\n\n  & th,\n  & td {\n    border: none;\n    padding: 0;\n  }\n"]);return a=function(){return e},e}var s=i.default.table(a(),o.gM,o.eX);n.Z=s},49054:function(e,n,t){"use strict";t.r(n),t.d(n,{RequestsContext:function(){return cn},default:function(){return un}});var r=t(85893),i=t(809),o=t.n(i),a=t(64121),s=t(92447),c=t(27261),u=t(67294),l=t(11163),d=t(64735),p=t(29163),f=t(6645),h=t(38073),x=t(40602),v=t(26265);function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){(0,v.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var b={tableTab:"activeProjects"},g=function(e,n){switch(n.type){case"setRequests":return j(j({},e),{},{requests:n.payload});case"setEditingRequest":return j(j({},e),{},{editingRequest:n.payload});case"updateRequest":var t=e.requests,r=null===t||void 0===t?void 0:t.map((function(e){return e.id===n.payload.id?n.payload:e}));return j(j({},e),{},{requests:r});case"deleteRequest":var i=e.requests,o=null===i||void 0===i?void 0:i.filter((function(e){return e.id!==n.payload}));return j(j({},e),{},{requests:o});case"setTeams":return j(j({},e),{},{teams:n.payload});case"setTableTab":return j(j({},e),{},{tableTab:n.payload,activeTeamId:void 0,activeRequestId:void 0});case"setPanelTab":return j(j({},e),{},{panelTab:n.payload});case"setActiveRequestId":return j(j({},e),{},{activeRequestId:n.payload,activeTeamId:void 0});case"setActiveTeamId":return j(j({},e),{},{activeTeamId:n.payload,activeRequestId:void 0});default:return e}},y=t(56841),w=t(45624),Z=t(17625),k=t(51436),q=t(31607),P=t(70513),C=function(){var e=(0,s.Z)(o().mark((function e(n,t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.e.post("installation",{requestId:n,environment:t}).then((function(e){return e.data}));case 3:return r=e.sent,e.abrupt("return",[r,null]);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[null,e.t0]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}(),R=function(){var e=(0,s.Z)(o().mark((function e(n,t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.e.put("installation",{requestId:n,environment:t}).then((function(e){return e.data}));case 3:return r=e.sent,e.abrupt("return",[r,null]);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[null,e.t0]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}(),O=t(83024),F=t(30454),I={shared:{button:"\n      border-radius: 0.222em;\n      border-width: 0;\n      padding: 0.6em 1.1em;\n      text-align: center;\n      text-decoration: none;\n      font-weight: 700;\n      letter-spacing: 1px;\n      display: inline-block;\n      cursor: pointer;\n      box-shadow: 0px 0px 0px 2px transparent inset, 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;\n    "},size:{xsmall:{button:"\n        font-size: 0.7rem;\n      "},small:{button:"\n        font-size: 0.8rem;\n      "},medium:{button:"\n        font-size: ".concat(F.n5,";\n      ")},large:{button:"\n        font-size: ".concat(F.zA,";\n      ")}},variant:{primary:{button:"\n        background-color: #D5EDFF;\n        box-shadow: 0px 0px 0px 2px #D5EDFF inset !important;\n        color: #3E3E3E;\n\n        &:hover {\n          text-decoration: underline;\n          background-color: #FFF7D5;\n          box-shadow: 0px 0px 0px 2px #FFF7D5 inset !important;\n          opacity: 0.80;\n        }\n\n        &:active {\n          opacity: 1;\n        }\n      "},grey:{button:"\n        background-color: #B2B2B2;\n        box-shadow: 0px 0px 0px 1px #707070 inset !important;\n        color: #F8F8F8;\n        min-width: 110px;\n\n        &:hover {\n          background-color: ".concat(F.TU,";\n          box-shadow: 0px 0px 0px 1px #707070 inset !important;\n        }\n      ")}}},T=(0,O.applyTheme)(I,{defaultProps:{variant:"primary",size:"medium"},breakProps:[],staticProps:["fullHeight","fullWidth"]}),D=function(e){return JSON.stringify(e,void 0,2)},S=function(e){var n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.focus(),n.select();try{return document.execCommand("copy"),document.body.removeChild(n),!0}catch(t){return document.body.removeChild(n),!1}},A=function(e,n){var t=window.URL.createObjectURL(new Blob([e],{type:"application/json"})),r=document.createElement("a");r.href=t,r.setAttribute("download",n),document.body.appendChild(r),r.click(),document.body.removeChild(r)},z=t(6434),E=t(25879),N=t(34605),U=t(74150);function B(){var e=(0,c.Z)(["\n  height: var(--field-top-spacing);\n"]);return B=function(){return e},e}function G(){var e=(0,c.Z)(["\n  color: #3e3e3e;\n  font-size: 14px;\n  font-weight: 700;\n"]);return G=function(){return e},e}function L(){var e=(0,c.Z)(["\n  color: #000;\n  font-size: ",";\n  font-weight: bold;\n"]);return L=function(){return e},e}function K(){var e=(0,c.Z)(["\n  text-align: center;\n"]);return K=function(){return e},e}var M=p.default.div(K()),H=p.default.span(L(),F.n5),X=p.default.span(G()),Y=p.default.div(B()),W=(0,E.l)((function(e){var n=e.selectedRequest,t=e.alert,i=(0,u.useState)(!1),c=i[0],l=i[1],p=function(){var e=(0,s.Z)(o().mark((function e(t){var r,i,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,C(n.id,t);case 3:return r=e.sent,i=(0,a.Z)(r,1),s=i[0],l(!1),e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,s.Z)(o().mark((function e(n){var r,i,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(n);case 2:r=e.sent,S(D(r)),i=r?"success":"danger",a=r?"Installation copied to clipboard":"Failed to download installation",t.show({variant:i,fadeOut:1e4,closable:!0,content:a});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,s.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:r=e.sent,A(D(r),"".concat(n.projectName,"-installation-").concat(t,".json"));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return c?(0,r.jsxs)(M,{children:[(0,r.jsx)(Y,{}),(0,r.jsx)(q.Z,{type:"Grid",color:"#000",height:45,width:45,visible:!0})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Y,{}),(0,r.jsx)(d.ZP,{cols:4,children:(0,z.Dy)(n).map((function(e){return(0,r.jsxs)(u.Fragment,{children:[(0,r.jsxs)(d.ZP.Row,{collapse:"992",gutter:[],align:"center",children:[(0,r.jsx)(d.ZP.Col,{span:1,children:(0,r.jsx)(H,{children:e.display})}),(0,r.jsxs)(d.ZP.Col,{span:3,children:[(0,r.jsx)(T,{size:"medium",variant:"grey",onClick:function(){return f(e.name)},children:"Copy"}),"\xa0",(0,r.jsx)(T,{size:"medium",variant:"grey",onClick:function(){return h(e.name)},children:"Download"}),"\xa0\xa0",(0,r.jsx)(Z.G,{color:"green",icon:k.f8k,title:"Ready"}),"\xa0",(0,r.jsx)(X,{children:"Ready"})]})]}),(0,r.jsx)("br",{})]},e.name)}))}),(0,r.jsxs)(N.Z,{children:["For more information on how to use these details, or for the public endpoints associated to your client, see"," ",(0,r.jsx)(U.ZP,{href:"https://github.com/bcgov/sso-requests/blob/dev/docs/developer-guide.md#using-your-integration",external:!0,children:"here"}),"."]})]})})),J=t(17849),_=t(28835);function $(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function V(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?$(Object(t),!0).forEach((function(n){(0,v.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Q=t(94679),ee=t(3083),ne=t(37605),te=t(41340),re=t(4826),ie=t(98806);function oe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ae(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?oe(Object(t),!0).forEach((function(n){(0,v.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):oe(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function se(){var e=(0,c.Z)(["\n  background-color: black;\n"]);return se=function(){return e},e}function ce(){var e=(0,c.Z)(["\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n"]);return ce=function(){return e},e}function ue(){var e=(0,c.Z)(["\n  margin-right: 20px;\n"]);return ue=function(){return e},e}function le(){var e=(0,c.Z)(["\n  color: #000;\n  font-size: 1.1rem;\n  font-weight: bold;\n"]);return le=function(){return e},e}function de(){var e=(0,c.Z)(["\n  height: var(--field-top-spacing);\n"]);return de=function(){return e},e}var pe=p.default.div(de()),fe=p.default.span(le()),he=(0,p.default)(Z.G)(ue()),xe=p.default.div(ce()),ve=p.default.hr(se()),me=(0,E.l)((function(e){var n=e.selectedRequest,t=e.alert,i=(0,l.useRouter)(),c=(0,u.useState)(n),d=c[0],p=c[1],h=(0,u.useState)(!1),x=h[0],v=h[1],m=(0,u.useState)(null),j=m[0],b=m[1],g=(0,u.useContext)(cn),y=g.state,w=g.dispatch,Z=y.editingRequest,q=function(e){var n=e.map((function(e){return e.name})),t={type:"object",properties:{devValidRedirectUris:V({type:"array",title:"Development",items:_.Fp,additionalItems:_.Fp,default:[""],addItemText:"Add another URI"},_.ID)}};return n.includes("test")&&(t.properties.testValidRedirectUris={type:"array",title:"Test",items:_.Fp,additionalItems:_.Fp,default:[""],addItemText:"Add another URI"}),n.includes("prod")&&(t.properties.prodValidRedirectUris={type:"array",title:"Production",items:_.Fp,additionalItems:_.Fp,default:[""],addItemText:"Add another URI"}),t}((0,z.Dy)(n)),P=function(){var e=(0,s.Z)(o().mark((function e(r){var s,c,u,l,d;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=ae(ae({},r.formData),{},{id:n.id}),v(!0),p(s),e.next=5,(0,f.WN)(s,!0);case 5:c=e.sent,u=(0,a.Z)(c,2),l=u[0],(d=u[1])?(p(n),t.show({variant:"info",fadeOut:1e4,closable:!0,content:(0,z.nU)(d).message})):(w((0,te.nd)(l)),p(l),i.push({pathname:"/my-requests",query:{id:n.id,mode:"edit"}}),w((0,te.Xx)(!1))),v(!1);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),C=function(){var e=(0,s.Z)(o().mark((function e(){var r,i,s,c,u,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(n.id,(null===j||void 0===j?void 0:j.name)||null);case 2:r=e.sent,i=(0,a.Z)(r,2),s=i[0],c=i[1],u=c?"danger":"success",l=c?"Failed to regenerate secret":"Client Secret Successfully Updated",t.show({variant:u,fadeOut:1e4,closable:!0,content:l}),window.location.hash="#",console.log(s,c);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(xe,{children:[(0,r.jsx)(he,{icon:k.eHv,color:"black",title:"Warning",size:"2x"}),(0,r.jsxs)("strong",{children:["You're About to Change Your Client Secret for Your ",null===j||void 0===j?void 0:j.display," Environment."]})," "]}),(0,r.jsx)(ve,{}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Once you change your secret, your previous secret will no longer be valid for any applications using it."}),(0,r.jsx)("li",{children:"This means you will need to update any applications using this client with the new JSON details before they are functional again."})]})]});return(0,r.jsxs)(r.Fragment,{children:[Z?(0,r.jsx)(J.Z,{schema:q,ArrayFieldTemplate:ee.Z,formData:d,disabled:x,onSubmit:P,liveValidate:!0,validate:Q.M,children:(0,r.jsx)(ne.Z,{formSubmission:!0,show:!0,loading:x||!1,text:{continue:"Submit",back:"Cancel"},handleBackClick:function(){w((0,te.Xx)(!1))}})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(pe,{}),(0,z.Dy)(n).map((function(e){var t=n[(0,z.qD)(e.name)]||[];return(0,r.jsxs)(u.Fragment,{children:[(0,r.jsx)(fe,{children:e.display}),(0,r.jsx)("ul",{children:t.length>0?t.map((function(e){return(0,r.jsx)("li",{className:"url",children:e},e)})):(0,r.jsx)("li",{children:"No valid redirect URIs"})}),!n.publicAccess&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(re.ZP,{type:"button",onClick:function(){return function(e){b(e),window.location.hash="confirm-new-secret"}(e)},children:"Change your client secret"})}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]},e.name)}))]}),(0,r.jsx)(ie.Z,{id:"confirm-new-secret",content:O,onConfirm:C,icon:k.eHv,title:"You're About to Change Your Client Secret",closable:!0})]})})),je=function(e){switch(e){case"draft":return"In Draft";case"applied":return"Completed";default:return"Submitted"}},be=t(90032),ge=t(87522),ye=t(98224),we=t(25367);function Ze(e){var n=e.requestId,t=(0,u.useState)(!1),i=t[0],c=t[1],l=(0,u.useState)(!1),d=l[0],p=l[1],f=(0,u.useState)([]),h=f[0],x=f[1],v=function(){var e=(0,s.Z)(o().mark((function e(){var t,r,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return c(!0),e.next=5,(0,ge.v)({requestId:n,eventCode:"request-update-success",clearNotifications:!0});case 5:t=e.sent,r=(0,a.Z)(t,2),i=r[0],r[1]?p(!0):i&&x(i.rows),c(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){v()}),[n]),d?(0,r.jsx)(w.ZP,{variant:"warning",content:"Failed to load details."}):i?(0,r.jsx)(ye.Z,{}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(we.Z,{events:h})})}var ke=t(20374),qe=t(85330),Pe=t(32781),Ce=t(51479),Re=t(65982);function Oe(){var e=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0;\n\n  & p {\n    max-width: 90%;\n    margin: 5px 0;\n  }\n"]);return Oe=function(){return e},e}function Fe(){var e=(0,c.Z)(["\n  height: ",";\n  width: ",";\n  border-radius: ",";\n  margin: ",";\n  margin-left: 0;\n  border: 2px solid #b3b3b3;\n"]);return Fe=function(){return e},e}var Ie="15px",Te=p.default.div(Fe(),Ie,Ie,Ie,"0"),De=p.default.li(Oe());function Se(e){var n=e.request.updatedAt,t=new Date(n||"").toLocaleString();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Ce.Z,{now:50}),(0,r.jsxs)(Re.Z,{children:["Last updated at ",t]}),(0,r.jsxs)(Pe.Z,{children:[(0,r.jsxs)(De,{children:["Requirements email sent to IDIM",(0,r.jsx)(Z.G,{icon:k.f8k,color:"#00C45B"})]}),(0,r.jsxs)(De,{children:[(0,r.jsxs)("p",{children:["Please reach out to IDIM if you do not hear back within the next 2-3 business days (",(0,r.jsx)(U.ZP,{href:"mailto:IDIM.Consulting@gov.bc.ca",children:"IDIM.Consulting@gov.bc.ca"}),")"]}),(0,r.jsx)(Z.G,{icon:k.FU$,color:"#b3b3b3"})]}),(0,r.jsxs)(De,{children:[(0,r.jsx)("p",{children:"Access to prod"}),(0,r.jsx)(Te,{})]})]})]})}var Ae=t(3278);function ze(){var e=(0,c.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n"]);return ze=function(){return e},e}function Ee(){var e=(0,c.Z)(["\n  margin-top: 10px;\n"]);return Ee=function(){return e},e}var Ne=(0,p.default)(Ae.Z)(Ee()),Ue=p.default.div(ze());var Be=function(){var e=(0,u.useContext)(cn),n=e.state,t=e.dispatch,i=n.requests,o=n.activeRequestId,a=n.panelTab,s=null===i||void 0===i?void 0:i.find((function(e){return e.id===o}));if(!s)return null;var c=s.status,l=s.bceidApproved,d=je(c||"draft"),p=(0,z.Jx)(null===s||void 0===s?void 0:s.realm)&&s.prod&&!l,f=null;return"In Draft"===d?f=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsxs)(w.ZP,{variant:"info",children:[(0,r.jsx)("div",{children:(0,r.jsx)("strong",{children:"Your request has not been submitted."})}),(0,r.jsx)("div",{children:'To complete your request, click "Edit" button.'})]})]}):"Submitted"===d?f=(0,r.jsx)(ke.H,{activeKey:"Integration-request-summary",children:(0,r.jsx)(y.Z,{eventKey:"Integration-request-summary",title:"Integration Request Summary",children:(0,r.jsx)(Ue,{children:p?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(qe.wk,{number:1,title:"Access to Dev and/or Test environment(s) - approx 20 mins",variant:"secondary",children:[(0,r.jsx)(be.Z,{selectedRequest:s}),(0,r.jsx)("br",{})]}),(0,r.jsx)(qe.wk,{number:2,title:"Access to Prod environment - (TBD)",variant:"secondary",children:(0,r.jsx)(Se,{request:s})})]}):(0,r.jsx)(be.Z,{selectedRequest:s,title:"Access to environment(s) - approx 20 mins"})})})}):"Completed"===d&&(f=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(ke.H,{activeKey:a,onSelect:function(e){return t((0,te.r2)(e))},children:[(0,r.jsx)(y.Z,{eventKey:"installation-json",title:"Installation JSON",children:(0,r.jsx)(Ue,{children:(0,r.jsx)(W,{selectedRequest:s})})}),(0,r.jsx)(y.Z,{eventKey:"configuration-url",title:"URIs & Secrets",children:(0,r.jsx)(Ue,{children:(0,r.jsx)(me,{selectedRequest:s})})}),(0,r.jsx)(y.Z,{eventKey:"history",title:"History",children:(0,r.jsx)(Ue,{children:(0,r.jsx)(Ze,{requestId:s.id})})})]}),p&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Ne,{children:"Production Status"}),(0,r.jsx)(Se,{request:s})]})]})),f};function Ge(){var e=(0,c.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n"]);return Ge=function(){return e},e}var Le=p.default.div(Ge());var Ke=function(){var e=(0,u.useContext)(cn).state,n=e.teams,t=e.activeTeamId;return(null===n||void 0===n?void 0:n.find((function(e){return e.id===t})))?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(ke.H,{activeKey:"members",children:(0,r.jsx)(y.Z,{eventKey:"members",title:"Members",children:(0,r.jsx)(Le,{children:"HIHIHI"})})})}):null},Me=t(96486),He=t(23451),Xe=t(61408);function Ye(){var e=(0,c.Z)(["\n  display: flex;\n  justify-content: flex-end;\n"]);return Ye=function(){return e},e}function We(){var e=(0,c.Z)(["\n  color: #006fc4;\n  height: 60px;\n  padding-left: 20px;\n  padding-top: 16px;\n  padding-bottom: 22px;\n  weight: 700;\n  background-color: #f8f8f8;\n"]);return We=function(){return e},e}function Je(){var e=(0,c.Z)(["\n  color: #a12622;\n  height: 60px;\n  padding-left: 20px;\n  padding-top: 16px;\n  padding-bottom: 22px;\n  weight: 700;\n  background-color: #f2dede;\n"]);return Je=function(){return e},e}function _e(){var e=(0,c.Z)(["\n  text-align: center;\n  min-width: 100px;\n"]);return _e=function(){return e},e}var $e=p.default.th(_e()),Ve=p.default.div(Je()),Qe=p.default.div(We()),en=p.default.div(Ye()),nn=(0,r.jsxs)(Ve,{children:[(0,r.jsx)(Z.G,{icon:k.RLE,title:"Unavailable"}),"\xa0 The system is unavailable at this moment. please refresh the page."]}),tn=function(e){var n=e.message;return(0,r.jsxs)(Qe,{children:[(0,r.jsx)(Z.G,{icon:k.sqG,title:"Information"}),"\xa0 ",n]})};function rn(){var e=(0,l.useRouter)(),n=(0,u.useContext)(cn),t=n.state,i=n.dispatch,a=t.requests,c=t.teams,d=t.activeRequestId,p=t.tableTab,f=t.downloadError,h=t.activeTeamId,x=a&&a.find((function(e){return e.archived})),v=null===a||void 0===a?void 0:a.find((function(e){return e.id===d})),m=null===c||void 0===c?void 0:c.find((function(e){return e.id===h})),j=function(){var e=(0,s.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(n.id,d),d!==n.id){e.next=3;break}return e.abrupt("return");case 3:i((0,te.Ld)(n.id)),i((0,te.Xx)(!1));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),b=function(){var e=(0,s.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i((0,te.M4)(null===n||void 0===n?void 0:n.id)));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),g=function(){var n=(0,s.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.push("/request");case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),w=function(e){var n="archivedProjects"===e;return f?nn:"activeProjects"===e&&0===(null===a||void 0===a?void 0:a.length)?(0,r.jsx)(tn,{message:"No Requests Submitted"}):"activeProjects"===e||"archivedProjects"===e?(0,r.jsxs)(He.Z,{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Request ID"}),(0,r.jsx)("th",{children:"Project Name"}),(0,r.jsx)("th",{children:"Status"}),(0,r.jsx)($e,{children:"Actions"})]})}),(0,r.jsx)("tbody",{children:null===a||void 0===a?void 0:a.filter((function(e){return n===e.archived})).map((function(e){return(0,r.jsxs)("tr",{className:(null===v||void 0===v?void 0:v.id)===e.id?"active":"",onClick:function(){return j(e)},children:[(0,r.jsx)("td",{children:(0,Me.padStart)(String(e.id),8,"0")}),(0,r.jsx)("td",{children:e.projectName}),(0,r.jsx)("td",{children:je(e.status||"draft")}),(0,r.jsx)("td",{children:(0,r.jsx)(Xe.ZP,{request:e})})]},e.id)}))})]}):"activeTeams"===e&&0===(null===c||void 0===c?void 0:c.length)?(0,r.jsx)(tn,{message:"You don't belong to a team"}):(0,r.jsxs)(He.Z,{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Team Name"}),(0,r.jsx)($e,{children:"Actions"})]})}),(0,r.jsx)("tbody",{children:c&&c.map((function(e){return(0,r.jsxs)("tr",{className:(null===m||void 0===m?void 0:m.id)===e.id?"active":"",onClick:function(){return b(e)},children:[(0,r.jsx)("td",{children:e.name}),(0,r.jsx)("td",{children:(0,r.jsxs)(en,{style:{display:"flex",justifyContent:"flex-end"},children:[(0,r.jsx)(Xe.Kk,{icon:k.Xcf,role:"button","aria-label":"edit",title:"Edit",size:"lg"}),(0,r.jsx)("div",{style:{width:"20px"}}),(0,r.jsx)(Xe.Kk,{icon:k.$aW,role:"button","aria-label":"edit",title:"Edit",size:"lg"})]})})]},e.name)}))})]})}(p);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(ke.H,{onSelect:function(e){return i((0,te.$v)(e))},children:[(0,r.jsx)(y.Z,{eventKey:"activeProjects",title:"My Projects"}),x&&(0,r.jsx)(y.Z,{eventKey:"archivedProjects",title:"Archived"}),(0,r.jsx)(y.Z,{eventKey:"activeTeams",title:"My Teams"})]}),(0,r.jsx)("br",{}),(0,r.jsx)(qe.zx,{size:"large",onClick:g,variant:"callout",children:"+ Request Integration"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),w]})}function on(){var e=(0,c.Z)(["\n  overflow: auto;\n"]);return on=function(){return e},e}var an=[{maxWidth:900,marginTop:0,marginLeft:10,marginRight:10,marginUnit:"px",horizontalAlign:"none"},{width:480,marginTop:0,marginLeft:2.5,marginRight:2.5,marginUnit:"rem",horizontalAlign:"none"}],sn=p.default.div(on()),cn=u.createContext({});var un=function(e){e.currentUser;var n,t=(0,l.useRouter)(),i=(0,u.useState)(!1),c=i[0],p=i[1],v=(0,u.useReducer)(g,b),m=v[0],j=v[1],y=m.requests,w=void 0===y?[]:y,Z=m.activeRequestId,k=m.activeTeamId,q=m.teams,P=null===w||void 0===w?void 0:w.find((function(e){return e.id===Number(Z)})),C=null===q||void 0===q?void 0:q.find((function(e){return e.id===Number(k)})),R=!["pr","planned","submitted"].includes((null===P||void 0===P?void 0:P.status)||""),O=(0,u.useMemo)((function(){return{state:m,dispatch:j}}),[m,j]),F=function(){var e=(0,s.Z)(o().mark((function e(){var n,r,i,s,c,u,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),j((0,te.Ld)()),e.next=4,Promise.all([(0,f.XJ)("all"),(0,h.L)()]);case 4:n=e.sent,r=(0,a.Z)(n,2),i=r[0],s=r[1],i[1]||s[1]?(0,te.kK)(!0):(c=i[0]||[],u=s[0]||[],j((0,te.zp)(c)),j((0,te.Ti)(u)),(l=t.query.id)&&(0,te.Ld)(Number(l))),p(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=(0,s.Z)(o().mark((function e(){var n,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(R){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,f.Jl)(Z);case 4:n=e.sent,t=(0,a.Z)(n,2),t[0],t[1],j((0,te.iW)(Z||null)),F(),window.location.hash="#";case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){F()}),[]),(0,u.useEffect)((function(){return(0,z.rn)(m.requests||[])&&(clearInterval(n),n=setInterval((0,s.Z)(o().mark((function e(){var t,r,i,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.XJ)("all");case 2:t=e.sent,r=(0,a.Z)(t,2),i=r[0],r[1]?clearInterval(n):(s=i||[],m.editingRequest||j((0,te.zp)(s)));case 7:case"end":return e.stop()}}),e)}))),5e3)),function(){n&&clearInterval(n)}}),[m.requests,m.editingRequest]),c?(0,r.jsx)(ye.Z,{}):(0,r.jsx)(x.Z,{rules:an,children:(0,r.jsxs)(cn.Provider,{value:O,children:[(0,r.jsx)(d.ZP,{cols:10,children:(0,r.jsxs)(d.ZP.Row,{collapse:"1100",gutter:[15,2],children:[(0,r.jsx)(d.ZP.Col,{span:6,children:(0,r.jsx)(sn,{children:(0,r.jsx)(rn,{})})}),P&&(0,r.jsx)(d.ZP.Col,{span:4,children:(0,r.jsx)(Be,{})}),C&&(0,r.jsx)(d.ZP.Col,{span:4,children:(0,r.jsx)(Ke,{})})]})}),(0,r.jsx)(ie.Z,{id:"delete-modal",content:"You are about to delete this integration request. This action cannot be undone.",onConfirm:I,title:"Confirm Deletion",confirmText:"Delete"})]})})}},87522:function(e,n,t){"use strict";t.d(n,{v:function(){return s}});var r=t(809),i=t.n(r),o=t(92447),a=t(70513),s=function(){var e=(0,o.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.e.post("events",n).then((function(e){return e.data}));case 3:return t=e.sent,e.abrupt("return",[t,null]);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[null,e.t0]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()}}]);