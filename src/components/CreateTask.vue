<template>
  <div class="newtask-container">
    <div class="card card-header">
      <input
        class="task-title"
        type="text"
        v-model="title"
        name="title"
        id="task-title"
        placeholder="Task"
        v-on:keyup.enter="handleInsertTask()"
        data-bs-toggle="collapse"
        data-bs-target="#task-description"
        aria-expanded="false"
        aria-controls="task-description"
      />
      <button @click="handleInsertTask()">Create task</button>
    </div>

    <div class="card text-bg-light mb-3">
      <div class="card-body collapse newtask-description" id="task-description">
        <h5 class="card-title">Description</h5>
        <input
          v-model="description"
          class="card-text newtask-description"
          placeholder="Add a description for your task"
          v-on:keyup.enter="handleInsertTask()"
        />
      </div>
    </div>
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
      description: "",
    };
  },
  methods: {
    ...mapActions(taskStore, ["insertTask"]),
    handleInsertTask() {
      try {
        this.insertTask(this.title, this.isComplete, this.description);
        this.title = "";
        this.isComplete = false;
        this.description = "";
      } catch (error) {
        alert("Error creating the task:", error.message);
      }
    },
  },
};
</script>

<style>
.newtask-container {
  display: flex;
  flex-flow: column;
  flex-direction: column;
  align-items: left;
  justify-content: space-around;
  margin: 0 auto;
  padding: 11px;
}
.newtask-description {
  width: 100%;
  padding: 20px;
}
.card-text {
  margin-top: 5px;
}
.task-title {
  box-sizing: border-box;
  padding-left: 10px;
}
</style>
