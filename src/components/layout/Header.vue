<template>
  <header>
    <nav>
      <router-link to="/" class="logo nav-link">
        Vue
        <strong>Commerce</strong>
      </router-link>
      <vs-button to="/login" flat>Vender / Login</vs-button>
    </nav>
  </header>
</template>
<script>
export default {
  name: "Header"
};
</script>
<style lang="scss">
.logo {
  color: #5b3cc4;
  text-decoration: none;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
  padding: 15px 20px;
}
</style>
