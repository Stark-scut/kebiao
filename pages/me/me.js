Page({
  data:{
    success:'',
    name:''
  },
  toLogin(){
    wx.navigateTo({
      url: '/pages/login/login',     //跳转到login界面
    })
  },
  toRegister(){       //跳转到注册界面
    wx.navigateTo({
      url:'/pages/register/register',
    })
  },
  onShow(){
    let user=wx.getStorageSync('user')     
    if(user)
    {
      this.setData({
        success:true,
        name:user.name
      })
    }else{
      this.setData({
        success:false
      })
    }
  },
  quit(){
   wx.setStorageSync('user', null)
   this.setData({
     success:false
   })
  }
})