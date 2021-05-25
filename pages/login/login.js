Page({
  onLoad(){       //onLoad函数在界面第一次加载时调用，加载完毕后再次显示该界面是不会再调用
  },
  data:{
    account:'',
    password:''
  },
  getAccount(e)      
  {
    this.setData({
      account:e.detail.value
    })
  },
  getPassword(e)
  {
    this.setData({
      password:e.detail.value
    })
  },
  login()
  {
    let account=this.data.account
    let password=this.data.password
    if(account.length<4)
    {
      wx.showToast({
        icon:'none',
        title:'账号至少4位'
      })
      return
    }
    if(password.length<4)
    {
      wx.showToast({
        icon:'none',
        title:'密码至少6位'
      })
      return
    }
    wx.cloud.database().collection('user').where({     //在云数据库中的user集合中查找数据
      account:account   //前一个account是云数据库里的，后一个account是用户输入的，即找到与用户输入的相同的云数据库里的账号
    }).get({
      success(res){
        console.log('获取数据成功',res)   
        console.log('res',res)
        let user=res.data[0]    //返回的数据是一个对象，对象里面的data是以对象为元素的数组
        console.log("user",user)
        if(password==user.password)//注意判断相等不要写成赋值语句
        {
          console.log('登录成功')
          wx.showToast({
            title: '登录成功',
          })
          wx.setStorageSync('user', user)   //将数据储存在storage里面，括号里面的第一个参数是key，即储存的该数据的名称，获取该信息时需使用相同的key
          wx.navigateTo({
            url:'/pages/class/class',//page前面的/不能忘记
          })
        }else{
          console.log('登录失败')
          wx.showToast({
            title: '账号或密码不正确',
            icon:'none'
          })
        }
      },
      fail(res)
      {
        console.log('获取数据失败',res)
      }
    })
  }
})