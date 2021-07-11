<template>
  <div id="app">
    <CountList></CountList>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue
import CountList from './components/CountList/CountList.vue'

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    CountList,
  }
}
</script>

<style>

</style>
