<template>
<div class="grid__item">
   <input type="text" v-model="input" name="searchbar" class="header__input" />
</div>
   
</template>

<script>
export default {
   data() {
      return {
         input: 'What are you looking for?',
      }
   }
};
</script>

<style>
.header__input {
   width: 400px;
   border-radius: 40px;
   padding-left: 15px;
   height: 50px;
   margin-top: -40px;
}

.dark .header__input {
   width: 400px;
   border-radius: 40px;
   padding-left: 15px;
   height: 50px;
   margin-top: -40px;
   color: black;
}



</style>
