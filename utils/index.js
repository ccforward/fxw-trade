const { customAlphabet } = require('nanoid')
const crypto = require('crypto')
const Buffer = require('buffer').Buffer
const { SECRET_KEY, SECRET_IV } = require('../config/index')
const Utils = {
  /**
   * 加密方法
   * @param key 加密key
   * @param iv 向量
   * @param data 需要加密的数据
   * @returns buffer
   */
  encrypt(key, iv, data) {
    let cipher = crypto.createCipheriv('aes-128-cbc', key, iv)
    let crypted = cipher.update(data, 'utf8', 'binary')
    crypted += cipher.final('binary')
    crypted = Buffer.from(crypted, 'binary')
    return crypted
  },

  /**
   * 解密方法
   * @param key 解密的key
   * @param iv 向量
   * @param crypted 密文
   * @returns string
   */
  decrypt(key, iv, crypted) {
    crypted = Buffer.from(crypted, 'base64').toString('binary')
    const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv)
    let decoded = decipher.update(crypted, 'binary', 'utf8')
    decoded += decipher.final('utf8')
    return decoded
  },
  // 生成 uuid
  createId: (length = 20) => {
    const letters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const createShortId = customAlphabet(letters, length)
    return createShortId()
  },
  createNumberId: (length = 10) => {
    const createShortId = customAlphabet('0123456789', length)
    return createShortId()
  },

  // 生成 token
  createToken: (data, days = 30) => {
    const expires = new Date().getTime() + days * 24 * 60 * 60 * 1000
    const tokenData = `${Math.random().toString()}__${data}__${expires}`
    return Utils.encrypt(SECRET_KEY, SECRET_IV, tokenData).toString('hex')
  },

  // 解密验证 token
  checkToken: token => {
    try {
      // 验证是否为合法的 Base64 格式
      if (!/^[A-Za-z0-9+/]+=*$/.test(token)) {
        return { valid: false, error: 'Invalid token format', tokenData: null }
      }

      const encryptedBuffer = Buffer.from(token, 'base64')

      let decipher = crypto.createDecipheriv(
        'aes-128-cbc',
        SECRET_KEY,
        SECRET_IV
      )
      let decrypted = decipher.update(encryptedBuffer, 'binary', 'utf8')
      decrypted += decipher.final('utf8')
      const tokenObject = JSON.parse(decrypted)

      const { timestamp, expiry } = tokenObject

      // 验证过期
      const currentTimestamp = new Date().getTime()
      if (currentTimestamp - timestamp > expiry) {
        return { valid: false, error: 'Token expired', tokenData: tokenObject }
      }

      return { valid: true, tokenData: tokenObject }
    } catch (err) {
      console.error(err)
      return { valid: false, error: 'Invalid token format', tokenData: null }
    }
  },
}

module.exports = Utils
