(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[897],{92665:function(e,t,n){"use strict";var r=n(85893),a=n(27261),i=n(6434),l=n(29163);function s(){var e=(0,a.Z)(["\n  list-style: none;\n  margin: 0;\n  & li {\n    margin: 0;\n  }\n"]);return s=function(){return e},e}function o(){var e=(0,a.Z)(["\n  font-weight: 600;\n"]);return o=function(){return e},e}function c(){var e=(0,a.Z)(["\n  font-size: unset;\n  & tr {\n    display: flex;\n    margin-bottom: 5px;\n    & > td {\n      border: none;\n      padding: 0 5px 0 0;\n    }\n  }\n"]);return c=function(){return e},e}var u=l.default.table(c()),d=l.default.span(o()),p=l.default.ul(s()),v=function(e){var t=e.list,n=e.title,a=e.inline,i=void 0!==a&&a;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:n}),(1===(null===t||void 0===t?void 0:t.length)||i)&&(0,r.jsx)(d,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,r.jsxs)("span",{children:[e,n!==t.length-1&&", "," "]},e)}))})]}),!i&&((null===t||void 0===t?void 0:t.length)||0)>1&&(0,r.jsx)("tr",{children:(0,r.jsx)("td",{children:(0,r.jsx)(d,{children:(0,r.jsx)(p,{children:null===t||void 0===t?void 0:t.map((function(e){return(0,r.jsx)("li",{children:e},e)}))})})})})]})},h=function(e){return!!e&&(1!==e.length||""!==e[0])};t.Z=function(e){var t,n=e.children,a=e.request;return a?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(u,{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Are you accountable for this project?"}),(0,r.jsx)("td",{children:(0,r.jsx)(d,{children:(t=null===a||void 0===a?void 0:a.projectLead,void 0===t?"":t?"Yes":"No")})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Client Type:"}),(0,r.jsx)("td",{children:(0,r.jsx)(d,{children:null!==a&&void 0!==a&&a.publicAccess?"Public":"Confidential"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Project Name:"}),(0,r.jsx)("td",{children:(0,r.jsx)(d,{children:null===a||void 0===a?void 0:a.projectName})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Default email address:"}),(0,r.jsx)("td",{children:(0,r.jsx)(d,{children:null===a||void 0===a?void 0:a.preferredEmail})})]}),(0,r.jsx)(v,{list:null===a||void 0===a?void 0:a.additionalEmails,title:"Additional Emails:"}),(0,r.jsx)(v,{list:(0,i.LF)(null===a||void 0===a?void 0:a.realm),title:"Identity Providers Required:",inline:!0}),h(null===a||void 0===a?void 0:a.devValidRedirectUris)&&(0,r.jsx)(v,{list:null===a||void 0===a?void 0:a.devValidRedirectUris,title:"Dev Redirect URIs:"}),h(null===a||void 0===a?void 0:a.testValidRedirectUris)&&(0,r.jsx)(v,{list:null===a||void 0===a?void 0:a.testValidRedirectUris,title:"Test Redirect URIs:"}),h(null===a||void 0===a?void 0:a.prodValidRedirectUris)&&(0,r.jsx)(v,{list:null===a||void 0===a?void 0:a.prodValidRedirectUris,title:"Prod Redirect URIs:"}),n]})})}):null}},29132:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return st}});var r=n(85893),a=n(809),i=n.n(a),l=n(64121),s=n(92447),o=n(67294),c=n(11163),u=n(96486),d=n(51436),p=n(64735),v=n(40602),h=n(27261),f=n(29163),m=n(11915),x=n(4826),g=n(35611),b=n(22122),E=n(19756),j=n(94184),y=n.n(j),w=n(76792),S=n(84873),C=["active","disabled","className","style","activeLabel","children"],k=["children"],P=o.forwardRef((function(e,t){var n=e.active,r=e.disabled,a=e.className,i=e.style,l=e.activeLabel,s=e.children,c=(0,E.default)(e,C),u=n||r?"span":S.Z;return o.createElement("li",{ref:t,style:i,className:y()(a,"page-item",{active:n,disabled:r})},o.createElement(u,(0,b.default)({className:"page-link",disabled:r},c),s,n&&l&&o.createElement("span",{className:"sr-only"},l)))}));P.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},P.displayName="PageItem";var R=P;function A(e,t,n){function r(e){var r=e.children,a=(0,E.default)(e,k);return o.createElement(P,a,o.createElement("span",{"aria-hidden":"true"},r||t),o.createElement("span",{className:"sr-only"},n))}return void 0===n&&(n=e),r.displayName=e,r}var N=A("First","\xab"),U=A("Prev","\u2039","Previous"),Z=A("Ellipsis","\u2026","More"),I=A("Next","\u203a"),O=A("Last","\xbb"),_=["bsPrefix","className","children","size"],T=o.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.children,i=e.size,l=(0,E.default)(e,_),s=(0,w.vE)(n,"pagination");return o.createElement("ul",(0,b.default)({ref:t},l,{className:y()(r,s,i&&s+"-"+i)}),a)}));T.First=N,T.Prev=U,T.Ellipsis=Z,T.Item=R,T.Next=I,T.Last=O;var F=T,D=n(23451);function L(){var e=(0,h.Z)(["\n  min-height: 44px;\n  border-bottom: 1px solid #707070;\n  margin-bottom: 5px;\n  padding-bottom: 5px;\n  overflow: wrap;\n"]);return L=function(){return e},e}var q,M=f.default.div(L());function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var K={allItemsAreSelected:"All items are selected.",clearSearch:"Clear Search",clearSelected:"Clear Selected",noOptions:"No options",search:"Search",selectAll:"Select All",selectAllFiltered:"Select All (Filtered)",selectSomeItems:"Select...",create:"Create"},z={value:[],hasSelectAll:!0,className:"multi-select",debounceDuration:200,options:[]},Q=o.createContext({}),B=e=>{var{props:t,children:n}=e,[r,a]=(0,o.useState)(t.options);return(0,o.useMemo)((()=>{"undefined"===typeof document||q||((q=document.createElement("style")).innerHTML='.rmsc{--rmsc-main:#4285f4;--rmsc-hover:#f1f3f5;--rmsc-selected:#e2e6ea;--rmsc-border:#ccc;--rmsc-gray:#aaa;--rmsc-bg:#fff;--rmsc-p:10px;--rmsc-radius:4px;--rmsc-h:38px;}.rmsc *{box-sizing:border-box;transition:all 0.2s ease;}.rmsc .gray{color:var(--rmsc-gray);}.rmsc .dropdown-content{position:absolute;z-index:1;top:100%;width:100%;padding-top:8px;}.rmsc .dropdown-content .panel-content{overflow:hidden;border-radius:var(--rmsc-radius);background:var(--rmsc-bg);box-shadow:0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 11px rgba(0, 0, 0, 0.1);}.rmsc .dropdown-container{position:relative;outline:0;background-color:var(--rmsc-bg);border:1px solid var(--rmsc-border);border-radius:var(--rmsc-radius);}.rmsc .dropdown-container[aria-disabled="true"]:focus-within{box-shadow:var(--rmsc-gray) 0 0 0 1px;border-color:var(--rmsc-gray);}.rmsc .dropdown-container:focus-within{box-shadow:var(--rmsc-main) 0 0 0 1px;border-color:var(--rmsc-main);}.rmsc .dropdown-heading{position:relative;padding:0 var(--rmsc-p);display:flex;align-items:center;width:100%;height:var(--rmsc-h);cursor:default;outline:0;}.rmsc .dropdown-heading .dropdown-heading-value{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1;}.rmsc .clear-selected-button{cursor:pointer;background:none;border:0;padding:0;display:flex;}.rmsc .options{max-height:260px;overflow-y:auto;margin:0;padding-left:0;}.rmsc .options li{list-style:none;margin:0;}.rmsc .select-item{box-sizing:border-box;cursor:pointer;display:block;padding:var(--rmsc-p);outline:0;}.rmsc .select-item:hover,.rmsc .select-item:focus{background:var(--rmsc-hover);}.rmsc .select-item.selected{background:var(--rmsc-selected);}.rmsc .no-options{padding:var(--rmsc-p);text-align:center;color:var(--rmsc-gray);}.rmsc .search{width:100%;position:relative;border-bottom:1px solid var(--rmsc-border);}.rmsc .search input{background:none;height:var(--rmsc-h);padding:0 var(--rmsc-p);width:100%;outline:0;border:0;}.rmsc .search-clear-button{cursor:pointer;position:absolute;top:0;right:0;bottom:0;background:none;border:0;padding:0 calc(var(--rmsc-p) / 2);}.rmsc .search-clear-button [hidden]{display:none;}.rmsc .item-renderer{display:flex;align-items:baseline;}.rmsc .item-renderer input{margin:0;margin-right:5px;}.rmsc .item-renderer.disabled{opacity:0.5;}.rmsc .spinner{animation:rotate 2s linear infinite;}.rmsc .spinner .path{stroke:var(--rmsc-border);stroke-width:4px;stroke-linecap:round;animation:dash 1.5s ease-in-out infinite;}@keyframes rotate{100%{transform:rotate(360deg);}}@keyframes dash{0%{stroke-dasharray:1, 150;stroke-dashoffset:0;}50%{stroke-dasharray:90, 150;stroke-dashoffset:-35;}100%{stroke-dasharray:90, 150;stroke-dashoffset:-124;}}',document.head.appendChild(q))}),[]),(0,o.useEffect)((()=>{a(t.options)}),[t.options]),o.createElement(Q.Provider,{value:W({t:e=>{var n;return(null==(n=t.overrideStrings)?void 0:n[e])||K[e]}},z,t,{options:r,setOptions:a})},n)},H=()=>o.useContext(Q);var V={when:!0,eventTypes:["keydown"]};function J(e,t,n){var r=(0,o.useMemo)((()=>Array.isArray(e)?e:[e]),[e]),a=Object.assign({},V,n),{when:i,eventTypes:l}=a,s=(0,o.useRef)(t),{target:c}=a;(0,o.useEffect)((()=>{s.current=t}));var u=(0,o.useCallback)((e=>{r.some((t=>e.key===t||e.code===t))&&s.current(e)}),[r]);(0,o.useEffect)((()=>{if(i&&"undefined"!==typeof window){var e=c?c.current:window;return l.forEach((t=>{e&&e.addEventListener(t,u)})),()=>{l.forEach((t=>{e&&e.removeEventListener(t,u)}))}}}),[i,l,r,c,t])}var X={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",ENTER:"Enter",ESCAPE:"Escape",SPACE:"Space"};function Y(e,t){var n=e.length,r=t.length,a=[];if(!n||!r)return 0;if(n<r&&([e,t]=[t,e]),-1!==e.indexOf(t))return r+1/n;for(var i=0;i<=n;++i)a[i]=[0];for(var l=0;l<=r;++l)a[0][l]=0;for(var s=1;s<=n;++s)for(var o=1;o<=r;++o)a[s][o]=e[s-1]===t[o-1]?1+a[s-1][o-1]:Math.max(a[s][o-1],a[s-1][o]);return a[n][r]}function G(e,t){if(!e)return"";if(e=e.toUpperCase().replace(/((?=[^\u00E0-\u00FC])\W)|_/g,""),!t)return e;var n=t;return Object.keys(n).reduce(((e,t)=>{var r=new RegExp(t,"g");return e.replace(r,n[t])}),e)}var $,ee=()=>o.createElement("svg",{width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"dropdown-search-clear-icon gray"},o.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),o.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),te=e=>{var{checked:t,option:n,onClick:r,disabled:a}=e;return o.createElement("div",{className:"item-renderer "+(a&&"disabled")},o.createElement("input",{type:"checkbox",onChange:r,checked:t,tabIndex:-1,disabled:a}),o.createElement("span",null,n.label))},ne=e=>{var{itemRenderer:t=te,option:n,checked:r,tabIndex:a,disabled:i,onSelectionChanged:l,onClick:s}=e,c=(0,o.useRef)(),u=()=>{i||l(!r)};return J([X.ENTER,X.SPACE],(e=>{u(),e.preventDefault()}),{target:c}),o.createElement("label",{className:"select-item "+(r&&"selected"),role:"option","aria-selected":r,tabIndex:a,ref:c},o.createElement(t,{option:n,checked:r,onClick:e=>{u(),s(e)},disabled:i}))},re=e=>{var{options:t,onClick:n,skipIndex:r}=e,{disabled:a,value:i,onChange:l,ItemRenderer:s}=H();return o.createElement(o.Fragment,null,t.map(((e,t)=>{var c=t+r;return o.createElement("li",{key:(null==e?void 0:e.key)||t},o.createElement(ne,{tabIndex:c,option:e,onSelectionChanged:t=>{return n=e,r=t,void(a||l(r?[...i,n]:i.filter((e=>e.value!==n.value))));var n,r},checked:!!i.find((t=>t.value===e.value)),onClick:e=>n(e,c),itemRenderer:s,disabled:e.disabled||a}))})))};function ae(e,t,n,r,a,i,l){try{var s=e[i](l),o=s.value}catch(c){return void n(c)}s.done?t(o):Promise.resolve(o).then(r,a)}function ie(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function l(e){ae(i,r,a,l,s,"next",e)}function s(e){ae(i,r,a,l,s,"throw",e)}l(void 0)}))}}!function(e){e[e.SEARCH=0]="SEARCH",e[e.NONE=-1]="NONE"}($||($={}));var le=()=>{var{t:e,onChange:t,options:n,setOptions:r,value:a,filterOptions:i,ItemRenderer:l,disabled:s,disableSearch:c,hasSelectAll:u,ClearIcon:d,debounceDuration:p,isCreatable:v,onCreateOption:h}=H(),f=(0,o.useRef)(),m=(0,o.useRef)(),[x,g]=(0,o.useState)(""),[b,E]=(0,o.useState)(n),[j,y]=(0,o.useState)(""),[w,S]=(0,o.useState)(0),C=(0,o.useCallback)(((e,t)=>{var n;return function(){for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];clearTimeout(n),n=setTimeout((()=>{e.apply(null,a)}),t)}})((e=>y(e)),p),[]),k=(0,o.useMemo)((()=>{var e=0;return c||(e+=1),u&&(e+=1),e}),[c,u]),P={label:e(x?"selectAllFiltered":"selectAll"),value:""},R=()=>{var e;y(""),g(""),null==m||null==(e=m.current)||e.focus()},A=e=>S(e);J([X.ARROW_DOWN,X.ARROW_UP],(e=>{switch(e.code){case X.ARROW_UP:Z(-1);break;case X.ARROW_DOWN:Z(1);break;default:return}e.stopPropagation(),e.preventDefault()}),{target:f});var N=function(){var e=ie((function*(){var e={label:x,value:x,__isNew__:!0};h&&(e=yield h(x)),r([e,...n]),R(),t([...a,e])}));return function(){return e.apply(this,arguments)}}(),U=function(){var e=ie((function*(){return i?yield i(n,j):function(e,t,n){if(!t)return e;var r=G(t,n);return e.filter((e=>{var{label:t,value:n}=e;return null!=t&&null!=n})).map((e=>({option:e,score:Y(G(e.label,n),r)}))).filter((e=>e.score>=r.length-2)).sort(((e,t)=>t.score-e.score)).map((e=>e.option))}(n,j)}));return function(){return e.apply(this,arguments)}}(),Z=e=>{var t=w+e;t=Math.max(0,t),t=Math.min(t,n.length+Math.max(k-1,0)),S(t)};(0,o.useEffect)((()=>{var e,t;null==f||null==(e=f.current)||null==(t=e.querySelector("[tabIndex='"+w+"']"))||t.focus()}),[w]);var[I,O]=(0,o.useMemo)((()=>{var e=b.filter((e=>!e.disabled));return[e.every((e=>-1!==a.findIndex((t=>t.value===e.value)))),0!==e.length]}),[b,a]);return(0,o.useEffect)((()=>{U().then(E)}),[j,n]),o.createElement("div",{className:"select-panel",role:"listbox",ref:f},!c&&o.createElement("div",{className:"search"},o.createElement("input",{placeholder:e("search"),type:"text","aria-describedby":e("search"),onChange:e=>{C(e.target.value),g(e.target.value),S($.SEARCH)},onFocus:()=>{S($.SEARCH)},value:x,ref:m,tabIndex:0}),o.createElement("button",{type:"button",className:"search-clear-button",hidden:!x,onClick:R,"aria-label":e("clearSearch")},d||o.createElement(ee,null))),o.createElement("ul",{className:"options"},u&&O&&o.createElement(ne,{tabIndex:1===k?0:1,checked:I,option:P,onSelectionChanged:e=>{var r=(e=>{var t=b.filter((e=>!e.disabled)).map((e=>e.value));if(e){var r=[...a.map((e=>e.value)),...t];return(i?b:n).filter((e=>r.includes(e.value)))}return a.filter((e=>!t.includes(e.value)))})(e);t(r)},onClick:()=>A(1),itemRenderer:l,disabled:s}),b.length?o.createElement(re,{skipIndex:k,options:b,onClick:(e,t)=>A(t)}):v?o.createElement("li",{onClick:N,className:"select-item creatable"},e("create")+' "'+x+'"'):o.createElement("li",{className:"no-options"},e("noOptions"))))},se=e=>{var{expanded:t}=e;return o.createElement("svg",{width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"dropdown-heading-dropdown-arrow gray"},o.createElement("path",{d:t?"M18 15 12 9 6 15":"M6 9L12 15 18 9"}))},oe=()=>{var{t:e,value:t,options:n,valueRenderer:r}=H(),a=0===t.length,i=t.length===n.length,l=r&&r(t,n);return a?o.createElement("span",{className:"gray"},l||e("selectSomeItems")):o.createElement("span",null,l||(i?e("allItemsAreSelected"):t.map((e=>e.label)).join(", ")))},ce=e=>{var{size:t=24}=e;return o.createElement("span",{style:{width:t,marginRight:"0.2rem"}},o.createElement("svg",{width:t,height:t,className:"spinner",viewBox:"0 0 50 50",style:{display:"inline",verticalAlign:"middle"}},o.createElement("circle",{cx:"25",cy:"25",r:"20",fill:"none",className:"path"})))},ue=()=>{var{t:e,onMenuToggle:t,ArrowRenderer:n,shouldToggleOnHover:r,isLoading:a,disabled:i,onChange:l,labelledBy:s,value:c,isOpen:u,defaultIsOpen:d,ClearSelectedIcon:p}=H(),[v,h]=(0,o.useState)(!0),[f,m]=(0,o.useState)(d),[x,g]=(0,o.useState)(!1),b=n||se,E=(0,o.useRef)();!function(e,t){var n=(0,o.useRef)(!1);(0,o.useEffect)((()=>{n.current?e():n.current=!0}),t)}((()=>{t&&t(f)}),[f]),(0,o.useEffect)((()=>{void 0===d&&"boolean"===typeof u&&(h(!1),m(u))}),[u]);J([X.ENTER,X.ARROW_DOWN,X.SPACE,X.ESCAPE],(e=>{if(!["text","button"].includes(e.target.type)||![X.SPACE,X.ENTER].includes(e.code)){var t;if(v)if(e.code===X.ESCAPE)m(!1),null==E||null==(t=E.current)||t.focus();else m(!0);e.preventDefault()}}),{target:E});var j=e=>{v&&r&&m(e)};return o.createElement("div",{tabIndex:0,className:"dropdown-container","aria-labelledby":s,"aria-expanded":f,"aria-readonly":!0,"aria-disabled":i,ref:E,onFocus:()=>!x&&g(!0),onBlur:e=>{!e.currentTarget.contains(e.relatedTarget)&&v&&(g(!1),m(!1))},onMouseEnter:()=>j(!0),onMouseLeave:()=>j(!1)},o.createElement("div",{className:"dropdown-heading",onClick:()=>{v&&m(!a&&!i&&!f)}},o.createElement("div",{className:"dropdown-heading-value"},o.createElement(oe,null)),a&&o.createElement(ce,null),c.length>0&&o.createElement("button",{type:"button",className:"clear-selected-button",onClick:e=>{e.stopPropagation(),l([]),v&&m(!1)},disabled:i,"aria-label":e("clearSelected")},p||o.createElement(ee,null)),o.createElement(b,{expanded:f})),f&&o.createElement("div",{className:"dropdown-content"},o.createElement("div",{className:"panel-content"},o.createElement(le,null))))},de=e=>o.createElement(B,{props:e},o.createElement("div",{className:"rmsc "+(e.className||"multi-select")},o.createElement(ue,null))),pe=n(65837),ve=n(76457),he=(n(31261),n(30454));function fe(){var e=(0,h.Z)(["\n  display: grid;\n  grid-template-columns:\n    ","\n    &> * {\n    margin-right: 10px;\n  }\n"]);return fe=function(){return e},e}function me(){var e=(0,h.Z)(["\n  padding-left: 5px;\n  line-height: 40px;\n"]);return me=function(){return e},e}function xe(){var e=(0,h.Z)(["\n  cursor: pointer;\n  font-weight: bold;\n  & * {\n    font-weight: normal;\n  }\n"]);return xe=function(){return e},e}function ge(){var e=(0,h.Z)(["\n  margin: 0 !important;\n  & li {\n    margin: 0 !important;\n  }\n"]);return ge=function(){return e},e}function be(){var e=(0,h.Z)(["\n  .dropdown-container {\n    border: 1.8px solid black !important;\n  }\n"]);return be=function(){return e},e}var Ee=(0,f.default)(de)(be()),je=(0,f.default)(F)(ge()),ye=f.default.label(xe()),we=f.default.li(me()),Se=f.default.div(fe(),(function(e){return"repeat(".concat(e.itemsLength,", 1fr);")})),Ce=function(e){for(var t=e.rowCount,n=e.limit,a=e.page,i=e.onPage,l=e.onPrev,s=e.onNext,o=parseInt(String((t-1)/n+1)),c=[(0,r.jsx)(F.Item,{disabled:1===a,onClick:function(){return l()},children:"Previous"},"prev")],u=function(e){c.push((0,r.jsx)(F.Item,{active:e===a,onClick:function(){return i(e)},children:e},e)),o===e&&c.push((0,r.jsx)(F.Item,{disabled:a===e,onClick:function(){return s()},children:"Next"},"next"))},d=1;d<=o;d++)u(d);return(0,r.jsx)(r.Fragment,{children:c})},ke=function(e){var t=e.rowCount,n=e.limit,a=e.page,i=e.onPrev,l=e.onNext,s=parseInt(String((t-1)/n+1)),o=parseInt(String((a-1)*n+1)),c=o+n-1;return c>t&&(c=t),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(F.Item,{disabled:1===a,onClick:function(){return i(a-1)},children:"Previous"},"prev"),(0,r.jsx)(F.Item,{disabled:a===s,onClick:function(){return l(a+1)},children:"Next"},"next"),(0,r.jsx)(we,{children:"".concat(o,"-").concat(c," of ").concat(t)})]})};var Pe=function(e){var t=e.headers,n=e.children,a=e.onSearch,i=void 0===a?u.noop:a,l=e.onEnter,s=void 0===l?u.noop:l,c=e.filters,d=void 0===c?[]:c,v=e.onLimit,h=void 0===v?u.noop:v,f=e.onPage,b=e.onPrev,E=void 0===b?u.noop:b,j=e.onNext,y=void 0===j?u.noop:j,w=e.pageLimits,S=e.searchKey,C=void 0===S?"":S,k=e.searchPlaceholder,P=void 0===k?"Search...":k,R=e.page,A=void 0===R?1:R,N=e.limit,U=void 0===N?10:N,Z=e.rowCount,I=void 0===Z?10:Z,O=e.loading,_=(0,o.useState)(C),T=_[0],F=_[1],L=I||U;I>U&&(L=U);var q,W=(0,r.jsx)("td",{colSpan:100,children:(0,r.jsx)("div",{style:{height:"".concat(L*(he.eX+he.gM)-he.gM,"px"),paddingTop:"10px"},children:(0,r.jsx)(pe.TextBlock,{rows:2*L,color:"#CCC"})})});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(M,{children:(0,r.jsx)(p.ZP,{cols:12,children:(0,r.jsxs)(p.ZP.Row,{collapse:"1160",gutter:[],align:"center",children:[(0,r.jsxs)(p.ZP.Col,{span:4,children:[(0,r.jsx)(m.ZP,{type:"text",size:"small",placeholder:P,style:{display:"inline-block"},value:T,onChange:function(e){F(e.target.value)},onKeyUp:function(e){"Enter"===e.key&&s(T)}}),(0,r.jsx)(x.ZP,{type:"button",size:"small",onClick:function(){i(T)},children:"Search"})]}),(0,r.jsx)(p.ZP.Col,{span:8,style:{textAlign:"right"},children:(0,r.jsx)(Se,{itemsLength:d.length,children:d.map((function(e,t){return(0,r.jsx)(ye,{children:e.multiselect?(0,r.jsxs)(r.Fragment,{children:[e.label,(0,r.jsx)(Ee,{className:"multiselect",options:e.options,value:Array.isArray(e.value)?e.value:[],onChange:e.onChange,labelledBy:"Select",hasSelectAll:!1})]}):(0,r.jsxs)(r.Fragment,{children:[e.label,(0,r.jsx)(g.ZP,{onChange:e.onChange,value:"string"===typeof e.value?e.value:"",children:e.options.map((function(e){return(0,r.jsx)("option",{value:e.value,children:e.label},Array.isArray(e.value)?JSON.stringify(e.value):e.value)}))})]})},t)}))})})]})})}),(0,r.jsxs)(D.Z,{children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:t.map((function(e,t){return(0,r.jsx)("th",{style:e.style||{},children:e.name},t)}))})}),(0,r.jsx)("tbody",{children:(0,r.jsx)(ve.Z,{ready:!O||!1,showLoadingAnimation:!0,customPlaceholder:W,children:n})})]}),w&&(0,r.jsx)(p.ZP,{cols:12,children:(0,r.jsxs)(p.ZP.Row,{collapse:"992",gutter:[],align:"center",children:[(0,r.jsx)(p.ZP.Col,{span:8,children:(0,r.jsx)(je,{children:f?(0,r.jsx)(Ce,{rowCount:I,limit:U,page:A,onPage:f}):(0,r.jsx)(ke,{rowCount:I,limit:U,page:A,onPrev:E,onNext:y})})}),(0,r.jsx)(p.ZP.Col,{span:4,style:{textAlign:"right"},children:(0,r.jsx)(g.ZP,{style:{display:"inline-block",width:"160px"},value:String(U),onChange:function(e){h(Number(e.target.value))},children:(q=w,(0,r.jsx)(r.Fragment,{children:q.map((function(e){return(0,r.jsx)("option",{value:e.value,children:e.text},e.value)}))}))})})]})})]})},Re=n(6645),Ae=n(61408),Ne=n(98806),Ue=n(6434),Ze=n(26265),Ie=n(56841),Oe=n(20374),_e=n(92665),Te=[{value:"draft",label:"Draft"},{value:"submitted",label:"Submitted"},{value:"pr",label:"PR"},{value:"prFailed",label:"PR Failed"},{value:"planned",label:"Planned"},{value:"planFailed",label:"Plan Failed"},{value:"approved",label:"Approved"},{value:"applied",label:"Applied"},{value:"applyFailed",label:"Apply Failed"}];function Fe(){var e=(0,h.Z)(["\n  & label {\n    display: block;\n    font-weight: bold;\n  }\n"]);return Fe=function(){return e},e}var De=(0,f.default)(g.ZP)(Fe());var Le=function(e){var t=e.request,n=e.onUpdate,a=(0,o.useState)(t.idirUserid),l=a[0],c=a[1],u=(0,o.useState)(t.status),p=u[0],v=u[1],h="edit-metadata",f=function(){var e=(0,s.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,Re.Uw)({id:t.id,idirUserid:l,status:p});case 2:if(!n){e.next=5;break}return e.next=5,n();case 5:window.location.hash="#";case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.ZP,{label:"Owner IDIR UUID",fullWidth:!0,onChange:function(e){c(e.target.value)},value:l}),(0,r.jsx)("br",{}),(0,r.jsx)(De,{label:"Owner IDIR UUID",onChange:function(e){v(e.target.value)},value:p,children:Te.map((function(e){return(0,r.jsx)("option",{value:e.value,children:e.label},e.value)}))})]});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x.ZP,{variant:"bcPrimary",size:"small",onClick:function(){return window.location.hash=h},children:"Edit Metadata"}),(0,r.jsx)(Ne.Z,{id:h,content:g,onConfirm:f,icon:d.UJf,title:"Edit Metadata",closable:!0})]})};function qe(){var e=(0,h.Z)(["\n  max-height: calc(100vh - 250px);\n  overflow: auto;\n"]);return qe=function(){return e},e}var Me=f.default.div(qe());function We(e){var t=e.currentUser,n=e.request,a=e.onUpdate;return n?(0,r.jsxs)(Me,{children:[(0,r.jsx)("br",{}),(0,r.jsxs)(_e.Z,{request:n,hasBceid:!1,children:[(0,r.jsx)("br",{}),t.isAdmin&&(0,r.jsx)(Le,{request:n,onUpdate:a})]})]}):null}var Ke=n(31607),ze=n(87522),Qe=n(25367);function Be(){var e=(0,h.Z)(["\n  text-align: center;\n"]);return Be=function(){return e},e}var He=f.default.div(Be()),Ve=[{value:"all",text:"All Events"},{value:"request-pr-success",text:"REQUEST_PR_SUCCESS"},{value:"request-pr-failure",text:"REQUEST_PR_FAILURE"},{value:"request-plan-success",text:"REQUEST_PLAN_SUCCESS"},{value:"request-plan-failure",text:"REQUEST_PLAN_FAILURE"},{value:"request-apply-success",text:"REQUEST_APPLY_SUCCESS"},{value:"request-apply-failure",text:"REQUEST_APPLY_FAILURE"},{value:"request-create-success",text:"REQUEST_CREATE_SUCCESS"},{value:"request-create-failure",text:"REQUEST_CREATE_FAILURE"},{value:"request-update-success",text:"REQUEST_UPDATE_SUCCESS"},{value:"request-update-failure",text:"REQUEST_UPDATE_FAILURE"},{value:"request-delete-success",text:"REQUEST_DELETE_SUCCESS"},{value:"request-delete-failure",text:"REQUEST_DELETE_FAILURE"},{value:"email-submission-failure",text:"EMAIL_SUBMISSION_FAILURE"}];function Je(e){var t=e.requestId,n=(0,o.useState)("all"),a=n[0],c=n[1],u=(0,o.useState)([]),d=u[0],p=u[1],v=(0,o.useState)(!1),h=v[0],f=v[1],m=(0,o.useState)(!1),x=m[0],b=m[1],E=function(){var e=(0,s.Z)(i().mark((function e(){var n,r,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return f(!0),e.next=5,(0,ze.v)({requestId:t,eventCode:a});case 5:n=e.sent,r=(0,l.Z)(n,2),s=r[0],r[1]?b(!0):s&&p(s.rows),f(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){E()}),[t,a]);var j;return x?null:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(M,{children:[(0,r.jsx)("br",{}),(0,r.jsx)(g.ZP,{style:{display:"inline-block",width:"250px"},value:a,onChange:function(e){c(e.target.value)},children:(j=Ve,(0,r.jsx)(r.Fragment,{children:j.map((function(e){return(0,r.jsx)("option",{value:e.value,children:e.text},e.value)}))}))})]}),h?(0,r.jsx)(He,{children:(0,r.jsx)(Ke.Z,{type:"Grid",color:"#000",height:45,width:45,visible:h})}):(0,r.jsx)(Qe.Z,{events:d})]})}var Xe=n(90032);function Ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ge(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ye(Object(n),!0).forEach((function(t){(0,Ze.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ye(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function $e(){var e=(0,h.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n"]);return $e=function(){return e},e}var et=f.default.div($e());var tt=function(e){var t=e.currentUser,n=e.selectedRequest,a=e.defaultTabKey,o=e.setActiveKey,c=e.setRows,u=e.activeKey,p=void 0===u?a:u;if(!n)return null;var v,h=n.realm,f=n.prod,m=n.status,g=n.bceidApproved,b=(0,Ue.Jx)(h),E=b&&f,j=E&&"applied"!==m&&g,y="bceid-approval-modal";v=E&&"applied"===m&&!g?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"To begin the BCeID integration in production, Click Below."}),(0,r.jsx)(x.ZP,{onClick:function(){return window.location.hash=y},children:"Approve Production"})]}):j?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(Xe.Z,{selectedRequest:n,title:"The terraform script will take approximately 20 minutes to complete."})}):(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("p",{children:["This request is ",g?"already approved.":"not ready to approve production."]})});var w=function(){var e=(0,s.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,Re.WN)(Ge(Ge({},n),{},{bceidApproved:!0}),!0);case 2:t=e.sent,r=(0,l.Z)(t,2),r[1]||c();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(Oe.H,{activeKey:p,onSelect:function(e){return o(e)},children:[(0,r.jsx)(Ie.Z,{eventKey:"details",title:"Details",children:(0,r.jsx)(et,{children:(0,r.jsx)(We,{currentUser:t,request:n,onUpdate:c})})}),b&&(0,r.jsx)(Ie.Z,{eventKey:"prod-configuration",title:"Prod Configuration",children:(0,r.jsxs)(et,{children:[(0,r.jsx)("br",{}),v]})}),(0,r.jsx)(Ie.Z,{eventKey:"events",title:"Events",children:(0,r.jsx)(et,{children:(0,r.jsx)(Je,{requestId:n.id})})})]}),(0,r.jsx)(Ne.Z,{id:y,content:"Are you sure you want to approve this integration for production?",onConfirm:w,icon:d.eHv,title:"Approve Production"})]})},nt=[{value:["onestopauth"],label:"IDIR"},{value:["onestopauth-basic","onestopauth-business","onestopauth-both"],label:"BCeID"}],rt=[{value:"active",label:"Active"},{value:"archived",label:"Deleted"}],at=[{value:"dev",label:"Dev"},{value:"test",label:"Test"},{value:"prod",label:"Prod"}],it=[{value:5,text:"5 per page"},{value:10,text:"10 per page"},{value:15,text:"15 per page"},{value:30,text:"30 per page"},{value:50,text:"50 per page"},{value:100,text:"100 per page"}],lt=[{maxWidth:900,marginTop:0,marginLeft:10,marginRight:10,marginUnit:"px",horizontalAlign:"none"},{width:480,marginTop:0,marginLeft:2.5,marginRight:2.5,marginUnit:"rem",horizontalAlign:"none"}];function st(e){var t,n,a=e.currentUser,h=(0,c.useRouter)(),f=(0,o.useState)(!1),m=f[0],x=f[1],g=(0,o.useState)(!1),b=g[0],E=g[1],j=(0,o.useState)([]),y=j[0],w=j[1],S=(0,o.useState)(String((null===(t=h.query)||void 0===t?void 0:t.id)||"")),C=S[0],k=S[1],P=(0,o.useState)(0),R=P[0],A=P[1],N=(0,o.useState)(5),U=N[0],Z=N[1],I=(0,o.useState)(1),O=I[0],_=I[1],T=(0,o.useState)(Number(null===(n=h.query)||void 0===n?void 0:n.id)||void 0),F=T[0],D=T[1],L=(0,o.useState)([]),q=L[0],M=L[1],W=(0,o.useState)([]),K=W[0],z=W[1],Q=(0,o.useState)([]),B=Q[0],H=Q[1],V=(0,o.useState)([]),J=V[0],X=V[1],Y=(0,o.useState)("details"),G=Y[0],$=Y[1],ee=y.find((function(e){return e.id===F})),te=function(){var e=(0,s.Z)(i().mark((function e(){var t,n,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,Ue.UT)(K,q),n=(0,l.Z)(t,2),r=n[0],a=n[1],e.abrupt("return",(0,Re.zD)({searchField:["id","projectName"],searchKey:C,order:[["updatedAt","desc"],["status","desc"]],limit:U,page:O,status:B.map((function(e){return e.value})),archiveStatus:J.map((function(e){return e.value})),realms:r,environments:a}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=(0,s.Z)(i().mark((function e(){var t,n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,te();case 3:t=e.sent,n=(0,l.Z)(t,2),r=n[0],n[1]?E(!0):r&&(w(r.rows),A(r.count)),x(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if((0,o.useEffect)((function(){D(void 0),ne()}),[C,U,O,B,J,K,q]),(0,o.useEffect)((function(){var e;return(0,Ue.rn)(y)&&(e=setTimeout((0,s.Z)(i().mark((function t(){var n,r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,te();case 2:n=t.sent,r=(0,l.Z)(n,2),a=r[0],r[1]?clearInterval(e):a&&(w(a.rows),A(a.count));case 7:case"end":return t.stop()}}),t)}))),5e3)),function(){e&&clearInterval(e)}}),[y]),b)return null;var re=function(e){return["applied"].includes((null===e||void 0===e?void 0:e.status)||"")},ae=function(e){return!["pr","planned","submitted"].includes((null===e||void 0===e?void 0:e.status)||"")},ie=function(){var e=(0,s.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id&&re(t)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,h.push("/edit-request?id=".concat(t.id));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le=function(){var e=(0,s.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id&&ae(t)){e.next=2;break}return e.abrupt("return");case 2:D(t.id),window.location.hash="delete-modal";case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=(0,s.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ae){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,Re.Jl)(F);case 4:return e.next=6,te();case 6:window.location.hash="#";case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,r.jsxs)(v.Z,{rules:lt,children:[(0,r.jsx)(p.ZP,{cols:10,children:(0,r.jsxs)(p.ZP.Row,{collapse:"1200",gutter:[15,2],children:[(0,r.jsx)(p.ZP.Col,{span:6,children:(0,r.jsx)(Pe,{filters:[{value:q,multiselect:!0,onChange:M,options:at,label:"Environments"},{value:K,multiselect:!0,onChange:z,options:nt,label:"IDPs"},{value:B,multiselect:!0,onChange:H,options:Te,label:"Workflow Status"},{value:J,multiselect:!0,onChange:X,options:rt,label:"Archive Status"}],headers:[{name:"Request ID"},{name:"Project Name"},{name:"Request Status"},{name:"File Status"},{name:"Actions",style:{textAlign:"center",minWidth:"140px"}}],pageLimits:it,searchKey:C,searchPlaceholder:"Project ID or Name",limit:U,page:O,rowCount:R,onSearch:function(e){k(e),_(1)},onEnter:function(e){k(e),_(1)},onLimit:function(e){_(1),Z(e)},onPrev:_,onNext:_,loading:m,children:y.length>0?y.map((function(e){return(0,r.jsxs)("tr",{className:F===e.id?"active":"",onClick:function(){D(e.id),$("details")},children:[(0,r.jsx)("td",{children:(0,u.padStart)(String(e.id),8,"0")}),(0,r.jsx)("td",{children:e.projectName}),(0,r.jsx)("td",{children:(0,u.startCase)(e.status)}),(0,r.jsx)("td",{children:e.archived?"Deleted":"Active"}),(0,r.jsx)("td",{children:(0,r.jsxs)(Ae.c4,{children:[(0,r.jsx)(Ae.Kk,{icon:d.Mdf,role:"button","aria-label":"events",onClick:function(t){t.stopPropagation(),D(e.id),$("events")},title:"Events"}),(0,r.jsx)(Ae.MO,{}),(0,r.jsx)(Ae.Kk,{disabled:!re(e),icon:d.Xcf,role:"button","aria-label":"edit",onClick:function(){return ie(e)},title:"Edit"}),(0,r.jsx)(Ae.MO,{}),(0,r.jsx)(Ae.Kk,{icon:d.$aW,role:"button","aria-label":"delete",onClick:function(){return le(e)},disabled:!ae(e),activeColor:he.Uo,title:"Delete"})]})})]},e.id)})):(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:10,children:"No clients found."})})})}),(0,r.jsx)(p.ZP.Col,{span:4,children:ee&&(0,r.jsx)(tt,{currentUser:a,selectedRequest:ee,defaultTabKey:"details",setActiveKey:$,activeKey:G,setRows:ne})})]})}),(0,r.jsx)(Ne.Z,{id:"delete-modal",content:"You are about to delete this integration request. This action cannot be undone.",onConfirm:se,confirmText:"Delete",title:"Confirm Deletion"})]})}},83636:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin-dashboard",function(){return n(29132)}])},31261:function(){}},function(e){e.O(0,[1,615,300,161,774,888,179],(function(){return t=83636,e(e.s=t);var t}));var t=e.O();_N_E=t}]);