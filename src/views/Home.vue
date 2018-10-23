<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Vueを使ってなんかやる"/>

    <div class="message">
      {{ message }}
    </div>
    <input type="button" value="名前は" @click="update()">
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState, mapMutations } from "vuex";
import { MESSAGE_UPDATE } from "../store/types";
export default {
  name: "home",
  components: {
    HelloWorld
  },
  computed: {
    ...mapState({
      message: 'message'
    })
  },
  methods: {
    ...mapMutations({
      MESSAGE_UPDATE
    }),
    update() {
      this.MESSAGE_UPDATE(); // mutationをコールします
    }
  }
};
</script>
