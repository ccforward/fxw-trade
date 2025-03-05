/**
 * 增删改的原子操作
 */

const create = async (model, data) => {
  try {
    const ret = await model.create(data)
    return {
      success: true,
      ret,
    }
  } catch (err) {
    return {
      success: false,
      err,
    }
  }
}

const deleteOne = async (model, data) => {
  try {
    const ret = await model.deleteOne({ id: data.id })
    return {
      success: ret.deletedCount === 1,
    }
  } catch (err) {
    console.error(err)
    return {
      success: false,
    }
  }
}

const updateOne = async (model, condition, data) => {
  try {
    const ret = await model.updateOne(condition, data)
    return {
      success: ret.modifiedCount === 1,
    }
  } catch (err) {
    return {
      success: false,
      err,
    }
  }
}

const findOne = async (model, data) => {
  try {
    const ret = await model.findOne(data)
    if (!ret) {
      return {
        success: false,
        err: 'not found',
      }
    }
    return {
      success: true,
      ret,
    }
  } catch (err) {
    return {
      success: false,
      err,
    }
  }
}

module.exports = {
  create,
  deleteOne,
  updateOne,
  findOne,
}
