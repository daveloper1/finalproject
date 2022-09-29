<template>
  <div class="login-info">
    <input
      class="input-box text-area"
      type="email"
      v-model="userEmail"
      name="email"
      id="login-user-email"
      placeholder="Enter your email"
      autocomplete="on"
    />
    <input
      class="input-box text-area"
      type="password"
      v-model="userPassword"
      v-on:keyup.enter="handleSignIn()"
      id="login-user-password"
      name="password"
      placeholder="Enter a password"
      autocomplete="on"
    />
    <button class="btn btn-primary input-box text-area" @click="handleSignIn()">
      Login
    </button>
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

<style>
.login-info {
  display: flex;
  width: 90%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.input-box {
  margin: 0 auto;
  width: 90%;
  padding-left: 5%;
  border-radius: 5px;
}
.input-control:active {
  border: yellow;
}
</style>
