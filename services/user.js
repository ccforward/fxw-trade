const md5 = require('md5')
const UserModel = require('../models/users.js')
const Model = require('../models/index.js')
const { createId } = require('../utils/index.js')

const createUser = async ({
  googleId,
  email,
  password,
  loginType,
}) => {
  const nowTime = new Date().getTime()
  // 生成密码加盐
  const passwordSalt = createId()
  // 密码 md5 加密
  const newPassword = md5(password + passwordSalt)

  const ret = await Model.create(UserModel, {
    uid: createId(),
    googleId,
    email,
    password: newPassword,
    passwordSalt,
    loginType,
    ctime: nowTime,
  });
  return ret
}

// 根据 uid 查询用户
const fetchUserByUid = async ({ uid }) => {
  const ret = await UserModel.findOne({ uid })
  return ret
}


// 根据 email 查询用户
const fetchUserByEmail = async ({ email, loginType }) => {
  const query = { email }
  if (loginType) {
    query.loginType = loginType
  }
  const ret = await UserModel.findOne(query)
  return ret
}

// 根据 googeId 查询用户
const fetchUserByGoogleId = async ({ googleId }) => {
  const ret = await UserModel.findOne({ googleId })
  return ret
}

// 更新用户信息
const updateUser = async ({ email, password, loginType }) => {
  const updateData = {}
  
  if (password) {
    // 生成新的密码盐值和加密密码
    const passwordSalt = createId()
    const newPassword = md5(password + passwordSalt)
    updateData.password = newPassword
    updateData.passwordSalt = passwordSalt
  }

  if (loginType) {
    updateData.loginType = loginType
  }

  const ret = await UserModel.findOneAndUpdate(
    { email },
    { $set: updateData },
    { new: true }
  )
  return ret
}

module.exports = {
  createUser,
  fetchUserByUid,
  fetchUserByEmail,
  fetchUserByGoogleId,
  updateUser,
}