<template>
   <div class="cart">
      <p class="cart__count grid__item">You have {{ itemCount }} item in your cart</p>

      <div class="cart__container grid" v-for="(item, index) in cartItems">
         <img class="cart__image grid__item" :src="item.image" :alt="item.title" />

         <div class="cart__information grid__item">
            <span class="cart__title">
               {{ item.title }}
            </span>

            <p class="cart__price">
               Price: ${{ item.price }}
            </p>

            <button class="cart__remove " @click="removeItem(index)">
               Remove this product
            </button>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   computed: {
      cartItems() {
         return this.$store.getters.getProducts;
      },

      itemCount() {
         return this.$store.getters.getItemCount;
      },
   },

   methods: {
      removeItem(itemIndex) {
         this.$store.commit("removeProduct", itemIndex);
      },
   },
};
</script>

<style>
.cart {
   position: relative;
   top: 50px;
   height: 100vh;
   width: 100vw;
}

.dark + .cart {
   position: relative;
   top: 50px;
   height: 100vh;
   width: 100vw;
   background: #15202b;
   color: white;
}

.cart__information {
   margin-top: 50px;
   grid-column: span 2;
}

.cart__image {
   height: 250px;
   width: 250px;
   grid-column: 5 / 7;
}

.dark .cart__remove {
   color: white;
}

.cart__remove {
   height: 35px;
   border: none;
   margin-top: -5px;
   color: red;
}
</style>
