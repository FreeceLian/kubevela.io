(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[74889],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),k=l,m=d["".concat(s,".").concat(k)]||d[k]||c[k]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:l},t)}},41395:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(67294),l=n(80944),r=n(86010),o="tabItem_1uMI",i="tabItemActive_2DSg";var s=37,u=39;var p=function(e){var t=e.lazy,n=e.block,p=e.defaultValue,c=e.values,d=e.groupId,k=e.className,m=(0,l.Z)(),b=m.tabGroupChoices,v=m.setTabGroupChoices,h=(0,a.useState)(p),f=h[0],g=h[1],y=a.Children.toArray(e.children),N=[];if(null!=d){var w=b[d];null!=w&&w!==f&&c.some((function(e){return e.value===w}))&&g(w)}var C=function(e){var t=e.currentTarget,n=N.indexOf(t),a=c[n].value;g(a),null!=d&&(v(d,a),setTimeout((function(){var e,n,a,l,r,o,s,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,l=e.bottom,r=e.right,o=window,s=o.innerHeight,u=o.innerWidth,n>=0&&r<=u&&l<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case u:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case s:var l=N.indexOf(e.target)-1;n=N[l]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},k)},c.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,r.Z)("tabs__item",o,{"tabs__item--active":f===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:C,onClick:C},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},79443:function(e,t,n){"use strict";var a=(0,n(67294).createContext)(void 0);t.Z=a},80944:function(e,t,n){"use strict";var a=n(67294),l=n(79443);t.Z=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},83020:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(22122),l=n(19756),r=(n(67294),n(3905)),o=n(41395),i=n(58215),s={title:"Installation"},u={unversionedId:"install",id:"version-v1.2/install",isDocsHomePage:!1,title:"Installation",description:"For upgrading existing KubeVela, please read the upgrade guide.",source:"@site/versioned_docs/version-v1.2/install.mdx",sourceDirName:".",slug:"/install",permalink:"/docs/install",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/install.mdx",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1643108262,formattedLastUpdatedAt:"1/25/2022",frontMatter:{title:"Installation"},sidebar:"version-v1.2/docs",previous:{title:"Architecture",permalink:"/docs/getting-started/architecture"},next:{title:"Deploy First Application",permalink:"/docs/quick-start"}},p=[{value:"1. Choose Control Plane Cluster",id:"1-choose-control-plane-cluster",children:[]},{value:"2. Install KubeVela Core",id:"2-install-kubevela-core",children:[]},{value:"3. Install KubeVela CLI",id:"3-install-kubevela-cli",children:[]},{value:"4. Install VelaUX",id:"4-install-velaux",children:[]},{value:"5. Uninstall",id:"5-uninstall",children:[]},{value:"Next Step",id:"next-step",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,l.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For upgrading existing KubeVela, please read the ",(0,r.kt)("a",{parentName:"p",href:"./platform-engineers/advanced-install/#upgrade"},"upgrade guide"),".")),(0,r.kt)("h2",{id:"1-choose-control-plane-cluster"},"1. Choose Control Plane Cluster"),(0,r.kt)("p",null,"Requirements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kubernetes cluster >= v1.19 && < v1.22"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"Kubectl")," && ",(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"Helm v3"),".")),(0,r.kt)("p",null,"KubeVela relies on Kubernetes as a control plane. The control plane could be any managed Kubernetes offering or your cluster."),(0,r.kt)("p",null,"For local deployment and test, you could use ",(0,r.kt)("inlineCode",{parentName:"p"},"kind")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"minikube"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For production usage, you could use your Kubernetes cluster or Kubernetes services provided by cloud providers.")),(0,r.kt)(o.Z,{className:"unique-tabs",defaultValue:"kind",values:[{label:"Kind",value:"kind"},{label:"Minikube",value:"minikube"},{label:"RKE",value:"rke"},{label:"Cloud Provider",value:"cloudprovider"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"minikube",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Minikube is ",(0,r.kt)("strong",{parentName:"p"},"NOT RECOMMENDED")," for production.")),(0,r.kt)("p",null,"Follow the minikube ",(0,r.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"installation guide"),"."),(0,r.kt)("p",null,"Then spins up a minikube cluster"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"minikube start\n")),(0,r.kt)("details",null," ",(0,r.kt)("summary",null," Install ingress to enable service route "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"minikube addons enable ingress\n")))),(0,r.kt)(i.Z,{value:"rke",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This installation applies to the production environment. Please prepare 1~N servers or VMs.")),(0,r.kt)("p",null,"This section guides to install a RKE Kubernetes cluster, you can refer to their installation guides for ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.5/en/installation/resources/k8s-tutorials/infrastructure-tutorials/infra-for-ha/"},"more details"),"."),(0,r.kt)("b",null,"\uff081\uff09 Docker "),(0,r.kt)("p",null,"The RKE depends on docker, Please install Docker on all servers or virtual machines, if not installed follow the docker ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"installation guide"),"."),(0,r.kt)("b",null,"\uff082\uff09Install RKE:"),(0,r.kt)("p",null,"Download RKE binary from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke/releases"},"RKE release page"),"."),(0,r.kt)("p",null,"If your internet access was limited, try using the binary cached by KubeVela team:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wget https://static.kubevela.net/binary/rke/rke_linux-amd64 -O /usr/bin/rke\nchmod +x /usr/bin/rke\n")),(0,r.kt)("b",null,"\uff083\uff09Install RKE cluster"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Please switch to a non-root user who has permission to operate docker and execute the following commands.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"  mkdir ~/rkeinit && cd ~/rkeinit\n  # Wizard-style configuration\n  rke config\n  # Kubernetes Cluster Installation\n  rke up\n  # Install kubectl Command\n  mkdir ~/.kube\n  cp kube_config_cluster.yml ~/.kube/config\n  docker cp kubelet:/usr/local/bin/kubectl /usr/local/bin/kubectl\n"))),(0,r.kt)(i.Z,{value:"kind",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Kind is ",(0,r.kt)("strong",{parentName:"p"},"NOT RECOMMENDED")," for production.")),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installation"},"this guide")," to install kind."),(0,r.kt)("p",null,"Then spins up a kind cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'cat <<EOF | kind create cluster --image=kindest/node:v1.18.15 --config=-\nkind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nnodes:\n- role: control-plane\n  kubeadmConfigPatches:\n  - |\n    kind: InitConfiguration\n    nodeRegistration:\n      kubeletExtraArgs:\n        node-labels: "ingress-ready=true"\n  extraPortMappings:\n  - containerPort: 80\n    hostPort: 80\n    protocol: TCP\n  - containerPort: 443\n    hostPort: 443\n    protocol: TCP\nEOF\n')),(0,r.kt)("details",null," ",(0,r.kt)("summary",null," Install ingress controller to enable service route "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/kind/deploy.yaml\n")))),(0,r.kt)(i.Z,{value:"cloudprovider",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Using for production environment")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Alibaba Cloud ",(0,r.kt)("a",{parentName:"li",href:"https://www.aliyun.com/product/kubernetes"},"ACK Service")),(0,r.kt)("li",{parentName:"ul"},"AWS ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cn/eks"},"EKS Service")),(0,r.kt)("li",{parentName:"ul"},"Azure ",(0,r.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/services/kubernetes-service"},"AKS Service")),(0,r.kt)("li",{parentName:"ul"},"Google ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine"},"GKE Service"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Please make sure one of the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/deploy/"},"ingress controllers")," is available.")))),(0,r.kt)("h2",{id:"2-install-kubevela-core"},"2. Install KubeVela Core"),(0,r.kt)("p",null,"Before installation, please make sure that Helm is available. If not installed, please head to ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"Helm Installation")," first."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add and update KubeVela Helm chart repo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add kubevela https://charts.kubevela.net/core\nhelm repo update\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install KubeVela Core")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system kubevela kubevela/vela-core --version 1.2.2 --wait\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Verify KubeVela Core installation")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm test kubevela -n vela-system\n")),(0,r.kt)("details",null," ",(0,r.kt)("summary",null," check out the outcome "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Pod kubevela-application-test pending\nPod kubevela-application-test pending\nPod kubevela-application-test running\nPod kubevela-application-test succeeded\nNAME: kubevela\nLAST DEPLOYED: Tue Apr 13 18:42:20 2021\nNAMESPACE: vela-system\nSTATUS: deployed\nREVISION: 1\nTEST SUITE:     kubevela-application-test\nLast Started:   Fri Apr 16 20:49:10 2021\nLast Completed: Fri Apr 16 20:50:04 2021\nPhase:          Succeeded\nTEST SUITE:     first-vela-app\nLast Started:   Fri Apr 16 20:49:10 2021\nLast Completed: Fri Apr 16 20:49:10 2021\nPhase:          Succeeded\nNOTES:\nWelcome to use the KubeVela! Enjoy your shipping application journey!\n"))),(0,r.kt)("h2",{id:"3-install-kubevela-cli"},"3. Install KubeVela CLI"),(0,r.kt)("p",null,"KubeVela CLI provides an easy to engage and manage your application delivery in command lines."),(0,r.kt)(o.Z,{className:"unique-tabs",defaultValue:"script",values:[{label:"Script",value:"script"},{label:"Homebrew",value:"homebrew"},{label:"Download directly from releases",value:"download"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"script",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," MacOS/Linux ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"curl -fsSl https://kubevela.io/script/install.sh | bash -s 1.2.2\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Windows")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Only the official release version is supported.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'powershell -Command "iwr -useb https://kubevela.io/script/install.ps1 | iex"\n'))),(0,r.kt)(i.Z,{value:"homebrew",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"macOS/Linux")),(0,r.kt)("p",null,"Update your brew first. Please note that the brew method only supports the installation of the official release version."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"brew update\n")),(0,r.kt)("p",null,"Then install KubeVela CLI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"brew install kubevela\n"))),(0,r.kt)(i.Z,{value:"download",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download the latest ",(0,r.kt)("inlineCode",{parentName:"li"},"vela")," binary file via ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/oam-dev/kubevela/releases"},"release log"),"."),(0,r.kt)("li",{parentName:"ul"},"Unzip the binary file, and configure the environment variables in ",(0,r.kt)("inlineCode",{parentName:"li"},"$PATH"),", and you're done.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"sudo mv ./vela /usr/local/bin/vela\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/issues/625"},"Installation Tips"),':\nIf you are using a Mac system, it will pop up a warning that "vela" cannot be opened because the package from the developer cannot be verified.'),(0,r.kt)("p",{parentName:"blockquote"},"MacOS imposes stricter restrictions on the software that can run in the system. You can temporarily solve this problem by opening ",(0,r.kt)("inlineCode",{parentName:"p"},"System Preference ->Security & Privacy -> General")," and clicking on ",(0,r.kt)("inlineCode",{parentName:"p"},"Allow Anyway"),".")))),(0,r.kt)("h2",{id:"4-install-velaux"},"4. Install VelaUX"),(0,r.kt)("p",null,"VelaUX is a dashboard including UI+API services, it enables you to do everything around application delivery and management."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"vela addon enable velaux\n")),(0,r.kt)("p",null,"expected output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Addon: velaux enabled Successfully.\n")),(0,r.kt)("p",null,"By default, velaux didn't have any exposed port, you can view it by:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vela port-forward addon-velaux -n vela-system\n")),(0,r.kt)("p",null,"Choose ",(0,r.kt)("inlineCode",{parentName:"p"},"> Cluster: local | Namespace: vela-system | Component: velaux | Kind: Service")," for visit."),(0,r.kt)("p",null,"If you have loadbalaner or ingress, please refer to ",(0,r.kt)("a",{parentName:"p",href:"./reference/addons/velaux"},"VelaUX addon docs")," for more advanced installation ways."),(0,r.kt)("h2",{id:"5-uninstall"},"5. Uninstall"),(0,r.kt)("p",null,"Before uninstalling kubevela, you must delete all applications and disable all addons."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Uninstall VelaUX")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vela addon disable velaux\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Uninstall KubeVela Core")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"helm uninstall -n vela-system kubevela\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Uninstall CRD")),(0,r.kt)("p",null,"Before deleting, you must delete all CR resources."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get crd |grep oam | awk '{print $1}' | xargs kubectl delete crd\n")),(0,r.kt)("h2",{id:"next-step"},"Next Step"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After installed KubeVela, let's begin to ",(0,r.kt)("a",{parentName:"li",href:"./quick-start"},"Deploy First Application"),"\u3002")))}d.isMDXComponent=!0},86010:function(e,t,n){"use strict";function a(e){var t,n,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(l&&(l+=" "),l+=n);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}function l(){for(var e,t,n=0,l="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(l&&(l+=" "),l+=t);return l}n.d(t,{Z:function(){return l}})}}]);