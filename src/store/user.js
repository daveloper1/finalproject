// /store/user.js

import { defineStore } from "pinia";
import supabase from "../supabase/index";

export default defineStore("userStore", {
  state: () => ({
    user: null,
  }),

  actions: {
    async fetchUser() {
      const user = await supabase.auth.user();
      this.user = user;
    },
    async signInWithEmail(email, password) {
      const { user, error } = await supabase.auth.signIn({
        email,
        password,
      });
      if (error) {
        alert(error.message);
      }
      if (user) this.user = user;
    },
    async signUp({ dispatch }, name, email, password) {
      const { user, error } = await supabase.auth.signUp({
        name,
        email,
        password,
      });

      if (error) throw error;
      if (user) this.user = user;
    },
    async signOut() {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      this.user = null;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "user",
        storage: localStorage,
      },
    ],
  },
});
