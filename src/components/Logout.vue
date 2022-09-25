<template>
  <div>
    <button
      type="button"
      class="btn btn-outline-danger"
      @click.prevent="handleLogout"
    >
      Logout
    </button>
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
