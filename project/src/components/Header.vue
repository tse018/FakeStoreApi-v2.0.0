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

      <RouterLink :to="{ name: 'home' }" class="header__home grid__item" aria-label="go to cart page">
         Go back to Home
      </RouterLink>

      <RouterLink :to="{ name: 'cart' }" class="header__cart grid__item" aria-label="go to cart page">
         Go to cart
      </RouterLink>

      <SearchBar v-if="searchField" class="header__search-container grid__item" />

      <Icons :icon="'searchBar'" @searchBar="searchMenu" class="header__search" />

      <ul class="header__social-container grid__item">
         <li class="header__social-element">
            <Icons :icon="'facebook'" />
         </li>

         <li class="header__social-element">
            <Icons :icon="'mail'" />
         </li>

         <li class="header__social-element">
            <Icons :icon="'twitter'" />
         </li>
      </ul>

      <div class="header__toggle-container grid__item">
         <ToggleMode :mode="mode" @toggle="$emit('toggle')" class="header__toggle" />
      </div>
   </header>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import Cart from "./Cart.vue";
import Icons from "../components/Icons.vue";
import ToggleMode from "../components/ToggleMode.vue";

export default {
   components: {
      Cart,
      SearchBar,
      Icons,
      ToggleMode,
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
