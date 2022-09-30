<template>
  <nav
    v-if="user != null"
    class="app-navbar"
    :class="{ 'login-navbar': user === null }"
  >
    <img class="app-title" src="./assets/logo.png" alt="Notice Task Logo" />
    <Logout class="logout-btn" v-if="user !== null" />
  </nav>
  <router-view />
</template>

<script>
import Logout from "./components/Logout.vue";
import userStore from "@/store/user";
import { mapState, mapActions } from "pinia";

export default {
  name: "App",
  components: {
    Logout: Logout,
  },
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
        this.$router.push({ path: "/" });
      } else {
        // continue to dashboard
        this.$router.push({ path: "/dashboard" });
      }
    },
  },
  async created() {
    try {
      await this.fetchUser(); // here we call fetch user
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap");
#app {
  font-family: Libre Baskerville;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
body {
  margin: 0;
}
.app-navbar {
  position: fixed;
  top: 2%;
  left: 10%;
  margin: 0 auto;
  width: 80%;
  height: 80px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}
.app-title {
  width: 215px;
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

@media only screen and (min-width: 415px) {
  .app-title {
    width: 260px;
  }
}
</style>
