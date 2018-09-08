// pages/comingSon/comingSon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showLoading: true,
    dataList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 请求 轮播图 数据 函数
    wx.request({
      // 请求的 接口
      url: 'https://cnodejs.org/api/v1/topics?page=3&limit=6',
      // 请求的方法
      method: "get",
      dataType: "json",
      header: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
      // 请求成功  采用箭头函数  this指向对象
      success: (res) => {
        if (res.data.data) {
          this.setData({ showLoading: false });
        } else {
          this.setData({ showLoading: true });
        }
        this.setData({ dataList: res.data.data });
      },
      fail: (err) => {
        this.setData({ showLoading: true });
      }
    });

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