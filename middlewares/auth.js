const { decrypt } = require('../utils/index.js')
const { SECRET_KEY, SECRET_IV } = require('../config/index.js')

module.exports = (req, res, next) => {
  const isDev = process.env.NODE_ENV === 'development'
  const token = isDev ? req.query.stk : req.cookies.stk
  if (isDev) {
    req.uid = 'fuxiwei'
    return next()
  }
  if (token) {
    const data = decrypt(SECRET_KEY, SECRET_IV, Buffer.from(token, 'hex'))
    const ret = data.split('__')
    const uid = ret[1]
    const expires = ret[2]
    if (expires < new Date().getTime()) {
      return res.send({ success: false, msg: 'Login expired' });
    }
    req.uid = uid
    return next()
  }
  return res.send({ success: false, msg: 'need login' });
};
