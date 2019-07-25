### 仿ios时间选择器（包括年月日星期 时分）

引入组件`datetime-picker`,下面是时间选择器应用
```
 index.js

 data:{
    dataStatus: false,//是否显示日期选择控件
    remindTime:null,
    startYear:new Date().getFullYear(),//开始年
    endYear:2050,//结束年
 }

 //显示日期选择
  showDateModule: function () {
    this.setData({
      dataStatus: true,
    })
  },
  //关闭日期选择
  closeDateModule: function (e) {
    let {remindTime} = this.data
    if (e.detail.value){
      remindTime = e.detail.value
    }
    this.setData({
      dataStatus: false,
      remindTime
    })
  },
 
 
 index.html
  <datetime-picker 
    dataStatus='{{dataStatus}}' 
    dateValue="{{parmas.remindTime}}" 
    startYear="{{startYear}}"
    endYear="{{endYear}}"
    bindclose='closeDateModule' ></datetime-picker>

 ```

 `dateTimePicker.js`时间处理代码
 `date.png`样式图片

 - [参考样式](http://www.jq22.com/yanshi6673)
 - [微信小程序获取日期天数带星期](https://www.jianshu.com/p/33736c93d716)
 - [微信小程序实现简单的日历](https://github.com/newteo/team-blog-repo/issues/91)

 **总结**

  目前做到了限制年的选择: ` startYear:2019,//开始年  endYear:2050,//结束年`
  需改进的地方：能够限制年月日`2019-01-01`以这种格式显示 
  如果各位同仁有好的意见，可以留言哈～



 