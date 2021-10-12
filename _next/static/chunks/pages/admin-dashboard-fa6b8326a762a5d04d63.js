(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[897],{35611:function(e,n,t){"use strict";n.ZP=void 0;var r=t(96282),i=t(69829),a={shared:{label:"\n      display: block;\n      margin-bottom: 0.2777em;\n    ",wrapper:"\n      position: relative;\n      display: flex;\n      background: #fff;\n      overflow: hidden;\n      border: 2px solid #606060;\n      border-radius: 0;\n      padding: 0.3em 0;\n\n      &:after {\n        content: ' ';\n        background-image: "+(0,i.toSvgUrl)(i.ChevronDown)+";\n        background-size: contain;\n        background-repeat: no-repeat;\n        position: absolute;\n        right: 0.2em;\n        width: 1.2em;\n        height: 100%;\n        text-align: center;\n        cursor: pointer;\n        pointer-events: none;\n        -webkit-transition: .25s all ease;\n        -o-transition: .25s all ease;\n        transition: .25s all ease;\n      }\n\n      &:focus-within  {\n        outline: 4px solid #3B99FC;\n        outline-offset: 1px;\n      }\n\n      &:hover::after {}\n  ",input:"\n      -webkit-appearance: none;\n      -moz-appearance: none;\n      -ms-appearance: none;\n      appearance: none;\n      outline: 0;\n      box-shadow: none;\n      border: 0 !important;\n      background: #fff;\n      background-image: none;\n      display: inline-block;\n      flex: 1;\n      padding: 0 .5em;\n      color: #000;\n      cursor: pointer;\n\n      &::-ms-expand {\n        display: none;\n      }\n    "},size:{small:{container:"\n        font-size: 0.8rem;\n      "},medium:{container:"\n        font-size: 1rem;\n      "},large:{container:"\n        font-size: 1.2rem;\n      "}},rounded:{wrapper:"\n      border-radius: 0.25em;\n    "}};var l=(0,r.applyTheme)(a,{defaultProps:{size:"medium",rounded:!0,required:!1},staticProps:["fullWidth"],includeWrapper:!0});n.ZP=l},96282:function(e,n,t){"use strict";var r=t(95318);Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.applyTheme=void 0;var i=r(t(22122)),a=r(t(19756)),l=r(t(67294)),s=r(t(86010)),o=t(80927),u=function(e,n){var t=(0,o.processStyle)(e),r=(0,o.createStyleBuilder)(t,n),u=n.as||{},d=r(u.container||"div","container"),c=r("label","label"),p=n.includeWrapper?r(u.wrapper||"div","wrapper"):null,x=r("select","input"),h=(0,o.createBootstrap)(t,"select");return function(e){var n=h(e),t=n.id,r=n.name,o=n.label,u=n.ariaLabel,v=n.styleProps,f=n.children,m=n.className,g=n.rest,j=g.style,b=g.labelStyle,y=g.inputStyle,E=g.wrapperStyle,S=(0,a.default)(g,["style","labelStyle","inputStyle","wrapperStyle"]),P=l.default.createElement(x,(0,i.default)({"aria-label":u},S,{id:t,name:r,style:y,className:"pg-select-input"}),f);return l.default.createElement(d,(0,i.default)({},v,{style:j,className:(0,s.default)("pg-select",m)}),o&&l.default.createElement(c,(0,i.default)({htmlFor:t},v,{style:b,className:"pg-select-label"}),o),p?l.default.createElement(p,(0,i.default)({},v,{style:E,className:"pg-select-wrapper"}),P):P)}};n.applyTheme=u;var d=u({},{staticProps:["fullWidth"]});n.default=d},92665:function(e,n,t){"use strict";var r=t(85893),i=t(27261),a=t(6434),l=t(29163),s=t(30454);function o(){var e=(0,i.Z)(["\n  list-style: none;\n  margin: 0;\n  & li {\n    margin: 0;\n  }\n"]);return o=function(){return e},e}function u(){var e=(0,i.Z)(["\n  font-weight: 600;\n"]);return u=function(){return e},e}function d(){var e=(0,i.Z)(["\n  margin: 20px 0;\n  max-width: 500px;\n  background-color: #e3e3e3;\n  height: 2px !important;\n"]);return d=function(){return e},e}function c(){var e=(0,i.Z)(["\n  margin-top: ",";\n  font-size: unset;\n  & tr {\n    display: flex;\n    margin-top: 5px;\n    margin-bottom: 5px;\n    & > td {\n      border: none;\n      padding: 0 5px 0 0;\n    }\n  }\n"]);return c=function(){return e},e}var p=l.default.table(c(),s.SI),x=l.default.hr(d()),h=l.default.span(u()),v=l.default.ul(o()),f=function(e){return void 0===e?"":e?"Yes":"No"},m=function(e){var n=e.list,t=e.title;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:t}),1===(null===n||void 0===n?void 0:n.length)&&(0,r.jsx)(h,{children:(0,r.jsx)("span",{children:n[0]},n[0])})]}),(null===n||void 0===n?void 0:n.length)>1&&(0,r.jsx)("tr",{children:(0,r.jsx)("td",{children:(0,r.jsx)(h,{children:(0,r.jsx)(v,{children:null===n||void 0===n?void 0:n.map((function(e){return(0,r.jsx)("li",{children:e},e)}))})})})})]})};n.Z=function(e){var n=e.request;return n?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p,{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Are you the product owner or project admin/team lead?"}),(0,r.jsx)("td",{children:(0,r.jsx)(h,{children:f(null===n||void 0===n?void 0:n.projectLead)})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Have you requested an SSO access before?"}),(0,r.jsx)("td",{children:(0,r.jsx)(h,{children:f(null===n||void 0===n?void 0:n.newToSso)})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Client Type:"}),(0,r.jsx)("td",{children:(0,r.jsx)(h,{children:null!==n&&void 0!==n&&n.publicAccess?"Public":"Confidential"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Project Name:"}),(0,r.jsx)("td",{children:(0,r.jsx)(h,{children:null===n||void 0===n?void 0:n.projectName})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Default email address:"}),(0,r.jsx)("td",{children:(0,r.jsx)(h,{children:null===n||void 0===n?void 0:n.preferredEmail})})]}),(0,r.jsx)(m,{list:null===n||void 0===n?void 0:n.additionalEmails,title:"Additional Emails:"})]})}),(0,r.jsx)(x,{}),(0,r.jsx)(p,{children:(0,r.jsxs)("tbody",{children:[(0,r.jsx)(m,{list:(0,a.LF)(null===n||void 0===n?void 0:n.realm),title:"Identity Providers Required:"}),(0,r.jsx)(m,{list:null===n||void 0===n?void 0:n.devValidRedirectUris,title:"Dev Redirect URIs:"}),(0,r.jsx)(m,{list:null===n||void 0===n?void 0:n.testValidRedirectUris,title:"Test Redirect URIs:"}),(0,r.jsx)(m,{list:null===n||void 0===n?void 0:n.prodValidRedirectUris,title:"Prod Redirect URIs:"})]})})]}):null}},88032:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return we}});var r=t(85893),i=t(809),a=t.n(i),l=t(39227),s=t(92447),o=t(27261),u=t(67294),d=t(11163),c=t(96486),p=t(31607),x=t(29163),h=t(17625),v=t(51436),f=t(64735),m=t(40602),g=t(11915),j=t(4826),b=t(35611),y=t(22122),E=t(19756),S=t(94184),P=t.n(S),w=t(76792),C=t(84873),Z=["active","disabled","className","style","activeLabel","children"],R=["children"],k=u.forwardRef((function(e,n){var t=e.active,r=e.disabled,i=e.className,a=e.style,l=e.activeLabel,s=e.children,o=(0,E.default)(e,Z),d=t||r?"span":C.Z;return u.createElement("li",{ref:n,style:a,className:P()(i,"page-item",{active:t,disabled:r})},u.createElement(d,(0,y.default)({className:"page-link",disabled:r},o),s,t&&l&&u.createElement("span",{className:"sr-only"},l)))}));k.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},k.displayName="PageItem";var N=k;function U(e,n,t){function r(e){var r=e.children,i=(0,E.default)(e,R);return u.createElement(k,i,u.createElement("span",{"aria-hidden":"true"},r||n),u.createElement("span",{className:"sr-only"},t))}return void 0===t&&(t=e),r.displayName=e,r}var _=U("First","\xab"),A=U("Prev","\u2039","Previous"),F=U("Ellipsis","\u2026","More"),I=U("Next","\u203a"),T=U("Last","\xbb"),q=["bsPrefix","className","children","size"],L=u.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,i=e.children,a=e.size,l=(0,E.default)(e,q),s=(0,w.vE)(t,"pagination");return u.createElement("ul",(0,y.default)({ref:n},l,{className:P()(r,s,a&&s+"-"+a)}),i)}));L.First=_,L.Prev=A,L.Ellipsis=F,L.Item=N,L.Next=I,L.Last=T;var z=L,D=t(23451);function Q(){var e=(0,o.Z)(["\n  min-height: 44px;\n  border-bottom: 1px solid #707070;\n  margin-bottom: 5px;\n  padding-bottom: 5px;\n  overflow: wrap;\n"]);return Q=function(){return e},e}var W=x.default.div(Q());function K(){var e=(0,o.Z)(["\n  padding-left: 5px;\n  line-height: 40px;\n"]);return K=function(){return e},e}function M(){var e=(0,o.Z)(["\n  margin: 0 !important;\n  & li {\n    margin: 0 !important;\n  }\n"]);return M=function(){return e},e}var O=(0,x.default)(z)(M()),B=x.default.span(K()),G=function(e){return(0,r.jsx)(r.Fragment,{children:e.map((function(e){return(0,r.jsx)("option",{value:e.value,children:e.text},e.value)}))})},Y=function(e){for(var n=e.rowCount,t=e.limit,i=e.page,a=e.onPage,l=e.onPrev,s=e.onNext,o=parseInt(String((n-1)/t+1)),u=[(0,r.jsx)(z.Item,{disabled:1===i,onClick:function(){return l()},children:"Previous"},"prev")],d=function(e){u.push((0,r.jsx)(z.Item,{active:e===i,onClick:function(){return a(e)},children:e},e)),o===e&&u.push((0,r.jsx)(z.Item,{disabled:i===e,onClick:function(){return s()},children:"Next"},"next"))},c=1;c<=o;c++)d(c);return(0,r.jsx)(r.Fragment,{children:u})},H=function(e){var n=e.rowCount,t=e.limit,i=e.page,a=e.onPrev,l=e.onNext,s=parseInt(String((n-1)/t+1)),o=parseInt(String((i-1)*t+1)),u=o+t-1;return u>n&&(u=n),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(z.Item,{disabled:1===i,onClick:function(){return a(i-1)},children:"Previous"},"prev"),(0,r.jsx)(z.Item,{disabled:i===s,onClick:function(){return l(i+1)},children:"Next"},"next"),(0,r.jsx)(B,{children:"".concat(o,"-").concat(u," of ").concat(n)})]})};var V=function(e){var n=e.headers,t=e.children,i=e.onSearch,a=void 0===i?c.noop:i,l=e.onEnter,s=void 0===l?c.noop:l,o=e.onFilter,d=void 0===o?c.noop:o,p=e.onFilter2,x=void 0===p?c.noop:p,h=e.onLimit,v=void 0===h?c.noop:h,m=e.onPage,y=e.onPrev,E=void 0===y?c.noop:y,S=e.onNext,P=void 0===S?c.noop:S,w=e.filterItems,C=e.filterItems2,Z=e.pageLimits,R=e.searchKey,k=void 0===R?"":R,N=e.searchPlaceholder,U=void 0===N?"Search...":N,_=e.page,A=void 0===_?1:_,F=e.limit,I=void 0===F?10:F,T=e.rowCount,q=void 0===T?10:T,L=e.filter,z=void 0===L?"":L,Q=e.filter2,K=void 0===Q?"":Q;console.log("page",A);var M=(0,u.useState)(k),B=M[0],V=M[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(W,{children:(0,r.jsx)(f.ZP,{cols:12,children:(0,r.jsxs)(f.ZP.Row,{collapse:"992",gutter:[],align:"center",children:[(0,r.jsxs)(f.ZP.Col,{span:5,children:[(0,r.jsx)(g.ZP,{type:"text",size:"small",placeholder:U,style:{display:"inline-block"},value:B,onChange:function(e){V(e.target.value)},onKeyUp:function(e){"Enter"===e.key&&s(B)}}),(0,r.jsx)(j.ZP,{type:"button",size:"small",onClick:function(){a(B)},children:"Search"})]}),(0,r.jsxs)(f.ZP.Col,{span:7,style:{textAlign:"right"},children:[w&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{children:"Status: "}),(0,r.jsx)(b.ZP,{style:{display:"inline-block",width:"160px"},value:z,onChange:function(e){d(e.target.value)},children:G(w)})]}),"\xa0\xa0",C&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(b.ZP,{style:{display:"inline-block",width:"160px"},value:K,onChange:function(e){x(e.target.value)},children:G(C)})})]})]})})}),(0,r.jsxs)(D.Z,{children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:n.map((function(e,n){return(0,r.jsx)("th",{style:e.style||{},children:e.name},n)}))})}),(0,r.jsx)("tbody",{children:t})]}),Z&&(0,r.jsx)(f.ZP,{cols:12,children:(0,r.jsxs)(f.ZP.Row,{collapse:"992",gutter:[],align:"center",children:[(0,r.jsx)(f.ZP.Col,{span:8,children:(0,r.jsx)(O,{children:m?(0,r.jsx)(Y,{rowCount:q,limit:I,page:A,onPage:m}):(0,r.jsx)(H,{rowCount:q,limit:I,page:A,onPrev:E,onNext:P})})}),(0,r.jsx)(f.ZP.Col,{span:4,style:{textAlign:"right"},children:(0,r.jsx)(b.ZP,{style:{display:"inline-block",width:"160px"},value:String(I),onChange:function(e){v(Number(e.target.value))},children:G(Z)})})]})})]})},X=t(6645),J=t(61408),$=t(98806),ee=t(69696),ne=t(82401),te=t(87522),re=t(30454),ie=t(25367);function ae(){var e=(0,o.Z)(["\n  text-align: center;\n"]);return ae=function(){return e},e}function le(){var e=(0,o.Z)(["\n  color: #777777;\n  font-size: ",";\n  font-weight: bold;\n  margin-bottom: 0;\n"]);return le=function(){return e},e}var se=x.default.h3(le(),re.CA),oe=x.default.div(ae()),ue=[{value:"all",text:"All Events"},{value:"request-pr-success",text:"REQUEST_PR_SUCCESS"},{value:"request-pr-failure",text:"REQUEST_PR_FAILURE"},{value:"request-plan-success",text:"REQUEST_PLAN_SUCCESS"},{value:"request-plan-failure",text:"REQUEST_PLAN_FAILURE"},{value:"request-apply-success",text:"REQUEST_APPLY_SUCCESS"},{value:"request-apply-failure",text:"REQUEST_APPLY_FAILURE"},{value:"request-create-success",text:"REQUEST_CREATE_SUCCESS"},{value:"request-create-failure",text:"REQUEST_CREATE_FAILURE"},{value:"request-update-success",text:"REQUEST_UPDATE_SUCCESS"},{value:"request-update-failure",text:"REQUEST_UPDATE_FAILURE"},{value:"request-delete-success",text:"REQUEST_DELETE_SUCCESS"},{value:"request-delete-failure",text:"REQUEST_DELETE_FAILURE"},{value:"email-submission-failure",text:"EMAIL_SUBMISSION_FAILURE"}];function de(e){var n=e.requestId,t=(0,u.useState)("all"),i=t[0],o=t[1],d=(0,u.useState)([]),c=d[0],x=d[1],h=(0,u.useState)(!1),v=h[0],m=h[1],g=(0,u.useState)(!1),j=g[0],y=g[1],E=function(){var e=(0,s.Z)(a().mark((function e(){var t,r,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,(0,te.v)({requestId:n,eventCode:i});case 3:t=e.sent,r=(0,l.Z)(t,2),s=r[0],r[1]?y(!0):s&&x(s.rows),m(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,u.useEffect)((function(){E()}),[n,i]);var S;return j?null:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(W,{children:(0,r.jsx)(f.ZP,{cols:12,children:(0,r.jsxs)(f.ZP.Row,{collapse:"992",gutter:[],align:"center",children:[(0,r.jsx)(f.ZP.Col,{span:5,children:(0,r.jsx)(se,{children:"Events"})}),(0,r.jsx)(f.ZP.Col,{span:7,style:{textAlign:"right"},children:(0,r.jsx)(b.ZP,{style:{display:"inline-block",width:"250px"},value:i,onChange:function(e){o(e.target.value)},children:(S=ue,(0,r.jsx)(r.Fragment,{children:S.map((function(e){return(0,r.jsx)("option",{value:e.value,children:e.text},e.value)}))}))})})]})})}),v?(0,r.jsx)(oe,{children:(0,r.jsx)(p.Z,{type:"Grid",color:"#000",height:45,width:45,visible:v})}):(0,r.jsx)(ie.Z,{events:c})]})}var ce=t(92665);function pe(){var e=(0,o.Z)(["\n  max-height: calc(100vh - 250px);\n  overflow: auto;\n"]);return pe=function(){return e},e}function xe(){var e=(0,o.Z)(["\n  color: #777777;\n  font-size: ",";\n  font-weight: bold;\n  padding-top: 10px;\n  margin-bottom: 0;\n"]);return xe=function(){return e},e}var he=x.default.h3(xe(),re.CA),ve=x.default.div(pe());function fe(e){var n=e.request;return n?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(W,{children:(0,r.jsx)(he,{children:"Details"})}),(0,r.jsx)(ve,{children:(0,r.jsx)(ce.Z,{request:n})})]}):null}function me(){var e=(0,o.Z)(["\n  padding-right: 10px;\n"]);return me=function(){return e},e}function ge(){var e=(0,o.Z)(["\n  margin-top: 20px;\n  display: flex;\n  justify-content: flex-end;\n  & button {\n    min-width: 150px;\n    margin-right: 20px;\n    display: inline-block;\n  }\n"]);return ge=function(){return e},e}var je=[{value:"all",text:"All"},{value:"draft",text:"Draft"},{value:"submitted",text:"Submitted"},{value:"pr",text:"PR"},{value:"prFailed",text:"PR Failed"},{value:"planned",text:"Planned"},{value:"planFailed",text:"Plan Failed"},{value:"approved",text:"Approved"},{value:"applied",text:"Applied"},{value:"applyFailed",text:"Apply Failed"}],be=[{value:"all",text:"All"},{value:"active",text:"Active"},{value:"archived",text:"Deleted"}],ye=[{value:5,text:"5 per page"},{value:10,text:"10 per page"},{value:15,text:"15 per page"},{value:30,text:"30 per page"},{value:50,text:"50 per page"},{value:100,text:"100 per page"}],Ee=[{maxWidth:900,marginTop:0,marginLeft:10,marginRight:10,marginUnit:"px",horizontalAlign:"none"},{width:480,marginTop:0,marginLeft:2.5,marginRight:2.5,marginUnit:"rem",horizontalAlign:"none"}],Se=x.default.div(ge()),Pe=(0,x.default)(h.G)(me());function we(e){e.currentUser;var n,t,i=(0,d.useRouter)(),o=(0,u.useState)(!1),x=o[0],h=o[1],g=(0,u.useState)(!1),b=g[0],y=g[1],E=(0,u.useState)(!1),S=E[0],P=E[1],w=(0,u.useState)(!1),C=w[0],Z=w[1],R=(0,u.useState)([]),k=R[0],N=R[1],U=(0,u.useState)(String((null===(n=i.query)||void 0===n?void 0:n.id)||"")),_=U[0],A=U[1],F=(0,u.useState)(0),I=F[0],T=F[1],q=(0,u.useState)(5),L=q[0],z=q[1],D=(0,u.useState)(1),Q=D[0],W=D[1],K=(0,u.useState)("all"),M=K[0],O=K[1],B=(0,u.useState)("active"),G=B[0],Y=B[1],H=(0,u.useState)(Number(null===(t=i.query)||void 0===t?void 0:t.id)||void 0),te=H[0],ie=H[1],ae=function(){var e=(0,s.Z)(a().mark((function e(){var n,t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,(0,X.zD)({searchField:["id","projectName"],searchKey:_,order:[["updatedAt","desc"],["status","desc"]],limit:L,page:Q,status:M,archiveStatus:G});case 3:n=e.sent,t=(0,l.Z)(n,2),r=t[0],t[1]?P(!0):r&&(N(r.rows),T(r.count)),h(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if((0,u.useEffect)((function(){ae()}),[_,L,Q,M,G]),x)return(0,r.jsx)(m.Z,{rules:Ee,style:{textAlign:"center"},children:(0,r.jsx)(p.Z,{type:"Grid",color:"#000",height:45,width:45,visible:!0})});if(S)return null;var le=function(e){return["applied"].includes((null===e||void 0===e?void 0:e.status)||"")},se=function(e){return!["pr","planned","submitted"].includes((null===e||void 0===e?void 0:e.status)||"")},oe=function(){var e=(0,s.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.id&&le(n)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,i.push("/edit-request?id=".concat(n.id));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ue=function(){var e=(0,s.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.id&&se(n)){e.next=2;break}return e.abrupt("return");case 2:ie(n.id),window.location.hash="delete-modal";case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ce=function(){var e=(0,s.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(se){e.next=2;break}return e.abrupt("return");case 2:return y(!0),e.next=5,(0,X.Jl)(te);case 5:return y(!1),e.next=8,ae();case 8:window.location.hash="#";case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),pe=null;return te&&(pe=C?(0,r.jsx)(de,{requestId:te}):(0,r.jsx)(fe,{request:k.find((function(e){return e.id===te}))})),(0,r.jsxs)(m.Z,{rules:Ee,children:[(0,r.jsx)(f.ZP,{cols:10,children:(0,r.jsxs)(f.ZP.Row,{collapse:"800",gutter:[15,2],children:[(0,r.jsx)(f.ZP.Col,{span:6,children:(0,r.jsx)(V,{headers:[{name:"Request ID"},{name:"Project Name"},{name:"Request Status"},{name:"File Status"},{name:"Actions",style:{textAlign:"center",minWidth:"140px"}}],filterItems:je,filterItems2:be,pageLimits:ye,searchKey:_,searchPlaceholder:"Project ID or Name",limit:L,page:Q,rowCount:I,filter:M,filter2:G,onSearch:function(e){A(e),W(1)},onEnter:function(e){A(e),W(1)},onFilter:function(e){O(e),W(1)},onFilter2:function(e){Y(e),W(1)},onLimit:function(e){W(1),z(e)},onPrev:W,onNext:W,children:k.length>0?k.map((function(e){return(0,r.jsxs)("tr",{className:te===e.id?"active":"",onClick:function(){ie(e.id),Z(!1)},children:[(0,r.jsx)("td",{children:(0,c.padStart)(String(e.id),8,"0")}),(0,r.jsx)("td",{children:e.projectName}),(0,r.jsx)("td",{children:(0,c.startCase)(e.status)}),(0,r.jsx)("td",{children:e.archived?"Deleted":"Active"}),(0,r.jsx)("td",{children:(0,r.jsxs)(J.W2,{children:[(0,r.jsx)(J.Kk,{icon:v.Mdf,role:"button","aria-label":"events",onClick:function(n){n.stopPropagation(),ie(e.id),Z(!0)},title:"Events"}),(0,r.jsx)(J.MO,{}),(0,r.jsx)(J.Kk,{disabled:!le(e),icon:v.Xcf,role:"button","aria-label":"edit",onClick:function(){return oe(e)},title:"Edit"}),(0,r.jsx)(J.MO,{}),(0,r.jsx)(J.Kk,{icon:v.$aW,role:"button","aria-label":"delete",onClick:function(){return ue(e)},disabled:!se(e),activeColor:re.Uo,title:"Delete"})]})})]},e.id)})):(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:10,children:"No clients found."})})})}),(0,r.jsx)(f.ZP.Col,{span:4,children:pe})]})}),(0,r.jsxs)($.Z,{id:"delete-modal",children:[(0,r.jsxs)(ee.ZP.Header,{children:[(0,r.jsx)(Pe,{icon:v.eHv,title:"Information",size:"2x",style:{paddingRight:"10px"}}),"Confirm Deletion"]}),(0,r.jsxs)(ee.ZP.Content,{children:["You are about to delete this integration request. This action cannot be undone.",(0,r.jsxs)(Se,{children:[(0,r.jsx)(ne.Z,{variant:"secondary",onClick:function(){return window.location.hash="#"},children:"Cancel"}),(0,r.jsx)(j.ZP,{onClick:ce,children:b?(0,r.jsx)(p.Z,{type:"Grid",color:"#FFF",height:18,width:50,visible:!0}):"Delete"})]})]})]})]})}},83636:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin-dashboard",function(){return t(88032)}])}},function(e){e.O(0,[546,962,277,935,774,888,179],(function(){return n=83636,e(e.s=n);var n}));var n=e.O();_N_E=n}]);