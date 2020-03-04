<template>
  <section class="produtos-container">
    <vs-row vs-justify="center" v-if="produtos && produtos.length > 0">
      <vs-col
        type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="3"
        v-for="produto in produtos"
        :key="produto.uid"
        class="cardx"
      >
        <vs-card>
          <div slot="header">
            <h3>{{produto.name}}</h3>
          </div>
          <div slot="media">
            <img v-if="produto.foto" :src="produto.foto[0].src" :alt="produto.foto[0].title" />
          </div>
          <div>
            <span>
              <h2>
                <strong>{{formatPrice(produto.price)}}</strong>
              </h2>
            </span>
            <span>{{produto.description}}</span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button color="primary" type="filled">Comprar</vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
    <vs-row
      vs-justify="center"
      vs-align="center"
      v-else-if="produtos && produtos.length === 0"
      vs-w="12"
      class="sem-resultados"
    >
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="8">
        <vs-alert active="true">
          <p>Desculpe-nos. Busca sem resultado, tente buscar outro termo.</p>
        </vs-alert>
      </vs-col>
    </vs-row>
    <vs-row vs-justify="center" vs-align="center" vs-w="12">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <Pagination :pTotal="productsTotal" :pPerPage="productsPerPage" />
      </vs-col>
    </vs-row>
  </section>
</template>
<script>
import { api } from "@/services";
import { serialize } from "@/helpers";
import Pagination from "@/components/Pagination.vue";

export default {
  name: "ProdutosLista",
  components: {
    Pagination
  },
  data() {
    return {
      produtos: null,
      productsPerPage: 9,
      productsTotal: null
    };
  },
  computed: {
    url() {
      const query = serialize(this.$route.query);
      return `/produto?_limit=${this.productsPerPage}${query}`;
    }
  },
  methods: {
    getProdutos() {
      //   fetch("http://localhost:3000/produto")
      //     .then(response => response.json())
      //     .then(response => {
      //       this.produtos = response;
      //     });
      api.get(this.url).then(response => {
        this.productsTotal = Number(response.headers["x-total-count"]);
        this.produtos = response.data;
      });
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  },
  watch: {
    url() {
      this.getProdutos();
    }
  },
  created() {
    this.getProdutos();
  }
};
</script>
<style lang="scss">
.cardx {
  margin: 15px;
}
.sem-resultados {
  margin-top: 30px;
}
</style>
