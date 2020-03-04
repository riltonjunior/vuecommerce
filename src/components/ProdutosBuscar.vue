<template>
  <form v-on:submit.prevent="buscarProdutos">
    <vs-row vs-align="flex-start" vs-type="flex" vs-justify="center" vs-w="12">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-input size="large" placeholder="Search" v-model="pesquisa" autofocus />
        <vs-button color="primary" type="filled" icon="search" @click.prevent="buscarProdutos"></vs-button>
      </vs-col>
    </vs-row>
  </form>
</template>
<script>
export default {
  name: "ProdutosBuscar",
  props: ["produtoPesquisa"],
  data() {
    return {
      pesquisa: this.produtoPesquisa
    };
  },
  methods: {
    buscarProdutos() {
      //   if (this.keyCode === 13) {
      this.$router.push({ query: { q: this.pesquisa } });
      //   }
    },
    noop() {
      console.log(this.keyCode === 13);
    }
  }
};
</script>
<style lang="scss">
</style>
