<template>
  <div>
    <b-button variant="outline-primary" @click.prevent="handleLogout"
      >Logout</b-button
    >
  </div>
</template>

<script>
import { mapActions } from "pinia";
import userStore from "@/store/user";

export default {
  name: "UserLogout",
  methods: {
    ...mapActions(userStore, ["signOut"]),
    async handleLogout() {
      try {
        await this.signOut();
      } catch (error) {
        alert("Error signing out:", error.message);
      }
    },
  },
};
</script>

<style></style>
