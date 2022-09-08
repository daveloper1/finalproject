<template>
  <div class="about">
    <h1>This is the dashboard page</h1>
  </div>
</template>
<script>
import { mapState, mapActions } from "pinia";
import taskStore from "@/store/task";
export default {
  name: "DashboardView",
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

