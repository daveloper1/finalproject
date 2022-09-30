<template>
  <div>
    <button
      type="button"
      class="btn btn-outline-danger btn-logout"
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

<style>
.btn-logout {
  background-color: #20214f;
  color: white;
  border-top: none;
  border-left: none;
  border-color: lightgray;
}
</style>
