<script lang="ts">
  export default {
    name: "FlashcardView",
    methods: {
      flipCard() {
        document.getElementById("flashcard-container").style.backgroundColor = "red";
      }
    }
  }
</script>

<template>
  <div class="wrapper">
      <div @click="flipCard" id="flashcard-container" class="flashcard-container">
        <div class="flashcards-front">
          <div class="flashcards-front__instructions">
            <p>Click card to see the term 👇</p>
          </div>
          <div class="flashcards-front__translation">
            <p>隱形</p>
          </div>
          <div class="flashcards-front__cross-check">
            <font-awesome-icon class="flashcards-front__check" icon="check" />
            <font-awesome-icon class="flashcards-front__x" :icon="['fas', 'x']" />
          </div>
          <div class="flashcards-front__score">
            <span>0/1</span>
          </div>
        </div>
        <div class="flashcards-back">
          <div class="flashcards-back__instructions">
              <p>Click card to see the term 👇</p>
          </div>
          <div class="flashcards-back__translation">
            <p>
              invisible
              <br>
              <span class="pinyin">yǐn xíng</span> 
            </p>
          </div>
          <div class="flashcards-front__cross-check">
            <font-awesome-icon class="flashcards-front__check" icon="check" />
            <font-awesome-icon class="flashcards-front__x" :icon="['fas', 'x']" />
          </div>
          <div class="flashcards-back__score">
            <span>0/1</span>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss">
  * {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: bold;
  }

  body {
    overflow: hidden;
    background-color: #f5fdfc;
  }

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
  }

  .flashcard-container:hover {
    transform: rotateY(180deg);
  }

  .flashcard-container {
    display: flex;
    justify-content: center;
    width: 60%;
    height: 60%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 20px;
    position: absolute;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flashcards-front, .flashcards-back {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;

    &__instructions {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #5cbbf6;
      color: #fff;
      height: 10%;
    }

    &__translation {
      margin-top: 60px;
      font-size: 65px;
      color: #2c3e50;
    }

    .flashcards-back__translation {
      font-size: 45px;
      margin-top: 75px;

      .pinyin {
        font-size: 32px;
      }
    }

    &__cross-check {
      display: flex;
      justify-content: space-around;
      margin-top: 90px;
    }

    &__check, &__x {
        font-size: 35px;
        box-shadow: 0px 0px 0px 1px, 0px 0px 0px 1px inset;
        border-radius: 50px;
    }

    &__check:hover, &__x:hover {
      cursor: pointer;
    }

    &__check {
      color: #fff;
      background-color: rgb(41, 217, 62);
      border-color: rgb(41, 217, 62);
      padding: 16px;
    }

    &__x {
      color: #fff;
      background-color: rgb(252, 3, 40);
      border-color: rgb(252, 3, 40);
      padding: 15px 18px;
    }

    &__score {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 55px;
      padding: 0 18px;
      background-color: #2c3e50;
      color: #fff;
      height: 10%;
      font-size: 20px;
    }
  }

  .flashcards-back {
    transform: rotateY(180deg);
  }
</style>