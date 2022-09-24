<template>
  <div class="main-dashboard">
    <h2 class="dashboard-title">Welcome</h2>
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
  border: solid;
}
.dashboard-title {
  text-align: center;
}
</style>
