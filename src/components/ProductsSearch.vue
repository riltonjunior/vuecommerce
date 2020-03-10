<template>
  <form v-on:submit.prevent="searchProducts">
    <vs-row vs-align="flex-start" vs-type="flex" vs-justify="center" vs-w="12">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-input size="large" placeholder="Search" v-model="search" autofocus />
        <vs-button color="primary" type="filled" icon="search" @click.prevent="searchProducts"></vs-button>
      </vs-col>
    </vs-row>
  </form>
</template>
<script>
export default {
  name: "ProductsSearch",
  props: ["productSearch"],
  data() {
    return {
      search: this.productSearch
    };
  },
  methods: {
    searchProducts() {
      //   if (this.keyCode === 13) {
      this.$router.push({ query: { q: this.search } });
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
