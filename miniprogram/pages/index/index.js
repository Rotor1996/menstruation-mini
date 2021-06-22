// pages/index/index.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    login:false
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
    // 判断用户是否存在登录信息
    if(wx.getStorageSync('userInfo')){
      this.setData({
        login:true
      })
    }else{

    }
  },
  userInfo: function () {
    wx.getUserProfile({
      desc: 'test',
      success:(res) => {
        wx.setStorageSync('userInfo', res.userInfo)
        wx.cloud.callFunction({
          name:'login',
          success:function(res){
            wx.setStorageSync('openId', res.result.openid)
          }
        })
        this.onShow()
      }
    })
  },
  getMenstruation:function(){
    
  },
  insert: function () {
    db.collection('user').add({
      data: {
        name: 'test'
      },
      success: res => {
        console.log(res)
      },
      fail: err => {
        console.log(err)
      }
    })
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