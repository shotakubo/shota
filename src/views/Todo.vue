<template>
  <div class="todo">
    <input placeholder="タスクを記入" v-model="message">
    <button @click="addTask()" >{{ message }}をタスク化！！</button>
    <ul onload="allTask()">
      <li v-for="item in todos" v-bind:key="item.length">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  /* eslint-disable */
  name: "todo",
  data: function() {
    return {
      message: "",
      todos: []
    };
  },
  methods: {
    addTask() {
      this.todos.push(this.message)
      localStorage.setItem('タスク一覧', this.todos);
      this.message = ''
    }
  }
};
</script>
