export default {
   state() {
      return {
         products: [],
      };
   },

   mutations: {
      setProducts(state, products) {
         state.products = products;
      },
   },

   actions: {
      fetchAllProducts(products) {
         return fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
               products.commit("setProducts", data);
            })
            .catch((err) => console.error(err));
      },
   },

   getters: {
      products(state) {
         return state.products;
      },
   },
};
