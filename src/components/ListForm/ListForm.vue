<template>
  <div>
    <form @submit.prevent="createContents">
      <label>title</label>
      <input type="text" v-model="title" /><br>
      <label>detail</label>
      <input type="text" v-model="detail" />
      <button>投稿</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'list-form',
  data: function() {
    return {
      title: "",
      detail: "",
    }
  },
  methods: {
    createContents(){
      let listForm = {
        content: {
          title: this.title,
          detail: this.detail,
        }
      }
      axios.post("http://localhost:3000/api/v1/contents", listForm)
        .then(response => {
        })
        // this.getContents()
        window.location.href('/')
    },
    getContents() {
      axios.get("http://localhost:3000/api/v1/contents")
        .then(response => {
          this.apiList = response.data
        })
    }
  }
}
</script>