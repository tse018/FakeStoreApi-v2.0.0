<template>
   <div class="products grid">
      <div v-for="product in products" :key="product.id" class="products__container grid__item">
         <RouterLink :to="{name: 'product', params: { id: product.id }}" :aria-label="product.title">
            <img :src="product.image" :alt="product.title" class="products__image" />
         </RouterLink>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         // api products in this array  
         products: [],
      };
   },

   created() {
      // before vue creating want to fetch the api so it will be shown on the web page when loaded
      this.fetchStoreApi();
   },

   methods: {
      async fetchStoreApi() {
         const url = 'https://fakestoreapi.com/products/';
         const response = await fetch(url);
         // fetch api data into json
         const results = await response.json();

         //products will get the products data as json
         this.products = results;
      },
   },
};
</script>

<style scoped>
.products {
   margin-top: 50px;
   grid-template-columns: repeat(4, 1fr);
}

.dark + .products {
   padding-top: 30px;
   grid-template-columns: repeat(4, 1fr);
   background-color: black;
}

.products__container:hover {
   padding: 50px;
}

.products__image, img {
   width: 200px;
   height: 300px;
}
</style>

