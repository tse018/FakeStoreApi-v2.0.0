<template>
   <header class="header grid">
      <RouterLink :to="{ name: 'cart' }">
         <Icons :icon="'cart'" class="header__menu grid__item" />

         <span class="header__item-count">
            {{ itemCount }}
         </span>
      </RouterLink>

      <RouterLink :to="{ name: 'home' }" class="header__title-container grid__item">
         <h1 class="header__title ">
            {{ title }}
         </h1>
      </RouterLink>
      
      <RouterLink :to="{ name: 'cart' }" class="header__cart grid__item" aria-label="go to cart page">
         Go to cart
      </RouterLink>
   </header>
</template>

<script>
import Icons from "../components/Icons.vue";

export default {
   components: {
      Icons,
   },

   data() {
      return {
         title: "Fake Store API",
         menuBar: false,
         searchField: false,
      };
   },

   computed: {
      itemCount() {
         return this.$store.getters.getItemCount;
      },
   },

   methods: {
      toggleDetails() {
         this.menuBar = !this.menuBar;
      },

      searchMenu() {
         this.searchField = !this.searchField;
      },
   },
};
</script>

<style>
.header {
   position: sticky;
   top: 10px;
}

.header__menu {
   margin-top: 13px;
   cursor: pointer;
}

.header__item-count {
   position: absolute;
   top: 3;
   left: 70;
   font-size: 40px;
   color: red;
}

.header__title-container {
   grid-column: span 3;
   text-decoration-line: none;
}

.dark .header__title {
   font-size: 40px;
   font-style: italic;
   color: white;
}

.header__title {
   font-size: 40px;
   font-style: italic;
   color: black;
}


.header__home {
   position: absolute;
   top: 50%;
   color: black;
   font-size: var(--mobile-title)
}

.header__cart {
   position: absolute;
   top: 50%;
   left: 15%;
   color: black;
   font-size: var(--mobile-title)
}

.header__social-container {
   grid-column: 11;
   margin-top: 13px;
}

.header__social-element {
   cursor: pointer;
}

.header__search {
   grid-column: 8;
   cursor: pointer;
   margin-top: 40px;
}

.header__search-container {
   grid-column: 5 / 8;
   margin-top: 50px;
}

.header__toggle-container {
   grid-column: 12;
   margin-top: 13px;
}
</style>
