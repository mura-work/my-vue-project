<template>
  <div>
    <h2>登録</h2>
    <label>名前</label>
    <input type="text" id="email" v-model="email" /><br>

    <label>パスワード</label>
    <textarea id="password" v-model="password"></textarea><br>

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

    }
  }
}
</script>