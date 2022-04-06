const Request = require('./request');

//header要携带token，所以，要从缓存里面拿到token


//路由的集中营
const route = {

    //登录
    login: '/user/login',
    //改密码
    changeUSerPWD: '/user/changePWD',
    //改信息
    changeUserMes: '/user/changeMessage',
    //获取信息
    getUserMes: '/user/getMessage',

    //获取站点列表
    getSiteList: '/site/getSiteList',
    //获取站点详情
    getSiteDetail: '/site/getSiteDetail',
    //更新站点状态
    updateSiteStatus: '/site/changeSiteStatus',

    //获取个人工单列表
    getWoList: '/wo/getPersonWOs',
    //获取工单详情
    getWoDetail: '/wo/getWO/1',
    //增加工单
    addWo: '/wo/addwo',
    //更新工单状态/提交工单
    changeWo: 'wo/changeWO',

    //获取巡检列表
    getInsList: '/inspect/getPersonInsList',
    //获取巡检详情
    getInsDetail: '/innspect/getInspect',

    //获取设备列表（根据站点）
    getDevList: '/device/getDevList',
    //获取设备详情（根据设备id）
    getDevDetail: '/device/getDevDetail',//这个还没有写好接口

    //下面这个感觉没有效率，再看看
    // //用户模块
    // user: {
    //     base: '/user',
    //     login: '/login',

    // },
    // //站点模块
    // site:{},
    // //工单模块
    // wo:{},
    // //巡检模块
    // ins:{},
    // //设备模块
    // dev:{}
};


//option 需要有route、data、method、responseType（超时加上也可以）

const api = {

    //登录请求
    loginAPI(user_tel, PWD) {
        return Request({
            //option写在这里
            route: route.login,
            method: 'POST',
            data: {
                "tel": user_tel,
                "password": PWD
            }
        })
    },

    //获取用户信息
    userMesAPI() {
        return Request({
            route: route.getUserMes,
            method: 'GET',
        })
    },

    //修改用户信息
    // changeUserMes(user_tel, user_name, user_wx, user_sex) {
    //tel到时候从token里面解析出来就好了
    changeUserMesAPI(user_name, user_wx, user_sex) {
        return Request({
            route: route.changeUserMes,
            method: 'POST',
            data: {
                // "tel": user_tel,
                "name": user_name,
                "wx": user_wx,
                "sex": user_sex
            }
        })
    },

    //修改用户密码
    changePWDAPI(oldPWD, newPWD) {
        return Request({
            route: route.changeUSerPWD,
            method: 'POST',
            data: {
                // "tel": "1234567891234",
                "password": oldPWD,
                "newPWD": newPWD
            }
        })
    },

    //工单列表请求
    woListAPI() {
        return Request({
            route: route.getWoList,
            method: 'GET',
        })
    },

    //工单详情请求
    woDetailAPI(wo_id) {
        return Request({
            route: route.getWoDetail.concat(wo_id),
            method: 'GET',
        })
    },

    //工单提交请求
    addWoAPI(name, level, des, site_id) {
        return Request({
            route: route.addWo,
            method: 'POST',
            data: {
                "name": name,
                "level": level,
                "description": des,
                "site_id": site_id
            }
        })
    },

    //工单处理请求
    changeWoAPI(wo_id, mes) {
        return Request({
            route: route.changeWo,
            method: 'POST',
            data: {
                "id": wo_id,
                "message": mes
            }
        })
    },

    //巡检列表请求
    insListAPI() {
        return Request({
            route: route.getInsList,
            method: 'GET',
        })
    },

    //巡检详情请求
    insDetailAPI(Ins_id) {
        return Request({
            route: route.getInsDetail.concat(Ins_id),
            method: 'GET',
        })
    },

    //巡检处理请求
    //还没有这个接口

    //站点列表请求
    siteListAPI() {
        return Request({
            route: route.getSiteList,
            method:'GET',
        })
    },

    //站点详情请求
    siteDetailAPI(site_id) {
        return Request({
            route: route.getSiteDetail.concat(site_id),
            method: 'GET',
        })
    },
    //站点状态更新请求
    updateSiteStatusAPI(site_id, status) {
        return Request({
            route: route.updateSiteStatus,
            method: 'POST',
            data:{
                "id": site_id,
                "status": status
            }
        })
    },

    //站点设备请求
    devListAPI(site_id) {
        return Request({
            route:route.getDevList.concat(site_id),
            method:"GET"
        })
    },

    //获取设备详情
    //好像暂时没有这个需求，先不写了
}


//使用方式
// api.login(userId, type)
// .then(res => {
//       this.setData({
//           bannerList:res.infoObject
//     });
// });


module.exports = api;
