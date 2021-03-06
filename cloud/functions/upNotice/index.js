// 得到通用信息
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database();

  const usual = await db.collection('usual').get();
  db.collection('usual').doc(usual.data[0]['_id']).update({
    data:{
      tip : event.notice
    }
  })
  return
}
