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
            <font-awesome-icon icon="check" />
            <font-awesome-icon class="x" :icon="['fas', 'x']" />
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

<style lang="scss">
  * {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: bold;
  }

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
    height: 60%;
    border: red solid 2px;
  }

  .flashcards {
    width: 100%;
    text-align: center;
    margin: 0;

    &__instructions {
      background-color: #5cbbf6;
      color: #fff;
    }

    &__translation {
      margin-top: 160px;
    }

    &__cross-check {
      display: flex;
      justify-content: space-around;
      margin-top: 90px;
    }

    &__nav-score {
      display: flex;
      justify-content: space-between;
      margin-top: 85px;
      padding: 0 8px;
    }
  }
</style>
