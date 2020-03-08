<template>
  <section>
    <vs-row vs-w="12" class="full-row">
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="center" vs-w="3">
        <vs-sidebar
          static-position
          default-index="1"
          color="primary"
          class="sidebarx"
          spacer
          hidden-background
        >
          <div class="header-sidebar" slot="header">
            <vs-avatar size="70px" src="https://randomuser.me/api/portraits/men/85.jpg" />

            <h4>
              {{$store.state.user.displayName}}
              <!-- <vs-button color="primary" icon="more_horiz" type="flat"></vs-button> -->
            </h4>
          </div>

          <vs-sidebar-item index="1" icon="store" :to="{name:'User'}">Produtos</vs-sidebar-item>

          <vs-sidebar-item index="2" icon="gavel" :to="{name:'Buys'}">Compras</vs-sidebar-item>

          <vs-sidebar-item index="3" icon="gavel" :to="{name:'Sells'}">Vendas</vs-sidebar-item>

          <vs-divider icon="person" position="left">Editar usuário</vs-divider>
          <vs-sidebar-item index="4" icon="account_box" :to="{name:'Edit'}">Editar usuário</vs-sidebar-item>

          <div class="footer-sidebar" slot="footer">
            <vs-button icon="reply" color="danger" type="flat" @click.prevent="deslogar">log out</vs-button>
          </div>
        </vs-sidebar>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="center" vs-w="9">
        <router-view></router-view>
      </vs-col>
    </vs-row>
  </section>
</template>

<script>
export default {
  name: "Profile",
  methods: {
    deslogar() {
      this.$store.dispatch("deslogarUsuario");
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
.vs-sidebar {
  overflow: hidden;
  height: 500px;
  position: relative;
}
.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}
.header-sidebar .h4 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.header-sidebar > button {
  margin-left: 10px;
}
.footer-sidebar {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
}
.footer-sidebar > button {
  border: 0px solid rgba(0, 0, 0, 0) !important;
  border-left: 1px solid rgba(0, 0, 0, 0.07) !important;
  border-radius: 0px !important;
}
.full-row {
  height: 100%;
}
.sidebarx {
  width: 100%;
}
.vs-sidebar.vs-sidebar-staticPosition {
  position: absolute !important;
  height: 86% !important;
  top: 60px;
}
</style>