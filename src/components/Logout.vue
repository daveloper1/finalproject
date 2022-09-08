<template>
  <div>
    <button @click="handleLogout">Logout</button>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import userStore from "@/store/user";

export default {
  name: "Logout",
  methods: {
    ...mapActions(userStore, ["signOut"]),
    handleLogout() {
      this.signOut();
      alert("Session closed successfully");
      window.location.reload();
    },
  },
};
</script>

<style>
</style>