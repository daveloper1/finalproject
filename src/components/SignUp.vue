<template>
  <div>
    <input
      type="text"
      id="signup-user-name"
      placeholder="Enter your full name"
    />
    <input type="text" id="signup-user-email" placeholder="Enter your email" />
    <input
      type="password"
      id="signup-user-password"
      placeholder="Enter a password"
    />
    <button @click="handleSignUp">Submit</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import userStore from "@/store/user";

export default {
  name: "SignUp",
  methods: {
    ...mapActions(userStore, ["signUp"]),
    handleSignUp() {
      const userData = {
        name: document.getElementById("signup-user-name").value,
        email: document.getElementById("signup-user-email").value,
        password: document.getElementById("signup-user-password").value,
      };
      this.signUp(userData.name, userData.email, userData.password);
    },
  },
};
</script>

<style>
</style>