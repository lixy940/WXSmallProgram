// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ["重庆市","重庆市","荣昌区"],
    now:{
      cond_code:999
    }
  },
  changeRegion: function (e) {
    console.log(e.detail);
    this.setData({
      region: e.detail.value
    })
    this.getWeather();
  },
  getWeather: function () {
    let that = this;
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/now?',
      data: {
        location: that.data.region[1],
        key: '0cb48ced92954c02a2f2f2a516c2b168'
      },
      success: function (res) {
        console.log(res);
        that.setData({
          now: res.data.HeWeather6[0].now
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getWeather();
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