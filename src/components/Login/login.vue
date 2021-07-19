<template>
  <div>
    <h2>ログイン</h2>
    <label>名前</label>
    <input type="text" id="email" v-model="email" /><br>

    <label>パスワード</label>
    <textarea id="password" v-model="password"></textarea><br>

    <button @click="login">送信</button>
  </div>
</template>

<script>
import axios from '../../axios-auth';

export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login: function() {
      const URL = '/accounts:signInWithPassword?key=' + process.env.VUE_APP_FIREBASE_API_KEY
      axios.post(URL, {
        email: this.email,
        password: this.password,
        returnSecureToken: true,
      }).then(response => {
        console.log(response);
      });
      this.email = ''
      this.password = ''
    }
  }
}
</script>