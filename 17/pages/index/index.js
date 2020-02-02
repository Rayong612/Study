//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  animationData:[]
  },
  //事件处理函数
  bindViewTap:function(){
    wx.navigateTo({
      url: '/pages/logs/logs',
    })
  },

  rotateBtn: function() {

  var animation = wx.createAnimation({
    duration:2000,
    timingFunctionL:'linear',
    delay:0,
    transformOrigin:'50% 50% 0'
  })

  animation.rotate(360).step()

  this.setData({
    animationData:animation.export()
  })
  },
  
  scaleBtn: function() {

  var animation = wx.createAnimation({
    duration:2000,
    timingFunctionL:'linear',
    delay:0,
    transformOrigin:'50% 50% 0'
  })
  animation.scale(2).step()
  this.setData({
    animationData:animation.export()
  })
  },

  scale2Btn: function() {

  var animation = wx.createAnimation({
    duration:2000,
    timingFunctionL:'linear',
    delay:0,
    transformOrigin:'50% 50% 0'
  })
  animation.scale(1).step()
  this.setData({
    animationData:animation.export()
  })
  },

  translateBtn: function() {

  var animation = wx.createAnimation({
    duration:2000,
    timingFunctionL:'linear',
    delay:0,
    transformOrigin:'50% 50% 0'
  })
    animation.translate(100).step()
  this.setData({
    animationData:animation.export()
  })
  },

  translate2Btn: function() {

  var animation = wx.createAnimation({
    duration:2000,
    timingFunctionL:'linear',
    delay:0,
    transformOrigin:'50% 50% 0'
  })
    animation.translate(-100).step()
  this.setData({
    animationData:animation.export()
  })
  },

  bbBtn: function() {

  var animation = wx.createAnimation({
    duration:2000,
    timingFunctionL:'linear',
    delay:0,
    transformOrigin:'50% 50% 0'
  })
    animation.rotate(360).scale(2).translate(50).step()
  this.setData({
    animationData:animation.export()
  })
  },


  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
