<template>
  <div class="home">
    <h1>Login Page</h1>
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
    /*handleSignUp() {
      const userData = {
        email: "",
        password: "",
      };
      this.signUp(userData.email, userData.password);
    },*/
  },
  watch: {
    user() {
      if (this.user) {
       //console.log(this.user);
        this.$router.push({ path: "/" });
      } else {
        this.$router.push({ path: "/auth" });
      }
    },
  },
};
</script>
