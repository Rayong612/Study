var app = getApp();

Page({
  data: {
      username:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(app.appData.userinfo == null){
      // wx.navigateTo({
      //   url: '../login/login',
      // })
      // 这里判断不可以使用navigateTo，不需要他可以返回
      console.log("1:"+app.appData.userinfo)
      wx.redirectTo({
        url: '../login/login'
      })
    }else{
      console.log("2:" +app.appData.userinfo)
      this.setData({username:app.appData.userinfo.username})
      console.log(this.username)
    }
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