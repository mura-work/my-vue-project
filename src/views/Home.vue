<template>
  <div>
    <button @click="toUsers">Usersのページに行く</button>
    <h1>Home</h1>
    <h3>投稿</h3>
    <label for="name">名前</label>
    <input type="text" id="name" v-model="name"><br>
    <label for="comment">コメント</label>
    <textarea id="comment" v-model="comment"></textarea>
    <button @click="createComment">送信</button>
    <div>一覧</div>
    <div></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: "",
      comment: "",
    }
  },
  methods: {
    toUsers() {
      this.$router.push('users');
    },
    createComment() {
      const API_KEY = process.env.VUE_APP_FIREBASE_DB
      const url = "https://firestore.googleapis.com/v1/projects/" + API_KEY + "/databases/(default)/documents/comments"
      axios.post(url,
      {
        fields: {
          name: {
            stringValue: this.name
          },
          comment: {
            stringValue: this.comment
          }
        }
      }).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      });
      this.name = '';
      this.comment = '';
    }
  }
}
</script>