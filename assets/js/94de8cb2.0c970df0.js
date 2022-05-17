"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9963],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return g}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),o=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=o(r),g=a,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return r?n.createElement(m,u(u({ref:t},l),{},{components:r})):n.createElement(m,u({ref:t},l))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,u=new Array(i);u[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,u[1]=c;for(var o=2;o<i;o++)u[o]=r[o];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3331:function(e,t,r){r.r(t),r.d(t,{default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return o}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),u=["components"],c={id:"structuring-reducers",title:"Structuring Reducers",description:"Structuring Reducers > Intro: overview and contents"},s={unversionedId:"usage/structuring-reducers/structuring-reducers",id:"usage/structuring-reducers/structuring-reducers",isDocsHomePage:!1,title:"Structuring Reducers",description:"Structuring Reducers > Intro: overview and contents",source:"@site/../docs/usage/structuring-reducers/StructuringReducers.md",sourceDirName:"usage/structuring-reducers",slug:"/usage/structuring-reducers/structuring-reducers",permalink:"/usage/structuring-reducers/structuring-reducers",version:"current",frontMatter:{id:"structuring-reducers",title:"Structuring Reducers",description:"Structuring Reducers > Intro: overview and contents"}},o=[{value:"Prerequisite Concepts for Writing Reducers",id:"prerequisite-concepts-for-writing-reducers",children:[]},{value:"Reducer Concepts and Techniques",id:"reducer-concepts-and-techniques",children:[]}],l={toc:o};function d(e){var t=e.components,r=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'At its core, Redux is really a fairly simple design pattern: all your "write" logic goes into a single function, and the only way to run that logic is to give Redux a plain object that describes something that has happened. The Redux store calls that write logic function and passes in the current state tree and the descriptive object, the write logic function returns some new state tree, and the Redux store notifies any subscribers that the state tree has changed.'),(0,i.kt)("p",null,"Redux puts some basic constraints on how that write logic function should work. As described in ",(0,i.kt)("a",{parentName:"p",href:"/tutorials/fundamentals/part-3-state-actions-reducers"},'"Redux Fundamentals" Part 3: State, Actions, and Reducers'),", it has to have a signature of ",(0,i.kt)("inlineCode",{parentName:"p"},"(previousState, action) => newState"),", is known as a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"reducer function")),", and must be ",(0,i.kt)("em",{parentName:"p"},"pure")," and predictable."),(0,i.kt)("p",null,"Beyond that, Redux does not really care how you actually structure your logic inside that reducer function, as long as it obeys those basic rules. This is both a source of freedom and a source of confusion. However, there are a number of common patterns that are widely used when writing reducers, as well as a number of related topics and concepts to be aware of. As an application grows, these patterns play a crucial role in managing reducer code complexity, handling real-world data, and optimizing UI performance."),(0,i.kt)("h3",{id:"prerequisite-concepts-for-writing-reducers"},"Prerequisite Concepts for Writing Reducers"),(0,i.kt)("p",null,"Some of these concepts are already described elsewhere in the Redux documentation. Others are generic and applicable outside of Redux itself, and there are numerous existing articles that cover these concepts in detail. These concepts and techniques form the foundation of writing solid Redux reducer logic."),(0,i.kt)("p",null,"It is vital that these Prerequisite Concepts are ",(0,i.kt)("strong",{parentName:"p"},"thoroughly understood")," before moving on to more advanced and Redux-specific techniques. A recommended reading list is available at:"),(0,i.kt)("h4",{id:"prerequisite-concepts"},(0,i.kt)("a",{parentName:"h4",href:"/usage/structuring-reducers/prerequisite-concepts"},"Prerequisite Concepts")),(0,i.kt)("p",null,"Standard Redux architecture relies on using plain JS objects and arrays for your state. If you're using an alternate approach for some reason, the details may differ based on your approach, but many of the principles will still apply."),(0,i.kt)("h3",{id:"reducer-concepts-and-techniques"},"Reducer Concepts and Techniques"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/usage/structuring-reducers/basic-reducer-structure"},"Basic Reducer Structure")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/usage/structuring-reducers/splitting-reducer-logic"},"Splitting Reducer Logic")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/usage/structuring-reducers/refactoring-reducer-example"},"Refactoring Reducers Example")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/usage/structuring-reducers/using-combinereducers"},"Using ",(0,i.kt)("inlineCode",{parentName:"a"},"combineReducers"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/usage/structuring-reducers/beyond-combinereducers"},"Beyond ",(0,i.kt)("inlineCode",{parentName:"a"},"combineReducers"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/usage/structuring-reducers/normalizing-state-shape"},"Normalizing State Shape")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/usage/structuring-reducers/updating-normalized-data"},"Updating Normalized Data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/usage/structuring-reducers/reusing-reducer-logic"},"Reusing Reducer Logic")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/usage/structuring-reducers/immutable-update-patterns"},"Immutable Update Patterns")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/usage/structuring-reducers/initializing-state"},"Initializing State"))))}d.isMDXComponent=!0}}]);