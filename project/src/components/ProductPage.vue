<template>
   <RouterLink
      :to="{ name: 'cart' }"
      class="product__cart grid__item"
      aria-label="go to cart page"
   >
      Go to cart
   </RouterLink>

   <div class="product grid" v-if="product">
      <img
         :src="product.image"
         :alt="product.title"
         class="product__image grid__item"
      />

      <h2 class="product__title grid__item">
         {{ product.title }}
      </h2>

      <p class="product__description grid__item">
         {{ information }}
         <br />
         {{ product.description }}
      </p>

      <button
         class="product__add grid__item"
         @click="addToCart(product)"
         :aria-label="product.title"
      >
         Buy for ${{ product.price }}
      </button>
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
         const url = `https://fakestoreapi.com/products/${this.id}`; //
         const response = await fetch(url);
         const result = await response.json();

         // storing all the api data as json in empty array
         this.product = result;
      },

      addToCart(product) {
         this.$store.commit("addProductToCart", product);
      },
   },
};
</script>

<style>
.product {
      margin-top: 50px;
      grid-template-columns: repeat(12, 1fr);
   }

   .product__image {
      order: 4;
      grid-column: 6;
      width: 500px;
      height: 500px;
      margin-top: -100px;
   }

   .product__title {
      order: 1;
      grid-column: 6;
      margin-top: -30px;
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

   .product__add {
      grid-column: 3;
      color: black;
      background: white;
      width: 150px;
      border-radius: 40px;
      padding-left: 15px;
   }


/* Tablet Screen */
@media only screen and (max-width: 1201px) {
   .product {
      margin-top: 50px;
      grid-template-columns: repeat(3, 1fr);
   }

   .product__title {
      order: 1;
      grid-column: 2;
      margin: -20px;
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

   .product__add {
      position: absolute;
      left: 15%;
      top: 40%;
   }
}

/* Mobile */
@media only screen and (max-width: 800px) {
   .product {
      margin-top: 50px;
      grid-template-columns: repeat(1, 1fr);
   }

   .product__title {
      order: 1;
      margin: -20px;
   }

   .product__image {
      order: 2;
      width: 300px;
      margin-left: 80px;
      height: 300px;
   }

   .product__description {
      order: 3;
      grid-column: 1;
      grid-row: 1;

   }

   .product__add {
      order: 5;
      grid-column: 1;

      color: black;
      background: white;
      width: 150px;
      border-radius: 40px;
      padding-left: 15px;
   }
}


</style>
