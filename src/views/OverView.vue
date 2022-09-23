<template>
  <section
    class="
      text-center text-2xl
      flex flex-col
      justify-center
      items-center
      md:px-16
    "
  >
    <h1 class=" md:text-3xl mt-5 border-b-[1px] border-black">Overview</h1>

    <div
      class="
        grid
        md:grid-cols-3 md:gap-3
        gap-5
        auto-rows-auto
        items-center
        justify-center
        w-full
        md:px-10
        p-8
      "
    >
      <div
        class="shadow-inner rounded-xl"
        v-for="(image, i) in OverviewImages"
        :key="i"
      >
        <img
          class="
            w-full
            rounded-xl
            object-scale-down
            cursor-pointer
            hover:translate-y-[3px]
            hover:-translate-x-[3px]
            ease-in duration-200
          "
          :src="image.path"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    OverviewImages: [
      {
        id: 1,
        path: [require("@/assets/images/JCreation.jpg")],
      },
      {
        id: 2,
        path: [require("@/assets/images/JCreation.jpg")],
      },
      {
        id: 3,
        path: [require("@/assets/images/JCreation.jpg")],
      },
      {
        id: 4,
        path: [require("@/assets/images/hero.jpg")],
      },
      {
        id: 5,
        path: [require("@/assets/images/hero.jpg")],
      },
      {
        id: 6,
        path: [require("@/assets/images/hero.jpg")],
      },
      {
        id: 7,
        path: [require("@/assets/images/NKD.jpg")],
      },
      {
        id: 8,
        path: [require("@/assets/images/NKD1.jpg")],
      },
      {
        id: 9,
        path: [require("@/assets/images/NKD2.jpg")],
      },
      {
        id: 10,
        path: [require("@/assets/images/NKD3.png")],
      },
    ],
  }),
  
};
</script>

<style>
</style>