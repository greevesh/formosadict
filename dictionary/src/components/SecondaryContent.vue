<script setup>
    import TheWordOfTheDay from './TheWordOfTheDay.vue'
    import SuggestTranslationForm from './SuggestTranslationForm.vue'
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
</style>