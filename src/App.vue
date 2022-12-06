<template>
  <div id="app">
    <AppHeader />
    <ProductList />
    <Footer />
    <router-view />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import ProductList from "./components/ProductList.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    ProductList,
    Footer
  },
};
</script>