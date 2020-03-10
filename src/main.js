import Vue from "vue";
import Vuesax from "vuesax";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Loading from "@/components/layout/Loading.vue";

// Global Settings
Vue.config.productionTip = false;

// Global Components
Vue.component("Loading", Loading);

// Global Visual Imports
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

// Global Filters
Vue.filter("numberPrice", price => {
  price = Number(price);
  if (!isNaN(price)) {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2
    });
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
