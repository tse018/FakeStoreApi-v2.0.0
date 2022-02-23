<template>
   <div class="product__container" v-if="product">
      <img :src="product.image" />
         {{ product.title }}

         {{ product.price }}

      <button @click="addToCart(product)">
         Add To Cart 
      </button>
   </div>
</template>

<script>
export default {
   props: {
      id: { type: String },
   },

   data() {
      return {
         product: [],
      };
   },

   created() {
      this.fetchProductApi();
   },

   methods: {
      async fetchProductApi() {
         const url = `https://fakestoreapi.com/products/${this.id}`;
         const response = await fetch(url);
         const result = await response.json();

         this.product = result;
      },

      addToCart(product) {
         this.$store.commit('addProductToCart', product)
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


img {
   width: 300px;
   height: 300px;
}
</style>
