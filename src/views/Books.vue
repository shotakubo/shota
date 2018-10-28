<template>
  <div class="books">
    <div>
      <input type="button" value="取得" @click="getBooks()">
      <div v-for="row in books" :key="row.id">
        <div v-for="item in row.items" :key="item.id">
          作家/絵: {{item.volumeInfo.authors}}
          タイトル: {{item.volumeInfo.title}}
          発売日: {{item.volumeInfo.publishedDate}}
          あらすじ: {{item.volumeInfo.description}}      
          <ul>
            <li v-for="url in item.volumeInfo.imageLinks" :key="url.id">
              <img :src=url :alt=item.volumeInfo.title>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { MESSAGE_UPDATE } from "../store/types";
export default {
  name: "books",
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
