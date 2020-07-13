(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{237:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(11),s=(n(0),n(243)),o={id:"writing-tests",title:"Writing Tests",sidebar_label:"Write Tests"},i={id:"writing-tests",isDocsHomePage:!1,title:"Writing Tests",description:"At the moment, Dark does not provide an out of the box testing framework.",source:"@site/docs/writing-tests.md",permalink:"/docs/writing-tests",sidebar_label:"Write Tests",sidebar:"docs",previous:{title:"Use Feature Flags",permalink:"/docs/feature-flags"},next:{title:"Connect to External Infrastructure",permalink:"/docs/external-infra"}},c=[],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"At the moment, Dark does not provide an out of the box testing framework.\nHowever, it's fairly straightforward to write tests using REPLs and Crons."),Object(s.b)("p",null,"Let's take a simple example: a character creation process where the creator\nenters the name of their character and allocates 15 skill points into three\npossible skills. There are a few constraints:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"The name of the character must be more than 2 characters"),Object(s.b)("li",{parentName:"ul"},"All 15 skill points must be used, no more and no less.")),Object(s.b)("p",null,Object(s.b)("img",Object(r.a)({parentName:"p"},{src:"assets/writing-tests/function.png",alt:"assets/writing-tests/function.png"}))),Object(s.b)("p",null,"Let's say we want to write tests to make sure the proper messages are being\nprinted out. All we need to do is create a REPL and call functions that hit all\nof these cases:"),Object(s.b)("p",null,Object(s.b)("img",Object(r.a)({parentName:"p"},{src:"assets/writing-tests/tests.png",alt:"assets/writing-tests/tests.png"}))),Object(s.b)("p",null,"Now, at a glance, we can see that the messages being printed out look the way we\nexpect them to."),Object(s.b)("p",null,"We can even get fancy, and write logic to check that the printed messages say\nexactly what we want them to without having to read every message. In this\nexample, a portion of the message that gets printed when the name is not long\nenough has been accidentally deleted, so a warning is displayed."),Object(s.b)("p",null,Object(s.b)("img",Object(r.a)({parentName:"p"},{src:"assets/writing-tests/namecheck.png",alt:"assets/writing-tests/namecheck.png"}))),Object(s.b)("p",null,"In the examples above, the tests would need to be run by running the REPL\nmanually. However, the same logic can be written in a cron to make sure the\ntests run at whatever interval you'd prefer."),Object(s.b)("p",null,"If you're worried about missing a failing test, you can always set up alerts to\nlet you know. This is an example of a cron that runs once an hour and posts a\nmessage to Slack if an incorrect message is found:"),Object(s.b)("p",null,Object(s.b)("img",Object(r.a)({parentName:"p"},{src:"assets/writing-tests/slack.png",alt:"assets/writing-tests/slack.png"}))))}p.isMDXComponent=!0},243:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(o,".").concat(m)]||u[m]||b[m]||s;return n?a.a.createElement(f,i(i({ref:t},l),{},{components:n})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);