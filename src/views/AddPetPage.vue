<template>
  <section>
    <p>Please select your pet's type:</p>
    <input type="radio" id="dog" name="type" value="dog" v-model="type" />
    <label for="dog">Dog</label>
    <input type="radio" id="cat" name="type" value="cat" v-model="type" />
    <label for="cat">Cat</label>
    <p>Name of your pet</p>
    <input type="text" v-model="name" />
    <button v-on:click="submit()">Submit</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      type: "",
    };
  },
  methods: {
    submit() {
      if (!this.type || !this.name) {
        alert("no");
        return;
      }
      this.$emit("addPet", {
        name: this.name,
        type: this.type,
      });
    },
  },
};
</script>

<style></style>
