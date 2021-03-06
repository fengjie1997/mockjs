const Mock = require('mockjs')
let id = Mock.mock('@id')
let obj = Mock.mock({
  id: '@id', // 随机的id对象
  username: '@cname()', // 随机中文名
  date: '@date()', // 随机生成日期
  avatar: "@image('200*200', 'red', '#fff', 'avatar')",
  description: '@paragraph()',
  ip: '@ip()',
  email: '@email()'
})