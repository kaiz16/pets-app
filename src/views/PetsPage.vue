<template>
  <section>
    <div v-for="(pet, index) in pets" v-bind:key="pet.id">
      <img v-bind:src="getImage(pet)" alt="" />
      <p>{{ pet.name }}</p>
      <button v-on:click="deletePet(index)">Delete</button>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    pets: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getImage(pet) {
      if (pet.type === "dog") {
        return "https://dogtime.com/assets/uploads/2011/03/puppy-development.jpg";
      } else if (pet.type === "cat") {
        return "https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg";
      }
    },
    deletePet(index) {
      this.$emit('deletePet', index)
    },
  },
};
</script>

<style scoped>
/* Scopes the styling for this component */
section {
  display: flex;
  flex-direction: column;
}

section div {
  margin: 10px;
}

img {
  max-width: 10rem;
}
</style>
