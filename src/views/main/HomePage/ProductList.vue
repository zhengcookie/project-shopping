<template>
  <div class="index-board">
    <div
      class="index-board-item"
      v-for="(item, index) in buyData"
      :key="index"
      :class="['index-board-' + item.url,{'line-last':index %2 !== 0}]"
    >
      <div class="index-board-item-inner">
        <h3>{{ item.title }}</h3>
        <p>{{ item.detail }}</p>
       
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buyData: [
        {
          title: "家用产品",
          detail: "家用产品描述",
          url:"household"
        },
        {
          title: "数码产品",
          detail: "数码产品描述",
          url:"digital"
        },
        {
          title: "图书产品",
          detail: "图书产品描述",
          url:"book"
        },
        {
          title: "食品产品",
          detail: "食品产品描述",
          url:"finsh"
        },
      ],
    };
  },
};
</script>

<style scoped>
.index-board {
  overflow: hidden;
  margin-top: 15px;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 10px;
  margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 110px;
  padding-left: 150px;
}
.index-board-household .index-board-item-inner{
  background: url(../../../assets/images/jj.png) no-repeat;
}
.index-board-digital .index-board-item-inner{
  background: url(../../../assets/images/sm.jpg) no-repeat;
}
.index-board-book .index-board-item-inner{
  background: url(../../../assets/images/th.jpg) no-repeat;
}
.index-board-finsh .index-board-item-inner{
  background: url(../../../assets/images/sp.jpg) no-repeat;
}
.index-board-item-inner h3{
  margin-bottom: 30px;
}
.line-last{
  margin-right: 0;
}
</style>