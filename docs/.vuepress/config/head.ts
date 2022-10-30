import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'

const head: VdoingThemeConfig['head'] = [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    [
      'meta',
      {
        name: 'keywords',
        content: '后端博客,个人技术博客,后端,后端开发,后端框架,后端面试题,技术文档,学习,面试,python,go,redis,k8s,mysql,kafka,flask,django,tornado,git,github,markdown',
      },
    ],
    ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证（你可以去掉）
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }], // 此标记可告知浏览器如何在移动设备上呈现网页。该标记的存在可向 Google 表明该网页适合移动设备。
    // 百度统计
    [
      'script',
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?7c28cc47ffa100de44e976f816b0b294";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ]
    // [
    //   'script',
    //   {
    //     'data-ad-client': 'ca-pub-7828333725993554',
    //     async: 'async',
    //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //   },
    // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
]

export default head