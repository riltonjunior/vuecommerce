<template>
  <section>
    <div v-if="sells">
      <h2>Suas Vendas</h2>
      <div class="produtos-wrapper" v-for="(sell, index) in sells" :key="index">
        <ProductItem v-if="sell.product" :product="sell.product">
          <p class="comprador">
            <strong>Comprador:</strong>
            <span>{{sell.buyer_id}}</span>
          </p>

          <h3>Entrega:</h3>
          <ul>
            <li v-for="(address, index) in sell.address" :key="index">{{index}}: {{address}}</li>
          </ul>
        </ProductItem>
      </div>
    </div>
  </section>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
import { api } from "@/services.js";
import { mapState } from "vuex";

export default {
  name: "Sells",
  components: { ProductItem },
  data() {
    return {
      sells: null
    };
  },
  computed: {
    ...mapState(["user", "login"])
  },
  methods: {
    getSells() {
      api.get(`/transacao?seller_id=${this.user.id}`).then(response => {
        this.sells = response.data;
      });
    }
  },
  watch: {
    login() {
      this.getSells();
    }
  },
  created() {
    if (this.login) {
      this.getSells();
    }
  }
};
</script>

<style>
</style>