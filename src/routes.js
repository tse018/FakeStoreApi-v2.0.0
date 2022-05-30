import Home from './views/Home.vue';
import Product from './views/Product.vue';
import Cart from './views/Cart.vue';

export default [
      { name: 'product', path: '/product/:id',              component:  Product},
      { name: 'cart',    path: '/cart',                     component: Cart},
      { name: 'home',    path: '/',                         component:  Home},
]
