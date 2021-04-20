<template>
  <div id="app">
    <nav-bar />
    <router-view />
    <app-footer />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar/NavBar.vue";
import AppFooter from "@/components/Layout/AppFooter.vue";
export default {
  components: { NavBar, AppFooter },
  created() {
    this.$store.dispatch("getGenreList");
  },
};
</script>
<style></style>
