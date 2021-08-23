(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[320],{69696:function(e,n,t){"use strict";n.ZP=void 0;var r={shared:{container:"\n      position: fixed;\n      top: 0;\n      left: 0;\n      font-size: 1rem;\n      width: 100%;\n      height: 100%;\n      background: rgba(220,220,220,0.8);\n    ",modal:"\n      max-width: 800px;\n      margin: 2rem auto;\n    ",header:"\n      display: flex;\n      color: #fff;\n      background: #38598A;\n      padding: 1.2em;\n    ",content:"\n      min-height: 5em;\n      background: #fff;\n      padding: 1.5em 1.2em;\n    ",close:"\n      margin-left: auto;\n      color: #fff;\n      font-weight: 600;\n\n      &:hover {\n        color: #fff;\n      }\n    "}};var i=(0,t(68985).applyTheme)(r,{defaultProps:{},staticProps:[]});var a=i;n.ZP=a},68985:function(e,n,t){"use strict";var r=t(95318),i=t(20862);Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.applyTheme=void 0;var a,o=r(t(22122)),s=r(t(19756)),l=r(t(45761)),c=i(t(67294)),d=r(t(86010)),u=r(t(29163)),h=t(80927),f={styleProps:{},Sheader:null,Scontent:null,Sfooter:null,Sclose:null},p=c.default.createContext(f),m=function(e,n){var t,r=(0,h.processStyle)(e),i=(0,h.createStyleBuilder)(r,n),f=n.as||{},m=i((t=f.container||"div",u.default[t](a||(a=(0,l.default)(["\n    visibility: hidden;\n\n    &:target {\n      visibility: visible;\n    }\n  "])))),"container"),v=i(f.modal||"div","modal"),x=i(f.header||"header","header"),g=i(f.content||"div","content"),j=i(f.footer||"footer","footer"),b=i("a","close"),y=(0,h.createBootstrap)(r,"modal"),w=function(e){var n=y(e),t=n.id,r=(n.name,n.label,n.ariaLabel,n.styleProps),i=n.children,a=n.className,l=n.rest,u=l.style,h=l.modalStyle,f=(l.onToggle,l.defaultToggled,(0,s.default)(l,["style","modalStyle","onToggle","defaultToggled"]));return c.default.createElement(p.Provider,{value:{styleProps:r,Sheader:x,Scontent:g,Sfooter:j,Sclose:b}},c.default.createElement(m,(0,o.default)({},f,{className:(0,d.default)("pg-modal-container",a),id:t,style:u}),c.default.createElement(v,{className:"pg-modal-main",style:h},i)))};return w.Header=function(e){var n=e.children,t=e.className,r=(0,s.default)(e,["children","className"]),i=(0,d.default)("pg-modal-header",t),a=(0,c.useContext)(p),l=a.Sheader,u=a.styleProps;return c.default.createElement(l,(0,o.default)({className:i},u,r),n)},w.Content=function(e){var n=e.children,t=e.className,r=(0,s.default)(e,["children","className"]),i=(0,d.default)("pg-modal-content",t),a=(0,c.useContext)(p),l=a.Scontent,u=a.styleProps;return c.default.createElement(l,(0,o.default)({className:i},u,r),n)},w.Footer=function(e){var n=e.children,t=e.className,r=(0,s.default)(e,["children","className"]),i=(0,d.default)("pg-modal-footer",t),a=(0,c.useContext)(p),l=a.Sfooter,u=a.styleProps;return c.default.createElement(l,(0,o.default)({className:i},u,r),n)},w.Close=function(e){var n=e.children,t=e.className,r=(0,s.default)(e,["children","className"]),i=(0,d.default)("pg-modal-close",t),a=(0,c.useContext)(p),l=a.Sclose,u=a.styleProps;return c.default.createElement(l,(0,o.default)({className:i},u,{href:"#",role:"button","aria-label":"close"},r),n)},w};n.applyTheme=m;var v=m({},{});n.default=v},80721:function(e,n,t){"use strict";var r=t(85893),i=t(27261),a=t(29163),o=t(30454);function s(){var e=(0,i.Z)(["\n  margin-top: ",";\n"]);return s=function(){return e},e}function l(){var e=(0,i.Z)(["\n  &&& {\n    margin-left: 20px;\n  }\n"]);return l=function(){return e},e}function c(){var e=(0,i.Z)(["\n  & li {\n    margin: 0;\n  }\n"]);return c=function(){return e},e}function d(){var e=(0,i.Z)(["\n  text-transform: uppercase;\n  margin-bottom: 0;\n  font-size: ",";\n"]);return d=function(){return e},e}var u=a.default.h2(d(),o.CA),h=a.default.ul(c()),f=a.default.li(l()),p=a.default.div(s(),o.SI);n.Z=function(){return(0,r.jsxs)(p,{children:[(0,r.jsx)(u,{children:"Requirements"}),(0,r.jsxs)(h,{children:[(0,r.jsx)("li",{children:"Keep your email address active, and if you are not using your realm, clean it up"}),(0,r.jsxs)("li",{children:["If you are not using your realm/client app configuration"," ",(0,r.jsx)("a",{href:"https://chat.developer.gov.bc.ca/channel/sso/",children:"ask us"})," for help"]})]}),(0,r.jsx)(u,{children:"We're a Community"}),(0,r.jsxs)(h,{children:[(0,r.jsxs)("li",{children:["As part of a community, we can solve things together and quickly. Please join the"," ",(0,r.jsx)("a",{href:"https://chat.developer.gov.bc.ca/channel/sso/",children:"#SSO channel on Rocket.Chat"})]}),(0,r.jsxs)("li",{children:["Please follow the BC Government digital standards (",(0,r.jsx)("a",{href:"https://digital.gov.bc.ca/resources/digital-principles",target:"_blank",rel:"noreferrer",children:"link"}),")"]}),(0,r.jsx)("li",{children:"Coordinate load testing with the Pathfinder SSO Team, and please only use the Test environment"}),(0,r.jsxs)("li",{children:["The SSO Service is multitenancy; meaning you share with others, so please coordinate"," ",(0,r.jsx)("a",{href:"https://chat.developer.gov.bc.ca/channel/sso/",children:"with us"}),":",(0,r.jsx)(f,{children:"if you predict moderate or high loads"}),"OR",(0,r.jsx)(f,{children:"if you need to conduct load testing in TEST only"})]})]}),(0,r.jsx)(u,{children:"What's included in the service"}),(0,r.jsx)(h,{children:(0,r.jsx)("li",{children:"The Standard realm is configured to meet the general needs of the community. Currently, custom configurations, such as scopes or flows, are not available"})}),(0,r.jsx)(u,{children:"Understanding the service level"}),(0,r.jsxs)(h,{children:[(0,r.jsx)("li",{children:'We are working towards enterprise service levels and in the interim the SSO Pathfinder service level is "best-effort" during business hours (Monday to Friday, 9am to 5pm), and after-hours resolution time is not guaranteed'}),(0,r.jsx)("strong",{children:'Please take this into account if you have a "critical" application'}),(0,r.jsx)("li",{children:"From time to time, we may contact you to confirm if your configuration is needed"})]})]})}},59320:function(e,n,t){"use strict";t.d(n,{Z:function(){return ge}});var r=t(85893),i=t(809),a=t.n(i),o=t(39227),s=t(92447),l=t(26265),c=t(27261),d=t(67294),u=t(29163);function h(){var e=(0,c.Z)(["\n  font-weight: lighter;\n  color: #003366;\n"]);return h=function(){return e},e}var f=u.default.h1(h()),p=t(31607),m=t(17625),v=t(51436),x=t(96486);function g(){var e=(0,c.Z)(["\n  width: 30px;\n"]);return g=function(){return e},e}function j(){var e=(0,c.Z)(["\n  display: flex;\n  & p {\n    padding-left: 15px;\n  }\n"]);return j=function(){return e},e}var b=u.default.div(j()),y=u.default.span(g());function w(e){var n=e.formStage,t=e.id,i=e.saveMessage,a=e.saving,o=(0,x.padStart)(String(t),8,"0"),s=["".concat(t?"Req ID: ".concat(o," - "):"","Enter requester information"),"Req ID: ".concat(o," - Choose providers and provide URIs"),"Req ID: ".concat(o," - Terms and Conditions"),"Req ID: ".concat(o," - Review and Submit")];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{children:s[n]}),(a||i)&&(0,r.jsxs)(b,{children:[(0,r.jsx)(y,{children:a?(0,r.jsx)(p.Z,{type:"TailSpin",color:"#000",height:18,width:50,visible:!0,label:"request-saving"}):(0,r.jsx)(m.G,{style:{color:"#006fc4"},icon:null!==i&&void 0!==i&&i.error?v.eHv:v.LEp,title:"request-saved"})}),(0,r.jsx)("p",{children:null===i||void 0===i?void 0:i.content})]})]})}function S(){var e=(0,c.Z)(["\n  width: 100px;\n  margin: 0;\n"]);return S=function(){return e},e}function k(){var e=(0,c.Z)(["\n  height: 40px;\n  width: 40px;\n  text-align: center;\n  line-height: 40px;\n  border-radius: 40px;\n  border: 1px solid #b9d8f0;\n  background-color: white;\n  font-weight: bold;\n"]);return k=function(){return e},e}function Z(){var e=(0,c.Z)(["\n  height: 60px;\n  width: 200px;\n  background-color: #ebf7ff;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 5px;\n  padding: 20px;\n  cursor: pointer;\n  margin: 3px 0;\n  font-weight: ",";\n  color: ",";\n  background-color: ",";\n  border: ",";\n"]);return Z=function(){return e},e}var P=u.default.div(Z(),(function(e){return e.active&&"bold"}),(function(e){return e.active||e.visited?"#003366":"#B0D4ED"}),(function(e){return e.active||e.visited?"#BCE4FF":"#F5FBFF"}),(function(e){return e.active||e.visited?"1px solid #006fc4":"1px solid #B9D8F0"})),C=u.default.div(k()),N=u.default.p(S());function T(e){var n=e.stageNumber,t=e.title,i=e.active,a=e.visited,o=e.handleClick,s=e.hasError;return(0,r.jsxs)(P,{active:i||!1,visited:a||!1,onClick:o,children:[(0,r.jsx)(C,{children:s?(0,r.jsx)(m.G,{icon:v.eHv,color:"red",title:"Some additional fields require your attention."}):n}),(0,r.jsx)(N,{children:t})]})}var q=t(64735);function O(){var e=(0,c.Z)(["\n  width: 824px;\n  max-width: 100%;\n"]);return O=function(){return e},e}var E=[{title:"Requester Info",number:0},{title:"Providers and URIs",number:1},{title:"Terms and conditions",number:2},{title:"Review & Submit",number:3}],F=u.default.div(O());function R(e){var n=e.currentStage,t=e.setFormStage,i=e.errors,a=e.creatingNewForm,o=e.visited;return(0,r.jsx)(F,{children:(0,r.jsx)(q.ZP,{cols:4,children:(0,r.jsx)(q.ZP.Row,{collapse:"992",gutter:[],children:E.map((function(e){return(0,r.jsx)(q.ZP.Col,{children:(0,r.jsx)(T,{title:e.title,stageNumber:e.number+1,active:e.number===n,hasError:!!i[e.number],visited:o[e.number],handleClick:function(){return function(e){a()||t(e)}(e.number)}},e.number)},e.title)}))})})})}var D=t(17849);function I(e){e.id;var n=e.classNames,t=(e.label,e.help),i=(e.required,e.description),a=e.errors,o=e.children;return(0,r.jsxs)("div",{className:n,children:[i,o,a,t]})}var B=t(60873);function U(){var e=(0,c.Z)(["\n  font-weight: bold;\n  font-size: 1rem;\n  margin: 0;\n"]);return U=function(){return e},e}var L=u.default.legend(U());function G(e){e.id;var n=e.classNames,t=e.label,i=e.help,a=(e.required,e.errors),o=e.children,s=e.schema,l=s.tooltipTitle,c=s.tooltipContent,d=s.hide,u=void 0===d?250:d,h=s.description;return(0,r.jsxs)("div",{className:n,children:[(0,r.jsxs)(L,{children:[t,"\xa0",(0,r.jsx)(B.Z,{tooltipTitle:l,tooltipContent:c,hide:u})]}),h,o,a,i]})}var W=function(e){return{identityProviders:{"ui:widget":"checkboxes","ui:disabled":"true","ui:help":"Currently we only support the onestopauth realm and IDPs cant be changed."},environments:{"ui:widget":"checkboxes"},projectLead:{"ui:widget":"radio","ui:readonly":e},newToSso:{"ui:widget":"radio","ui:FieldTemplate":G},preferredEmail:{"ui:FieldTemplate":I},publicAccess:{"ui:widget":"radio","ui:FieldTemplate":G},projectName:{"ui:FieldTemplate":I,"ui:placeholder":"Project Name"},realm:{"ui:widget":"radio","ui:FieldTemplate":G,"ui:enumDisabled":["bceidbasic","bceidbusiness","bceidboth"],"ui:default":"onestopauth"}}},A=t(25463),_=t(69696),z=t(4826),H=t(6645),M=t(3083),V=t(15616),$=t(11163),K=t(30454),Y=t(25879);function J(){var e=(0,c.Z)(["\n  list-style: none;\n"]);return J=function(){return e},e}function Q(){var e=(0,c.Z)(["\n  font-weight: 600;\n"]);return Q=function(){return e},e}function X(){var e=(0,c.Z)(["\n  margin: 20px 0;\n  max-width: 500px;\n  background-color: #e3e3e3;\n  height: 2px !important;\n"]);return X=function(){return e},e}function ee(){var e=(0,c.Z)(["\n  margin-top: ",";\n  font-size: unset;\n  & tr {\n    display: flex;\n    margin-top: 5px;\n    margin-bottom: 5px;\n    & > td {\n      border: none;\n      padding: 0 5px 0 0;\n    }\n  }\n"]);return ee=function(){return e},e}var ne=u.default.table(ee(),K.SI),te=u.default.hr(X()),re=u.default.span(Q()),ie=u.default.ul(J()),ae=function(e){return void 0===e?"":e?"Yes":"No"},oe=function(e){return(0,r.jsx)(ie,{children:null===e||void 0===e?void 0:e.map((function(e){return(0,r.jsx)("li",{children:e})}))})};var se=(0,Y.l)((function(e){var n=e.formData,t=e.setErrors,i=(e.errors,e.visited),o=e.alert,l=(0,d.useState)(!1),c=l[0],u=l[1],h=(0,$.useRouter)(),f=function(){var e=(0,s.Z)(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r=(0,V.G$)(n,i),!(Object.keys(r).length>0)){e.next=5;break}return o.show({variant:"danger",fadeOut:1e4,closable:!0,content:"There were errors with your submission. Please see the navigation tabs above for the form pages with errors."}),e.abrupt("return",t(r));case 5:return u(!0),e.next=8,(0,H.WN)(n,!0);case 8:u(!1),o.show({variant:"success",fadeOut:1e4,closable:!0,content:"Request ID:".concat((0,x.padStart)(String(n.id),8,"0")," is successfully submitted!")}),h.push({pathname:"/my-requests",query:{id:n.id}}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ne,{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Are you the product owner or project admin/team lead?"}),(0,r.jsx)("td",{children:(0,r.jsx)(re,{children:ae(null===n||void 0===n?void 0:n.projectLead)})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Have you requested an SSO access before?"}),(0,r.jsx)("td",{children:(0,r.jsx)(re,{children:ae(null===n||void 0===n?void 0:n.newToSso)})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Client Type:"}),(0,r.jsx)("td",{children:(0,r.jsx)(re,{children:null!==n&&void 0!==n&&n.publicAccess?"Public":"Confidential"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Project Name:"}),(0,r.jsx)("td",{children:(0,r.jsx)(re,{children:null===n||void 0===n?void 0:n.projectName})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Preferred email address:"}),(0,r.jsx)("td",{children:(0,r.jsx)(re,{children:null===n||void 0===n?void 0:n.preferredEmail})})]})]})}),(0,r.jsx)(te,{}),(0,r.jsx)(ne,{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Identity providers required:"}),(0,r.jsx)("td",{children:(0,r.jsx)(re,{children:oe((0,V.LF)(null===n||void 0===n?void 0:n.realm))})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Dev redirect URIs:"}),(0,r.jsx)("td",{children:(0,r.jsx)(re,{children:oe(null===n||void 0===n?void 0:n.devValidRedirectUris)})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Test redirect URIs:"}),(0,r.jsx)("td",{children:(0,r.jsx)(re,{children:oe(null===n||void 0===n?void 0:n.testValidRedirectUris)})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Prod redirect URIs:"}),(0,r.jsx)("td",{children:(0,r.jsx)(re,{children:oe(null===n||void 0===n?void 0:n.prodValidRedirectUris)})})]})]})}),(0,r.jsx)(A.Z,{text:{continue:"Submit",back:"Cancel"},show:!0,loading:c,handleSubmit:f,handleBackClick:function(){h.push("/my-requests")}})]})})),le=t(80721),ce=t(8366),de=t(94679);function ue(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function he(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ue(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ue(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function fe(){var e=(0,c.Z)(["\n  display: block;\n  margin: 10px;\n  margin-left: auto;\n"]);return fe=function(){return e},e}function pe(){var e=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n\n  & .pg-modal-main {\n    max-width: 600px;\n    margin: auto;\n  }\n"]);return pe=function(){return e},e}var me=(0,u.default)(_.ZP)(pe()),ve=(0,u.default)(z.ZP)(fe()),xe=function(e,n){var t,r=null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.data,i={pathname:"/application-error"};r&&(i.query={error:r}),n.push(i)};var ge=(0,Y.l)((function(e){var n=e.currentUser,t=void 0===n?{}:n,i=e.request,l=e.alert,c=(0,d.useState)(i||{}),u=c[0],h=c[1],f=(0,d.useState)(i?1:0),p=f[0],x=f[1],g=(0,d.useState)(!1),j=g[0],b=g[1],y=(0,d.useState)(void 0),S=y[0],k=y[1],Z=(0,d.useState)(!1),P=Z[0],C=Z[1],N=(0,d.useState)({}),T=N[0],q=N[1],O=(0,d.useState)(i?{0:!0}:{}),E=O[0],F=O[1],I=(0,$.useRouter)();(0,d.useEffect)((function(){u.preferredEmail||h(he(he({},u),{},{preferredEmail:t.email||""}))}),[t]);var B=function(e){E[p]=!0,3===e&&(E[0]=!0,E[1]=!0,E[2]=!0);var n=(0,V.G$)(u,E);q(n),x(e),F(E),l.hide()},U=function(){return I.route.endsWith("/request")},L=W(!U()),G=function(){var e=(0,s.Z)(a().mark((function e(){var n,t,r,i,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b(!0),e.prev=1,!U()){e.next=19;break}return e.next=5,(0,H.hG)(u);case 5:if(n=e.sent,t=(0,o.Z)(n,2),r=t[0],i=t[1],s=(r||{}).id,!i&&s){e.next=14;break}return xe(i,I),b(!1),e.abrupt("return");case 14:return e.next=16,I.push({pathname:"/request/".concat(s)});case 16:h(he(he({},u),{},{id:s})),e.next=22;break;case 19:return e.next=21,(0,H.WN)(u);case 21:z();case 22:e.next=27;break;case 24:e.prev=24,e.t0=e.catch(1),console.error(e.t0);case 27:b(!1);case 28:case"end":return e.stop()}}),e,null,[[1,24]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=(0,s.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==p){e.next=5;break}if(!U()){e.next=5;break}return E[p]=!0,F(E),e.abrupt("return");case 5:B(p+1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=(0,s.Z)(a().mark((function e(n,t){var r,s,l;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!U()){e.next=2;break}return e.abrupt("return");case 2:if(!i){e.next=12;break}return C(!0),e.next=6,(0,H.WN)(he(he({},u),{},{id:i.id}));case 6:r=e.sent,s=(0,o.Z)(r,2),s[0],(l=s[1])?xe(l,I):k({content:"Last saved at ".concat((new Date).toLocaleString()),error:!1}),C(!1);case 12:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w,{formStage:p,id:u.id,saveMessage:S,saving:P}),(0,r.jsx)(R,{currentStage:p,setFormStage:B,errors:T,creatingNewForm:U,visited:E}),2===p&&(0,r.jsx)(le.Z,{}),[0,1,2].includes(p)?(0,r.jsx)(D.Z,{schema:ce.Z[p],uiSchema:L,onChange:function(e){h(e.formData),!1===e.formData.projectLead&&(window.location.hash="modal")},onSubmit:G,formData:u,ArrayFieldTemplate:M.Z,onBlur:K,liveValidate:E[p],validate:de.M,children:(0,r.jsx)(A.Z,{formSubmission:0===p,text:{continue:"Next",back:"Cancel"},show:0!==p||u.projectLead,loading:j,handleSubmit:z,handleBackClick:function(){I.push("/my-requests")}})}):(0,r.jsx)(se,{formData:u,setErrors:q,errors:T,visited:E}),0===p&&(0,r.jsxs)(me,{id:"modal",children:[(0,r.jsx)(_.ZP.Header,{children:(0,r.jsx)(m.G,{icon:v.sqG,size:"2x",title:"Information"})}),(0,r.jsxs)(_.ZP.Content,{children:["We can only process access requests submittted by"," ",(0,r.jsx)("strong",{children:"product owners, project admin or team leads"}),". If you are not acting in one of these roles, please get in touch with these individuals in your organization to make the request for you.",(0,r.jsx)(ve,{onClick:function(){I.push("my-requests")},children:"Okay"})]})]})]})}))}}]);