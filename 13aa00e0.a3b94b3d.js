(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(11),i=(n(0),n(242)),o={id:"first-repl",title:"Your first REPL"},l={id:"first-repl",isDocsHomePage:!1,title:"Your first REPL",description:"Concepts: REPLs, HttpClient library, Play buttons",source:"@site/docs/first-repl.md",permalink:"/first-repl"},c=[],p={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Concepts:")," REPLs, HttpClient library, Play buttons"),Object(i.b)("p",null,"REPLs in Dark are general-purpose coding blocks. They're typically used in the\nway you might write a bash script (reusable tools), use traditional REPLs\n(experiments and one-off commands), or admin dashboards (simple reporting)."),Object(i.b)("p",null,"We'll run you through creating your first REPL, experimenting with the\nHttpClient library to make API calls."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create a new REPL from the sidebar or the omnibox (",Object(i.b)("inlineCode",{parentName:"p"},"Ctrl-K"),"/",Object(i.b)("inlineCode",{parentName:"p"},"Cmd-K"),").")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},'Type "httpclient" in the REPL (lowercase, no spaces)'))),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/gettingstarted/Screen_Shot_2020-02-11_at_9.20.25_AM.png",alt:"gettingstarted/Screen_Shot_2020-02-11_at_9.20.25_AM.png"}))),Object(i.b)("p",null,"This will show you all the standard library functions for HttpClient, their\nsignatures, and their docstrings."),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},'Continue typing, until you have "httpclientpost". Dark autocompletes on\nsubstrings so getting the exact text isn\'t important:')),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/gettingstarted/Screen_Shot_2020-02-11_at_9.21.21_AM.png",alt:"gettingstarted/Screen_Shot_2020-02-11_at_9.21.21_AM.png"}))),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Hit enter to add the function into the handler.")),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/gettingstarted/Screen_Shot_2020-02-11_at_9.22.01_AM.png",alt:"gettingstarted/Screen_Shot_2020-02-11_at_9.22.01_AM.png"}))),Object(i.b)("p",null,"Dark automatically creates blanks for the four arguments that ",Object(i.b)("inlineCode",{parentName:"p"},"HttpClient::post"),"\nrequires. We display a gray play button beside the function ","\u2013"," it will turn\ngreen when all the arguments are complete, allowing you to run the function from\nwithin the editor."),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},"Let's call a new ",Object(i.b)("inlineCode",{parentName:"li"},"/test")," endpoint for the application we're developing. As we\nsaw from the GET, our endpoints live at\nUSERNAME-gettingstarted.builtwithdark.com, so enter a string like\n",Object(i.b)("inlineCode",{parentName:"li"},'"https://USERNAME-gettingstarted.builtwithdark.com/test"'),".")),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/gettingstarted/Screen_Shot_2020-02-11_at_9.24.08_AM.png",alt:"gettingstarted/Screen_Shot_2020-02-11_at_9.24.08_AM.png"}))),Object(i.b)("ol",{start:6},Object(i.b)("li",{parentName:"ol"},"Next let's add the arguments. The structured editor simplifies creation of\nthe arguments we want:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"For the body, we want to pass ",Object(i.b)("inlineCode",{parentName:"li"},'{test:"test1"}'),": type ",Object(i.b)("inlineCode",{parentName:"li"},"{"),", hit enter, then add\nthe key and the value."),Object(i.b)("li",{parentName:"ul"},"For the query, we want an empty dictionary. Type ",Object(i.b)("inlineCode",{parentName:"li"},"{"),"."),Object(i.b)("li",{parentName:"ul"},'For the header, we want the JSON content-type: type "json" and the\nautocomplete will offer you a function to use.')),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/gettingstarted/Screen_Shot_2020-02-11_at_10.41.50_AM.png",alt:"gettingstarted/Screen_Shot_2020-02-11_at_10.41.50_AM.png"}))),Object(i.b)("ol",{start:7},Object(i.b)("li",{parentName:"ol"},"Once we've filled in all the arguments, the play button (\u25b6\ufe0f) next to the\nfunction turns green, which means we can execute this code from within the\neditor.")),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/gettingstarted/Screen_Shot_2020-02-11_at_10.42.45_AM.png",alt:"gettingstarted/Screen_Shot_2020-02-11_at_10.42.45_AM.png"}))),Object(i.b)("ol",{start:8},Object(i.b)("li",{parentName:"ol"},"Hitting play we receive a 404 response. This is because there's no ",Object(i.b)("inlineCode",{parentName:"li"},"/test"),"\nendpoint on our canvas (yet!)")),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/gettingstarted/Screen_Shot_2020-02-11_at_10.43.39_AM.png",alt:"gettingstarted/Screen_Shot_2020-02-11_at_10.43.39_AM.png"}))),Object(i.b)("ol",{start:9},Object(i.b)("li",{parentName:"ol"},"404s in Dark appear in the 404 section of the sidebar. We'll discuss that\nmore later.")),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/gettingstarted/Screen_Shot_2020-02-11_at_10.44.10_AM.png",alt:"gettingstarted/Screen_Shot_2020-02-11_at_10.44.10_AM.png"}))),Object(i.b)("p",null,"Congratulations! You've built your first REPL and called your first function in\nDark."))}b.isMDXComponent=!0},242:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),g=r,m=s["".concat(o,".").concat(g)]||s[g]||u[g]||i;return n?a.a.createElement(m,l(l({ref:t},p),{},{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);