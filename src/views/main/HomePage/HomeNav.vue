<template>
  <div class="home-nav">
    <div class="home-title"><h2>产品分类</h2></div>
    <el-row v-for="(product, index) in productList" :key="index">
      <el-menu background-color="#545c6400" :collapse-transition="false">
        <el-submenu index="1">
          <template slot="title">
            <h3>{{ product.title }}</h3>
          </template>
          <el-menu-item-group v-for="(p, index) in product.list" :key="index">
            <el-menu-item index="1-1"
              ><a :href="p.url">{{ p.name }}</a>
              <span class="hot-tag" v-if="p.hot">Hot</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "HomeNav",
  data() {
    return {
      productList: [
        {
          title: "家用电器",
          list: [
            {
              id: 1,
              name: "电视",
              hot: true,
              url: "https://www.baidu.com/",
            },
            {
              id: 2,
              name: "空调",
              hot: true,
              url: "https://www.baidu.com/",
            },
          ],
        },
        {
          title: "数码",
          list: [
            {
              id: 1,
              name: "手机配件",
              hot: false,
              url: "https://www.baidu.com/",
            },
            {
              id: 2,
              name: "影音娱乐",
              hot: false,
              url: "https://www.baidu.com/",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
.home-nav {
  float: left;
  margin-top: 15px;
  background: rgba(255, 255, 255, 0.5);
}
.home-title{
  height: 50px;
  background-color:pink;
  width: 200px;
}
.home-title h2{
  color: #fff;
  line-height: 50px;
}
.hot-tag {
  color: #fff;
  background: red;
}
a{
  color: black;
}
</style>