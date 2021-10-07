import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import PetsPage from "./views/PetsPage.vue";
import AddAPet from "./views/AddPetPage.vue";
import About from "./views/AboutPage.vue";
const routes = [
  {
    path: "/",
    name: "Pets",
    component: PetsPage,
  },
  {
    path: "/add-a-pet",
    name: "Add Pet",
    component: AddAPet,
  },
  {
    path: "/about",
    name: "About Page",
    component: About,
  },
];
Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: "history",
});
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
