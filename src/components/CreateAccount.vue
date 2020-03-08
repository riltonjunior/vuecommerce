<template>
  <section>
    <!-- <vs-row vs-align="center" vs-type="flex" vs-justify="center"> -->
    <!-- <vs-col vs-w="6"> -->
    <h2>Create Account</h2>
    <vs-button v-if="!create" @click.prevent="createdHandle" size="large">Create</vs-button>
    <CreateForm v-else>
      <vs-button size="large" @click.prevent="createUser">Create user</vs-button>
      <vs-button size="large" @click.prevent="logIn">Login</vs-button>
    </CreateForm>
    <!-- </vs-col> -->
    <!-- </vs-row> -->
  </section>
</template>

<script>
import CreateForm from "@/components/CreateForm.vue";

export default {
  name: "CreateAccount",
  components: {
    CreateForm
  },
  data() {
    return {
      create: false
    };
  },
  methods: {
    async createUser() {
      try {
        await this.$store.dispatch("createUser", this.$store.state.user);
        await this.$store.dispatch("getUser", this.$store.state.user.email);
        this.$router.push({ name: "Profile" });
      } catch (error) {
        console.log(error);
      }
    },
    createdHandle() {
      // console.log(this.create);
      // this.$store.dispatch("updateCreated");
      this.$store.commit("UPDATE_CREATED", true);
      return (this.create = true);
    },
    logIn() {
      this.$store.commit("UPDATE_CREATED", false);
      return (this.create = false);
    }
  }
};
</script>

<style scoped>
h2 {
  margin-bottom: 10px;
}
</style>