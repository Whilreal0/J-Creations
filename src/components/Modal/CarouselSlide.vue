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
    <div
      class="relative object-contain  top-0 right-0 overflow-hidden"
      v-for="(image, i) in imagesFromParent"
      :key="i"
      :data-index="i"
    >
      <!--start -->
      <img class="fit-object " :src="image.path" />
      
      <button
        class="absolute top-[50%] left-0 bg-green-400 rounded text-white"
        @click="onPrev"
      >
        Prev
      </button>
      <button
        class="absolute top-[50%] right-0 bg-green-400 rounded text-white"
        @click="onNext"
      >
        Next
      </button>
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
    currentSlideIndex: 0,
  }),
  methods: {
    onNext() {
      this.currentSlideIndex++;
      if (this.currentSlideIndex >= this.imagesFromParent.length)
        this.currentSlideIndex = 0;
      this.resetPlay();
    },
    onPrev() {
      this.currentSlideIndex--;
      if (this.currentSlideIndex < 0)
        this.currentSlideIndex = this.imagesFromParent.length - 1;
      this.resetPlay();
    },
    resetPlay() {
      clearInterval(this.timer);
      this.play();
    },
    play() {
      let app = this;
      this.timer = setInterval(function () {
        app.onNext();
      }, 2000);
    },
  },
  mounted() {
    this.imagesFromParent.forEach((_, i) => {
      if (i != this.currentSlideIndex) {
        const element = document.querySelector(`[data-index="${i}"]`);
        element.classList.add("hidden");
      }
    });
  },
};
</script>

