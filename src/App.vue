<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view
      v-bind:pets="pets"
      v-on:addPet="addPet($event)"
      v-on:deletePet="deletePet($event)"
    ></router-view>
  </div>
</template>

<script>
import NavBar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
  data() {
    return {
      pets: [],
    };
  },
  mounted() {
    let pets = localStorage.getItem("pets");
    if (pets) {
      // Anything that's not string should be parsed before restoring
      this.pets = JSON.parse(pets);
    }
  },
  watch: {
    pets: {
      handler() {
        // Anything that's not string should be stringified before storing in the localStorage
        localStorage.setItem("pets", JSON.stringify(this.pets));
      },
    },
  },
  methods: {
    addPet(pet) {
      this.pets.push(pet);
      this.$router.push({
        name: "Pets",
      });
    },
    deletePet(index) {
      this.pets.splice(index, 1);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
