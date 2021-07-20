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
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    register: function() {
      this.$store.dispatch('register', {
        email: this.email,
        password: this.password,
      })
      this.email = ''
      this.password = ''
    }
  }
}
</script>