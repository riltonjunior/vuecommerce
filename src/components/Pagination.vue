<template>
  <!-- <router-link :to="{query: {_page: this.currentPage}}"> -->
  <router-link v-if="pagTotal > 1" :to="{query: queryRoute(currentPage)}">
    <vs-pagination :total="pagTotal" v-model="currentPage" class></vs-pagination>
  </router-link>
</template>
<script>
export default {
  name: "Pagination",
  data() {
    return {
      currentPage: 1,
      currentx: 5
    };
  },
  props: {
    pPerPage: { type: Number, default: 1 },
    pTotal: { type: Number, default: 1 }
  },
  methods: {
    queryRoute(pagina) {
      //   console.log(this.pagTotal);
      return {
        // ...this.$route.query,
        q: this.$route.query.q,
        _page: pagina
      };
    }
  },
  computed: {
    pagTotal() {
      const total = this.pTotal / this.pPerPage;
      return total !== Infinity ? Math.ceil(total) : 0;
    }
  },
  beforeCreate() {
    console.log(this.pagTotal);
    // "Uma mensagem."
    // this.puxarApi();
  }
};
</script>
<style lang="scss">
</style>
