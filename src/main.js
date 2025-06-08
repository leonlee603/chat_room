import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseApp } from "./firebase/config";

let app;

const auth = getAuth(firebaseApp);
onAuthStateChanged(auth, (_user) => {
  if (!app) {
    app = createApp(App);
    app.use(router);
    app.mount("#app");
  }
});
