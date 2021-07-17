<template>
  <v-list three-line>
    <template v-for="comment in comments">
      <v-list-item
          :key="comment.name"
      >
        <v-list-item-avatar>
        </v-list-item-avatar>

        <v-list-item-content >
          <v-list-item-subtitle class="text--primary subheading">{{comment.fields.name.stringValue}}</v-list-item-subtitle>
          <v-list-item-subtitle>
            {{comment.fields.comment.stringValue}}
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
        </v-list-item-action>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
import axios from 'axios';

export default {
  name: 'chat-board',
  data: () => ({
    comments: [],
  }),
  created: function () {
    axios.get("/comments").then(response => {
      this.comments = response.data.documents;
    });
  }
}
</script>