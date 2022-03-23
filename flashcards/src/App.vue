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
            <span class="check">Check</span>
          </div>
          <div class="flashcards__nav-score">
            <span>Previous</span>
            <span>0/1</span>
            <span>Next</span>
          </div>
        </div>
      </div>
    </div>

  <RouterView />
</template>

<style>
  body {
    overflow: hidden;
  }

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .flashcard-container {
    display: flex;
    justify-content: center;
    width: 60%;
  }

  .flashcards {
    width: 100%;
    text-align: center;
  }
</style>
