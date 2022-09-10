// /store/task.js

import { defineStore } from "pinia";
import supabase from "../supabase/index";

export default defineStore("tasks", {
  state: () => ({
    tasks: [],
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks, error } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      if (error) throw error;
      this.tasks = tasks;
    },
    async insertTask(newTitle, userId, newStatus) {
      const { data, error } = await supabase
        .from("tasks")
        .insert([{ title: newTitle, user_id: userId, is_complete: newStatus }]);
      if (error) throw error;
    },
  },
});
