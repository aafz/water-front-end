// const app = getApp();

Component({

    data: {
      selected: 0,
      color: "#c1c1c1",
      selectedColor: "#002535",
      list: [{
        pagePath: "../index/index",
        iconPath: "../static/icon/tabBar_icon/index.png",
        selectedIconPath: "../static/icon/tabBar_icon/index-color.png",
        text: "首页"
      }, {
        pagePath: "../workbench/workbench",
        text: "工作台",
        iconPath: "../static/icon/tabBar_icon/workbrench.png",
        selectedIconPath: "../static/icon/tabBar_icon/workbrench-color.png"
      },
      {
        pagePath: "../my/my",
        text: "我的",
        iconPath: "../static/icon/tabBar_icon/my.png",
        selectedIconPath: "../static/icon/tabBar_icon/my-color.png"
      }
    ]
    },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path;

      wx.switchTab({url});
      // this.setData({
      //   selected: data.index
      // })   //注释掉好像也没有影响啊
    }
  }
})
