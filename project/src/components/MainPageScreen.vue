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
export default {
   props: {
      id: { type: String },
   },

   data() {
      return {
         products: [],
      };
   },

   created() {
      this.fetchStoreApi();
   },

   methods: {
      async fetchStoreApi() {
         const url = 'https://fakestoreapi.com/products/';
         const response = await fetch(url);
         const results = await response.json();

         this.products = results;
      },
   },
};
</script>

<style>
.product {
   margin-top: 30px;
   grid-template-columns: repeat(4, 1fr);
}

.dark + .product {
   margin-top: 30px;
   grid-template-columns: repeat(4, 1fr);
   background-color: black;
}

.product__image, img {
   width: 250px;
   height: 300px;
}
</style>
