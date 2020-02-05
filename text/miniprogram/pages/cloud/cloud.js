const db = wx.cloud.database();//初始化数据库
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
// 插入数据库
  insertBtn:function(){
    
    // 该插入数据方法是回调方法
    // db.collection('user').add({
    //   data:{
    //     name: 'rayong',
    //     age: 21
    //   },
    //   success:res => { //es6中的箭头函数
    //     console.log(res)
    //   },
    //   fail:err => {
    //     console.log(err)
    //   }
    // })

   db.collection('user').add({
     data:{
       name:'jjj',
       age:18
     }
   }).then(res=>{
     console.log(res);
   }).catch(err=>{
     console.log(err);
   })

  },
// 更新数据库
  upBtn:function(){
    db.collection('user').doc('da51bd8c5e3ab07a0abc2f2877c9eb76').update({
      data:{
        age:30
      }
    }).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  },

  // 删除数据库数据
  delBtn:function(){
    db.collection('user').doc('1acf1de95e3aafeb0abcad053208ab58').remove().then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  },

// 查询数据库
  seachBtn:function(){
    db.collection('user').where({
      name:'jjj'
    }).get().then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
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