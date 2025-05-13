import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'

import { UserPlugins } from 'vuepress/config'
import dayjs from 'dayjs'

// set your global feed options - override in page frontmatter `feed`
const feed_options = {
  canonical_base: 'https://www.zhengwenfeng.com',
  // 大于文章的总数
  count: 5000
};

const plugins: VdoingThemeConfig['plugins'] = <UserPlugins>[
    [
      'vuepress-plugin-comment-plus',
      {
        choosen: 'waline',
        options: {
          serverURL: 'https://comment.zhengwenfeng.com/',
        }
      }
    ],

    'vuepress-plugin-baidu-autopush', // 百度自动推送

    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: '7c28cc47ffa100de44e976f816b0b294',
      },
    ],

    // 全文搜索。 ⚠️注意：此插件会在打开网站时多加载部分js文件用于搜索，导致初次访问网站变慢。如在意初次访问速度的话可以不使用此插件！（推荐：vuepress-plugin-thirdparty-search）
    'fulltext-search',

    // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
    [
      'thirdparty-search',
      {
        thirdparty: [
          // {
          //   title: '在MDN中搜索',
          //   frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
          //   behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
          // },
          // {
          //   title: '在Runoob中搜索',
          //   frontUrl: 'https://www.runoob.com/?s=',
          // },
          // {
          //   title: '在Vue API中搜索',
          //   frontUrl: 'https://cn.vuejs.org/v2/api/#',
          // },
          {
            title: '在Bing中搜索',
            frontUrl: 'https://cn.bing.com/search?q=',
          },
          {
            title: '通过百度搜索本站的',
            frontUrl: 'https://www.baidu.com/s?wd=site%3Azhengwenfeng.com%20',
          },
          {
            title: '通过google搜索本站的',
            frontUrl: 'https://www.google.com/search?q=site%3Azhengwenfeng.com%20',
          },
        ],
      }
    ],

    [
      'one-click-copy', // 代码块复制按钮
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],

    [
      'demo-block', // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      {
        settings: {
          // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
          // cssLib: ['http://xxx'], // 在线示例中的css依赖
          // vue: 'https://fastly.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
          jsfiddle: false, // 是否显示 jsfiddle 链接
          codepen: true, // 是否显示 codepen 链接
          horizontal: false, // 是否展示为横向样式
        },
      },
    ],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
    // [
    //   'vuepress-plugin-comment', // 评论
    //   {
    //     choosen: 'gitalk',
    //     options: {
    //       clientID: 'a6e1355287947096b88b',
    //       clientSecret: 'f0e77d070fabfcd5af95bebb82b2d574d7248d71',
    //       repo: 'blog-gitalk-comment', // GitHub 仓库
    //       owner: 'xugaoyi', // GitHub仓库所有者
    //       admin: ['xugaoyi'], // 对仓库有写权限的人
    //       // distractionFreeMode: true,
    //       pagerDirection: 'last', // 'first'正序 | 'last'倒序
    //       id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
    //       title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
    //       labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
    //       body:
    //         '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
    //     },
    //   },
    // ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      },
    ],

    
    // rss
    [ 'feed', feed_options ],

    // site
    [
      'sitemap', {
        hostname: 'https://www.zhengwenfeng.com',
        exclude: ["/404.html"],
      },
    ],

    [ 'autometa', 
      {
        site: {
          name   : 'zhengwenfeng',
        },
        canonical_base: 'https://www.zhengwenfeng.com',
      }
    ],

    // 文章阅读滚动条
    // https://github.com/tolking/vuepress-plugin-reading-progress
    'reading-progress',

    // [
    //   'vuepress-plugin-vssue-global',
    //   {
    //     platform: "github",
    //     title: '-[Comment]-<%- frontmatter.title %>',
    //     needComments: true,
    //     // 其他的 Vssue 配置
    //     autoCreateIssue: true,
    //     clientId: "5eaacfff6f9b823a4d50",
    //     clientSecret: "32bb2fd7202f5084f04c3c5a3ca415f76a2fa912",
    //     owner: "tenqaz",
    //     repo: "tenqaz.github.io",
    //   }
    // ]
  ]

export default plugins