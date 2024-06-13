<template>
  <div class="Home-swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide,index) in bannerImg" :key="index">
        <img class="swiperimg" :src="slide" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption:"",
      bannerImg:[
        require("../../../assets/slideShow/1.jpg"),
        require("../../../assets/slideShow/2.jpg"),
        require("../../../assets/slideShow/3.jpg"),
        require("../../../assets/slideShow/4.jpg"),
        require("../../../assets/slideShow/5.jpg"),
      ]
    }
  },
}
</script>

<style>
.Home-swiper{
    width: 70%;
}
.swiperimg{
  width:700px;
  height: 500px;
  margin-top: 15px;
}
</style>