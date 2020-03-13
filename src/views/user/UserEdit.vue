<template>
  <section>
    <h2>Editar usuário</h2>
    <CreateForm>
      <vs-button @click.prevent="updateUser" size="large">Update user</vs-button>
    </CreateForm>
  </section>
</template>

<script>
import CreateForm from "@/components/CreateForm.vue";
import { api } from "@/services.js";
export default {
  name: "UserEdit",
  components: {
    CreateForm
  },
  methods: {
    updateUser() {
      api
        .put(`/usuario/${this.$store.state.user.id}`, this.$store.state.user)
        .then(() => {
          this.$store.dispatch("getUser");
          this.$router.push({ name: "User" });
          this.$vs.notify({
            title: "Success",
            // text: err.response,
            color: "success"
          });
        })
        .catch(err => {
          this.$vs.notify({
            title: "Error",
            text: err.response,
            color: "danger"
          });
        });
    }
  }
};
</script>

<style scoped>
section {
  width: calc(100% - 80px);
}
</style>