var id=''
var name=''
var teacher=''
var position=''
var credit=''
Page({
  onLoad(options){
     id=options.id
  },
  getName(e){
     name=e.detail.value
  },
  getTeacher(e){
    teacher=e.detail.value
  },
  getPosition(e){
    position=e.detail.value
  },
  getCredit(e){
    credit=e.detail.value
  },
  modify(){
    if(name==''){
      wx.showToast({
        title: '请输入课程名称',
        icon:'none',
      })
    }else if(position==''){
      wx.showToast({
        title: '请输入上课地点',
        icon:'none',
      })
    }else if(teacher==''){
      wx.showToast({
        title: '请输入老师名字',
        icon:'none'
      })
    }else if(credit==''){
      wx.showToast({
        title: '请输入课程学分',
        icon:'none'
      })
    }else{
    wx.cloud.callFunction({
      name:'modify',
      data:{
        id:id,
        name:name,
        position:position,
        teacher:teacher,
        credit:credit
      }
    })
    .then(res=>{
      console.log('更改数据成功',res)
    })
    .catch(res=>{
      console.log('更改数据失败',res)
    })
    wx.navigateTo({
      url: '/pages/class/class',
    })
  }
}
})