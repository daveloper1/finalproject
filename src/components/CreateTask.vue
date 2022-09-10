<template>
  <div>
    <input type="text" name="title" id="task-title" placeholder="Task" />
    <input type="checkbox" name="status" id="task-status" />

    <button @click="handleNewTask">Create task</button>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import taskStore from "@/store/task";
import userStore from "@/store/user";

export default {
  name: "CreateTask",
  computed: {
    ...mapState(userStore, ["user"]),
  },
  methods: {
    ...mapActions(taskStore, ["insertTask"]),
    handleNewTask() {
      const taskData = {
        title: document.getElementById("task-title").value,
        userId: this.user.id,
        iscomplete: document.getElementById("task-status").checked,
      };
      this.insertTask(taskData.title, taskData.userId, taskData.iscomplete);
    },
  },
};
</script>

<style>
</style>