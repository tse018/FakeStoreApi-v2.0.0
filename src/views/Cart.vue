<template>
   <div v-for="product in cartInCart">
      <h2>
         {{ product.title }}
      </h2>

      <img :src="product.images[0]" :alt="product.title" class="cart__image" />

      
   </div>

</template>

<script>
export default {
   computed: {
      cartInCart() {
         return this.$store.getters.getProducts;
      },
   }

}
</script>

<style>

</style>