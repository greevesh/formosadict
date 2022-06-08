<script lang="ts">
import { RouterView } from "vue-router";
import FlashcardView from "./views/FlashcardView.vue";
import AboutView from "./views/AboutView.vue";
export default {
  name: "App",
  components: {
    Router: RouterView,
    FlashcardApp: FlashcardView,
    About: AboutView,
  },
};
</script>

<template>
  <FlashcardView />
  <RouterView />
</template>
