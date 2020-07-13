(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{195:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(11),s=(a(0),a(243)),o={id:"trace-driven-development",title:"Trace Driven Development",sidebar_label:"Trace Driven Development"},c={id:"trace-driven-development",isDocsHomePage:!1,title:"Trace Driven Development",description:"Dark flows from end user experience through to the backend components. If you",source:"@site/docs/trace-driven-development.md",permalink:"/docs/trace-driven-development",sidebar_label:"Trace Driven Development",sidebar:"docs",previous:{title:"Components",permalink:"/docs/dark-backend-components"},next:{title:"Structured Editing",permalink:"/docs/structured-editing"}},l=[{value:"Sending Requests to Dark",id:"sending-requests-to-dark",children:[{value:"Using Browser &amp; Curl for Requests",id:"using-browser--curl-for-requests",children:[]}]},{value:"Live Values &amp; Play Buttons",id:"live-values--play-buttons",children:[{value:"Replay Entire Trace Button",id:"replay-entire-trace-button",children:[]}]},{value:"Return Values",id:"return-values",children:[]}],i={rightToc:l};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Dark flows from end user experience through to the backend components. If you\nwould like to see any of the code from this document, the sample canvas that\ngoes along with it is:\n",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://darklang.com/a/sample-introtodark#handler=1175293748"}),"https://darklang.com/a/sample-introtodark")),Object(s.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/LcQyAfKLLT0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(s.b)("h2",{id:"sending-requests-to-dark"},"Sending Requests to Dark"),Object(s.b)("p",null,"Send requests to Dark ",Object(s.b)("em",{parentName:"p"},"before writing code"),". There are several ways to do this:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Build your frontend or mobile app first and point your API endpoints at Dark\n(you can host your frontend on Dark by\n",Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/static-assets"}),"uploading your static assets")," via CLI)."),Object(s.b)("li",{parentName:"ol"},"Use another platform that makes requests via REST (Slack, Twilio, Shopify)\nand use Dark with existing webhooks or calls."),Object(s.b)("li",{parentName:"ol"},Object(s.b)("strong",{parentName:"li"},"Use postman, curl, or another tool of your choice to send test data in the\ncorrect shape to your API endpoints.")," This is the easiest way to get\nstarted, and you can try it out by following the rest of this doc.")),Object(s.b)("h3",{id:"using-browser--curl-for-requests"},"Using Browser & Curl for Requests"),Object(s.b)("h4",{id:"get-requests"},"GET Requests"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Open your canvas (darklang.com/a/USERNAME-CANVASNAME)."),Object(s.b)("li",{parentName:"ul"},"In another tab, visit username-canvasname.builtwithdark.com/test (ex:\n",Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://sample-introtodark.builtwithdark.com/test"}),"https://sample-introtodark.builtwithdark.com/test"),")."),Object(s.b)("li",{parentName:"ul"},"Go back to Dark and check in the 404 section.")),Object(s.b)("p",null,Object(s.b)("img",Object(n.a)({parentName:"p"},{src:"assets/trace/image9.png",alt:"assets/trace/image9.png"}))),Object(s.b)("p",null,"You\u2019ll be able to create the endpoint and see the full request (including any\nquery params if you add them - i.e. test?name=ellen). Each request shows up as a\ntrace on the left hand side of the handler as a gray dot, or a white dot when\nselected."),Object(s.b)("p",null,'You can work with the selected trace. In this case, the handler is set to return\nthe "accept" field within the header. If the caret is in the text of \u201crequest\u201d\nyou\u2019ll see the full request, in \u201cheaders\u201d the full header, and in this case the\ncaret is in "accept," which means we see only that field to the left.'),Object(s.b)("p",null,"If you do not select a trace, you\u2019ll see spinners for all live values."),Object(s.b)("p",null,"One current limitation is that you can only write code for existing traces\n(trying to access something that doesn\u2019t exist will not allow you to write the\ncode). We\u2019re working on it."),Object(s.b)("p",null,Object(s.b)("img",Object(n.a)({parentName:"p"},{src:"assets/trace/image7.png",alt:"assets/trace/image7.png"}))),Object(s.b)("h4",{id:"post-requests"},"POST Requests"),Object(s.b)("p",null,"Open terminal and curl:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'curl -X POST -H \'Content-Type: application/json\' https://username-canvasname.builtwithdark.com/test2 -d \'{"test":"test data","info":"test info"}\'\n')),Object(s.b)("p",null,Object(s.b)("img",Object(n.a)({parentName:"p"},{src:"assets/trace/image11.png",alt:"assets/trace/image11.png"}))),Object(s.b)("p",null,Object(s.b)("img",Object(n.a)({parentName:"p"},{src:"assets/trace/image1.png",alt:"assets/trace/image1.png"}))),Object(s.b)("p",null,"When you create the route you\u2019ll see the recent traces as white dots on the\nleft. You can select a given trace by clicking on it and then you\u2019ll see all\nexpressions evaluated for that request."),Object(s.b)("p",null,Object(s.b)("img",Object(n.a)({parentName:"p"},{src:"assets/trace/image12.png",alt:"assets/trace/image12.png"}))),Object(s.b)("p",null,"Similarly to the get request, you can work with the real data from the trace. In\nthis case the handler shows ",Object(s.b)("inlineCode",{parentName:"p"},"request.body.info"),"."),Object(s.b)("p",null,Object(s.b)("img",Object(n.a)({parentName:"p"},{src:"assets/trace/image3.png",alt:"assets/trace/image3.png"}))),Object(s.b)("p",null,"You can select which trace you are using when evaluating your code. Below, there\nare three recent traces, and we\u2019re seeing the value of \u201cinfo\u201d for the most\nrecent."),Object(s.b)("p",null,Object(s.b)("img",Object(n.a)({parentName:"p"},{src:"assets/trace/image2.png",alt:"assets/trace/image2.png"}))),Object(s.b)("h2",{id:"live-values--play-buttons"},"Live Values & Play Buttons"),Object(s.b)("p",null,"Once you have requests/traces, you can use them while writing code."),Object(s.b)("p",null,'When you write code, if you put your cursor into the code, you will always see\nthe result of that code for the selected trace on the left hand side. These\nleft-hand-side values are called "live values."'),Object(s.b)("p",null,"As seen above with ",Object(s.b)("inlineCode",{parentName:"p"},"testinfo"),", expressions will automatically show you their\nvalues to the left if they have no side effects. Below, we see the result of the\naddition:"),Object(s.b)("p",null,Object(s.b)("img",Object(n.a)({parentName:"p"},{src:"assets/trace/image4.png",alt:"assets/trace/image4.png"}))),Object(s.b)("p",null,"When an expression does have side effects (like changing a value in a datastore\nor calling an external API) it will have a green \u201cplay\u201d or \u201creplay\u201d button that\nallows the developer to ",Object(s.b)("em",{parentName:"p"},"choose")," to run it for the current traces."),Object(s.b)("p",null,"In our earlier request, if we saved ",Object(s.b)("inlineCode",{parentName:"p"},"request.body.info")," to the variable\n",Object(s.b)("inlineCode",{parentName:"p"},"request_info"),", we could then choose to insert it into a datastore. In this\ncase, there\u2019s a play button to generate a new key, and a second one to insert\nthe information:"),Object(s.b)("p",null,Object(s.b)("img",Object(n.a)({parentName:"p"},{src:"assets/trace/image8.png",alt:"assets/trace/image8.png"}))),Object(s.b)("p",null,"Once you play the ",Object(s.b)("inlineCode",{parentName:"p"},"DB::generateKey"),", you can see the resulting key, and choose\nto play the ",Object(s.b)("inlineCode",{parentName:"p"},"DB::set")," expression:"),Object(s.b)("p",null,Object(s.b)("img",Object(n.a)({parentName:"p"},{src:"assets/trace/image10.png",alt:"assets/trace/image10.png"}))),Object(s.b)("p",null,"When you play ",Object(s.b)("inlineCode",{parentName:"p"},"DB::set"),", you can see the record that was inserted:"),Object(s.b)("p",null,Object(s.b)("img",Object(n.a)({parentName:"p"},{src:"assets/trace/image6.png",alt:"assets/trace/image6.png"}))),Object(s.b)("h3",{id:"replay-entire-trace-button"},"Replay Entire Trace Button"),Object(s.b)("p",null,"If you wish to replay the entire trace, you can use the \u201creplay\u201d button next to\nthe hamburger menu in the upper right of the handler."),Object(s.b)("p",null,Object(s.b)("img",Object(n.a)({parentName:"p"},{src:"assets/trace/image14.png",alt:"assets/trace/image14.png"}))),Object(s.b)("h2",{id:"return-values"},"Return Values"),Object(s.b)("p",null,"When on a handler, you\u2019ll also see a live value at the bottom that corresponds\nto the value a handler returns. Dark has implicit returns (more on this in\n",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"functional-aspects"}),"Functional Aspects of Dark"),")."),Object(s.b)("p",null,Object(s.b)("img",Object(n.a)({parentName:"p"},{src:"assets/trace/image5.png",alt:"assets/trace/image5.png"}))))}u.isMDXComponent=!0},243:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,h=p["".concat(o,".").concat(d)]||p[d]||b[d]||s;return a?r.a.createElement(h,c(c({ref:t},i),{},{components:a})):r.a.createElement(h,c({ref:t},i))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var i=2;i<s;i++)o[i]=a[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);