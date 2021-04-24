const fs = require('fs')
const path = require('path')
const JSON5 = require('json5')
const Mock = require('mockjs')

// 读取json文件
function getJsonFile(filePath) {
  // 读取指定文件
  var json = fs.readFileSync(path.join(__dirname, filePath), 'utf8')
  var obj = JSON5.parse(json)
  return obj
}

// 返回一个函数
module.exports = function (app) {
  if (process.env.MOCK === 'true') {
    // 监听http请求
    app.get('/user/userInfo', function (rep, res) {
      // 每次响应请求都读取mock data的json文件
      // getJsonFile方法定义了如何读取json文件并且解析成数据对象
      var json = getJsonFile('/userInfo.json5')
      res.json(Mock.mock(json))
      //
    })
  }
}