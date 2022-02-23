<template>
   <div class="product grid" v-if="product">
      <RouterLink :to="{ name: 'home' }" class="product__home grid__item" aria-label="go back to shopping page">
         Keep shopping
      </RouterLink>

      <div class="product__container grid__item">
         <img :src="product.image" :alt="product.title" class="product__image grid__item" />
         
         <h2 class="product__title grid__item">
            {{ product.title }}
         </h2>

         <div class="product__link grid__item">
            <button class="product__add grid__item" @click="addToCart(product)" :aria-label="product.title">
               Buy for ${{ product.price }}
            </button>
         </div>
      </div>

      <div class="product__detail-container grid__item">
         <h2 class="product__detail-title">
            Product Details
         </h2>

         <p class="product__description grid__item">
            {{ product.description }}
         </p>
      </div>  

      <RouterLink :to="{ name: 'cart' }" class="product__cart grid__item" aria-label="go to cart page">
         Go to cart
      </RouterLink> 
   </div>
</template>

<script>
export default {
   props: {
      // getting route id params
      id: { type: String },
   },

   data() {
      return {
         // fetching items from API in here
         product: [], 
      };
   },

   created() {
       // before vue creating want to fetch the api so it will be shown 
      this.fetchProductApi();
   },

   methods: {
      async fetchProductApi() {
         // litteral string the url endpoint to match params id from routes
         const url = `https://fakestoreapi.com/products/${this.id}`; //
         const response = await fetch(url);
         const result = await response.json();

         // storing all the api data as json in empty array
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

.product__home {
   grid-column: 1 / 3;
   text-decoration: none;
   color: red;
   font-style: italic;
   font-size: 26px;
}

.product__container {
   grid-column: 5 / 8;
}

.product__cart {
   grid-column: span 2;
   text-decoration: none;
   color: green;
   font-style: italic;
   font-size: 26px;
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
   margin-top: -35px;
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
