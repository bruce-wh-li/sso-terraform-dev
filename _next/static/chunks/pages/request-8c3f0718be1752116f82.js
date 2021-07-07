(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[800],{399:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(5893),u=r(4184),i=r(2841),o=r.n(i),s={title:"Make a Request",type:"object",required:["projectName"],properties:{projectName:{type:"string",title:"Project Name"},identityProviders:{type:"object",title:"Identity Providers",properties:{github:{type:"boolean",title:"Github",default:!0},idir:{type:"boolean",title:"IDIR",default:!0}}},environments:{type:"object",title:"Environments",properties:{dev:{type:"boolean",title:"Dev",default:!1},test:{type:"boolean",title:"Test",default:!1},prod:{type:"boolean",title:"Prod",default:!1}},dependencies:{dev:{oneOf:[{properties:{dev:{enum:[!0]},devRedirectUrls:{type:"array",items:{type:"object",properties:{url:{type:"string",format:"uri"}}}}},required:["devRedirectUrls"]},{properties:{dev:{enum:[!1]}}}]},test:{oneOf:[{properties:{test:{enum:[!0]},testRedirectUrls:{type:"array",items:{type:"object",properties:{url:{type:"string",format:"uri"}}}}},required:["testRedirectUrls"]},{properties:{test:{enum:[!1]}}}]},prod:{oneOf:[{properties:{prod:{enum:[!0]},prodRedirectUrls:{type:"array",items:{type:"object",properties:{url:{type:"string",format:"uri"}}}}},required:["prodRedirectUrls"]},{properties:{prod:{enum:[!1]}}}]}}}}},a={identityProviders:{"ui:widget":"checkboxes","ui:disabled":"true","ui:help":"Currently we only support the onestopauth realm and IDPs cant be changed."},environments:{"ui:widget":"checkboxes"}},c=r(6645);var p=function(){return(0,n.jsx)("main",{className:o().container,children:(0,n.jsx)(u.ZP,{schema:s,uiSchema:a,onSubmit:function(e){return(0,c.O)(e.formData)}})})}},9186:function(e,t,r){"use strict";r.d(t,{g:function(){return s},V:function(){return a}});var n=r(809),u=r.n(n),i=r(2447),o=r(513),s=function(){var e=JSON.parse(sessionStorage.getItem("tokens")||"{}")||{};return{headers:{Authorization:"Bearer ".concat(e.id_token)}}};function a(){return c.apply(this,arguments)}function c(){return(c=(0,i.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=s(),e.next=4,o.e.get("/api/info",t).then((function(e){return e.data}));case 4:return r=e.sent,e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}},513:function(e,t,r){"use strict";r.d(t,{e:function(){return a}});var n=r(1752),u=r(9669),i=r.n(u),o=((0,n.default)()||{}).publicRuntimeConfig,s=(void 0===o?{}:o).api_url,a=i().create({baseURL:"".concat(s,"/"),timeout:0,withCredentials:!0})},6645:function(e,t,r){"use strict";r.d(t,{O:function(){return a},X:function(){return c}});var n=r(809),u=r.n(n),i=r(2447),o=r(513),s=r(9186),a=function(){var e=(0,i.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,s.g)(),e.prev=1,e.next=4,o.e.post("requests",t,r).then((function(e){return e.data}));case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,i.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,s.g)(),e.prev=1,e.next=4,o.e.get("requests",t).then((function(e){return e.data}));case 4:return r=e.sent,e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},1916:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/request",function(){return r(399)}])},2841:function(e){e.exports={container:"request_container__Enr4b"}}},function(e){e.O(0,[559,184,774,888,179],(function(){return t=1916,e(e.s=t);var t}));var t=e.O();_N_E=t}]);