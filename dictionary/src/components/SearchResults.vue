<template>
    <div id="hits"></div>
</template>

<style lang="scss">
    .ais-Hits-item {
  height: 100px;
}

.hit-container {
  display: grid;
  grid-template-columns: 250px 1075px 150px 1fr;
  font-size: 24px;
  font-weight: 500;

  /* traditional */
  .hit:nth-child(1) {
    grid-column: 1 / 2;
    margin-top: 15px;
    font-size: 18px;
  }

  /* pinyin */
  .hit:nth-child(2) {
    grid-column: 1 / 2;
    font-size: 18px;
    margin-top: 7px;
    color: #7b7d80;
  }

  /* definition */
  .hit:nth-child(3) {
    grid-column: 2 / 3;
    margin-top: -15px;
    font-size: 19px;
  }

  /* simplified */
  .hit:nth-child(4) {
    grid-column: 3 / -1;
    margin-top: -13px;
    font-size: 18px;
    display: block;
  }
}

/* highlighted word */
.ais-Highlight-highlighted {
  color: #1fa030;
}
</style>