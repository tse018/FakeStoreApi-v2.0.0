<template>
   <div class="cart">
      <div class="cart__item-count">
         {{ itemCount }}
      </div>

      <div class="cart__item" v-for="(item, index) in cartItems">
         <span>
            {{ item.name }}
         </span>

         <button class="cart__item-remove" @click="removeItem(index)">
            X
         </button>
      </div>
   </div>
</template>

<script>
export default {
   computed: {
      cartItems() {
         return this.$store.getters.getItems;
      },

      itemCount() {
         return this.$store.getters.getItemCount;
      }
   },

   methods: {
      removeItem(itemIndex) {
         this.$store.commit('removeItem', itemIndex)
      }
   }

}
</script>

<style>

</style>