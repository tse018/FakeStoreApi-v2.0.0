<template>
   <header class="header">
      <RouterLink :to="{ name: 'home' }" class="header__title">
         Fake Store API
      </RouterLink>
      
      <RouterLink :to="{ name: 'cart' }" class="header__cart" aria-label="click to cart page">
         <Icons :icon="'cart'" class="header__menu" />
      </RouterLink>
   </header>
</template>

<script>
import Icons from "../components/Icons.vue";

export default {
   components: {
      Icons,
   },

   methods: {
      toggleDetails() {
         this.menuBar = !this.menuBar;
      },
   },
};
</script>

<style>
.header {
   border-bottom: 2px solid gainsboro;
   width: 100vw;
   display: flex;
   justify-content: space-between;
}

.header__title {
   font-size: 28px;
   padding: 20px;
   margin-left: 50px;
   text-decoration: none;
   color: black;
   font-style: italic;
}

.header__cart {
   padding: 20px;
}

</style>
