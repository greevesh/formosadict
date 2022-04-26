<template>
  <div class="suggest-bar">
    <p class="suggest-bar__text">
      Can't find a translation?
      <a class="suggest-bar__link" href="#suggest-form"
        >Suggest a translation</a
      >
    </p>
  </div>
</template>

<style lang="scss">
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.suggest-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7vh;
  background: rgba(0, 0, 0, 0);
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.35);
  transition: all 2s;
  animation: slide-down 1.5s;

  &__text {
    color: #fff;
    font-weight: bold;
  }

  &__link {
    text-decoration: none;
    color: #2c3e50;
  }
}
</style>
