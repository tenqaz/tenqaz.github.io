(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{464:function(s,n,a){"use strict";a.r(n);var t=a(5),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),n("p",[s._v("今天测试给我提了BUG，发现某个查询接口超时了，超时时间为1分钟。")]),s._v(" "),n("p",[s._v("目前的用的数据库是clickhouse，数据量大概在20亿左右")]),s._v(" "),n("h2",{attrs:{id:"定位问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定位问题"}},[s._v("#")]),s._v(" 定位问题")]),s._v(" "),n("p",[s._v("我通过调试将查询数据的语句打印出来，查询语句放在数据库中执行，发现几秒就查询完成了，这个时候我就奇了怪了，后面我再仔细看接口的代码，跟踪调试后发现，除了会查询数据之外，还会执行查询数据量的语句。")]),s._v(" "),n("p",[s._v("我将查询数量的语句打印出来，执行该语句，发现是超过1分钟的，看来是定位到问题了。")]),s._v(" "),n("h2",{attrs:{id:"查询分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查询分析"}},[s._v("#")]),s._v(" 查询分析")]),s._v(" "),n("p",[s._v("语句大概是下面这样的，大概有30多张表，也就是需要"),n("code",[s._v("union")]),s._v("30多张表")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v("\n            a_field"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            b_field"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            c_field"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            d_field"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            e_field"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            f_field\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("\n            A\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("union")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("all")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v("\n            a_field"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            b_field"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            c_field"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            d_field"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            e_field"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            f_field\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("\n            B\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("p",[s._v("这条语句是通过将多个表union成一个大表，然后再count求数量。")]),s._v(" "),n("p",[s._v("问题显而易见，为啥我们要构造一张这么大的表在内存中再count数量，直接count每张表的数量再相加不就是了。优化语句如下：")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cnt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" cnt\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("\n            A\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("union")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("all")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" cnt\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("\n            B\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("将该语句放在数据库查询，秒级返回，直接从1分钟优化到1秒钟")])])}),[],!1,null,null,null);n.default=e.exports}}]);