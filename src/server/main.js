const Router = require('./router/router')
const isOriginAllowed = require('./utils/origin')
module.exports = async (req, res) => {
  if (!global.EchoDB) {
    const result = await require('./database/adapter')()
    // 如果未返回信息，则表示连接错误，直接结束请求
    if (!result) { return } else { global.EchoDB = result }
  }
  // 域名白名单
  const allowOrigin = [
    'http://192.168.10.210:4000',
    'http://localhost:4000'
  ];
  // if (isOriginAllowed(req.headers.origin, allowOrigin)) {
  // res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Access-Control-Allow-Methods', 'POST')
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  await Router(req, res)
  // } else {
  //   res.end({ msg: "非法请求" })
  // }
}