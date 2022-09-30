<template>
  <div class="main-dashboard bg">
    <!--<h2 class="dashboard-title">Your tasks</h2>-->
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
  padding-top: 25%;
  background-image: url("https://images.pexels.com/photos/6193017/pexels-photo-6193017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
}
.dashboard-title {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;
}

@media only screen and (min-width: 415px) {
  .main-dashboard {
    padding-top: 14%;
  }
}
</style>
