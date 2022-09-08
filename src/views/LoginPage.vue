<template>
  <div class="home">
    <h1>Login Page</h1>
    <SignIn />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from "pinia";
import userStore from "@/store/user";
import user from "@/store/user";
import SignIn from "./components/SignIn.vue";

export default {
  name: "AuthView",
  computed: {
    ...mapState(userStore, ["user"]),
  },
  methods: {
    ...mapActions(userStore, ["signUp"]),
    handleSignUp() {
      const userData = {
        email: "97davidleon@gmail.com",
        password: "prueba1",
      };
      this.signUp(userData.email, userData.password);
    },
  },
  watch: {
    user() {
      if (this.user) {
        console.log(this.user);
        this.$router.push({ path: "/" });
      }
    },
  },
};
</script>
