(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[897],{92665:function(e,t,n){"use strict";var r=n(85893),i=n(27261),l=n(6434),a=n(29163),s=n(30454);function o(){var e=(0,i.Z)(["\n  list-style: none;\n  margin: 0;\n  & li {\n    margin: 0;\n  }\n"]);return o=function(){return e},e}function u(){var e=(0,i.Z)(["\n  font-weight: 600;\n"]);return u=function(){return e},e}function c(){var e=(0,i.Z)(["\n  margin: 20px 0;\n  max-width: 500px;\n  background-color: #e3e3e3;\n  height: 2px !important;\n"]);return c=function(){return e},e}function d(){var e=(0,i.Z)(["\n  margin-top: ",";\n  font-size: unset;\n  & tr {\n    display: flex;\n    margin-top: 5px;\n    margin-bottom: 5px;\n    & > td {\n      border: none;\n      padding: 0 5px 0 0;\n    }\n  }\n"]);return d=function(){return e},e}var x=a.default.table(d(),s.SI),h=a.default.hr(c()),v=a.default.span(u()),p=a.default.ul(o()),f=function(e){return void 0===e?"":e?"Yes":"No"},j=function(e){var t=e.list,n=e.title;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:n}),1===(null===t||void 0===t?void 0:t.length)&&(0,r.jsx)(v,{children:(0,r.jsx)("span",{children:t[0]},t[0])})]}),(null===t||void 0===t?void 0:t.length)>1&&(0,r.jsx)("tr",{children:(0,r.jsx)("td",{children:(0,r.jsx)(v,{children:(0,r.jsx)(p,{children:null===t||void 0===t?void 0:t.map((function(e){return(0,r.jsx)("li",{children:e},e)}))})})})})]})};t.Z=function(e){var t=e.request;return t?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Are you the product owner or project admin/team lead?"}),(0,r.jsx)("td",{children:(0,r.jsx)(v,{children:f(null===t||void 0===t?void 0:t.projectLead)})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Have you requested an SSO access before?"}),(0,r.jsx)("td",{children:(0,r.jsx)(v,{children:f(null===t||void 0===t?void 0:t.newToSso)})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Client Type:"}),(0,r.jsx)("td",{children:(0,r.jsx)(v,{children:null!==t&&void 0!==t&&t.publicAccess?"Public":"Confidential"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Project Name:"}),(0,r.jsx)("td",{children:(0,r.jsx)(v,{children:null===t||void 0===t?void 0:t.projectName})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Default email address:"}),(0,r.jsx)("td",{children:(0,r.jsx)(v,{children:null===t||void 0===t?void 0:t.preferredEmail})})]}),(0,r.jsx)(j,{list:null===t||void 0===t?void 0:t.additionalEmails,title:"Additional Emails:"})]})}),(0,r.jsx)(h,{}),(0,r.jsx)(x,{children:(0,r.jsxs)("tbody",{children:[(0,r.jsx)(j,{list:(0,l.LF)(null===t||void 0===t?void 0:t.realm),title:"Identity Providers Required:"}),(0,r.jsx)(j,{list:null===t||void 0===t?void 0:t.devValidRedirectUris,title:"Dev Redirect URIs:"}),(0,r.jsx)(j,{list:null===t||void 0===t?void 0:t.testValidRedirectUris,title:"Test Redirect URIs:"}),(0,r.jsx)(j,{list:null===t||void 0===t?void 0:t.prodValidRedirectUris,title:"Prod Redirect URIs:"})]})})]}):null}},88032:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ce}});var r=n(85893),i=n(809),l=n.n(i),a=n(39227),s=n(92447),o=n(27261),u=n(67294),c=n(11163),d=n(96486),x=n(31607),h=n(29163),v=n(17625),p=n(51436),f=n(64735),j=n(40602),m=n(11915),g=n(4826),E=n(35611),S=n(22122),b=n(19756),P=n(94184),y=n.n(P),C=n(76792),Z=n(84873),w=["active","disabled","className","style","activeLabel","children"],R=["children"],N=u.forwardRef((function(e,t){var n=e.active,r=e.disabled,i=e.className,l=e.style,a=e.activeLabel,s=e.children,o=(0,b.default)(e,w),c=n||r?"span":Z.Z;return u.createElement("li",{ref:t,style:l,className:y()(i,"page-item",{active:n,disabled:r})},u.createElement(c,(0,S.default)({className:"page-link",disabled:r},o),s,n&&a&&u.createElement("span",{className:"sr-only"},a)))}));N.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},N.displayName="PageItem";var U=N;function A(e,t,n){function r(e){var r=e.children,i=(0,b.default)(e,R);return u.createElement(N,i,u.createElement("span",{"aria-hidden":"true"},r||t),u.createElement("span",{className:"sr-only"},n))}return void 0===n&&(n=e),r.displayName=e,r}var _=A("First","\xab"),k=A("Prev","\u2039","Previous"),F=A("Ellipsis","\u2026","More"),I=A("Next","\u203a"),q=A("Last","\xbb"),L=["bsPrefix","className","children","size"],T=u.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,i=e.children,l=e.size,a=(0,b.default)(e,L),s=(0,C.vE)(n,"pagination");return u.createElement("ul",(0,S.default)({ref:t},a,{className:y()(r,s,l&&s+"-"+l)}),i)}));T.First=_,T.Prev=k,T.Ellipsis=F,T.Item=U,T.Next=I,T.Last=q;var D=T,Q=n(23451);function z(){var e=(0,o.Z)(["\n  min-height: 44px;\n  border-bottom: 1px solid #707070;\n  margin-bottom: 5px;\n  padding-bottom: 5px;\n  overflow: wrap;\n"]);return z=function(){return e},e}var K=h.default.div(z());function M(){var e=(0,o.Z)(["\n  padding-left: 5px;\n  line-height: 40px;\n"]);return M=function(){return e},e}function O(){var e=(0,o.Z)(["\n  margin: 0 !important;\n  & li {\n    margin: 0 !important;\n  }\n"]);return O=function(){return e},e}var G=(0,h.default)(D)(O()),W=h.default.span(M()),Y=function(e){return(0,r.jsx)(r.Fragment,{children:e.map((function(e){return(0,r.jsx)("option",{value:e.value,children:e.text},e.value)}))})},H=function(e){for(var t=e.rowCount,n=e.limit,i=e.page,l=e.onPage,a=e.onPrev,s=e.onNext,o=parseInt(String((t-1)/n+1)),u=[(0,r.jsx)(D.Item,{disabled:1===i,onClick:function(){return a()},children:"Previous"},"prev")],c=function(e){u.push((0,r.jsx)(D.Item,{active:e===i,onClick:function(){return l(e)},children:e},e)),o===e&&u.push((0,r.jsx)(D.Item,{disabled:i===e,onClick:function(){return s()},children:"Next"},"next"))},d=1;d<=o;d++)c(d);return(0,r.jsx)(r.Fragment,{children:u})},V=function(e){var t=e.rowCount,n=e.limit,i=e.page,l=e.onPrev,a=e.onNext,s=parseInt(String((t-1)/n+1)),o=parseInt(String((i-1)*n+1)),u=o+n-1;return u>t&&(u=t),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(D.Item,{disabled:1===i,onClick:function(){return l(i-1)},children:"Previous"},"prev"),(0,r.jsx)(D.Item,{disabled:i===s,onClick:function(){return a(i+1)},children:"Next"},"next"),(0,r.jsx)(W,{children:"".concat(o,"-").concat(u," of ").concat(t)})]})};var X=function(e){var t=e.headers,n=e.children,i=e.onSearch,l=void 0===i?d.noop:i,a=e.onEnter,s=void 0===a?d.noop:a,o=e.onFilter,c=void 0===o?d.noop:o,x=e.onFilter2,h=void 0===x?d.noop:x,v=e.onLimit,p=void 0===v?d.noop:v,j=e.onPage,S=e.onPrev,b=void 0===S?d.noop:S,P=e.onNext,y=void 0===P?d.noop:P,C=e.filterItems,Z=e.filterItems2,w=e.pageLimits,R=e.searchKey,N=void 0===R?"":R,U=e.searchPlaceholder,A=void 0===U?"Search...":U,_=e.page,k=void 0===_?1:_,F=e.limit,I=void 0===F?10:F,q=e.rowCount,L=void 0===q?10:q,T=e.filter,D=void 0===T?"":T,z=e.filter2,M=void 0===z?"":z;console.log("page",k);var O=(0,u.useState)(N),W=O[0],X=O[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(K,{children:(0,r.jsx)(f.ZP,{cols:12,children:(0,r.jsxs)(f.ZP.Row,{collapse:"992",gutter:[],align:"center",children:[(0,r.jsxs)(f.ZP.Col,{span:5,children:[(0,r.jsx)(m.ZP,{type:"text",size:"small",placeholder:A,style:{display:"inline-block"},value:W,onChange:function(e){X(e.target.value)},onKeyUp:function(e){"Enter"===e.key&&s(W)}}),(0,r.jsx)(g.ZP,{type:"button",size:"small",onClick:function(){l(W)},children:"Search"})]}),(0,r.jsxs)(f.ZP.Col,{span:7,style:{textAlign:"right"},children:[C&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{children:"Status: "}),(0,r.jsx)(E.ZP,{style:{display:"inline-block",width:"160px"},value:D,onChange:function(e){c(e.target.value)},children:Y(C)})]}),"\xa0\xa0",Z&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(E.ZP,{style:{display:"inline-block",width:"160px"},value:M,onChange:function(e){h(e.target.value)},children:Y(Z)})})]})]})})}),(0,r.jsxs)(Q.Z,{children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:t.map((function(e,t){return(0,r.jsx)("th",{style:e.style||{},children:e.name},t)}))})}),(0,r.jsx)("tbody",{children:n})]}),w&&(0,r.jsx)(f.ZP,{cols:12,children:(0,r.jsxs)(f.ZP.Row,{collapse:"992",gutter:[],align:"center",children:[(0,r.jsx)(f.ZP.Col,{span:8,children:(0,r.jsx)(G,{children:j?(0,r.jsx)(H,{rowCount:L,limit:I,page:k,onPage:j}):(0,r.jsx)(V,{rowCount:L,limit:I,page:k,onPrev:b,onNext:y})})}),(0,r.jsx)(f.ZP.Col,{span:4,style:{textAlign:"right"},children:(0,r.jsx)(E.ZP,{style:{display:"inline-block",width:"160px"},value:String(I),onChange:function(e){p(Number(e.target.value))},children:Y(w)})})]})})]})},B=n(6645),J=n(61408),$=n(98806),ee=n(69696),te=n(82401),ne=n(87522),re=n(30454),ie=n(25367);function le(){var e=(0,o.Z)(["\n  text-align: center;\n"]);return le=function(){return e},e}function ae(){var e=(0,o.Z)(["\n  color: #777777;\n  font-size: ",";\n  font-weight: bold;\n  margin-bottom: 0;\n"]);return ae=function(){return e},e}var se=h.default.h3(ae(),re.CA),oe=h.default.div(le()),ue=[{value:"all",text:"All Events"},{value:"request-pr-success",text:"REQUEST_PR_SUCCESS"},{value:"request-pr-failure",text:"REQUEST_PR_FAILURE"},{value:"request-plan-success",text:"REQUEST_PLAN_SUCCESS"},{value:"request-plan-failure",text:"REQUEST_PLAN_FAILURE"},{value:"request-apply-success",text:"REQUEST_APPLY_SUCCESS"},{value:"request-apply-failure",text:"REQUEST_APPLY_FAILURE"},{value:"request-create-success",text:"REQUEST_CREATE_SUCCESS"},{value:"request-create-failure",text:"REQUEST_CREATE_FAILURE"},{value:"request-update-success",text:"REQUEST_UPDATE_SUCCESS"},{value:"request-update-failure",text:"REQUEST_UPDATE_FAILURE"},{value:"request-delete-success",text:"REQUEST_DELETE_SUCCESS"},{value:"request-delete-failure",text:"REQUEST_DELETE_FAILURE"},{value:"email-submission-failure",text:"EMAIL_SUBMISSION_FAILURE"}];function ce(e){var t=e.requestId,n=(0,u.useState)("all"),i=n[0],o=n[1],c=(0,u.useState)([]),d=c[0],h=c[1],v=(0,u.useState)(!1),p=v[0],j=v[1],m=(0,u.useState)(!1),g=m[0],S=m[1],b=function(){var e=(0,s.Z)(l().mark((function e(){var n,r,s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,(0,ne.v)({requestId:t,eventCode:i});case 3:n=e.sent,r=(0,a.Z)(n,2),s=r[0],r[1]?S(!0):s&&h(s.rows),j(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,u.useEffect)((function(){b()}),[t,i]);var P;return g?null:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(K,{children:(0,r.jsx)(f.ZP,{cols:12,children:(0,r.jsxs)(f.ZP.Row,{collapse:"992",gutter:[],align:"center",children:[(0,r.jsx)(f.ZP.Col,{span:5,children:(0,r.jsx)(se,{children:"Events"})}),(0,r.jsx)(f.ZP.Col,{span:7,style:{textAlign:"right"},children:(0,r.jsx)(E.ZP,{style:{display:"inline-block",width:"250px"},value:i,onChange:function(e){o(e.target.value)},children:(P=ue,(0,r.jsx)(r.Fragment,{children:P.map((function(e){return(0,r.jsx)("option",{value:e.value,children:e.text},e.value)}))}))})})]})})}),p?(0,r.jsx)(oe,{children:(0,r.jsx)(x.Z,{type:"Grid",color:"#000",height:45,width:45,visible:p})}):(0,r.jsx)(ie.Z,{events:d})]})}var de=n(92665);function xe(){var e=(0,o.Z)(["\n  max-height: calc(100vh - 250px);\n  overflow: auto;\n"]);return xe=function(){return e},e}function he(){var e=(0,o.Z)(["\n  color: #777777;\n  font-size: ",";\n  font-weight: bold;\n  padding-top: 10px;\n  margin-bottom: 0;\n"]);return he=function(){return e},e}var ve=h.default.h3(he(),re.CA),pe=h.default.div(xe());function fe(e){var t=e.request;return t?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(K,{children:(0,r.jsx)(ve,{children:"Details"})}),(0,r.jsx)(pe,{children:(0,r.jsx)(de.Z,{request:t})})]}):null}function je(){var e=(0,o.Z)(["\n  padding-right: 10px;\n"]);return je=function(){return e},e}function me(){var e=(0,o.Z)(["\n  margin-top: 20px;\n  display: flex;\n  justify-content: flex-end;\n  & button {\n    min-width: 150px;\n    margin-right: 20px;\n    display: inline-block;\n  }\n"]);return me=function(){return e},e}var ge=[{value:"all",text:"All"},{value:"draft",text:"Draft"},{value:"submitted",text:"Submitted"},{value:"pr",text:"PR"},{value:"prFailed",text:"PR Failed"},{value:"planned",text:"Planned"},{value:"planFailed",text:"Plan Failed"},{value:"approved",text:"Approved"},{value:"applied",text:"Applied"},{value:"applyFailed",text:"Apply Failed"}],Ee=[{value:"all",text:"All"},{value:"active",text:"Active"},{value:"archived",text:"Deleted"}],Se=[{value:5,text:"5 per page"},{value:10,text:"10 per page"},{value:15,text:"15 per page"},{value:30,text:"30 per page"},{value:50,text:"50 per page"},{value:100,text:"100 per page"}],be=[{maxWidth:900,marginTop:0,marginLeft:10,marginRight:10,marginUnit:"px",horizontalAlign:"none"},{width:480,marginTop:0,marginLeft:2.5,marginRight:2.5,marginUnit:"rem",horizontalAlign:"none"}],Pe=h.default.div(me()),ye=(0,h.default)(v.G)(je());function Ce(e){e.currentUser;var t,n,i=(0,c.useRouter)(),o=(0,u.useState)(!1),h=o[0],v=o[1],m=(0,u.useState)(!1),E=m[0],S=m[1],b=(0,u.useState)(!1),P=b[0],y=b[1],C=(0,u.useState)(!1),Z=C[0],w=C[1],R=(0,u.useState)([]),N=R[0],U=R[1],A=(0,u.useState)(String((null===(t=i.query)||void 0===t?void 0:t.id)||"")),_=A[0],k=A[1],F=(0,u.useState)(0),I=F[0],q=F[1],L=(0,u.useState)(5),T=L[0],D=L[1],Q=(0,u.useState)(1),z=Q[0],K=Q[1],M=(0,u.useState)("all"),O=M[0],G=M[1],W=(0,u.useState)("active"),Y=W[0],H=W[1],V=(0,u.useState)(Number(null===(n=i.query)||void 0===n?void 0:n.id)||void 0),ne=V[0],ie=V[1],le=function(){var e=(0,s.Z)(l().mark((function e(){var t,n,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,(0,B.zD)({searchField:["id","projectName"],searchKey:_,order:[["updatedAt","desc"],["status","desc"]],limit:T,page:z,status:O,archiveStatus:Y});case 3:t=e.sent,n=(0,a.Z)(t,2),r=n[0],n[1]?y(!0):r&&(U(r.rows),q(r.count)),v(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if((0,u.useEffect)((function(){le()}),[_,T,z,O,Y]),h)return(0,r.jsx)(j.Z,{rules:be,style:{textAlign:"center"},children:(0,r.jsx)(x.Z,{type:"Grid",color:"#000",height:45,width:45,visible:!0})});if(P)return null;var ae=function(e){return["applied"].includes((null===e||void 0===e?void 0:e.status)||"")},se=function(e){return!["pr","planned","submitted"].includes((null===e||void 0===e?void 0:e.status)||"")},oe=function(){var e=(0,s.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id&&ae(t)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,i.push("/edit-request?id=".concat(t.id));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=(0,s.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id&&se(t)){e.next=2;break}return e.abrupt("return");case 2:ie(t.id),window.location.hash="delete-modal";case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),de=function(){var e=(0,s.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(se){e.next=2;break}return e.abrupt("return");case 2:return S(!0),e.next=5,(0,B.Jl)(ne);case 5:return S(!1),e.next=8,le();case 8:window.location.hash="#";case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),xe=null;return ne&&(xe=Z?(0,r.jsx)(ce,{requestId:ne}):(0,r.jsx)(fe,{request:N.find((function(e){return e.id===ne}))})),(0,r.jsxs)(j.Z,{rules:be,children:[(0,r.jsx)(f.ZP,{cols:10,children:(0,r.jsxs)(f.ZP.Row,{collapse:"800",gutter:[15,2],children:[(0,r.jsx)(f.ZP.Col,{span:6,children:(0,r.jsx)(X,{headers:[{name:"Request ID"},{name:"Project Name"},{name:"Request Status"},{name:"File Status"},{name:"Actions",style:{textAlign:"center",minWidth:"140px"}}],filterItems:ge,filterItems2:Ee,pageLimits:Se,searchKey:_,searchPlaceholder:"Project ID or Name",limit:T,page:z,rowCount:I,filter:O,filter2:Y,onSearch:function(e){k(e),K(1)},onEnter:function(e){k(e),K(1)},onFilter:function(e){G(e),K(1)},onFilter2:function(e){H(e),K(1)},onLimit:function(e){K(1),D(e)},onPrev:K,onNext:K,children:N.length>0?N.map((function(e){return(0,r.jsxs)("tr",{className:ne===e.id?"active":"",onClick:function(){ie(e.id),w(!1)},children:[(0,r.jsx)("td",{children:(0,d.padStart)(String(e.id),8,"0")}),(0,r.jsx)("td",{children:e.projectName}),(0,r.jsx)("td",{children:(0,d.startCase)(e.status)}),(0,r.jsx)("td",{children:e.archived?"Deleted":"Active"}),(0,r.jsx)("td",{children:(0,r.jsxs)(J.W2,{children:[(0,r.jsx)(J.Kk,{icon:p.Mdf,role:"button","aria-label":"events",onClick:function(t){t.stopPropagation(),ie(e.id),w(!0)},title:"Events"}),(0,r.jsx)(J.MO,{}),(0,r.jsx)(J.Kk,{disabled:!ae(e),icon:p.Xcf,role:"button","aria-label":"edit",onClick:function(){return oe(e)},title:"Edit"}),(0,r.jsx)(J.MO,{}),(0,r.jsx)(J.Kk,{icon:p.$aW,role:"button","aria-label":"delete",onClick:function(){return ue(e)},disabled:!se(e),activeColor:re.Uo,title:"Delete"})]})})]},e.id)})):(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:10,children:"No clients found."})})})}),(0,r.jsx)(f.ZP.Col,{span:4,children:xe})]})}),(0,r.jsxs)($.Z,{id:"delete-modal",children:[(0,r.jsxs)(ee.ZP.Header,{children:[(0,r.jsx)(ye,{icon:p.eHv,title:"Information",size:"2x",style:{paddingRight:"10px"}}),"Confirm Deletion"]}),(0,r.jsxs)(ee.ZP.Content,{children:["You are about to delete this integration request. This action cannot be undone.",(0,r.jsxs)(Pe,{children:[(0,r.jsx)(te.Z,{variant:"secondary",onClick:function(){return window.location.hash="#"},children:"Cancel"}),(0,r.jsx)(g.ZP,{onClick:de,children:E?(0,r.jsx)(x.Z,{type:"Grid",color:"#FFF",height:18,width:50,visible:!0}):"Delete"})]})]})]})]})}},83636:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin-dashboard",function(){return n(88032)}])}},function(e){e.O(0,[572,962,277,935,774,888,179],(function(){return t=83636,e(e.s=t);var t}));var t=e.O();_N_E=t}]);