<template>
  <div class="about">
    <h1>This is the dashboard page</h1>
  </div>
</template>
<script>
import { mapState, mapActions } from "pinia";
import taskStore from "@/store/task";
export default {
  name: "Dashboard",
  computed: {
    ...mapState(taskStore, ["task"]),
  },
  methods: {
    ...mapActions(taskStore, ["fetchTasks"]),
    createTask() {
      const { data } = await supabase
        .from("cities")
        .insert([{ name: "The Shire", country_id: 554 }]);
    },
  },
  created() {
    this.fetchTasks();
  },
};
</script>