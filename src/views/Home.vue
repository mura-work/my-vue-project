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
    <h2>一覧</h2>
    <div v-for="post in posts" :key="post.name">
      <div>名前：{{post.fields.name.stringValue}}</div>
      <div>コメント：{{post.fields.comment.stringValue}}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const FIREBASE_DB_URL = "https://firestore.googleapis.com/v1/projects/" +
        process.env.VUE_APP_FIREBASE_DB + "/databases/(default)/documents/comments"

export default {
  data() {
    return {
      name: "",
      comment: "",
      posts: [],
    }
  },
  created: function () {
    axios.get(FIREBASE_DB_URL).then(response => {
      this.posts = response.data.documents;
    });
  },
  methods: {
    toUsers() {
      this.$router.push('users');
    },
    createComment() {
      // const API_KEY = process.env.VUE_APP_FIREBASE_DB
      axios.post(FIREBASE_DB_URL,
      {
        fields: {
          name: {
            stringValue: this.name
          },
          comment: {
            stringValue: this.comment
          }
        }
      });
      this.name = '';
      this.comment = '';
    }
  }
}
</script>