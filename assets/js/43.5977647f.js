(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{403:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_0-前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-前言"}},[t._v("#")]),t._v(" 0. 前言")]),t._v(" "),s("p",[t._v("ddt 是 python 的第三方库，主要是解决使用 unittest 来写单测时可以支持参数化的配置，这个库的使用方法可以参考我之前写的"),s("a",{attrs:{href:"https://www.zhengwenfeng.com/pages/8d9ab9/",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用ddt实现unittest的参数化测试"),s("OutboundLink")],1),t._v("。本文主要是讲自己在学习 ddt 库时所获。")]),t._v(" "),s("p",[t._v("ddt 库的使用方法是用装饰器来实现的，可以参考这边文章"),s("a",{attrs:{href:"https://www.zhengwenfeng.com/pages/7434f1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("python装饰器的使用方法"),s("OutboundLink")],1),t._v("来学习装饰器.")]),t._v(" "),s("h2",{attrs:{id:"_1-源码分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-源码分析"}},[t._v("#")]),t._v(" 1. 源码分析")]),t._v(" "),s("h3",{attrs:{id:"_1-1-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-example"}},[t._v("#")]),t._v(" 1.1 example")]),t._v(" "),s("p",[t._v("先看一个最简单的使用例子，我们创建 "),s("code",[t._v("larger_than_two")]),t._v(" 函数，并使用 unittest 对其编写单测。")]),t._v(" "),s("p",[t._v("这里使用了  "),s("code",[t._v("@ddt")]),t._v(" 来装饰 DemoTestCase，并使用 "),s("code",[t._v("@data")]),t._v(" 填写多个测试的参数，这样执行就完成了参数化的单测了。")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" unittest  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" ddt "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ddt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data  \n  \n  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("larger_than_two")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("  \n  \n  \n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@ddt")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DemoTestCase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unittest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TestCase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n  \n    "),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_larger_than_two")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assertTrue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("larger_than_two"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("p",[t._v("我们执行上面的单测会发现，虽然我们代码只写了一个用例，但是执行却是 3 个用例，成功了 1 个，失败了 2 个，并且输出了失败的用例的名称，"),s("code",[t._v("test_larger_than_two_1_1")]),t._v(" 和 "),s("code",[t._v("test_larger_than_two_2_2")]),t._v("，名称的规则是："),s("code",[t._v("单测的名称_索引_参数")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('FF.\n======================================================================\nFAIL: test_larger_than_two_1_1 (__main__.DemoTestCase)\n----------------------------------------------------------------------\nTraceback (most recent call last):\n  File "c:\\crazyboy\\code\\ddt\\ddt.py", line 220, in wrapper\n    return func(self, *args, **kwargs)\n  File "C:\\CrazyBoy\\workspace\\demo\\demo.py", line 24, in test_larger_than_two\n    self.assertTrue(larger_than_two(value))\nAssertionError: False is not true\n\n======================================================================\nFAIL: test_larger_than_two_2_2 (__main__.DemoTestCase)\n----------------------------------------------------------------------\nTraceback (most recent call last):\n  File "c:\\crazyboy\\code\\ddt\\ddt.py", line 220, in wrapper\n    return func(self, *args, **kwargs)\n  File "C:\\CrazyBoy\\workspace\\demo\\demo.py", line 24, in test_larger_than_two\n    self.assertTrue(larger_than_two(value))\nAssertionError: False is not true\n\n----------------------------------------------------------------------\nRan 3 tests in 0.004s\n\nFAILED (failures=2)\n\nProcess finished with exit code 1\n\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br")])]),s("p",[t._v("这是如何实现的呢？")]),t._v(" "),s("h3",{attrs:{id:"_1-2-源码分析流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-源码分析流程"}},[t._v("#")]),t._v(" 1.2 源码分析流程")]),t._v(" "),s("p",[t._v("我们首先来看看 @data 装饰器里面做了什么？")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("values"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" idata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("values"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("data 调用了函数 idata，我们再来看看 idata 的实现，通过 setattr 方法，给被装饰的单测用例添加两个属性")]),t._v(" "),s("ul",[s("li",[t._v("DATA_ATTR 是用来保存 data 的参数化的参数。")]),t._v(" "),s("li",[t._v("INDEX_LEN 用来保存参数化的长度。")])]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("DATA_ATTR "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%values'")]),t._v("\nINDEX_LEN "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%index_len'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("idata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iterable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index_len"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" index_len "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n        iterable "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("tuple")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iterable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n        index_len "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iterable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n  \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wrapper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("setattr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" DATA_ATTR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" iterable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("setattr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" INDEX_LEN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index_len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" func  \n  \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" wrapper\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("p",[t._v("然后我们再来看装饰器@ddt 中，传入的 cls 是被装饰的单测类，通过该类，找到上面使用@data 装饰器中添加的属性 DATA_ATTR 和对应的单测方法，其中的每条数据都是一个用例，通过遍历该属性中的参数值调用函数 "),s("code",[t._v("mk_test_name")]),t._v(" 去构造每一条参数的用例名称。")]),t._v(" "),s("p",[t._v("然后再调用 add_test 函数去生成对应的单测用例。")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ddt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\tfmt_test_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" kwargs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testNameFormat"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TestNameFormat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DEFAULT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n\t  \n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wrapper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n\t    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" func "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__dict__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n\t        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("hasattr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" DATA_ATTR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n\t            index_len "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("getattr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" INDEX_LEN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n\t            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("enumerate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("getattr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" DATA_ATTR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n\t                test_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mk_test_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("  \n\t                    name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n\t                    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("getattr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__name__"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n\t                    i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n\t                    index_len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n\t                    fmt_test_name  \n\t                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n\t                test_data_docstring "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _get_test_data_docstring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n\t                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("hasattr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" UNPACK_ATTR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n\t                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("tuple")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n\t                        add_test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("  \n\t                            cls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n\t                            test_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n\t                            test_data_docstring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n\t                            func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n\t                            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("v  \n\t                        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n\t                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n\t                        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# unpack dictionary  ")]),t._v("\n\t                        add_test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("  \n\t                            cls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n\t                            test_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n\t                            test_data_docstring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n\t                            func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n\t                            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("v  \n\t                        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n\t                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n\t                    add_test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" test_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" test_data_docstring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n\t            "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("delattr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n\t        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("hasattr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FILE_ATTR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n\t            file_attr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("getattr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FILE_ATTR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n\t            process_file_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" file_attr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n\t            "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("delattr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n\t    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cls  \n\t  \n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ``arg`` is the unittest's test class when decorating with ``@ddt`` while  ")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# it is ``None`` when decorating a test class with ``@ddt(k=v)``.  ")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" wrapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" inspect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isclass"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" wrapper\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br"),s("span",{staticClass:"line-number"},[t._v("43")]),s("br"),s("span",{staticClass:"line-number"},[t._v("44")]),s("br"),s("span",{staticClass:"line-number"},[t._v("45")]),s("br"),s("span",{staticClass:"line-number"},[t._v("46")]),s("br")])]),s("p",[t._v("我们看看 "),s("code",[t._v("add_test")]),t._v(" 做了什么？很简单，就是给单测的 TestCase 添加属性，以单测用例名称为名，feed_data 的返回值为值。")]),t._v(" "),s("p",[t._v("feed_data 中，根据单个参数值和被@data 装饰的函数组成一个新的单测用例，并返回出去。")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" test_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" test_docstring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n\t"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("setattr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" test_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" feed_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" test_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" test_docstring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("feed_data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" new_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" test_data_docstring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("      \n    "),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@wraps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wrapper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n    wrapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__name__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new_name  \n    wrapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__wrapped__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" func  \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# set docstring if exists  ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" test_data_docstring "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n        wrapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__doc__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" test_data_docstring  \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Try to call format on the docstring  ")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__doc__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n                wrapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__doc__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__doc__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("IndexError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" KeyError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" wrapper\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br")])]),s("p",[t._v("也就是说，参数化的每个值都会生成一个用例方法并注册到被@ddt 装饰的 TestCase 类中。")]),t._v(" "),s("h2",{attrs:{id:"_2-总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-总结"}},[t._v("#")]),t._v(" 2. 总结")]),t._v(" "),s("p",[t._v("主要流程是：通过 @data 装饰器将参数化注册到该单测用例方法的 DATA_ATTR 属性中，然后@ddt 装饰器遍历当前 TestCase 的所有包含 DATA_ATTR 属性的用例方法，再遍历其 DATA_ATTR 的参数值，把每条参数值都生成一条用例方法，并注册到 TestCase 中。这样执行该 TestCase 时，虽然只编码了一条单测，但是却有多条用例被执行。")]),t._v(" "),s("p",[t._v("整个过程都是对类和单测方法的元数据属性进行各种操作来实现的。")])])}),[],!1,null,null,null);s.default=e.exports}}]);