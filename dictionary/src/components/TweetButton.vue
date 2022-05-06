<template>
  <div>
    <a
      :href="link"
      class="twitter-share-button"
      data-show-count="false"
      data-size="large"
      >Tweet</a
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: "https://twitter.com/intent/tweet?text=FormosaDict's%20Word%20of%20the%20Day%20is%20'隱形'%20('invisible')%20pronounced%20as%20yǐn%20xíng.",
    };
  },
};
</script>
