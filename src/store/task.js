// /store/task.js
/* eslint-disable */
import { defineStore } from "pinia";
import supabase from "../supabase/index";
import useUserStore from "@/store/user";

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
    async insertTask(newTitle, newStatus, taskDescription) {
      const userStore = useUserStore();
      const { data, error } = await supabase.from("tasks").insert([
        {
          title: newTitle,
          user_id: userStore.user.id,
          is_complete: newStatus,
          description: taskDescription,
        },
      ]);
      if (error) throw error;
      this.tasks.push(data[0]);
    },
    async deleteTask(taskId) {
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .match({ id: taskId });
      if (error) throw error;
      this.tasks.splice(
        this.tasks.findIndex((task) => task.id === taskId),
        1
      );
    },
    async editStatus(newStatus, taskId) {
      const { data, error } = await supabase
        .from("tasks")
        .update({ is_complete: newStatus })
        .match({ id: taskId });
      if (error) throw error;
    },
    async editTitle(newTitle, taskId) {
      const { data, error } = await supabase
        .from("tasks")
        .update({ title: newTitle })
        .match({ id: taskId });
      if (error) throw error;
    },
  },
});
