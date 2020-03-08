import Vue from "vue";
import Vuesax from "vuesax";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import "vuesax/dist/vuesax.css";
import "material-icons/iconfont/material-icons.css";

Vue.use(Vuesax, {
  theme: {
    colors: {
      primary: "#5b3cc4",
      success: "rgb(23, 201, 100)",
      danger: "rgb(242, 19, 93)",
      warning: "rgb(255, 130, 0)",
      dark: "rgb(36, 33, 69)"
    }
  }
});
Vue.filter("numberPrice", price => {
  // console.log(price);
  price = Number(price);
  // console.log("Depois de number" + price);
  if (!isNaN(price)) {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2
    });
  } else {
    // console.log(price);
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
