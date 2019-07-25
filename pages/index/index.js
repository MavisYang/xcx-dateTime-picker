//index.js
//获取应用实例
const app = getApp()

//Page Object
Page({
  data: {
    dataStatus: false,//是否显示日期选择控件
    startYear:new Date().getFullYear(),
    endYear:2050,
    remindTime: null,

  },

  //显示日期选择
  showDateModule: function () {
    this.setData({
      dataStatus: true,
    })
  },
  //关闭日期选择
  closeDateModule: function (e) {
    let { remindTime } = this.data
    if (e.detail.value) {
      remindTime = e.detail.value
    }
    console.log(remindTime,'remindTime');
    
    this.setData({
      dataStatus: false,
      remindTime
    })
  }
});
