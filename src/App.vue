<template>
  <div id="app">
    <Header />
    <main id="main">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="scss">
// Default App Classes
body,
button,
input {
  font-family: Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
body {
  padding: 0px;
  margin: 0px;
}
p {
  color: #2c3e50;
}
a {
  text-decoration: none;
}
a:hover {
  color: #2c3e50;
}
// Page Elements
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
#main {
  flex: 1;
  background-color: #f4f7f8;
}
</style>