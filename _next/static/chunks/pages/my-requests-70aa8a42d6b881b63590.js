(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12],{5601:function(n,t,r){"use strict";r.r(t);var e=r(5893),u=r(809),c=r.n(u),a=r(2447),o=r(2841),s=r.n(o),i=r(6645);t.default=function(){var n=function(){var n=(0,a.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.X)();case 2:t=n.sent,console.log(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,e.jsx)("main",{className:s().container,children:(0,e.jsx)("button",{onClick:n,children:"Get data"})})}},9186:function(n,t,r){"use strict";r.d(t,{g:function(){return o},V:function(){return s}});var e=r(809),u=r.n(e),c=r(2447),a=r(513),o=function(){var n=JSON.parse(sessionStorage.getItem("tokens")||"{}")||{};return{headers:{Authorization:"Bearer ".concat(n.id_token)}}};function s(){return i.apply(this,arguments)}function i(){return(i=(0,c.Z)(u().mark((function n(){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=o(),n.next=4,a.e.get("/api/info",t).then((function(n){return n.data}));case 4:return r=n.sent,n.abrupt("return",r);case 8:return n.prev=8,n.t0=n.catch(0),console.error(n.t0),n.abrupt("return",null);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}},513:function(n,t,r){"use strict";r.d(t,{e:function(){return s}});var e=r(1752),u=r(9669),c=r.n(u),a=((0,e.default)()||{}).publicRuntimeConfig,o=(void 0===a?{}:a).api_url,s=c().create({baseURL:"".concat(o,"/"),timeout:0,withCredentials:!0})},6645:function(n,t,r){"use strict";r.d(t,{O:function(){return s},X:function(){return i}});var e=r(809),u=r.n(e),c=r(2447),a=r(513),o=r(9186),s=function(){var n=(0,c.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=(0,o.g)(),n.prev=1,n.next=4,a.e.post("requests",t,r).then((function(n){return n.data}));case 4:n.next=10;break;case 6:return n.prev=6,n.t0=n.catch(1),console.error(n.t0),n.abrupt("return",null);case 10:case"end":return n.stop()}}),n,null,[[1,6]])})));return function(t){return n.apply(this,arguments)}}(),i=function(){var n=(0,c.Z)(u().mark((function n(){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=(0,o.g)(),n.prev=1,n.next=4,a.e.get("requests",t).then((function(n){return n.data}));case 4:return r=n.sent,n.abrupt("return",r);case 8:return n.prev=8,n.t0=n.catch(1),console.error(n.t0),n.abrupt("return",null);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}}()},6810:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-requests",function(){return r(5601)}])},2841:function(n){n.exports={container:"request_container__Enr4b"}}},function(n){n.O(0,[559,774,888,179],(function(){return t=6810,n(n.s=t);var t}));var t=n.O();_N_E=t}]);