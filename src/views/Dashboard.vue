<template>
  <div class="about">
    <h1>This is the dashboard page</h1>
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
      console.error("Error de tareas>>", error); // investigar ventana modal
    }
  },
};
</script>
