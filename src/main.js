import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import JwPagination from 'jw-vue-pagination';
import "./sass/main.scss";

Vue.component('jw-pagination', JwPagination);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
