<template>
   <template v-if="loading"> 
      loading...
   </template>

   <template v-else>
      <div v-for="product in data">
         <h2>
            {{ product.title }}
         </h2>

         <img :src="product.images[0]" :alt="product.title" class="products__image" />

         <p>
            {{ product.description }}
         </p>

         <p class="products.stock">
            {{ product.stock }}
         </p>

         <button>
            {{ product.price }}.-
         </button>
      </div>
   </template>
</template>

<script>
export default {
   data() {
      return {
         data: [],
         error: "",
         loading: true,
      };
   },

   created() {
      this.fetchProducts();
   },

   mounted() {
      this.$route.params.id.replace("%20", "-")
   },

   methods: {
      async fetchProducts() {
         const url = `https://dummyjson.com/products`;
         const response = await fetch(url);
         try {
            await this.handleResponse(response);
         } catch (error) {
            this.error = error.message;
         }

         const changeUrl = this.data.filter((item) => {
               return item.title.includes(
                  this.$route.params.id
               )
         });

         this.data = changeUrl;
      },

      async handleResponse(response) {
         if (response.status >= 200 && response.status < 300) {
            // fetch api data into json
            const { products }  = await response.json();
            this.data = products;
            this.loading = false;
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
         }
      },
   },
};
</script>

<style>
</style>
