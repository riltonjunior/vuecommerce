<template>
  <section>
    <!-- <vs-row vs-align="center" vs-type="flex" vs-justify="center"> -->
    <!-- <vs-col vs-w="6"> -->
    <h2>Create Account</h2>
    <vs-button v-if="!create" @click.prevent="createdHandle">Create</vs-button>
    <CreateForm v-else>
      <vs-button @click.prevent="createUser">Create user</vs-button>
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
      console.log(this.create);
      return (this.create = true);
    }
  }
};
</script>

<style scoped>
h2 {
  margin-bottom: 10px;
}
</style>