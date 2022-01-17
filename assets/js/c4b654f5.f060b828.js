(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[69038],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||r;return n?o.createElement(m,a(a({ref:t},s),{},{components:n})):o.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85684:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var o=n(22122),i=n(19756),r=(n(67294),n(3905)),a={title:"Deploy First Application"},l={unversionedId:"quick-start",id:"version-v1.2/quick-start",isDocsHomePage:!1,title:"Deploy First Application",description:"Before starting, please confirm that you've installed KubeVela Core and VelaUX in the control plane cluster based on Installation",source:"@site/versioned_docs/version-v1.2/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/docs/quick-start",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/quick-start.md",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642176699,formattedLastUpdatedAt:"1/14/2022",frontMatter:{title:"Deploy First Application"},sidebar:"version-v1.2/docs",previous:{title:"Installation",permalink:"/docs/install"},next:{title:"Deploy Container Image",permalink:"/docs/tutorials/webservice"}},p=[{value:"Choosing deployment type and Environment",id:"choosing-deployment-type-and-environment",children:[]},{value:"Setting up properties",id:"setting-up-properties",children:[]},{value:"Executing Workflow to deploy",id:"executing-workflow-to-deploy",children:[]},{value:"Deleting Application",id:"deleting-application",children:[]},{value:"Next Step",id:"next-step",children:[]}],c={toc:p};function s(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Before starting, please confirm that you've installed KubeVela Core and VelaUX in the control plane cluster based on ",(0,r.kt)("a",{parentName:"p",href:"/docs/install"},"Installation")),(0,r.kt)("p",{parentName:"blockquote"},"If you want to use KubeVela CLI for application delivery, please check ",(0,r.kt)("a",{parentName:"p",href:"./end-user/quick-start-cli"},"Deliver First Application")," in the Vela CLI manual.")),(0,r.kt)("p",null,"Welcome to KubeVela! In this section, we show you how to deliver your first app via VelaUX."),(0,r.kt)("p",null,"Follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Prepare a Docker image. we use ",(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/crccheck/hello-world"},"crccheck/hello-world")," for this time. Double-check if you're able to download it properly."),(0,r.kt)("li",{parentName:"ol"},"Create the first ",(0,r.kt)("inlineCode",{parentName:"li"},"Application")," of ",(0,r.kt)("inlineCode",{parentName:"li"},"webervice")," which is the common way to deploy stateless service."),(0,r.kt)("li",{parentName:"ol"},"Check out the status of the Application's instance.")),(0,r.kt)("p",null,"You'll get to know:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get familiar with core concepts as ",(0,r.kt)("a",{parentName:"li",href:"./getting-started/core-concept#application"},"Application"),", ",(0,r.kt)("a",{parentName:"li",href:"getting-started/core-concept#environment"},"Environment")," and ",(0,r.kt)("a",{parentName:"li",href:"getting-started/core-concept#target"},"Target")),(0,r.kt)("li",{parentName:"ul"},"Finished an application delivery by operating VelaUX")),(0,r.kt)("h2",{id:"choosing-deployment-type-and-environment"},"Choosing deployment type and Environment"),(0,r.kt)("p",null,"After VelaUX is installed, the first page you enter is for managing the app:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(41606).Z})),(0,r.kt)("p",null,"Then click the button of ",(0,r.kt)("inlineCode",{parentName:"p"},"New Application")," on the upper-right, type in these things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Name and other basic Infos."),(0,r.kt)("li",{parentName:"ol"},"Choose the deployment type. In this case, we use ",(0,r.kt)("inlineCode",{parentName:"li"},"webservice")," to deploy Stateless Application."),(0,r.kt)("li",{parentName:"ol"},"Choose your environment. We select the ",(0,r.kt)("inlineCode",{parentName:"li"},"Default")," Environment based on the ",(0,r.kt)("inlineCode",{parentName:"li"},"Default")," Target.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(19917).Z})),(0,r.kt)("h2",{id:"setting-up-properties"},"Setting up properties"),(0,r.kt)("p",null,"Next step, we see the page of properties. Configure following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Image address ",(0,r.kt)("inlineCode",{parentName:"li"},"crccheck/hello-world"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Other properties can be left blank for this case")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(68136).Z})),(0,r.kt)("p",null,"Confirmed. Notice that this application is only created but not deployed yet. VelaUX defaultly generates ",(0,r.kt)("a",{parentName:"p",href:"./getting-started/core-concept#workflow"},"Workflow")," and replicas of ",(0,r.kt)("a",{parentName:"p",href:"./getting-started/core-concept#trait"},"Trait"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(12513).Z})),(0,r.kt)("h2",{id:"executing-workflow-to-deploy"},"Executing Workflow to deploy"),(0,r.kt)("p",null,"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Development Environment")," and switch to the dev environment, deploy it. Or click the deploy button on the upper-right. When the workflow is finished, you'll get to see the list of instances lying within."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(98063).Z})),(0,r.kt)("p",null,"In the process of deploying, you can click ",(0,r.kt)("inlineCode",{parentName:"p"},"Check the details")," to view the status of the application:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(81785).Z})),(0,r.kt)("h2",{id:"deleting-application"},"Deleting Application"),(0,r.kt)("p",null,"If you want to delete the application when it's no longer used, simply:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Enter the page of environment, click ",(0,r.kt)("inlineCode",{parentName:"li"},"Recycle")," to reclaim the resources that this environment used."),(0,r.kt)("li",{parentName:"ol"},"Go back to the list of applications and click the drop-down menu to remove it.")),(0,r.kt)("p",null,"That's it! You succeed at the first application delivery. Congratulation!"),(0,r.kt)("h2",{id:"next-step"},"Next Step"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"View ",(0,r.kt)("a",{parentName:"li",href:"./tutorials/webservice"},"Tutorials")," to look on more of what you can achieve with KubeVela."),(0,r.kt)("li",{parentName:"ul"},"View ",(0,r.kt)("a",{parentName:"li",href:"./how-to/dashboard/application/create-application"},"How To guides")," to check out more features.")))}s.isMDXComponent=!0},12513:function(e,t,n){"use strict";t.Z=n.p+"assets/images/created-first-vela-app-b49f10058e571cb6e2cbf47dfdf94a3a.jpg"},41606:function(e,t,n){"use strict";t.Z=n.p+"assets/images/dashboard-f5cedc91ed2d0c87cbb4b89706b649f3.jpg"},19917:function(e,t,n){"use strict";t.Z=n.p+"assets/images/new-first-vela-app-7df836e3c6e3836234adaeaffb694155.jpg"},68136:function(e,t,n){"use strict";t.Z=n.p+"assets/images/port-first-vela-app-e4fe21c99fe93de41a1af40f6ddcb8df.png"},81785:function(e,t,n){"use strict";t.Z=n.p+"assets/images/status-first-vela-app-810ae1e8197263369bf002fc584126e6.jpg"},98063:function(e,t,n){"use strict";t.Z=n.p+"assets/images/succeed-first-vela-app-347eb665703eb780acfff1dc448903d0.jpg"}}]);