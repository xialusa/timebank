//app.js
App({
  globalData: {
    appid: '',//appid需自己提供，此处的appid我随机编写  
    secret: '',//secret需自己提供，此处的secret我随机编写 
    encryptedData: '', //自定义
    iv:'',
    userInfo:{},
    //基本资料
    basicInfo:{
      casIndex: 0,
      casIndex_x: 0,
      casIndex_y: 0,
      casIndex_z: 0,
      basic_flag: false,//基本资料完善与否
    },
    //服务信息
    serviceInfo:{
      casIndex_x:0,
      service_flag: false,//服务信息完善与否
    },
     //身份证信息
    identityInfo: {
      userFullName: "请填写认证姓名",
      userIdCardCode: "请填写证件号码",
      identity_flag: false,//身份证信息完善与否
    },
    //证书信息
    certificateInfo:{
      certificateName: "请填写证书名称",
      casIndex: 0,
      certificatey_flag: false,//证书信息完善与否
    },
    api: 'https://well.fireman.ren/'
  },

  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    //console.log(logs);
 
  }
})