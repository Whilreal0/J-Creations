<template>
  <section
    class="
      absolute
      z-[9999]
      md:w-[70vw]
      w-full
      md:h-[80vh]
      h-[60vh]
      bg-white
      flex
      justify-center
      items-center
      overflow-hidden
      opacity-100
      
    "
  >
  <button
        class="absolute top-[50%] left-[10px]  rounded text-black"
        
      >
      <fa-icon icon="fa-solid fa-angle-left" />
      </button>
      <button
        class="absolute top-[50%] right-[10px] rounded text-black "
        
      >
       <fa-icon icon="fa-solid fa-angle-right" />
      </button>
    <div
      class="relative object-contain  top-0 right-0 overflow-hidden"
      v-for="(image, i) in imagesFromParent"
      :key="image.id"
      :data-index="i"
    >
      <!--start -->
      <img class="fit-object " :src="image.path" />
      
    
    </div>
      
    <!--end -->
  </section>
</template>

<script>
export default {
  name: "CarouselSlide",
  inject: ["imagesFromParent"],
  data: () => ({
    isVisible: false,
    currentImageIndex: 0,
  }),
 
  mounted(){
    this.imagesFromParent.forEach((_, index ) =>{
      if(index !== this.currentImageIndex){
        const element = document.querySelector(`[data-index="${index}]"`)
      element.classList.add('hidden')
      }
      
    })
  }

};
</script>

