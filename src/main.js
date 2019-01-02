// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../config/rem'
import store from './store'

import MintUI, {Indicator, Toast} from 'mint-ui'
import 'mint-ui/lib/style.css'
import {
  getHttp,
  postHttp
}
  from './config/api'
import axios from 'axios'
Vue.use(MintUI)

Vue.config.productionTip = false
Vue.prototype.$getHttp = getHttp
Vue.prototype.$postHttp = postHttp
Vue.prototype.$shopUrl = 'http://www.dayujk.cn/'
Vue.prototype.$headerImg = 'https://yjmall.oss-cn-qingdao.aliyuncs.com/'
Vue.prototype.$smallImg = '?x-oss-process=style/xx-compress'
Vue.prototype.$bigImg = '?x-oss-process=style/compress'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 引入store(Vuex框架进行传值)
  store,
  data: {
    eventHub: new Vue()
  },
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
