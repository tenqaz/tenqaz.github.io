(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{439:function(e,t,o){"use strict";o.r(t);var v=o(5),i=Object(v.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("告警错误如下。")]),e._v(" "),t("blockquote",[t("p",[e._v("DateTimeField Customer.updated received a naive datetime (2016-06-19 07:18:21.118000) while time zone support is active")])]),e._v(" "),t("p",[e._v("在 "),t("code",[e._v("settings.py")]),e._v(" 中设置的 "),t("code",[e._v("USE_TZ=True")]),e._v("，所以需要使用 active datetime, 但是却得到了 naive datetime.")]),e._v(" "),t("blockquote",[t("p",[e._v("naive datetime 是通过 "),t("code",[e._v("datetime")]),e._v(" 输出不带时区的时间.\nactive time 是使用"),t("code",[e._v("django.utils.timezone.now()")]),e._v("  输出的是带时区utc时间。")])]),e._v(" "),t("p",[t("strong",[e._v("解决办法")])]),e._v(" "),t("ol",[t("li",[t("p",[e._v("使用带时区的时间, django中使用\n"),t("code",[e._v("django.utils.timezone.now()")]),e._v(" , "),t("code",[e._v("settings.py")]),e._v("  中 "),t("code",[e._v("USE_TZ=True")])])]),e._v(" "),t("li",[t("p",[e._v("使用不带时区的时间, django中使用 "),t("code",[e._v("datetime.now()")]),e._v(", "),t("code",[e._v("settings.py")]),e._v(" 中 "),t("code",[e._v("USE_TZ=False")])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);