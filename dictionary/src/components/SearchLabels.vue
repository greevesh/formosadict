<template>
  <section class="labels">
    <div class="labels__text">
      <h4>Traditional</h4>
      <h5>Pinyin</h5>
    </div>
    <div class="labels__text">
      <h4>English Definition</h4>
    </div>
    <div class="labels__text">
      <h4>Simplified</h4>
    </div>
  </section>
</template>

<style lang="scss">
@import "./src/assets/styles/_variables.scss";
.labels {
  grid-template-columns: 250px 1075px 150px 1fr;
  margin-top: 140px;
  padding-left: 22px;
  background: $main-color;
  color: #fff;

  &__text:nth-child(1) {
    grid-column: 1 / 2;
  }

  &__text:nth-child(2) {
    grid-column: 2 / 3;
  }

  &__text:nth-child(3) {
    grid-column: 3 / -1;
  }
}

@media (max-width: 1150px) {
  .labels {
    margin-top: 90px;
  }
}

@media (max-width: 748px) {
  .labels {
    margin-top: 68px;
  }
}

@media (max-width: 400px) {
  .labels {
    margin-top: 45px;
  }
}
</style>
