//index.js
//获取应用实例
const app = getApp()
const dateUtils = require('../../utils/dateutils');

//Page Object
Page({
  data: {
    dataStatus: false,//是否显示日期选择控件
    startYear:new Date().getFullYear(),
    endYear:2050,
    remindTime: null,

//er
    isShowPicker: false,
    mode: "YMDhms",
    data: {},
    date: new Date().getTime(),
    yMDhms: "",
    yMDhm: "",
    yMD: "",
    mD: "",
    hm: "",

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
  },

  //年月日时分秒

  showPicker: function (e) {

    this.setData({
      isShowPicker: true
    })
  },

  datePickerCancellEvent: function (e) {
    this.setData({
      isShowPicker: false
    })
    console.log(e)
  },
  datePickerOkEvent: function (e) {
    this.setData({
      isShowPicker: false
    })
    let mode = e.detail.data.type;
    let date = e.detail.date;

    switch (mode) {

      case "YMDhms":
        {
          this.setData({

            yMDhms: dateUtils.formatLongTime(date, "Y-M-D h:m:s")
          })

          break;
        }
      case "YMDhm":
        {
          this.setData({

            yMDhm: dateUtils.formatLongTime(date, "Y-M-D h:m")
          })

          break;
        }
      case "YMD":
        {
          this.setData({

            yMD: dateUtils.formatLongTime(date, "Y-M-D")
          })
          break;
        }
      case "MD":
        {
          this.setData({

            mD: dateUtils.formatLongTime(date, "M-D")
          })
          break;
        }
      case "hm":
        {
          this.setData({

            hm: dateUtils.formatLongTime(date, "h:m")
          })
          break;
        }
    }


  },
  onYMDhms: function (e) {

    this.setData({
      isShowPicker: true,
      mode: "YMDhms",
      data: { type: "YMDhms" }
    })
  },
  onYMDhm: function (e) {

    this.setData({
      isShowPicker: true,
      mode: "YMDhm",
      data: { type: "YMDhm" }
    })
  },
  onYMD: function (e) {

    this.setData({
      isShowPicker: true,
      mode: "YMD",
      data: { type: "YMD" }
    })

  },
  onMD: function (e) {

    this.setData({
      isShowPicker: true,
      mode: "MD",
      data: { type: "MD" }
    })
  },
  onHm: function (e) {

    this.setData({
      isShowPicker: true,
      mode: "hm",
      data: { type: "hm" }
    })
  }
});
