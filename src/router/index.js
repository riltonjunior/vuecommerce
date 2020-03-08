import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import Login from "../views/Login.vue";
import Profile from "../views/user/Profile.vue";
import UserProducts from "../views/user/UserProducts.vue";
import UserBuys from "../views/user/UserBuys.vue";
import UserEdit from "../views/user/UserEdit.vue";
import UserSells from "../views/user/UserSells.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/product/:id",
    name: "Product",
    component: Product,
    props: true
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/profile",
    // name: "Profile",
    component: Profile,
    children: [
      {
        path: "",
        name: "User",
        component: UserProducts
      },
      {
        path: "buys",
        name: "Buys",
        component: UserBuys
      },
      {
        path: "sells",
        name: "Sells",
        component: UserSells
      },
      {
        path: "edit",
        name: "Edit",
        component: UserEdit
      }
    ],
    scrollBehavior() {
      return window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
