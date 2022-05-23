<template>
   <main class="product grid" v-if="product">
      <img :src="product.image" :alt="product.title" class="product__image grid__item" />

      <h2 class="product__title grid__item">
         {{ product.title }}
      </h2>

      <div class="product__description grid__item">
         <p class="product__desciption--header">
            {{ information }}
         </p>
         <br />
         <p class="product__description--content">
            {{ product.description }}
         </p>
      </div>

      <button class="product__add grid__item" @click="addToCart(product)">
         Buy for ${{ product.price }}
      </button>
   </main>
</template>

<script>
export default {
   data() {
      return {
         // fetching items from API in here
         product: [],
         information: "Product information",
      };
   },

   created() {
      // before vue creating want to fetch the api so it will be shown
      this.fetchProductApi();
   },

   methods: {
      async fetchProductApi() {
         // litteral string the url endpoint to match params id from routes
         const url = `https://fakestoreapi.com/products/${this.$route.params.id}`; // 
         const response = await fetch(url);
         const result = await response.json();

         // storing all the api data as json in empty array
         this.product = result;
      },

      // @click on add button will trigger and run addProuctToCart function from Vuex (mutation)
      addToCart(product) {
         this.$store.commit("addProductToCart", product);
      },
   },
};
</script>

<style>
.product__cart {
   position: absolute;
   top: 30%;
}

.product__image {
      margin-top: -40px;
      order: 4;
      grid-column: 6;
      width: 500px;
      height: 500px;
   }

   .product__title {
      order: 1;
      grid-column: 6;
      font-size: var(--desktop-title);
      margin-top: -20px;
   }

   .product__detail {
      order: 2;
      grid-column: 7 / 11;
      margin: 0 0 0 20px;
   }

   .product__description {
      order: 6;
      grid-column: 7 / 11;
   }

   .product__desciption--header {
      font-size: var(--desktop-title);
   }

   .product__add {
      position: absolute;
      top: 350px;
      left: 250px;
      color: black;
      background: white;
      width: 150px;
      border-radius: 40px;
      padding-left: 15px;
   }

   .product__add:hover {
      background-color: beige;
   }


/* Tablet Screen */
@media only screen and (max-width: 1300px) {
   .product {
      margin-top: 50px;
      grid-template-columns: repeat(3, 1fr);
   }

   .product__title {
      order: 1;
      grid-column: 2;
      margin: -20px;
      font-size: var(--tablet-title);
   }

   .product__image {
      order: 2;
      grid-column: 2;
      margin: -50px 0 0 0;
      width: 400px;
      height: 500px;
   }

   .product__description {
      order: 4;
      grid-column: 3;
      margin: -40px 20px 0 0;
   }

   .product__desciption--header {
      font-size: var(--tablet-title);
   }

   .product__add {
      top: 50%;
   }
}

/* Mobile */
@media only screen and (max-width: 800px) {
   .product {
      margin-top: 50px;
      grid-template-columns: repeat(1, 1fr);
   }

   .product__image {
      width: 300px;
      grid-column: 1;
      margin-left: 200px;
      height: 300px;
   }

   .product__title {
      grid-column: 1;
      margin: -20px;
      font-size: var(--mobile-title);
   }

   .product__description {
      order: 2;
      grid-column: 1;
   }

   .product__desciption--header {
      font-size: var(--mobile-title);
   }

   .product__add {
      margin: 5% 0 0 25%;
      color: black;
      background: white;
      width: 150px;
      border-radius: 40px;
      padding-left: 15px;
   }
}

/* Mopbile */
@media only screen and (max-width: 600px) {
   .product {
      margin-top: 50px;
      grid-template-columns: repeat(1, 1fr);
   }

   .product__image {
      position: relative;
      right: 100px;
      width: 300px;
      height: 300px;
   }

   .product__title {
      grid-column: 1;
      margin: -20px;
      font-size: var(--mobile-title);
   }

   .product__description {
      order: 2;
      grid-column: 1;
   }
   
   .product__add {
      margin: 10%;
      color: black;
      background: white;
      width: 150px;
      border-radius: 40px;
      padding-left: 15px;
   }
}
</style>
