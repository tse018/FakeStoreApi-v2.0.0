export default {
   state() {
      return {
         products: [],
         cart: [],
      };
   },

   mutations: {
      setProducts(state, products) {
         state.products = products;
      },

      addToCart(state, product) {
         state.cart.push(product);
      },

      removeItem(state, itemIndex) {
         state.cart.splice(itemIndex, 1);
      }
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

      getItems(state) {
         return state.cart;
      },

      getItemCount(state) {
         return state.cart.length;
      },
   },
};
