Page({

  /**
   * 页面的初始数据
   */
  data: {
    
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
    var context = wx.createContext()

context.setFontSize(14)
context.fillText("Rayong",50,50)
context.moveTo(0,50)
    context.lineTo(100, 50)
context.stroke()

context.setFontSize(20)
context.fillText("Rayong",100,100)
context.moveTo(0,100)
context.lineTo(200,100)
context.stroke()




    // context.rect(50,50,200,200)
    // context.fill()

    // context.clearRect(100,100,50,50)
// 画布的去除和填充


    // context.translate(50,50)
// 图像的偏移
    // context.rotate(5*Math.PI/180)
    // context.rect(50,50,200,200)
    // context.stroke()

    // context.rotate(5*Math.PI/180)
    // context.rect(50,50,200,200)
    // context.stroke()
   

   wx.drawCanvas({
     canvasId:'oneCanvas',
     actions:context.getActions()
   })
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