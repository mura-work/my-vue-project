import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios' //追記
import VueAxios from 'vue-axios' //追記
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.use(VueAxios, axios) //追記
axios.defaults.baseURL =
"https://firestore.googleapis.com/v1/projects/" +
process.env.VUE_APP_FIREBASE_DB + "/databases/(default)/documents"

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
