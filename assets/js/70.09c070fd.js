(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{435:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[s._v("Django内置的"),t("code",[s._v("User")]),s._v("对象，已经包含了一些主要的属性，如username、password、email等，但实际情况可能还需要昵称、头像等其他属性，仅仅使用内置的User属性是不够的。")]),s._v(" "),t("p",[s._v("通过使用"),t("code",[s._v("AbstractUser")]),s._v("可以对User进行扩展使用，添加用户自定义的属性。")])]),s._v(" "),t("p",[s._v("User模型源码如下。")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("AbstractUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Meta")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("AbstractUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Meta"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        swappable "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'AUTH_USER_MODEL'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("由此可见，User对AbstractUser仅仅是继承，没有进行任何的扩展。所以我们继承AbstractUser可以获得User的所有特性。")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("model中使用")])])]),s._v(" "),t("p",[s._v("继承AbstractUser")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("contrib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("auth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("models "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" AbstractUser\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyUser")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("AbstractUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[t("strong",[s._v("全局settings.py中设置")])])]),s._v(" "),t("p",[s._v("覆盖默认的user model")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("AUTH_USER_MODEL "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'app.MyUser'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[t("strong",[s._v("在admin.py中注册MyUser")])])]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("contrib "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" admin\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("models "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" UserProfile\nadmin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("site"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("register"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("UserProfile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("UserAdmin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#用UserAdmin去注册UserProfile")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);