(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[897],{92665:function(e,t,r){"use strict";var n=r(85893),a=r(27261),i=r(6434),l=r(29163);function o(){var e=(0,a.Z)(["\n  list-style: none;\n  margin: 0;\n  & li {\n    margin: 0;\n  }\n"]);return o=function(){return e},e}function s(){var e=(0,a.Z)(["\n  font-weight: 600;\n"]);return s=function(){return e},e}function c(){var e=(0,a.Z)(["\n  font-size: unset;\n  & tr {\n    display: flex;\n    margin-bottom: 5px;\n    & > td {\n      border: none;\n      padding: 0 5px 0 0;\n    }\n  }\n"]);return c=function(){return e},e}var u=l.default.table(c()),d=l.default.span(s()),p=l.default.ul(o()),v=function(e){var t=e.list,r=e.title,a=e.inline,i=void 0!==a&&a;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:r}),(1===(null===t||void 0===t?void 0:t.length)||i)&&(0,n.jsx)(d,{children:null===t||void 0===t?void 0:t.map((function(e,r){return(0,n.jsxs)("span",{children:[e,r!==t.length-1&&", "," "]},e)}))})]}),!i&&((null===t||void 0===t?void 0:t.length)||0)>1&&(0,n.jsx)("tr",{children:(0,n.jsx)("td",{children:(0,n.jsx)(d,{children:(0,n.jsx)(p,{children:null===t||void 0===t?void 0:t.map((function(e){return(0,n.jsx)("li",{children:e},e)}))})})})})]})},f=function(e){return!!e&&(1!==e.length||""!==e[0])};t.Z=function(e){var t,r=e.request;return r?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(u,{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Are you accountable for this project?"}),(0,n.jsx)("td",{children:(0,n.jsx)(d,{children:(t=null===r||void 0===r?void 0:r.projectLead,void 0===t?"":t?"Yes":"No")})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Client Type:"}),(0,n.jsx)("td",{children:(0,n.jsx)(d,{children:null!==r&&void 0!==r&&r.publicAccess?"Public":"Confidential"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Project Name:"}),(0,n.jsx)("td",{children:(0,n.jsx)(d,{children:null===r||void 0===r?void 0:r.projectName})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Default email address:"}),(0,n.jsx)("td",{children:(0,n.jsx)(d,{children:null===r||void 0===r?void 0:r.preferredEmail})})]}),(0,n.jsx)(v,{list:null===r||void 0===r?void 0:r.additionalEmails,title:"Additional Emails:"}),(0,n.jsx)(v,{list:(0,i.LF)(null===r||void 0===r?void 0:r.realm),title:"Identity Providers Required:",inline:!0}),f(null===r||void 0===r?void 0:r.devValidRedirectUris)&&(0,n.jsx)(v,{list:null===r||void 0===r?void 0:r.devValidRedirectUris,title:"Dev Redirect URIs:"}),f(null===r||void 0===r?void 0:r.testValidRedirectUris)&&(0,n.jsx)(v,{list:null===r||void 0===r?void 0:r.testValidRedirectUris,title:"Test Redirect URIs:"}),f(null===r||void 0===r?void 0:r.prodValidRedirectUris)&&(0,n.jsx)(v,{list:null===r||void 0===r?void 0:r.prodValidRedirectUris,title:"Prod Redirect URIs:"})]})})}):null}},94336:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return at}});var n=r(85893),a=r(809),i=r.n(a),l=r(39227),o=r(92447),s=r(67294),c=r(11163),u=r(96486),d=r(51436),p=r(64735),v=r(40602),f=r(27261),h=r(29163),m=r(11915),x=r(4826),g=r(35611),b=r(22122),y=r(19756),j=r(94184),E=r.n(j),w=r(76792),S=r(84873),C=["active","disabled","className","style","activeLabel","children"],k=["children"],R=s.forwardRef((function(e,t){var r=e.active,n=e.disabled,a=e.className,i=e.style,l=e.activeLabel,o=e.children,c=(0,y.default)(e,C),u=r||n?"span":S.Z;return s.createElement("li",{ref:t,style:i,className:E()(a,"page-item",{active:r,disabled:n})},s.createElement(u,(0,b.default)({className:"page-link",disabled:n},c),o,r&&l&&s.createElement("span",{className:"sr-only"},l)))}));R.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},R.displayName="PageItem";var N=R;function P(e,t,r){function n(e){var n=e.children,a=(0,y.default)(e,k);return s.createElement(R,a,s.createElement("span",{"aria-hidden":"true"},n||t),s.createElement("span",{className:"sr-only"},r))}return void 0===r&&(r=e),n.displayName=e,n}var A=P("First","\xab"),O=P("Prev","\u2039","Previous"),_=P("Ellipsis","\u2026","More"),Z=P("Next","\u203a"),I=P("Last","\xbb"),T=["bsPrefix","className","children","size"],U=s.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.children,i=e.size,l=(0,y.default)(e,T),o=(0,w.vE)(r,"pagination");return s.createElement("ul",(0,b.default)({ref:t},l,{className:E()(n,o,i&&o+"-"+i)}),a)}));U.First=A,U.Prev=O,U.Ellipsis=_,U.Item=N,U.Next=Z,U.Last=I;var L=U,D=r(23451);function F(){var e=(0,f.Z)(["\n  min-height: 44px;\n  border-bottom: 1px solid #707070;\n  margin-bottom: 5px;\n  padding-bottom: 5px;\n  overflow: wrap;\n"]);return F=function(){return e},e}var M,q=h.default.div(F());function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var K={allItemsAreSelected:"All items are selected.",clearSearch:"Clear Search",clearSelected:"Clear Selected",noOptions:"No options",search:"Search",selectAll:"Select All",selectAllFiltered:"Select All (Filtered)",selectSomeItems:"Select...",create:"Create"},B={value:[],hasSelectAll:!0,className:"multi-select",debounceDuration:200,options:[]},z=s.createContext({}),H=e=>{var{props:t,children:r}=e,[n,a]=(0,s.useState)(t.options);return(0,s.useMemo)((()=>{"undefined"===typeof document||M||((M=document.createElement("style")).innerHTML='.rmsc{--rmsc-main:#4285f4;--rmsc-hover:#f1f3f5;--rmsc-selected:#e2e6ea;--rmsc-border:#ccc;--rmsc-gray:#aaa;--rmsc-bg:#fff;--rmsc-p:10px;--rmsc-radius:4px;--rmsc-h:38px;}.rmsc *{box-sizing:border-box;transition:all 0.2s ease;}.rmsc .gray{color:var(--rmsc-gray);}.rmsc .dropdown-content{position:absolute;z-index:1;top:100%;width:100%;padding-top:8px;}.rmsc .dropdown-content .panel-content{overflow:hidden;border-radius:var(--rmsc-radius);background:var(--rmsc-bg);box-shadow:0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 11px rgba(0, 0, 0, 0.1);}.rmsc .dropdown-container{position:relative;outline:0;background-color:var(--rmsc-bg);border:1px solid var(--rmsc-border);border-radius:var(--rmsc-radius);}.rmsc .dropdown-container[aria-disabled="true"]:focus-within{box-shadow:var(--rmsc-gray) 0 0 0 1px;border-color:var(--rmsc-gray);}.rmsc .dropdown-container:focus-within{box-shadow:var(--rmsc-main) 0 0 0 1px;border-color:var(--rmsc-main);}.rmsc .dropdown-heading{position:relative;padding:0 var(--rmsc-p);display:flex;align-items:center;width:100%;height:var(--rmsc-h);cursor:default;outline:0;}.rmsc .dropdown-heading .dropdown-heading-value{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1;}.rmsc .clear-selected-button{cursor:pointer;background:none;border:0;padding:0;display:flex;}.rmsc .options{max-height:260px;overflow-y:auto;margin:0;padding-left:0;}.rmsc .options li{list-style:none;margin:0;}.rmsc .select-item{box-sizing:border-box;cursor:pointer;display:block;padding:var(--rmsc-p);outline:0;}.rmsc .select-item:hover,.rmsc .select-item:focus{background:var(--rmsc-hover);}.rmsc .select-item.selected{background:var(--rmsc-selected);}.rmsc .no-options{padding:var(--rmsc-p);text-align:center;color:var(--rmsc-gray);}.rmsc .search{width:100%;position:relative;border-bottom:1px solid var(--rmsc-border);}.rmsc .search input{background:none;height:var(--rmsc-h);padding:0 var(--rmsc-p);width:100%;outline:0;border:0;}.rmsc .search-clear-button{cursor:pointer;position:absolute;top:0;right:0;bottom:0;background:none;border:0;padding:0 calc(var(--rmsc-p) / 2);}.rmsc .search-clear-button [hidden]{display:none;}.rmsc .item-renderer{display:flex;align-items:baseline;}.rmsc .item-renderer input{margin:0;margin-right:5px;}.rmsc .item-renderer.disabled{opacity:0.5;}.rmsc .spinner{animation:rotate 2s linear infinite;}.rmsc .spinner .path{stroke:var(--rmsc-border);stroke-width:4px;stroke-linecap:round;animation:dash 1.5s ease-in-out infinite;}@keyframes rotate{100%{transform:rotate(360deg);}}@keyframes dash{0%{stroke-dasharray:1, 150;stroke-dashoffset:0;}50%{stroke-dasharray:90, 150;stroke-dashoffset:-35;}100%{stroke-dasharray:90, 150;stroke-dashoffset:-124;}}',document.head.appendChild(M))}),[]),(0,s.useEffect)((()=>{a(t.options)}),[t.options]),s.createElement(z.Provider,{value:W({t:e=>{var r;return(null==(r=t.overrideStrings)?void 0:r[e])||K[e]}},B,t,{options:n,setOptions:a})},r)},Q=()=>s.useContext(z);var V={when:!0,eventTypes:["keydown"]};function X(e,t,r){var n=(0,s.useMemo)((()=>Array.isArray(e)?e:[e]),[e]),a=Object.assign({},V,r),{when:i,eventTypes:l}=a,o=(0,s.useRef)(t),{target:c}=a;(0,s.useEffect)((()=>{o.current=t}));var u=(0,s.useCallback)((e=>{n.some((t=>e.key===t||e.code===t))&&o.current(e)}),[n]);(0,s.useEffect)((()=>{if(i&&"undefined"!==typeof window){var e=c?c.current:window;return l.forEach((t=>{e&&e.addEventListener(t,u)})),()=>{l.forEach((t=>{e&&e.removeEventListener(t,u)}))}}}),[i,l,n,c,t])}var Y={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",ENTER:"Enter",ESCAPE:"Escape",SPACE:"Space"};function J(e,t){var r=e.length,n=t.length,a=[];if(!r||!n)return 0;if(r<n&&([e,t]=[t,e]),-1!==e.indexOf(t))return n+1/r;for(var i=0;i<=r;++i)a[i]=[0];for(var l=0;l<=n;++l)a[0][l]=0;for(var o=1;o<=r;++o)for(var s=1;s<=n;++s)a[o][s]=e[o-1]===t[s-1]?1+a[o-1][s-1]:Math.max(a[o][s-1],a[o-1][s]);return a[r][n]}function G(e,t){if(!e)return"";if(e=e.toUpperCase().replace(/((?=[^\u00E0-\u00FC])\W)|_/g,""),!t)return e;var r=t;return Object.keys(r).reduce(((e,t)=>{var n=new RegExp(t,"g");return e.replace(n,r[t])}),e)}var $,ee=()=>s.createElement("svg",{width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"dropdown-search-clear-icon gray"},s.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),s.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),te=e=>{var{checked:t,option:r,onClick:n,disabled:a}=e;return s.createElement("div",{className:"item-renderer "+(a&&"disabled")},s.createElement("input",{type:"checkbox",onChange:n,checked:t,tabIndex:-1,disabled:a}),s.createElement("span",null,r.label))},re=e=>{var{itemRenderer:t=te,option:r,checked:n,tabIndex:a,disabled:i,onSelectionChanged:l,onClick:o}=e,c=(0,s.useRef)(),u=()=>{i||l(!n)};return X([Y.ENTER,Y.SPACE],(e=>{u(),e.preventDefault()}),{target:c}),s.createElement("label",{className:"select-item "+(n&&"selected"),role:"option","aria-selected":n,tabIndex:a,ref:c},s.createElement(t,{option:r,checked:n,onClick:e=>{u(),o(e)},disabled:i}))},ne=e=>{var{options:t,onClick:r,skipIndex:n}=e,{disabled:a,value:i,onChange:l,ItemRenderer:o}=Q();return s.createElement(s.Fragment,null,t.map(((e,t)=>{var c=t+n;return s.createElement("li",{key:(null==e?void 0:e.key)||t},s.createElement(re,{tabIndex:c,option:e,onSelectionChanged:t=>{return r=e,n=t,void(a||l(n?[...i,r]:i.filter((e=>e.value!==r.value))));var r,n},checked:!!i.find((t=>t.value===e.value)),onClick:e=>r(e,c),itemRenderer:o,disabled:e.disabled||a}))})))};function ae(e,t,r,n,a,i,l){try{var o=e[i](l),s=o.value}catch(c){return void r(c)}o.done?t(s):Promise.resolve(s).then(n,a)}function ie(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function l(e){ae(i,n,a,l,o,"next",e)}function o(e){ae(i,n,a,l,o,"throw",e)}l(void 0)}))}}!function(e){e[e.SEARCH=0]="SEARCH",e[e.NONE=-1]="NONE"}($||($={}));var le=()=>{var{t:e,onChange:t,options:r,setOptions:n,value:a,filterOptions:i,ItemRenderer:l,disabled:o,disableSearch:c,hasSelectAll:u,ClearIcon:d,debounceDuration:p,isCreatable:v,onCreateOption:f}=Q(),h=(0,s.useRef)(),m=(0,s.useRef)(),[x,g]=(0,s.useState)(""),[b,y]=(0,s.useState)(r),[j,E]=(0,s.useState)(""),[w,S]=(0,s.useState)(0),C=(0,s.useCallback)(((e,t)=>{var r;return function(){for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];clearTimeout(r),r=setTimeout((()=>{e.apply(null,a)}),t)}})((e=>E(e)),p),[]),k=(0,s.useMemo)((()=>{var e=0;return c||(e+=1),u&&(e+=1),e}),[c,u]),R={label:e(x?"selectAllFiltered":"selectAll"),value:""},N=()=>{var e;E(""),g(""),null==m||null==(e=m.current)||e.focus()},P=e=>S(e);X([Y.ARROW_DOWN,Y.ARROW_UP],(e=>{switch(e.code){case Y.ARROW_UP:_(-1);break;case Y.ARROW_DOWN:_(1);break;default:return}e.stopPropagation(),e.preventDefault()}),{target:h});var A=function(){var e=ie((function*(){var e={label:x,value:x,__isNew__:!0};f&&(e=yield f(x)),n([e,...r]),N(),t([...a,e])}));return function(){return e.apply(this,arguments)}}(),O=function(){var e=ie((function*(){return i?yield i(r,j):function(e,t,r){if(!t)return e;var n=G(t,r);return e.filter((e=>{var{label:t,value:r}=e;return null!=t&&null!=r})).map((e=>({option:e,score:J(G(e.label,r),n)}))).filter((e=>e.score>=n.length-2)).sort(((e,t)=>t.score-e.score)).map((e=>e.option))}(r,j)}));return function(){return e.apply(this,arguments)}}(),_=e=>{var t=w+e;t=Math.max(0,t),t=Math.min(t,r.length+Math.max(k-1,0)),S(t)};(0,s.useEffect)((()=>{var e,t;null==h||null==(e=h.current)||null==(t=e.querySelector("[tabIndex='"+w+"']"))||t.focus()}),[w]);var[Z,I]=(0,s.useMemo)((()=>{var e=b.filter((e=>!e.disabled));return[e.every((e=>-1!==a.findIndex((t=>t.value===e.value)))),0!==e.length]}),[b,a]);return(0,s.useEffect)((()=>{O().then(y)}),[j,r]),s.createElement("div",{className:"select-panel",role:"listbox",ref:h},!c&&s.createElement("div",{className:"search"},s.createElement("input",{placeholder:e("search"),type:"text","aria-describedby":e("search"),onChange:e=>{C(e.target.value),g(e.target.value),S($.SEARCH)},onFocus:()=>{S($.SEARCH)},value:x,ref:m,tabIndex:0}),s.createElement("button",{type:"button",className:"search-clear-button",hidden:!x,onClick:N,"aria-label":e("clearSearch")},d||s.createElement(ee,null))),s.createElement("ul",{className:"options"},u&&I&&s.createElement(re,{tabIndex:1===k?0:1,checked:Z,option:R,onSelectionChanged:e=>{var n=(e=>{var t=b.filter((e=>!e.disabled)).map((e=>e.value));if(e){var n=[...a.map((e=>e.value)),...t];return(i?b:r).filter((e=>n.includes(e.value)))}return a.filter((e=>!t.includes(e.value)))})(e);t(n)},onClick:()=>P(1),itemRenderer:l,disabled:o}),b.length?s.createElement(ne,{skipIndex:k,options:b,onClick:(e,t)=>P(t)}):v?s.createElement("li",{onClick:A,className:"select-item creatable"},e("create")+' "'+x+'"'):s.createElement("li",{className:"no-options"},e("noOptions"))))},oe=e=>{var{expanded:t}=e;return s.createElement("svg",{width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"dropdown-heading-dropdown-arrow gray"},s.createElement("path",{d:t?"M18 15 12 9 6 15":"M6 9L12 15 18 9"}))},se=()=>{var{t:e,value:t,options:r,valueRenderer:n}=Q(),a=0===t.length,i=t.length===r.length,l=n&&n(t,r);return a?s.createElement("span",{className:"gray"},l||e("selectSomeItems")):s.createElement("span",null,l||(i?e("allItemsAreSelected"):t.map((e=>e.label)).join(", ")))},ce=e=>{var{size:t=24}=e;return s.createElement("span",{style:{width:t,marginRight:"0.2rem"}},s.createElement("svg",{width:t,height:t,className:"spinner",viewBox:"0 0 50 50",style:{display:"inline",verticalAlign:"middle"}},s.createElement("circle",{cx:"25",cy:"25",r:"20",fill:"none",className:"path"})))},ue=()=>{var{t:e,onMenuToggle:t,ArrowRenderer:r,shouldToggleOnHover:n,isLoading:a,disabled:i,onChange:l,labelledBy:o,value:c,isOpen:u,defaultIsOpen:d,ClearSelectedIcon:p}=Q(),[v,f]=(0,s.useState)(!0),[h,m]=(0,s.useState)(d),[x,g]=(0,s.useState)(!1),b=r||oe,y=(0,s.useRef)();!function(e,t){var r=(0,s.useRef)(!1);(0,s.useEffect)((()=>{r.current?e():r.current=!0}),t)}((()=>{t&&t(h)}),[h]),(0,s.useEffect)((()=>{void 0===d&&"boolean"===typeof u&&(f(!1),m(u))}),[u]);X([Y.ENTER,Y.ARROW_DOWN,Y.SPACE,Y.ESCAPE],(e=>{if(!["text","button"].includes(e.target.type)||![Y.SPACE,Y.ENTER].includes(e.code)){var t;if(v)if(e.code===Y.ESCAPE)m(!1),null==y||null==(t=y.current)||t.focus();else m(!0);e.preventDefault()}}),{target:y});var j=e=>{v&&n&&m(e)};return s.createElement("div",{tabIndex:0,className:"dropdown-container","aria-labelledby":o,"aria-expanded":h,"aria-readonly":!0,"aria-disabled":i,ref:y,onFocus:()=>!x&&g(!0),onBlur:e=>{!e.currentTarget.contains(e.relatedTarget)&&v&&(g(!1),m(!1))},onMouseEnter:()=>j(!0),onMouseLeave:()=>j(!1)},s.createElement("div",{className:"dropdown-heading",onClick:()=>{v&&m(!a&&!i&&!h)}},s.createElement("div",{className:"dropdown-heading-value"},s.createElement(se,null)),a&&s.createElement(ce,null),c.length>0&&s.createElement("button",{type:"button",className:"clear-selected-button",onClick:e=>{e.stopPropagation(),l([]),v&&m(!1)},disabled:i,"aria-label":e("clearSelected")},p||s.createElement(ee,null)),s.createElement(b,{expanded:h})),h&&s.createElement("div",{className:"dropdown-content"},s.createElement("div",{className:"panel-content"},s.createElement(le,null))))},de=e=>s.createElement(H,{props:e},s.createElement("div",{className:"rmsc "+(e.className||"multi-select")},s.createElement(ue,null))),pe=r(65837),ve=r(76457),fe=(r(31261),r(30454));function he(){var e=(0,f.Z)(["\n  display: grid;\n  grid-template-columns:\n    ","\n    &> * {\n    margin-right: 10px;\n  }\n"]);return he=function(){return e},e}function me(){var e=(0,f.Z)(["\n  padding-left: 5px;\n  line-height: 40px;\n"]);return me=function(){return e},e}function xe(){var e=(0,f.Z)(["\n  cursor: pointer;\n  font-weight: bold;\n  & * {\n    font-weight: normal;\n  }\n"]);return xe=function(){return e},e}function ge(){var e=(0,f.Z)(["\n  margin: 0 !important;\n  & li {\n    margin: 0 !important;\n  }\n"]);return ge=function(){return e},e}function be(){var e=(0,f.Z)(["\n  .dropdown-container {\n    border: 1.8px solid black !important;\n  }\n"]);return be=function(){return e},e}var ye=(0,h.default)(de)(be()),je=(0,h.default)(L)(ge()),Ee=h.default.label(xe()),we=h.default.li(me()),Se=h.default.div(he(),(function(e){return"repeat(".concat(e.itemsLength,", 1fr);")})),Ce=function(e){for(var t=e.rowCount,r=e.limit,a=e.page,i=e.onPage,l=e.onPrev,o=e.onNext,s=parseInt(String((t-1)/r+1)),c=[(0,n.jsx)(L.Item,{disabled:1===a,onClick:function(){return l()},children:"Previous"},"prev")],u=function(e){c.push((0,n.jsx)(L.Item,{active:e===a,onClick:function(){return i(e)},children:e},e)),s===e&&c.push((0,n.jsx)(L.Item,{disabled:a===e,onClick:function(){return o()},children:"Next"},"next"))},d=1;d<=s;d++)u(d);return(0,n.jsx)(n.Fragment,{children:c})},ke=function(e){var t=e.rowCount,r=e.limit,a=e.page,i=e.onPrev,l=e.onNext,o=parseInt(String((t-1)/r+1)),s=parseInt(String((a-1)*r+1)),c=s+r-1;return c>t&&(c=t),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(L.Item,{disabled:1===a,onClick:function(){return i(a-1)},children:"Previous"},"prev"),(0,n.jsx)(L.Item,{disabled:a===o,onClick:function(){return l(a+1)},children:"Next"},"next"),(0,n.jsx)(we,{children:"".concat(s,"-").concat(c," of ").concat(t)})]})};var Re=function(e){var t,r=e.headers,a=e.children,i=e.onSearch,l=void 0===i?u.noop:i,o=e.onEnter,c=void 0===o?u.noop:o,d=e.filters,v=void 0===d?[]:d,f=e.onLimit,h=void 0===f?u.noop:f,b=e.onPage,y=e.onPrev,j=void 0===y?u.noop:y,E=e.onNext,w=void 0===E?u.noop:E,S=e.pageLimits,C=e.searchKey,k=void 0===C?"":C,R=e.searchPlaceholder,N=void 0===R?"Search...":R,P=e.page,A=void 0===P?1:P,O=e.limit,_=void 0===O?10:O,Z=e.rowCount,I=void 0===Z?10:Z,T=e.loading,U=(0,s.useState)(k),L=U[0],F=U[1],M=I>_?_:I,W=(0,n.jsx)("td",{colSpan:100,children:(0,n.jsx)("div",{style:{height:"".concat(M*(fe.eX+fe.gM)-fe.gM,"px"),paddingTop:"10px"},children:(0,n.jsx)(pe.TextBlock,{rows:2*M,color:"#CCC"})})});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(q,{children:(0,n.jsx)(p.ZP,{cols:12,children:(0,n.jsxs)(p.ZP.Row,{collapse:"1160",gutter:[],align:"center",children:[(0,n.jsxs)(p.ZP.Col,{span:4,children:[(0,n.jsx)(m.ZP,{type:"text",size:"small",placeholder:N,style:{display:"inline-block"},value:L,onChange:function(e){F(e.target.value)},onKeyUp:function(e){"Enter"===e.key&&c(L)}}),(0,n.jsx)(x.ZP,{type:"button",size:"small",onClick:function(){l(L)},children:"Search"})]}),(0,n.jsx)(p.ZP.Col,{span:8,style:{textAlign:"right"},children:(0,n.jsx)(Se,{itemsLength:v.length,children:v.map((function(e){return(0,n.jsx)(n.Fragment,{children:e.multiselect?(0,n.jsxs)(Ee,{children:[e.label,(0,n.jsx)(ye,{className:"multiselect",options:e.options,value:Array.isArray(e.value)?e.value:[],onChange:e.onChange,labelledBy:"Select",hasSelectAll:!1})]}):(0,n.jsxs)(Ee,{children:[e.label,(0,n.jsx)(g.ZP,{onChange:e.onChange,value:"string"===typeof e.value?e.value:"",children:e.options.map((function(e){return(0,n.jsx)("option",{value:e.value,children:e.label},Array.isArray(e.value)?JSON.stringify(e.value):e.value)}))})]})})}))})})]})})}),(0,n.jsxs)(D.Z,{children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:r.map((function(e,t){return(0,n.jsx)("th",{style:e.style||{},children:e.name},t)}))})}),(0,n.jsx)("tbody",{children:(0,n.jsx)(ve.Z,{ready:!T||!1,showLoadingAnimation:!0,customPlaceholder:W,children:a})})]}),S&&(0,n.jsx)(p.ZP,{cols:12,children:(0,n.jsxs)(p.ZP.Row,{collapse:"992",gutter:[],align:"center",children:[(0,n.jsx)(p.ZP.Col,{span:8,children:(0,n.jsx)(je,{children:b?(0,n.jsx)(Ce,{rowCount:I,limit:_,page:A,onPage:b}):(0,n.jsx)(ke,{rowCount:I,limit:_,page:A,onPrev:j,onNext:w})})}),(0,n.jsx)(p.ZP.Col,{span:4,style:{textAlign:"right"},children:(0,n.jsx)(g.ZP,{style:{display:"inline-block",width:"160px"},value:String(_),onChange:function(e){h(Number(e.target.value))},children:(t=S,(0,n.jsx)(n.Fragment,{children:t.map((function(e){return(0,n.jsx)("option",{value:e.value,children:e.text},e.value)}))}))})})]})})]})},Ne=r(6645),Pe=r(61408),Ae=r(98806),Oe=r(6434),_e=r(26265),Ze=r(56841),Ie=r(20374),Te=r(92665);function Ue(){var e=(0,f.Z)(["\n  max-height: calc(100vh - 250px);\n  overflow: auto;\n"]);return Ue=function(){return e},e}var Le=h.default.div(Ue());function De(e){var t=e.request;return t?(0,n.jsxs)(Le,{children:[(0,n.jsx)("br",{}),(0,n.jsx)(Te.Z,{request:t,hasBceid:!1})]}):null}var Fe=r(31607),Me=r(87522),qe=r(25367);function We(){var e=(0,f.Z)(["\n  text-align: center;\n"]);return We=function(){return e},e}var Ke=h.default.div(We()),Be=[{value:"all",text:"All Events"},{value:"request-pr-success",text:"REQUEST_PR_SUCCESS"},{value:"request-pr-failure",text:"REQUEST_PR_FAILURE"},{value:"request-plan-success",text:"REQUEST_PLAN_SUCCESS"},{value:"request-plan-failure",text:"REQUEST_PLAN_FAILURE"},{value:"request-apply-success",text:"REQUEST_APPLY_SUCCESS"},{value:"request-apply-failure",text:"REQUEST_APPLY_FAILURE"},{value:"request-create-success",text:"REQUEST_CREATE_SUCCESS"},{value:"request-create-failure",text:"REQUEST_CREATE_FAILURE"},{value:"request-update-success",text:"REQUEST_UPDATE_SUCCESS"},{value:"request-update-failure",text:"REQUEST_UPDATE_FAILURE"},{value:"request-delete-success",text:"REQUEST_DELETE_SUCCESS"},{value:"request-delete-failure",text:"REQUEST_DELETE_FAILURE"},{value:"email-submission-failure",text:"EMAIL_SUBMISSION_FAILURE"}];function ze(e){var t=e.requestId,r=(0,s.useState)("all"),a=r[0],c=r[1],u=(0,s.useState)([]),d=u[0],p=u[1],v=(0,s.useState)(!1),f=v[0],h=v[1],m=(0,s.useState)(!1),x=m[0],b=m[1],y=function(){var e=(0,o.Z)(i().mark((function e(){var r,n,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return h(!0),e.next=5,(0,Me.v)({requestId:t,eventCode:a});case 5:r=e.sent,n=(0,l.Z)(r,2),o=n[0],n[1]?b(!0):o&&p(o.rows),h(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){y()}),[t,a]);var j;return x?null:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(q,{children:[(0,n.jsx)("br",{}),(0,n.jsx)(g.ZP,{style:{display:"inline-block",width:"250px"},value:a,onChange:function(e){c(e.target.value)},children:(j=Be,(0,n.jsx)(n.Fragment,{children:j.map((function(e){return(0,n.jsx)("option",{value:e.value,children:e.text},e.value)}))}))})]}),f?(0,n.jsx)(Ke,{children:(0,n.jsx)(Fe.Z,{type:"Grid",color:"#000",height:45,width:45,visible:f})}):(0,n.jsx)(qe.Z,{events:d})]})}var He=r(90032);function Qe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ve(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Qe(Object(r),!0).forEach((function(t){(0,_e.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Qe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Xe(){var e=(0,f.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n"]);return Xe=function(){return e},e}var Ye=h.default.div(Xe());var Je=function(e){var t=e.selectedRequest,r=e.defaultTabKey,a=e.setActiveKey,s=e.setRows,c=e.activeKey,u=void 0===c?r:c;if(!t)return null;var p,v=t.realm,f=t.prod,h=t.status,m=t.bceidApproved,g=(0,Oe.Jx)(v),b=g&&f,y=b&&"applied"!==h&&m,j="bceid-approval-modal";p=b&&"applied"===h&&!m?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:"To begin the BCeID integration in production, Click Below."}),(0,n.jsx)(x.ZP,{onClick:function(){return window.location.hash=j},children:"Approve Production"})]}):y?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(He.Z,{selectedRequest:t,title:"The terraform script will take approximately 20 minutes to complete."})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("p",{children:["This request is ",m?"already approved.":"not ready to approve production."]})});var E=function(){var e=(0,o.Z)(i().mark((function e(){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,Ne.WN)(Ve(Ve({},t),{},{bceidApproved:!0}),!0);case 2:r=e.sent,n=(0,l.Z)(r,2),n[1]||s();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(Ie.H,{activeKey:u,onSelect:function(e){return a(e)},children:[(0,n.jsx)(Ze.Z,{eventKey:"details",title:"Details",children:(0,n.jsx)(Ye,{children:(0,n.jsx)(De,{request:t})})}),g&&(0,n.jsx)(Ze.Z,{eventKey:"prod-configuration",title:"Prod Configuration",children:(0,n.jsxs)(Ye,{children:[(0,n.jsx)("br",{}),p]})}),(0,n.jsx)(Ze.Z,{eventKey:"events",title:"Events",children:(0,n.jsx)(Ye,{children:(0,n.jsx)(ze,{requestId:t.id})})})]}),(0,n.jsx)(Ae.Z,{id:j,content:"Are you sure you want to approve this integration for production?",onConfirm:E,icon:d.eHv,title:"Approve Production"})]})},Ge=[{value:"draft",label:"Draft"},{value:"submitted",label:"Submitted"},{value:"pr",label:"PR"},{value:"prFailed",label:"PR Failed"},{value:"planned",label:"Planned"},{value:"planFailed",label:"Plan Failed"},{value:"approved",label:"Approved"},{value:"applied",label:"Applied"},{value:"applyFailed",label:"Apply Failed"}],$e=[{value:["onestopauth"],label:"IDIR"},{value:["onestopauth-basic","onestopauth-business","onestopauth-both"],label:"BCeID"}],et=[{value:"active",label:"Active"},{value:"archived",label:"Deleted"}],tt=[{value:"dev",label:"Dev"},{value:"test",label:"Test"},{value:"prod",label:"Prod"}],rt=[{value:5,text:"5 per page"},{value:10,text:"10 per page"},{value:15,text:"15 per page"},{value:30,text:"30 per page"},{value:50,text:"50 per page"},{value:100,text:"100 per page"}],nt=[{maxWidth:900,marginTop:0,marginLeft:10,marginRight:10,marginUnit:"px",horizontalAlign:"none"},{width:480,marginTop:0,marginLeft:2.5,marginRight:2.5,marginUnit:"rem",horizontalAlign:"none"}];function at(e){e.currentUser;var t,r,a=(0,c.useRouter)(),f=(0,s.useState)(!1),h=f[0],m=f[1],x=(0,s.useState)(!1),g=x[0],b=x[1],y=(0,s.useState)([]),j=y[0],E=y[1],w=(0,s.useState)(String((null===(t=a.query)||void 0===t?void 0:t.id)||"")),S=w[0],C=w[1],k=(0,s.useState)(0),R=k[0],N=k[1],P=(0,s.useState)(5),A=P[0],O=P[1],_=(0,s.useState)(1),Z=_[0],I=_[1],T=(0,s.useState)(Number(null===(r=a.query)||void 0===r?void 0:r.id)||void 0),U=T[0],L=T[1],D=(0,s.useState)([]),F=D[0],M=D[1],q=(0,s.useState)([]),W=q[0],K=q[1],B=(0,s.useState)([]),z=B[0],H=B[1],Q=(0,s.useState)([]),V=Q[0],X=Q[1],Y=(0,s.useState)("details"),J=Y[0],G=Y[1],$=j.find((function(e){return e.id===U})),ee=function(){var e=(0,o.Z)(i().mark((function e(){var t,r,n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,Oe.UT)(W,F),r=(0,l.Z)(t,2),n=r[0],a=r[1],e.abrupt("return",(0,Ne.zD)({searchField:["id","projectName"],searchKey:S,order:[["updatedAt","desc"],["status","desc"]],limit:A,page:Z,status:z.map((function(e){return e.value})),archiveStatus:V.map((function(e){return e.value})),realms:n,environments:a}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=(0,o.Z)(i().mark((function e(){var t,r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,ee();case 3:t=e.sent,r=(0,l.Z)(t,2),n=r[0],r[1]?b(!0):n&&(E(n.rows),N(n.count)),m(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if((0,s.useEffect)((function(){L(void 0),te()}),[S,A,Z,z,V,W,F]),(0,s.useEffect)((function(){var e;return(0,Oe.rn)(j)&&(e=setTimeout((0,o.Z)(i().mark((function t(){var r,n,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ee();case 2:r=t.sent,n=(0,l.Z)(r,2),a=n[0],n[1]?clearInterval(e):a&&(E(a.rows),N(a.count));case 7:case"end":return t.stop()}}),t)}))),5e3)),function(){e&&clearInterval(e)}}),[j]),g)return null;var re=function(e){return["applied"].includes((null===e||void 0===e?void 0:e.status)||"")},ne=function(e){return!["pr","planned","submitted"].includes((null===e||void 0===e?void 0:e.status)||"")},ae=function(){var e=(0,o.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id&&re(t)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,a.push("/edit-request?id=".concat(t.id));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=(0,o.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id&&ne(t)){e.next=2;break}return e.abrupt("return");case 2:L(t.id),window.location.hash="delete-modal";case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le=function(){var e=(0,o.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ne){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,Ne.Jl)(U);case 4:return e.next=6,ee();case 6:window.location.hash="#";case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,n.jsxs)(v.Z,{rules:nt,children:[(0,n.jsx)(p.ZP,{cols:10,children:(0,n.jsxs)(p.ZP.Row,{collapse:"1200",gutter:[15,2],children:[(0,n.jsx)(p.ZP.Col,{span:6,children:(0,n.jsx)(Re,{filters:[{value:F,multiselect:!0,onChange:M,options:tt,label:"Environments"},{value:W,multiselect:!0,onChange:K,options:$e,label:"IDPs"},{value:z,multiselect:!0,onChange:H,options:Ge,label:"Workflow Status"},{value:V,multiselect:!0,onChange:X,options:et,label:"Archive Status"}],headers:[{name:"Request ID"},{name:"Project Name"},{name:"Request Status"},{name:"File Status"},{name:"Actions",style:{textAlign:"center",minWidth:"140px"}}],pageLimits:rt,searchKey:S,searchPlaceholder:"Project ID or Name",limit:A,page:Z,rowCount:R,onSearch:function(e){C(e),I(1)},onEnter:function(e){C(e),I(1)},onLimit:function(e){I(1),O(e)},onPrev:I,onNext:I,loading:h,children:j.length>0?j.map((function(e){return(0,n.jsxs)("tr",{className:U===e.id?"active":"",onClick:function(){L(e.id),G("details")},children:[(0,n.jsx)("td",{children:(0,u.padStart)(String(e.id),8,"0")}),(0,n.jsx)("td",{children:e.projectName}),(0,n.jsx)("td",{children:(0,u.startCase)(e.status)}),(0,n.jsx)("td",{children:e.archived?"Deleted":"Active"}),(0,n.jsx)("td",{children:(0,n.jsxs)(Pe.W2,{children:[(0,n.jsx)(Pe.Kk,{icon:d.Mdf,role:"button","aria-label":"events",onClick:function(t){t.stopPropagation(),L(e.id),G("events")},title:"Events"}),(0,n.jsx)(Pe.MO,{}),(0,n.jsx)(Pe.Kk,{disabled:!re(e),icon:d.Xcf,role:"button","aria-label":"edit",onClick:function(){return ae(e)},title:"Edit"}),(0,n.jsx)(Pe.MO,{}),(0,n.jsx)(Pe.Kk,{icon:d.$aW,role:"button","aria-label":"delete",onClick:function(){return ie(e)},disabled:!ne(e),activeColor:fe.Uo,title:"Delete"})]})})]},e.id)})):(0,n.jsx)("tr",{children:(0,n.jsx)("td",{colSpan:10,children:"No clients found."})})})}),(0,n.jsx)(p.ZP.Col,{span:4,children:$&&(0,n.jsx)(Je,{selectedRequest:$,defaultTabKey:"details",setActiveKey:G,activeKey:J,setRows:te})})]})}),(0,n.jsx)(Ae.Z,{id:"delete-modal",content:"You are about to delete this integration request. This action cannot be undone.",onConfirm:le,confirmText:"Delete",title:"Confirm Deletion"})]})}},83636:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin-dashboard",function(){return r(94336)}])},31261:function(){},41070:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};t.__esModule=!0;var i=r(67294),l=r(65837),o=r(64643);t.default=function(e){var t=e.delay,r=void 0===t?0:t,s=e.type,c=void 0===s?"text":s,u=e.color,d=void 0===u?"#CDCDCD":u,p=e.rows,v=void 0===p?3:p,f=e.ready,h=e.firstLaunchOnly,m=e.children,x=e.className,g=e.showLoadingAnimation,b=e.customPlaceholder,y=a(e,["delay","type","color","rows","ready","firstLaunchOnly","children","className","showLoadingAnimation","customPlaceholder"]),j=i.useState(f),E=j[0],w=j[1],S=i.useRef(null);return i.useEffect((function(){h||!E||f?f&&(S.current&&window.clearTimeout(S.current),E||w(!0)):r&&r>0?S.current=window.setTimeout((function(){w(!1)}),r):w(!1)}),[h,E,f,r]),i.useEffect((function(){return function(){S.current&&window.clearTimeout(S.current)}}),[]),E?m:function(){var e=g?o.joinClassNames("show-loading-animation",x):x;if(b&&i.isValidElement(b)){var t=o.joinClassNames(b.props.className,e);return i.cloneElement(b,{className:t})}if(b)return b;var r=l[c];return i.createElement(r,n({},y,{color:d,rows:v,className:e}))}()}},76457:function(e,t,r){"use strict";var n=r(41070);t.Z=n.default},41985:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};t.__esModule=!0;var a=r(67294),i=r(72075),l=r(91817),o=r(64643),s={display:"flex"};t.default=function(e){var t=e.className,r=e.style,c=e.color,u=e.rows;return a.createElement("div",{className:o.joinClassNames("media-block",t),style:n(n({},s),r)},a.createElement(l.default,{color:c,style:{minHeight:55,width:55,minWidth:55,marginRight:10}}),a.createElement(i.default,{color:c,rows:u}))}},38588:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};t.__esModule=!0;var a=r(67294),i=r(64643);t.default=function(e){var t=e.className,r=e.style,l={backgroundColor:e.color,width:"100%",height:"100%",marginRight:10};return a.createElement("div",{className:i.joinClassNames("rect-shape",t),style:n(n({},l),r)})}},91817:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};t.__esModule=!0;var a=r(67294),i=r(64643);t.default=function(e){var t=e.className,r=e.style,l={backgroundColor:e.color,borderRadius:"500rem",width:"100%",height:"100%"};return a.createElement("div",{className:i.joinClassNames("round-shape",t),style:n(n({},l),r)})}},72075:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};t.__esModule=!0;var a=r(67294),i=r(72992),l=r(64643),o={width:"100%"},s=[97,100,94,90,98,95,98,40];t.default=function(e){var t=e.rows,r=e.lineSpacing,c=e.color,u=e.style,d=e.className,p=e.widths,v=void 0===p?s:p,f=function(e){return{maxHeight:100/(2*t-1)+"%",width:v[(e+v.length)%v.length]+"%"}};return a.createElement("div",{className:l.joinClassNames("text-block",d),style:n(n({},o),u)},Array.apply(null,Array(t)).map((function(e,t){return a.createElement(i.default,{color:c,style:f(t),lineSpacing:0!==t?r:0,key:t})})))}},72992:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};t.__esModule=!0;var a=r(67294),i=r(64643);t.default=function(e){var t=e.className,r=e.maxHeight,l=e.color,o=e.lineSpacing,s=void 0===o?"0.7em":o,c=e.style,u={maxHeight:r,width:"100%",height:"1em",backgroundColor:l,marginTop:s};return a.createElement("div",{className:i.joinClassNames("text-row",t),style:n(n({},u),c)})}},65837:function(e,t,r){"use strict";t.__esModule=!0,t.media=t.text=t.rect=t.round=t.textRow=t.MediaBlock=t.TextBlock=t.RectShape=t.RoundShape=t.TextRow=void 0;var n=r(72992);t.TextRow=n.default;var a=r(91817);t.RoundShape=a.default;var i=r(38588);t.RectShape=i.default;var l=r(72075);t.TextBlock=l.default;var o=r(41985);t.MediaBlock=o.default,t.textRow=n.default,t.round=a.default,t.rect=i.default,t.text=l.default,t.media=o.default},64643:function(e,t){"use strict";t.__esModule=!0,t.joinClassNames=void 0,t.joinClassNames=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.filter((function(e){return e})).join(" ")}}},function(e){e.O(0,[294,962,356,483,774,888,179],(function(){return t=83636,e(e.s=t);var t}));var t=e.O();_N_E=t}]);