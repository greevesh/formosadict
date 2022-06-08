<template>
  <div id="wotd" class="wotd">
    <section class="wotd__container">
      <h2 class="wotd__header">Word of the Day</h2>
      <div class="wotd__translation">
        <p id="chinese">隱形</p>
        <p>yǐn xíng</p>
        <p>invisible</p>
        <tweet-button></tweet-button>
      </div>
    </section>
  </div>
</template>

<script>
import TweetButton from "./TweetButton.vue";
export default {
  components: {
    TweetButton,
  },
};
</script>

<style lang="scss">
@import "./src/assets/styles/_variables.scss";
.wotd {
  display: flex;
  justify-content: center;
  align-items: center;

  &__container {
    font-size: $h2-font-size;
    padding-top: 5px;
    padding-bottom: 5px;
    height: 30vh;
    width: 45vw;
    border-radius: 250px;
    text-align: center;
  }

  &__header {
    color: $header-color;
  }

  &__translation {
    text-align: center;

    #chinese {
      font-size: 25px;
      font-weight: 500;
    }
  }
}
</style>
