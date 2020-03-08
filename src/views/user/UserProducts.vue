<template>
  <section>
    <h2>User Products</h2>
    <ProductAdd />
  </section>
</template>

<script>
import ProductAdd from "@/components/ProductAdd.vue";
export default {
  name: "UserProducts",
  components: {
    ProductAdd
  }
};
</script>

<style>
</style>