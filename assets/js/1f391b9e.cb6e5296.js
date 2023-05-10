"use strict";(self.webpackChunkcodecookbook=self.webpackChunkcodecookbook||[]).push([[85],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var n=t(7294);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,c=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(t),m=c,d=f["".concat(i,".").concat(m)]||f[m]||p[m]||a;return t?n.createElement(d,o(o({ref:r},s),{},{components:t})):n.createElement(d,o({ref:r},s))}));function d(e,r){var t=arguments,c=r&&r.mdxType;if("string"==typeof e||c){var a=t.length,o=new Array(a);o[0]=m;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u[f]="string"==typeof e?e:c,o[1]=u;for(var l=2;l<a;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4247:(e,r,t)=>{t.r(r),t.d(r,{default:()=>f});var n=t(7294),c=t(6010),a=t(1944),o=t(5281),u=t(1155),i=t(8905),l=t(9407);const s={mdxPageWrapper:"mdxPageWrapper_j9I6"};function f(e){const{content:r}=e,{metadata:{title:t,description:f,frontMatter:p}}=r,{wrapperClassName:m,hide_table_of_contents:d}=p;return n.createElement(a.FG,{className:(0,c.Z)(m??o.k.wrapper.mdxPages,o.k.page.mdxPage)},n.createElement(a.d,{title:t,description:f}),n.createElement(u.Z,null,n.createElement("main",{className:"container container--fluid margin-vert--lg"},n.createElement("div",{className:(0,c.Z)("row",s.mdxPageWrapper)},n.createElement("div",{className:(0,c.Z)("col",!d&&"col--8")},n.createElement("article",null,n.createElement(i.Z,null,n.createElement(r,null)))),!d&&r.toc.length>0&&n.createElement("div",{className:"col col--2"},n.createElement(l.Z,{toc:r.toc,minHeadingLevel:p.toc_min_heading_level,maxHeadingLevel:p.toc_max_heading_level}))))))}},7563:(e,r,t)=>{t.d(r,{Ab:()=>o,Fr:()=>u,G$:()=>a,K$:()=>l,MS:()=>n,h5:()=>i,lK:()=>s,uj:()=>c});var n="-ms-",c="-moz-",a="-webkit-",o="comm",u="rule",i="decl",l="@import",s="@keyframes"},2190:(e,r,t)=>{t.d(r,{MY:()=>o});var n=t(7563),c=t(6686),a=t(6411);function o(e){return(0,a.cE)(u("",null,null,null,[""],e=(0,a.un)(e),0,[0],e))}function u(e,r,t,n,o,f,p,m,d){for(var b=0,v=0,g=p,h=0,y=0,O=0,k=1,w=1,E=1,j=0,x="",P=o,C=f,F=n,_=x;w;)switch(O=j,j=(0,a.lp)()){case 40:if(108!=O&&58==(0,c.uO)(_,g-1)){-1!=(0,c.Cw)(_+=(0,c.gx)((0,a.iF)(j),"&","&\f"),"&\f")&&(E=-1);break}case 34:case 39:case 91:_+=(0,a.iF)(j);break;case 9:case 10:case 13:case 32:_+=(0,a.Qb)(O);break;case 92:_+=(0,a.kq)((0,a.Ud)()-1,7);continue;case 47:switch((0,a.fj)()){case 42:case 47:(0,c.R3)(l((0,a.q6)((0,a.lp)(),(0,a.Ud)()),r,t),d);break;default:_+="/"}break;case 123*k:m[b++]=(0,c.to)(_)*E;case 125*k:case 59:case 0:switch(j){case 0:case 125:w=0;case 59+v:y>0&&(0,c.to)(_)-g&&(0,c.R3)(y>32?s(_+";",n,t,g-1):s((0,c.gx)(_," ","")+";",n,t,g-2),d);break;case 59:_+=";";default:if((0,c.R3)(F=i(_,r,t,b,v,o,m,x,P=[],C=[],g),f),123===j)if(0===v)u(_,r,F,F,P,f,g,m,C);else switch(99===h&&110===(0,c.uO)(_,3)?100:h){case 100:case 109:case 115:u(e,F,F,n&&(0,c.R3)(i(e,F,F,0,0,o,m,x,o,P=[],g),C),o,C,g,m,n?P:C);break;default:u(_,F,F,F,[""],C,0,m,C)}}b=v=y=0,k=E=1,x=_="",g=p;break;case 58:g=1+(0,c.to)(_),y=O;default:if(k<1)if(123==j)--k;else if(125==j&&0==k++&&125==(0,a.mp)())continue;switch(_+=(0,c.Dp)(j),j*k){case 38:E=v>0?1:(_+="\f",-1);break;case 44:m[b++]=((0,c.to)(_)-1)*E,E=1;break;case 64:45===(0,a.fj)()&&(_+=(0,a.iF)((0,a.lp)())),h=(0,a.fj)(),v=g=(0,c.to)(x=_+=(0,a.QU)((0,a.Ud)())),j++;break;case 45:45===O&&2==(0,c.to)(_)&&(k=0)}}return f}function i(e,r,t,o,u,i,l,s,f,p,m){for(var d=u-1,b=0===u?i:[""],v=(0,c.Ei)(b),g=0,h=0,y=0;g<o;++g)for(var O=0,k=(0,c.tb)(e,d+1,d=(0,c.Wn)(h=l[g])),w=e;O<v;++O)(w=(0,c.fy)(h>0?b[O]+" "+k:(0,c.gx)(k,/&\f/g,b[O])))&&(f[y++]=w);return(0,a.dH)(e,r,t,0===u?n.Fr:s,f,p,m)}function l(e,r,t){return(0,a.dH)(e,r,t,n.Ab,(0,c.Dp)((0,a.Tb)()),(0,c.tb)(e,2,-2),0)}function s(e,r,t,o){return(0,a.dH)(e,r,t,n.h5,(0,c.tb)(e,0,o),(0,c.tb)(e,o+1,-1),o)}},211:(e,r,t)=>{t.d(r,{P:()=>o,q:()=>a});var n=t(7563),c=t(6686);function a(e,r){for(var t="",n=(0,c.Ei)(e),a=0;a<n;a++)t+=r(e[a],a,e,r)||"";return t}function o(e,r,t,o){switch(e.type){case n.K$:case n.h5:return e.return=e.return||e.value;case n.Ab:return"";case n.lK:return e.return=e.value+"{"+a(e.children,o)+"}";case n.Fr:e.value=e.props.join(",")}return(0,c.to)(t=a(e.children,o))?e.return=e.value+"{"+t+"}":""}},6411:(e,r,t)=>{t.d(r,{FK:()=>u,JG:()=>f,QU:()=>P,Qb:()=>w,Tb:()=>p,Ud:()=>v,cE:()=>O,dH:()=>s,fj:()=>b,iF:()=>k,kq:()=>E,lp:()=>d,mp:()=>m,q6:()=>x,r:()=>h,tP:()=>g,un:()=>y});var n=t(6686),c=1,a=1,o=0,u=0,i=0,l="";function s(e,r,t,n,o,u,i){return{value:e,root:r,parent:t,type:n,props:o,children:u,line:c,column:a,length:i,return:""}}function f(e,r){return(0,n.f0)(s("",null,null,"",null,null,0),e,{length:-e.length},r)}function p(){return i}function m(){return i=u>0?(0,n.uO)(l,--u):0,a--,10===i&&(a=1,c--),i}function d(){return i=u<o?(0,n.uO)(l,u++):0,a++,10===i&&(a=1,c++),i}function b(){return(0,n.uO)(l,u)}function v(){return u}function g(e,r){return(0,n.tb)(l,e,r)}function h(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function y(e){return c=a=1,o=(0,n.to)(l=e),u=0,[]}function O(e){return l="",e}function k(e){return(0,n.fy)(g(u-1,j(91===e?e+2:40===e?e+1:e)))}function w(e){for(;(i=b())&&i<33;)d();return h(e)>2||h(i)>3?"":" "}function E(e,r){for(;--r&&d()&&!(i<48||i>102||i>57&&i<65||i>70&&i<97););return g(e,v()+(r<6&&32==b()&&32==d()))}function j(e){for(;d();)switch(i){case e:return u;case 34:case 39:34!==e&&39!==e&&j(i);break;case 40:41===e&&j(e);break;case 92:d()}return u}function x(e,r){for(;d()&&e+i!==57&&(e+i!==84||47!==b()););return"/*"+g(r,u-1)+"*"+(0,n.Dp)(47===e?e:d())}function P(e){for(;!h(b());)d();return g(e,u)}},6686:(e,r,t)=>{t.d(r,{$e:()=>v,Cw:()=>s,Dp:()=>c,EQ:()=>i,Ei:()=>d,R3:()=>b,Wn:()=>n,f0:()=>a,fy:()=>u,gx:()=>l,tb:()=>p,to:()=>m,uO:()=>f,vp:()=>o});var n=Math.abs,c=String.fromCharCode,a=Object.assign;function o(e,r){return 45^f(e,0)?(((r<<2^f(e,0))<<2^f(e,1))<<2^f(e,2))<<2^f(e,3):0}function u(e){return e.trim()}function i(e,r){return(e=r.exec(e))?e[0]:e}function l(e,r,t){return e.replace(r,t)}function s(e,r){return e.indexOf(r)}function f(e,r){return 0|e.charCodeAt(r)}function p(e,r,t){return e.slice(r,t)}function m(e){return e.length}function d(e){return e.length}function b(e,r){return r.push(e),e}function v(e,r){return e.map(r).join("")}}}]);