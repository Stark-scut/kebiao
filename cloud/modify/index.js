// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({env:cloud.DYNAMIC_CURRENT_ENV})

// 云函数入口函数
exports.main = async (event, context) => {
 return cloud.database().collection('class1')
 .doc(event.id)
 .update({
   data:{
     name:event.name,
     position:event.position,
     teacher:event.teacher,
     credit:event.credit
   }
 })
}