(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[97850],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return k}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),o=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=o(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=o(t),k=r,d=c["".concat(s,".").concat(k)]||c[k]||m[k]||l;return t?a.createElement(d,p(p({ref:n},u),{},{components:t})):a.createElement(d,p({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var o=2;o<l;o++)p[o]=t[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},50918:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return s},default:function(){return u}});var a=t(22122),r=t(19756),l=(t(67294),t(3905)),p={title:"GitOps \u4ea4\u4ed8"},i={unversionedId:"case-studies/gitops",id:"case-studies/gitops",isDocsHomePage:!1,title:"GitOps \u4ea4\u4ed8",description:"\u672c\u6848\u4f8b\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728 GitOps \u573a\u666f\u4e0b\u4f7f\u7528 KubeVela\uff0c\u5e76\u4ecb\u7ecd\u8fd9\u6837\u505a\u7684\u597d\u5904\u662f\u4ec0\u4e48\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/case-studies/gitops.md",sourceDirName:"case-studies",slug:"/case-studies/gitops",permalink:"/zh/docs/next/case-studies/gitops",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/case-studies/gitops.md",version:"current",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1642055446,formattedLastUpdatedAt:"2022/1/13",frontMatter:{title:"GitOps \u4ea4\u4ed8"},sidebar:"docs",previous:{title:"\u5728\u6301\u7eed\u4ea4\u4ed8\u4e2d\u96c6\u6210\u955c\u50cf\u4ed3\u5e93",permalink:"/zh/docs/next/tutorials/trigger"},next:{title:"\u7ba1\u7406\u5e94\u7528\u5de5\u4f5c\u6d41",permalink:"/zh/docs/next/tutorials/workflows"}},s=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[]},{value:"\u9762\u5411\u5e73\u53f0\u7ba1\u7406\u5458/\u8fd0\u7ef4\u4eba\u5458\u7684\u4ea4\u4ed8",id:"\u9762\u5411\u5e73\u53f0\u7ba1\u7406\u5458\u8fd0\u7ef4\u4eba\u5458\u7684\u4ea4\u4ed8",children:[{value:"\u51c6\u5907\u914d\u7f6e\u4ed3\u5e93",id:"\u51c6\u5907\u914d\u7f6e\u4ed3\u5e93",children:[]},{value:"\u4fee\u6539\u914d\u7f6e",id:"\u4fee\u6539\u914d\u7f6e",children:[]}]},{value:"\u9762\u5411\u7ec8\u7aef\u5f00\u53d1\u8005\u7684\u4ea4\u4ed8",id:"\u9762\u5411\u7ec8\u7aef\u5f00\u53d1\u8005\u7684\u4ea4\u4ed8",children:[{value:"\u51c6\u5907\u4ee3\u7801\u4ed3\u5e93",id:"\u51c6\u5907\u4ee3\u7801\u4ed3\u5e93",children:[]},{value:"\u914d\u7f6e\u79d8\u94a5\u4fe1\u606f",id:"\u914d\u7f6e\u79d8\u94a5\u4fe1\u606f",children:[]},{value:"\u51c6\u5907\u914d\u7f6e\u4ed3\u5e93",id:"\u51c6\u5907\u914d\u7f6e\u4ed3\u5e93-1",children:[]},{value:"\u4fee\u6539\u4ee3\u7801",id:"\u4fee\u6539\u4ee3\u7801",children:[]}]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],o={toc:s};function u(e){var n=e.components,p=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},o,p,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u6848\u4f8b\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728 GitOps \u573a\u666f\u4e0b\u4f7f\u7528 KubeVela\uff0c\u5e76\u4ecb\u7ecd\u8fd9\u6837\u505a\u7684\u597d\u5904\u662f\u4ec0\u4e48\u3002"),(0,l.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("p",null,"GitOps \u662f\u4e00\u79cd\u73b0\u4ee3\u5316\u7684\u6301\u7eed\u4ea4\u4ed8\u624b\u6bb5\uff0c\u5b83\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u901a\u8fc7\u76f4\u63a5\u66f4\u6539 Git \u4ed3\u5e93\u4e2d\u7684\u4ee3\u7801\u548c\u914d\u7f6e\u6765\u81ea\u52a8\u90e8\u7f72\u5e94\u7528\uff0c\u5728\u63d0\u9ad8\u90e8\u7f72\u751f\u4ea7\u529b\u7684\u540c\u65f6\u4e5f\u901a\u8fc7\u5206\u652f\u56de\u6eda\u7b49\u80fd\u529b\u63d0\u9ad8\u4e86\u53ef\u9760\u6027\u3002\u5176\u5177\u4f53\u7684\u597d\u5904\u53ef\u4ee5\u67e5\u770b",(0,l.kt)("a",{parentName:"p",href:"https://www.weave.works/blog/what-is-gitops-really"},"\u8fd9\u7bc7\u6587\u7ae0"),"\uff0c\u672c\u6587\u5c06\u4e0d\u518d\u8d58\u8ff0\u3002"),(0,l.kt)("p",null,"KubeVela \u4f5c\u4e3a\u4e00\u4e2a\u58f0\u660e\u5f0f\u7684\u5e94\u7528\u4ea4\u4ed8\u63a7\u5236\u5e73\u9762\uff0c\u5929\u7136\u5c31\u53ef\u4ee5\u4ee5 GitOps \u7684\u65b9\u5f0f\u8fdb\u884c\u4f7f\u7528\uff0c\u5e76\u4e14\u8fd9\u6837\u505a\u4f1a\u5728 GitOps \u7684\u57fa\u7840\u4e0a\u4e3a\u7528\u6237\u63d0\u4f9b\u66f4\u591a\u7684\u76ca\u5904\u548c\u7aef\u5230\u7aef\u7684\u4f53\u9a8c\uff0c\u5305\u62ec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5e94\u7528\u4ea4\u4ed8\u5de5\u4f5c\u6d41\uff08CD \u6d41\u6c34\u7ebf\uff09",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5373\uff1aKubeVela \u652f\u6301\u5728 GitOps \u6a21\u5f0f\u4e2d\u63cf\u8ff0\u8fc7\u7a0b\u5f0f\u7684\u5e94\u7528\u4ea4\u4ed8\uff0c\u800c\u4e0d\u53ea\u662f\u7b80\u5355\u7684\u58f0\u660e\u7ec8\u6001\uff1b"))),(0,l.kt)("li",{parentName:"ul"},"\u5904\u7406\u90e8\u7f72\u8fc7\u7a0b\u4e2d\u7684\u5404\u79cd\u4f9d\u8d56\u5173\u7cfb\u548c\u62d3\u6251\u7ed3\u6784\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u73b0\u6709\u5404\u79cd GitOps \u5de5\u5177\u7684\u8bed\u4e49\u4e4b\u4e0a\u63d0\u4f9b\u7edf\u4e00\u7684\u4e0a\u5c42\u62bd\u8c61\uff0c\u7b80\u5316\u5e94\u7528\u4ea4\u4ed8\u4e0e\u7ba1\u7406\u8fc7\u7a0b\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u7edf\u4e00\u8fdb\u884c\u4e91\u670d\u52a1\u7684\u58f0\u660e\u3001\u90e8\u7f72\u548c\u670d\u52a1\u7ed1\u5b9a\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u7684\u4ea4\u4ed8\u7b56\u7565\uff08\u91d1\u4e1d\u96c0\u3001\u84dd\u7eff\u53d1\u5e03\u7b49\uff09\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u7684\u6df7\u5408\u4e91/\u591a\u4e91\u90e8\u7f72\u7b56\u7565\uff08\u653e\u7f6e\u89c4\u5219\u3001\u96c6\u7fa4\u8fc7\u6ee4\u89c4\u5219\u7b49\uff09\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u591a\u73af\u5883\u4ea4\u4ed8\u4e2d\u63d0\u4f9b Kustomize \u98ce\u683c\u7684 Patch \u6765\u63cf\u8ff0\u90e8\u7f72\u5dee\u5f02\uff0c\u800c\u65e0\u9700\u5b66\u4e60\u4efb\u4f55 Kustomize \u672c\u8eab\u7684\u7ec6\u8282\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u2026\u2026 \u4ee5\u53ca\u66f4\u591a\u3002")),(0,l.kt)("p",null,"\u5728\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u4e3b\u8981\u8bb2\u89e3\u76f4\u63a5\u4f7f\u7528 KubeVela \u5728 GitOps \u6a21\u5f0f\u4e0b\u8fdb\u884c\u4ea4\u4ed8\u7684\u6b65\u9aa4\u3002"),(0,l.kt)("p",null,"\u4ea4\u4ed8\u7684\u9762\u5411\u4eba\u5458\u6709\u4ee5\u4e0b\u4e24\u79cd\uff0c\u6211\u4eec\u5c06\u5206\u522b\u4ecb\u7ecd\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u9762\u5411\u5e73\u53f0\u7ba1\u7406\u5458/\u8fd0\u7ef4\u4eba\u5458\u7684\u57fa\u7840\u8bbe\u65bd\u4ea4\u4ed8\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u76f4\u63a5\u66f4\u65b0\u4ed3\u5e93\u4e2d\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u4ece\u800c\u66f4\u65b0\u96c6\u7fa4\u4e2d\u7684\u57fa\u7840\u8bbe\u65bd\u914d\u7f6e\uff0c\u5982\u7cfb\u7edf\u7684\u4f9d\u8d56\u8f6f\u4ef6\u3001\u5b89\u5168\u7b56\u7565\u3001\u5b58\u50a8\u3001\u7f51\u7edc\u7b49\u57fa\u7840\u8bbe\u65bd\u914d\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u9762\u5411\u7ec8\u7aef\u5f00\u53d1\u8005\u7684\u4ea4\u4ed8\uff0c\u7528\u6237\u7684\u4ee3\u7801\u4e00\u65e6\u5408\u5e76\u5230\u5e94\u7528\u4ee3\u7801\u4ed3\u5e93\uff0c\u5c31\u81ea\u52a8\u5316\u89e6\u53d1\u96c6\u7fa4\u4e2d\u5e94\u7528\u7684\u66f4\u65b0\uff0c\u53ef\u4ee5\u66f4\u9ad8\u6548\u7684\u5b8c\u6210\u5e94\u7528\u7684\u8fed\u4ee3\uff0c\u4e0e KubeVela \u7684\u7070\u5ea6\u53d1\u5e03\u3001\u6d41\u91cf\u8c03\u62e8\u3001\u591a\u96c6\u7fa4\u90e8\u7f72\u7b49\u529f\u80fd\u7ed3\u5408\u53ef\u4ee5\u5f62\u6210\u66f4\u4e3a\u5f3a\u5927\u7684\u81ea\u52a8\u5316\u53d1\u5e03\u80fd\u529b\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u63d0\u793a\uff1a\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u7c7b\u4f3c\u7684\u6b65\u9aa4\u4f7f\u7528 ArgoCD \u7b49 GitOps \u5de5\u5177\u6765\u95f4\u63a5\u4f7f\u7528 KubeVela\uff0c\u7ec6\u8282\u7684\u64cd\u4f5c\u6587\u6863\u6211\u4eec\u4f1a\u5728\u540e\u7eed\u53d1\u5e03\u4e2d\u63d0\u4f9b\u3002")),(0,l.kt)("h2",{id:"\u9762\u5411\u5e73\u53f0\u7ba1\u7406\u5458\u8fd0\u7ef4\u4eba\u5458\u7684\u4ea4\u4ed8"},"\u9762\u5411\u5e73\u53f0\u7ba1\u7406\u5458/\u8fd0\u7ef4\u4eba\u5458\u7684\u4ea4\u4ed8"),(0,l.kt)("p",null,"\u5982\u56fe\u6240\u793a\uff0c\u5bf9\u4e8e\u5e73\u53f0\u7ba1\u7406\u5458/\u8fd0\u7ef4\u4eba\u5458\u800c\u8a00\uff0c\u4ed6\u4eec\u5e76\u4e0d\u9700\u8981\u5173\u5fc3\u5e94\u7528\u7684\u4ee3\u7801\uff0c\u6240\u4ee5\u53ea\u9700\u8981\u51c6\u5907\u4e00\u4e2a Git \u914d\u7f6e\u4ed3\u5e93\u5e76\u90e8\u7f72 KubeVela \u914d\u7f6e\u6587\u4ef6\uff0c\u540e\u7eed\u5bf9\u4e8e\u5e94\u7528\u53ca\u57fa\u7840\u8bbe\u65bd\u7684\u914d\u7f6e\u53d8\u52a8\uff0c\u4fbf\u53ef\u901a\u8fc7\u76f4\u63a5\u66f4\u65b0 Git \u914d\u7f6e\u4ed3\u5e93\u6765\u5b8c\u6210\uff0c\u4f7f\u5f97\u6bcf\u4e00\u6b21\u914d\u7f6e\u53d8\u66f4\u53ef\u8ffd\u8e2a\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"alt",src:t(30767).Z})),(0,l.kt)("h3",{id:"\u51c6\u5907\u914d\u7f6e\u4ed3\u5e93"},"\u51c6\u5907\u914d\u7f6e\u4ed3\u5e93"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5177\u4f53\u7684\u914d\u7f6e\u53ef\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/samples/tree/master/9.GitOps_Demo/for-SREs"},"\u793a\u4f8b\u4ed3\u5e93"),"\u3002")),(0,l.kt)("p",null,"\u5728\u672c\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u90e8\u7f72\u4e00\u4e2a MySQL \u6570\u636e\u5e93\u8f6f\u4ef6\u4f5c\u4e3a\u9879\u76ee\u7684\u57fa\u7840\u8bbe\u65bd\uff0c\u540c\u65f6\u90e8\u7f72\u4e00\u4e2a\u4e1a\u52a1\u5e94\u7528\uff0c\u4f7f\u7528\u8fd9\u4e2a\u6570\u636e\u5e93\u3002\u914d\u7f6e\u4ed3\u5e93\u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clusters/")," \u4e2d\u5305\u542b\u96c6\u7fa4\u4e2d\u7684 KubeVela GitOps \u914d\u7f6e\uff0c\u7528\u6237\u9700\u8981\u5c06 ",(0,l.kt)("inlineCode",{parentName:"li"},"clusters/")," \u4e2d\u7684\u6587\u4ef6\u624b\u52a8\u90e8\u7f72\u5230\u96c6\u7fa4\u4e2d\u3002\u8fd9\u4e2a\u662f\u4e00\u6b21\u6027\u7684\u7ba1\u63a7\u64cd\u4f5c\uff0c\u6267\u884c\u5b8c\u6210\u540e\uff0cKubeVela \u4fbf\u80fd\u81ea\u52a8\u76d1\u542c\u914d\u7f6e\u4ed3\u5e93\u4e2d\u7684\u6587\u4ef6\u53d8\u52a8\u4e14\u81ea\u52a8\u66f4\u65b0\u96c6\u7fa4\u4e2d\u7684\u914d\u7f6e\u3002\u5176\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"clusters/apps.yaml")," \u5c06\u76d1\u542c ",(0,l.kt)("inlineCode",{parentName:"li"},"apps/")," \u4e0b\u6240\u6709\u5e94\u7528\u7684\u53d8\u5316\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"clusters/infra.yaml")," \u5c06\u76d1\u542c ",(0,l.kt)("inlineCode",{parentName:"li"},"infrastructure/")," \u4e0b\u6240\u6709\u57fa\u7840\u8bbe\u65bd\u7684\u53d8\u5316\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"apps/")," \u76ee\u5f55\u4e2d\u5305\u542b\u4e1a\u52a1\u5e94\u7528\u7684\u6240\u6709\u914d\u7f6e\uff0c\u5728\u672c\u4f8b\u4e2d\u4e3a\u4e00\u4e2a\u4f7f\u7528\u6570\u636e\u5e93\u7684\u4e1a\u52a1\u5e94\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"infrastructure/")," \u4e2d\u5305\u542b\u4e00\u4e9b\u57fa\u7840\u8bbe\u65bd\u76f8\u5173\u7684\u914d\u7f6e\u548c\u7b56\u7565\uff0c\u5728\u672c\u4f8b\u4e2d\u4e3a MySQL \u6570\u636e\u5e93\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\u251c\u2500\u2500 apps\n\u2502\xa0\xa0 \u2514\u2500\u2500 my-app.yaml\n\u251c\u2500\u2500 clusters\n\u2502\xa0\xa0 \u251c\u2500\u2500 apps.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 infra.yaml\n\u2514\u2500\u2500 infrastructure\n    \u2514\u2500\u2500 mysql.yaml\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"KubeVela \u5efa\u8bae\u4f7f\u7528\u5982\u4e0a\u7684\u76ee\u5f55\u7ed3\u6784\u7ba1\u7406\u4f60\u7684 GitOps \u4ed3\u5e93\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"clusters/")," \u4e2d\u5b58\u653e\u76f8\u5173\u7684 KubeVela GitOps \u914d\u7f6e\u5e76\u9700\u8981\u88ab\u624b\u52a8\u90e8\u7f72\u5230\u96c6\u7fa4\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"apps/")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"infrastructure/")," \u4e2d\u5206\u522b\u5b58\u653e\u4f60\u7684\u5e94\u7528\u548c\u57fa\u7840\u8bbe\u65bd\u914d\u7f6e\u3002\u901a\u8fc7\u628a\u5e94\u7528\u548c\u57fa\u7840\u914d\u7f6e\u5206\u5f00\uff0c\u80fd\u591f\u66f4\u4e3a\u5408\u7406\u7684\u7ba1\u7406\u4f60\u7684\u90e8\u7f72\u73af\u5883\uff0c\u9694\u79bb\u5e94\u7528\u7684\u53d8\u52a8\u5f71\u54cd\u3002")),(0,l.kt)("h4",{id:"clusters-\u76ee\u5f55"},(0,l.kt)("inlineCode",{parentName:"h4"},"clusters/")," \u76ee\u5f55"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u6765\u770b\u4e0b clusters \u76ee\u5f55\uff0c\u8fd9\u4e5f\u662f KubeVela \u5bf9\u63a5 GitOps \u7684\u521d\u59cb\u5316\u64cd\u4f5c\u914d\u7f6e\u76ee\u5f55"),(0,l.kt)("p",null,"\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"clusters/infra.yaml")," \u4e3a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: infra\nspec:\n  components:\n  - name: database-config\n    type: kustomize\n    properties:\n      repoType: git\n      # \u5c06\u6b64\u5904\u66ff\u6362\u6210\u4f60\u9700\u8981\u76d1\u542c\u7684 git \u914d\u7f6e\u4ed3\u5e93\u5730\u5740\n      url: https://github.com/FogDong/KubeVela-GitOps-Infra-Demo\n      # \u5982\u679c\u662f\u79c1\u6709\u4ed3\u5e93\uff0c\u8fd8\u9700\u8981\u5173\u8054 git secret\n      # secretRef: git-secret\n      # \u81ea\u52a8\u62c9\u53d6\u914d\u7f6e\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u7531\u4e8e\u57fa\u7840\u8bbe\u65bd\u7684\u53d8\u52a8\u6027\u8f83\u5c0f\uff0c\u6b64\u5904\u8bbe\u7f6e\u4e3a\u5341\u5206\u949f\n      pullInterval: 10m\n      git:\n        # \u76d1\u542c\u53d8\u52a8\u7684\u5206\u652f\n        branch: main\n      # \u76d1\u542c\u53d8\u52a8\u7684\u8def\u5f84\uff0c\u6307\u5411\u4ed3\u5e93\u4e2d infrastructure \u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\n      path: ./infrastructure\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"apps.yaml")," \u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"infra.yaml")," \u51e0\u4e4e\u4fdd\u6301\u4e00\u81f4\uff0c\u53ea\u4e0d\u8fc7\u76d1\u542c\u7684\u6587\u4ef6\u76ee\u5f55\u6709\u6240\u533a\u522b\u3002\n\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"apps.yaml")," \u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"properties.path")," \u7684\u503c\u5c06\u6539\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"./apps"),"\uff0c\u8868\u660e\u76d1\u542c ",(0,l.kt)("inlineCode",{parentName:"p"},"apps/")," \u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u53d8\u52a8\u3002"),(0,l.kt)("p",null,"cluster \u6587\u4ef6\u5939\u4e2d\u7684 GitOps \u7ba1\u63a7\u914d\u7f6e\u6587\u4ef6\u9700\u8981\u5728\u521d\u59cb\u5316\u7684\u65f6\u5019\u4e00\u6b21\u6027\u624b\u52a8\u90e8\u7f72\u5230\u96c6\u7fa4\u4e2d\uff0c\u5728\u6b64\u4e4b\u540e KubeVela \u5c06\u81ea\u52a8\u76d1\u542c ",(0,l.kt)("inlineCode",{parentName:"p"},"apps/")," \u4ee5\u53ca ",(0,l.kt)("inlineCode",{parentName:"p"},"infrastructure/")," \u76ee\u5f55\u4e0b\u7684\u914d\u7f6e\u6587\u4ef6\u5e76\u5b9a\u671f\u66f4\u65b0\u540c\u6b65\u3002"),(0,l.kt)("h4",{id:"apps-\u76ee\u5f55"},(0,l.kt)("inlineCode",{parentName:"h4"},"apps/")," \u76ee\u5f55"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"apps/")," \u76ee\u5f55\u4e2d\u5b58\u653e\u7740\u5e94\u7528\u914d\u7f6e\u6587\u4ef6\uff0c\u8fd9\u662f\u4e00\u4e2a\u914d\u7f6e\u4e86\u6570\u636e\u5e93\u4fe1\u606f\u4ee5\u53ca Ingress \u7684\u7b80\u5355\u5e94\u7528\u3002\u8be5\u5e94\u7528\u5c06\u8fde\u63a5\u5230\u4e00\u4e2a MySQL \u6570\u636e\u5e93\uff0c\u5e76\u7b80\u5355\u5730\u542f\u52a8\u670d\u52a1\u3002\u5728\u9ed8\u8ba4\u7684\u670d\u52a1\u8def\u5f84\u4e0b\uff0c\u4f1a\u663e\u793a\u5f53\u524d\u7248\u672c\u53f7\u3002\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"/db")," \u8def\u5f84\u4e0b\uff0c\u4f1a\u5217\u51fa\u5f53\u524d\u6570\u636e\u5e93\u4e2d\u7684\u4fe1\u606f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: my-app\n  namespace: default\nspec:\n  components:\n    - name: my-server\n      type: webservice\n      properties:\n        image: ghcr.io/fogdong/test-fog:master-cba5605f-1632714412\n        port: 8088\n        env:\n          - name: DB_HOST\n            value: mysql-cluster-mysql.default.svc.cluster.local:3306\n          - name: DB_PASSWORD\n            valueFrom:\n              secretKeyRef:\n                name: mysql-secret\n                key: ROOT_PASSWORD\n      traits:\n        - type: ingress\n          properties:\n            domain: testsvc.example.com\n            http:\n              /: 8088\n")),(0,l.kt)("h4",{id:"infrastructure-\u76ee\u5f55"},(0,l.kt)("inlineCode",{parentName:"h4"},"infrastructure/")," \u76ee\u5f55"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"infrastructure/")," \u76ee\u5f55\u4e0b\u5b58\u653e\u4e00\u4e9b\u57fa\u7840\u8bbe\u65bd\u7684\u914d\u7f6e\u3002\u6b64\u5904\u6211\u4eec\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/bitpoke/mysql-operator"},"mysql controller")," \u6765\u90e8\u7f72\u4e86\u4e00\u4e2a MySQL \u96c6\u7fa4\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff0c\u8bf7\u786e\u4fdd\u4f60\u7684\u96c6\u7fa4\u4e2d\u6709\u4e00\u4e2a secret\uff0c\u5e76\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"ROOT_PASSWORD")," \u58f0\u660e\u4e86 MySQL \u5bc6\u7801\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: mysql\n  namespace: default\nspec:\n  components:\n    - name: mysql-controller\n      type: helm\n      properties:\n        repoType: helm\n        url: https://presslabs.github.io/charts\n        chart: mysql-operator\n        version: "0.4.0"\n    - name: mysql-cluster\n      type: raw\n      dependsOn:\n        - mysql-controller\n      properties:\n        apiVersion: mysql.presslabs.org/v1alpha1\n        kind: MysqlCluster\n        metadata:\n          name: mysql-cluster\n        spec:\n          replicas: 1\n          # \u5173\u8054 secret \u540d\u79f0\n          secretName: mysql-secret\n')),(0,l.kt)("h4",{id:"\u90e8\u7f72-clusters-\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6"},"\u90e8\u7f72 ",(0,l.kt)("inlineCode",{parentName:"h4"},"clusters/")," \u76ee\u5f55\u4e0b\u7684\u6587\u4ef6"),(0,l.kt)("p",null,"\u914d\u7f6e\u5b8c\u4ee5\u4e0a\u6587\u4ef6\u5e76\u5b58\u653e\u5230 Git \u914d\u7f6e\u4ed3\u5e93\u540e\uff0c\u6211\u4eec\u9700\u8981\u5728\u96c6\u7fa4\u4e2d\u624b\u52a8\u90e8\u7f72 ",(0,l.kt)("inlineCode",{parentName:"p"},"clusters/")," \u76ee\u5f55\u4e0b\u7684 KubeVela GitOps \u914d\u7f6e\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u5728\u96c6\u7fa4\u4e2d\u90e8\u7f72 ",(0,l.kt)("inlineCode",{parentName:"p"},"clusters/infra.yaml"),"\u3002\u53ef\u4ee5\u770b\u5230\u5b83\u81ea\u52a8\u5728\u96c6\u7fa4\u4e2d\u62c9\u8d77\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"infrastructure/")," \u76ee\u5f55\u4e0b\u7684 MySQL \u90e8\u7f72\u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vela up -f clusters/infra.yaml\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela ls\n\nAPP     COMPONENT           TYPE        TRAITS  PHASE   HEALTHY STATUS  CREATED-TIME\ninfra   database-config     kustomize           running healthy         2021-09-26 20:48:09 +0800 CST\nmysql   mysql-controller    helm                running healthy         2021-09-26 20:48:11 +0800 CST\n\u2514\u2500      mysql-cluster       raw                 running healthy         2021-09-26 20:48:11 +0800 CST\n")),(0,l.kt)("p",null,"\u63a5\u7740\uff0c\u5728\u96c6\u7fa4\u4e2d\u90e8\u7f72 ",(0,l.kt)("inlineCode",{parentName:"p"},"clusters/apps.yaml"),"\uff0c\u53ef\u4ee5\u770b\u5230\u5b83\u81ea\u52a8\u62c9\u8d77\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"apps/")," \u76ee\u5f55\u4e0b\u7684\u5e94\u7528\u90e8\u7f72\u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vela up -f clusters/apps.yaml\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"APP     COMPONENT           TYPE        TRAITS  PHASE   HEALTHY STATUS  CREATED-TIME\napps    apps                kustomize           running healthy         2021-09-27 16:55:53 +0800 CST\ninfra   database-config     kustomize           running healthy         2021-09-26 20:48:09 +0800 CST\nmy-app  my-server           webservice  ingress running healthy         2021-09-27 16:55:55 +0800 CST\nmysql   mysql-controller    helm                running healthy         2021-09-26 20:48:11 +0800 CST\n\u2514\u2500      mysql-cluster       raw                 running healthy         2021-09-26 20:48:11 +0800 CST\n")),(0,l.kt)("p",null,"\u81f3\u6b64\uff0c\u6211\u4eec\u901a\u8fc7\u90e8\u7f72 KubeVela GitOps \u914d\u7f6e\u6587\u4ef6\uff0c\u81ea\u52a8\u5728\u96c6\u7fa4\u4e2d\u62c9\u8d77\u4e86\u5e94\u7528\u53ca\u6570\u636e\u5e93\u3002"),(0,l.kt)("p",null,"\u901a\u8fc7 curl \u5e94\u7528\u7684 Ingress\uff0c\u53ef\u4ee5\u770b\u5230\u76ee\u524d\u7684\u7248\u672c\u662f 0.1.5\uff0c\u5e76\u4e14\u6210\u529f\u5730\u8fde\u63a5\u5230\u4e86\u6570\u636e\u5e93\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get ingress\nNAME        CLASS    HOSTS                 ADDRESS         PORTS   AGE\nmy-server   <none>   testsvc.example.com   <ingress-ip>    80      162m\n\n$ curl -H "Host:testsvc.example.com" http://<ingress-ip>\nVersion: 0.1.5\n\n$ curl -H "Host:testsvc.example.com" http://<ingress-ip>/db\nUser: KubeVela\nDescription: It\'s a test user\n')),(0,l.kt)("h3",{id:"\u4fee\u6539\u914d\u7f6e"},"\u4fee\u6539\u914d\u7f6e"),(0,l.kt)("p",null,"\u5b8c\u6210\u4e86\u9996\u6b21\u90e8\u7f72\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u914d\u7f6e\u4ed3\u5e93\u4e2d\u7684\u914d\u7f6e\uff0c\u6765\u5b8c\u6210\u96c6\u7fa4\u4e2d\u5e94\u7528\u7684\u914d\u7f6e\u66f4\u65b0\u3002"),(0,l.kt)("p",null,"\u4fee\u6539\u5e94\u7528 Ingress \u7684 Domain\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"...\n      traits:\n        - type: ingress\n          properties:\n            domain: kubevela.example.com\n            http:\n              /: 8089\n")),(0,l.kt)("p",null,"\u7ecf\u8fc7\u4e00\u6bb5\u65f6\u95f4\u540e\uff0c\u91cd\u65b0\u67e5\u770b\u96c6\u7fa4\u4e2d\u7684 Ingress\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"NAME        CLASS    HOSTS                 ADDRESS         PORTS   AGE\nmy-server   <none>   kubevela.example.com  <ingress-ip>    80      162m\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0cIngress \u7684 Host \u5730\u5740\u5df2\u88ab\u6210\u529f\u66f4\u65b0\u3002"),(0,l.kt)("p",null,"\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0c\u6211\u4eec\u53ef\u4ee5\u65b9\u4fbf\u5730\u901a\u8fc7\u66f4\u65b0 Git \u914d\u7f6e\u4ed3\u5e93\u4e2d\u7684\u6587\u4ef6\uff0c\u4ece\u800c\u81ea\u52a8\u5316\u66f4\u65b0\u96c6\u7fa4\u4e2d\u7684\u914d\u7f6e\u3002"),(0,l.kt)("h2",{id:"\u9762\u5411\u7ec8\u7aef\u5f00\u53d1\u8005\u7684\u4ea4\u4ed8"},"\u9762\u5411\u7ec8\u7aef\u5f00\u53d1\u8005\u7684\u4ea4\u4ed8"),(0,l.kt)("p",null,"\u5982\u56fe\u6240\u793a\uff0c\u5bf9\u4e8e\u7ec8\u7aef\u5f00\u53d1\u8005\u800c\u8a00\uff0c\u5728 KubeVela Git \u914d\u7f6e\u4ed3\u5e93\u4ee5\u5916\uff0c\u8fd8\u9700\u8981\u51c6\u5907\u4e00\u4e2a\u5e94\u7528\u4ee3\u7801\u4ed3\u5e93\u3002\u5728\u7528\u6237\u66f4\u65b0\u4e86\u5e94\u7528\u4ee3\u7801\u4ed3\u5e93\u4e2d\u7684\u4ee3\u7801\u540e\uff0c\u9700\u8981\u914d\u7f6e\u4e00\u4e2a CI \u6765\u81ea\u52a8\u6784\u5efa\u955c\u50cf\u5e76\u63a8\u9001\u81f3\u955c\u50cf\u4ed3\u5e93\u4e2d\u3002KubeVela \u4f1a\u76d1\u542c\u955c\u50cf\u4ed3\u5e93\u4e2d\u7684\u6700\u65b0\u955c\u50cf\uff0c\u5e76\u81ea\u52a8\u66f4\u65b0\u914d\u7f6e\u4ed3\u5e93\u4e2d\u7684\u955c\u50cf\u914d\u7f6e\uff0c\u6700\u540e\u518d\u66f4\u65b0\u96c6\u7fa4\u4e2d\u7684\u5e94\u7528\u914d\u7f6e\u3002\u4f7f\u7528\u6237\u53ef\u4ee5\u8fbe\u6210\u5728\u66f4\u65b0\u4ee3\u7801\u540e\uff0c\u96c6\u7fa4\u4e2d\u7684\u914d\u7f6e\u4e5f\u81ea\u52a8\u66f4\u65b0\u7684\u6548\u679c\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"alt",src:t(78872).Z})),(0,l.kt)("h3",{id:"\u51c6\u5907\u4ee3\u7801\u4ed3\u5e93"},"\u51c6\u5907\u4ee3\u7801\u4ed3\u5e93"),(0,l.kt)("p",null,"\u51c6\u5907\u4e00\u4e2a\u4ee3\u7801\u4ed3\u5e93\uff0c\u91cc\u9762\u5305\u542b\u4e00\u4e9b\u6e90\u4ee3\u7801\u4ee5\u53ca\u5bf9\u5e94\u7684 Dockerfile\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u4ee3\u7801\u5c06\u8fde\u63a5\u5230\u4e00\u4e2a MySQL \u6570\u636e\u5e93\uff0c\u5e76\u7b80\u5355\u5730\u542f\u52a8\u670d\u52a1\u3002\u5728\u9ed8\u8ba4\u7684\u670d\u52a1\u8def\u5f84\u4e0b\uff0c\u4f1a\u663e\u793a\u5f53\u524d\u7248\u672c\u53f7\u3002\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"/db")," \u8def\u5f84\u4e0b\uff0c\u4f1a\u5217\u51fa\u5f53\u524d\u6570\u636e\u5e93\u4e2d\u7684\u4fe1\u606f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {\n        _, _ = fmt.Fprintf(w, "Version: %s\\n", VERSION)\n    })\n    http.HandleFunc("/db", func(w http.ResponseWriter, r *http.Request) {\n        rows, err := db.Query("select * from userinfo;")\n        if err != nil {\n            _, _ = fmt.Fprintf(w, "Error: %v\\n", err)\n        }\n        for rows.Next() {\n            var username string\n            var desc string\n            err = rows.Scan(&username, &desc)\n            if err != nil {\n                _, _ = fmt.Fprintf(w, "Scan Error: %v\\n", err)\n            }\n            _, _ = fmt.Fprintf(w, "User: %s \\nDescription: %s\\n\\n", username, desc)\n        }\n    })\n\n    if err := http.ListenAndServe(":8088", nil); err != nil {\n        panic(err.Error())\n    }\n')),(0,l.kt)("p",null,"\u6211\u4eec\u5e0c\u671b\u7528\u6237\u6539\u52a8\u4ee3\u7801\u8fdb\u884c\u63d0\u4ea4\u540e\uff0c\u81ea\u52a8\u6784\u5efa\u51fa\u6700\u65b0\u7684\u955c\u50cf\u5e76\u63a8\u9001\u5230\u955c\u50cf\u4ed3\u5e93\u3002\u8fd9\u4e00\u6b65 CI \u53ef\u4ee5\u901a\u8fc7\u96c6\u6210 GitHub Actions\u3001Jenkins \u6216\u8005\u5176\u4ed6 CI \u5de5\u5177\u6765\u5b9e\u73b0\u3002\u5728\u672c\u4f8b\u4e2d\uff0c\u6211\u4eec\u901a\u8fc7\u501f\u52a9 GitHub Actions \u6765\u5b8c\u6210\u6301\u7eed\u96c6\u6210\u3002\u5177\u4f53\u7684\u4ee3\u7801\u6587\u4ef6\u53ca\u914d\u7f6e\u53ef\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/samples/tree/master/9.GitOps_Demo/for-developers/app-code"},"\u793a\u4f8b\u4ed3\u5e93"),"\u3002"),(0,l.kt)("h3",{id:"\u914d\u7f6e\u79d8\u94a5\u4fe1\u606f"},"\u914d\u7f6e\u79d8\u94a5\u4fe1\u606f"),(0,l.kt)("p",null,"\u5728\u65b0\u7684\u955c\u50cf\u63a8\u9001\u5230\u955c\u50cf\u4ed3\u5e93\u540e\uff0cKubeVela \u4f1a\u8bc6\u522b\u5230\u65b0\u7684\u955c\u50cf\uff0c\u5e76\u66f4\u65b0\u4ed3\u5e93\u53ca\u96c6\u7fa4\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Application")," \u914d\u7f6e\u6587\u4ef6\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u542b\u6709 Git \u4fe1\u606f\u7684 Secret\uff0c\u4f7f KubeVela \u5411 Git \u4ed3\u5e93\u8fdb\u884c\u63d0\u4ea4\u3002\u90e8\u7f72\u5982\u4e0b\u6587\u4ef6\uff0c\u5c06\u5176\u4e2d\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u66ff\u6362\u6210\u4f60\u7684 Git \u7528\u6237\u540d\u53ca\u5bc6\u7801\uff08\u6216 Token\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: git-secret\ntype: kubernetes.io/basic-auth\nstringData:\n  username: <your username>\n  password: <your password>\n")),(0,l.kt)("h3",{id:"\u51c6\u5907\u914d\u7f6e\u4ed3\u5e93-1"},"\u51c6\u5907\u914d\u7f6e\u4ed3\u5e93"),(0,l.kt)("p",null,"\u914d\u7f6e\u4ed3\u5e93\u4e0e\u4e4b\u524d\u9762\u5411\u8fd0\u7ef4\u4eba\u5458\u7684\u914d\u7f6e\u5927\u540c\u5c0f\u5f02\uff0c\u53ea\u9700\u8981\u52a0\u4e0a\u4e0e\u955c\u50cf\u4ed3\u5e93\u76f8\u5173\u7684\u914d\u7f6e\u5373\u53ef\u3002\u5177\u4f53\u914d\u7f6e\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/samples/tree/master/9.GitOps_Demo/for-developers/kubevela-config"},"\u793a\u4f8b\u4ed3\u5e93"),"\u3002"),(0,l.kt)("p",null,"\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"clusters/")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"apps.yaml"),"\uff0c\u8be5 GitOps \u914d\u7f6e\u4f1a\u76d1\u542c\u4ed3\u5e93\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"apps/")," \u4e0b\u7684\u5e94\u7528\u6587\u4ef6\u53d8\u52a8\u4ee5\u53ca\u955c\u50cf\u4ed3\u5e93\u4e2d\u7684\u955c\u50cf\u66f4\u65b0\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"...\n  imageRepository:\n    # \u955c\u50cf\u5730\u5740\n    image: <your image>\n    # \u5982\u679c\u8fd9\u662f\u4e00\u4e2a\u79c1\u6709\u7684\u955c\u50cf\u4ed3\u5e93\uff0c\u53ef\u4ee5\u901a\u8fc7 `kubectl create secret docker-registry` \u521b\u5efa\u5bf9\u5e94\u7684\u955c\u50cf\u79d8\u94a5\u5e76\u76f8\u5173\u8054\n    # secretRef: imagesecret\n    filterTags:\n      # \u53ef\u5bf9\u955c\u50cf tag \u8fdb\u884c\u8fc7\u6ee4\n      pattern: '^master-[a-f0-9]+-(?P<ts>[0-9]+)'\n      extract: '$ts'\n    # \u901a\u8fc7 policy \u7b5b\u9009\u51fa\u6700\u65b0\u7684\u955c\u50cf Tag \u5e76\u7528\u4e8e\u66f4\u65b0\n    policy:\n      numerical:\n        order: asc\n    # \u8ffd\u52a0\u63d0\u4ea4\u4fe1\u606f\n    commitMessage: \"Image: {{range .Updated.Images}}{{println .}}{{end}}\"\n")),(0,l.kt)("p",null,"\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"apps/my-app.yaml")," \u4e2d\u7684 image \u5b57\u6bb5\uff0c\u5728\u540e\u9762\u52a0\u4e0a ",(0,l.kt)("inlineCode",{parentName:"p"},'# {"$imagepolicy": "default:apps"}')," \u7684\u6ce8\u91ca\u3002KubeVela \u4f1a\u901a\u8fc7\u8be5\u6ce8\u91ca\u53bb\u66f4\u65b0\u5bf9\u5e94\u7684\u955c\u50cf\u5b57\u6bb5\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"default:apps")," \u662f\u4e0a\u9762 GitOps \u914d\u7f6e\u5bf9\u5e94\u7684\u547d\u540d\u7a7a\u95f4\u548c\u540d\u79f0\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  components:\n    - name: my-server\n      type: webservice\n      properties:\n        image: ghcr.io/fogdong/test-fog:master-cba5605f-1632714412 # {"$imagepolicy": "default:apps"}\n')),(0,l.kt)("p",null,"\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"clusters/")," \u4e2d\u5305\u542b\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e\u7684\u6587\u4ef6\u66f4\u65b0\u5230\u96c6\u7fa4\u4e2d\u540e\uff0c\u6211\u4eec\u4fbf\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u4ee3\u7801\u6765\u5b8c\u6210\u5e94\u7528\u7684\u66f4\u65b0\u3002"),(0,l.kt)("h3",{id:"\u4fee\u6539\u4ee3\u7801"},"\u4fee\u6539\u4ee3\u7801"),(0,l.kt)("p",null,"\u5c06\u4ee3\u7801\u6587\u4ef6\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Version")," \u6539\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"0.1.6"),"\uff0c\u5e76\u4fee\u6539\u6570\u636e\u5e93\u4e2d\u7684\u6570\u636e:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'const VERSION = "0.1.6"\n\n...\n\nfunc InsertInitData(db *sql.DB) {\n    stmt, err := db.Prepare(insertInitData)\n    if err != nil {\n        panic(err)\n    }\n    defer stmt.Close()\n\n    _, err = stmt.Exec("KubeVela2", "It\'s another test user")\n    if err != nil {\n        panic(err)\n    }\n}\n')),(0,l.kt)("p",null,"\u63d0\u4ea4\u8be5\u6539\u52a8\u81f3\u4ee3\u7801\u4ed3\u5e93\uff0c\u53ef\u4ee5\u770b\u5230\uff0c\u6211\u4eec\u914d\u7f6e\u7684 CI \u6d41\u6c34\u7ebf\u5f00\u59cb\u6784\u5efa\u955c\u50cf\u5e76\u63a8\u9001\u81f3\u955c\u50cf\u4ed3\u5e93\u3002"),(0,l.kt)("p",null,"\u800c KubeVela \u4f1a\u901a\u8fc7\u76d1\u542c\u955c\u50cf\u4ed3\u5e93\uff0c\u6839\u636e\u6700\u65b0\u7684\u955c\u50cf Tag \u6765\u66f4\u65b0\u914d\u7f6e\u4ed3\u5e93\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"apps/")," \u4e0b\u7684\u5e94\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"my-app"),"\u3002"),(0,l.kt)("p",null,"\u6b64\u65f6\uff0c\u53ef\u4ee5\u770b\u5230\u914d\u7f6e\u4ed3\u5e93\u4e2d\u6709\u4e00\u6761\u6765\u81ea ",(0,l.kt)("inlineCode",{parentName:"p"},"kubevelabot")," \u7684\u63d0\u4ea4\uff0c\u63d0\u4ea4\u4fe1\u606f\u5747\u5e26\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"Update image automatically.")," \u524d\u7f00\u3002\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"{{range .Updated.Images}}{{println .}}{{end}}")," \u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"commitMessage")," \u5b57\u6bb5\u4e2d\u8ffd\u52a0\u4f60\u6240\u9700\u8981\u7684\u4fe1\u606f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"alt",src:t(85719).Z})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u4f60\u5e0c\u671b\u5c06\u4ee3\u7801\u548c\u914d\u7f6e\u653e\u5728\u540c\u4e00\u4e2a\u4ed3\u5e93\uff0c\u9700\u8981\u8fc7\u6ee4\u6389\u6765\u81ea ",(0,l.kt)("inlineCode",{parentName:"p"},"kubevelabot")," \u7684\u63d0\u4ea4\u6765\u9632\u6b62\u6d41\u6c34\u7ebf\u7684\u91cd\u590d\u6784\u5efa\u3002\u53ef\u4ee5\u5728 CI \u4e2d\u901a\u8fc7\u5982\u4e0b\u914d\u7f6e\u8fc7\u6ee4\uff1a"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"jobs:\n publish:\n   if: \"!contains(github.event.head_commit.message, 'Update image automatically')\"\n"))),(0,l.kt)("p",null,"\u91cd\u65b0\u67e5\u770b\u96c6\u7fa4\u4e2d\u7684\u5e94\u7528\uff0c\u53ef\u4ee5\u770b\u5230\u7ecf\u8fc7\u4e00\u6bb5\u65f6\u95f4\u540e\uff0c\u5e94\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"my-app")," \u7684\u955c\u50cf\u5df2\u7ecf\u88ab\u66f4\u65b0\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"KubeVela \u4f1a\u901a\u8fc7\u4f60\u914d\u7f6e\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"interval")," \u65f6\u95f4\u95f4\u9694\uff0c\u6765\u6bcf\u9694\u4e00\u6bb5\u65f6\u95f4\u5206\u522b\u4ece\u914d\u7f6e\u4ed3\u5e93\u53ca\u955c\u50cf\u4ed3\u5e93\u4e2d\u83b7\u53d6\u6700\u65b0\u4fe1\u606f\uff1a"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\u5f53 Git \u4ed3\u5e93\u4e2d\u7684\u914d\u7f6e\u6587\u4ef6\u88ab\u66f4\u65b0\u65f6\uff0cKubeVela \u5c06\u6839\u636e\u6700\u65b0\u7684\u914d\u7f6e\u66f4\u65b0\u96c6\u7fa4\u4e2d\u7684\u5e94\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u955c\u50cf\u4ed3\u5e93\u4e2d\u591a\u4e86\u65b0\u7684 Tag \u65f6\uff0cKubeVela \u5c06\u6839\u636e\u4f60\u914d\u7f6e\u7684 policy \u89c4\u5219\uff0c\u7b5b\u9009\u51fa\u6700\u65b0\u7684\u955c\u50cf Tag\uff0c\u5e76\u66f4\u65b0\u5230 Git \u4ed3\u5e93\u4e2d\u3002\u800c\u5f53\u4ee3\u7801\u4ed3\u5e93\u4e2d\u7684\u6587\u4ef6\u88ab\u66f4\u65b0\u540e\uff0cKubeVela \u5c06\u91cd\u590d\u7b2c\u4e00\u6b65\uff0c\u66f4\u65b0\u96c6\u7fa4\u4e2d\u7684\u6587\u4ef6\uff0c\u4ece\u800c\u8fbe\u5230\u4e86\u81ea\u52a8\u90e8\u7f72\u7684\u6548\u679c\u3002"))),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"curl")," \u5bf9\u5e94\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Ingress")," \u67e5\u770b\u5f53\u524d\u7248\u672c\u548c\u6570\u636e\u5e93\u4fe1\u606f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get ingress\nNAME        CLASS    HOSTS                 ADDRESS         PORTS   AGE\nmy-server   <none>   kubevela.example.com  <ingress-ip>    80      162m\n\n$ curl -H "Host:kubevela.example.com" http://<ingress-ip>\nVersion: 0.1.6\n\n$ curl -H "Host:kubevela.example.com" http://<ingress-ip>/db\nUser: KubeVela\nDescription: It\'s a test user\n\nUser: KubeVela2\nDescription: It\'s another test user\n')),(0,l.kt)("p",null,"\u7248\u672c\u5df2\u88ab\u6210\u529f\u66f4\u65b0\uff01\u81f3\u6b64\uff0c\u6211\u4eec\u5b8c\u6210\u4e86\u4ece\u53d8\u66f4\u4ee3\u7801\uff0c\u5230\u81ea\u52a8\u90e8\u7f72\u81f3\u96c6\u7fa4\u7684\u5168\u90e8\u64cd\u4f5c\u3002"),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("p",null,"\u5728\u8fd0\u7ef4\u4fa7\uff0c\u5982\u82e5\u9700\u8981\u66f4\u65b0\u57fa\u7840\u8bbe\u65bd\uff08\u5982\u6570\u636e\u5e93\uff09\u7684\u914d\u7f6e\uff0c\u6216\u662f\u5e94\u7528\u7684\u914d\u7f6e\u9879\uff0c\u53ea\u9700\u8981\u4fee\u6539\u914d\u7f6e\u4ed3\u5e93\u4e2d\u7684\u6587\u4ef6\uff0cKubeVela \u5c06\u81ea\u52a8\u628a\u914d\u7f6e\u540c\u6b65\u5230\u96c6\u7fa4\u4e2d\uff0c\u7b80\u5316\u4e86\u90e8\u7f72\u6d41\u7a0b\u3002"),(0,l.kt)("p",null,"\u5728\u7814\u53d1\u4fa7\uff0c\u7528\u6237\u4fee\u6539\u4ee3\u7801\u4ed3\u5e93\u4e2d\u7684\u4ee3\u7801\u540e\uff0cKubeVela \u5c06\u81ea\u52a8\u66f4\u65b0\u914d\u7f6e\u4ed3\u5e93\u4e2d\u7684\u955c\u50cf\u3002\u4ece\u800c\u8fdb\u884c\u5e94\u7528\u7684\u7248\u672c\u66f4\u65b0\u3002"),(0,l.kt)("p",null,"\u901a\u8fc7\u4e0e GitOps \u7684\u7ed3\u5408\uff0cKubeVela \u52a0\u901f\u4e86\u5e94\u7528\u4ece\u5f00\u53d1\u5230\u90e8\u7f72\u7684\u6574\u4e2a\u6d41\u7a0b\u3002"))}u.isMDXComponent=!0},78872:function(e,n,t){"use strict";n.Z=t.p+"assets/images/dev-flow-e2153e9687ba8904dddea46db8aa7a85.jpg"},85719:function(e,n,t){"use strict";n.Z=t.p+"assets/images/gitops-commit-31c4a9477065754e172f97792bb14f91.png"},30767:function(e,n,t){"use strict";n.Z=t.p+"assets/images/ops-flow-8bec0d06df6baf12234cfe6c18bff438.jpg"}}]);