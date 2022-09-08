<template>
  <div class="about">
    <h1>This is the dashboard page</h1>
    <Logout />
  </div>
</template>
<script>
import { mapState, mapActions } from "pinia";
import taskStore from "@/store/task";
import Logout from   "../components/Logout.vue"

export default {
  name: "DashboardView",
  components: {
    Logout: Logout,
  },
  computed: {
    ...mapState(taskStore, ["tasks"]),
  },
  methods: {
    ...mapActions(taskStore, ["fetchTasks"]),
  },
  created() {
    this.fetchTasks();
  },
};
</script>

