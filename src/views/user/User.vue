<template>
  <section class="sub-pages">
    <vs-row vs-w="12" class="full-row" vs-align="flex-start">
      <vs-col class="sidebarx" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-w="3">
        <aside>
          <vs-button icon="view_list" color="primary" type="filled " :to="{name:'User'}">Products</vs-button>
          <vs-button icon="shopping_cart" color="primary" type="filled " :to="{name:'Buys'}">Compras</vs-button>
          <vs-button icon="store" color="primary" type="filled " :to="{name:'Sells'}">Vendas</vs-button>
          <vs-button
            icon="account_box"
            color="primary"
            type="filled "
            :to="{name:'Edit'}"
          >Editar Usuário</vs-button>
          <vs-button icon="reply" color="danger" type="filled" @click.prevent="deslogar">Deslogar</vs-button>
        </aside>
      </vs-col>
      <vs-col class="content" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="9">
        <router-view></router-view>
      </vs-col>
    </vs-row>
  </section>
</template>

<script>
export default {
  name: "User",
  methods: {
    deslogar() {
      this.$store.dispatch("deslogarUsuario");
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
aside {
  width: calc(100% - 15px);
  margin-top: 20px;
  margin-right: 40px;
}
.vs-button {
  display: flex;
  width: calc(100% - 20px);
  margin: 10px 10px;
  text-align: left;
}
.content {
  margin-top: 25px;
}
.sidebarx {
  align-items: flex-start;
}
</style>