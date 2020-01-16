// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImg: [
      { src: "https://himg2.huanqiucdn.cn/attachment2010/2020/0113/14/38/20200113023826668.png" },
      { src: "https://himg2.huanqiucdn.cn/attachment2010/2020/0105/20200105113122457.gif" },
      { src: "https://himg2.huanqiucdn.cn/attachment2010/2020/0107/13/33/20200107013324191.jpg" }
    ],
    newsList:[
      {
        id:1,
        title:"推特三连发！伊朗最高领袖抨击美国及其同伙是中东动荡之源",
        poster:"https://himg2.huanqiucdn.cn/attachment2010/2020/0113/14/38/20200113023826668.png",
        add_time:"2020-01-14 10:19"
      },
      {
        id: 2,
        title: "兵哥哥“驾考”画面曝光！网友：都不敢说自己会开车了…",
        poster: "https://himg2.huanqiucdn.cn/attachment2010/2020/0105/20200105113122457.gif",
        add_time: "2020-01-13 15:19"
      },
      {
        id: 3,
        title: "澳大利亚政府救火不力，消防员愤怒叫总理“滚”！",
        poster: "https://himg2.huanqiucdn.cn/attachment2010/2020/0107/13/33/20200107013324191.jpg",
        add_time: "2020-01-14 15:19"
      }
    ]
  },
  showDetail:function(e){
    console.log(e.id);
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