<template>
  <vs-row vs-align="flex-start" vs-type="flex" vs-justify="center" vs-w="12">
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
      <div class="main-product box" v-if="product">
        <h1 class="headerx">{{product.name}}</h1>
        <vs-row vs-align="flex-start" vs-type="flex" vs-justify="center" vs-w="12">
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
            <figure class="image">
              <img src="https://bulma.io/images/placeholders/480x480.png" :alt="product.name" />
            </figure>
          </vs-col>
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
            <vs-row>
              <vs-col class="prod-content">
                <h2 class="subtitle">{{product.price | numberPrice}}</h2>
                <p>{{product.description}}</p>
                <vs-input-number v-if="!product.sold" v-model="qtd" min="1" />
                <transition v-if="!product.sold" mode="out-in">
                  <vs-button size="large" v-if="!checkout" @click="checkout = true">Comprar</vs-button>
                  <Checkout :product="product" v-else></Checkout>
                </transition>
                <vs-button size="large" v-if="product.sold" disabled>Indisponível</vs-button>
              </vs-col>
            </vs-row>
          </vs-col>
        </vs-row>
      </div>
      <Loading class="window-center" key="loading" v-else />
    </vs-col>
  </vs-row>
</template>

<script>
import { api } from "@/services";
import Checkout from "@/components/Checkout.vue";
import Loading from "@/components/layout/Loading.vue";
export default {
  name: "Produto",
  props: ["id"],
  components: {
    Checkout,
    Loading
  },
  data() {
    return {
      product: "",
      qtd: 1,
      checkout: false
    };
  },
  watch: {
    infoProduct() {
      console.log(this.product);
    }
  },
  methods: {
    getProduct() {
      api.get(`/produto/${this.id}`).then(response => {
        // this.productsTotal = Number(response.headers["x-total-count"]);
        this.product = response.data;
      });
    }
    // formatPrice(value) {
    //   const formatter = new Intl.NumberFormat("en-US", {
    //     style: "currency",
    //     currency: "BRL",
    //     minimumFractionDigits: 2
    //   });
    //   return formatter
    //     .format(value)
    //     .replace(".", ",")
    //     .replace(",", ".");
    // }
  },
  created() {
    this.getProduct();
  }
};
</script>

<style scoped>
.image {
  max-width: 100%;
  padding-right: 20px;
}
.image img {
  width: 100%;
}
h1 {
  margin-top: -1.5rem;
  margin-bottom: 1rem;
  padding-top: 4rem;
}
.headerx {
  border-bottom: 1px solid #0001;
  padding-bottom: 5px;
}
.box {
  border-radius: 0 0 10px 10px !important;
  -webkit-box-shadow: 0 20px 40px -15px transparent !important;
  box-shadow: 0 20px 40px -15px transparent !important;
  background: #0000 !important;
}
.vs-input-number {
  justify-content: flex-start !important;
}
.prod-content h3,
.prod-content p,
.prod-content div,
.prod-content button {
  margin-top: 10px;
}
</style>