(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{408:function(t,s,a){"use strict";a.r(s);var n=a(5),p=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"djang自带测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#djang自带测试"}},[t._v("#")]),t._v(" djang自带测试")]),t._v(" "),s("blockquote",[s("p",[t._v("django本身自带了测试框架库，是基于unittest的。")])]),t._v(" "),s("p",[t._v("执行 "),s("code",[t._v("python manager.py test")]),t._v(" 会对路径所有test*.py 进行测试")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" TestCase\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" event_track"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Appclass \n\nAppTestCase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TestCase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setUp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("        \n        App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" package_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"package1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("        \n        App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" package_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"package2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("        \n        app1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("        \n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assertEqual"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("package_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"package1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("        \n        app1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("        \n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assertEqual"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("package_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"package3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("h2",{attrs:{id:"rest-framework"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rest-framework"}},[t._v("#")]),t._v(" rest framework")]),t._v(" "),s("blockquote",[s("p",[t._v("下面是一个简单的测试案例。使用pytest对rest framework进行测试")])]),t._v(" "),s("p",[s("strong",[t._v("1. 添加一个配置文件")]),t._v("\n具体看"),s("a",{attrs:{href:"https://pytest-django.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[t._v("pytest-django官网"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-ini line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token section"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("pytest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("DJANGO_SETTINGS_MODULE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("event_track_root.settings")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("python_files")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("tests.py test_*.py *_tests.py")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[s("strong",[t._v("2. 创建一个model")]),t._v(" "),s("code",[t._v("app.py")])]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" models\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    \n    name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CharField"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max_length"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    \n    package_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CharField"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max_length"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unique"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("blockquote",[s("p",[t._v("对app的model类进行增删改查的测试\nmodel测试必须添加"),s("code",[t._v("@pytest.mark.django_db")]),t._v("才可以启用数据库。\n使用"),s("code",[t._v("APITestCase")]),t._v("对接口进行测试")])]),t._v(" "),s("p",[s("strong",[t._v("3. 编写测试用例")]),t._v("\ntest_app.py")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@pytest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mark"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("django_db")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@pytest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fixture")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scope"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"module"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init_app_data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" package_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"package1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" package_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"package2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" package_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"package3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" package_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"package4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppTests")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("APITestCase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_create_app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reverse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'event_track:App-list'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        data_list "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"package_name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"package1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"package_name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"package2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"package_name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"package3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"package_name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"package4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" data_list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("post"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assertEqual"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status_code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HTTP_201_CREATED"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assertEqual"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assertEqual"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("package_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"package1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@pytest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mark"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("usefixtures")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'init_app_data'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_delete_app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("package_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"package3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reverse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'event_track:App-detail'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delete"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assertEqual"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" pytest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("raises"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DoesNotExist"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("package_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"package3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assertEqual"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status_code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("204")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@pytest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mark"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("usefixtures")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'init_app_data'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_update_app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reverse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'event_track:App-detail'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("package_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"package_update"')]),t._v("\n        response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("put"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" AppSerializer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assertEqual"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status_code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assertEqual"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'package_name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'package_update'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assertEqual"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("package_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'package_update'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@pytest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mark"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("usefixtures")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'init_app_data'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_list_app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reverse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'event_track:App-list'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'limit'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'offset'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assertEqual"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status_code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assertEqual"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'results'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br"),s("span",{staticClass:"line-number"},[t._v("43")]),s("br"),s("span",{staticClass:"line-number"},[t._v("44")]),s("br"),s("span",{staticClass:"line-number"},[t._v("45")]),s("br"),s("span",{staticClass:"line-number"},[t._v("46")]),s("br"),s("span",{staticClass:"line-number"},[t._v("47")]),s("br"),s("span",{staticClass:"line-number"},[t._v("48")]),s("br"),s("span",{staticClass:"line-number"},[t._v("49")]),s("br"),s("span",{staticClass:"line-number"},[t._v("50")]),s("br"),s("span",{staticClass:"line-number"},[t._v("51")]),s("br"),s("span",{staticClass:"line-number"},[t._v("52")]),s("br"),s("span",{staticClass:"line-number"},[t._v("53")]),s("br"),s("span",{staticClass:"line-number"},[t._v("54")]),s("br"),s("span",{staticClass:"line-number"},[t._v("55")]),s("br"),s("span",{staticClass:"line-number"},[t._v("56")]),s("br"),s("span",{staticClass:"line-number"},[t._v("57")]),s("br")])])])}),[],!1,null,null,null);s.default=p.exports}}]);