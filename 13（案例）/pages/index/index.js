Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots:true,
    autoplay:true,
    interval:4000,
    duration:1000,
    imgUrl:[
      '/images/1.png',
      '/images/2.png',
      '/images/3.png',
    ],
    contentItem:[
      { img: '/images/content2.png', text:'鬼灭之刃'},
      { img: '/images/content3.png', text:'我的英雄学院'},
      { img: '/images/content1.png', text:'海贼王'},
      { img: '/images/content4.png', text:'罗小黑战记'},
    ],
    listItem:[
      { img: '/images/list1.jpg', img2: '/images/user1.jpg', text: '阴阳师.平安物语', text2:'该作以日本平安时代为背景，讲述了阴阳师安倍晴明于人鬼交织的阴阳两界中，探寻自身记忆的故事。'},
      { img: '/images/list2.jpg', img2: '/images/user2.jpg', text: '喜洋洋与灰太狼之跨时空救兵', text2:'为阻止危机，众羊狼联合驾驶全面升级的嘻哈火车与天狼号穿梭时空，将胡乱闯入的人和物送回原来的时空。'},
      { img: '/images/list3.jpg', img2: '/images/user3.jpg', text: '哆啦A梦5', text2:'大雄家里住着来自未来的机器猫——哆啦A梦，哆啦A梦看到大雄被欺负经常会忍不住拿出一些未来世界的“道具”帮助他。'},
    ],
    
  },

  // contentItem: [{
  //   caseitem: { contentImg: '/images/content2.png', contentText: '鬼灭之刃', id: 0 },
  //   caseitem: { contentImg: '/images/content3.png', contentText: '我的英雄学院', id: 1 },
  //   caseitem: { contentImg: '/images/content1.png', contentText: '海贼王', id: 2 },
  //   caseitem: { contentImg: '/images/content4.png', contentText: '罗小黑战记', id: 3 },
  // }]

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