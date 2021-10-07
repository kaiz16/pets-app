import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Pets from './components/Pets.vue'
import AddPet from './components/AddPet.vue'
const routes = [
  {
    path: '/pets',
    name: 'Pets',
    component: Pets
  },
  {
    path: '/add-a-pet',
    name: 'Add Pet',
    component: AddPet
  }
]
Vue.use(VueRouter)


const router = new VueRouter({
  routes: routes,
  mode: 'history'
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
