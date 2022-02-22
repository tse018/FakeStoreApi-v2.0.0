<template>
   <ProductPage />
</template>

<script>
import ProductPage from '../components/ProductPage.vue';
import Cart from '../components/Cart.vue';

export default {
   components: {
      ProductPage,
      Cart,
   }
};
</script>

<style>
.product__button {
   grid-column: 5 / 9;
   margin-top: 20px;
   background: none;
   font-size: 30px;
}

.dark .product__button {
   grid-column: 5 / 9;
   margin-top: 20px;
   background: none;
   color: white;
   font-size: 30px;
}

.product__container {
   margin-top: 15px;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   column-gap: 20px;
   row-gap: 20px;
}

.product__item {
   background-color: transparent;
}

img {
   width: 300px;
   height: 300px;
}
</style>
