<template>
  <div class="home">
    <h1>Login Page</h1>
    <h2>Sign Up</h2>
    <SignUp />
    <h2>LOGIN</h2>
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from "pinia";
import userStore from "@/store/user";
import SignUp from "../components/SignUp.vue";
import Login from "../components/Login.vue";

export default {
  name: "AuthView",
  components: {
    SignUp: SignUp,
    Login: Login,
  },
  computed: {
    ...mapState(userStore, ["user"]),
  },
  methods: {
    ...mapActions(userStore, ["signUp"]),
  },
};
</script>

<style>

</style>
