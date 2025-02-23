(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{364:function(s,a,t){"use strict";t.r(a);var e=t(5),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"docker容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker容器"}},[s._v("#")]),s._v(" docker容器")]),s._v(" "),a("h2",{attrs:{id:"容器是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器是什么"}},[s._v("#")]),s._v(" 容器是什么？")]),s._v(" "),a("p",[s._v("容器，就是一个被隔离的进程。")]),s._v(" "),a("h2",{attrs:{id:"为什么要隔离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要隔离"}},[s._v("#")]),s._v(" 为什么要隔离?")]),s._v(" "),a("ol",[a("li",[s._v("将应用程序与外界系统隔离，保证容器外系统安全")]),s._v(" "),a("li",[s._v("资源隔离，只能使用指定配额")])]),s._v(" "),a("h2",{attrs:{id:"和虚拟机的区别是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#和虚拟机的区别是什么"}},[s._v("#")]),s._v(" 和虚拟机的区别是什么?")]),s._v(" "),a("p",[s._v("虚拟机：虚拟的是硬件，需要在上面安装操作系统才能运行应用程序。")]),s._v(" "),a("p",[s._v("容器：共享下层的硬件和操作系统。")]),s._v(" "),a("p",[s._v("下图是官方的"),a("a",{attrs:{href:"https://www.docker.com/resources/what-container/",target:"_blank",rel:"noopener noreferrer"}},[s._v("图"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/20220705193057.png",alt:""}})]),s._v(" "),a("p",[s._v("其实上图关于容器的部分并不准确，APP也就是容器并不是运行在Docker上的，Docker只是在帮助用户创建进程时添加了各种Namespace参数，容器是特殊的进程，还是运行在操作系统上的。")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("br")]),s._v(" "),a("th",[s._v("实现方式")]),s._v(" "),a("th",[s._v("优势")]),s._v(" "),a("th",[s._v("劣势")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("虚拟机")]),s._v(" "),a("td",[s._v("虚拟化硬件")]),s._v(" "),a("td",[s._v("隔离程度非常高")]),s._v(" "),a("td",[s._v("资源消耗大，启动慢")])]),s._v(" "),a("tr",[a("td",[s._v("容器")]),s._v(" "),a("td",[s._v("直接利用下层的硬件和操作系统")]),s._v(" "),a("td",[s._v("资源利用率高，运行速度快")]),s._v(" "),a("td",[s._v("隔离程度低, 安全性低")])])])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("虚拟机是硬件级别的隔离，而容器化是进程间的隔离。")])]),s._v(" "),a("li",[a("p",[s._v("虚拟化需要模拟硬件占用部分内存，并且对宿主机操作的系统调用需要经过虚拟化软件的拦截与转换，造成资源的开销。而容器就是一个普通的进程，基本无额外的计算资源的开销。")])]),s._v(" "),a("li",[a("p",[s._v("在Linux内核中有部分的资源和对象无法namespace化，如时间。")])]),s._v(" "),a("li",[a("p",[s._v("因为容器是共享宿主机内核，所以对外暴露的供给面非常的大。")])])]),s._v(" "),a("h2",{attrs:{id:"什么是容器化应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是容器化应用"}},[s._v("#")]),s._v(" 什么是容器化应用？")]),s._v(" "),a("p",[s._v("镜像，就是将容器的初始化环境固化下来，将运行进程所需要的文件系统、依赖库、环境变量、启动参数等打包整合到一起，保存成一个静态的文件。")]),s._v(" "),a("p",[s._v("容器化环境可以通过镜像快速重建容器，应用程序看到的就是一致的运行环境。")]),s._v(" "),a("p",[s._v("容器化应用，也就是应用程序不直接与操作系统去打交道，而是将应用程序打包成镜像，再交给容器环境去运行")]),s._v(" "),a("p",[s._v('镜像与容器的关系还可以用"序列化"和"反序列化"来理解，镜像就是序列化到磁盘的数据，而容器是反序列化后内存中的对象。')]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/20220708104215.png",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/20220708102528.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"docker架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker架构"}},[s._v("#")]),s._v(" docker架构")]),s._v(" "),a("p",[s._v("创建容器时，我们通过docker命令请求Docker Daemon服务，然后该服务再通过RPC请求Containerd进程，该进程会创建Containerd-shim进程，该进程会再创建RunC进程，该进程是真正创建容器的是进程，等容器创建好后，RunC会退出，容器的父进程会变成Containerd-shim，当容器结束时，Conatinerd-shim会回收容器进程的资源，以防止僵尸进程。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/20220909143058.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"常用镜像操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用镜像操作"}},[s._v("#")]),s._v(" 常用镜像操作")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("命令")]),s._v(" "),a("th",[s._v("作用")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("docker pull")]),s._v(" "),a("td",[s._v("从远端仓库拉取镜像")])]),s._v(" "),a("tr",[a("td",[s._v("docker images")]),s._v(" "),a("td",[s._v("列出当前本地已有镜像")])]),s._v(" "),a("tr",[a("td",[s._v("docker rmi")]),s._v(" "),a("td",[s._v("删除不再使用的镜像")])])])]),s._v(" "),a("h2",{attrs:{id:"常用容器操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用容器操作"}},[s._v("#")]),s._v(" 常用容器操作")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("命令")]),s._v(" "),a("th",[s._v("作用")]),s._v(" "),a("th",[s._v("例子")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("docker run")]),s._v(" "),a("td",[s._v("使用镜像启动容器")]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("docker ps")]),s._v(" "),a("td",[s._v("列出正在运行的容器")]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("docker exec")]),s._v(" "),a("td",[s._v("在容器内执行另一个程序")]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("docker stop")]),s._v(" "),a("td",[s._v("停止容器")]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("docker start")]),s._v(" "),a("td",[s._v("将停止的容器再次启动")]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("docker rm")]),s._v(" "),a("td",[s._v("删除容器")]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("docker export")]),s._v(" "),a("td",[s._v("将容器内的文件系统导出")]),s._v(" "),a("td",[s._v("docker export -o rootfs.tar 容器ID")])])])]),s._v(" "),a("p",[s._v("容器被停止后，"),a("code",[s._v("docker ps")]),s._v("命令就看不到该容器了，需要使用"),a("code",[s._v("docker ps -a")]),s._v("来查看所有容器，包括已经停止的容器。")]),s._v(" "),a("p",[s._v("可能会导致非常多已经停止的容器占用系统资源，所以建议"),a("code",[s._v("docker run")]),s._v("时添加"),a("code",[s._v("--rm")]),s._v("参数，在容器运行完毕时自动清除")]),s._v(" "),a("p",[a("strong",[s._v("docker exec是如何进入到容器中的?")])]),s._v(" "),a("p",[s._v("该命令会创建一个新的进程加入到容器的namepsace中。")]),s._v(" "),a("p",[a("code",[s._v("/proc/{进程ID}/ns/")]),s._v("下的虚拟文件会链接到真实的Namespace文件上。通过查看exec创建的进程ns文件可以看出和容器的Namespace文件一致")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("master proc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("# ll "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("proc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("288948")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("ns"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("pid\nlrwxrwxrwx "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" Jul  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("proc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("288948")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("ns"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("pid "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token char"}},[s._v("'pid:[4026532247]'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("master proc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("# ll "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("proc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("289220")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("ns"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("pid\nlrwxrwxrwx "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" Jul  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("proc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("289220")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("ns"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("pid "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token char"}},[s._v("'pid:[4026532247]'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("strong",[s._v("docker run和docker exec的区别是什么?")])]),s._v(" "),a("p",[s._v("run是将镜像运行成容器并执行命令，该命令为1号进程。")]),s._v(" "),a("p",[s._v("exec是在容器中执行一个命令，该命令是另一个进程，加入到了容器的namespace中。")]),s._v(" "),a("h2",{attrs:{id:"容器镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器镜像"}},[s._v("#")]),s._v(" 容器镜像")]),s._v(" "),a("h3",{attrs:{id:"镜像内部机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜像内部机制"}},[s._v("#")]),s._v(" 镜像内部机制")]),s._v(" "),a("p",[s._v("容器镜像内部是由许多的镜像层("),a("strong",[s._v("Layer")]),s._v(")组成的，每层都是只读不可修改的一组文件，相同的层可以在镜像中共享，然后多个层像搭积木叠加起来，使用**联合文件系统（UnionFS)**将它们合并起来，最终形成容器看到的文件系统。")]),s._v(" "),a("p",[s._v("镜像中的层级是只读层，而容器所在的层级是可读写层。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/20220708171748.png",alt:""}})]),s._v(" "),a("p",[s._v("镜像的分层信息可以通过命令"),a("strong",[s._v("docker inspect 镜像名称")]),s._v("获取，其中RootFs是对应的信息")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" inspect b3log/siyuan\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"RootFS"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"layers"')]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Layers"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sha256:24302eb7d9085da80f016e7e4ae55417e412fb7e0a8021e95e3b60c67cde557d"')]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sha256:e7356c89d8c31fc628769b331f73d6e036e1d5900d2d2a3990c89ef91bce707a"')]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sha256:90358380b9ea63cfb8832ae627455faf85596e822ff8abe9e1d7c8bbd93804ad"')]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sha256:c6d8ffacc07d179562cd70114402e549d9fce92b12a019d3f4003eb94944d089"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("好处是，如果多个镜像使用了相同的层，可以直接共享，减少磁盘空间的占用。比如nginx镜像和Tomcat镜像都是用了基础镜像centos，那么该基础镜像可以共享。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/20220712184844.png",alt:""}})]),s._v(" "),a("p",[a("strong",[s._v("OverlayFS")])]),s._v(" "),a("p",[s._v("镜像层和容器是如何合并的呢？")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/20220712185333.png",alt:""}})]),s._v(" "),a("p",[s._v("lowerdir是镜像层，upperdir是容器层，如果双方有相同文件则展示容器层的文件。")]),s._v(" "),a("p",[s._v("在容器写文件时，会先从镜像层拷贝一份文件到容器层，然后再写入，使用的是**写时复制(copy on write)**策略")]),s._v(" "),a("p",[a("strong",[s._v("例子")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("overlay2\n├── lowerdirA\n│   ├── a     内容：AA\n│   └── b     内容：AA\n├── lowerdirB\n│   └── a     内容: BB\n├── merge\n├── upper\n└── work\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("执行以下命令使用overlay进行合并层")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" overlay overlay "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("lowerdir")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("lowerdirA:lowerdirB,upperdir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("upper,workdir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("work merge\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("lowerdir为镜像层，upperdir为容器层，merge目录为最终展示层。")]),s._v(" "),a("p",[s._v("可以看到merge目录中的a文件内容lowerdirA镜像层的内容")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZwz93q4afq8ck02cesqh4Z k8s_learn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat merge/a ")]),s._v("\nAA\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("当我们修改megre目录中的a文件时，可以看到upperdir目录的会生成a文件并且内容修改后的内容")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZwz93q4afq8ck02cesqh4Z k8s_learn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls upper/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZwz93q4afq8ck02cesqh4Z k8s_learn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo upper > merge/a")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZwz93q4afq8ck02cesqh4Z k8s_learn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls upper/")]),s._v("\na\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZwz93q4afq8ck02cesqh4Z k8s_learn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat upper/a")]),s._v("\nupper\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZwz93q4afq8ck02cesqh4Z k8s_learn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat merge/a")]),s._v("\nupper\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("当删除文件merge/a时，会出现什么情况呢?")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZwz93q4afq8ck02cesqh4Z k8s_learn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rm merge/a")]),s._v("\nrm: remove regular "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" ‘merge/a’? y\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZwz93q4afq8ck02cesqh4Z k8s_learn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll lowerdirA/")]),s._v("\ntotal "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" Jul "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":11 a\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" Jul "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":10 b\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZwz93q4afq8ck02cesqh4Z k8s_learn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll upper/")]),s._v("\ntotal "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nc--------- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" Jul "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":31 a\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZwz93q4afq8ck02cesqh4Z k8s_learn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("可以看出镜像层lowerdirA的文件a是不变的，而在容器层upper中的a文件类型变成了c，该文件类型，最终在展示层看不到该文件了。")]),s._v(" "),a("p",[s._v("可以使用命令docker inspect来查看layer的路径")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" inspect xxx\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GraphDriver"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Data"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"LowerDir"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/lib/docker/overlay2/641e486c54d15d2a8d807fd8964f4a4b8687cbcf95c176cd9a46553b1e80341d/diff:/var/lib/docker/overlay2/ed9ad4fb9d0f9bf3aea553c634e54fef89448cf43c5b662468d79f01cf41d0c3/diff:/var/lib/docker/overlay2/9db169e1ad2165f688e652ef06dfe9a3e465c31299f3c357a37a6919747efbc8/diff"')]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MergedDir"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/lib/docker/overlay2/fa3166e545a2d1811dbeecb6f1fdda96b9f97b3cd629f32a8ea378aa79b1c780/merged"')]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UpperDir"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/lib/docker/overlay2/fa3166e545a2d1811dbeecb6f1fdda96b9f97b3cd629f32a8ea378aa79b1c780/diff"')]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"WorkDir"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/lib/docker/overlay2/fa3166e545a2d1811dbeecb6f1fdda96b9f97b3cd629f32a8ea378aa79b1c780/work"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"overlay2"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[s._v("#")]),s._v(" Dockerfile")]),s._v(" "),a("p",[s._v("Dockerfile是一个用来创建镜像的文本文件，该文件中的每一条命令都会成生成一个layer。")]),s._v(" "),a("p",[s._v("例子：")]),s._v(" "),a("p",[s._v("最简单的Dockerfile的例子")]),s._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" busybox                  # 选择基础镜像")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" echo "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello world"')]),s._v("        # 启动容器时默认运行的命令")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("FROM指令是构建使用的基础镜像")]),s._v(" "),a("p",[s._v("CMD指令是用于启动容器时默认运行的命令")]),s._v(" "),a("p",[s._v("使用docker build 即可执行创建镜像")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" Dockerfile "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\nSending build context to Docker daemon   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(".68kB\nStep "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/2 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" FROM busybox\n ---"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" d38589532d97\nStep "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("/2 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" CMD "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello world"')]),s._v("\n ---"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Running "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" c5a762edd1c8\nRemoving intermediate container c5a762edd1c8\n ---"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" b61882f42db7\nSuccessfully built b61882f42db7\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"容器与外部的交互"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器与外部的交互"}},[s._v("#")]),s._v(" 容器与外部的交互")]),s._v(" "),a("p",[a("strong",[s._v("如何拷贝宿主机的文件到容器内")])]),s._v(" "),a("p",[s._v("可以使用docker cp命令将宿主机的文件拷贝到容器中。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" a.txt 062:/tmp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("其中的062为容器ID，如果想将容器中的文件拷贝到宿主机中，反过来即可。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" 062:/tmp/a.txt /tmp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("注意，这里的拷贝是临时的，拷贝进容器中的文件只存在于容器中，不存在与镜像中，如果想要将文件拷贝到镜像中，在写Dockerfile时使用copy命令拷贝即可。")]),s._v(" "),a("p",[a("strong",[s._v("宿主机与容器共享文件夹")])]),s._v(" "),a("p",[s._v("在使用镜像运行容器时，使用参数-v可以将宿主机中的文件夹映射到容器中，双方修改该文件夹中的内容，都可以及时看到。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /tmp:/tmp redis\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("如何实现网络互通？")])]),s._v(" "),a("p",[s._v("docker提供三种网络模式：")]),s._v(" "),a("ul",[a("li",[s._v("null，无网络")]),s._v(" "),a("li",[s._v("host，直接使用宿主机网络，在创建容器时，使用--net=host参数。")])]),s._v(" "),a("p",[s._v("其实就是创建新的namespace，而是直接加入到宿主机的namesapce")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--net")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("host nginx:alpine\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("bridge，桥接模式，由软件虚拟网卡与网桥，容器和宿主机都接入该网桥，即可正常发送数据包。可以使用参数"),a("code",[s._v("--net=bridge")]),s._v("创建容器，但这个是默认参数。")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--rm")]),s._v(" nginx:alpine\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("​")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("网络模式")]),s._v(" "),a("th",[s._v("优点")]),s._v(" "),a("th",[s._v("缺点")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("host")]),s._v(" "),a("td",[s._v("因为是直接使用宿主机的网络，效率更高"),a("br")]),s._v(" "),a("td",[s._v("运行太多的容器，会导致端口发生冲突")])]),s._v(" "),a("tr",[a("td",[s._v("bridge")]),s._v(" "),a("td",[s._v("因为有了网桥可以设置更多的策略，比如流量控制等")]),s._v(" "),a("td",[s._v("需要软件模拟虚拟网卡与网桥，效率更低")])])])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/20220712213036.png",alt:""}})]),s._v(" "),a("p",[s._v("​")]),s._v(" "),a("h2",{attrs:{id:"关于k8s与docker的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于k8s与docker的关系"}},[s._v("#")]),s._v(" 关于k8s与docker的关系")]),s._v(" "),a("p",[s._v("在2014年的时候,Docker如日中天，那么k8s自然选择基于docker上运行。")]),s._v(" "),a("p",[s._v("在2016年k8s加入了CNCF，一个开源的云原生计算基金会。")]),s._v(" "),a("p",[s._v("并且引入了一个接口标准：CRI，Container Runtime Interface。也就是规定kubelet该如何调用Container Runtime去管理容器和镜像，但这是一套全新的接口，和之前的Docker完全不兼容。目的很明显，不想绑定Docker，可以随时将Docker踢掉。")]),s._v(" "),a("p",[s._v('因为docker已经非常成熟，各大厂商不可能将Docker全部替换。所以k8s在kubelet和Docker中间加一个"适配器"，把Docker的接口转换成符合CRI标准的接口。')]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/20220717211119.png",alt:""}})]),s._v(" "),a("p",[a("strong",[s._v("什么是containerd？")])]),s._v(" "),a("p",[s._v("不过 Docker 也没有“坐以待毙”，而是采取了“断臂求生”的策略，推动自身的重构，把原本单体架构的 Docker Engine 拆分成了多个模块，其中的 Docker daemon 部分就捐献给了 CNCF，形成了 containerd。")]),s._v(" "),a("p",[s._v("containerd 作为 CNCF 的托管项目，自然是要符合 CRI 标准的。但 Docker 出于自己诸多原因的考虑，它只是在 Docker Engine 里调用了 containerd，外部的接口仍然保持不变，也就是说还不与 CRI 兼容。")]),s._v(" "),a("p",[s._v("由于 Docker 的“固执己见”，这时 Kubernetes 里就出现了两种调用链：第一种是用 CRI 接口调用 dockershim，然后 dockershim 调用 Docker，Docker 再走 containerd 去操作容器。第二种是用 CRI 接口直接调用 containerd 去操作容器。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/20220717212252.png",alt:""}})]),s._v(" "),a("p",[s._v("显而易见，使用第二种省去了dockershim和Docker Engine两个环节，损耗更少，性能也提升了。")]),s._v(" "),a("p",[a("strong",[s._v('正式"弃用Docker')]),s._v('"')]),s._v(" "),a("p",[s._v('在2020年K8s弃用Docker支持，但该弃用支持弃用了"dockershim"的这个组件，也就是把dockershim移出kubelete，只是绕过Docker，直接调用了Docker内部的containerd而已。')]),s._v(" "),a("p",[s._v("并且对docker也无影响，因为docker内部也是使用开源的containerd。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/20220717213009.png",alt:""}})]),s._v(" "),a("p",[s._v("唯一影响的是，k8s是直接操作containerd操作容器，那么它和docker是独立的工作环境，彼此都不能访问对方的容器和镜像，也就是docker  ps看不到k8s运行的容器。改用crictl命令。")]),s._v(" "),a("p",[a("strong",[s._v("Docker 重构自身，分离出 containerd，这是否算是一种“自掘坟墓”的行为呢？如果没有 containerd，那现在的情形会是怎么样的呢？")])]),s._v(" "),a("p",[s._v("Docker 是一个完整的软件产品线，不止是 containerd，它还包括了镜像构建、分发、测试等许多服务，甚至在 Docker Desktop 里还内置了 Kubernetes。")]),s._v(" "),a("blockquote",[a("p",[s._v("docker分离containerd是一个很聪明的举动！与其将来被人分离或者抛弃不用，不如我主动革新，把Kubernates绑在我的战车上，这样cri的第一选择仍然是docker的自己人。"),a("br"),s._v("\n一时的退让是为了更好的将来。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);