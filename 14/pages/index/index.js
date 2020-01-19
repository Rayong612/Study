//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '请求百度数据',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgBtn:null,
    img2Btn:null
  },
  //事件处理函数
  bindViewTap: function() {
    wx.request({
      url: 'http://web.evolong.top/luoyong/task_05/index.html', //自己平时做的一个界面
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      },
      fail: function () {
        console.log("--fail--")
      }
    })
  },
  imageBtn:function(){
    var that = this;//为了保持当前状态的this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        that.setData({
          imgBtn: tempFilePaths
        })
      },

      complete:function(){
        // complete函数是选择图片成功还是失败都会执行的一个函数
        console.log("--complete--")
      },
    })
  },
  upBtn:function(){
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'http://web.evolong.top/luoyong/task_05/image',
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success(res) {
            const data = res.data
            console.log("--up-success--")
            //do something
          },
          fail(res){
            console.log("--up-fail--")
          }
        })
      }
    })
  },
downBtn:function(){
  wx.downloadFile({
    url: 'http://web.evolong.top/luoyong/task_05/image/content4.png', //仅为示例，并非真实的资源
    success(res) {

      var that = this;
      // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
      if (res.statusCode === 200) {
        wx.playVoice({
          filePath: res.tempFilePath
              
      
        })
        that.setData({
          img2Btn: res.tempFilePath
        })
      }
    }
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
