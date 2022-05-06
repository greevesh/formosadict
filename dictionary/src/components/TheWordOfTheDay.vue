<template>
  <div id="wotd" class="wotd">
    <section class="wotd__container">
      <h2 class="wotd__header">Word of the Day</h2>
      <div class="wotd__translation">
        <p
          style="font-weight: 500; font-size: 25px"
          id="chinese"
          class="wotd__text"
        >
          隱形
        </p>
        <p id="pinyin" class="wotd__text">yǐn xíng</p>
        <p id="definition" class="wotd__text">invisible</p>
        <tweet-button></tweet-button>
        <!-- <a
          href="https://twitter.com/intent/tweet?text=FormosaDict's%20word%20of%20the%20day%20is%20'wotd'"
          class="twitter-share-button"
          data-show-count="false"
          data-size="large"
        ></a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script> -->
      </div>
    </section>
  </div>
</template>

<script>
import TweetButton from "./TweetButton.vue";
export default {
  components: {
    TweetButton
  },
}
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

    &__text:nth-child(1) {
      font-size: 25px;
      font-weight: bold;
    }
  }
}
</style>
