(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6862:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return W}});var r=t(5893),o=t(809),u=t.n(o),a=t(2447),i=t(7294),c=t(1163),s=t(9008),f=t(1752),p=t(9669),l=t.n(p),d=((0,f.default)()||{}).publicRuntimeConfig,h=(void 0===d?{}:d).sso_url,v="".concat(h,"/.well-known/openid-configuration"),_={},g=function(){var e=(0,a.Z)(u().mark((function e(){var n,t,r,o,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().get(v).then((function(e){return e.data}),(function(){return null}));case 2:n=e.sent,t=n.authorization_endpoint,r=n.token_endpoint,o=n.jwks_uri,a=n.userinfo_endpoint,Object.assign(_,{authorization_endpoint:t,token_endpoint:r,jwks_uri:o,userinfo_endpoint:a});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=t(129),w=t.n(k),x=t(9227),b=function(e){if(!e)return null;var n=e.replace(/-/g,"+").replace(/_/g,"/"),t=atob(n),r=Array.from(t).reduce((function(e,n){var t=("00"+n.charCodeAt(0).toString(16)).slice(-2);return"".concat(e,"%").concat(t)}),""),o=decodeURIComponent(r);return JSON.parse(o)},m=function(e){if(!e)return null;var n=e.split("."),t=(0,x.Z)(n,3),r=(t[0],t[1]);t[2];return b(r)},y=function(e){if(!e)return null;var n=e.split("."),t=(0,x.Z)(n,3),r=t[0];t[1],t[2];return b(r)},S=function(){var e=new Uint32Array(28);crypto.getRandomValues(e);var n=[];return e.forEach((function(e){return n.push("0".concat(e.toString(16).substr(-2)))})),n.reduce((function(e,n){return"".concat(e).concat(n)}),"")},j=function(){var e=(0,a.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"SHA-256",t=new TextEncoder,r=t.encode(n),e.abrupt("return",crypto.subtle.digest("SHA-256",r));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),C=function(e){var n=new Uint8Array(e).reduce((function(e,n){return"".concat(e).concat(String.fromCharCode(n))}),"");return btoa(n).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")},R=((0,f.default)()||{}).publicRuntimeConfig,Z=void 0===R?{}:R,I=Z.sso_client_id,E=Z.sso_authorization_scope,N=Z.sso_authorization_response_type,O=Z.sso_redirect_uri,A=Z.sso_token_grant_type,J=function(){var e=(0,a.Z)(u().mark((function e(){var n,t,r,o,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=S(),sessionStorage.setItem("pkce_state",n),t=S(),sessionStorage.setItem("code_verifier",t),e.next=6,j(t);case 6:return r=e.sent,o=C(r),sessionStorage.setItem("code_challenge",o),a={client_id:I,response_type:N,redirect_uri:O,scope:E,state:n,code_challenge_method:"S256",code_challenge:o},e.abrupt("return","".concat(_.authorization_endpoint,"?").concat(w().stringify(a,{encode:!1})));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=(0,a.Z)(u().mark((function e(n){var t,r,o,a,i,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.code,r=n.state,sessionStorage.getItem("pkce_state")===r){e.next=4;break}return console.error("invalid state"),e.abrupt("return",null);case 4:return o=sessionStorage.getItem("code_verifier"),a={grant_type:A,client_id:I,redirect_uri:O,code:t,code_verifier:o},i="".concat(_.token_endpoint),c={url:i,method:"post",data:w().stringify(a)},e.abrupt("return",l()(c).then((function(e){return e.data}),console.error));case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),T=t(1166),U=((0,f.default)()||{}).publicRuntimeConfig,L=(void 0===U?{}:U).sso_client_id,H=function(){var e=(0,a.Z)(u().mark((function e(n){var t,r,o,a,i,c,s;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(_.jwks_uri),e.next=3,l().get(t).then((function(e){return e.data}),console.error);case 3:if(r=e.sent,o=null===r||void 0===r?void 0:r.keys,a=y(n),void 0!==(i=o.find((function(e){return e.kid===a.kid})))){e.next=10;break}return console.error("public key not found in JWK jwks.json"),e.abrupt("return",!1);case 10:if(c=T.KZ.getKey(i),T.fs.jws.JWS.verifyJWT(n,c,{alg:["RS256"]})){e.next=15;break}return console.error("signature verification failed"),e.abrupt("return",!1);case 15:if(s=m(n),!(Date.now()>=1e3*s.exp)){e.next=19;break}return console.error("token expired"),e.abrupt("return",!1);case 19:if(0===s.aud.localeCompare(L)){e.next=23;break}return console.error("token was not issued for this audience"),e.abrupt("return",!1);case 23:return e.abrupt("return",s);case 24:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),K=t(9186),P=((0,f.default)()||{}).publicRuntimeConfig,V=((void 0===P?{}:P).app_url,"tokens");function W(){var e=(0,c.useRouter)(),n=(0,i.useState)(null),t=n[0],o=n[1],f=(0,i.useState)(null),p=(f[0],f[1]);(0,i.useEffect)((function(){function n(){return(n=(0,a.Z)(u().mark((function n(){var t,r,a,i,c,s,f;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,g();case 3:if(t=new URLSearchParams(window.location.search),r=t.get("code"),a=t.get("state")||"",!r){n.next=16;break}return n.next=9,z({code:r,state:a});case 9:return i=n.sent,n.next=12,H(i.id_token);case 12:(c=n.sent)&&(sessionStorage.setItem(V,JSON.stringify(i)),o(c),e.push("/")),n.next=26;break;case 16:return s=JSON.parse(sessionStorage.getItem(V)||""),n.next=19,H(s.id_token);case 19:if(!(f=n.sent)){n.next=24;break}return n.abrupt("return",o(f));case 24:sessionStorage.removeItem(V),l();case 26:n.next=31;break;case 28:n.prev=28,n.t0=n.catch(0),p(n.t0);case 31:case"end":return n.stop()}}),n,null,[[0,28]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]);var l=function(){var e=(0,a.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J();case 2:n=e.sent,window.location.href=n;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:sessionStorage.removeItem(V),e.reload();case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),h=function(){var e=(0,a.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,K.V)();case 2:n=e.sent,console.log(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"SSO Requests"}),(0,r.jsx)("meta",{name:"description",content:"The request process workflow tool for the RedHat SSO Dev Exchange service"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{children:[t?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("button",{type:"button",onClick:d,children:"Logout"})}):(0,r.jsx)("button",{type:"button",onClick:l,children:"Login"}),(0,r.jsx)("button",{type:"button",onClick:h,children:"Check Server Auth"})]}),(0,r.jsx)("footer",{})]})}},9186:function(e,n,t){"use strict";t.d(n,{g:function(){return i},V:function(){return c}});var r=t(809),o=t.n(r),u=t(2447),a=t(513),i=function(){var e=JSON.parse(sessionStorage.getItem("tokens")||"")||{};return{headers:{Authorization:"Bearer ".concat(e.id_token)}}};function c(){return s.apply(this,arguments)}function s(){return(s=(0,u.Z)(o().mark((function e(){var n,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=i(),e.next=4,a.e.get("/api/info",n).then((function(e){return e.data}));case 4:return t=e.sent,e.abrupt("return",t);case 8:return e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}},513:function(e,n,t){"use strict";t.d(n,{e:function(){return c}});var r=t(1752),o=t(9669),u=t.n(o),a=((0,r.default)()||{}).publicRuntimeConfig,i=(void 0===a?{}:a).api_url,c=u().create({baseURL:"".concat(i,"/"),timeout:0,withCredentials:!0})},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6862)}])},4654:function(){}},function(e){e.O(0,[332,559,478,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);