import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";

let app;

onAuthStateChanged(auth, (_user) => {
  if (!app) {
    app = createApp(App);
    app.use(router);
    app.mount("#app");
  }
});
