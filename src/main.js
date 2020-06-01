import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'

// Vue.use(VueRouter)

Vue.config.productionTip = false

// const routes = [
//   { path: '/foo', component: Foo },
//   { path: '/bar', component: Bar }
// ]
//
// const router = new VueRouter({
//   routes // сокращённая запись для `routes: routes`
// })

new Vue({
  // router,
  render: h => h(App),
}).$mount('#app')
