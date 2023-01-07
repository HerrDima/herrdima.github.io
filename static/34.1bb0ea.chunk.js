"use strict";(self.webpackChunktypescript_project=self.webpackChunktypescript_project||[]).push([[34],{8819:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(8428),o=n(7294);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"};var a=n(2895),l=function(e,t){return o.createElement(a.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:i}))};l.displayName="CheckCircleFilled";const c=o.forwardRef(l)},8855:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(8428),o=n(7294);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"};var a=n(2895),l=function(e,t){return o.createElement(a.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:i}))};l.displayName="ExclamationCircleFilled";const c=o.forwardRef(l)},5460:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(4184),o=n.n(r),i=n(7294),a=n(3124),l=n(7968),c=n(5503),s=n(4747);const u=e=>{const{componentCls:t,sizePaddingEdgeHorizontal:n,colorSplit:r,lineWidth:o}=e;return{[t]:Object.assign(Object.assign({},(0,s.Wf)(e)),{borderBlockStart:`${o}px solid ${r}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${e.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${o}px solid ${r}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${e.dividerHorizontalGutterMargin}px 0`},"&-horizontal&-with-text":{display:"flex",alignItems:"center",margin:`${e.dividerHorizontalWithTextGutterMargin}px 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${r}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${o}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},"&-horizontal&-with-text-left":{"&::before":{width:"5%"},"&::after":{width:"95%"}},"&-horizontal&-with-text-right":{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${t}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:r,borderStyle:"dashed",borderWidth:`${o}px 0 0`},"&-horizontal&-with-text&-dashed":{"&::before, &::after":{borderStyle:"dashed none none"}},"&-vertical&-dashed":{borderInlineStart:o,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},"&-plain&-with-text":{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},"&-horizontal&-with-text-left&-no-default-orientation-margin-left":{"&::before":{width:0},"&::after":{width:"100%"},[`${t}-inner-text`]:{paddingInlineStart:n}},"&-horizontal&-with-text-right&-no-default-orientation-margin-right":{"&::before":{width:"100%"},"&::after":{width:0},[`${t}-inner-text`]:{paddingInlineEnd:n}}})}},f=(0,l.Z)("Divider",(e=>{const t=(0,c.TS)(e,{dividerVerticalGutterMargin:e.marginXS,dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG});return[u(t)]}),{sizePaddingEdgeHorizontal:0}),p=e=>{const{getPrefixCls:t,direction:n}=i.useContext(a.E_),{prefixCls:r,type:l="horizontal",orientation:c="center",orientationMargin:s,className:u,children:p,dashed:d,plain:m}=e,y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),g=t("divider",r),[b,v]=f(g),h=c.length>0?`-${c}`:c,x=!!p,$="left"===c&&null!=s,O="right"===c&&null!=s,C=o()(g,v,`${g}-${l}`,{[`${g}-with-text`]:x,[`${g}-with-text${h}`]:x,[`${g}-dashed`]:!!d,[`${g}-plain`]:!!m,[`${g}-rtl`]:"rtl"===n,[`${g}-no-default-orientation-margin-left`]:$,[`${g}-no-default-orientation-margin-right`]:O},u),w=Object.assign(Object.assign({},$&&{marginLeft:s}),O&&{marginRight:s});return b(i.createElement("div",Object.assign({className:C},y,{role:"separator"}),p&&"vertical"!==l&&i.createElement("span",{className:`${g}-inner-text`,style:w},p)))}},9134:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(0,n(7294).createContext)({})},1584:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(4184),o=n.n(r),i=n(7294),a=n(3124),l=n(9134),c=n(6999);const s=["xs","sm","md","lg","xl","xxl"],u=i.forwardRef(((e,t)=>{const{getPrefixCls:n,direction:r}=i.useContext(a.E_),{gutter:u,wrap:f,supportFlexGap:p}=i.useContext(l.Z),{prefixCls:d,span:m,order:y,offset:g,push:b,pull:v,className:h,children:x,flex:$,style:O}=e,C=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),w=n("col",d),[j,S]=(0,c.c)(w);let E={};s.forEach((t=>{let n={};const o=e[t];"number"==typeof o?n.span=o:"object"==typeof o&&(n=o||{}),delete C[t],E=Object.assign(Object.assign({},E),{[`${w}-${t}-${n.span}`]:void 0!==n.span,[`${w}-${t}-order-${n.order}`]:n.order||0===n.order,[`${w}-${t}-offset-${n.offset}`]:n.offset||0===n.offset,[`${w}-${t}-push-${n.push}`]:n.push||0===n.push,[`${w}-${t}-pull-${n.pull}`]:n.pull||0===n.pull,[`${w}-rtl`]:"rtl"===r})}));const k=o()(w,{[`${w}-${m}`]:void 0!==m,[`${w}-order-${y}`]:y,[`${w}-offset-${g}`]:g,[`${w}-push-${b}`]:b,[`${w}-pull-${v}`]:v},h,E,S),P={};if(u&&u[0]>0){const e=u[0]/2;P.paddingLeft=e,P.paddingRight=e}if(u&&u[1]>0&&!p){const e=u[1]/2;P.paddingTop=e,P.paddingBottom=e}return $&&(P.flex=function(e){return"number"==typeof e?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}($),!1!==f||P.minWidth||(P.minWidth=0)),j(i.createElement("div",Object.assign({},C,{style:Object.assign(Object.assign({},P),O),className:k,ref:t}),x))}))},2820:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(4184),o=n.n(r),i=n(7294),a=n(3124),l=n(3732),c=n(4443),s=n(9134),u=n(6999);function f(e,t){const[n,r]=i.useState("string"==typeof e?e:"");return i.useEffect((()=>{(()=>{if("string"==typeof e&&r(e),"object"==typeof e)for(let n=0;n<c.c.length;n++){const o=c.c[n];if(!t[o])continue;const i=e[o];if(void 0!==i)return void r(i)}})()}),[JSON.stringify(e),t]),n}const p=i.forwardRef(((e,t)=>{const{prefixCls:n,justify:r,align:p,className:d,style:m,children:y,gutter:g=0,wrap:b}=e,v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:h,direction:x}=i.useContext(a.E_),[$,O]=i.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[C,w]=i.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),j=f(p,C),S=f(r,C),E=(0,l.Z)(),k=i.useRef(g),P=(0,c.Z)();i.useEffect((()=>{const e=P.subscribe((e=>{w(e);const t=k.current||0;(!Array.isArray(t)&&"object"==typeof t||Array.isArray(t)&&("object"==typeof t[0]||"object"==typeof t[1]))&&O(e)}));return()=>P.unsubscribe(e)}),[]);const I=h("row",n),[N,z]=(0,u.V)(I),M=(()=>{const e=[void 0,void 0];return(Array.isArray(g)?g:[g,void 0]).forEach(((t,n)=>{if("object"==typeof t)for(let r=0;r<c.c.length;r++){const o=c.c[r];if($[o]&&void 0!==t[o]){e[n]=t[o];break}}else e[n]=t})),e})(),Z=o()(I,{[`${I}-no-wrap`]:!1===b,[`${I}-${S}`]:S,[`${I}-${j}`]:j,[`${I}-rtl`]:"rtl"===x},d,z),A={},R=null!=M[0]&&M[0]>0?M[0]/-2:void 0,G=null!=M[1]&&M[1]>0?M[1]/-2:void 0;R&&(A.marginLeft=R,A.marginRight=R),E?[,A.rowGap]=M:G&&(A.marginTop=G,A.marginBottom=G);const[T,W]=M,F=i.useMemo((()=>({gutter:[T,W],wrap:b,supportFlexGap:E})),[T,W,b,E]);return N(i.createElement(s.Z.Provider,{value:F},i.createElement("div",Object.assign({},v,{className:Z,style:Object.assign(Object.assign({},A),m),ref:t}),y)))}))},6999:(e,t,n)=>{n.d(t,{V:()=>c,c:()=>s});var r=n(7968),o=n(5503);const i=e=>{const{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around ":{justifyContent:"space-around"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},a=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},l=(e,t)=>((e,t)=>{const{componentCls:n,gridColumns:r}=e,o={};for(let e=r;e>=0;e--)0===e?(o[`${n}${t}-${e}`]={display:"none"},o[`${n}-push-${e}`]={insetInlineStart:"auto"},o[`${n}-pull-${e}`]={insetInlineEnd:"auto"},o[`${n}${t}-push-${e}`]={insetInlineStart:"auto"},o[`${n}${t}-pull-${e}`]={insetInlineEnd:"auto"},o[`${n}${t}-offset-${e}`]={marginInlineEnd:0},o[`${n}${t}-order-${e}`]={order:0}):(o[`${n}${t}-${e}`]={display:"block",flex:`0 0 ${e/r*100}%`,maxWidth:e/r*100+"%"},o[`${n}${t}-push-${e}`]={insetInlineStart:e/r*100+"%"},o[`${n}${t}-pull-${e}`]={insetInlineEnd:e/r*100+"%"},o[`${n}${t}-offset-${e}`]={marginInlineStart:e/r*100+"%"},o[`${n}${t}-order-${e}`]={order:e});return o})(e,t),c=(0,r.Z)("Grid",(e=>[i(e)])),s=(0,r.Z)("Grid",(e=>{const t=(0,o.TS)(e,{gridColumns:24}),n={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[a(t),l(t,""),l(t,"-xs"),Object.keys(n).map((e=>((e,t,n)=>({[`@media (min-width: ${t}px)`]:Object.assign({},l(e,n))}))(t,n[e],e))).reduce(((e,t)=>Object.assign(Object.assign({},e),t)),{})]}))},9477:(e,t,n)=>{n.d(t,{ZP:()=>ae});var r=n(6622),o=n(6959),i=n(7294),a=n(7813),l=n(7085),c=n(8855),s=n(3061),u=n(8819),f=n(8428);const p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"};var d=n(2895),m=function(e,t){return i.createElement(d.Z,(0,f.Z)((0,f.Z)({},e),{},{ref:t,icon:p}))};m.displayName="InfoCircleFilled";const y=i.forwardRef(m);function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}function v(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||b(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],c=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return l}}(e,t)||b(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$.apply(this,arguments)}function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function C(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==O(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===O(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=n(3935),E=n(8098),k=n(4184),P=n.n(k),I=i.forwardRef((function(e,t){var n=e.prefixCls,r=e.style,o=e.className,a=e.duration,l=void 0===a?4.5:a,c=e.eventKey,s=e.content,u=e.closable,f=e.closeIcon,p=void 0===f?"x":f,d=e.props,m=e.onClick,y=e.onNoticeClose,g=h(i.useState(!1),2),b=g[0],v=g[1],x=function(){y(c)};i.useEffect((function(){if(!b&&l>0){var e=setTimeout((function(){x()}),1e3*l);return function(){clearTimeout(e)}}}),[l,b]);var O="".concat(n,"-notice");return i.createElement("div",$({},d,{ref:t,className:P()(O,o,C({},"".concat(O,"-closable"),u)),style:r,onMouseEnter:function(){v(!0)},onMouseLeave:function(){v(!1)},onClick:m}),i.createElement("div",{className:"".concat(O,"-content")},s),u&&i.createElement("a",{tabIndex:0,className:"".concat(O,"-close"),onClick:function(e){e.preventDefault(),e.stopPropagation(),x()}},p))}));const N=I;var z=i.forwardRef((function(e,t){var n=e.prefixCls,r=void 0===n?"rc-notification":n,o=e.container,a=e.motion,l=e.maxCount,c=e.className,s=e.style,u=e.onAllRemoved,f=h(i.useState([]),2),p=f[0],d=f[1],m=function(e){var t,n=p.find((function(t){return t.key===e}));null==n||null===(t=n.onClose)||void 0===t||t.call(n),d((function(t){return t.filter((function(t){return t.key!==e}))}))};i.useImperativeHandle(t,(function(){return{open:function(e){d((function(t){var n=v(t),r=n.findIndex((function(t){return t.key===e.key}));return r>=0?n[r]=e:n.push(e),l>0&&n.length>l&&(n=n.slice(-l)),n}))},close:function(e){m(e)},destroy:function(){d([])}}}));var y=h(i.useState({}),2),g=y[0],b=y[1];i.useEffect((function(){var e={};p.forEach((function(t){var n=t.placement,r=void 0===n?"topRight":n;r&&(e[r]=e[r]||[],e[r].push(t))})),Object.keys(g).forEach((function(t){e[t]=e[t]||[]})),b(e)}),[p]);var x=i.useRef(!1);if(i.useEffect((function(){Object.keys(g).length>0?x.current=!0:x.current&&(null==u||u(),x.current=!1)}),[g]),!o)return null;var O=Object.keys(g);return(0,S.createPortal)(i.createElement(i.Fragment,null,O.map((function(e){var t=g[e].map((function(e){return{config:e,key:e.key}})),n="function"==typeof a?a(e):a;return i.createElement(E.V,$({key:e,className:P()(r,"".concat(r,"-").concat(e),null==c?void 0:c(e)),style:null==s?void 0:s(e),keys:t,motionAppear:!0},n,{onAllRemoved:function(){!function(e){b((function(t){var n=j({},t);return(n[e]||[]).length||delete n[e],n}))}(e)}}),(function(e,t){var n=e.config,o=e.className,a=e.style,l=n.key,c=n.className,s=n.style;return i.createElement(N,$({},n,{ref:t,prefixCls:r,className:P()(o,c),style:j(j({},a),s),key:l,eventKey:l,onNoticeClose:m}))}))}))),o)}));const M=z;var Z=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved"],A=function(){return document.body},R=0;function G(){for(var e={},t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return n.forEach((function(t){t&&Object.keys(t).forEach((function(n){var r=t[n];void 0!==r&&(e[n]=r)}))})),e}var T=n(4079),W=n(7968),F=n(5503),H=n(4747);const B=e=>{const{componentCls:t,iconCls:n,boxShadowSecondary:r,colorBgElevated:o,colorSuccess:i,colorError:a,colorWarning:l,colorInfo:c,fontSizeLG:s,motionEaseInOutCirc:u,motionDurationSlow:f,marginXS:p,paddingXS:d,borderRadiusLG:m,zIndexPopup:y,messageNoticeContentPadding:g}=e,b=new T.E4("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:d,transform:"translateY(0)",opacity:1}}),v=new T.E4("MessageMoveOut",{"0%":{maxHeight:e.height,padding:d,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}});return[{[t]:Object.assign(Object.assign({},(0,H.Wf)(e)),{position:"fixed",top:p,width:"100%",pointerEvents:"none",zIndex:y,[`${t}-move-up`]:{animationFillMode:"forwards"},[`\n        ${t}-move-up-appear,\n        ${t}-move-up-enter\n      `]:{animationName:b,animationDuration:f,animationPlayState:"paused",animationTimingFunction:u},[`\n        ${t}-move-up-appear${t}-move-up-appear-active,\n        ${t}-move-up-enter${t}-move-up-enter-active\n      `]:{animationPlayState:"running"},[`${t}-move-up-leave`]:{animationName:v,animationDuration:f,animationPlayState:"paused",animationTimingFunction:u},[`${t}-move-up-leave${t}-move-up-leave-active`]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[`${t}-notice`]:{padding:d,textAlign:"center",[n]:{verticalAlign:"text-bottom",marginInlineEnd:p,fontSize:s},[`${t}-notice-content`]:{display:"inline-block",padding:g,background:o,borderRadius:m,boxShadow:r,pointerEvents:"all"},[`${t}-success ${n}`]:{color:i},[`${t}-error ${n}`]:{color:a},[`${t}-warning ${n}`]:{color:l},[`\n        ${t}-info ${n},\n        ${t}-loading ${n}`]:{color:c}}},{[`${t}-notice-pure-panel`]:{padding:0,textAlign:"start"}}]},L=(0,W.Z)("Message",(e=>{const t=(0,F.TS)(e,{messageNoticeContentPadding:`${(e.controlHeightLG-e.fontSize*e.lineHeight)/2}px ${e.paddingSM}px`});return[B(t)]}),(e=>({height:150,zIndexPopup:e.zIndexPopupBase+10})));var D=n(3124);const _={info:i.createElement(y,null),success:i.createElement(u.Z,null),error:i.createElement(s.Z,null),warning:i.createElement(c.Z,null),loading:i.createElement(l.Z,null)};function V(e){let{prefixCls:t,type:n,icon:r,children:o}=e;return i.createElement("div",{className:P()(`${t}-custom-content`,`${t}-${n}`)},r||_[n],i.createElement("span",null,o))}var X=n(4549);function Y(e){let t;const n=new Promise((n=>{t=e((()=>{n(!0)}))})),r=()=>{null==t||t()};return r.then=(e,t)=>n.then(e,t),r.promise=n,r}const K=i.forwardRef(((e,t)=>{const{top:n,prefixCls:r,getContainer:o,maxCount:a,rtl:l,transitionName:c,onAllRemoved:s}=e,{getPrefixCls:u,getPopupContainer:f}=i.useContext(D.E_),p=r||u("message"),[,d]=L(p),m=i.createElement("span",{className:`${p}-close-x`},i.createElement(X.Z,{className:`${p}-close-icon`})),[y,g]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.getContainer,n=void 0===t?A:t,r=e.motion,o=e.prefixCls,a=e.maxCount,l=e.className,c=e.style,s=e.onAllRemoved,u=x(e,Z),f=h(i.useState(),2),p=f[0],d=f[1],m=i.useRef(),y=i.createElement(M,{container:p,ref:m,prefixCls:o,motion:r,maxCount:a,className:l,style:c,onAllRemoved:s}),g=h(i.useState([]),2),b=g[0],$=g[1],O=i.useMemo((function(){return{open:function(e){var t=G(u,e);null!==t.key&&void 0!==t.key||(t.key="rc-notification-".concat(R),R+=1),$((function(e){return[].concat(v(e),[{type:"open",config:t}])}))},close:function(e){$((function(t){return[].concat(v(t),[{type:"close",key:e}])}))},destroy:function(){$((function(e){return[].concat(v(e),[{type:"destroy"}])}))}}}),[]);return i.useEffect((function(){d(n())})),i.useEffect((function(){m.current&&b.length&&(b.forEach((function(e){switch(e.type){case"open":m.current.open(e.config);break;case"close":m.current.close(e.key);break;case"destroy":m.current.destroy()}})),$([]))}),[b]),[O,y]}({prefixCls:p,style:()=>({left:"50%",transform:"translateX(-50%)",top:null!=n?n:8}),className:()=>P()(d,l?`${p}-rtl`:""),motion:()=>function(e,t){return{motionName:null!=t?t:`${e}-move-up`}}(p,c),closable:!1,closeIcon:m,duration:3,getContainer:()=>(null==o?void 0:o())||(null==f?void 0:f())||document.body,maxCount:a,onAllRemoved:s});return i.useImperativeHandle(t,(()=>Object.assign(Object.assign({},y),{prefixCls:p,hashId:d}))),g}));let U=0;function J(e){const t=i.useRef(null);return[i.useMemo((()=>{const e=e=>{var n;null===(n=t.current)||void 0===n||n.close(e)},n=n=>{if(!t.current){const e=()=>{};return e.then=()=>{},e}const{open:r,prefixCls:o,hashId:a}=t.current,l=`${o}-notice`,{content:c,icon:s,type:u,key:f,className:p,onClose:d}=n,m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(n,["content","icon","type","key","className","onClose"]);let y=f;return null==y&&(U+=1,y=`antd-message-${U}`),Y((t=>(r(Object.assign(Object.assign({},m),{key:y,content:i.createElement(V,{prefixCls:o,type:u,icon:s},c),placement:"top",className:P()(u&&`${l}-${u}`,a,p),onClose:()=>{null==d||d(),t()}})),()=>{e(y)})))},r={open:n,destroy:n=>{var r;void 0!==n?e(n):null===(r=t.current)||void 0===r||r.destroy()}};return["info","success","warning","error","loading"].forEach((e=>{r[e]=(t,r,o)=>{let i,a,l;i=t&&"object"==typeof t&&"content"in t?t:{content:t},"function"==typeof r?l=r:(a=r,l=o);const c=Object.assign(Object.assign({onClose:l,duration:a},i),{type:e});return n(c)}})),r}),[]),i.createElement(K,Object.assign({key:"message-holder"},e,{ref:t}))]}let q=null,Q=e=>e(),ee=[],te={};const ne=i.forwardRef(((e,t)=>{const[n,r]=i.useState(),[o,l]=i.useState(),[c,s]=i.useState(),[u,f]=i.useState(),[p,d]=i.useState(),[m,y]=J({prefixCls:n,getContainer:()=>o,maxCount:c,rtl:u,top:p}),g=(0,a.w6)(),b=g.getRootPrefixCls(),v=g.getIconPrefixCls(),h=()=>{const{prefixCls:e,container:t,maxCount:n,rtl:o,top:i}=function(){const{prefixCls:e,getContainer:t,rtl:n,maxCount:r,top:o}=te;return{prefixCls:null!=e?e:(0,a.w6)().getPrefixCls("message"),container:(null==t?void 0:t())||document.body,rtl:n,maxCount:r,top:o}}();r(e),l(t),s(n),f(o),d(i)};return i.useEffect(h,[]),i.useImperativeHandle(t,(()=>{const e=Object.assign({},m);return Object.keys(e).forEach((t=>{e[t]=function(){return h(),m[t].apply(m,arguments)}})),{instance:e,sync:h}})),i.createElement(a.ZP,{prefixCls:b,iconPrefixCls:v},y)}));function re(){if(!q){const e=document.createDocumentFragment(),t={fragment:e};return q=t,void Q((()=>{(0,o.s)(i.createElement(ne,{ref:e=>{const{instance:n,sync:r}=e||{};Promise.resolve().then((()=>{!t.instance&&n&&(t.instance=n,t.sync=r,re())}))}}),e)}))}q.instance&&(ee.forEach((e=>{const{type:t,skipped:n}=e;if(!n)switch(t){case"open":Q((()=>{const t=q.instance.open(Object.assign(Object.assign({},te),e.config));null==t||t.then(e.resolve),e.setCloseFn(t)}));break;case"destroy":Q((()=>{null==q||q.instance.destroy(e.key)}));break;default:Q((()=>{var n;const o=(n=q.instance)[t].apply(n,(0,r.Z)(e.args));null==o||o.then(e.resolve),e.setCloseFn(o)}))}})),ee=[])}function oe(e,t){const n=Y((n=>{let r;const o={type:e,args:t,resolve:n,setCloseFn:e=>{r=e}};return ee.push(o),()=>{r?Q((()=>{r()})):o.skipped=!0}}));return re(),n}const ie={open:function(e){const t=Y((t=>{let n;const r={type:"open",config:e,resolve:t,setCloseFn:e=>{n=e}};return ee.push(r),()=>{n?Q((()=>{n()})):r.skipped=!0}}));return re(),t},destroy:function(e){ee.push({type:"destroy",key:e}),re()},config:function(e){te=Object.assign(Object.assign({},te),e),Q((()=>{var e;null===(e=null==q?void 0:q.sync)||void 0===e||e.call(q)}))},useMessage:function(e){return J(e)},_InternalPanelDoNotUseOrYouWillBeFired:function(e){const{prefixCls:t,className:n,type:r,icon:o,content:a}=e,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["prefixCls","className","type","icon","content"]),{getPrefixCls:c}=i.useContext(D.E_),s=t||c("message"),[,u]=L(s);return i.createElement(N,Object.assign({},l,{prefixCls:s,className:P()(n,u,`${s}-notice-pure-panel`),eventKey:"pure",duration:null,content:i.createElement(V,{prefixCls:s,type:r,icon:o},a)}))}};["success","info","warning","error","loading"].forEach((e=>{ie[e]=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return oe(e,n)}}));const ae=ie}}]);
//# sourceMappingURL=34.1bb0ea.chunk.js.map