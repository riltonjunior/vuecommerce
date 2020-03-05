<template>
  <p>Produto {{product}}</p>
</template>

<script>
import { api } from "@/services";
export default {
  name: "Produto",
  props: ["id"],
  data() {
    return {
      product: null
    };
  },
  methods: {
    getProduct() {
      api.get(`/produto/${this.id}`).then(response => {
        // this.productsTotal = Number(response.headers["x-total-count"]);
        this.product = response.data;
      });
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  },
  created() {
    this.getProduct();
  }
};
</script>

<style>
</style>