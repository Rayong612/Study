// pages/base/base.js
Page({


  /**
   * 页面的初始数据
   */
  data: {
    images: []
  },

  upBtn: function() {
    // 上传图片API
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)

        wx.cloud.uploadFile({
          cloudPath: new Date().getTime() + '.png',
          filePath: tempFilePaths[0], // 文件路径
        }).then(res => {
          // get resource ID
          console.log(res.fileID)

          const db = wx.cloud.database()
          db.collection('images').add({
            data: {
              fileID: res.fileID
            }
          }).then(res => {
            console.log(res)
          }).catch(err => {
            console.error(err)
          })


        }).catch(err => {
          // handle error
          console.error(err)
        })

      }
    })
  },


  getBtn: function() {
    wx.cloud.callFunction({
      name: 'login'
    }).then(res => {
      console.log(res)
      const db = wx.cloud.database()
      db.collection('images').where({
        _openid: res.result.openid
      }).get().then(res2 => {
        console.log(res2)
        this.setData({
          images: res2.data
        })
      })
    }).catch(err => {
      console.error(err)
    })
  },

  downBtn: function(event) {
    wx.cloud.downloadFile({
      fileID: event.target.dataset.fileid, // 文件 ID
      success: res => {
        // 返回临时文件路径
        console.log(res.tempFilePath)
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success(res) {
            wx.showToast({
              title: '下载成功',
            })
          }
        })
      },
      fail: console.error
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})