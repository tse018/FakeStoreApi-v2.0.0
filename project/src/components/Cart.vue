<template>
   <div class="cart">
      <div class="cart__item-count">
         {{ itemCount }}
      </div>

      <div class="cart__item" v-for="(item, index) in cartItems">
         <span>
            {{ item.title  }}
         </span>

         <button class="cart__item-remove" @click="removeItem(index)">

         <img :src="item.image" :alt="item.title" />
            X
         </button>
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
      }
   },

   methods: {
      removeItem(itemIndex) {
         this.$store.commit('removeProduct', itemIndex)
      }
   }

}
</script>

<style>

</style>