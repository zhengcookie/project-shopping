<template>
  <div class="home">
    <div class="home-left">
      <HomeNav></HomeNav>
    </div>
    <div class="home-right">
      <HomeSwiper></HomeSwiper>
      <ProductList></ProductList>
    </div>
  </div>
</template>

<script>
import HomeNav from "./HomeNav.vue";
import HomeSwiper from "./HomeSwiper.vue";
import ProductList from "./ProductList.vue";

export default {
  name: "Home",
  components: {
    HomeNav,
    HomeSwiper,
    ProductList,
  },
  mounted() {
    // console.log(this.$router.match("/").meta.isLogin)
  },
};
</script>

<style lang="less" scoped>
.home {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.home-left {
  float: left;
  width: 300px;
  text-align: center;
}
.home-right {
  float: left;
  width: 900px;

}
</style>