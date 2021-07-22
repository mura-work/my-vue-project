import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios' //追記
import VueAxios from 'vue-axios' //追記
import vuetify from './plugins/vuetify'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueAxios, axios) //追記
axios.defaults.baseURL =
"https://firestore.googleapis.com/v1/projects/" +
process.env.VUE_APP_FIREBASE_DB + "/databases/(default)/documents"

store.dispatch('autoLogin');

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
