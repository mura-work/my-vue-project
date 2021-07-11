<template>
  <div>
    <ul>
      <li>countList</li>
      <li>{{count}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'count-list',
    props: {
      count: {
        type: String,
        default: '',
      },
    }
  }
</script>

<style>

</style>