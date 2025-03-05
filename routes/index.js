const express = require('express')
const UserModel = require('../models/users.js')
const router = express.Router()
const { createToken } = require('../utils/index.js')

router.get('/', function (req, res) {
  res.render('index')
})

router.post('/user/login', async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    return res.status(200).send({
      success: false,
      message: 'Need phone and password',
    })
  }
  try {
    const userData = await UserModel.findOne({
      name: username,
      password,
    })
    if (!userData) {
      return res.status(200).send({
        success: false,
        message: '用户名或密码错误',
      })
    }
    const token = createToken(
      JSON.stringify({
        uid: userData.id,
        name: userData.name,
        role: userData.role,
      })
    )

    const maxAge = 90 * 24 * 60 * 60 * 1000
    res.cookie('stk', token, {
      maxAge,
      httpOnly: true,
    })
    res.status(200).send({
      uid: userData.id,
      name: userData.name,
      role: userData.role,
      success: true,
    })
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).send({
      success: false,
      message: 'err',
    })
  }
})

router.post('/user/logout', async (req, res) => {
  res.clearCookie('stk')
  res.status(200).send({
    success: true,
  })
})

module.exports = router
