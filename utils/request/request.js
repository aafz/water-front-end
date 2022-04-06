// const app = getApp();
// const baseURL = app.globalData.baseURL;

const { baseURL,timeout } = require('./env');
const token = wx.getStorageSync('token');


// import Toast from '@vant/weapp/dist/toast/toast';
// Toast.loading({
//   message: '加载中...',
//   forbidClick: true,
// });

//所以这个option对象要传入的格式是
//option 需要有route、data、method、responseType（超时加上也可以）

const Request = async (options) => {
  return new Promise((resolve, reject) => {
    // Toast.loading({
    //   message: '加载中...',
    //   forbidClick: true,
    // });
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: baseURL + options.route || '',
      data: options.data || {},
      method: options.method || 'POST',     //默认为POST
      header: {
        "content-type": "application/x-www-form-urlencoded",
        "token":token||''
      },
      responseType: options.responseType || "",
      timeout: options.timeout || timeout,

      success: (result) => {
        wx.hideLoading();
        if (result.statusCode === 200) {
          if (res.data.status === "y") { //这个status参数可能要改
            console.log(result);
            resolve(result.data); //这个可能也要根据情况改改   
          } else {
              console.log(result.data.status);
              console.log('request.js has error');
            // wx.showToast({
            //   title: '请求成功',
            //   icon: 'success',
            //   duration: 2000
            // });
            //这个东西要注意关闭
          }
        } else {
            console.log(result.statusCode);
            console.log('request.js has error');
          // FN.Toast(res.errMsg);
          // wx.showToast({
          //   title: '请求错误',
          //   icon: 'fail',
          //   duration: errMsg
          // });
        }
      },
      fail: (res) => {
        console.log('request fail');
        console.log('request.js has error');

        // wx.showToast({
        //   title: '网络开小差了',
        //   icon: 'fail',
        //   duration: 2000
        // });
        reject(res);
      }
      // ,complete: (res) => {},
    });
  })
};

module.exports = Request;