<template>
  <div class="input-group">
    <input
      class="input-control text-area"
      type="text"
      v-model="userName"
      id="signup-user-name"
      placeholder="Enter your full name"
      autocomplete="on"
    />
    <input
      class="input-control text-area"
      type="text"
      v-model="userEmail"
      id="signup-user-email"
      placeholder="Enter your email"
      autocomplete="on"
    />
    <input
      class="input-control text-area"
      type="password"
      v-model="userPassword"
      id="signup-user-password"
      placeholder="Enter a password"
      v-on:keyup.enter="
        signUp(this.userName, this.userEmail, this.userPassword)
      "
      autocomplete="on"
    />
    <button
      class="input-control text-area input-btn"
      @click="signUp(this.userName, this.userEmail, this.userPassword)"
    >
      Submit
    </button>
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
    };
  },
  methods: {
    ...mapActions(userStore, ["signUp"]),
  },
};
</script>

<style></style>
