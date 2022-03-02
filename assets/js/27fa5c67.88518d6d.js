(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[83081],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},25708:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return c},default:function(){return p}});var r=t(22122),o=t(19756),a=(t(67294),t(3905)),s={title:"Provision and Binding Cloud Resources"},i={unversionedId:"end-user/components/cloud-services/provision-and-consume-cloud-services",id:"version-v1.2/end-user/components/cloud-services/provision-and-consume-cloud-services",isDocsHomePage:!1,title:"Provision and Binding Cloud Resources",description:"Cloud-oriented development is now becoming the norm, there is an urgent need to integrate cloud resources from different",source:"@site/versioned_docs/version-v1.2/end-user/components/cloud-services/provision-and-consume-cloud-services.md",sourceDirName:"end-user/components/cloud-services",slug:"/end-user/components/cloud-services/provision-and-consume-cloud-services",permalink:"/docs/end-user/components/cloud-services/provision-and-consume-cloud-services",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/components/cloud-services/provision-and-consume-cloud-services.md",version:"v1.2",lastUpdatedBy:"Zheng Xi Zhou",lastUpdatedAt:1646214010,formattedLastUpdatedAt:"3/2/2022",frontMatter:{title:"Provision and Binding Cloud Resources"},sidebar:"version-v1.2/docs",previous:{title:"Gateway for Public Access",permalink:"/docs/end-user/traits/ingress"},next:{title:"Provision a Database and Import a SQL File for initialization",permalink:"/docs/end-user/components/cloud-services/provision-and-initiate-database"}},c=[{value:"Terraform",id:"terraform",children:[{value:"Provision cloud resources",id:"provision-cloud-resources",children:[]},{value:"Bind cloud resources",id:"bind-cloud-resources",children:[]}]},{value:"Next",id:"next",children:[]}],l={toc:c};function p(e){var n=e.components,s=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Cloud-oriented development is now becoming the norm, there is an urgent need to integrate cloud resources from different\nsources and types. Whether it is the most basic object storage, cloud database, or load balancing, it is all faced with\nthe challenges of hybrid cloud, multi-cloud and other complex environments. KubeVela is perfect to satisfy the needs."),(0,a.kt)("p",null,"KubeVela efficiently and securely integrates different types of cloud resources through resource binding capabilities in\ncloud resource Components and Traits. At present, you can directly use the default components of those cloud resources below.\nAt the same time, more new cloud resources will gradually become the default option under the support of the community in the future.\nYou can use cloud resources of various manufacturers in a standardized and unified way."),(0,a.kt)("p",null,"This tutorial will talk about how to provision and consume Cloud Resources by Terraform."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f This section requires your platform engineers have already enabled ",(0,a.kt)("a",{parentName:"p",href:"../../../reference/addons/terraform"},"cloud resources addon"),".")),(0,a.kt)("h2",{id:"terraform"},"Terraform"),(0,a.kt)("p",null,"All supported Terraform cloud resources can be seen in the ",(0,a.kt)("a",{parentName:"p",href:"./cloud-resources-list"},"list"),". You can also filter them by command by ",(0,a.kt)("inlineCode",{parentName:"p"},"vela components --label type=terraform"),"."),(0,a.kt)("h3",{id:"provision-cloud-resources"},"Provision cloud resources"),(0,a.kt)("p",null,"Use the following Application to provision an OSS bucket:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: provision-cloud-resource-sample\nspec:\n  components:\n    - name: sample-oss\n      type: alibaba-oss\n      properties:\n        bucket: vela-website-0911\n        acl: private\n        writeConnectionSecretToRef:\n          name: oss-conn\n")),(0,a.kt)("p",null,"The above ",(0,a.kt)("inlineCode",{parentName:"p"},"alibaba-oss")," component will create an OSS bucket named ",(0,a.kt)("inlineCode",{parentName:"p"},"vela-website-0911"),", with private acl, with connection information stored in a secreted named ",(0,a.kt)("inlineCode",{parentName:"p"},"oss-conn"),".\ndescription, whether it's compulsory, and default value."),(0,a.kt)("p",null,"Apply the above application, then check the status:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela ls\nAPP                             COMPONENT   TYPE        TRAITS  PHASE   HEALTHY STATUS                                          CREATED-TIME\nprovision-cloud-resource-sample sample-oss  alibaba-oss         running healthy Cloud resources are deployed and ready to use   2021-09-11 12:55:57 +0800 CST\n")),(0,a.kt)("p",null,"After the phase becomes ",(0,a.kt)("inlineCode",{parentName:"p"},"running")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"healthy"),", you can then check the OSS bucket in Alibaba Cloud console or by ",(0,a.kt)("a",{parentName:"p",href:"https://partners-intl.aliyun.com/help/doc-detail/50452.htm"},"ossutil"),"\ncommand."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ ossutil ls oss://\nCreationTime                                 Region    StorageClass    BucketName\n2021-09-11 12:56:17 +0800 CST        oss-cn-beijing        Standard    oss://vela-website-0911\n")),(0,a.kt)("h3",{id:"bind-cloud-resources"},"Bind cloud resources"),(0,a.kt)("p",null,"Let's deploy\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/tree/master/docs/examples/terraform/cloud-resource-provision-and-consume/application.yaml"},"application"),"\nbelow to provision Alibaba Cloud OSS and RDS cloud resources, and consume them by the web component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: webapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: zzxwill/flask-web-application:v0.3.1-crossplane\n        port: 80\n      traits:\n        - type: service-binding\n          properties:\n            envMappings:\n              # environments refer to db-conn secret\n              DB_PASSWORD:\n                secret: db-conn                                   # 1) If the env name is the same as the secret key, secret key can be omitted.\n              endpoint:\n                secret: db-conn\n                key: DB_PUBLIC_HOS                                # 2) If the env name is different from secret key, secret key has to be set.\n              username:\n                secret: db-conn\n                key: DB_USER\n              # environments refer to oss-conn secret\n              BUCKET_NAME:\n                secret: oss-conn\n\n    - name: sample-db\n      type: alibaba-rds\n      properties:\n        instance_name: sample-db\n        account_name: oamtest\n        password: U34rfwefwefffaked\n        writeConnectionSecretToRef:\n          name: db-conn\n\n    - name: sample-oss\n      type: alibaba-oss\n      properties:\n        bucket: vela-website-0911\n        acl: private\n        writeConnectionSecretToRef:\n          name: oss-conn\n")),(0,a.kt)("p",null,"The component ",(0,a.kt)("inlineCode",{parentName:"p"},"sample-db")," will generate secret ",(0,a.kt)("inlineCode",{parentName:"p"},"db-conn")," with ",(0,a.kt)("a",{parentName:"p",href:"./terraform/alibaba-rds#outputs"},"these keys"),", and the component\n",(0,a.kt)("inlineCode",{parentName:"p"},"sample-oss")," will generate secret ",(0,a.kt)("inlineCode",{parentName:"p"},"oss-conn"),". These secrets are binded to the Envs of component ",(0,a.kt)("inlineCode",{parentName:"p"},"express-server")," by trait\n",(0,a.kt)("a",{parentName:"p",href:"../../traits/service-binding"},"Service Binding"),". Then the component can consume instances of OSS and RDS."),(0,a.kt)("p",null,"Deploy and verify the application."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela ls\nAPP     COMPONENT       TYPE        TRAITS          PHASE           HEALTHY     STATUS  CREATED-TIME\nwebapp  express-server  webservice  service-binding running         healthy             2021-09-08 16:50:41 +0800 CST\n\u251c\u2500      sample-db       alibaba-rds                 running         healthy             2021-09-08 16:50:41 +0800 CST\n\u2514\u2500      sample-oss      alibaba-oss                 running         healthy             2021-09-08 16:50:41 +0800 CST\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela port-forward webapp\nForwarding from 127.0.0.1:8080 -> 80\nForwarding from [::1]:8080 -> 80\n\nForward successfully! Opening browser ...\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(12506).Z})),(0,a.kt)("h2",{id:"next"},"Next"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../component-observability"},"Component Observability")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../workflow/component-dependency-parameter"},"Data Pass Between Components ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../../case-studies/multi-cluster"},"Multi-Cluster and Environment"))))}p.isMDXComponent=!0},12506:function(e,n,t){"use strict";n.Z=t.p+"assets/images/crossplane-visit-application-v3-b3536448afa1f842f48ee2acb03920de.jpg"}}]);