<template>
  <div class="main-dashboard">
    <h2 class="dashboard-title">Your tasks</h2>
    <ShowTasks />
    <CreateTask />
  </div>
</template>
<script>
import { mapActions } from "pinia";
import taskStore from "@/store/task";
import ShowTasks from "../components/ShowTasks.vue";
import CreateTask from "../components/CreateTask.vue";

export default {
  name: "DashboardView",
  components: {
    ShowTasks: ShowTasks,
    CreateTask: CreateTask,
  },
  methods: {
    ...mapActions(taskStore, ["fetchTasks"]),
  },
  created() {
    try {
      this.fetchTasks();
    } catch (error) {
      console.error("Error", error.message); // investigar ventana modal
    }
  },
};
</script>
<style>
.main-dashboard {
  background-color: #f1f1f1;
  height: calc(100vh - 80px);
  overflow: hidden;
}
.dashboard-title {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;
}
</style>
