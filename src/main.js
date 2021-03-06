import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

export const EventBus = new Vue({
  methods: {
    listEdit: function(memo, index) {
      this.$emit('listEdit', memo, index)
    }
  }
});

new Vue({
  router,
  store,
  beforeCreate() {
    this.$store.dispatch("getMemberInfo");
  },
  render: (h) => h(App),
}).$mount("#app");

console.log();
