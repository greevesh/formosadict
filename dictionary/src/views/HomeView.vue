<script setup>
  import BaseNavBar from '../components/BaseNavbar.vue'
  import TheSuggestTranslationBar from '../components/TheSuggestTranslationBar.vue'
  import TheHeading from '../components/TheHeading.vue'
  import TheSubheading from '../components/TheSubheading.vue'
  import TheSearchBar from '../components/TheSearchBar.vue'
  import SearchLabels from '../components/SearchLabels.vue'
  import SearchResults from '../components/SearchResults.vue'
  import TheWordOfTheDay from '../components/TheWordOfTheDay.vue'
  import SuggestTranslationForm from '../components/SuggestTranslationForm.vue'
  import TheFooter from '../components/TheFooter.vue'
</script>

<template>
  <main>
    <BaseNavBar />
    <TheSuggestTranslationBar />
    <TheHeading />
    <TheSubheading />
    <TheSearchBar />
    <SearchLabels />
    <SearchResults />
    <TheWordOfTheDay />
    <SuggestTranslationForm />
    <TheFooter />
  </main>
</template>
