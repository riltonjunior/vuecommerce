<template>
  <div>
    <vs-row vs-align="flex-start" vs-type="flex" vs-justify="center" vs-w="12">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-input size="large" placeholder="Search" v-model="produtoPesquisa" autofocus />
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
      //   buscaProduto: ""
    };
  }
};
</script>
<style lang="scss">
</style>
