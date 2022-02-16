import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import './mock/mockServer'  // 加载mockServer即可
import VueLazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'
import './filters'  // 加载过滤器

// 注册全局组件
Vue.component(Button.name, Button)
Vue.use(VueLazyload,{ // 内部自定义一个指令lazy
  loading
})

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
