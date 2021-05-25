
Page({
  data:{
    list:[],
    colorArray: ["#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
  },
  onLoad(){
    this.getList()
    // console.log('shuchu',this.data)
  },
  getList()
  {
    wx.cloud.callFunction({
      name:"getData"
    })
    .then(res=>{
      // console.log(res)
      console.log('成功',res.result.data)
      this.setData({
        list:res.result.data
      })
    })
    .catch(err=>{
      console.log('失败',err)
    })
  },
  toDetail(e){
    // console.log('获取id',e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '/pages/detail/detail?id='+e.currentTarget.dataset.id,
    })
  }
})