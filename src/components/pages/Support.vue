<template>
  <section class="support">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6 support_list">
          <i class="iconfont">&#xe601;</i>
          <span>100%个人所有车</span>
        </div>
        <div class="col-md-3 col-sm-6 support_list">
          <i class="iconfont">&#xe607;</i>
          <span>259项全面检测</span>
        </div>
        <div class="col-md-3 col-sm-6 support_list">
          <i class="iconfont">&#xe608;</i>
          <span>安全保障</span>
        </div>
        <div class="col-md-3 col-sm-6 support_list">
          <i class="iconfont">&#xe606;</i>
          <span>全天24小时服务</span>
        </div>

      </div>
    </div>
  </section>
</template>
<script>
  export default {
    data () {
      return {}
    },
    components: {}
  }
</script>
<style>

  .support {
    padding: 20px 0;
  }

  .support_list {
    height: 60px;
    line-height: 60px;
  }
  .support_list > .iconfont{
    float: left;
    font-size: 40px;
    color: #48e5fc;
    margin: 0 10px;

  }
  .support_list > span {
    float: left;
    margin-left: 20px;
    font-size: 16px;
  }
</style>
