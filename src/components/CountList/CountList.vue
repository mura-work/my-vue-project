<template>
  <div>
    <h2>CountList</h2>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>detail</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="list in apiList" :key="list.id">
          <th>{{list.id}}</th>
          <th>{{list.title}}</th>
          <th>{{list.detail}}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CountList',
  data: function(){
    return {
      apiList: []
    }
  },
  props: {
    count: {
      type: String,
      default: '5',
    },
    list: {
      type: String,
      default: 'aaa',
    }
  },
  created: function() {
      // alert("aaa")
      axios.get("http://localhost:3000/api/v1/contents")
        .then(response => {
          this.apiList = response.data
        })
  }
}
</script>

<style scoped>

</style>