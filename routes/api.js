const express = require('express')
const router = express.Router()
const UserModel = require('../models/users.js')
const OrderModel = require('../models/orders.js')
const { createId } = require('../utils/index.js')

router.post('/users/list', async (req, res) => {
  const { uid } = req
  try {
    // 权限校验 只有 role >= 1000 的用户才能查看
    const user = await UserModel.findOne({ id: uid })
    if (!user || user.role < 100) {
      return res.send({
        success: false,
        message: '无查看权限',
      })
    }
    const ret = await UserModel.find()
    res.send({
      success: true,
      data: ret,
    })
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    })
  }

})

router.post('/users/update', async (req, res) => {
  const { uid } = req
  const { id, password } = req.body
  try {
    // 权限校验 只有 role >= 100 的用户才能查看
    const user = await UserModel.findOne({ id: uid })
    if (!user || user.role < 100) {
      return res.send({
        success: false,
        message: '无修改权限',
      })
    }
    const ret = await UserModel.updateOne({ id }, { password })
    res.send({
      success: true,
      data: ret,
    })
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    })
  }

})

router.post('/users/create', async (req, res) => {
  const { uid } = req
  const { username, password } = req.body
  try {
    // 权限校验
    const currentUser = await UserModel.findOne({ id: uid })
    if (!currentUser || currentUser.role < 100) {
      return res.send({ success: false, message: '无创建权限' })
    }

    // 校验用户名唯一性
    const existUser = await UserModel.findOne({ name: username })
    if (existUser) {
      return res.send({
        success: false,
        message: '用户名已存在'
      })
    }

    // 明文存储密码
    const newUser = await UserModel.create({
      id: createId(),
      name: username,
      password: password, // 直接存储明文
      role: 10
    })

    res.send({
      success: true,
      data: {
        id: newUser.id,
        name: newUser.name,
        role: newUser.role
      }
    })
  } catch (err) {
    res.send({
      success: false,
      message: err.message
    })
  }
})

// 订单列表查询
router.post('/orders/list', async (req, res) => {
  const { uid } = req
  try {
    // 基础权限校验（可根据需要调整）
    const user = await UserModel.findOne({ id: uid })
    if (!user) {
      return res.send({ success: false, message: '用户未登录' })
    }

    // 构建查询条件
    const { startDate, endDate, createUserId, status } = req.body
    const query = {
      date: { $gte: startDate, $lte: endDate }
    }

    if (createUserId) query.createUserId = createUserId
    if (status) query.status = status

    // 查询订单并关联用户信息
    const orders = await OrderModel.find(query)
    // 查询所有用户 组合 id 和 name
    const users = await UserModel.find({}, { id: 1, name: 1 })
    const usersMap = users.reduce((map, user) => {
      map[user.id] = user.name
      return map
    }, {})
    // 处理返回数据格式
    const data = orders.map(order => {
      return {
        ...order._doc,
        createUserName: usersMap[order.createUserId] || '未知用户'
      }
    })

    res.send({ success: true, data })
  } catch (err) {
    res.send({ success: false, message: err.message })
  }
})

// 新增订单
router.post('/orders/add', async (req, res) => {
  const { uid } = req
  try {
    // 获取当前用户
    const user = await UserModel.findOne({ id: uid })
    if (!user) {
      return res.send({ success: false, message: '用户未登录' })
    }

    // 创建订单
    const newOrder = await OrderModel.create({
      id: createId(),
      createUserId: uid,
      ...req.body
    })

    res.send({
      success: true,
      data: {
        ...newOrder._doc,
        createUserName: user.name
      }
    })
  } catch (err) {
    res.send({ success: false, message: err.message })
  }
})

// 更新订单状态
router.post('/orders/updateStatus', async (req, res) => {
  const { uid } = req
  try {
    // 基础权限校验
    const user = await UserModel.findOne({ id: uid })
    if (!user) {
      return res.send({ success: false, message: '用户未登录' })
    }

    const { id, status } = req.body
    const updated = await OrderModel.updateOne(
      { id },
      { $set: { status } }
    )

    res.send({ success: true, data: updated })
  } catch (err) {
    res.send({ success: false, message: err.message })
  }
})


module.exports = router
