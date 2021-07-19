<template>
  <div>
    <h2>登録</h2>
    <label>名前</label>
    <input type="text" id="email" v-model="email" /><br>

    <label>パスワード</label>
    <input type="password" id="password" v-model="password" /><br>

    <button @click="register">登録</button>
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
    register: function() {
      const URL = '/accounts:signUp?key=' + process.env.VUE_APP_FIREBASE_API_KEY
      axios.post(URL, {
        email: this.email,
        password: this.password,
        returnSecureToken: true,
      }).then(response => {
        console.log(response);
      });
    }
  }
}
</script>