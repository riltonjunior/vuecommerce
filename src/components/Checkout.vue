<template>
  <section>
    <h2>Endereço de Envio - {{product.name}}</h2>
    <CreateForm>
      <vs-button size="large" @click.prevent="checkoutAction">Finalizar Compra</vs-button>
    </CreateForm>
    <!-- {{product}} -->
  </section>
</template>

<script>
import CreateForm from "@/components/CreateForm.vue";
import { mapState } from "vuex";
import { api } from "@/services.js";

export default {
  name: "Checkout",
  components: {
    CreateForm
  },
  props: ["product"],
  methods: {
    checkoutAction() {
      if (this.$store.state.login) {
        this.createTransaction();
      } else {
        this.createUser();
      }
    },
    async createUser() {
      try {
        await this.$store.dispatch("createUser", this.$store.state.user);
        await this.$store.dispatch("getUser", this.$store.state.user.email);
        await this.createTransaction();
        this.$vs.notify({
          color: "success",
          title: this.product.name + " comprado com sucesso"
        });
      } catch (error) {
        console.log(error);
        this.$vs.notify({
          color: "danger",
          title: "Erro",
          text: error
        });
      }
    },
    createTransaction() {
      return api.post("/transacao", this.buy).then(() => {
        this.$router.push({ name: "Buys" });
        this.$vs.notify({
          color: "success",
          title: this.product.name + " comprado com sucesso"
        });
      });
    }
  },
  computed: {
    ...mapState(["user"]),
    buy() {
      return {
        buyer_id: this.user.email,
        seller_id: this.product.user_id,
        product: this.product,
        address: {
          address: this.user.address,
          postalCode: this.user.postalCode,
          complementInfo: this.user.complementInfo,
          state: this.user.state,
          city: this.user.city
        }
      };
    }
  }
};
</script>

<style>
</style>