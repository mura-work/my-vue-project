<template>
  <header>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/users">Users</router-link>
      </li>
      <li>
        <router-link to="/chats">Chat</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'header-view',
}
</script>