import Vue from 'vue'
import App from './App.vue'

//import store from "./store";
//import  VueRouter from 'vue-router';
//import routes from "./route";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

//const router = new VueRouter({
//  routes: routes,
//  mode: history,
//  })
//Vue.config.productionTip = false


// new Vue({
//     router
//     render: h => h(App),

// }).$mount('#app')

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')