<template>
  <div class="memo">
    <section>
      <h2>メモ帳</h2>
      <TextArea name="メモ" cols="100" rows="30"/>
    </section>
  </div>
</template>

<script>
import TextArea from "@/components/TextArea.vue";

export default {
  /* eslint-disable */
  name: "memo",
  components: {
    TextArea
  }
};
</script>
