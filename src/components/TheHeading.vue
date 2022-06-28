<template>
  <div class="logo-container">
    <img
      class="logo"
      src="../assets/images/brand-logo.png"
      alt="formosadict-brand-logo"
    />
  </div>
</template>

<style scoped>
.logo-container {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.logo {
  height: 150px;
  width: 200px;
}

@media (max-width: 1150px) {
  .logo {
    margin-top: 10px !important;
  }
}
</style>
