var id=''
Page({
  data:{
     class:{}
  },
  onLoad(options){
     id=options.id
     this.setClass()
  },
  setClass(){
    wx.cloud.callFunction({
      name:'getData1',
      data:{
        id:id,
      }
    })
    .then(res=>{
      console.log('chengong',res.result.data)
      this.setData({
        class:res.result.data
      })
    })
    .catch(res=>{
      console.log('shibia',res)
    })
  },
  delete(){
     wx.cloud.callFunction({
       name:'delete',
       data:{
         id:id,
       }
     })
     .then(res=>{
      console.log('删除成功',res)
    })
    .catch(res=>{
      console.log('删除失败',res)
    })
    wx.navigateTo({
      url: '/pages/class/class',
    })
  },
  modify(){
   wx.navigateTo({
     url: '/pages/modify/modify?id='+id,
   })
  }
})