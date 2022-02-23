<template>
   <div :class="mode">
      <Header :mode="mode" @toggle="toggle" />
      <Announcement />
   </div>

   <RouterView />
</template>

<script>
import Header from "../components/Header.vue";
import Announcement from "../components/Announcement.vue";
import ToggleMode from "../components/ToggleMode.vue";

export default {
   data() {
      return {
         mode: "ligth",
      };
   },

   components: {
      Header,
      Announcement,
      ToggleMode
   },

   methods: {
      toggle() {
         if (this.mode === "ligth") {
            this.mode = "dark";
         } else {
            this.mode = "ligth";
         }
      },
   },
};
</script>

<style>
   @import '../style/reset.css';
   @import '../style/font.css';
   @import '../style/variables.css';
   @import '../style/style.css';
</style>