<template>
  <nav class="app-navbar" :class="{ 'login-navbar': user === null }">
    <router-link v-if="user !== null" to="/"></router-link>
    <h1 class="app-title">Notice Task</h1>
  </nav>
  <router-view />
</template>

<script>
import userStore from "@/store/user";
import { mapState, mapActions } from "pinia";

export default {
  name: "App",
  computed: {
    ...mapState(userStore, ["user"]),
  },
  methods: {
    ...mapActions(userStore, ["fetchUser"]),
  },
  watch: {
    user() {
      if (!this.user) {
        // redirect them to logout if the user is not there
        this.$router.push({ path: "/auth" });
      } else {
        // continue to dashboard
        this.$router.push({ path: "/" });
      }
    },
  },
  async created() {
    try {
      await this.fetchUser(); // here we call fetch user
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
}
body {
  margin: 0;
}
.app-navbar {
  width: 100vw;
  height: 80px;
  padding-left: 25px;
  border: solid;
}
.app-title {
  width: 100vw;
  font-weight: bold;
  font-size: 30px;
  color: #2c3e50;
}
.app-navbar.login-navbar {
  position: fixed;
  padding: 0;
  margin-top: 50px;
  text-align: center;
  height: 100px;
}

.text-area {
  font-size: 17px;
}
</style>
