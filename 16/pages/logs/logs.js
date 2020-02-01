//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })

    wx.setNavigationBarTitle({
      title: '当前页面'
    })

    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#ff0000',
      animation: {
        duration: 300,
        timingFunc: 'easeIn'
      }
    })


    // wx.setBackgroundTextStyle({
    //   textStyle: 'dark' // 下拉背景字体、loading 图的样式为dark
    // })
    // wx.setBackgroundColor({
    //   backgroundColor: '#ffffff', // 窗口的背景色为白色
    // })

    // wx.setBackgroundColor({
    //   backgroundColorTop: '#ffffff', // 顶部窗口的背景色为白色
    //   backgroundColorBottom: '#ffffff', // 底部窗口的背景色为白色
    // })
  },
  onReady:function(){
    wx.showNavigationBarLoading()
    // 在当前页面显示导航条加载动画
  },
})
