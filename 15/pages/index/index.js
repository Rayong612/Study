//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
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
  callClick:function(){
    wx.makePhoneCall({
      phoneNumber: '888888' //仅为示例，并非真实的电话号码
    })
  },
  screenClick:function(){
    wx.getScreenBrightness({
      success(res) {
        console.log(res)

      }
    })
  },
  thingClick:function(){
    wx.getSystemInfo({
      success: function(res) {
        console.log(res)
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowHeight)
        console.log(res.windowWidth)
        console.log(res.language)
        console.log(res.version)

      },
    })
  },
  useClick:function(){
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
   
  },
  usesClick:function(){
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  },
  use2Click:function(){
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  
  },
  statusClick:function(){
    wx.getNetworkType({
      success(res) {
        console.log(res)
        const networkType = res.networkType
      }
    })
  },
  saoClick:function(){
    // 允许从相机和相册扫码
    wx.scanCode({
      success(res) {
        console.log(res)
      }
    })

    // 只允许从相机扫码
    wx.scanCode({
      onlyFromCamera: true,
      success(res) {
        console.log(res)
      }
    })
  },
  blueClick:function(){
    // 以微信硬件平台的蓝牙智能灯为例，主服务的 UUID 是 FEE7。传入这个参数，只搜索主服务 UUID 为 FEE7 的设备
    wx.startBluetoothDevicesDiscovery({
      services: ['FEE7'],
      success(res) {
        console.log(res)
      }
    })
    // wx.getBluetoothAdapterState({
    //   success(res) {
    //     console.log(res)
    //   }
    // })
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
