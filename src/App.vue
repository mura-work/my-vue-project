<template>
  <div id="app" v-cloak>
    <CountList></CountList>
    <ListForm></ListForm>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue
import CountList from './components/CountList/CountList.vue'
import ListForm from './components/ListForm/ListForm.vue'

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    CountList,
    ListForm,
  }
}
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
