<template>
  <div class="activity_page">
    <ul>
      <router-link tag="li" class="item" to="/" v-for="(item, index) in list" :key="index">
        <div class="cover_img" :style="{backgroundImage: `url(https://api.yuanyintang.com/image/5fea7b6b75789f0382d886e40e79e878/1)`}">
          <div class="tag">
          	<p>海螺沟</p>
          	<p>3日游</p>
          </div>
        </div>

        <div class="text_area">
          <h2 class="title">
                赠送当地精选项目·上海往返苏梅岛7天5晚自由行（ins风网红酒店+全程微管家服务+赠送一晚甲米酒店+赠送浮潜一日游/越野车环岛/W下午茶三选一）
            </h2>
          <p class="price">
            <i>￥</i>
            1565
            <em>起</em>
          </p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<style lang="less" scoped>
@import './main.less';
</style>

<script type="text/javascript">
export default {
  data () {
    return {
      list: [1, 2, 3, 4, 5]
    }
  }
}
</script>
