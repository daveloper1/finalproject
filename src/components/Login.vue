<template>
  <div>
    <input type="email" name="email" id="login-user-email" placeholder="Enter your email" />
    <input
      type="password"
      id="login-user-password"
      name="password"
      placeholder="Enter a password"
    />
    <button @click="handleLogin">Login</button>
    
  </div>
</template>

<script>
import { mapActions } from "pinia";
import userStore from "@/store/user";

export default {
  name: "Login",
  methods: {
    ...mapActions(userStore, ["signInWithEmail"]),
    handleLogin() {
      const userData = {
        email: document.getElementById("login-user-email").value,
        password: document.getElementById("login-user-password").value,
      };
      this.signInWithEmail(userData.email, userData.password);
    },
  },
};
</script>

<style>
</style>