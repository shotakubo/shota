<template>
  <div class="about">
    <h1>なんか開発していく</h1>
    <section>
      <h2>File API</h2>
      <input type="file" @change="onFileChange">
      <ul v-if="image">
        <li>{{name}}</li>
        <li>{{size}}</li>
        <li>{{type}}</li>
        <li><img :src="image" /></li>
        <li><button @click="removeImage">Remove image</button></li>
      </ul>
    </section>

    <section>
      <h2 class="message">{{ message }}</h2>
      <input type="button" value="クリック" @click="update()">

      <div>
        <input type="button" value="ユーザ取得" @click="getUsers()">
        <div v-for="user in users" :key="user.id">
          ID: {{ user.id }} 名前: {{ user.name }} 年齢: {{ user.age }}
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { MESSAGE_UPDATE } from "../store/types";
export default {
  data: function() {
    return {
      image: "",
      name: "",
      size: "",
      type: ""
    };
  },
  computed: {
    ...mapState({
      message: "message",
      users: "users"
    })
  },
  methods: {
    ...mapMutations({
      MESSAGE_UPDATE
    }),
    ...mapActions({
      getUsers: "getUsers"
    }),
    update() {
      this.MESSAGE_UPDATE();
    },
    onFileChange: function(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.name = files[0].name;
      this.size = files[0].size;
      this.type = files[0].type;
      this.createImage(files[0]);
    },
    createImage(file) {
      const image = new Image();
      const reader = new FileReader();
      const vm = this;
      reader.onload = function(e) {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function(e) {
      this.image = "";
    }
  }
}
</script>
