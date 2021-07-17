<template>
  <div>
    <!--コメント入力フォーム-->
    <v-container>
      <h2>コメント追加</h2>
      <v-form ref="form">
        <v-text-field
            v-model="inputName"
            label="名前"
            required
        ></v-text-field>
        <v-text-field
            v-model="inputComment"
            label="コメント"
            required
        ></v-text-field>
        <v-btn
            @click="addComment"
        >
          投稿する
        </v-btn>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'chat-form',
  data: () => ({
    inputName: "",
    inputComment: "",
    valid: true,
    commentRules: [
        v => !!v || 'コメントは必須項目です',
      ],
      // Formダイアログの表示可否
      displayForm: false,
  }),
  methods: {
    addComment: function() {
      const postTime = new Date();
      axios.post("/comments",
      {
        fields: {
          name: {
            stringValue: this.inputName,
          },
          comment: {
            stringValue: this.inputComment,
          },
          created: {
            timestampValue: postTime,
          }
        }
      });
      this.inputName = "";
      this.inputComment = "";
    },
    showCreateForm: function() {
      this.displayForm = true
    }
  }
}
</script>