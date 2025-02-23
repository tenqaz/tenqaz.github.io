(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{385:function(t,a,e){"use strict";e.r(a);var v=e(5),r=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"什么是-mvcc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-mvcc"}},[t._v("#")]),t._v(" 什么是 MVCC?")]),t._v(" "),a("p",[t._v("MVCC 的全称是 Multi- "),a("a",{attrs:{href:"https://so.csdn.net/so/search?q=Version&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[t._v("Version"),a("OutboundLink")],1),t._v(" Concurrency Control，也就是多版本并发控制，该机制是只有支持事务的 InnoDB 引擎下才存在的，用来实现提高数据库的并发性能，可以做到：读不加锁，读写不冲突。")]),t._v(" "),a("p",[t._v("那么它是如何实现的呢？")]),t._v(" "),a("h2",{attrs:{id:"mvcc-的实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mvcc-的实现原理"}},[t._v("#")]),t._v(" MVCC 的实现原理")]),t._v(" "),a("p",[t._v("在 Innodb 的每一行数据中都会保存多个版本，每个版本都有对应的事务 ID。")]),t._v(" "),a("p",[t._v("在开启每一个事务时，都会生成当前事务的版本号，当在该事务中操作修改数据时，都会生成一个新的数据行，该数据行在提交之前对其他事务来说是不可见的，然后将版本号更新到数据行中，这样就保证了每个事务操作的数据都是互不影响的，也不存在锁的问题。")]),t._v(" "),a("p",[t._v("在读操作时，我们只去快照读，而不读取正在修改的数据，这是两个不同版本的数据，所以操作上不会发生冲突。")]),t._v(" "),a("h2",{attrs:{id:"readview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#readview"}},[t._v("#")]),t._v(" ReadView")]),t._v(" "),a("p",[t._v("Read View 是来表示当前事务的可见性的，通过上面的 MVCC 原理知道所有的行数据都是有版本的，那么哪些版本的数据在当前事务是可见的，也就是可读到的，哪些是不可见的。")]),t._v(" "),a("p",[t._v("创建 Read View 时，会构造一个数组来保存当前事务启动瞬间启动了但是没有提交的事务 ID。")]),t._v(" "),a("ul",[a("li",[t._v("如果小于最小值，则是已经提交的事务，是可见的")]),t._v(" "),a("li",[t._v("如果大于最大值，则代表是将来启动的事务，不可见")]),t._v(" "),a("li",[t._v("如果在数组列表中，表示还没提交的事务，不可见")]),t._v(" "),a("li",[t._v("如果大于最小值，小于最大值，但不在数组中，表示是已经提交了的事务，可见\n"),a("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/20210821150008.png",alt:""}})])]),t._v(" "),a("p",[t._v("创建 Read View 的时机在不同的隔离级别是不同。")]),t._v(" "),a("ul",[a("li",[t._v("在读未提交中，直接读取的是最新版本的数据")]),t._v(" "),a("li",[t._v("在读已提交中，在每次读取数据前，就会生成一个 Read View，然后再读取可见版本的数据。")]),t._v(" "),a("li",[t._v("在可重复读中，在每次开启事务的时候，就会生成 Read View，在提交之前都一直如此使用。")]),t._v(" "),a("li",[t._v("在串行化中，是通过加锁的方式来访问数据。")])]),t._v(" "),a("h2",{attrs:{id:"undo-日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#undo-日志"}},[t._v("#")]),t._v(" Undo 日志")]),t._v(" "),a("p",[t._v("每条记录更新时，都会同时记录一条回滚操作。记录上的最新值都可通过回滚操作得到前一个状态值")]),t._v(" "),a("p",[t._v("在视图 A、B、C 里面，这一个记录的值分别是 1、2、4，同一条记录在系统中可以存在多个版本，就是数据库的多版本并发控制（MVCC）。系统会判断在没有事务需要用到回滚日志时，回滚日志会被删除")]),t._v(" "),a("p",[t._v("不建议使用长事务的原因是，在事务提交之前，回滚日志都需要保存，导致占用大量存储空间。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/20210711223257.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"快照读和当前读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快照读和当前读"}},[t._v("#")]),t._v(" 快照读和当前读")]),t._v(" "),a("p",[t._v("快照读，就是当进行查询时，是根据 Read View 的视图可见性来读取对应版本的数据。")]),t._v(" "),a("p",[t._v("有这么一个场景，当前是可重复读的隔离界别，开始事务的顺序分别是 A、B、C，事务 C 更新 K 之后，最新的版本 102，当事务 B，根据 Read View 是看不到 102 版本的数据，那么其更新只能在 90 版本上去+1，这样的结果肯定是不对的，因为不是在最新的结果上进行+1，所以这里需要用到 "),a("code",[t._v("当前读")]),t._v("，也就是去读取当前数据的最新版本的数据，然后再进行+1。该当前读会对该行数据进行加锁，在该事务 commit 之前，其他事务都不能对其进行操作。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/20210821153520.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"相关链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[t._v("#")]),t._v(" 相关链接")]),t._v(" "),a("ul",[a("li",[t._v("https://blog.csdn.net/SIESTA030/article/details/123113437")]),t._v(" "),a("li",[t._v("https://blog.csdn.net/huaishu/article/details/89924250")])])])}),[],!1,null,null,null);a.default=r.exports}}]);