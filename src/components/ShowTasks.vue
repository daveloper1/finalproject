<template>
  <div class="tasks-container">
    <div class="card text-bg-light mb-3" v-for="task in tasks" :key="task.id">
      <div class="card-header">
        <input
          type="checkbox"
          class="btn-check"
          :id="task.id"
          @click="handleEditStatus(task.is_complete, task.id)"
          autocomplete="off"
          v-model="task.is_complete"
        />
        <label
          v-if="task.is_complete"
          class="btn btn-outline-primary"
          :for="task.id"
          >DONE!</label
        >
        <label
          v-else
          class="btn btn-outline-primary"
          :class="{ 'btn-pending': !task.is_complete }"
          :for="task.id"
          >Pending</label
        ><br />
        <input
          class="task-title"
          v-model="task.title"
          @change="handleEditTitle(task.title, task.id)"
          data-bs-toggle="collapse"
          data-bs-target="#taskId"
          aria-expanded="false"
          aria-controls="taskId"
        />
        <button
          type="button"
          class="btn-close"
          aria-label="Close"
          @click="handleDeleteTask(task.id)"
        ></button>
      </div>
      <div class="card-body collapse" id="taskId">
        <h5 class="card-title">Task description</h5>
        <p class="card-text">
          {{ task.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import taskStore from "@/store/task";

export default {
  name: "ShowTasks",
  computed: {
    ...mapState(taskStore, ["tasks"]),
  },
  methods: {
    ...mapActions(taskStore, ["deleteTask", "editStatus", "editTitle"]),

    handleDeleteTask(taskId) {
      try {
        this.deleteTask(taskId);
      } catch (error) {
        alert("Error deleting the task:", error.message);
      }
    },

    handleEditStatus(status, taskID) {
      try {
        this.editStatus(!status, taskID);
      } catch (error) {
        alert("Error editing the task status: ", error.message);
      }
    },
    handleEditTitle(newTitle, taskID) {
      try {
        this.editTitle(newTitle, taskID);
      } catch (error) {
        alert("Error editing the task title:", error.message);
      }
    },
  },
};
</script>

<style>
.tasks-container {
  height: calc(100% - 20rem);
  overflow-y: scroll;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
}
.card {
  width: 100%;
  max-width: 23rem;
}
.btn-pending {
  background-color: rgb(118 118 118 / 60%);
  color: white;
}
.card-header {
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.btn-pending,
.btn-outline-primary {
  width: 85px;
}

@media only screen and (max-width: 844px) {
}
</style>
