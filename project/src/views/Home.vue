<template>
   <div v-if="!error" class="progress" id="PreLoaderBar">
      <div class="indeterminate"></div>
   </div>

   <div v-else>
      <main class="products grid">
         <section
            v-for="product in products"
            :key="product.id"
            class="products__container grid__item"
         >
            <RouterLink
               :to="{ name: 'product', params: { id: product.id } }"
               :aria-label="product.title"
            >
               <img
                  :src="product.image"
                  :alt="product.title"
                  class="products__image"
               />
               <h1 class="products__title">
                  {{ product.title }}
               </h1>
            </RouterLink>
         </section>
      </main>
   </div>
</template>

<script>
export default {

   data() {
      return {
         // api products in this array
         products: [],
         error: "Fetching please be patient",
      };
   },

   created() {
      // before vue creating want to fetch the api so it will be shown on the web page when loaded
      this.fetchStoreApi();
   },

   methods: {
      async fetchStoreApi() {
         const url = "https://fakestoreapi.com/products/";
         const response = await fetch(url);
         try {
            await this.handleResponse(response);
         } catch (error) {
            this.error = error.message;
         }
      },

      async handleResponse(response) {
         if (response.status >= 200 && response.status < 300) {
            // fetch api data into json
            const results = await response.json();
            this.products = results;
         } else {
            if (response.status === 404) {
               throw new Error("Feil med fetching av URL!");
            }
            if (response.status === 401) {
               throw new Error("Ikke authorisert!");
            }
            if (response.status > 500) {
               throw new Error("Server ikke funnet");
            }
            throw new Error("Generetisk feil!");
         }
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

.products__image,
img {
   width: 200px;
   height: 300px;
}

/* Tablet screen */
@media screen and (max-width: 1200px) {
   .products {
      margin-top: 50px;
      grid-template-columns: repeat(2, 1fr);
   }
}

/* Mobile screen */
@media screen and (max-width: 600px) {
   .products {
      margin-top: 50px;
      grid-template-columns: repeat(1, 1fr);
   }
}
</style>
