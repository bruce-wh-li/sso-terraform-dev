(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12],{47418:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return I}});var t=r(85893),u=r(809),s=r.n(u),i=r(92447),a=r(27261),c=r(67294),o=r(11163),d=r(4826),l=r(96486),f=r(29163),p=r(6645),h=r(70513),v=r(9186),x=function(){var n=(0,i.Z)(s().mark((function n(e){var r,t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=(0,v.g)(),n.prev=1,n.next=4,h.e.post("installation",{requestId:e},r).then((function(n){return n.data}));case 4:return t=n.sent,n.abrupt("return",t);case 8:return n.prev=8,n.t0=n.catch(1),console.error(n.t0),n.abrupt("return",null);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),b=r(84391);function m(){var n=(0,a.Z)(["\n  width: 100%;\n  background: #ffffff;\n  margin: 1em 0em;\n  border: 1px solid rgba(34, 36, 38, 0.15);\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  border-radius: 0.28571429rem;\n  text-align: left;\n  color: rgba(0, 0, 0, 0.87);\n  border-collapse: separate;\n  border-spacing: 0px;\n\n  th:first-child,\n  td:first-child {\n    padding-left: 1em;\n  }\n\n  & th,\n  & td {\n    -webkit-transition: background 0.1s ease, color 0.1s ease;\n    transition: background 0.1s ease, color 0.1s ease;\n  }\n"]);return m=function(){return n},n}var w=f.default.table(m());function j(){var n=(0,a.Z)(["\n  font-size: 1.2em;\n  font-weight: 600;\n"]);return j=function(){return n},n}var g=f.default.div(j()),k=function(n){var e=(0,l.get)(b.Z,"properties?.realm.enumNames",[]);return(0,l.get)(b.Z,"properties?.realm.enumNames",[])[(0,l.findIndex)(e,(function(e){return e===n}))]};var I=function(n){n.currentUser;var e=(0,o.useRouter)(),r=(0,c.useState)(!1),u=r[0],a=r[1],l=(0,c.useState)([]),f=l[0],h=l[1];(0,c.useEffect)((function(){(function(){var n=(0,i.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(!0),n.next=3,(0,p.X)();case 3:e=n.sent,h(e||[]),a(!1);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]);var v=function(){var n=(0,i.Z)(s().mark((function n(e){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x(e.id);case 2:r=n.sent,console.log(r);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),b=function(){var n=(0,i.Z)(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.push("/request");case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return u?"loading...":(0,t.jsxs)("main",{children:[(0,t.jsx)(d.ZP,{variant:"primary-inverse",size:"small",onClick:b,children:"+ Create New..."}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(g,{children:"My Request List"}),(0,t.jsxs)(w,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Project Name"}),(0,t.jsx)("th",{children:"Identity Providers"}),(0,t.jsx)("th",{children:"Environments"}),(0,t.jsx)("th",{children:"Submission Time"}),(0,t.jsx)("th",{})]})}),(0,t.jsx)("tbody",{children:f.map((function(n){var e;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:n.projectName}),(0,t.jsx)("td",{children:k(n.realm)}),(0,t.jsx)("td",{children:null===(e=n.environments)||void 0===e?void 0:e.join(", ")}),(0,t.jsx)("td",{children:n.createdAt}),(0,t.jsx)("td",{children:(0,t.jsx)(d.ZP,{size:"small",onClick:function(){return v(n)},children:"Download Installation"})})]},n.id)}))})]})]})}},84391:function(n,e){"use strict";e.Z={type:"object",properties:{realm:{type:"string",title:"Identity Providers Required",enum:["onestopauth","bceidbasic","bceidbusiness","bceidboth"],enumNames:["IDIR/GitHub","IDIR/GitHub + BCeID Basic","IDIR/GitHub + BCeID Business","IDIR/GitHub + BCeID Both"],default:"onestopauth"}}}},6645:function(n,e,r){"use strict";r.d(e,{h:function(){return c},X:function(){return o}});var t=r(809),u=r.n(t),s=r(92447),i=r(70513),a=r(9186),c=function(){var n=(0,s.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=(0,a.g)(),n.prev=1,n.next=4,i.e.post("requests",e,r).then((function(n){return n.data}));case 4:return t=n.sent,n.abrupt("return",t);case 8:return n.prev=8,n.t0=n.catch(1),console.error(n.t0),n.abrupt("return",null);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,s.Z)(u().mark((function n(){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=(0,a.g)(),n.prev=1,n.next=4,i.e.get("requests",e).then((function(n){return n.data}));case 4:return r=n.sent,n.abrupt("return",r);case 8:return n.prev=8,n.t0=n.catch(1),console.error(n.t0),n.abrupt("return",null);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}}()},66810:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-requests",function(){return r(47418)}])}},function(n){n.O(0,[662,774,888,179],(function(){return e=66810,n(n.s=e);var e}));var e=n.O();_N_E=e}]);