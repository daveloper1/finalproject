<template>
  <div class="tasks-container">
    <table class="table-container">
      <!--<tr class="table-title">
        <th>Status</th>
        <th>ID</th>
        <th>Task</th>
        <th>Action</th>
      </tr>-->
      <tr class="card" v-for="task in tasks" :key="task.id">
        <td>
          <input
            @click="handleEditStatus(task.is_complete, task.id)"
            type="checkbox"
            v-model="task.is_complete"
          />
        </td>
        <td class="task-title">
          <input
            v-model="task.title"
            @change="handleEditTitle(task.title, task.id)"
          />
        </td>
        <td><button @click="handleDeleteTask(task.id)">Delete</button></td>
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
  height: 700px;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
}
.table-container {
  border: solid rgb(179, 179, 179);
}
.card {
  height: 70px;
  margin-top: 20px;
  width: 270px;
  display: flex;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #fff6e6;
  border-radius: 5px;
}
</style>
