(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{198:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(11),o=(n(0),n(243)),i={id:"first-api-endpoint",title:"Your first API endpoint"},c={id:"first-api-endpoint",isDocsHomePage:!1,title:"Your first API endpoint",description:"Concepts: Structural elements, blanks, implicit returns, traces.",source:"@site/docs/first-api-endpoint.md",permalink:"/docs/first-api-endpoint"},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Concepts:")," Structural elements, blanks, implicit returns, traces."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create a new HTTP endpoint from the omnibox (click anywhere on the screen or\nhit ",Object(o.b)("inlineCode",{parentName:"li"},"Cmd-k"),"/",Object(o.b)("inlineCode",{parentName:"li"},"Ctrl-k"),"), or from the plus next to ",Object(o.b)("inlineCode",{parentName:"li"},"HTTP")," on the sidebar.")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"assets/gettingstarted/Screen_Shot_2020-02-11_at_9.10.26_AM.png",alt:"assets/gettingstarted/Screen_Shot_2020-02-11_at_9.10.26_AM.png"}))),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Enter the HTTP verb as ",Object(o.b)("inlineCode",{parentName:"li"},"GET")," and ",Object(o.b)("inlineCode",{parentName:"li"},"/math")," for the route.")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"assets/gettingstarted/Screen_Shot_2020-02-11_at_9.11.23_AM.png",alt:"assets/gettingstarted/Screen_Shot_2020-02-11_at_9.11.23_AM.png"}))),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"You can now write any code in the blank ","\u2013"," this is the return value of\nthe API endpoint that you've just created. To start with, let's just return\n",Object(o.b)("inlineCode",{parentName:"li"},"4"),".")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"assets/gettingstarted/Screen_Shot_2020-02-11_at_9.12.02_AM.png",alt:"assets/gettingstarted/Screen_Shot_2020-02-11_at_9.12.02_AM.png"}))),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},'Click the handler\'s menu (\u2630) in the upper right and select "open in new tab",\nto see your API endpoint running in production.')),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"assets/gettingstarted/Screen_Shot_2020-02-11_at_9.12.43_AM.png",alt:"assets/gettingstarted/Screen_Shot_2020-02-11_at_9.12.43_AM.png"}))),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"Go back to Dark to edit your code. Add ",Object(o.b)("inlineCode",{parentName:"li"},"+ 5")," to the end of the code and leave\nyour cursor in line.")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"assets/gettingstarted/Screen_Shot_2020-02-11_at_9.14.25_AM.png",alt:"assets/gettingstarted/Screen_Shot_2020-02-11_at_9.14.25_AM.png"}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"9")," below the handler shows you the return value for the handler.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"5")," on the left shows you the result of the expression where the cursor\ncurrently is (in this case, 5). This isn't very useful when it's an integer,\nbut if it's a variable it will show you the result of the variable."))),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"assets/gettingstarted/Screen_Shot_2020-02-11_at_9.16.06_AM.png",alt:"assets/gettingstarted/Screen_Shot_2020-02-11_at_9.16.06_AM.png"}))),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},'Mouse over the white dots on the left. Each dot is a "trace", representing a\nsingle request to your handler. Traces are fundamental to coding in Dark, and\nwe\'ll come back to them later.')),Object(o.b)("p",null,"Congratulations! You've shipped your first Dark API endpoint."))}p.isMDXComponent=!0},243:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);