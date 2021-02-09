import Vue from 'vue'
import VueRouter from 'vue-router'

import vosCatalog from '../components/vos-catalog.vue'
import vosCart from '../components/vos-cart.vue'

Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: vosCatalog
    },
    {
      path: '/cart',
      name: 'cart',
      component: vosCart,
      props: true
    }
  ]
});

export default router;