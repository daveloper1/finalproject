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
      v-on:keyup.enter="handleSignIn()"
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
    <div class="show-error alert alert-danger" role="alert" v-if="errorSignIn">
      {{ this.errorSignIn }}
    </div>
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
        if (error.message.toLowerCase() == "invalid login credentials") {
          this.errorSignIn =
            "El nombre de usuario o la contraseña son incorrectos. Inténtelo de nuevo.";
        } else if (
          error.message.toLowerCase() ==
          "you must provide either an email, phone number, a third-party provider or openid connect."
        ) {
          this.errorSignIn = "Es necesario introducir usuario y contraseña.";
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
  height: 16%;
  padding-left: 5%;
  border-radius: 5px;
}
.input-box:active {
  border: yellow;
}
.alert {
  width: 90%;
  height: 30%;
  padding-top: 2%;
  margin-top: 10px;
  padding-bottom: 2%;
}
.btn-primary {
  padding: 0;
}
@media only screen and (min-width: 844px) {
  .input-box:focus {
    border: solid rgb(0, 234, 255);
  }
}
</style>
