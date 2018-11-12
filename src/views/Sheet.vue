<template>
  <div class="sheet">
    <div>
      <input type="button" value="取得" @click="getSheetList()">
      <div v-for="row in sheetList" :key="row.user_id">
        ID: {{ row }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "sheet",
  computed: {
    ...mapState({
      sheetList: "sheetList"
    })
  },
  methods: {
    ...mapActions({
      getSheetList: "getSheetList"
    })
  }
};
</script>
