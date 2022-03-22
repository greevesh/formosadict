<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  
    <div class="wrapper">
      <div class="flashcard-container">
        <div class="flashcards">
          <div class="flashcards__instructions">
            <p>Click card to see the term</p>
          </div>
          <div class="flashcards__translation">
            <p>隱形</p>
          </div>
          <div class="flashcards__cross-check">
            <span class="x">X</span>
            <span class="check"></span>
          </div>
          <div class="flashcards__nav-score">
            <p>Previous</p>
            <p>0/1</p>
            <p>Next</p>
          </div>
        </div>
      </div>
    </div>

  <RouterView />
</template>

<style>
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
