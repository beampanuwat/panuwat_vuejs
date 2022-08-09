<template>
  <v-app>
    <Header></Header>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  data: () => ({
    //
  }),
  components: { Header },
};
</script>

<style lang="scss" scoped>
#app {
  // text-align: center;
  background-color: rgb(224, 224, 224);
}
</style>
