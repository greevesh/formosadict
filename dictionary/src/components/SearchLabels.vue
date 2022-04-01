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

<style>
    .labels {
  grid-template-columns: 250px 1075px 150px 1fr;
  margin-top: 154px;
  padding-left: 22px;
  background: $main-color;
  /* color: #fff; */

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
</style>