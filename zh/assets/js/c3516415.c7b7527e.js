(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[96002],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(o,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57638:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return o},default:function(){return p}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),l={title:"\u7cfb\u7edf\u67b6\u6784"},u={unversionedId:"getting-started/architecture",id:"getting-started/architecture",isDocsHomePage:!1,title:"\u7cfb\u7edf\u67b6\u6784",description:"KubeVela \u7684\u6574\u4f53\u67b6\u6784\u5982\u4e0b\u6240\u793a\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/architecture.md",sourceDirName:"getting-started",slug:"/getting-started/architecture",permalink:"/zh/docs/next/getting-started/architecture",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/getting-started/architecture.md",version:"current",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642423969,formattedLastUpdatedAt:"2022/1/17",frontMatter:{title:"\u7cfb\u7edf\u67b6\u6784"},sidebar:"docs",previous:{title:"\u6838\u5fc3\u6982\u5ff5",permalink:"/zh/docs/next/getting-started/core-concept"},next:{title:"\u5feb\u901f\u5b89\u88c5",permalink:"/zh/docs/next/install"}},o=[{value:"KubeVela \u662f\u4e00\u4e2a\u63a7\u5236\u5e73\u9762\u7cfb\u7edf",id:"kubevela-\u662f\u4e00\u4e2a\u63a7\u5236\u5e73\u9762\u7cfb\u7edf",children:[{value:"\u8fd0\u884c\u65f6\u57fa\u7840\u8bbe\u65bd",id:"\u8fd0\u884c\u65f6\u57fa\u7840\u8bbe\u65bd",children:[]}]},{value:"KubeVela \u662f\u53ef\u7f16\u7a0b\u7684",id:"kubevela-\u662f\u53ef\u7f16\u7a0b\u7684",children:[]},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",children:[]}],c={toc:o};function p(e){var t=e.components,l=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"KubeVela \u7684\u6574\u4f53\u67b6\u6784\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"kubevela-arch",src:n(5694).Z})),(0,i.kt)("h2",{id:"kubevela-\u662f\u4e00\u4e2a\u63a7\u5236\u5e73\u9762\u7cfb\u7edf"},"KubeVela \u662f\u4e00\u4e2a\u63a7\u5236\u5e73\u9762\u7cfb\u7edf"),(0,i.kt)("p",null,"KubeVela \u672c\u8eab\u662f\u4e00\u4e2a\u7684\u5e94\u7528\u4ea4\u4ed8\u4e0e\u7ba1\u7406\u63a7\u5236\u5e73\u9762\uff0c\u5b83\u67b6\u5728 Kubernetes \u96c6\u7fa4\u3001\u4e91\u5e73\u53f0\u7b49\u57fa\u7840\u8bbe\u65bd\u4e4b\u4e0a\uff0c\u901a\u8fc7\u5f00\u653e\u5e94\u7528\u6a21\u578b\u6765\u5bf9\u7ec4\u4ef6\u3001\u4e91\u670d\u52a1\u3001\u8fd0\u7ef4\u80fd\u529b\u3001\u4ea4\u4ed8\u5de5\u4f5c\u6d41\u8fdb\u884c\u7edf\u4e00\u7684\u7f16\u6392\u548c\u4ea4\u4ed8\u3002KubeVela \u8fd9\u79cd\u4e0e\u57fa\u7840\u8bbe\u65bd\u672c\u8eab\u5b8c\u5168\u89e3\u8026\u7684\u8bbe\u8ba1\uff0c\u5f88\u5bb9\u6613\u5c31\u80fd\u5e2e\u52a9\u4f60\u9762\u5411\u6df7\u5408\u4e91/\u591a\u4e91/\u591a\u96c6\u7fa4\u57fa\u7840\u8bbe\u65bd\u8fdb\u884c\u5e94\u7528\u4ea4\u4ed8\u4e0e\u7ba1\u7406\u3002"),(0,i.kt)("p",null,"\u800c\u4e3a\u4e86\u80fd\u591f\u540c\u4efb\u4f55 CI \u6d41\u6c34\u7ebf\u6216\u8005 GitOps \u5de5\u5177\u65e0\u7f1d\u96c6\u6210\uff0cKubeVela \u7684 API\uff08\u5373\u5f00\u653e\u5e94\u7528\u6a21\u578b\uff09\u88ab\u8bbe\u8ba1\u4e3a\u662f\u58f0\u660e\u5f0f\u3001\u5b8c\u5168\u4ee5\u5e94\u7528\u4e3a\u4e2d\u5fc3\u7684\uff0c\u5b83\u5305\u62ec\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5e2e\u52a9\u7528\u6237\u5b9a\u4e49\u5e94\u7528\u4ea4\u4ed8\u8ba1\u5212\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"Application")," \u5bf9\u8c61"),(0,i.kt)("li",{parentName:"ul"},"\u5e2e\u52a9\u5e73\u53f0\u7ba1\u7406\u5458\u901a\u8fc7 CUE \u8bed\u8a00\u5b9a\u4e49\u5e73\u53f0\u80fd\u529b\u548c\u62bd\u8c61\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"X-Definition "),"\u5bf9\u8c61",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6bd4\u5982 ",(0,i.kt)("inlineCode",{parentName:"li"},"ComponentDefinition"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"TraitDefinition")," \u7b49")))),(0,i.kt)("p",null,"\u5728\u5177\u4f53\u5b9e\u73b0\u4e0a\uff0cKubeVela \u4f9d\u8d56\u4e00\u4e2a\u72ec\u7acb\u7684 Kubernetes \u96c6\u7fa4\u6765\u8fd0\u884c\u3002\u8fd9\u5176\u5b9e\u662f\u4e00\u4e2a\u201c\u6709\u610f\u4e3a\u4e4b\u201d\u7684\u8bbe\u8ba1\uff1a\u4e91\u539f\u751f\u793e\u533a\u4e2d\u5927\u91cf\u7684\u5b9e\u8df5\u5df2\u7ecf\u8bc1\u660e\u201c\u6784\u5efa\u4e00\u4e2a\u79d1\u5b66\u7684\u3001\u5065\u58ee\u7684\u63a7\u5236\u5e73\u9762\u7cfb\u7edf\u201d\uff0c\u6b63\u662f Kubernetes \u9879\u76ee\u6700\u64c5\u957f\u7684\u5de5\u4f5c\u3002\u6240\u4ee5\uff0c\u4f9d\u8d56 Kubernetes \u4f5c\u4e3a\u63a7\u5236\u5e73\u9762\u96c6\u7fa4\u8fd9\u4e2a\u9009\u62e9\uff0c\u867d\u7136\u4f1a\u589e\u52a0\u4e00\u5b9a\u7684\u90e8\u7f72\u96be\u5ea6\uff0c\u5374\u80fd\u591f\u8ba9\u6211\u4eec\u4ee5\u6700\u539f\u751f\u7684\u65b9\u5f0f\u4e3a\u5927\u89c4\u6a21\u5e94\u7528\u4ea4\u4ed8\u5e26\u6765\u81f3\u5173\u91cd\u8981\u7684\u201c\u786e\u5b9a\u6027\u201d\u3001\u201c\u6536\u655b\u6027\u201d\u548c\u201c\u81ea\u52a8\u5316\u80fd\u529b\u201d\u3002"),(0,i.kt)("p",null,"\u5177\u4f53\u6765\u8bf4\uff0cKubeVela \u672c\u8eab\u4e3b\u8981\u7531\u5982\u4e0b\u51e0\u4e2a\u90e8\u5206\u7ec4\u6210:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u6838\u5fc3\u63a7\u5236\u5668")," \u4e3a\u6574\u4e2a\u7cfb\u7edf\u63d0\u4f9b\u6838\u5fc3\u63a7\u5236\u903b\u8f91\uff0c\u5b8c\u6210\u8bf8\u5982\u7f16\u6392\u5e94\u7528\u548c\u5de5\u4f5c\u6d41\u3001\u4fee\u8ba2\u7248\u672c\u5feb\u7167\u3001\u5783\u573e\u56de\u6536\u7b49\u7b49\u57fa\u7840\u903b\u8f91"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u6a21\u5757\u5316\u80fd\u529b\u63a7\u5236\u5668")," \u8d1f\u8d23\u5bf9 X-Definitions \u5bf9\u8c61\u8fdb\u884c\u6ce8\u518c\u548c\u7ba1\u7406\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u63d2\u4ef6\u63a7\u5236\u5668")," \u8d1f\u8d23\u6ce8\u518c\u548c\u7ba1\u7406 KubeVela \u8fd0\u884c\u6240\u9700\u8981\u7684\u7b2c\u4e09\u65b9\u63d2\u4ef6\uff0c\u6bd4\u5982 VelaUX\u3001 Flux\u3001Terraform \u7ec4\u4ef6\u7b49\u7b49\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"UI \u63a7\u5236\u53f0\u548c CLI")," UI \u63a7\u5236\u53f0\u670d\u52a1\u4e8e\u5e0c\u671b\u5f00\u7bb1\u5373\u7528\u7684\u5f00\u53d1\u8005\u7528\u6237\uff0cCLI \u9002\u7528\u4e8e\u96c6\u6210 KubeVela \u548c\u7ec8\u7aef\u7ba1\u7406\u7684\u7528\u6237\u3002")),(0,i.kt)("h3",{id:"\u8fd0\u884c\u65f6\u57fa\u7840\u8bbe\u65bd"},"\u8fd0\u884c\u65f6\u57fa\u7840\u8bbe\u65bd"),(0,i.kt)("p",null,"\u8fd0\u884c\u65f6\u57fa\u7840\u8bbe\u65bd\u662f\u5e94\u7528\u5b9e\u9645\u8fd0\u884c\u7684\u5730\u65b9\u3002KubeVela \u672c\u8eab\u662f\u5b8c\u5168\u4e0e\u8fd9\u4e9b\u57fa\u7840\u8bbe\u65bd\u65e0\u5173\u7684\uff0c\u56e0\u6b64\u5b83\u5141\u8bb8\u4f60\u9762\u5411\u4efb\u4f55\u73af\u5883\uff08\u5305\u62ec Kubernetes \u73af\u5883\uff0c\u4e5f\u5305\u62ec\u975e Kubernetes \u73af\u5883\u6bd4\u5982\u4e91\u5e73\u53f0\u548c\u8fb9\u7f18\u8bbe\u5907\u7b49\uff09\u53bb\u4ea4\u4ed8\u548c\u7ba1\u7406\u4efb\u4f55\u7c7b\u578b\u7684\u5e94\u7528\u3002"),(0,i.kt)("h2",{id:"kubevela-\u662f\u53ef\u7f16\u7a0b\u7684"},"KubeVela \u662f\u53ef\u7f16\u7a0b\u7684"),(0,i.kt)("p",null,"\u73b0\u5b9e\u4e16\u754c\u4e2d\u7684\u5e94\u7528\u4ea4\u4ed8\uff0c\u5f80\u5f80\u662f\u4e00\u4e2a\u6bd4\u8f83\u590d\u6742\u7684\u8fc7\u7a0b\u3002\u54ea\u6015\u662f\u4e00\u4e2a\u6bd4\u8f83\u901a\u7528\u7684\u4ea4\u4ed8\u6d41\u7a0b\uff0c\u4e5f\u4f1a\u56e0\u4e3a\u573a\u666f\u3001\u73af\u5883\u3001\u7528\u6237\u751a\u81f3\u56e2\u961f\u7684\u4e0d\u540c\u800c\u5343\u5dee\u4e07\u522b\u3002\u6240\u4ee5 KubeVela \u4ece\u7b2c\u4e00\u5929\u8d77\u5c31\u91c7\u7528\u4e86\u4e00\u79cd\u201c\u53ef\u7f16\u7a0b\u201d\u5f0f\u7684\u65b9\u6cd5\u6765\u5b9e\u73b0\u5b83\u7684\u4ea4\u4ed8\u6a21\u578b\uff0c\u8fd9\u4f7f\u5f97 KubeVela \u53ef\u4ee5\u4ee5\u524d\u6240\u672a\u6709\u7684\u7075\u6d3b\u5ea6\u9002\u914d\u5230\u4f60\u7684\u5e94\u7528\u4ea4\u4ed8\u573a\u666f\u4e2d\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"kernel",src:n(27349).Z})),(0,i.kt)("p",null,"\u5982\u679c\u8981\u8be6\u7ec6\u5b66\u4e60 KubeVela \u7684\u53ef\u7f16\u7a0b\u6587\u6863\uff0c\u6b22\u8fce\u67e5\u770b\u6587\u6863\u7f51\u7ad9\u4e2d ",(0,i.kt)("a",{parentName:"p",href:"../platform-engineers/oam/oam-model"},"\u81ea\u5b9a\u4e49\u6269\u5c55")," \u90e8\u5206\u3002"),(0,i.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u67e5\u770b ",(0,i.kt)("a",{parentName:"li",href:"../tutorials/webservice"},"\u5b9e\u8df5\u6559\u7a0b"),"\uff0c\u4e86\u89e3\u66f4\u591a\u4f7f\u7528\u573a\u666f\u548c\u6700\u4f73\u5b9e\u8df5\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u67e5\u770b ",(0,i.kt)("a",{parentName:"li",href:"../how-to/dashboard/application/create-application"},"\u64cd\u4f5c\u624b\u518c"),"\uff0c\u4e00\u6b65\u6b65\u4e86\u89e3\u66f4\u591a\u7684\u529f\u80fd\u3002")))}p.isMDXComponent=!0},27349:function(e,t,n){"use strict";t.Z=n.p+"assets/images/kernel-a3960044e36db96e8153efe4f1051ce8.png"},5694:function(e,t,n){"use strict";t.Z=n.p+"assets/images/system-arch-b325adfdced905e456683797340be7c9.jpg"}}]);