<template>
  <div v-if="product" class="product">
    <div slot="media">
      <!-- <img v-if="produto.foto" :src="produto.foto[0].src" :alt="produto.foto[0].title" /> -->
      <img class="vs-image avatar" src="https://bulma.io/images/placeholders/480x480.png" />
    </div>
    <div class="content">
      <h3>
        {{product.name}}
        <span>{{product.price | numberPrice}}</span>
      </h3>
      <p>{{product.description}}</p>
    </div>
    <vs-button :to="{name:'Product', params: {id: product.id}}" tag="button">Ver produto</vs-button>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    product: Object
  }
};
</script>

<style scoped>
h3 span {
  font-weight: 100;
  font-size: 12px;
}
.vs-image.avatar {
  max-width: 64px;
  width: 100%;
}
.product > .content {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  /* border: 1px #f00 solid; */
  margin: auto 10px;
}
.product {
  display: flex;
  flex-direction: row;
  /* height: 64px; */
  margin-bottom: 10px;
}
.media {
  flex-direction: column;
  justify-content: center;
  /* border: 1px #f00 solid; */
  margin: 5px;
  align-content: center;
  display: flex;
}
button {
  text-align: center;
  /* margin: 5px; */
  height: 32px;
  margin: auto 10px;
  height: 32px;
}
p {
  margin-bottom: 0px;
}
</style>