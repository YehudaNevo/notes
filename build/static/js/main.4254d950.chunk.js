(this.webpackJsonpfirst_app=this.webpackJsonpfirst_app||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(8),a=n.n(r),o=n(9),i=n(5),j=n(0);var l=function(e){return Object(j.jsx)("header",{className:"header",children:Object(j.jsx)("h1",{children:"keeper"})})};var s=function(e){var t=(new Date).getFullYear();return Object(j.jsx)("footer",{className:"footer",children:Object(j.jsxs)("p",{children:["Copyright \xa9 ",t]})})};var u=function(e){return Object(j.jsxs)("div",{className:"note",style:{backgroundColor:"#6D8299"},children:[Object(j.jsx)("h1",{children:e.title}),Object(j.jsx)("p",{children:e.content}),Object(j.jsx)("button",{onClick:function(){e.onDelete(e.id)},children:"Delete"})]})},b=n(4),d=n(7);var O=function(e){var t=Object(c.useState)({title:"",content:""}),n=Object(i.a)(t,2),r=n[0],a=n[1];function o(e){var t=e.target,n=t.name,c=t.value;a((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(b.a)({},n,c))})),e.preventDefault()}return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{name:"title",onChange:o,value:r.title,placeholder:"Title"}),Object(j.jsx)("textarea",{onChange:o,name:"content",value:r.content,placeholder:"Take a note..."}),Object(j.jsx)("button",{onClick:function(t){e.onAdd(r),a({title:"",content:""}),t.preventDefault()},children:"Add"})]})})};var f=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];function a(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))}return Object(j.jsxs)("div",{children:[Object(j.jsx)(l,{}),Object(j.jsx)(O,{onAdd:function(e){r((function(t){return[].concat(Object(o.a)(t),[e])}))}}),n.map((function(e,t){return Object(j.jsx)(u,{id:t,title:e.title,content:e.content,onDelete:a},t)})),Object(j.jsx)(s,{})]})};a.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.4254d950.chunk.js.map