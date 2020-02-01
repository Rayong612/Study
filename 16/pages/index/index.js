Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
btn1:function(){
  wx.showTabBarRedDot({
    index:0
  })
},
btn8:function(){
  wx.hideTabBarRedDot({
    index:0
  })
},
btn2:function(){
  wx.hideTabBarRedDot({
    animation:true,
  })
},
btn3:function(){
  wx.hideTabBarRedDot({
    animation:true,
  })
},
btn4:function(){
  wx.setTabBarStyle({
    color: '#ff7f00',
    selectedColor: '#bc1717',
    backgroundColor: '#cdcdcd',
    borderStyle: 'black'
  })
},
btn5:function(){
  wx.setTabBarItem({
    index: 0,
    text: '首页',
    iconPath: 'images/icons2.png',
    selectedIconPath: 'images/icon2.png'
  })
},
btn6:function(){
  wx.setTabBarBadge({
    index: 0,
    text: '1'
  })
},
btn7:function(){
  wx.setTabBarBadge({
    index: 0
  })
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