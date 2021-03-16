const getEn = require('./config/en');
const getMathematics = require('./config/mathematics')
const get991 = require('./config/991')

module.exports = {
  base: '/pe-blog/',
  theme: 'reco',
  title: '学习记录',
  description: '考研学习记录',
  port: 3002,
  themeConfig: {
    subSidebar: 'auto',
    nav: [
      {
        text: '英语',
        link: '/en/',
      },
      {
        text: '数学',
        link: '/mathematics/',
      },
      {
        text: '专业课',
        link: '/991/',
      }
    ],
    sidebar: {
      "/en/": getEn('单词'),
      "/mathematics/": getMathematics(),
      "/991/": get991(),
    }
  },
}