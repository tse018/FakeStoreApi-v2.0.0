import Home from './views/Home.vue';
import Product from './views/Product.vue';

export default [
      { name: 'product', path: '/:id', props: true,   component:  Product},
      { name: 'home', path: '/',                      component:  Home},
]