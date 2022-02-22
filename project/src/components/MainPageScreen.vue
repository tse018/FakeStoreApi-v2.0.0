<template>
   <div class="product grid">
      <div v-for="product in products" :key="product.id" class="product__container grid__item">
         <RouterLink :to="{name: 'product', params: { id: product.id }}">
            <img :src="product.image" :alt="product.title" class="product__image" />
         </RouterLink>
      </div>
   </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
   created() {
      this.fetchAllProducts();
   },

   computed: {
      ...mapGetters(["products"]),
   },

   methods: {
      ...mapActions(["fetchAllProducts"]),
   },
};
</script>

<style>
.product {
   margin-top: 60px;
   grid-template-columns: repeat(4, 1fr);
   background-color: none;
}
.product__container {
   background: transparent;
}
.product__image, img {
   width: 300px;
   height: 300px;
}
</style>
