Page({
  onLoad(){
    wx.cloud.callFunction({
      name:'getData'
    })
    .then(res=>{
      console.log('成功',res)
      // this.setData({
      //   openid:res.result.openid
      // })
    })
    .catch(res=>{
      console.log('失败',res)
    })
  }
})