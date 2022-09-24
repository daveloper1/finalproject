import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
const pinia = createPinia();

createApp(App)
  .use(router)
  .use(pinia)
  .use(BootstrapVue)
  .use(IconsPlugin)
  .mount("#app");
