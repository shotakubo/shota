<template>
  <div class="testarea">
    <textarea
      :name="name"
      :cols="cols"
      :rows="rows">
    </textarea>
  </div>
</template>

<script>
export default {
  name: "TextArea",
  props: {
    name: String,
    cols: String,
    rows: String
  }
};
</script>

<style scoped lang="scss">
</style>
