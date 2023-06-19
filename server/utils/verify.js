const { jwtVerify } = require('./jwt')
const SECRET = process.env.ECHO_SECRET || "ECHO"

// 验证参数
function verify(Param, reqParams) {
  for (const reqParam of reqParams) {
    if (!Param[reqParam]) {
      throw new Error(`Parameter '${reqParam}' not legal`)
    }
  }
}
function verifyToken(token) {
  const data = jwtVerify(token, SECRET)
  if (data.msg) return false
  if (data.id) {
    const condition = data.id === global.echo_admin._id.toString()
    if (condition) return true
    return false
  }
}
module.exports = { SECRET, verify, verifyToken }
