<template>
  <div class="books">
    <div>
      <tabs>
        <tab v-for="item in writerList" :key="item.id" :name="item">
          <input type="button" value="取得" @click="getBooks()">
          <div v-for="row in books" :key="row.id">
            <ul v-for="item in row.items" :key="item.id">
              <li v-for="url in item.volumeInfo.imageLinks" :key="url">
                <img :src=url :alt=item.volumeInfo.title>
              </li>
              <li>作家/絵: {{item.volumeInfo.authors}}</li>
              <li>タイトル: {{item.volumeInfo.title}}</li>
              <li>発売日: {{item.volumeInfo.publishedDate}}</li>
              <li>あらすじ: {{item.volumeInfo.description}}</li>
            </ul>
          </div>
        </tab>
      </tabs>
    </div>
  </div>
</template>

<script>
//in your app.js or similar file
import Vue from 'vue';
import { mapState, mapMutations, mapActions } from "vuex";
import { MESSAGE_UPDATE } from "../store/types";
import { Tabs, Tab } from 'vue-tabs-component';

Vue.component('tabs', Tabs);
Vue.component('tab', Tab);
export default {
  name: "books",
    data: function() {
    return {
      writerList: ['入間人間']
    };
  },
  components: {
  },
  computed: {
    ...mapState({
      books: "books"
    })
  },
  methods: {
    ...mapActions({
      getBooks: "getBooks"
    })
  }
};
</script>
