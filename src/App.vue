<template>
  <div>
    <router-link active-class="link--active" exact to="/">Home</router-link>
    <router-link active-class="link--active" exact to="/users">Users</router-link>
    <router-view></router-view>
  </div>
</template>

<style>
.link--active {
  font-size: 20px;
}
</style>