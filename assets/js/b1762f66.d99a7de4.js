(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[98387],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?a.createElement(b,i(i({ref:n},u),{},{components:t})):a.createElement(b,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},95759:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var a=t(22122),r=t(19756),o=(t(67294),t(3905)),i={title:"Secure your Database Connection"},c={unversionedId:"end-user/components/cloud-services/secure-your-database-connection",id:"version-v1.2/end-user/components/cloud-services/secure-your-database-connection",isDocsHomePage:!1,title:"Secure your Database Connection",description:"In the guide Provision and Binding Cloud Resources and Provision a Database and Import a SQL File for initialization,",source:"@site/versioned_docs/version-v1.2/end-user/components/cloud-services/secure-your-database-connection.md",sourceDirName:"end-user/components/cloud-services",slug:"/end-user/components/cloud-services/secure-your-database-connection",permalink:"/docs/end-user/components/cloud-services/secure-your-database-connection",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/components/cloud-services/secure-your-database-connection.md",version:"v1.2",lastUpdatedBy:"Zheng Xi Zhou",lastUpdatedAt:1646214010,formattedLastUpdatedAt:"3/2/2022",frontMatter:{title:"Secure your Database Connection"},sidebar:"version-v1.2/docs",previous:{title:"Provision a Database and Import a SQL File for initialization",permalink:"/docs/end-user/components/cloud-services/provision-and-initiate-database"},next:{title:"Rollout",permalink:"/docs/end-user/traits/rollout"}},s=[{value:"Provision a database",id:"provision-a-database",children:[]},{value:"Run application",id:"run-application",children:[]}],l={toc:s};function u(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the guide ",(0,o.kt)("a",{parentName:"p",href:"./provision-and-consume-cloud-services"},"Provision and Binding Cloud Resources")," and ",(0,o.kt)("a",{parentName:"p",href:"./provision-and-initiate-database"},"Provision a Database and Import a SQL File for initialization"),",\na database's public host ",(0,o.kt)("inlineCode",{parentName:"p"},"DB_PUBLIC_HOS")," is used to connect by business component. It's necessary when you want to have\na try, create a PoC, or use the database outside a cloud provider. But it's not secure for production use of database."),(0,o.kt)("p",null,"This tutorial will talk about how to secure your database connection."),(0,o.kt)("h2",{id:"provision-a-database"},"Provision a database"),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"./terraform/alibaba-rds"},"reference doc for Alibaba Cloud RDS"),", these two properties are essential."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"vswitch_id"),(0,o.kt)("td",{parentName:"tr",align:null},"The vswitch id of the RDS instance. If set, the RDS instance will be created in VPC, or it will be created in classic network."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"allocate_public_connection"),(0,o.kt)("td",{parentName:"tr",align:null},"Whether to allocate public connection for a RDS instance."),(0,o.kt)("td",{parentName:"tr",align:null},"bool"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("p",null,"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"vswitch_id")," to the same as one of VSwitch of your ACK cluster, or a new VSwitch which belongs to the VPC of the cluster.\nSet ",(0,o.kt)("inlineCode",{parentName:"p"},"allocation_public_connection")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," to disable internet connection."),(0,o.kt)("p",null,"Then using ",(0,o.kt)("inlineCode",{parentName:"p"},"DB_HOST")," in business component to securely connect the database by intranet connection"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\n\nspec:\n  components:\n    - name: web\n      ...\n      traits:\n        - type: service-binding\n          properties:\n            envMappings:\n              DATABASE_HOST:\n                secret: db-conn\n-                key: DB_PUBLIC_HOST\n+                key: DB_HOST\n\n\n    - name: db\n      type: alibaba-rds\n      properties:\n        ...\n+        vswitch_id: xxx\n+        allocate_public_connection: false\n        writeConnectionSecretToRef:\n          name: db-conn\n")),(0,o.kt)("h2",{id:"run-application"},"Run application"),(0,o.kt)("p",null,"Continue samples in ",(0,o.kt)("a",{parentName:"p",href:"./provision-and-consume-cloud-services"},"Provision and Binding Cloud Resources")," and ",(0,o.kt)("a",{parentName:"p",href:"./provision-and-initiate-database"},"Provision a Database and Import a SQL File for initialization"),"."))}u.isMDXComponent=!0}}]);