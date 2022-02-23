<template>
   <div class="product grid" v-if="product">

      <div class="product__container grid__item">
         <img :src="product.image" :alt="product.title" class="product__image grid__item" />
         
         <h2 class="product__title grid__item">
            {{ product.title }}
         </h2>

         <div class="product__link grid__item">
            <RouterLink :to="{ name: 'home' }" class="product__home grid__item">
               Continue Shopping
            </RouterLink> 
         </div>
      </div>

      <div class="product__detail-container grid__item">
         <h2 class="product__detail-title">
            {{ details }}
         </h2>

         <p class="product__description grid__item">
            {{ product.description }}
         </p>

         <button class="product__add grid__item" @click="addToCart(product)">
            Buy for ${{ product.price }}
         </button>
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
         product: [],
         details: 'Product Description',
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

<style scoped>
.dark + .product {
   margin-top: 50px;
   background-color: #15202b;
   color: white;
   height: 100vh;
}

.product {
   margin-top: 50px;
}

.product__container {
   grid-column: 5 / 8;
}

.product__home {
   text-decoration: none;
   color: black;
   font-style: italic;
   background-color: whitesmoke;
}

.product__image {
   width: 300px;
   height: 300px;
}

.product__detail-container {
   grid-column: 8 / 11;
   margin-top: 50px;
}

.product__detail-title {
   font-size: 30px;
}

.product__add {
   color: black;
   background: white;
   width: 150px;
   border-radius: 40px;
   padding-left: 15px;
}

.product__add:hover {
   background-color: bisque;
}
</style>
