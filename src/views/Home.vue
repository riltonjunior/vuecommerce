<template>
  <div id="home">
    <section class="hero">
      <div class="container">
        <h1>Procurando o melhor lugar para comprar?</h1>
        <ProdutosBuscar class="busca" :produtoPesquisa="pesquisa" />
      </div>
    </section>
    <ProdutosLista class="lista" />
  </div>
</template>

<script>
import ProdutosLista from "@/components/ProdutosLista.vue";
import ProdutosBuscar from "@/components/ProdutosBuscar.vue";

export default {
  name: "Home",
  components: {
    ProdutosLista,
    ProdutosBuscar
  },
  data() {
    return {
      pesquisa: ""
    };
  }
};
</script>
<style lang="scss">
#home {
  // display: flex;
  // flex-direction: column;
  // align-content: center;
  // align-itens: center;
}
.hero {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  background-color: $primary;
  height: 30vh;
  & h1 {
    color: $light;
  }
  & .container {
    margin: auto;
    & .busca {
    }
  }
}
.busca {
  margin-top: 10px;
}
</style>
