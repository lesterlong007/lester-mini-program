// pages/sujun/sujun.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    articleList: [{
      id: 1,
      name: '清平乐·重遇何期',
      url: 'https://mp.weixin.qq.com/s/EO-IavTDA1MGap-cPn-xnw'
    }]
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
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
          selected: 1
      });
      this.setData({
        title: this.getTabBar().data.list[1].text
      });
    }
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

  },

  goPublicArticle (e) {
    const { url } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/h5-page/h5-page?url=${url}`,
    })
}
})