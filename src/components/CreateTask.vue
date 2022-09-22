<template>
  <div>
    <input
      type="text"
      v-model="title"
      name="title"
      id="task-title"
      placeholder="Task"
    />
    <input
      type="checkbox"
      v-model="isComplete"
      name="status"
      id="task-status"
    />

    <button @click="handleInsertTask()">Create task</button>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import taskStore from "@/store/task";

export default {
  name: "CreateTask",
  data() {
    return {
      title: "",
      isComplete: false,
    };
  },
  methods: {
    ...mapActions(taskStore, ["insertTask"]),
    handleInsertTask() {
      try {
        this.insertTask(this.title, this.isComplete);
        this.title = "";
        this.isComplete = false;
      } catch (error) {
        alert("Error creating the task:", error.message);
      }
    },
  },
};
</script>

<style></style>
