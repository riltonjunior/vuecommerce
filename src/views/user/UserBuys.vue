<template>
  <section>
    <div v-if="buys">
      <h2>Suas Compras</h2>
      <div class="produtos-wrapper" v-for="(buy, index) in buys" :key="index">
        <ProductItem v-if="buy.product" :product="buy.product">
          <p class="vendedor">
            <strong>Vendedor:</strong>
            <span>{{buy.seller_id}}</span>
          </p>
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
  name: "Buys",
  components: { ProductItem },
  data() {
    return {
      buys: null
    };
  },
  computed: {
    ...mapState(["user", "login"])
  },
  methods: {
    getBuys() {
      api.get(`/transacao?buyer_id=${this.user.id}`).then(response => {
        this.buys = response.data;
      });
    }
  },
  watch: {
    login() {
      this.getBuys();
    }
  },
  created() {
    if (this.login) {
      this.getBuys();
    }
  }
};
</script>

<style>
</style>