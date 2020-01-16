const innerAudioContext=wx.createInnerAudioContext({});
const currentLongTime = 0;
Page({
  data: {
    name: '恋爱回旋',
    author: '花泽香菜',
    isplaying: false, //控制
    src: '/audio/花澤香菜 - 恋愛サーキュレーション.mp3',
    currentTime:"00:00",
    duration:'04:13',
    tip:'icon-bofang',
    tt:50
  },
  changeState:function(){
    if(this.data.isplaying){
      this.stop();
      this.setData({
        currentTime: getDuration(innerAudioContext.currentTime),
        isplaying: !this.data.isplaying,
        tip: 'icon-bofang'
      })
    }else{
      this.play();
      this.setData({
        // currentTime: getDuration(innerAudioContext.currentTime),
        isplaying: !this.data.isplaying,
        tip:'icon-ai06'
      })
    }
    
  },
  //点击播放,(如果要一进来就播放放到onload即可)
  play: function () {
    innerAudioContext.play();
  },
  //点击 停止
  stop: function () {
    innerAudioContext.pause();
  },
  //下一首
  nextMusic:function(){

  },
  //上一首
  preMusic:function(){

  },
   /* 生命周期函数--监听页面显示
   */
  onShow: function() {
    // 获取当前页面的audio
    innerAudioContext.src = this.data.src;
  },
     /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onReady: function (e) {
  
  }
})


function getDuration(e){
  let duration = "00:00";
  if (e > 0) {
    let minute = Math.floor(e / 60);
    let second = Math.floor(e % 60);
    minute = minute >= 10 ? minute : "0" + minute;
    second = second >= 10 ? second:"0" + second ;
    duration = minute + ":" +second;
  }
  return duration
}