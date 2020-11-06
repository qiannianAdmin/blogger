module.exports = {
  title: "漂流瓶的牵念",
  description: "",
  markdown: {
    lineNumbers: true
  },
  head: [
    ['link', { rel: 'icon', href: '/user.jpg' }]
  ],
  themeConfig:{
    repo: 'qiannianAdmin/blogger',
    nav: [
      {
        text: '博客',
        link: "/blog/",
      },
      {
        text: "算法",
        link: "/arith/",
      },
      {
        text: "阅读",
        link: "/book/",
      },
      {
        text: "资源导航",
        link: "/resource/",
      },
    ],
    sidebar: {
      '/blog/':[
        {
          title: 'PHP',
          collapsable: false,
        },
        {
          title: 'Docker',
          collapsable: false,
        },
        {
          title: 'Linux',
          collapsable: false,
        },
        {
          title: 'MySQL',
          collapsable: false,
        },
        {
          title: 'Redis',
          collapsable: false,
        },
        {
          title: '编程基础',
          collapsable: false,
        },
        // {
        //   title: '总结思考',
        //   collapsable: false,
        // }
      ],
      '/arith/':[
        {
          title: "算法知识",
          collapsable: false,
          children: [
          ]
        },
        {
          title: "经典算法题",
          collapsable: false,
          children: [
          ]
        },
        {
          title: "探索源码系列",
          collapsable: false,
          children: [
          ]
        }
      ],
      // '/interview/':[],
      '/book/':[
        {
          title: "技术相关",
          collapsable: false,
        },
        {
          title: "其他",
          collapsable: false,
        }
      ],
      '/resource/':[
        {
          title: "优秀博客",
          collapsable: false,
          children: [
          ]
        },
        {
          title: "在线工具",
          collapsable: false,
          children: [
          ]
        },
        {
          title: "素材资源",
          collapsable: false,
          children: [
          ]
        }
      ],
    },
    lastUpdated: "更新时间",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "本文源码地址",
  },
  plugins: [

  ]
};