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
import { mapState, mapMutations, mapActions } from "vuex";
import { MESSAGE_UPDATE } from "../store/types";
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
