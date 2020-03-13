<template>
  <section>
    <h2>Adicionar produto</h2>
    <ProductAdd />
    <h2>Seus produtos</h2>
    <transition-group v-if="user_products" name="list" tag="ul">
      <li v-for="(product, index) in user_products" :key="product.title+'_'+index">
        <ProductItem :product="product">
          <vs-button @click="deleteProduct(product.id)" tag="button" color="danger" icon="delete"></vs-button>
        </ProductItem>
      </li>
    </transition-group>
    <!-- {{user_products}} -->
  </section>
</template>

<script>
import ProductAdd from "@/components/ProductAdd.vue";
import ProductItem from "@/components/ProductItem.vue";
import { mapState, mapActions } from "vuex";
import { api } from "@/services";

export default {
  name: "UserProducts",
  components: {
    ProductAdd,
    ProductItem
  },
  computed: {
    ...mapState(["login", "user", "user_products"])
  },
  methods: {
    ...mapActions(["getUserProducts"]),
    deleteProduct(id) {
      const validate = window.confirm("Deseja remover este produto?");
      if (validate) {
        api
          .delete(`/produto/${id}`)
          .then(() => {
            this.getUserProducts();
          })
          .catch(error => {
            this.$vs.notify({
              title: "Erro",
              text: error.response,
              color: "danger"
            });
          });
      }
    }
  },
  watch: {
    login() {
      this.getUserProducts();
    }
  },
  created() {
    if (this.login) {
      this.getUserProducts();
    }
  }
};
</script>

<style scoped>
h2 {
  margin-bottom: 10px;
  border-bottom: 1px #0000001d solid;
  padding-bottom: 5px;
}
ul > li {
  list-style-type: none;
}
section {
  width: calc(100% - 40px);
}
</style>