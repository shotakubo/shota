<template>
  <div class="memo">
    <section>
      <h2>メモ帳</h2>
      <p>{{test.length}} 文字(改行も一文字)</p>
      <textarea name="" cols="100" rows="30" v-model="test"></textarea>
    </section>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  name: "memo",
  data: function() {
    return {
      test: ""
    };
  },
  methods: {
  }
};
</script>
