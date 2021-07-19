import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Users from './views/Users.vue';
import Chat from './components/ChatBoard/ChatBoard.vue'
import Login from './components/Login/login.vue'
import Register from './components/Register/Regist.vue'

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {path: '/', component: Home},
    {path: '/users', component: Users},
    {path: '/chats', component: Chat},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
  ]
})