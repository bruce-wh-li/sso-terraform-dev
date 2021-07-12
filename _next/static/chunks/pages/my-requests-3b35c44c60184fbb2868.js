(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12],{4826:function(n,t,e){"use strict";t.ZP=void 0;var r={shared:{button:"\n      border-radius: 0.222em;\n      border-width: 0;\n      padding: 0.66em 1.77em;\n      text-align: center;\n      text-decoration: none;\n      font-weight: 700;\n      letter-spacing: 1px;\n      display: inline-block;\n      cursor: pointer;\n      box-shadow: 0px 0px 0px 2px transparent inset, 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;\n    "},size:{small:{button:"\n        font-size: 0.8rem;\n      "},medium:{button:"\n        font-size: 1rem;\n      "},large:{button:"\n        font-size: 1.2rem;\n      "}},variant:{primary:{button:"\n        background-color: #003366;\n        box-shadow: 0px 0px 0px 2px #003366 inset !important;\n        color: #fff;\n\n        &:hover {\n          text-decoration: underline;\n          opacity: 0.80;\n        }\n\n        &:focus {\n          outline: 4px solid #3B99FC;\n          outline-offset: 1px;\n        }\n\n        &:active {\n          opacity: 1;\n        }\n\n        &:disabled {\n          background-color: #003366;\n          box-shadow: 0px 0px 0px 2px #fff inset !important;\n          color: #fff;\n          cursor: not-allowed;\n          opacity: 0.3;\n\n          &:hover {\n            text-decoration: none;\n          }\n        }\n      "},"primary-inverse":{button:"\n        background-color: #fff;\n        box-shadow: 0px 0px 0px 2px #313132 inset !important;\n        color: #313132;\n\n        &:hover {\n          text-decoration: underline;\n          background-color: #f2f2f2\n        }\n\n        &:focus {\n          outline: 4px solid #3B99FC;\n          outline-offset: 1px;\n        }\n\n        &:active {\n          background-color: #fff;\n        }\n\n        &:disabled {\n          opacity: 0.3;\n          cursor: not-allowed;\n\n          &:hover {\n            text-decoration: none;\n          }\n        }\n      "},secondary:{button:"\n        background: none;\n        box-shadow: 0px 0px 0px 2px #003366 inset !important;\n        color: #003366;\n\n        &:hover {\n          opacity: 0.80;\n          text-decoration: underline;\n          background-color: #003366;\n          color: #FFFFFF;\n        }\n\n        &:focus {\n          outline-offset: 1px;\n          outline: 4px solid #3B99FC;\n        }\n\n        &:active {\n          opacity: 1;\n        }\n\n        &:disabled {\n          background-color: #fff;\n          box-shadow: 0px 0px 0px 2px #003366 inset !important;\n          color: #003366;\n          cursor: not-allowed;\n          opacity: 0.3;\n\n          &:hover {\n            text-decoration: none;\n          }\n        }\n      "},"secondary-inverse":{button:"\n        background: none;\n        box-shadow: 0px 0px 0px 2px #fff inset !important;\n        color: #fff;\n\n        &:hover {\n          text-decoration: underline;\n          background-color: #fff;\n          color: #313132;\n        }\n\n        &:focus {\n          outline-offset: 1px;\n          outline: 4px solid #3B99FC;\n        }\n\n        &:active {\n          background-color: #f2f2f2;\n          color: #313132;\n        }\n\n        &:disabled {\n          background-color: #003366;\n          opacity: 0.3;\n          cursor: not-allowed;\n        }\n      "}}};var o=(0,e(83024).applyTheme)(r,{defaultProps:{variant:"primary",size:"medium"},breakProps:[],staticProps:["fullHeight","fullWidth"]});t.ZP=o},83024:function(n,t,e){"use strict";var r=e(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.applyTheme=void 0;var o=r(e(22122)),a=r(e(67294)),i=r(e(86010)),u=e(80927),c=function(n,t){var e=(0,u.processStyle)(n),r=(0,u.createStyleBuilder)(e,t)("button","button"),c=(0,u.createBootstrap)(e,"button");return function(n){var t=c(n),e=t.id,u=(t.name,t.label,t.ariaLabel,t.styleProps,t.children),s=t.className,l=t.rest;return a.default.createElement(r,(0,o.default)({},l,{id:e,className:(0,i.default)("pg-button",s)}),u)}};t.applyTheme=c;var s=c({},{});t.default=s},5601:function(n,t,e){"use strict";e.r(t);var r=e(85893),o=e(809),a=e.n(o),i=e(92447),u=e(67294),c=e(4826),s=e(22841),l=e.n(s),p=e(6645);t.default=function(){var n=(0,u.useState)(!1),t=n[0],e=n[1],o=(0,u.useState)([]),s=o[0],d=o[1];(0,u.useEffect)((function(){(function(){var n=(0,i.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e(!0),n.next=3,(0,p.XJ)();case 3:t=n.sent,d(t||[]),e(!1);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]);var f=function(){var n=(0,i.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,p.OV)(t.id);case 2:e=n.sent,console.log(e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return t?"loading...":(0,r.jsx)("main",{className:l().container,children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Project Name"}),(0,r.jsx)("th",{children:"Identity Providers"}),(0,r.jsx)("th",{children:"Environments"}),(0,r.jsx)("th",{children:"Submission Time"}),(0,r.jsx)("th",{})]})}),(0,r.jsx)("tbody",{children:s.map((function(n){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:n.projectName}),(0,r.jsx)("td",{children:n.identityProviders.join(", ")}),(0,r.jsx)("td",{children:n.environments.join(", ")}),(0,r.jsx)("td",{children:n.createdAt}),(0,r.jsx)("td",{children:(0,r.jsx)(c.ZP,{size:"small",onClick:function(){return f(n)},children:"Download Installation"})})]},n.id)}))})]})})}},9186:function(n,t,e){"use strict";e.d(t,{g:function(){return u},V:function(){return c}});var r=e(809),o=e.n(r),a=e(92447),i=e(70513),u=function(){var n=JSON.parse(sessionStorage.getItem("tokens")||"{}")||{};return{headers:{Authorization:"Bearer ".concat(n.id_token)}}};function c(){return s.apply(this,arguments)}function s(){return(s=(0,a.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=u(),n.next=4,i.e.get("/api/info",t).then((function(n){return n.data}));case 4:return e=n.sent,n.abrupt("return",e);case 8:return n.prev=8,n.t0=n.catch(0),console.error(n.t0),n.abrupt("return",null);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}},70513:function(n,t,e){"use strict";e.d(t,{e:function(){return c}});var r=e(11752),o=e(9669),a=e.n(o),i=((0,r.default)()||{}).publicRuntimeConfig,u=(void 0===i?{}:i).api_url,c=a().create({baseURL:"".concat(u,"/"),timeout:0,withCredentials:!0})},6645:function(n,t,e){"use strict";e.d(t,{Of:function(){return c},XJ:function(){return s},OV:function(){return l}});var r=e(809),o=e.n(r),a=e(92447),i=e(70513),u=e(9186),c=function(){var n=(0,a.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=(0,u.g)(),n.prev=1,n.next=4,i.e.post("requests",t,e).then((function(n){return n.data}));case 4:n.next=10;break;case 6:return n.prev=6,n.t0=n.catch(1),console.error(n.t0),n.abrupt("return",null);case 10:case"end":return n.stop()}}),n,null,[[1,6]])})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=(0,u.g)(),n.prev=1,n.next=4,i.e.get("requests",t).then((function(n){return n.data}));case 4:return e=n.sent,n.abrupt("return",e);case 8:return n.prev=8,n.t0=n.catch(1),console.error(n.t0),n.abrupt("return",null);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=(0,u.g)(),n.prev=1,n.next=4,i.e.post("installation",{requestId:t},e).then((function(n){return n.data}));case 4:return r=n.sent,n.abrupt("return",r);case 8:return n.prev=8,n.t0=n.catch(1),console.error(n.t0),n.abrupt("return",null);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}()},66810:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-requests",function(){return e(5601)}])},22841:function(n){n.exports={container:"request_container__Enr4b"}}},function(n){n.O(0,[559,774,888,179],(function(){return t=66810,n(n.s=t);var t}));var t=n.O();_N_E=t}]);