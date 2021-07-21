<template>
  <div>
    <h2>ログイン</h2>
    <label>名前</label>
    <input type="text" id="email" v-model="email" /><br>

    <label>パスワード</label>
    <input type="password" id="password" v-model="password" /><br>

    <button @click="login">送信</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login: function() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
      })
      this.email = ''
      this.password = ''
    }
  }
}
</script>