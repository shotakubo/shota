<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Vueを使ってなんかやる"/>

    <div class="message">
      {{ message }}
    </div>
    <input type="button" value="名前は" @click="update()">

    <div>
      <input type="button" value="ユーザ取得" @click="getUsers()">
      <div v-for="user in users" :key="user.id">
        ID: {{ user.id }} 名前: {{ user.name }} 年齢: {{ user.age }}
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState, mapMutations, mapActions } from "vuex";
import { MESSAGE_UPDATE } from "../store/types";
export default {
  name: "home",
  components: {
    HelloWorld
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
      this.MESSAGE_UPDATE(); // mutationをコールします
    }
  }
};
</script>
