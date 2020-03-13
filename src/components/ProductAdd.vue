<template>
  <section>
    <!-- <h2>Add new product</h2> -->
    <div class="white-box">
      <vs-input
        type="text"
        label="Nome do produto"
        name="name"
        size="large"
        v-model="product.name"
        autofocus
      ></vs-input>
      <vs-input type="number" label="Preço (R$)" name="price" size="large" v-model="product.price"></vs-input>
      <vs-textarea label="Descrição" v-model="product.description" />
      <vs-upload multiple text="Enviar fotos" action="#" @on-success="successUpload" />
      <vs-button size="large" @click.prevent="addProduct">Adicionar produto</vs-button>
      <vs-button size="large" color="dark" @click="clearForm">Cancelar</vs-button>
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";
export default {
  name: "ProductAdd",
  data() {
    return {
      product: {
        name: "",
        price: "",
        description: "",
        pics: null,
        sold: false
      }
    };
  },
  methods: {
    formatProduct() {
      this.product.user_id = this.$store.state.user.id;
    },
    successUpload() {
      this.$vs.notify({
        color: "success",
        title: "Upload Success",
        text: "Lorem ipsum dolor sit amet, consectetur"
      });
    },
    clearForm() {
      this.product.name = "";
      this.product.price = "";
      this.product.description = "";
      this.product.pics = null;
    },
    addProduct() {
      this.formatProduct();
      api.post("/produto", this.product).then(() => {
        this.$store.dispatch("getUserProducts");
        // this.sucessUpload();
        this.$vs.notify({
          color: "success",
          title: this.product.name + " adicionado com sucesso"
        });
        this.clearForm;
      });
    }
  }
};
</script>

<style scoped>
p {
  margin-bottom: 10px;
}
.white-box {
  width: 100%;
  background: #fff;
  margin-top: 5px;
  padding-right: 5px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-column-gap: 5px;
  -moz-column-gap: 5px;
  column-gap: 5px;
  padding-top: 1px;
  border-radius: 10px;
  margin-bottom: 32px;
}
.vs-con-input-label,
.vs-con-textarea {
  margin-left: 15px;
  margin-top: 20px;
}
.vs-con-textarea {
  /* margin-top: 20px; */
  width: calc(100% - 30px);
}
.vs-button {
  margin-left: 15px;
  margin-bottom: 20px;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}
.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}
</style>