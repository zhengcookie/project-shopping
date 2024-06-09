import Vue from 'vue'
import App from './App.vue'
// import "./registerServiceWorker"
import router from "./router"
import store from './store'
import "./assets/css/common.css"
// 全部引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 局部引入
// import { Button,Row,DatePicker } from 'element-ui'
// Vue.component(Button.name, Button);
// Vue.component(Row.name, Row);
// Vue.component(DatePicker.name, DatePicker);
Vue.config.productionTip = false

import "./router/permission"
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
