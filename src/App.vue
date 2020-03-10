<template>
  <div id="app">
    <Header />
    <main id="main">
      <transition mode="out-in">
        <router-view />
      </transition>
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
  // created() {
  //   this.$vs.loading({
  //     type: "border"
  //   });
  // },
  // mounted() {
  //   setTimeout(() => {
  //     this.$vs.loading.close();
  //   }, 10);
  // }
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
a span,
a h3 {
  color: #2c3e50;
}
a:hover span,
a:hover h3 {
  color: $primary;
}
a:hover button span {
  color: #fff;
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
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter {
  transform: translate3d(0, -20px, 0);
}
.v-leave-to {
  transform: translate3d(0, 20px, 0);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>