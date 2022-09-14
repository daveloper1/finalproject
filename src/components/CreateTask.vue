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

    <button @click="insertTask(this.title, this.isComplete)">
      Create task
    </button>
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
  },
};
</script>

<style></style>
