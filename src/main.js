import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Main from './views/Main';
import Instagram from './views/Instagram';
import Pinterest from './views/Pinterest';

const routes = [
  { path: '/', component: Main },
  { path: '/instagram', component: Instagram },
  { path: '/bookcover', component: Pinterest, props: {msg: '북커버'}},
  { path: '/other', component: Pinterest, props: {msg: '기타'}}
];

const router = new VueRouter({
  routes // `routes: routes`의 줄임
})

Vue.use(VueRouter);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');