(self.webpackChunkglowworm=self.webpackChunkglowworm||[]).push([[4912],{72414:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var i=n(44367),r=n(29547),a=n(3469),l=n(37172),s=n(59061),o=n(26573),c=n(48943),d=n(58847),u=["links","action","heading","moreLink","sx"];function h(e){var t=e.links,n=e.action,h=e.heading,x=e.moreLink,f=void 0===x?[]:x,Z=e.sx,m=(0,r.Z)(e,u);return(0,d.jsxs)(a.Z,{sx:(0,i.Z)({mb:5},Z),children:[(0,d.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,d.jsxs)(a.Z,{sx:{flexGrow:1},children:[(0,d.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:h}),(0,d.jsx)(c.SW,(0,i.Z)({links:t},m))]}),n&&(0,d.jsx)(a.Z,{sx:{flexShrink:0},children:n})]}),(0,d.jsx)(a.Z,{sx:{mt:2},children:(0,o.isString)(f)?(0,d.jsx)(s.Z,{href:f,target:"_blank",variant:"body2",children:f}):f.map((function(e){return(0,d.jsx)(s.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},8139:function(e,t,n){"use strict";n.d(t,{_:function(){return c},g:function(){return d}});var i=n(44367),r=n(37172),a=n(29336),l=n(82255),s=n(3469),o=n(58847);function c(e){var t=e.title;return(0,o.jsx)(r.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function d(e){var t=e.title,n=e.sx,r=e.children;return(0,o.jsxs)(a.Z,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&(0,o.jsx)(l.Z,{title:t}),(0,o.jsx)(s.Z,{sx:(0,i.Z)({p:3,minHeight:180},n),children:r})]})}},4912:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var i=n(3469),r=n(89227),a=n(33469),l=n(24960),s=n(72414),o=n(75641),c=n(19363),d=n(33543),u=n(8139),h=n(23151),x=n(34451),f=n(78833),Z=n(92969),m=n(7233),p=n(29336),g=n(82255),v=n(48053),j=n(4059),b=n(86023),y=n(13656),k=n(17288),w=n(66339),C=n(87408),P=n(91985),S=n(53525),O=n(58847);function R(e,t){return e.filter((function(e){return-1===t.indexOf(e)}))}function T(e,t){return e.filter((function(e){return-1!==t.indexOf(e)}))}function L(){var e=(0,S.useState)([]),t=(0,h.Z)(e,2),n=t[0],i=t[1],r=(0,S.useState)([0,1,2,3]),a=(0,h.Z)(r,2),l=a[0],s=a[1],o=(0,S.useState)([4,5,6,7]),c=(0,h.Z)(o,2),d=c[0],u=c[1],L=T(n,l),I=T(n,d),M=function(e){return function(){var t=n.indexOf(e),r=(0,x.Z)(n);-1===t?r.push(e):r.splice(t,1),i(r)}},H=function(e){return T(n,e).length},N=function(e){return function(){var t,r;H(e)===e.length?i(R(n,e)):i((t=n,r=e,[].concat((0,x.Z)(t),(0,x.Z)(R(r,t)))))}},z=function(e,t){return(0,O.jsxs)(p.Z,{sx:{borderRadius:1.5},children:[(0,O.jsx)(g.Z,{avatar:(0,O.jsx)(v.Z,{onClick:N(t),checked:H(t)===t.length&&0!==t.length,indeterminate:H(t)!==t.length&&0!==H(t),disabled:0===t.length,inputProps:{"aria-label":"all items selected"}}),title:e,subheader:"".concat(H(t),"/").concat(t.length," selected"),sx:{p:2}}),(0,O.jsx)(j.Z,{}),(0,O.jsx)(b.Z,{dense:!0,component:"div",role:"list",sx:{width:200,height:220,overflow:"auto"},children:t.map((function(e){var t="transfer-list-all-item-".concat(e,"-label");return(0,O.jsxs)(y.Z,{role:"listitem",onClick:M(e),children:[(0,O.jsx)(k.Z,{children:(0,O.jsx)(v.Z,{checked:-1!==n.indexOf(e),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":t}})}),(0,O.jsx)(w.Z,{id:t,primary:"List item ".concat(e+1)})]},e)}))})]})};return(0,O.jsxs)(C.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{width:"auto",p:3},children:[(0,O.jsx)(C.ZP,{item:!0,children:z("Choices",l)}),(0,O.jsx)(C.ZP,{item:!0,children:(0,O.jsxs)(C.ZP,{container:!0,direction:"column",alignItems:"center",sx:{p:3},children:[(0,O.jsx)(P.Z,{color:"inherit",variant:"outlined",size:"small",onClick:function(){u(d.concat(L)),s(R(l,L)),i(R(n,L))},disabled:0===L.length,"aria-label":"move selected right",sx:{my:1},children:(0,O.jsx)(m.JO,{icon:Z.Z,width:18,height:18})}),(0,O.jsx)(P.Z,{color:"inherit",variant:"outlined",size:"small",onClick:function(){s(l.concat(I)),u(R(d,I)),i(R(n,I))},disabled:0===I.length,"aria-label":"move selected left",sx:{my:1},children:(0,O.jsx)(m.JO,{icon:f.Z,width:18,height:18})})]})}),(0,O.jsx)(C.ZP,{item:!0,children:z("Chosen",d)})]})}var I=n(73296),M=n(15451);function H(e,t){return e.filter((function(e){return-1===t.indexOf(e)}))}function N(e,t){return e.filter((function(e){return-1!==t.indexOf(e)}))}function z(){var e=(0,S.useState)([]),t=(0,h.Z)(e,2),n=t[0],i=t[1],r=(0,S.useState)([0,1,2,3]),a=(0,h.Z)(r,2),l=a[0],s=a[1],o=(0,S.useState)([4,5,6,7]),c=(0,h.Z)(o,2),d=c[0],u=c[1],g=N(n,l),j=N(n,d),R=function(e){return function(){var t=n.indexOf(e),r=(0,x.Z)(n);-1===t?r.push(e):r.splice(t,1),i(r)}},T=function(e){return(0,O.jsx)(p.Z,{sx:{width:200,height:220,overflow:"auto",borderRadius:1.5},children:(0,O.jsx)(b.Z,{dense:!0,component:"div",role:"list",children:e.map((function(e){var t="transfer-list-item-".concat(e,"-label");return(0,O.jsxs)(y.Z,{role:"listitem",onClick:R(e),children:[(0,O.jsx)(k.Z,{children:(0,O.jsx)(v.Z,{checked:-1!==n.indexOf(e),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":t}})}),(0,O.jsx)(w.Z,{id:t,primary:"List item ".concat(e+1)})]},e)}))})})};return(0,O.jsxs)(C.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{width:"auto",py:3},children:[(0,O.jsx)(C.ZP,{item:!0,children:T(l)}),(0,O.jsx)(C.ZP,{item:!0,children:(0,O.jsxs)(C.ZP,{container:!0,direction:"column",alignItems:"center",sx:{p:3},children:[(0,O.jsx)(P.Z,{color:"inherit",variant:"outlined",size:"small",onClick:function(){u(d.concat(l)),s([])},disabled:0===l.length,"aria-label":"move all right",sx:{my:1},children:(0,O.jsx)(m.JO,{icon:M.Z,width:18,height:18})}),(0,O.jsx)(P.Z,{color:"inherit",variant:"outlined",size:"small",onClick:function(){u(d.concat(g)),s(H(l,g)),i(H(n,g))},disabled:0===g.length,"aria-label":"move selected right",sx:{my:1},children:(0,O.jsx)(m.JO,{icon:Z.Z,width:18,height:18})}),(0,O.jsx)(P.Z,{color:"inherit",variant:"outlined",size:"small",onClick:function(){s(l.concat(j)),u(H(d,j)),i(H(n,j))},disabled:0===j.length,"aria-label":"move selected left",sx:{my:1},children:(0,O.jsx)(m.JO,{icon:f.Z,width:18,height:18})}),(0,O.jsx)(P.Z,{color:"inherit",variant:"outlined",size:"small",onClick:function(){s(l.concat(d)),u([])},disabled:0===d.length,"aria-label":"move all left",sx:{my:1},children:(0,O.jsx)(m.JO,{icon:I.Z,width:18,height:18})})]})}),(0,O.jsx)(C.ZP,{item:!0,children:T(d)})]})}var J={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap"},W=(0,l.ZP)(o.Z)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function A(){return(0,O.jsxs)(W,{title:"\u7ec4\u4ef6: Transfer List".concat(c.uU),children:[(0,O.jsx)(i.Z,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,O.jsx)(r.Z,{maxWidth:"lg",children:(0,O.jsx)(s.Z,{heading:"Transfer List",links:[{name:"Components",href:d.ko.components},{name:"Transfer List"}],moreLink:"https://mui.com/zh/material-ui/react-transfer-list/"})})}),(0,O.jsx)(r.Z,{maxWidth:"lg",children:(0,O.jsxs)(a.Z,{spacing:5,children:[(0,O.jsx)(u.g,{title:"Simple",sx:J,children:(0,O.jsx)(z,{})}),(0,O.jsx)(u.g,{title:"Enhanced",sx:J,children:(0,O.jsx)(L,{})})]})})]})}},73296:function(e,t){t.Z={body:'<path fill="currentColor" d="M11.64 5.23a1 1 0 0 0-1.41.13l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37a1 1 0 0 0 .78-1.63L7.29 12l4.48-5.37a1 1 0 0 0-.13-1.4Z"/><path fill="currentColor" d="m14.29 12l4.48-5.37a1 1 0 0 0-1.54-1.28l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37a1 1 0 0 0 .78-1.63Z"/>',width:24,height:24}},15451:function(e,t){t.Z={body:'<path fill="currentColor" d="m18.78 11.37l-4.78-6a1 1 0 0 0-1.41-.15a1 1 0 0 0-.15 1.41L16.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 13 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27Z"/><path fill="currentColor" d="M7 5.37a1 1 0 0 0-1.61 1.26L9.71 12l-4.48 5.36a1 1 0 0 0 .13 1.41A1 1 0 0 0 6 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 0-1.27Z"/>',width:24,height:24}},82255:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var i=n(23080),r=n(13010),a=n(45443),l=n(53525),s=n(60236),o=n(4607),c=n(37172),d=n(92261),u=n(24960),h=n(10656);function x(e){return(0,h.Z)("MuiCardHeader",e)}var f=(0,n(35689).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),Z=n(58847),m=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],p=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var n;return(0,a.Z)((n={},(0,i.Z)(n,"& .".concat(f.title),t.title),(0,i.Z)(n,"& .".concat(f.subheader),t.subheader),n),t.root)}})({display:"flex",alignItems:"center",padding:16}),g=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),v=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),j=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),b=l.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiCardHeader"}),i=n.action,l=n.avatar,u=n.className,h=n.component,f=void 0===h?"div":h,b=n.disableTypography,y=void 0!==b&&b,k=n.subheader,w=n.subheaderTypographyProps,C=n.title,P=n.titleTypographyProps,S=(0,r.Z)(n,m),O=(0,a.Z)({},n,{component:f,disableTypography:y}),R=function(e){var t=e.classes;return(0,o.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},x,t)}(O),T=C;null==T||T.type===c.Z||y||(T=(0,Z.jsx)(c.Z,(0,a.Z)({variant:l?"body2":"h5",className:R.title,component:"span",display:"block"},P,{children:T})));var L=k;return null==L||L.type===c.Z||y||(L=(0,Z.jsx)(c.Z,(0,a.Z)({variant:l?"body2":"body1",className:R.subheader,color:"text.secondary",component:"span",display:"block"},w,{children:L}))),(0,Z.jsxs)(p,(0,a.Z)({className:(0,s.Z)(R.root,u),as:f,ref:t,ownerState:O},S,{children:[l&&(0,Z.jsx)(g,{className:R.avatar,ownerState:O,children:l}),(0,Z.jsxs)(j,{className:R.content,ownerState:O,children:[T,L]}),i&&(0,Z.jsx)(v,{className:R.action,ownerState:O,children:i})]}))}))}}]);
//# sourceMappingURL=4912.0ebebe60.chunk.js.map