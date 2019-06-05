<template>
  <div id="app" class="p-3">
    <router-link to="/" class="text-decoration-none text-dark">
      <h2 class="pt-4 pb-4 text-center">Alligator Swarm</h2>
    </router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getAllDivisions");
  }
};
</script>
