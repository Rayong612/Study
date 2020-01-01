Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:null,
    title:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("--index2 page onLoad--");
    console.log(options);
    this.setData({text: options.id});
    this.setData({title: options.title});
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("--index2 page onReady--");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("--index2 page onShow--");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("--index2 page onHide--");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("--index2 page onUnload--");
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