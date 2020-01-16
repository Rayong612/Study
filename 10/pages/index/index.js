// const innerAudioContext = wx.createInnerAudioContext();
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createInnerAudioContext('myAudio')
  },

  /**
   * 页面的初始数据
   */

  data: {
    poster: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000dUlqW3lbyob.jpg?max_age=2592000',
    name: '下山',
    author: '要不要买菜',
    src: 'http://isure.stream.qqmusic.qq.com/C400004dmA9q3YPzz0.m4a?guid=4886522199&vkey=123934E033EAB9CD1ED69015C6C57E2FF86B4A508C94308988EA776490CE166563367AFB6493B6FCA10A5734A4BF69AB9EDDFBAA422960EF&uin=0&fromtag=66',
   action:null,
    muted:false
  
  },
  audioPlay: function () {
    this.setData({action:{method:"play"}})
    // innerAudioContext.play();
    console.log("audioPlay")
  },
  audioPause: function () {
    this.setData({ action: { method: "pause" } })
   
    console.log("pause")
  },
  audio2:function(){
    this.setData({
      action: {
        method: 'setPlaybackRate',
        data: 2//加快速度
      },
    })
    console.log("2倍速播放")
  },
  audio14: function () {
    this.setData({
      action: {
        method: 'setCurrentTime',
        data: 14} })
    console.log("设置当前时间为14秒")
    // this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.setData({
      action: {
        method: 'setCurrentTime',
        data: 0
      }
    })
    console.log("回到起点")
  },
  // 时间发生改变的时候执行的函数
  funtimeupdate: function (e) {
    console.log(e.detail.currentTime);
    console.log(e.detail.duration);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})