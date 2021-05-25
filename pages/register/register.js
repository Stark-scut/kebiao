Page({
  data:{
    name:'',
    account:'',
    password:''
  },
  getName(e)  //获取用户名
  {
    this.setData({
      name:e.detail.value
    })
  },
  getAccount(e)   //获取账号
  {
    this.setData({
      account:e.detail.value
  })
},
getPassword(e){    //获取用户密码
  this.setData({
    password:e.detail.value
})
},
  register(){   
    let name=this.data.name
    let account=this.data.account
    let password=this.data.password
    if(name.length<2)
    {
       wx.showToast({   //弹出提示框
        icon:'none',     //取消提示框的√
        title:'用户名至少2位',
       })
       return
    }
    if(name.length>10)
    {
       wx.showToast({
        icon:'none',
        title:'用户名至多10位',
       })
       return
    }
    if(account.length<4)
    {
      wx.showToast({
        icon:'none',
        title:'账号至少4位',
      })
      return
    }
    if(password.length<6)
    {
      wx.showToast({
        icon:'none',
        title:'密码至少6位'
      })
      return
    }
    wx.cloud.database().collection('user').add({   //将数据储存在云数据库中user这个集合里面
      data:{
        name:name,
        account:account,
        password:password
      },
      success(res)        //若成功储存数据
      {
        wx.showToast({
          title:'注册成功',
        })
        wx.navigateTo({
          url: '../login/login',  //注册成功后跳转到登录login界面
        })
      },
      fail(res)
      {
        console.log('失败',res)   
      }
    })
  },
})