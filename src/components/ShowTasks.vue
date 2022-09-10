<template>
  <div>
    <table class="table-container">
      <tr class="table-title">
        <th>Task</th>
        <th>Status</th>
        <th><button @click="handleLogin">Create task</button></th>
      </tr>
      <tr v-for="task in tasks" :key="task.id">
        <td><input type="checkbox" /></td>
        <!-- cuando se cambie el estado, crear metodo y pasarle la task para que cambie su estado -->
        <td>{{ task.title }}</td>
        <td v-show="task.is_complete">Done</td>
        <td v-show="!task.is_complete">To do</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState } from "pinia";
import taskStore from "@/store/task";

export default {
  name: "ShowTasks",
  computed: {
    ...mapState(taskStore, ["tasks"]),
  },
  watch: {
    tasks(state) {
      console.log("satateee:", state);
    },
  },
};
</script>

<style>
</style>