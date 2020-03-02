<template>
  <div>
    <vs-row vs-align="flex-start" vs-type="flex" vs-justify="center" vs-w="12">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-input size="large" placeholder="Search" v-model="produtoPesquisa" autofocus />
        <vs-button
          color="primary"
          type="filled"
          icon="search"
          @click.prevent="buscarProdutos"
        >Buscar</vs-button>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
export default {
  name: "ProdutosBuscar",
  props: ["produtoPesquisa"],
  data() {
    return {
      //   produtoPesquisa: null
    };
  },
  methods: {
    buscarProdutos() {
      this.$router.push({ query: { q: this.produtoPesquisa } });
    }
  }
};
</script>
<style lang="scss">
</style>
