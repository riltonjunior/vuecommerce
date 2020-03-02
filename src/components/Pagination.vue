<template>
  <div v-if="pTotal < 1">
    <router-link :to="{query: {_page: query(Number(currentPage))}}">
      <vs-pagination :total="pagTotal" v-model="currentPage"></vs-pagination>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Pagination",
  data() {
    return {
      currentPage: 1
    };
  },
  props: {
    pPerPage: { type: Number, default: 1 },
    pTotal: { type: Number, default: 1 }
  },
  methods: {
    query(pag) {
      pag = Number(pag);
      return {
        ...this.$route.query,
        _page: pag
      };
    }
  },
  computed: {
    pagTotal() {
      const total = this.pTotal / this.pPerPage;
      return total !== Infinity ? Math.ceil(total) : 0;
    }
  }
};
</script>
<style lang="scss">
</style>
