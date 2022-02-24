(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[467],{61408:function(n,t,r){"use strict";r.d(t,{c4:function(){return b},Kk:function(){return g},MO:function(){return j},ZP:function(){return w}});var e=r(85893),u=r(809),i=r.n(u),a=r(92447),c=r(27261),o=r(11163),s=r(29163),l=r(17625),d=r(51436),p=r(98806),f=r(6645),h=r(30454);function v(){var n=(0,c.Z)(["\n  height: 40px;\n  border-right: 2px solid #e3e3e3;\n"]);return v=function(){return n},n}function x(){var n=(0,c.Z)(["\n  cursor: ",";\n  ","\n  ",";\n"]);return x=function(){return n},n}function m(){var n=(0,c.Z)(["\n  height: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding-right: 15px;\n  & > * {\n    margin-left: 15px;\n  }\n"]);return m=function(){return n},n}var b=s.default.div(m()),g=(0,s.default)(l.G)(x(),(function(n){return n.disabled?"not-allowed":"pointer"}),(function(n){return n.disabled?"color: #CACACA;":"color: black; &:hover { color: ".concat(n.activeColor||"#137ac8","; }")}),(function(n){return n.isUnread?"color: ".concat(h.Uo):""})),j=s.default.div(v());function w(n){var t=n.request,r=n.onDelete,u=n.children,c=(0,o.useRouter)(),s=(t||{}).archived,l=!s&&!["pr","planned","submitted"].includes((null===t||void 0===t?void 0:t.status)||""),v=!s&&["draft","applied"].includes(t.status||""),x="delete-modal-".concat(null===t||void 0===t?void 0:t.id),m=function(){var n=(0,a.Z)(i().mark((function n(r){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.stopPropagation(),v){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,c.push("/request/".concat(t.id,"?status=").concat(t.status));case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),j=function(){var n=(0,a.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!["pr","planned","submitted"].includes((null===t||void 0===t?void 0:t.status)||"")){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,(0,f.Jl)(t.id);case 5:window.location.hash="#",r&&r(t);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(b,{children:[u,(0,e.jsx)(g,{disabled:!v,icon:d.Xcf,role:"button","aria-label":"edit",onClick:m,title:"Edit",size:"lg"}),(0,e.jsx)(g,{icon:d.$aW,role:"button","aria-label":"delete",onClick:function(){t.id&&l&&(window.location.hash=x)},disabled:!l,activeColor:h.Uo,title:"Delete",size:"lg"})]}),(0,e.jsx)(p.Z,{id:x,content:"You are about to delete this integration request. This action cannot be undone.",onConfirm:j,title:"Confirm Deletion",confirmText:"Delete"})]})}},25367:function(n,t,r){"use strict";r.d(t,{Z:function(){return s}});var e=r(85893),u=r(27261),i=(r(67294),r(29163)),a=r(6434);function c(){var n=(0,u.Z)(["\n  margin-top: 20px;\n  max-height: calc(100vh - 250px);\n  overflow: auto;\n"]);return c=function(){return n},n}var o=i.default.div(c());function s(n){var t=n.events;return(0,e.jsx)(o,{children:t&&0!==t.length?t.map((function(n){return(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("strong",{children:"Event Code: "}),n.eventCode]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("strong",{children:"Created Time: "}),(t=n.createdAt,new Date(t).toLocaleString())]}),n.idirUserDisplayName&&(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{children:[(0,e.jsx)("strong",{children:"Created By: "}),n.idirUserDisplayName]})}),n.details&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{children:(0,e.jsx)("strong",{children:"Details"})}),"request-update-success"===n.eventCode?(0,e.jsxs)(e.Fragment,{children:[(0,a.Sx)(n.details.changes),(0,e.jsx)("strong",{children:"Comment: "}),(0,e.jsx)("p",{children:n.details.comment})]}):(0,e.jsx)("pre",{children:(0,e.jsx)("code",{children:JSON.stringify(n.details||{},void 0,2)})})]}),(0,e.jsx)("hr",{})]},n.id);var t})):(0,e.jsx)("div",{children:"No events found"})})}},65982:function(n,t,r){"use strict";var e=r(27261),u=r(29163),i=r(30454);function a(){var n=(0,e.Z)(["\n  font-size: ",";\n  color: "," !important;\n"]);return a=function(){return n},n}t.Z=u.default.p(a(),i.KN,i.we)},34605:function(n,t,r){"use strict";r.d(t,{Z:function(){return f}});var e=r(85893),u=r(27261),i=(r(67294),r(29163)),a=r(17625),c=r(51436),o=r(30454);function s(){var n=(0,u.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]);return s=function(){return n},n}function l(){var n=(0,u.Z)(["\n  margin-right: 10px;\n"]);return l=function(){return n},n}var d=(0,i.default)(a.G)(l()),p=i.default.div(s());function f(n){var t=n.children;return(0,e.jsxs)(p,{children:[(0,e.jsx)(d,{icon:c.sqG,color:o.UH,size:"2x"}),(0,e.jsx)("span",{children:(0,e.jsx)("em",{children:t})})]})}},20374:function(n,t,r){"use strict";r.d(t,{H:function(){return o}});var e=r(27261),u=r(29163),i=r(42881),a=r(30454);function c(){var n=(0,e.Z)(["\n  .nav-link {\n    color: black !important;\n    height: 30px !important;\n    font-size: "," !important;\n    font-weight: 600 !important;\n    padding-top: 0; !important;\n    border-top: unset !important;\n    border-left: unset !important;\n    border-right: unset !important;\n  }\n  .nav-link.active {\n    background-color: unset !important;\n    border-bottom: 3px solid orange;\n  }\n"]);return c=function(){return n},n}var o=(0,u.default)(i.Z)(c(),a.CA)},3278:function(n,t,r){"use strict";var e=r(27261),u=r(29163),i=r(30454);function a(){var n=(0,e.Z)(["\n  color: #777777;\n  font-size: ",";\n  font-weight: bold;\n  min-height: 30px;\n  border-bottom: 1px solid #707070;\n  margin-bottom: 5px;\n  overflow: wrap;\n"]);return a=function(){return n},n}var c=u.default.h3(a(),i.CA);t.Z=c},32781:function(n,t,r){"use strict";var e=r(27261),u=r(29163);function i(){var n=(0,e.Z)(["\n  list-style-type: none;\n  margin: 0;\n  position: relative;\n\n  & li {\n    border-bottom: 1px solid #d4d4d4;\n    & svg.svg-inline--fa {\n      position: absolute;\n      right: 0;\n    }\n\n    & div.icon {\n      position: absolute;\n      right: 0;\n      bottom: 5px;\n    }\n  }\n"]);return i=function(){return n},n}t.Z=u.default.ul(i())},90032:function(n,t,r){"use strict";r.d(t,{Z:function(){return q}});var e=r(85893),u=r(27261),i=r(51479),a=r(3278),c=r(17625),o=r(51436),s=r(74150),l=r(29163),d=r(30454),p=r(65982),f=r(11752),h=r(32781),v=r(34605);function x(){var n=(0,u.Z)(["\n  margin-bottom: 10px;\n"]);return x=function(){return n},n}function m(){var n=(0,u.Z)(["\n  color: ",";\n"]);return m=function(){return n},n}function b(){var n=(0,u.Z)(["\n  font-size: 14px;\n"]);return b=function(){return n},n}function g(){var n=(0,u.Z)(["\n  border-bottom: none;\n  margin-top: 10px;\n"]);return g=function(){return n},n}var j=((0,f.default)()||{}).publicRuntimeConfig,w=(void 0===j?{}:j).app_env,k=(0,l.default)(a.Z)(g()),Z=(0,l.default)(k)(b()),y=l.default.a(m(),d.nc),B=(0,l.default)(i.Z)(x()),C=function(n){switch(n){case"submitted":return 0;case"pr":return 33;case"planned":return 66;default:return 100}};function q(n){var t=n.selectedRequest,r=n.title,u=t.status,i=t.prNumber,a=t.updatedAt,l=function(n){switch(n){case"prFailed":case"planFailed":case"applyFailed":return!0;default:return!1}}(u),d=function(n){switch(n){case"submitted":return"Process request submitted...";case"pr":return"Pull request created...";case"planned":return"Terraform plan succeeded...";case"prFailed":case"planFailed":case"applyFailed":return"An error has occurred";default:return""}}(u),f=new Date(a||"").toLocaleString(),x=[(0,e.jsxs)("li",{children:["Process request submitted",(0,e.jsx)(c.G,{icon:o.f8k,color:"#00C45B"})]},"1")],m=function(n){switch(n){case"submitted":return 0;case"pr":return 1;case"prFailed":return 2;case"planned":return 3;case"planFailed":return 4;case"applied":return 5;case"applyFailed":return 6;default:return 0}}(u);if(m<1)x.push((0,e.jsxs)("li",{children:["Pull request created",(0,e.jsx)(c.G,{icon:o.LM3,color:"#B2B2B2",spin:!0})]},"2"));else if(2===m)x.push((0,e.jsxs)("li",{children:["Pull request creation failed",(0,e.jsx)(c.G,{icon:o.nYk,color:"#FF0000"})]},"2"));else{var b="production"===w?"https://github.com/bcgov/sso-terraform/pull/".concat(i):"https://github.com/bcgov/sso-terraform-dev/pull/".concat(i);x.push((0,e.jsxs)("li",{children:["Pull request created (",(0,e.jsx)(s.ZP,{external:!0,href:b,children:"link"}),")",(0,e.jsx)(c.G,{icon:o.f8k,color:"#00C45B"})]},"2"))}return m<3?x.push((0,e.jsxs)("li",{children:["Terraform plan succeeded",(0,e.jsx)(c.G,{icon:o.LM3,color:"#B2B2B2",spin:!0})]},"3")):4===m?x.push((0,e.jsxs)("li",{children:["Terraform plan failed",(0,e.jsx)(c.G,{icon:o.nYk,color:"#FF0000"})]},"3")):x.push((0,e.jsxs)("li",{children:["Terraform plan succeeded",(0,e.jsx)(c.G,{icon:o.f8k,color:"#00C45B"})]},"3")),m<5?x.push((0,e.jsxs)("li",{children:["Request processed",(0,e.jsx)(c.G,{icon:o.LM3,color:"#B2B2B2",spin:!0})]},"4")):6===m?x.push((0,e.jsxs)("li",{children:["Request failed",(0,e.jsx)(c.G,{icon:o.nYk,color:"#FF0000"})]},"4")):x.push((0,e.jsxs)("li",{children:["Request processed",(0,e.jsx)(c.G,{icon:o.f8k,color:"#00C45B"})]},"4")),(0,e.jsxs)(e.Fragment,{children:[r&&(0,e.jsx)(k,{children:r}),(0,e.jsx)(Z,{children:d}),(0,e.jsx)(B,{now:C(u),animated:!0,variant:l?"danger":void 0}),(0,e.jsxs)(p.Z,{children:["Last updated at ",f]}),(0,e.jsx)(h.Z,{children:x}),(0,e.jsx)("br",{}),(0,e.jsxs)(v.Z,{children:["If there is an error or the process takes longer than 20 mins then, please contact our SSO support team by"," ",(0,e.jsx)(y,{href:"https://chat.developer.gov.bc.ca/channel/sso",target:"_blank",title:"Rocket Chat",children:"Rocket.Chat"})," ","or"," ",(0,e.jsx)(y,{href:"mailto:bcgov.sso@gov.bc.ca",title:"Pathfinder SSO",target:"blank",children:"Email us"})," "]})]})}},23451:function(n,t,r){"use strict";var e=r(27261),u=r(29163),i=r(30454);function a(){var n=(0,e.Z)(["\n  width: 100%;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  text-align: left;\n  border-collapse: separate;\n  border-spacing: 0 ","px;\n\n  & thead {\n    font-size: 16px;\n    color: black;\n\n    & th {\n      min-width: ",";\n    }\n  }\n\n  & tbody {\n    font-size: ",";\n    tr {\n      height: ",";\n      background-color: #f8f8f8;\n      ","\n    }\n  }\n\n  td:first-child {\n    padding-left: 1em;\n    text-align: left;\n  }\n\n  th:last-child {\n    text-align: right;\n  }\n\n  td:last-child {\n    text-align: right;\n  }\n\n  & th,\n  & td {\n    border: none;\n    padding: 0;\n  }\n\n  & td {\n    ","\n  }\n"]);return a=function(){return n},n}var c=u.default.table(a(),i.gM,(function(n){return"mini"===n.variant?"30px":"140px"}),(function(n){return"mini"===n.variant?"14px":"16px"}),(function(n){return"mini"===n.variant?"".concat(i.ZW,"px"):"".concat(i.eX,"px")}),(function(n){return!n.readOnly&&"\n        &:hover {\n          background-color: ".concat(i.uB,";\n          cursor: pointer;\n        }\n        &.active {\n          background-color: ").concat(i.uB,";\n          font-weight: bold;\n          border: 2px solid #9fadc0 !important;\n        }\n      ")}),(function(n){return"mini"===n.variant&&"background-color: ".concat(i.uB,";")}));t.Z=c},87522:function(n,t,r){"use strict";r.d(t,{v:function(){return c}});var e=r(809),u=r.n(e),i=r(92447),a=r(70513),c=function(){var n=(0,i.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.e.post("events",t).then((function(n){return n.data}));case 3:return r=n.sent,n.abrupt("return",[r,null]);case 7:return n.prev=7,n.t0=n.catch(0),console.error(n.t0),n.abrupt("return",[null,n.t0]);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}()},6645:function(n,t,r){"use strict";r.d(t,{hG:function(){return s},A_:function(){return l},XJ:function(){return d},H0:function(){return p},zD:function(){return f},WN:function(){return h},Jl:function(){return v},Uw:function(){return x}});var e=r(809),u=r.n(e),i=r(92447),a=r(70513),c=r(96486),o=r(6434),s=function(){var n=(0,i.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.e.post("requests",t).then((function(n){return n.data}));case 3:return r=n.sent,n.abrupt("return",[(0,o.UB)(r),null]);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,a.z)(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,i.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.e.post("request",{requestId:(0,c.isString)(t)?parseInt(t):t}).then((function(n){return n.data}));case 3:return r=n.sent,n.abrupt("return",[(0,o.UB)(r),null]);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,a.z)(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,i.Z)(u().mark((function n(){var t,r,e,i=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"active",r={params:{include:t}},n.prev=2,n.next=5,a.e.get("requests",r).then((function(n){return n.data}));case 5:return e=n.sent,e=(0,c.orderBy)(e,["createdAt"],["desc"]),n.abrupt("return",[e.map(o.UB),null]);case 10:return n.prev=10,n.t0=n.catch(2),n.abrupt("return",(0,a.z)(n.t0));case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,i.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.e.get("team-integrations/".concat(t)).then((function(n){return n.data}));case 3:return r=n.sent,r=(0,c.orderBy)(r,["createdAt"],["desc"]),n.abrupt("return",[r.map(o.UB),null]);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return",(0,a.z)(n.t0));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,i.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.e.post("requests-all",t).then((function(n){return n.data}));case 3:return r=n.sent,n.abrupt("return",[{count:r.count,rows:r.rows.map(o.UB)},null]);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,a.z)(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,i.Z)(u().mark((function n(t){var r,e,i,c=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=c.length>1&&void 0!==c[1]&&c[1],n.prev=1,e="requests",r&&(e="".concat(e,"?submit=true")),n.next=6,a.e.put(e,t).then((function(n){return n.data}));case 6:return i=n.sent,n.abrupt("return",[(0,o.UB)(i),null]);case 10:return n.prev=10,n.t0=n.catch(1),n.abrupt("return",(0,a.z)(n.t0));case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,i.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.e.delete("requests",{params:{id:t}}).then((function(n){return n.data}));case 3:return r=n.sent,n.abrupt("return",[r,null]);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,a.z)(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,i.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.e.put("request-metadata",t).then((function(n){return n.data}));case 3:return r=n.sent,n.abrupt("return",[(0,o.UB)(r),null]);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,a.z)(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}()}}]);