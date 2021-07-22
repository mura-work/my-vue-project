import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Users from './views/Users.vue';
import Chat from './components/ChatBoard/ChatBoard.vue'
import Login from './components/Login/login.vue'
import Register from './components/Register/Regist.vue'
import store from './store';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      component: Home,
      beforeEnter(to, from, next){
        if(store.getters.idToken){
          next();
        }else {
          next('/login');
        }
      }
    },
    {
      path: '/users',
      component: Users,
      beforeEnter(to, from, next){
        if(store.getters.idToken){
          next();
        }else {
          next('/login');
        }
      }
    },
    {
      path: '/chats',
      component: Chat,
      beforeEnter(to, from, next){
        if(store.getters.idToken){
          next();
        }else {
          next('/login');
        }
      }
    },
    {
      path: '/login',
      component: Login,
      beforeEnter(to, from, next){
        if(store.getters.idToken){
          next("/");
        }else {
          next();
        }
      }
    },
    {
      path: '/register',
      component: Register,
      beforeEnter(to, from, next){
        if(store.getters.idToken){
          next("/");
        }else {
          next();
        }
      }
    },
  ]
})