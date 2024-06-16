<template>
  <div class="Home-swiper">
    <!-- :options:控制轮播图的功能 -->
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide, index) in bannerImg" :key="index">
        <img class="swiperimg" :src="slide" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
      },
      bannerImg: [
        require("../../../assets/slideShow/1.jpg"),
        require("../../../assets/slideShow/2.jpg"),
        require("../../../assets/slideShow/3.jpg"),
        require("../../../assets/slideShow/4.jpg"),
        require("../../../assets/slideShow/5.jpg"),
      ],
    };
  },
};
</script>

<style scoped lang="less">
.Home-swiper {
  width: 90%;
}
.swiperimg {
  width:810px;
  height: 400px;
  margin-top: 15px;
  opacity: 0.7;
}
</style>