const app = getApp()

Page({
  data: {
    code:"请点击获取",
    isPhone:false,
    phone:{}
  },
  onLoad() {
  },
  wxLogin(){
      let that =this
    wx.login({
        success (res) {
          if (res.code) {
              console.log("code:仅能用一次",res.code)
              that.setData({
                  code:res.code
              })
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      })
  },
  copy(e){
    console.log(e.currentTarget.dataset.txt)  
    wx.setClipboardData({
        data: e.currentTarget.dataset.txt,
        success(res) {
          wx.showToast({
            title: '复制成功',
          })
        },
        fail(res) {
          wx.showToast({
            title: '复制失败',
            icon: 'none'
          })
        }
      })
  },
  getPhoneNumber (e) {
    console.log(e.detail)
    this.setData({
      isPhone: true,
      phone:{
        encryptedData:e.detail.encryptedData,
        code: e.detail.code,
        iv: e.detail.iv
      }
    })
  }
})
