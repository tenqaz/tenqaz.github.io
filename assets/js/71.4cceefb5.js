(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{429:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_0-相关链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-相关链接"}},[s._v("#")]),s._v(" 0. 相关链接")]),s._v(" "),t("p",[s._v("源码案例："),t("a",{attrs:{href:"https://github.com/tenqaz/python-examples",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/tenqaz/python-examples"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("官方文档："),t("a",{attrs:{href:"https://grpc.io/docs/languages/python/quickstart/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://grpc.io/docs/languages/python/quickstart"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"_1-创建protobuf文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建protobuf文件"}},[s._v("#")]),s._v(" 1. 创建protobuf文件")]),s._v(" "),t("p",[s._v("在目录proto目录下创建"),t("code",[s._v("user.proto")]),s._v("文件，创建User的rpc服务定义，该服务中包含AddUser和GetUser两个调用，并使用下面创建的对应的结构体作为请求体和响应体。\n注意：需要添加"),t("code",[s._v("package proto")]),s._v("，否则下面编译生成的python文件引用路径则不正确。")]),s._v(" "),t("div",{staticClass:"language-protobuf line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-protobuf"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("syntax")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"proto3"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 包名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" proto"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 定义User rpc服务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("service")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 定义rpc服务的方法")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rpc")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("AddUser")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserResponse")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rpc")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetUser")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GetUserRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GetUserResponse")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 请求的结构体")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("message")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserRequest")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("uint32")]),s._v(" age "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 响应的结构体")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("message")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserResponse")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" msg "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int32")]),s._v(" code "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("message")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GetUserRequest")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("message")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GetUserResponse")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" age "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br")])]),t("h2",{attrs:{id:"_2-编译proto文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-编译proto文件"}},[s._v("#")]),s._v(" 2. 编译proto文件")]),s._v(" "),t("p",[s._v("首选需要安装grpc的库和工具")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("python "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" pip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" grpcio "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装grpc")]),s._v("\npython "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" pip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" grpcio-tools "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装grpc tools")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("然后，运行命令对proto文件进行编译，会根据上面的proto文件生成对应的python文件，你会发现在proto目录下创建了"),t("code",[s._v("user_pb2.py")]),s._v("和"),t("code",[s._v("user_pb2_grpc.py")]),s._v("两个文件")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("python "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" grpc_tools.protoc "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--python_out")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(". "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--grpc_python_out")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(". -I. ./proto/user.proto\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("--python_out=.，protobuf相关代码文件生成在这里")]),s._v(" "),t("li",[s._v("--grpc_python_out=.，grpc相关代码生成在这里")]),s._v(" "),t("li",[s._v("-I. ./proto/user.proto，proto文件路径")])]),s._v(" "),t("p",[s._v("编译后：")]),s._v(" "),t("ul",[t("li",[s._v("user_pb2.py，用来和 protobuf 数据进行交互，这个就是根据proto文件定义好的数据结构类型生成的python化的数据结构文件")]),s._v(" "),t("li",[s._v("user_pb2_grpc.py: 用来和 grpc 进行交互，这个就是定义了rpc方法的类，包含了类的请求参数和响应等等，可用python直接实例化调用")])]),s._v(" "),t("h2",{attrs:{id:"_3-简单测试protobuf数据结构的序列化与反序列化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-简单测试protobuf数据结构的序列化与反序列化"}},[s._v("#")]),s._v(" 3. 简单测试protobuf数据结构的序列化与反序列化")]),s._v(" "),t("p",[s._v("我们创建proto_test.py文件，创建User对象，填充值，并将该对象序列化成字符串输出")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" proto "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" user_pb2\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建Student对象，将该对象序列化成字符串")]),s._v("\ns "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" user_pb2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("UserRequest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ns"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zhangsan"')]),s._v("\ns"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("\nreq_str "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SerializeToString"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("req_str"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("输出：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("b"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\n\\x08zhangsan\\x10\\x0c'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后我们再创建User对象将将上面的输出的序列化字符串反序列化进来。")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将上面的输出的序列化字符串反序列化成对象")]),s._v("\ns2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" user_pb2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("UserRequest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ns2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ParseFromString"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("req_str"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("输出：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("zhangsan\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"_4-创建grpc服务端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-创建grpc服务端"}},[s._v("#")]),s._v(" 4. 创建grpc服务端")]),s._v(" "),t("p",[s._v("下面是使用之前创建的protobuf和grpc文件来构建grpc服务端代码。")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" logging\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" concurrent "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" futures\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" grpc\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" proto "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" user_pb2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" user_pb2_grpc\n\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserService")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("user_pb2_grpc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("UserServicer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 实现proto文件中rpc的调用")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("AddUser")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" user_pb2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("UserRequest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" context"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" user_pb2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("UserResponse"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msg"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'add user(name={},age={}) success'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("format")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" code"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetUser")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" user_pb2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("GetUserRequest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" context"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" user_pb2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("GetUserResponse"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" age"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1888"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("serve")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用线程池来完成grpc的请求")]),s._v("\n    server "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" grpc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("server"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("futures"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ThreadPoolExecutor"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_workers"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    user_pb2_grpc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_UserServicer_to_server"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("UserService"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" server"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    server"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_insecure_port"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[::]:50051'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 绑定端口")]),s._v("\n    server"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("start"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    server"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wait_for_termination"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__main__'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    logging"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("basicConfig"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    serve"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br")])]),t("p",[s._v("运行该服务端，会阻塞等待客户端的请求。")]),s._v(" "),t("h2",{attrs:{id:"_5-创建grpc客户端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-创建grpc客户端"}},[s._v("#")]),s._v(" 5. 创建grpc客户端")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" logging\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" grpc\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" proto "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" user_pb2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" user_pb2_grpc\n\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 连接rpc服务")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" grpc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("insecure_channel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost:50051'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" channel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        stub "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" user_pb2_grpc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("UserStub"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("channel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 调用rpc服务的AddUser方法")]),s._v("\n        response"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" user_pb2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("UserResponse "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" stub"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("AddUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("user_pb2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("UserRequest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zhangsan"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" age"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"add user, response is 'msg={}, code={}'\"")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("format")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("response"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("msg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" response"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("code"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 调用rpc服务的GetUser方法")]),s._v("\n        response"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" user_pb2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("GetUserResponse "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" stub"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("GetUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("user_pb2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("GetUserRequest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lisi"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"get user[name={}, age={}]"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("format")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("response"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" response"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__main__'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    logging"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("basicConfig"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    run"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("p",[s._v("运行客户端，调用rpc服务，输出：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" user, response is "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'msg=add user(name=zhangsan,age=18) success, code=0'")]),s._v("\nget user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("lisi, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("age")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1888")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);