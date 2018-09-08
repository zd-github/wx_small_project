//引入wxParse模块 解析html
var wxParse = require("../../wxParse/wxParse.js");

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
    // 设置标题文字
    wx.setNavigationBarTitle({
      title: options.title
    })

    // 请求 轮播图 数据 函数
    wx.request({
      // 请求的 接口
      url: 'https://cnodejs.org/api/v1/topic/' + options.id,
      // 请求的方法
      method: "get",
      dataType: "json",
      header: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
      // 请求成功  采用箭头函数  this指向对象
      success: (res) => {
        if (res.data.data.title) {
          this.setData({ showLoading: false });
        } else {
          this.setData({ showLoading: true });
        }
        this.setData({ dataList: res.data.data });
        /**
       *  用 WxParse 插件 解析 数据 里的 html 元素
       * WxParse.wxParse(bindName , type, data, target,imagePadding)
       * 1.bindName绑定的数据名(必填)
       * 2.type可以为html或者md(必填)
       * 3.data为传入的具体数据(必填)
       * 4.target为Page对象,一般为this(必填)
       * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
       */
        wxParse.wxParse('movie', 'html', res.data.data.content, this, 5);

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