//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '欢迎您，罗先生',
    userInfo: {},
    hasUserInfo: false,
    text:'1111',
    btnText1:'这是第一个按钮',
    btnText2:'这是第二个按钮',
    show:true,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
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
  },

// 第一个按钮的跳转事件
  btnClick1: function () {
    wx.navigateTo({
      url: '../pagefirst/pagefirst'
    })
  },

  // 第二个按钮的点击事件
  btnClick: function(){
    console.log('该按钮被点击了');
    // 获取data需要中的值
    var isShow = this.data.show;
    console.log("isShow:"+isShow);
    this.setData({text:"2333..",show:!isShow});
  
  }

})
