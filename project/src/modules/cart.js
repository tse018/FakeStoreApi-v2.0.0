export default {
   state() {
      return {
         cart: [],
      };
   },

   mutations: {
      addProductToCart(state, product) {
         state.cart.push(product);
      },

      removeProduct(state, itemIndex) {
         state.cart.splice(itemIndex, 1);
      },
   },

   getters: {
      getProducts(state) {
         return state.cart;
      },

      getItemCount(state) {
         return state.cart.length;
      },
   },
};
