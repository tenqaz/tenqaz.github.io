(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{412:function(s,t,a){"use strict";a.r(t);var e=a(5),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),t("p",[s._v("在logstash中，input管道接收tcp和udp的日志，然后再通过output管道将日志输出到pulsar中，如下图所示：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/17302568788191730256878496.png",alt:"17302568788191730256878496.png"}})]),s._v(" "),t("p",[s._v("当前的问题是，在使用tcp和udp接入方式接入一段时间日志之后，日志突然无法接入了，在pulsar中的对应topic没有新的日志生产进来了。")]),s._v(" "),t("h2",{attrs:{id:"检查网络情况"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查网络情况"}},[s._v("#")]),s._v(" 检查网络情况")]),s._v(" "),t("ol",[t("li",[s._v("在容器中抓包，判断数据包是否进入到容器中")])]),s._v(" "),t("p",[s._v("因为服务都是容器化部署的，所以可以使用"),t("code",[s._v("nsenter -t $Pid -n")]),s._v("来进入到容器的network namespace中，然后再使用"),t("code",[s._v("tcpdump -i any port 514 -vvnn")]),s._v("来抓取514端口的数据包。")]),s._v(" "),t("p",[s._v("通过抓包是可以抓到数据包，并且看三次握手和数据包都是正常的，说明流量已经进入到容器中了。")]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("查看tcp和udp缓存队列")])]),s._v(" "),t("p",[s._v("使用"),t("code",[s._v("netstat -anp")]),s._v("查看tcp和upd缓存队列，发现Recv-Q是一直有堆积的，也就是说，服务端没有在从缓存队列中消费日志，服务端卡住了。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# netstat -anp")]),s._v("\nActive Internet connections "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("servers and established"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nProto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name  \ntcp   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("286138")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.2")]),s._v(".19.144:514         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.65")]),s._v(".132.32:46778      ESTABLISHED "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("538152")]),s._v("/java   \nudp   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("152543")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.2")]),s._v(".19.144:514         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.65")]),s._v(".132.32:46774      ESTABLISHED "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("538152")]),s._v("/java  \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"检查logstash管道信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查logstash管道信息"}},[s._v("#")]),s._v(" 检查logstash管道信息")]),s._v(" "),t("p",[s._v("进入到容器中执行以下命令来获取logstash对应管道的信息")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XGET")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost:9600/_node/stats/pipelines/syslog?pretty'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("可以看到input管道中tcp插件的out的数量一直保持不变，说明已经没有接收新的数据包了。")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"id"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"d1a2689850bcefed823d25f0ae0ee7b863f3843474c6eafd3d3fe5aa7babcded"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tcp"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"events"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"queue_push_duration_in_millis"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3728")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"out"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6680")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("再看output管道的pulsar插件信息，可以看到in比out多了150，这是因为pipeline.batch.size=50，并且pipeline.workers=3，所以一共有150条日志阻塞在队列中，pulsar-client法发送出去，阻塞了。")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"id"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"4acf48fc134b333ecb24218723c8fd36d54dc3713cbe66bd199ce4ccb09f2cd1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pulsar"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"events"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"duration_in_millis"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9923")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"in"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6529")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"out"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("通过查看pulsar服务的状态和日志发现其并没有任何异常，手动去生产日志也是可以的，所以暂时排除了pulsar本身的问题。")]),s._v(" "),t("h2",{attrs:{id:"从堆栈中找到蛛丝马迹"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从堆栈中找到蛛丝马迹"}},[s._v("#")]),s._v(" 从堆栈中找到蛛丝马迹")]),s._v(" "),t("p",[s._v("通过以下命令来查看logstash的线程堆栈信息")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# curl -XGET 'localhost:9600/_node/hot_threads?pretty'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"java.base@11.0.15/jdk.internal.misc.Unsafe.park(Native Method)"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"java.base@11.0.15/java.util.concurrent.locks.LockSupport.park(LockSupport.java:194)"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"java.base@11.0.15/java.util.concurrent.locks.AbstractQueuedSynchronizer'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ConditionObject")]),s._v('.await(AbstractQueuedSynchronizer.java:2081)"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"org.apache.pulsar.client.impl.MemoryLimitController.reserveMemory(MemoryLimitController.java:88)"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("通过上面的堆栈信息去google上搜索，找到了下面这个链接，发现是pulsar的官方bug，在开启压缩时，并且内存限制的越小，越容易触发该BUG，从而导致pulsar-client发生阻塞。")]),s._v(" "),t("p",[s._v("https://lists.apache.org/thread/76jn7k01ldgkl54n0bpgw3sf2kxqq5q9")]),s._v(" "),t("h2",{attrs:{id:"复现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复现"}},[s._v("#")]),s._v(" 复现")]),s._v(" "),t("p",[s._v("这里用的是开源的pulsar插件："),t("a",{attrs:{href:"https://github.com/streamnative/logstash-output-pulsar",target:"_blank",rel:"noopener noreferrer"}},[s._v("logstash-output-pulsar"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("其并没有内存限制配置参数，通过修改源码将pulsar-client的memory_limit参数暴露出来，并将其设置成1，开启压缩，持续构造日志进来，会发现稳定快速复现该问题。")]),s._v(" "),t("h2",{attrs:{id:"修复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修复"}},[s._v("#")]),s._v(" 修复")]),s._v(" "),t("p",[s._v("查看logstash-output-pulsar项目下的"),t("code",[s._v("build.gradle")]),s._v("文件，其pulsar版本为2.10.2，而在https://github.com/apache/pulsar/pull/21790 提交可以看到在3.2.0版本修复的。")]),s._v(" "),t("p",[s._v("修改项目中pulsar-client版本号，打包出来，再按照上面的复现步骤，发现不会再进行阻塞了。")]),s._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("善于利用组件提供的各种工具得到其指标，分析原因，找到蛛丝马迹，再利用google去搜索。")])])}),[],!1,null,null,null);t.default=n.exports}}]);