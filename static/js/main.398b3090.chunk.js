(this["webpackJsonpmobile-communication-assignment"]=this["webpackJsonpmobile-communication-assignment"]||[]).push([[0],{16:function(e,n,t){},17:function(e,n,t){},19:function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=19},20:function(e,n,t){"use strict";t.r(n);var c=t(1),o=t.n(c),s=t(8),r=t.n(s),a=t(7),i=t.n(a),l=t(9),u=t(3),d=(t(16),t(17),t(2)),m=t(0),b=function(e){var n=e.children,t=e.me,c=void 0===t?0:t;return Object(m.jsx)("div",{className:"flex items-end  ".concat(1===c?" justify-end":0===c?"":"justify-center"),style:{margin:"4px"},children:Object(m.jsx)("div",{className:"flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start",children:Object(m.jsx)("span",{className:"px-4 py-2 inline-block   ".concat(1===c?"rounded-lg rounded-bl-none bg-blue-600 text-white":0===c?"rounded-lg rounded-bl-none bg-gray-300 text-gray-600":"shadow-md border-2"," "),children:n})})})},f=function(){setTimeout((function(){document.getElementById("messages").scrollTop=document.getElementById("messages").scrollHeight}),50)},j=function(e){var n=e.peerId,t=e.peer,o=function(){window.sound.currentTime=0,window.sound.play()},s=Object(c.useState)([]),r=Object(u.a)(s,2),a=r[0],i=r[1];window.messages=a,console.log(a);var l=Object(c.useState)(""),j=Object(u.a)(l,2),g=j[0],p=j[1];Object(c.useEffect)((function(){null===t||void 0===t||t.on("connection",(function(e){window.conn=e,o(),i([].concat(Object(d.a)(window.messages),[{type:3,msg:"Chat connected"}])),e.on("data",(function(e){o(),i([].concat(Object(d.a)(window.messages),[{type:0,msg:e}])),f()}))}))}),[t]);var h=function(){if(i([].concat(Object(d.a)(a),[{type:1,msg:g}])),36===g.length&&"-"===g[8]&&"-"===g[13]&&"-"===g[18]&&"-"===g[23]){var e=t.connect(g);window.conn=e,e.on("open",(function(){i([].concat(Object(d.a)(window.messages),[{type:3,msg:"connected"}])),e.on("data",(function(e){o(),i([].concat(Object(d.a)(window.messages),[{type:0,msg:e}]))}))}))}else try{window.conn.send(g)}catch(n){}f(),p("")};return Object(c.useEffect)((function(){""!==n&&i([].concat(Object(d.a)(a),[{type:3,msg:"Your Id is"},{type:3,msg:n}]))}),[n,i]),Object(m.jsxs)("div",{className:"flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen",children:[Object(m.jsx)("div",{id:"messages",className:"flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch",children:a.map((function(e){return Object(m.jsx)(b,{me:e.type,children:e.msg},e.msg)}))}),Object(m.jsx)("div",{className:"border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0",children:Object(m.jsx)("form",{onSubmit:function(e){e.preventDefault(),h()},children:Object(m.jsxs)("div",{className:"relative flex",children:[Object(m.jsx)("input",{onChange:function(e){p(e.target.value)},value:g,type:"text",placeholder:"Write Something",className:"w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-full py-3"}),Object(m.jsx)("div",{className:"absolute right-0 items-center inset-y-0 sm:flex",children:Object(m.jsx)("button",{onClick:function(){h()},type:"button",className:"inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none",children:Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"h-6 w-6 transform rotate-90",children:Object(m.jsx)("path",{d:"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"})})})})]})})})]})},g=t(10),p=t.n(g);function h(){var e=Object(c.useState)(null),n=Object(u.a)(e,2),t=n[0],o=n[1],s=Object(c.useState)(""),r=Object(u.a)(s,2),a=r[0],d=r[1];return Object(c.useEffect)((function(){var e=new p.a({config:{iceServers:[{url:"stun:stun.xten.com"},{url:"turn:numb.viagenie.ca",credential:"muazkh",username:"webrtc@live.com"}]}});o(e),window.peer=e,e.on("open",function(){var e=Object(l.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.peerId=n,d(n);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[d,o]),Object(m.jsx)("div",{children:Object(m.jsx)(j,{peerId:a,peer:t})})}var w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,21)).then((function(n){var t=n.getCLS,c=n.getFID,o=n.getFCP,s=n.getLCP,r=n.getTTFB;t(e),c(e),o(e),s(e),r(e)}))};r.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(h,{})}),document.getElementById("root")),w()}},[[20,1,2]]]);
//# sourceMappingURL=main.398b3090.chunk.js.map