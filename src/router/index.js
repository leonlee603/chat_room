import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ChatRoomView from "@/views/ChatRoomView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/chatroom",
      name: "chatroom",
      component: ChatRoomView,
    },
  ],
});

export default router;
