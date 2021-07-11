<template>
  <div>
    <ul>
      <li>countList</li>
      <li>{{count}}</li>
      <li>{{list}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'CountList',
    props: {
      count: {
        type: String,
        default: '5',
      },
      list: {
        type: String,
        default: 'aaa',
      }
    }
  }
</script>

<style scoped>

</style>