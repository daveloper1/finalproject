<template>
  <nav v-if="user !== null">
    <router-link to="/">Home</router-link>
  </nav>
  <h1 class="app-title" v-else>Notice Task</h1>

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
h1 {
  font-weight: bold;
  color: #2c3e50;
  text-align: center;
}
nav {
  position: fixed;
}
.app-title {
  position: fixed;
}

.text-area {
  font-size: 17px;
}
</style>
