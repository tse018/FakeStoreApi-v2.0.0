<template>
   <template v-if="loading"> 
      loading...
   </template>

   <template v-else>
      {{ data }}
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

   props: {
      id: {
         type: String
      }
   },

   created() {
      // before vue creating want to fetch the api so it will be shown
      this.fetchProducts();
      //this.$route.path.replace("%20", "-")
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
