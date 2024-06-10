<template>
  <el-menu
    :default-active="active"
    mode="horizontal"
    background-color="#00dfff00"
    active-text-color="#000"
    router
  >
    <el-menu-item index="/"> 首页 </el-menu-item>
    <el-menu-item index="/product"> 商品管理 </el-menu-item>
    <el-menu-item index="/params"> 规格参数 </el-menu-item>
    <el-menu-item index="/ad"> 广告管理 </el-menu-item>
    <el-menu-item class="user" active>
      <span class="user-name">{{ user.username }}</span>
      <el-button style="background-color: unset" @click="exit" icon="el-icon-switch-button"></el-button>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      active: "/",
    };
  },
  computed: {
    ...mapState("login", ["user"]),
  },
  methods: {
    ...mapMutations("login", ["setUser"]),
    exit() {
      this.setUser({});
      localStorage.removeItem("ego");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped lang="less">
.user {
  // 使用!important提权，让其权限更重
  float: right !important;
  margin-right: 20px !important;
  line-height: 60px !important;
  .user-name {
    color: #000;
    margin-right: 20px;
    font-size: 15px;
    border: 1px solid #000;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: inline-block;
    line-height: 40px;
    overflow: hidden;
  }
}
</style>