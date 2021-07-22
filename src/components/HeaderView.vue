<template>
  <header>
    <ul>
      <template v-if="isAuthentication">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/users">Users</router-link>
        </li>
        <li>
          <router-link to="/chats">Chat</router-link>
        </li>
      </template>

      <template v-if="!isAuthentication">
        <li>
          <router-link to="/login">Login</router-link>
        </li>
        <li>
          <router-link to="/register">Register</router-link>
        </li>
      </template>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'header-view',
  computed: {
    isAuthentication: function() {
      return this.$store.getters.idToken !== null;
    }
  }
}
</script>