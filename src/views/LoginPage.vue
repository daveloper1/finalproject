<template>
  <div class="login-bkgnd">
    <div class="login-container">
      <img src="../assets/Logo.png" alt="Notice Task Logo" />
      <Login />
      <h2>Sign Up</h2>
      <SignUp />
    </div>
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
.login-bkgnd {
  display: flex;
  height: 100vh;
  width: 100%;
  background-image: url(https://images.pexels.com/photos/2736499/pexels-photo-2736499.jpeg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  overflow: hidden;
  align-items: center;
}
.login-container {
  display: flex;
  top: 88px;
  left: 50px;
  width: 315px;
  height: 500px;
  background-color: rgba(176, 176, 176, 0.8);
  background: linear-gradient(
    transparent -8%,
    #adadad,
    #707070,
    transparent 106%
  );
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  border-radius: 15px;
}

@media only screen and (min-width: 844px) {
  .login-container {
    width: 400px;
  }
}
</style>
