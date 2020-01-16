Page({

  /**
   * 页面的初始数据
   */
  data: {
    alertHidden:true,
    modalHidden:true,
    loading:false,
    plain:false,
    toastHidden:true,
    loadingHidden:true
  },
  clickBtn:function(){
    this.setData({alertHidden:false,loading:!this.data.loading})
  },
  clickBtn2:function(){
    this.setData({modalHidden:false,plain:!this.data.plain})
  },
  clickBtn3:function(){
    this.setData({ toastHidden:false})
  },
  clickBtn4:function(){
    this.setData({ loadingHidden: false, plain: !this.data.plain })

// loading不会自己消失，可以自己手动设置setTimeout，注意，赋值时候不再是this，要先在外面设置一个变量得到最新的this，再进行赋值语句使loading消失
    var that = this;
    setTimeout(function(){
      that.setData({ loadingHidden: true })
    },1500)
  },
  actionSheetChange:function(){
    console.log("actionSheetChange")
    this.setData({ alertHidden: true })
  },
  itemClick:function(e){
    // console.log(e)
      console.log(e.currentTarget.dataset.name)
  },
  modalConfirm:function(){
    console.log("modalConfirm")
    this.setData({ modalHidden: true })
  },
  modalCancel:function(){
    console.log("modalCancel")
    this.setData({ modalHidden: true })
  },
  toastChange:function(){
    console.log("toastHidden")
    this.setData({ toastHidden: true })
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