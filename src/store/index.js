import Vue from 'vue'
import Vuex from 'vuex'
import loginModule from "./modules/loginModule"
import contentInfoModule from "./modules/contentInfoModule"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  modules:{
    loginModule,
    contentInfoModule
  }
})
