<template>
  <div class="main-dashboard">
    <h2 class="dashboard-title">Welcome ALV</h2>
    <Logout />
    <ShowTasks />
    <CreateTask />
  </div>
</template>
<script>
import { mapActions } from "pinia";
import taskStore from "@/store/task";
import Logout from "../components/Logout.vue";
import ShowTasks from "../components/ShowTasks.vue";
import CreateTask from "../components/CreateTask.vue";

export default {
  name: "DashboardView",
  components: {
    Logout: Logout,
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
  background-color: beige;
  border: solid;
}
.dashboard-title {
  text-align: center;
}
</style>
