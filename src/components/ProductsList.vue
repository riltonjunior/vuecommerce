<template>
  <section class="produtos-container">
    <transition mode="out-in">
      <vs-row vs-justify="center" v-if="produtos && produtos.length > 0" key="products">
        <vs-col
          type="flex"
          vs-justify="center"
          vs-align="center"
          vs-w="3"
          v-for="produto in produtos"
          :key="produto.id"
          class="cardx"
        >
          <router-link :to="{name: 'Product', params: {id: produto.id}}">
            <vs-card>
              <div slot="header">
                <h3>{{produto.name}}</h3>
              </div>
              <div slot="media">
                <!-- <img v-if="produto.foto" :src="produto.foto[0].src" :alt="produto.foto[0].title" /> -->
                <img src="https://bulma.io/images/placeholders/480x480.png" />
              </div>
              <div>
                <span>
                  <h2>
                    <strong>{{produto.price | numberPrice}}</strong>
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
          </router-link>
        </vs-col>
        <vs-row vs-justify="center" vs-align="center" vs-w="12">
          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
            <Pagination :pTotal="productsTotal" :pPerPage="productsPerPage" />
          </vs-col>
        </vs-row>
      </vs-row>
      <vs-row
        vs-justify="center"
        vs-align="center"
        v-else-if="produtos && produtos.length === 0"
        vs-w="12"
        class="sem-resultados"
        key="no-results"
      >
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="8">
          <vs-alert active="true">
            <p>Desculpe-nos. Busca sem resultado, tente buscar outro termo.</p>
          </vs-alert>
        </vs-col>
      </vs-row>
      <Loading class="window-center" key="loading" v-else />
      <!-- <vs-row vs-justify="center" vs-align="center" vs-w="12" class="sem-resultados">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="8">
      </vs-col>
      </vs-row>-->
    </transition>
  </section>
</template>
<script>
import { api } from "@/services";
import { serialize } from "@/helpers";
import Pagination from "@/components/Pagination.vue";
import Loading from "@/components/layout/Loading.vue";

export default {
  name: "ProductsList",
  components: {
    Pagination,
    Loading
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
      window.setTimeout(() => {
        api.get(this.url).then(response => {
          this.productsTotal = Number(response.headers["x-total-count"]);
          this.produtos = response.data;
        });
      }, 1500);
    },
    openLoadingBackground() {
      this.$vs.loading({
        background: this.backgroundLoading,
        color: "rgb(255, 255, 255)"
      });
      setTimeout(() => {
        this.$vs.loading.close();
      }, 3000);
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
.window-center {
  // height: 80vh;
  // padding: 20vh;
  display: flex;
  align-self: auto;
  justify-content: center;
  margin-top: 150px;
}
nav {
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
li.item-pagination.vs-pagination--li.is-current span {
  color: #fff !important;
}
</style>
