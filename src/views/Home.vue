<template>
  <div id="home">
    <section class="hero">
      <div class="container">
        <h1>Procurando o melhor lugar para comprar?</h1>
        <ProductsSearch class="search" :productSearch="search" />
      </div>
    </section>
    <ProductsList class="list" />
  </div>
</template>

<script>
import ProductsList from "@/components/ProductsList.vue";
import ProductsSearch from "@/components/ProductsSearch.vue";

export default {
  name: "Home",
  components: {
    ProductsList,
    ProductsSearch
  },
  data() {
    return {
      search: ""
    };
  }
};
</script>
<style lang="scss">
.hero {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  background-color: $primary;
  height: 30vh;
  & h1 {
    color: $light;
  }
  & .container {
    margin: auto;
  }
}
.search {
  margin-top: 10px;
}
</style>
