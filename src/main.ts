import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import CartoonInput from "@/components/common/cartoon-form/cartoon-input/cartoonInput.vue";

const vueApp = createApp(App);

vueApp.component("CartoonInput", CartoonInput);
vueApp
  .use(store)
  .use(router)
  .mount("#app");
