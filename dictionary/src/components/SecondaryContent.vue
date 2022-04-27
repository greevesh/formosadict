<script setup>
import TheWordOfTheDay from "./TheWordOfTheDay.vue";
import SuggestTranslationForm from "./SuggestTranslationForm.vue";
</script>

<template>
  <div class="secondary-content">
    <TheWordOfTheDay />
    <SuggestTranslationForm />
  </div>
</template>

<style>
.secondary-content {
  display: flex;
  align-items: center;
  height: 60vh;
}

@media (max-width: 720px) {
  .secondary-content {
    display: block;
    height: 110vh;
  }

  #suggest-form {
    margin-top: 80px;
  }
}

@media (max-width: 375px) {
  .secondary-content {
    height: 120vh;
  }
}
</style>
