var app = getApp();

Page({
  data: {
    username:null,
    password:null
  },

  loginBtnClick:function(){
app.appData.userinfo = {username:this.data.username,password:this.data.password};
    console.log(app.appData.userinfo);
    wx.redirectTo({
      url: '../user/user',
    })

    console.log("run")
  },



// 通过input的绑定事件获取input输入的值
  usernameInput:function(event){
    console.log(event.detail.value);
    this.setData({username:event.detail.value})
  },
  pwdInput:function(event){
console.log(event.detail.value);
    this.setData({password:event.detail.value})
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