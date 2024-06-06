import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import "./assets/css/common.css"

Vue.config.productionTip = false
Vue.use(ElementUI);
import router from './router'
import "./router/permission"
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
