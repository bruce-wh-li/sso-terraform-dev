(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6862:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return F}});var r=n(5893),o=n(809),c=n.n(o),u=n(2447),i=n(7294),a=n(1163),s=n(9008),f=n(1752),p=n(9669),l=n.n(p),d=((0,f.default)()||{}).publicRuntimeConfig,h=(void 0===d?{}:d).sso_url,v="".concat(h,"/.well-known/openid-configuration"),_={},g=function(){var e=(0,u.Z)(c().mark((function e(){var t,n,r,o,u;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().get(v).then((function(e){return e.data}),(function(){return null}));case 2:t=e.sent,n=t.authorization_endpoint,r=t.token_endpoint,o=t.jwks_uri,u=t.userinfo_endpoint,Object.assign(_,{authorization_endpoint:n,token_endpoint:r,jwks_uri:o,userinfo_endpoint:u});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=n(6265),k=n(129),w=n.n(k),m=n(9227),x=function(e){if(!e)return null;var t=e.replace(/-/g,"+").replace(/_/g,"/"),n=atob(t),r=Array.from(n).reduce((function(e,t){var n=("00"+t.charCodeAt(0).toString(16)).slice(-2);return"".concat(e,"%").concat(n)}),""),o=decodeURIComponent(r);return JSON.parse(o)},y=function(e){if(!e)return null;var t=e.split("."),n=(0,m.Z)(t,3),r=(n[0],n[1]);n[2];return x(r)},S=function(e){if(!e)return null;var t=e.split("."),n=(0,m.Z)(t,3),r=n[0];n[1],n[2];return x(r)},j=function(){var e=new Uint32Array(28);crypto.getRandomValues(e);var t=[];return e.forEach((function(e){return t.push("0".concat(e.toString(16).substr(-2)))})),t.reduce((function(e,t){return"".concat(e).concat(t)}),"")},O=function(){var e=(0,u.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"SHA-256",n=new TextEncoder,r=n.encode(t),e.abrupt("return",crypto.subtle.digest("SHA-256",r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(e){var t=new Uint8Array(e).reduce((function(e,t){return"".concat(e).concat(String.fromCharCode(t))}),"");return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")};function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,b.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=((0,f.default)()||{}).publicRuntimeConfig,I=void 0===E?{}:E,P=I.sso_client_id,N=I.sso_authorization_scope,A=I.sso_authorization_response_type,J=I.sso_redirect_uri,z=I.sso_token_grant_type,D=function(){var e=(0,u.Z)(c().mark((function e(t){var n,r,o,u,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=j(),sessionStorage.setItem("pkce_state",n),r=j(),sessionStorage.setItem("code_verifier",r),e.next=6,O(r);case 6:return o=e.sent,u=C(o),sessionStorage.setItem("code_challenge",u),i=R({client_id:P,response_type:A,redirect_uri:J,scope:N,state:n,code_challenge_method:"S256",code_challenge:u},t),e.abrupt("return","".concat(_.authorization_endpoint,"?").concat(w().stringify(i,{encode:!1})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=(0,u.Z)(c().mark((function e(t){var n,r,o,u,i,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.code,r=t.state,sessionStorage.getItem("pkce_state")===r){e.next=4;break}return console.error("invalid state"),e.abrupt("return",null);case 4:return o=sessionStorage.getItem("code_verifier"),u={grant_type:z,client_id:P,redirect_uri:J,code:n,code_verifier:o},i="".concat(_.token_endpoint),a={url:i,method:"post",data:w().stringify(u)},e.abrupt("return",l()(a).then((function(e){return e.data}),console.error));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=n(1166),L=((0,f.default)()||{}).publicRuntimeConfig,H=(void 0===L?{}:L).sso_client_id,K=function(){var e=(0,u.Z)(c().mark((function e(t){var n,r,o,u,i,a,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(_.jwks_uri),e.next=3,l().get(n).then((function(e){return e.data}),console.error);case 3:if(r=e.sent,o=null===r||void 0===r?void 0:r.keys,u=S(t),void 0!==(i=o.find((function(e){return e.kid===u.kid})))){e.next=10;break}return console.error("public key not found in JWK jwks.json"),e.abrupt("return",!1);case 10:if(a=U.KZ.getKey(i),U.fs.jws.JWS.verifyJWT(t,a,{alg:["RS256"]})){e.next=15;break}return console.error("signature verification failed"),e.abrupt("return",!1);case 15:if(s=y(t),!(Date.now()>=1e3*s.exp)){e.next=19;break}return console.error("token expired"),e.abrupt("return",!1);case 19:if(0===s.aud.localeCompare(H)){e.next=23;break}return console.error("token was not issued for this audience"),e.abrupt("return",!1);case 23:return e.abrupt("return",s);case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=n(9186),W=((0,f.default)()||{}).publicRuntimeConfig,q=((void 0===W?{}:W).app_url,"tokens");function F(){var e=(0,a.useRouter)(),t=(0,i.useState)(null),n=t[0],o=t[1],f=(0,i.useState)(null),p=(f[0],f[1]);(0,i.useEffect)((function(){function t(){return(t=(0,u.Z)(c().mark((function t(){var n,r,u,i,a,s,f;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g();case 3:if(n=new URLSearchParams(window.location.search),r=n.get("code"),u=n.get("state")||"",!r){t.next=16;break}return t.next=9,T({code:r,state:u});case 9:return i=t.sent,t.next=12,K(i.id_token);case 12:(a=t.sent)&&(sessionStorage.setItem(q,JSON.stringify(i)),o(a),e.push("/")),t.next=26;break;case 16:return s=JSON.parse(sessionStorage.getItem(q)||""),t.next=19,K(s.id_token);case 19:if(!(f=t.sent)){t.next=24;break}return t.abrupt("return",o(f));case 24:sessionStorage.removeItem(q),l();case 26:t.next=31;break;case 28:t.prev=28,t.t0=t.catch(0),p(t.t0);case 31:case"end":return t.stop()}}),t,null,[[0,28]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var l=function(){var e=(0,u.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D({kc_idp_hint:"idir"});case 2:t=e.sent,window.location.href=t;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var t=(0,u.Z)(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:sessionStorage.removeItem(q),e.reload();case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var e=(0,u.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,V.V)();case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"SSO Requests"}),(0,r.jsx)("meta",{name:"description",content:"The request process workflow tool for the RedHat SSO Dev Exchange service"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{children:[n?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("button",{type:"button",onClick:d,children:"Logout"})}):(0,r.jsx)("button",{type:"button",onClick:l,children:"Login"}),(0,r.jsx)("button",{type:"button",onClick:h,children:"Check Server Auth"})]}),(0,r.jsx)("footer",{})]})}},9186:function(e,t,n){"use strict";n.d(t,{g:function(){return i},V:function(){return a}});var r=n(809),o=n.n(r),c=n(2447),u=n(513),i=function(){var e=JSON.parse(sessionStorage.getItem("tokens")||"{}")||{};return{headers:{Authorization:"Bearer ".concat(e.id_token)}}};function a(){return s.apply(this,arguments)}function s(){return(s=(0,c.Z)(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=i(),e.next=4,u.e.get("/api/info",t).then((function(e){return e.data}));case 4:return n=e.sent,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}},513:function(e,t,n){"use strict";n.d(t,{e:function(){return a}});var r=n(1752),o=n(9669),c=n.n(o),u=((0,r.default)()||{}).publicRuntimeConfig,i=(void 0===u?{}:u).api_url,a=c().create({baseURL:"".concat(i,"/"),timeout:0,withCredentials:!0})},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6862)}])},4654:function(){}},function(e){e.O(0,[332,559,478,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);