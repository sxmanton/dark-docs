(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{189:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return c}));var a=n(2),i=n(11),r=(n(0),n(243)),s={id:"structured-editing",title:"Structured Editing"},l={id:"structured-editing",isDocsHomePage:!1,title:"Structured Editing",description:"_Note: for now, Dark is only supported for Chrome with browser extensions",source:"@site/docs/structured-editing.md",permalink:"/docs/structured-editing",sidebar:"docs",previous:{title:"Trace Driven Development",permalink:"/docs/trace-driven-development"},next:{title:"Error Handling",permalink:"/docs/error-handling"}},o=[{value:"Blanks",id:"blanks",children:[]},{value:"Types of Expressions",id:"types-of-expressions",children:[]},{value:"Nesting Expressions",id:"nesting-expressions",children:[{value:"Let Expressions",id:"let-expressions",children:[]},{value:"Conditional Expressions",id:"conditional-expressions",children:[]},{value:"Match Expressions",id:"match-expressions",children:[]},{value:"Pipelines",id:"pipelines",children:[]}]},{value:"Partials (Partially Completed Expressions)",id:"partials-partially-completed-expressions",children:[]},{value:"Comments",id:"comments",children:[]},{value:"Refactoring and editing code",id:"refactoring-and-editing-code",children:[{value:"Undo/redo",id:"undoredo",children:[]},{value:"Copy/paste",id:"copypaste",children:[]},{value:"Command Palette",id:"command-palette",children:[]}]}],p={rightToc:o};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Note: for now, Dark is only supported for Chrome with browser extensions\ndisabled.")),Object(r.b)("p",null,"At heart, Dark is an expression-oriented programming language. This aspect of\nDark enables powerful features like live values and trace-driven development.\nThis section introduces a simple way to think about the structure of Dark\nprograms within the editor."),Object(r.b)("p",null,"When writing code in Dark, you are building up expressions, relying heavily on\nautocomplete."),Object(r.b)("h2",{id:"blanks"},"Blanks"),Object(r.b)("p",null,"A blank expression acts as a placeholder where you can type to create a\ndifferent expression. The value of a blank expression is ",Object(r.b)("inlineCode",{parentName:"p"},"Incomplete"),", because\nit needs to be completed in order to be useful."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"assets/structuredediting/blank_example.png",alt:"Blank Example"}))),Object(r.b)("p",null,"Once a blank is filled in, it won't be a blank anymore:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"assets/structuredediting/filled_blank_example.png",alt:"Filled Blank Example"}))),Object(r.b)("p",null,"2 is an integer expression with the value 2."),Object(r.b)("h2",{id:"types-of-expressions"},"Types of Expressions"),Object(r.b)("p",null,"In addition to blanks, there are also many other types of expressions."),Object(r.b)("p",null,"Atomic Expressions include:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Integers (whole numbers like ",Object(r.b)("inlineCode",{parentName:"li"},"42"),")"),Object(r.b)("li",{parentName:"ul"},"Floats (numbers like ",Object(r.b)("inlineCode",{parentName:"li"},"1.5"),")"),Object(r.b)("li",{parentName:"ul"},"Strings (text in double quotes)"),Object(r.b)("li",{parentName:"ul"},"Bools (true and false)"),Object(r.b)("li",{parentName:"ul"},"null")),Object(r.b)("p",null,"There are also more complex expressions:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Lists"),Object(r.b)("li",{parentName:"ul"},"Dicts"),Object(r.b)("li",{parentName:"ul"},"Records"),Object(r.b)("li",{parentName:"ul"},"Functions"),Object(r.b)("li",{parentName:"ul"},"Conditionals"),Object(r.b)("li",{parentName:"ul"},"Matches")),Object(r.b)("p",null,"For more on the language features of each type of expression, visit the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"language"}),"Language Overview"),". Examples of how these expressions are used in the\neditor are below."),Object(r.b)("h2",{id:"nesting-expressions"},"Nesting Expressions"),Object(r.b)("p",null,"Expressions in Dark are nested. For example, a multiplication expression is a\ncompound expression with two sub-expressions as operands:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"assets/structuredediting/mul_diagram.png",alt:"Multiplication Diagram"}))),Object(r.b)("p",null,"Filling a blank with an expression with sub-parts introduces a new blank for\neach of them."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"assets/structuredediting/multiplication.png",alt:"Multiplication Diagram"}))),Object(r.b)("p",null,"In the expression 2 ","*"," 3, these sub-expressions are filled with the expressions\n2 and 3:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"assets/structuredediting/mul_expression.png",alt:"Multiplication Expression"}))),Object(r.b)("p",null,"The value of the expression ",Object(r.b)("inlineCode",{parentName:"p"},"2 * 3")," is ",Object(r.b)("inlineCode",{parentName:"p"},"6"),". This is equivalent to saying ",Object(r.b)("inlineCode",{parentName:"p"},"2 * 3"),"\nevaluates to ",Object(r.b)("inlineCode",{parentName:"p"},"6"),"."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"assets/structuredediting/mul_result.png",alt:"Multiplication Result"}))),Object(r.b)("p",null,"Since ",Object(r.b)("inlineCode",{parentName:"p"},"2 * 3")," is an expression, it can itself be a subexpression of a compound\nexpression. Consider the expression ",Object(r.b)("inlineCode",{parentName:"p"},"1 + 2 * 3"),", which has the value ",Object(r.b)("inlineCode",{parentName:"p"},"7"),". It is\na compound expression with a binary operator ",Object(r.b)("inlineCode",{parentName:"p"},"+")," and two subexpressions as\noperands: ",Object(r.b)("inlineCode",{parentName:"p"},"1")," and ",Object(r.b)("inlineCode",{parentName:"p"},"2 * 3"),"."),Object(r.b)("h3",{id:"let-expressions"},"Let Expressions"),Object(r.b)("p",null,"This nesting of expressions applies to all parts of the language, not just to\nmathematical expressions. When defining a variable in Dark, you use a let\nexpression, which has 3 parts: a variable name, a value (an expression!) bound\nto that variable, and a body (another expression!) within which you can use the\nname as an expression to stand in for the value:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"assets/structuredediting/let_diagram.png",alt:"Let Diagram"}))),Object(r.b)("p",null,"Here's a let with 3 blanks in Dark:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"assets/structuredediting/blanks_in_let_example.png",alt:"Blanks in Let"}))),Object(r.b)("h3",{id:"conditional-expressions"},"Conditional Expressions"),Object(r.b)("p",null,"If expressions have 3 parts: a boolean conditional expression and two branches,\na then and else expression. The value of the conditional expression determines\nwhether the then or else expression is evaluated. The value of the evaluated\nbranch becomes the value of the if expression as a whole."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"assets/structuredediting/if_diagram.png",alt:"If Diagram"}))),Object(r.b)("p",null,"Here's a conditional in Dark:\n",Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"assets/structuredediting/if_example.png",alt:"If Example"}))),Object(r.b)("h3",{id:"match-expressions"},"Match Expressions"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"match")," expressions provide conditional evaluation of one or more expression\nbranches. They may also introduce new variable bindings. Every match has a\nsingle value expression that is evaluated once and matched against one or more\npatterns. The first pattern that matches the evaluated value indicates the\nexpression to evaluate. The value of the evaluated expression becomes the value\nof the match as a whole."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"assets/structuredediting/match_diagram.png",alt:"Match Diagram"}))),Object(r.b)("h3",{id:"pipelines"},"Pipelines"),Object(r.b)("p",null,"Pipelines are a key part of the Dark language. They allow you to create a chain\nof expressions, where each chain is an input to the next expression in the\nsequence."),Object(r.b)("p",null,"To start one, select the code that has the result that you want to pipe, and hit\n",Object(r.b)("inlineCode",{parentName:"p"},"shift-enter")," or type ",Object(r.b)("inlineCode",{parentName:"p"},"|>"),"."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"assets/structuredediting/pipeline_example.png",alt:"assets/refactoring/Screen_Recording_2020-01-07_at_01.56_PM.gif"}))),Object(r.b)("h2",{id:"partials-partially-completed-expressions"},"Partials (Partially Completed Expressions)"),Object(r.b)("p",null,"While you are typing or deleting, you'll often see partially completed\nexpressions like this:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"assets/structuredediting/partial_example.png",alt:"Partial"}))),Object(r.b)("p",null,"The text in red is the partial, and the gray text behind it indicates what was\nthere before. Note that partials evaluate to whatever was there before:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"assets/structuredediting/partial_almost_filled.png",alt:"Partial"}))),Object(r.b)("p",null,"...until you complete them from the autocomplete:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"assets/structuredediting/partial_completed_example.png",alt:"Partial"}))),Object(r.b)("h2",{id:"comments"},"Comments"),Object(r.b)("p",null,"To add comments to your Dark code, start a line with ",Object(r.b)("inlineCode",{parentName:"p"},"let _ =")," and add a string\ncontaining the comment you'd like to include."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"assets/language/comment.png",alt:"Option Example"}))),Object(r.b)("h2",{id:"refactoring-and-editing-code"},"Refactoring and editing code"),Object(r.b)("h3",{id:"undoredo"},"Undo/redo"),Object(r.b)("p",null,"Dark supports unlimited undo/redo in a single element. Undo with\n",Object(r.b)("inlineCode",{parentName:"p"},"Ctrl-Z"),"/",Object(r.b)("inlineCode",{parentName:"p"},"Cmd-Z")," and redo with ",Object(r.b)("inlineCode",{parentName:"p"},"Ctrl-Shift-Z"),"/",Object(r.b)("inlineCode",{parentName:"p"},"Cmd-Shift-Z"),"."),Object(r.b)("h3",{id:"copypaste"},"Copy/paste"),Object(r.b)("p",null,"You can copy/paste selections, which is often used for refactoring."),Object(r.b)("p",null,"It may be helpful to note that copy/paste only works in Dark between handlers at\nthis time. Copying JSON from an external source will paste into your handlers in\nDark, but if you write code in the Dark language in your text editor of choice,\nthat code will not paste. We hope to improve this experience in the future."),Object(r.b)("h3",{id:"command-palette"},"Command Palette"),Object(r.b)("p",null,"If you\u2019re looking to do something that is not immediately available, chances are\nit\u2019s in the command palette (accessed by hitting ",Object(r.b)("inlineCode",{parentName:"p"},"ctrl-\\"),")."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"assets/refactoring/Screen_Shot_2020-01-07_at_1.40.42_PM.png",alt:"assets/refactoring/Screen_Shot_2020-01-07_at_1.40.42_PM.png"}))),Object(r.b)("p",null,"This includes the common refactoring tools:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Extract a function or variable for re-use"),Object(r.b)("li",{parentName:"ul"},"Create a type"),Object(r.b)("li",{parentName:"ul"},"Wrap the current expression in a let (insert let here)"),Object(r.b)("li",{parentName:"ul"},"Insert a let-expression above this one"),Object(r.b)("li",{parentName:"ul"},"Wrap an expression in an if, if-then, or if-else")),Object(r.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/A39iZCaqX-w",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}c.isMDXComponent=!0},243:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),c=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=c(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),b=c(n),d=a,m=b["".concat(s,".").concat(d)]||b[d]||u[d]||r;return n?i.a.createElement(m,l(l({ref:t},p),{},{components:n})):i.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<r;p++)s[p]=n[p];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);