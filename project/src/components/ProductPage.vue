<template>
   <div class="product__container" v-if="product">
      <img :src="product.image" />
         {{ product.title }}
      <button @click="addProductToCart(product)">
         Add To Cart 
      </button>
   </div>
</template>

<script>
export default {
   props: ['id'],

   data() {
      return {
         product: [],
      };
   },

   created() {
      this.fetchStoreApi();
   },

   methods: {
      async fetchStoreApi() {
         const url = `https://fakestoreapi.com/products/${this.id}`;
         const response = await fetch(url);
         const results = await response.json();

         this.product = results;
      },

      addProductToCart(product) {
         this.$store.commit('addToCart', product)
      },
   },
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
