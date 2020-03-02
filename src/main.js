import Vue from "vue";
import Vuesax from "vuesax";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import "vuesax/dist/vuesax.css";
import "material-icons/iconfont/material-icons.css";

import "@/scss/_variables.scss";

Vue.use(Vuesax, {
  colors: {
    primary: "#5b3cc4",
    success: "rgb(23, 201, 100)",
    danger: "rgb(242, 19, 93)",
    warning: "rgb(255, 130, 0)",
    dark: "rgb(36, 33, 69)"
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
