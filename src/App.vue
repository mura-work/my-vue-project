<template>
  <div id="app">
    <header-view></header-view>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderView from './components/HeaderView.vue'

export default {

  components: {
    HeaderView,
  },

  data: () => ({
    //
  }),
};
</script>
