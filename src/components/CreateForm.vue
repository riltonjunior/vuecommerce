<template>
  <div>
    <vs-input type="text" label="Name" name="name" size="large" v-model="displayName" autofocus></vs-input>
    <vs-input type="email" label="Email" name="email" size="large" v-model="email"></vs-input>
    <vs-input type="password" label="Password" name="password" size="large" v-model="password"></vs-input>
    <vs-input
      type="text"
      label="Postal Code"
      name="postalCode"
      size="large"
      @keyup="fillCep"
      v-model="postalCode"
    ></vs-input>
    <vs-input type="text" label="Address" name="address" size="large" v-model="address"></vs-input>
    <vs-input
      type="text"
      label="Complement"
      name="complementInfo"
      size="large"
      v-model="complementInfo"
    ></vs-input>
    <vs-input type="text" label="State" name="state" size="large" v-model="state"></vs-input>
    <vs-input type="text" label="City" name="city" size="large" v-model="city"></vs-input>
    <slot></slot>
  </div>
</template>

<script>
import { mapFields } from "@/helpers";
import { getCep } from "@/services";
export default {
  name: "CreateForm",
  data() {
    return {
      //   user: {
      //   displayName: "",
      //   email: "",
      //   password: "",
      //   address: "",
      //   postalCode: "",
      //   complementInfo: "",
      //   state: "",
      //   city: ""
      //   }
    };
  },
  computed: {
    ...mapFields({
      fields: [
        "displayName",
        "email",
        "password",
        "address",
        "postalCode",
        "complementInfo",
        "state",
        "city"
      ],
      base: "user",
      mutation: "UPDATE_USER"
    })
    // displayName: {
    //   get() {
    //     return this.$store.state.user.displayName;
    //   },
    //   set(newValue) {
    //     return this.$store.commit("UPDATE_USER", { displayName: newValue });
    //   }
    // }
  },
  methods: {
    fillCep() {
      const cep = this.postalCode.replace(/\D/g, "");
      if (cep.length === 8) {
        getCep(cep).then(response => {
          console.log(response);
          this.address = response.data.logradouro;
          this.state = response.data.uf;
          this.city = response.data.localidade;
        });
      }
    }
  }
};
</script>

<style scoped>
div {
  width: 100%;
  margin-bottom: 10px;
}
</style>