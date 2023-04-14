"use strict";(self.webpackChunkcodecookbook=self.webpackChunkcodecookbook||[]).push([[585],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(a),h=r,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5186:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var n=a(7462),r=a(7294),o=a(3905);const i=e=>{let{slug:t}=e;return r.createElement("div",null,r.createElement("div",{className:"gumroad-product-embed"},r.createElement("a",{href:`https://8520699716163.gumroad.com/l/${t}`},"Loading...")))},s={sidebar_position:1},l="Username & Password Auth",d={unversionedId:"users-auth/auth-database",id:"users-auth/auth-database",title:"Username & Password Auth",description:"This recipe will show you how register users, save hashed and salted passwords in a database and issue JWTs that the frontend can use for subsequent requests.",source:"@site/recipes/users-auth/auth-database.mdx",sourceDirName:"users-auth",slug:"/users-auth/auth-database",permalink:"/recipes/users-auth/auth-database",draft:!1,editUrl:"https://github.com/code-cookbook/code-cookbook.github.io/tree/main/recipes/users-auth/auth-database.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"recipeSidebar",previous:{title:"Users & Auth",permalink:"/recipes/category/users--auth"}},u={},p=[{value:"Ingredients",id:"ingredients",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Endpoints",id:"endpoints",level:3},{value:"Tables",id:"tables",level:3},{value:"Method",id:"method",level:2},{value:"Registration endpoint",id:"registration-endpoint",level:3},{value:"Request Body",id:"request-body",level:4},{value:"Logic",id:"logic",level:4},{value:"Response Body",id:"response-body",level:4},{value:"Login Endpoint",id:"login-endpoint",level:3},{value:"Request Body",id:"request-body-1",level:4},{value:"Logic",id:"logic-1",level:4},{value:"Response Body",id:"response-body-1",level:4},{value:"Protected Endpoints",id:"protected-endpoints",level:3},{value:"Request Headers",id:"request-headers",level:4},{value:"Logic",id:"logic-2",level:4},{value:"Ready-Made Code",id:"ready-made-code",level:2}],c={toc:p},h="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"username--password-auth"},"Username & Password Auth"),(0,o.kt)("p",null,"This recipe will show you how register users, save hashed and salted passwords in a database and issue JWTs that the frontend can use for subsequent requests."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Looking for complete code samples? Check the ",(0,o.kt)("a",{parentName:"p",href:"#ready-made-code"},"ready made code")," section!")),(0,o.kt)("h2",{id:"ingredients"},"Ingredients"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Crypto library for hashing passwords"),(0,o.kt)("li",{parentName:"ol"},"JWT library for generating JSON web tokens")),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("h3",{id:"endpoints"},"Endpoints"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Method"),(0,o.kt)("th",{parentName:"tr",align:null},"Path"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"POST"),(0,o.kt)("td",{parentName:"tr",align:null},"/users"),(0,o.kt)("td",{parentName:"tr",align:null},"Register a new user")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"POST"),(0,o.kt)("td",{parentName:"tr",align:null},"/auth/login"),(0,o.kt)("td",{parentName:"tr",align:null},"Validates the email/password and returns a JWT")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GET"),(0,o.kt)("td",{parentName:"tr",align:null},"/me"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns the current user's details, only if logged in")))),(0,o.kt)("h3",{id:"tables"},"Tables"),(0,o.kt)("mermaid",{value:"erDiagram\n  User {\n      int id PK\n      string email\n      string firstName\n      string lastName\n      string password\n      string createdAt\n      string updatedAt\n  }\n"}),(0,o.kt)("h2",{id:"method"},"Method"),(0,o.kt)("h3",{id:"registration-endpoint"},"Registration endpoint"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /users")," endpoint is where user accounts will be registered. It accepts a body that should contain all user information necessary to create an account, including the email and password."),(0,o.kt)("h4",{id:"request-body"},"Request Body"),(0,o.kt)("p",null,"The request body can contain as few or as many fields as required for your use case. You may wish to omit the first and last names, for example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ \n  "firstName": "Fred",\n  "lastName": "Smith",\n  "email": "fred@codecookbook.io",\n  "password": "MyS3cureP@assword#"\n}\n')),(0,o.kt)("h4",{id:"logic"},"Logic"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Ensure all provided fields are valid (including password requirements)"),(0,o.kt)("li",{parentName:"ol"},"Hash and salt the provided password"),(0,o.kt)("li",{parentName:"ol"},"Save the information to the User database table"),(0,o.kt)("li",{parentName:"ol"},"Return the newly created user information")),(0,o.kt)("h4",{id:"response-body"},"Response Body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 1234,\n  "firstName": "Fred",\n  "lastName": "Smith",\n  "email": "fred@codecookbook.io",\n  "createdAt": "2023-04-12T20:07:22.115Z",\n  "updatedAt": "2023-04-12T20:07:22.115Z"\n}\n')),(0,o.kt)("h3",{id:"login-endpoint"},"Login Endpoint"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /auth/login")," endpoint accepts the user's credentials and returns a JSON web token (JWT) which should be stored by the client for subsequent requests."),(0,o.kt)("h4",{id:"request-body-1"},"Request Body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "email": "fred@codecookbook.io",\n  "password": "MyS3cureP@assword#"\n}\n')),(0,o.kt)("h4",{id:"logic-1"},"Logic"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Look up the user in the database based on the ",(0,o.kt)("inlineCode",{parentName:"li"},"email")," field",(0,o.kt)("br",{parentName:"li"}),"a. Check the user exists",(0,o.kt)("br",{parentName:"li"}),"b. Use the bcrypt library to compare the provided password to the hashed password saved in the database"),(0,o.kt)("li",{parentName:"ol"},"Generate a JWT, providing the user's ID as the ",(0,o.kt)("inlineCode",{parentName:"li"},"sub")," field"),(0,o.kt)("li",{parentName:"ol"},"Return the JWT to the client along with the user's information")),(0,o.kt)("h4",{id:"response-body-1"},"Response Body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",\n  "user": {\n    {\n      "id": 1234,\n      "firstName": "Fred",\n      "lastName": "Smith",\n      "email": "fred@codecookbook.io",\n      "createdAt": "2023-04-12T20:07:22.115Z",\n      "updatedAt": "2023-04-12T20:07:22.115Z"\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"protected-endpoints"},"Protected Endpoints"),(0,o.kt)("p",null,"In this example we will create an endpoint called ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /users/:id")," which will return the specified user's details, but only if a valid JWT is provided and the ",(0,o.kt)("inlineCode",{parentName:"p"},"sub")," field matches the user ID requested. In other words, a user shouldn't be able to view another user's details."),(0,o.kt)("h4",{id:"request-headers"},"Request Headers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\n")),(0,o.kt)("h4",{id:"logic-2"},"Logic"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Verify the ",(0,o.kt)("inlineCode",{parentName:"li"},"Authorization")," header has been provided"),(0,o.kt)("li",{parentName:"ol"},"Use the JWT library to validate the provided token"),(0,o.kt)("li",{parentName:"ol"},"Get the user based on the ",(0,o.kt)("inlineCode",{parentName:"li"},"sub")," property extracted from the token (the user ID)"),(0,o.kt)("li",{parentName:"ol"},"Throw an unauthorized exception if any of the above fails")),(0,o.kt)("h2",{id:"ready-made-code"},"Ready-Made Code"),(0,o.kt)("p",null,"Download this recipe as a complete application!  "),(0,o.kt)(i,{slug:"username-password-auth-nest",mdxType:"GumroadEmbed"}))}m.isMDXComponent=!0}}]);