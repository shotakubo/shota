<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Vueを使ってなんかやる"/>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
