<template>
  <ul>
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/add-a-pet">Add a pet</router-link>
    </li>
    <li>
      <router-link to="/about">About</router-link>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style>
ul {
  display: flex;
  justify-content: space-around;
}

ul li {
  list-style: none;
}
</style>
