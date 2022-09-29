<template>
  <div class="login-info">
    <input
      class="input-box text-area"
      type="text"
      v-model="userName"
      id="signup-user-name"
      placeholder="Enter your full name"
      autocomplete="on"
    />
    <input
      class="input-box text-area"
      type="text"
      v-model="userEmail"
      id="signup-user-email"
      placeholder="Enter your email"
      autocomplete="on"
    />
    <input
      class="input-box text-area"
      type="password"
      v-model="userPassword"
      id="signup-user-password"
      placeholder="Enter a password"
      v-on:keyup.enter="handleSignUp()"
      autocomplete="on"
    />
    <button class="btn btn-primary input-box text-area" @click="handleSignUp()">
      Submit
    </button>
    <div class="show-error alert alert-danger" role="alert" v-if="errorSignUp">
      {{ this.errorSignUp }}
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import userStore from "@/store/user";

export default {
  name: "SignUp",
  data() {
    return {
      userName: "",
      userEmail: "",
      userPassword: "",
      errorSignUp: "",
    };
  },
  methods: {
    ...mapActions(userStore, ["signUp"]),
    async handleSignUp() {
      try {
        await this.signUp(this.userName, this.userEmail, this.userPassword);
      } catch (error) {
        this.errorSignUp = error.message;
      }
    },
  },
};
</script>

<style></style>
