<script setup>

</script>

<template>
  <div class="wrapper">
    <form>
      <h2>Sign in</h2>
      <input type="email" v-model="email" placeholder="Type your email"><br>
      <input type="password" v-model="password" placeholder="Type your password"><br>
      <RouterLink to="/sign-in"><button>Sign In</button></RouterLink>
        &nbsp;
      <RouterLink to="/sign-up"><button>Sign Up</button></RouterLink>
    </form>
  </div>

</template>
