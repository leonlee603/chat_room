import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ChatRoomView from "@/views/ChatRoomView.vue";
import { auth } from "@/firebase/config";

const requireAuth = (to, from, next) => {
  let user = auth.currentUser;
  // console.log("Current user in auth guard: ", user);
  if (!user) {
    next({ name: "home" });
  } else {
    next();
  }
};

const requireNoAuth = (to, from, next) => {
  let user = auth.currentUser;
  if (user) {
    next({ name: "chatroom" });
  } else {
    next();
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      beforeEnter: requireNoAuth,
    },
    {
      path: "/chatroom",
      name: "chatroom",
      component: ChatRoomView,
      beforeEnter: requireAuth,
    },
  ],
});

export default router;
