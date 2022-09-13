<template>
  <div>
    <button @click.prevent="handleLogout">Logout</button>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import userStore from "@/store/user";

export default {
  name: "Logout",
  methods: {
    ...mapActions(userStore, ["signOut"]),
    async handleLogout() {
      await this.signOut();
    },
  },
};
</script>

<style>
</style>