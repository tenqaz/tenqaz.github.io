(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{440:function(s,a,t){"use strict";t.r(a);var n=t(5),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("p",[s._v("本文主要介绍在drf框架中如何对查询的数据进行分页，在drf框架中有提供该基础功能的使用案例和文档，详情参考"),a("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/pagination/",target:"_blank",rel:"noopener noreferrer"}},[s._v("drf-pagination-官网文档"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"内置分页方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置分页方式"}},[s._v("#")]),s._v(" 内置分页方式")]),s._v(" "),a("p",[s._v("drf框架中默认提供几种分页方式，并封装成了模块提供给开发者调用，主要是以下几种：")]),s._v(" "),a("ul",[a("li",[s._v("PageNumberPagination，主要是提供"),a("code",[s._v("page")]),s._v("​和"),a("code",[s._v("page_size")]),s._v("​进行分页。\n"),a("ul",[a("li",[s._v("page，当前页数")]),s._v(" "),a("li",[s._v("page_size，每页展示的数量")])])]),s._v(" "),a("li",[s._v("LimitOffsetPagination，提供"),a("code",[s._v("limit")]),s._v("​和"),a("code",[s._v("offset")]),s._v("​进行分页\n"),a("ul",[a("li",[s._v("limit，当前分页展示的数量")]),s._v(" "),a("li",[s._v("offset，当前数据是从第几行开始。")])])]),s._v(" "),a("li",[s._v("CursorPagination，对结果集中提供前进与后退的链接来进行操作，不允许随意跳动到任意位置。")])]),s._v(" "),a("h2",{attrs:{id:"自定义分页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义分页"}},[s._v("#")]),s._v(" 自定义分页")]),s._v(" "),a("p",[s._v("框架本身提供了分类的模块，但在实际工作中并不适用，所以我们可以通过继承的方式对内置的分页模块中的部分属性进行覆盖，以符合自身业务。")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LargeResultsSetPagination")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PageNumberPagination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    page_size "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n    page_size_query_param "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'page_size'")]),s._v("\n    max_page_size "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StandardResultsSetPagination")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PageNumberPagination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    page_size "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("   \n    page_size_query_param "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'page_size'")]),s._v("\n    max_page_size "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("参数：")]),s._v(" "),a("ul",[a("li",[s._v("page_size：请求接口未指明时，默认使用该值来查询数据量")]),s._v(" "),a("li",[s._v("max_page_size：这个是限制一页最大能展示的数量。")]),s._v(" "),a("li",[s._v("page_size_query_param：前端请求分页数量的字段")])]),s._v(" "),a("p",[s._v("上面是部分常用的字段，如果有特殊业务可以看源码再进行修改。")]),s._v(" "),a("h2",{attrs:{id:"自定义分页响应数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义分页响应数据"}},[s._v("#")]),s._v(" 自定义分页响应数据")]),s._v(" "),a("p",[s._v("在内置的分页类"),a("code",[s._v("PageNumberPagination")]),s._v("​中响应的数据格式如下：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"count"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 总数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"next"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 下一页的链接"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"previous"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 上一页的链接"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"results"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 分页后的数据\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("但实我们在业务中可能并不需要"),a("code",[s._v("next")]),s._v("​和"),a("code",[s._v("previous")]),s._v("​，只需要保留"),a("code",[s._v("count")]),s._v("​和"),a("code",[s._v("results")]),s._v("​两个字段，这个时候我们可以通过重写"),a("code",[s._v("get_paginated_response")]),s._v("​方法需要对响应的数据进行裁剪。")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LargeResultsSetPagination")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PageNumberPagination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    page_size "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n    page_size_query_param "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'page_size'")]),s._v("\n    max_page_size "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get_paginated_response")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" Response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("OrderedDict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'count'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("paginator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'results'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),a("h3",{attrs:{id:"全局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局"}},[s._v("#")]),s._v(" 全局")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("settings.py")]),s._v("​中可以设置全局的分页模式，在"),a("code",[s._v("REST_FRAMEWORK")]),s._v("​中设置"),a("code",[s._v("DEFAULT_PAGINATION_CLASS")]),s._v("​，该key是指定分页模式使用哪个分页类，而这里使用的是drf框架中内置的分页类LimitOffsetPagination，并设置参数PAGE_SIZE指定每页默认展示的数量。")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("REST_FRAMEWORK "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DEFAULT_PAGINATION_CLASS'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rest_framework.pagination.LimitOffsetPagination'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PAGE_SIZE'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("该项配置会对全局生效，也就是每一个view的List查询都会走该分页模式。")]),s._v(" "),a("h3",{attrs:{id:"局部"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#局部"}},[s._v("#")]),s._v(" 局部")]),s._v(" "),a("p",[s._v("在某些业务场景是不需要分页的，或者不同的接口需要使用的分页模式不同，那么上面的全局配置方法就不适用的了，这个时候就需要使用局部配置的方式。")]),s._v(" "),a("p",[s._v("首先不进行全局模式，在需要分页的View中添加"),a("code",[s._v("pagination_class")]),s._v("​并设置对应的分页模式类，这里使用的是自定义的分页类，该配置只会在本View中生效。")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BillingRecordsView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("generics"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ListAPIView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    queryset "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Billing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("all")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    serializer_class "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" BillingRecordsSerializer\n    pagination_class "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LargeResultsSetPagination\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);