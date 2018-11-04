<template>
  <div class="todo">
    <input placeholder="タスクを記入" v-model="message">
    <button @click="addTask()">{{ message }}をタスク化！！</button>
    <ul>
      <li v-for="item in todos" :key="item.id">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "todo",
  data: function() {
    return {
      message: "",
      todos: []
    };
  },
  created: function () {
    const allTask = localStorage.getItem('タスク一覧');
    const resArray = allTask.split(",");
    this.todos = resArray
  },
  methods: {
    addTask() {
      this.todos.push(this.message)
      localStorage.setItem('タスク一覧', this.todos);
      this.message = ''
    },
    completeTask(item) {      
    }
  }
};
</script>
