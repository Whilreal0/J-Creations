<template>
  <div
    class="
      fixed
      inset-0
      overflow-hidden
      flex
      justify-center
      items-center
      bg-red-900
      z-[50]
      md:py-[50px]
    "
  >
  <transition
      enter-class="opacity-0"
      enter-active-class="ease-in transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-in transition-medium"
      leave-to-class="opacity-0"
    >
      <SideBarMenu />
    </transition>
  
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>