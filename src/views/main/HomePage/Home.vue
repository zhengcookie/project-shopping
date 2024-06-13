<template>
  <div class="home">
    <HomeNav></HomeNav>
    <HomeSwiper></HomeSwiper>
  </div>
</template>

<script>
import HomeNav from './HomeNav.vue';
import HomeSwiper from './HomeSwiper.vue';
export default {
  name:"Home",
  components:{
    HomeNav,
    HomeSwiper
  },
  mounted() {
    // console.log(this.$router.match("/").meta.isLogin)
  },
}
</script>

<style>
.home{
  width: 1400px;


}
</style>