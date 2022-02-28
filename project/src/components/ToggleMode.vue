<template>
   <button class="toggle-warpper">
      <label class="toggle">
         <input class="toggle__input" type="checkbox" :checked="mode === 'dark' ? 'checked' : false" @change="$emit('toggle')" />
         <span class="toggler round"></span>
      </label>
   </button>
</template>

<script>
export default {
   props: {
      mode: {
         type: String, 
      },
   },
};
</script>

<style>
.toggle {
   position: relative;
   display: flex;
   width: 60px;
   height: 34px;
}

.toggle__input {
   opacity: 0;
   width: 0;
   height: 0;
}

.toggler {
   position: absolute;
   cursor: pointer;
   top: 0;
   right: 0;
   left: 0;
   bottom: 0;
   background: #15202b;
   transition: 0.4s;
}

.dark .toggler:before {
   position: absolute;
   content: '';
   height: 26px;
   width: 26px;
   left: 4px;
   bottom: 4px;
   background: 4;
   transition: 0.4s;
}

.toggler:before {
   position: absolute;
   content: '';
   height: 26px;
   width: 26px;
   left: 4px;
   bottom: 4px;
   background: white;
   transition: 0.4s;
}

.toggle__input:checked + .toggler {
   background: red;
}

.toggle__input:focus + .toggler {
   box-shadow: 0 0 20px red;
}

.toggle__input:checked + .toggler:before {
   transform: translateX(26px);
}

.toggler.round {
   border-radius: 34px;
}

.toggler.round::before {
   border-radius: 50%;
}
</style>
