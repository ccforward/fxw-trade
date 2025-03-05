const FaceModel = require('../models/faces.js')
const Model = require('../models/index.js')
const akoolService = require('./akool.js')
const { createId } = require('../utils/index.js')

const createFace = async ({ url, uid, task_id }) => {
  const nowTime = new Date().getTime()
  const ret = await Model.create(FaceModel, {
    face_id: createId(),
    url,
    uid,
    task_id,
    ctime: nowTime,
  })
  return ret
}

// 查询 akool API 获取人脸的 landmarks 信息
const fetchAndSaveAkoolLandmarks = async ({ face_id, image_url }) => {
  const data = await akoolService.faceDetect({
    image_url,
  })
  // 没有人脸格式
  // {
  //   error_code: 0,
  //   error_msg: 'SUCCESS',
  //   landmarks: [],
  //   landmarks_str: [],
  //   region: [[0, 0, 112, 172]],
  //   seconds: 1.2626850605010986,
  //   trx_id: 'e2255338-a6c3-434b-b0de-81c47f24117c',
  // }

  // 图片异常
  // {
  //   error_code: 1,
  //   error_msg: "'NoneType' object has no attribute 'shape'",
  //   seconds: 0.20592737197875977,
  //   trx_id: 'f2e5591e-121b-46c6-bed7-9a81b25e0685',
  // }
  const { error_code, landmarks, landmarks_str, region } = data
  if (error_code === 0 && landmarks.length > 0) {
    await Model.updateOne(FaceModel, { face_id }, {
      akool_landmarks: landmarks,
      akool_landmarks_str: landmarks_str,
      akool_region: region,
    })
  }
  return data
}

module.exports = {
  createFace,
  fetchAndSaveAkoolLandmarks,
}
