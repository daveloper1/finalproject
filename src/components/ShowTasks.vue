<template>
  <div class="tasks-container">
    <table class="table-container">
      <tr class="table-title">
        <th>Status</th>
        <th>ID</th>
        <th>Task</th>
        <th>Action</th>
      </tr>
      <tr class="card" v-for="task in tasks" :key="task.id">
        <td>
          <input
            @click="handleEditStatus(task.is_complete, task.id)"
            type="checkbox"
            v-model="task.is_complete"
          />
        </td>
        <!-- cuando se cambie el estado, crear metodo y pasarle la task para que cambie su estado -->
        <td>{{ task.id }}</td>
        <td class="task-title">
          <input
            v-model="task.title"
            @change="handleEditTitle(task.title, task.id)"
          />
        </td>
        <td><button @click="handleDeleteTask(task.id)">Delete task</button></td>
      </tr>
    </table>
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
  border: solid purple;
  height: 80vh;
}
.table-container {
  border: solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80%;
}
.card {
  height: 150px;
  border: solid blue;
}
</style>
