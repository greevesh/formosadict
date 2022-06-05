<template>
  <div>
    <a
      class="tweet-button"
      :href="link"
      target="_blank"
      data-show-count="false"
      data-size="large"
      >Tweet
      &nbsp;
      <i class="fa-brands fa-twitter"></i>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: "https://twitter.com/intent/tweet?text=FormosaDict's%20Word%20of%20the%20Day%20is%20'隱形'%20('invisible')%20pronounced%20as%20'yǐn%20xíng'.",
    };
  },
};
</script>

<style scoped>
.tweet-button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  background-color: #1d9bf0;
  border: none;
  border-radius: 500px;
  height: 40px;
  width: 110px;
}

.tweet-btn:hover {
  cursor: pointer;
}
</style>
