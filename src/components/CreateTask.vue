<template>
  <div class="newtask-container center">
    <div class="card card-header newtask-card">
      <input
        class="task-title"
        type="text"
        v-model="title"
        name="title"
        placeholder="New task title"
        v-on:keyup.enter="handleInsertTask()"
      />
      <button class="btn btn-primary" @click="handleInsertTask()">
        Create task
      </button>
    </div>

    <div class="card text-bg-light mb-3">
      <div class="card-body newtask-description">
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
  margin: 0 auto;
  margin-top: 2%;
  display: flex;
  flex-flow: column;
  flex-direction: column;
  align-items: left;
  justify-content: space-around;
  padding: 11px;
  border-radius: 5px;
  border-top-style: double;
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
@media only screen and (min-width: 415px) {
  .newtask-container {
    width: 95%;
    margin: 0 auto;
    margin-top: 2%;
  }
}
</style>
