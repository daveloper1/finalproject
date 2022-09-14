<template>
  <div>
    <input
      type="email"
      v-model="userEmail"
      name="email"
      id="login-user-email"
      placeholder="Enter your email"
      autocomplete="on"
    />
    <input
      type="password"
      v-model="userPassword"
      v-on:keyup.enter="handleSignIn()"
      id="login-user-password"
      name="password"
      placeholder="Enter a password"
      autocomplete="on"
    />
    <button @click="handleSignIn()">Login</button>
    <div class="show-error" v-if="errorSignIn">{{ this.errorSignIn }}</div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import userStore from "@/store/user";

export default {
  name: "UserLogin",
  data() {
    return {
      userEmail: "",
      userPassword: "",
      errorSignIn: "",
    };
  },
  methods: {
    ...mapActions(userStore, ["signInWithEmail"]),
    async handleSignIn() {
      try {
        await this.signInWithEmail(this.userEmail, this.userPassword);
      } catch (error) {
        if (error.message == "Invalid login credentials") {
          this.errorSignIn =
            "El nombre de usuario o la contraseña son incorrectos. Inténtelo de nuevo.";
          setTimeout(() => (this.errorSignIn = ""), 5000);
        } else {
          this.errorSignIn = error.message;
        }
      }
    },
  },
};
</script>

<style></style>
