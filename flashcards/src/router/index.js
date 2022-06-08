import { createRouter, createWebHistory } from "vue-router";
import { FlashcardView } from "../views/FlashcardView.vue";
import { AboutView } from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/flashcards",
      name: "flashcards",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(FlashcardView),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(AboutView),
    },
  ],
});

export default router;
