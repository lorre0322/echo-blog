const jwt = require('jsonwebtoken')

module.exports = {
  // 将给定的签名和密钥计算出加密令牌字符串
  jwtSign(payload, secret, options) {
    return jwt.sign(payload, secret, options)
  },
  // 以公钥和密钥计算出解码令牌字符串
  jwtVerify(token, secret) {
    return jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        switch (err.name) {
          case 'TokenExpiredError':
            return { msg: 'Token overdue' }
          case 'JsonWebTokenError':
            return { msg: 'Token invalid' }
        }
      }
      return decoded
    })
  }
}
