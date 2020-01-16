// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headPic:"",
    nickName:"",
    newsList: [
      {
        id: 1,
        title: "推特三连发！伊朗最高领袖抨击美国及其同伙是中东动荡之源",
        poster: "https://himg2.huanqiucdn.cn/attachment2010/2020/0113/14/38/20200113023826668.png",
        add_time: "2020-01-14 10:19"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userInfo = getApp().globalData.userInfo;
    this.setData({
      nickName: userInfo.nickName,
      headPic: userInfo.avatarUrl
    })
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