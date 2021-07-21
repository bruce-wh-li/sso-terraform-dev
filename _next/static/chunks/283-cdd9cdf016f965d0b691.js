(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[283],{40602:function(e,t,n){"use strict";n.d(t,{I:function(){return a}});var r=n(27261),i=n(29163);function o(){var e=(0,r.Z)(["\n  display: block;\n  max-width: 100% !important;\n\n  ","\n"]);return o=function(){return e},e}var a=[{maxWidth:767,marginTop:10},{maxWidth:991,width:723,marginTop:20},{maxWidth:1199,width:933,marginTop:50},{width:1127,marginTop:80}],c=i.default.div(o(),(function(e){return e.rules.map((function(t,n){return 0===n?"@media only screen and (max-width: ".concat(t.maxWidth,"px) {\n          & {\n            ").concat(t.marginTop&&"margin-top: ".concat(t.marginTop,"px;"),"\n            width: auto !important;\n            margin-left: 1em !important;\n            margin-right: 1em !important;\n          }\n        }"):n===e.rules.length-1?"@media only screen and (min-width: ".concat((e.rules[n-1].maxWidth||0)+1,"px) {\n          & {\n            ").concat(t.marginTop&&"margin-top: ".concat(t.marginTop,"px;"),"\n            width: ").concat(t.width,"px;\n            margin-left: auto !important;\n            margin-right: auto !important;\n          }\n        }"):"@media only screen and (min-width: ".concat((e.rules[n-1].maxWidth||0)+1,"px) and (max-width: ").concat(t.maxWidth,"px) {\n          & {\n            ").concat(t.marginTop&&"margin-top: ".concat(t.marginTop,"px;"),"\n            width: ").concat(t.width,"px;\n            margin-left: auto !important;\n            margin-right: auto !important;\n          }\n        }")}))}));t.Z=c},80721:function(e,t,n){"use strict";var r=n(85893),i=n(27261);function o(){var e=(0,i.Z)(["\n  text-transform: uppercase;\n"]);return o=function(){return e},e}var a=n(29163).default.h2(o());t.Z=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{children:"We're a Community"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"As part of a community, we can solve things together and quickly. Please join the #SSO channel on Rocket.Chat"}),(0,r.jsx)("li",{children:"Coordinate load testing with the Pathfinder SSO Team, and please only use the Test environment"}),(0,r.jsx)("li",{children:'The SSO Service is multitenancy, please keep request load levels within "x" requests/second'}),(0,r.jsxs)("li",{children:["Please follow the BC Government digital standards (",(0,r.jsx)("a",{href:"https://digital.gov.bc.ca/resources/digital-principles",children:"link"}),")"]})]}),(0,r.jsx)(a,{children:"Understanding the service level"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:'The SSO service level is "best-effort" during business hours (Monday to Friday, 9am to 5pm), and after-hours resolution time is not guaranteed'}),(0,r.jsx)("li",{children:'Please take this into account if you have a "critical" application'}),(0,r.jsx)("li",{children:"From time to time, we may contact you to confirm if your configuration is needed"})]}),(0,r.jsx)(a,{children:"What's included in the service"}),(0,r.jsx)("ul",{children:(0,r.jsx)("li",{children:"The Standard realm is configured to meet the general needs of the community. Currently, custom configurations, such as scopes or flows, are not available"})}),(0,r.jsx)(a,{children:"Requirements"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Keep your email address active, and if you are not using your realm, clean it up"}),(0,r.jsx)("li",{children:"Let us know if you do not need the client app configuration"})]})]})}},25463:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(85893),i=n(27261),o=n(4826),a=n(29163),c=n(31607);function s(){var e=(0,i.Z)(["\n  min-width: 150px;\n  background-color: #b2b2b2;\n  color: white;\n  box-shadow: none !important;\n\n  &:hover {\n    box-shadow: 0px 0px 0px 2px #006fc4 inset !important;\n    background-color: #b2b2b2;\n  }\n"]);return s=function(){return e},e}function u(){var e=(0,i.Z)(["\n  margin-left: 10px;\n  min-width: 150px;\n"]);return u=function(){return e},e}var l=(0,a.default)(o.ZP)(u()),d=(0,a.default)(o.ZP)(s());function p(e){var t=e.show,n=e.loading,i=e.text,o=e.handleSubmit,a=e.handleBackClick;return(0,r.jsx)(r.Fragment,{children:t&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d,{variant:"secondary",size:"small",type:"button",onClick:a,children:i.back}),(0,r.jsx)(l,{variant:"primary",size:"small",onClick:o,children:n?(0,r.jsx)(c.Z,{type:"Grid",color:"#FFF",height:18,width:50,visible:!0}):(0,r.jsx)(r.Fragment,{children:i.continue})})]})})}},28233:function(e,t,n){"use strict";n.d(t,{Z:function(){return xe}});var r=n(85893),i=n(809),o=n.n(i),a=n(92447),c=n(26265),s=n(27261),u=n(67294),l=n(29163);function d(){var e=(0,s.Z)(["\n  font-weight: lighter;\n  color: #003366;\n"]);return d=function(){return e},e}var p=l.default.h1(d()),f=n(31607),h=n(17625),m=n(51436);function x(){var e=(0,s.Z)(["\n  width: 30px;\n"]);return x=function(){return e},e}function v(){var e=(0,s.Z)(["\n  display: flex;\n  & p {\n    padding-left: 15px;\n  }\n"]);return v=function(){return e},e}var b=l.default.div(v()),j=l.default.span(x());function g(e){var t=e.formStage,n=e.id,i=e.saveMessage,o=e.saving,a=["Enter requester information","Req ID: ".concat(n," - Choose providers and provide URIs"),"Req ID: ".concat(n," - Terms and Conditions"),"Req ID: ".concat(n," - Review and Submit")];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p,{children:a[t-1]}),i&&(0,r.jsxs)(b,{children:[(0,r.jsx)(j,{children:o?(0,r.jsx)(f.Z,{type:"TailSpin",color:"#000",height:18,width:50,visible:!0}):(0,r.jsx)(h.G,{style:{color:"#006fc4"},icon:m.LEp})}),(0,r.jsx)("p",{children:i})]})]})}function y(){var e=(0,s.Z)(["\n  width: 100px;\n  margin: 0;\n"]);return y=function(){return e},e}function w(){var e=(0,s.Z)(["\n  height: 40px;\n  width: 40px;\n  text-align: center;\n  line-height: 40px;\n  border-radius: 40px;\n  background-color: white;\n"]);return w=function(){return e},e}function O(){var e=(0,s.Z)(["\n  height: 60px;\n  width: 200px;\n  background-color: #ebf7ff;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: bold;\n  border-radius: 5px;\n  padding: 20px;\n\n  border: 1px solid #006fc4;\n  opacity: ",";\n  color: ",";\n"]);return O=function(){return e},e}var P=l.default.div(O(),(function(e){return e.active?"1":"0.5"}),(function(e){return!e.active&&"#003366"})),k=l.default.div(w()),Z=l.default.p(y());function S(e){var t=e.stageNumber,n=e.title,i=e.active;return(0,r.jsxs)(P,{active:i,children:[(0,r.jsx)(k,{children:t}),(0,r.jsx)(Z,{children:n})]})}var D=n(64735),R=[{title:"Requester Info",number:1},{title:"Providers and URI's",number:2},{title:"Terms and conditions",number:3},{title:"Review & Submit",number:4}];function I(e){var t=e.currentStage;return(0,r.jsx)(D.ZP,{cols:4,children:(0,r.jsx)(D.ZP.Row,{collapse:"1000",children:R.map((function(e){return(0,r.jsx)(D.ZP.Col,{children:(0,r.jsx)(S,{title:e.title,stageNumber:e.number,active:e.number===t},e.number)})}))})})}var C=n(17849),q={type:"object",properties:{projectLead:{type:"boolean",title:"Are you the product owner or project admin/team lead?"}},required:["projectLead","publicAccess","projectName","preferredEmail"],dependencies:{projectLead:{oneOf:[{properties:{projectLead:{enum:[!1]}}},{properties:{projectLead:{enum:[!0]},newToSso:{type:"boolean",title:"Have you requested an SSO project before?"},publicAccess:{type:"string",title:"Choose client type",enum:["true","false"],enumNames:["Public","Confidential"]},projectName:{type:"string",title:"Project Name"},preferredEmail:{type:"string",title:"Preferred Email Address"}}}]}}},T={type:"object",required:["agreeWithTerms"],properties:{agreeWithTerms:{type:"boolean",title:"I agree to the Terms and Conditions"}}},U=n(84391);function N(e){e.id;var t=e.classNames,n=(e.label,e.help),i=(e.required,e.description),o=e.errors,a=e.children;return(0,r.jsxs)("div",{className:t,children:[i,a,o,n]})}var E={identityProviders:{"ui:widget":"checkboxes","ui:disabled":"true","ui:help":"Currently we only support the onestopauth realm and IDPs cant be changed."},environments:{"ui:widget":"checkboxes"},projectLead:{"ui:widget":"radio"},newToSso:{"ui:widget":"radio"},preferredEmail:{"ui:FieldTemplate":N},publicAccess:{"ui:widget":"radio"},projectName:{"ui:FieldTemplate":N},realm:{"ui:widget":"radio","ui:enumDisabled":["bceidbasic","bceidbusiness","bceidboth"]}},F=n(25463),B=n(69696),L=n(4826),W=n(6645);function A(){var e=(0,s.Z)(["\n  margin: 0;\n  margin-top: 5px;\n  font-size: 16px;\n  font-weight: lighter;\n  padding-left: 10px;\n  color: #bbbbbb;\n"]);return A=function(){return e},e}function G(){var e=(0,s.Z)(["\n  padding: 10px 0 0 10px;\n"]);return G=function(){return e},e}function z(){var e=(0,s.Z)(["\n  display: flex;\n  align-items: start;\n  &:hover {\n    cursor: pointer;\n  }\n  margin-top: 10px;\n"]);return z=function(){return e},e}function H(){var e=(0,s.Z)(["\n  margin: 0;\n"]);return H=function(){return e},e}function _(){var e=(0,s.Z)(["\n  display: flex;\n"]);return _=function(){return e},e}var J=l.default.div(_()),M=l.default.p(H()),K=l.default.div(z()),Y=(0,l.default)(K)(G()),X=l.default.p(A());function $(e){var t=e.TitleField,n=e.title,i=e.schema.description;return(0,r.jsxs)("div",{children:[(0,r.jsx)(t,{title:n,children:n}),i&&(0,r.jsx)(M,{children:i}),e.items.map((function(e){return(0,r.jsx)(r.Fragment,{children:e.hasRemove&&(0,r.jsxs)(J,{children:[e.children,e.index>0&&(0,r.jsxs)(Y,{onClick:e.onDropIndexClick(e.index),children:[(0,r.jsx)(h.G,{style:{color:"red"},icon:m.uMC,size:"2x"}),(0,r.jsx)(X,{children:"Remove URI"})]})]})})})),e.canAdd&&(0,r.jsxs)(K,{onClick:e.onAddClick,children:[(0,r.jsx)(h.G,{style:{color:"#006fc4"},icon:m.KtF,onClick:e.onAddClick,size:"2x"}),(0,r.jsx)(X,{children:"Add another URI"})]})]})}var Q=n(95409),V=n(11163);function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ne(){var e=(0,s.Z)(["\n  margin: 20px 0;\n  max-width: 500px;\n  background-color: #e3e3e3;\n  height: 2px !important;\n"]);return ne=function(){return e},e}function re(){var e=(0,s.Z)(["\n  & > tr {\n    display: flex;\n    & > td {\n      border: none;\n    }\n  }\n"]);return re=function(){return e},e}var ie=l.default.table(re()),oe=l.default.hr(ne()),ae=function(e){return void 0===e?"":e?"Yes":"No"};function ce(e){var t=e.formData,n=(e.setFormStage,(0,u.useState)(!1)),i=n[0],c=n[1],s=(0,V.useRouter)(),l=function(){var e=(0,a.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),e.next=4,(0,W.WN)(te(te({},t),{},{status:"submitted"}),void 0,!0);case 4:c(!1),s.push("/my-requests"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(ie,{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Are you the product owner or project admin/team lead?"}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:ae(null===t||void 0===t?void 0:t.projectLead)})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Project Name:"}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:null===t||void 0===t?void 0:t.projectName})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Have you requested an SSO project before?"}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:ae(null===t||void 0===t?void 0:t.newToSso)})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Preferred email address:"}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:null===t||void 0===t?void 0:t.preferredEmail})})]}),(0,r.jsx)(oe,{}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Identity providers required:"}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:(0,Q.LF)(null===t||void 0===t?void 0:t.realm)})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Dev redirect URIs:"}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:JSON.stringify(null===t||void 0===t?void 0:t.devRedirectUrls)})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Test redirect URIs:"}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:JSON.stringify(null===t||void 0===t?void 0:t.testRedirectUrls)})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Prod redirect URIs:"}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:JSON.stringify(null===t||void 0===t?void 0:t.prodRedirectUrls)})})]})]}),(0,r.jsx)(F.Z,{text:{continue:"Submit",back:"Cancel"},show:!0,loading:i,handleSubmit:l,handleBackClick:function(){s.push("/my-requests")}})]})}var se=n(80721);function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function de(){var e=(0,s.Z)(["\n  display: block;\n  margin: 10px;\n  margin-left: auto;\n"]);return de=function(){return e},e}function pe(){var e=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n\n  & .pg-modal-main {\n    margin: auto;\n  }\n"]);return pe=function(){return e},e}var fe=(0,l.default)(B.ZP)(pe()),he=(0,l.default)(L.ZP)(de()),me=function(e){switch(e){case 1:return q;case 2:return U.Z;case 3:return T}};function xe(e){var t=e.currentUser,n=void 0===t?{}:t,i=e.request,c=(0,u.useState)(i||{}),s=c[0],l=c[1],d=(0,u.useState)(i?2:1),p=d[0],f=d[1],x=(0,u.useState)(!1),v=x[0],b=x[1],j=(0,u.useState)(void 0),y=j[0],w=j[1],O=(0,u.useState)(!1),P=O[0],k=O[1],Z=(0,V.useRouter)();(0,u.useEffect)((function(){s.preferredEmail||l(le(le({},s),{},{preferredEmail:n.email||""}))}),[n]);var S=function(){var e=(0,a.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,b(!0),1!==p){e.next=15;break}return e.next=5,(0,W.hG)(t.formData);case 5:if(e.t0=e.sent,e.t0){e.next=8;break}e.t0={};case 8:return n=e.t0,r=n.id,e.next=12,Z.push("/request/".concat(r));case 12:l(le(le({},s),{},{id:r})),e.next=17;break;case 15:return e.next=17,(0,W.WN)(t.formData);case 17:f(p+1),e.next=23;break;case 20:e.prev=20,e.t1=e.catch(0),console.error(e.t1);case 23:b(!1);case 24:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=(0,a.Z)(o().mark((function e(t,n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1!==p){e.next=2;break}return e.abrupt("return");case 2:if(!i){e.next=8;break}return k(!0),e.next=6,(0,W.WN)(le(le({},s),{},{id:i.id}));case 6:w("Last saved at ".concat((new Date).toLocaleString())),k(!1);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g,{formStage:p,id:s.id,saveMessage:y,saving:P}),(0,r.jsx)(I,{currentStage:p}),3===p&&(0,r.jsx)(se.Z,{}),[1,2,3].includes(p)?(0,r.jsx)(C.Z,{schema:me(p),uiSchema:E,onSubmit:S,onChange:function(e){l(e.formData),!1===e.formData.projectLead&&(window.location.hash="modal")},formData:s,ArrayFieldTemplate:$,ErrorList:function(){return null},onBlur:D,children:(0,r.jsx)(F.Z,{text:{continue:"Next",back:"Cancel"},show:1!==p||s.projectLead,loading:v,handleBackClick:function(){Z.push("/my-requests")}})}):(0,r.jsx)(ce,{formData:s,setFormStage:f}),1===p&&(0,r.jsxs)(fe,{id:"modal",children:[(0,r.jsxs)(B.ZP.Header,{children:["Information"," ",(0,r.jsx)(B.ZP.Close,{children:(0,r.jsx)(h.G,{icon:m._Ob,size:"2x",role:"button","aria-label":"close"})})]}),(0,r.jsxs)(B.ZP.Content,{children:["We can only process access requests submittted by"," ",(0,r.jsx)("strong",{children:"product owners, project admin or team leads"}),". If you are not acting in one of these roles, please get in touch with these individuals in your organization to make the request for you.",(0,r.jsx)(he,{onClick:function(){window.location.hash="#"},children:"Okay"})]})]})]})}},17849:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(26265),i=n(85893),o=n(24184),a=n(11915);n(67294);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e){switch(e){case"checkbox":return"checked";case"file":return"files";default:return"value"}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={TextWidget:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=u(t);return function(r){var o=r.value,a=r.onChange,c=r.label,u=r.schema,l=r.options,d=r.required,p=r.disabled,f=r.onBlur,h=r.id,m=void 0===h?"":h,x=u.pattern,v=u.minLength,b=u.maxLength,j=l.enumOptions,g=void 0===j?[]:j,y={onChange:function(e){var t=e.target[n];""===t&&(t=void 0),"true"===t&&(t=!0),"false"===t&&(t=!1),a(t)},label:c,name:name,maxLength:b,id:m,required:d,disabled:p,minLength:v,type:t,pattern:x,onBlur:f,value:o||void 0,checked:"undefined"!==typeof o&&o};return"file"===t&&delete y.value,"checkbox"===t&&(y.value=!0),"radio"===t?(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{children:c}),g.map((function(t){return(0,i.jsx)(e,s(s({},y),{},{label:t.label,value:t.value,checked:t.value===o,style:{padding:"2px 0"},size:"small",onBlur:f}),t.value)}))]}):(0,i.jsx)(e,s(s({},y),{},{onBlur:f&&function(e){return f(m,e.target.value)},children:g&&g.map((function(e){var t=e.value,n=e.label;return(0,i.jsx)("option",{value:t,children:n},t)}))}))}}(a.ZP,"input")};function f(e){return(0,i.jsx)(o.ZP,d(d({},e),{},{widgets:p}))}},84391:function(e,t,n){"use strict";n.d(t,{N:function(){return r}});var r="^https?:\\/\\/\\w+(\\.\\w+)*(:[0-9]+)?\\/?$";t.Z={type:"object",required:["devRedirectUrls","testRedirectUrls","prodRedirectUrls"],properties:{realm:{type:"string",title:"Identity Providers Required",enum:["onestopauth","bceidbasic","bceidbusiness","bceidboth"],enumNames:["IDIR/GitHub","IDIR/GitHub + BCeID Basic","IDIR/GitHub + BCeID Business","IDIR/GitHub + BCeID Both"],default:"onestopauth"},devRedirectUrls:{type:"array",description:"You can use any valid URI for your redirect URIs.",title:"Dev Redirect URIs",items:{type:"string",pattern:r},additionalItems:{type:"string",pattern:r},default:[""]},testRedirectUrls:{type:"array",title:"Test Redirect URIs",items:{type:"string",pattern:r},additionalItems:{type:"string",pattern:r},default:[""]},prodRedirectUrls:{type:"array",title:"Prod Redirect URIs",items:{type:"string",pattern:r},additionalItems:{type:"string",pattern:r},default:[""]}}}},6645:function(e,t,n){"use strict";n.d(t,{hG:function(){return p},A_:function(){return f},XJ:function(){return h},WN:function(){return m}});var r=n(809),i=n.n(r),o=n(26265),a=n(92447),c=n(70513),s=n(9186),u=n(95409);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(){var e=(0,a.Z)(i().mark((function e(t){var n,r,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,s.g)(),r=(0,u.hD)(t),e.prev=2,e.next=5,c.e.post("requests",d({},r),n).then((function(e){return e.data}));case 5:return o=e.sent,e.abrupt("return",(0,u.UB)(o));case 9:return e.prev=9,e.t0=e.catch(2),console.error(e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,s.g)(),e.prev=1,e.next=4,c.e.post("request",{requestId:t},n).then((function(e){return e.data}));case 4:return r=e.sent,e.abrupt("return",(0,u.UB)(r));case 8:return e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,a.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,s.g)(),e.prev=1,e.next=4,c.e.get("requests",t).then((function(e){return e.data}));case 4:return n=e.sent,e.abrupt("return",n.map(u.UB));case 8:return e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)(i().mark((function e(t,n){var r,o,a,l,d,p=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=p.length>2&&void 0!==p[2]&&p[2],o=(0,u.hD)(t,n),a=(0,s.g)(),e.prev=3,l=r?"requests?submit=true":"requests",e.next=7,c.e.put(l,o,a).then((function(e){return e.data}));case 7:return d=e.sent,e.abrupt("return",(0,u.UB)(d));case 11:return e.prev=11,e.t0=e.catch(3),console.error(e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t,n){return e.apply(this,arguments)}}()}}]);