module.exports = [
  {
    path: '/pages/index',
    config: {
      navigationBarTitleText: 'index',
      enablePullDownRefresh: true
    }
  },
  {
    path: 'pages/logs', // 页面路径，同时是 vue 文件相对于 src 的路径
    config: { // 页面配置，即 page.json 的内容
      navigationBarTitleText: '文章列表',
      enablePullDownRefresh: true
    }
  },
  {
    path: '/pages/login/login',
    config: {
      navigationBarTitleText: '登录',
      enablePullDownRefresh: true
    }
  },
  {
    path: '/pages/counter/index',
    config: {
      navigationBarTitleText: '登录',
      enablePullDownRefresh: true
    }
  },
]