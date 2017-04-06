<template>
  <section class="navigation">
    <nav class="container">
      <router-link to="/index" class="nav-list"><span>首页</span></router-link>
      <router-link to="/car_owner" class="nav-list"><span>我是车主</span></router-link>
      <router-link to="/sell_car" class="nav-list"><span>我要租车</span></router-link>
      <router-link to="/qa" class="nav-list"><span>租车问答</span></router-link>
    </nav>
  </section>
</template>
<script>
  export default {
    name: 'Navigation',
    components: {}
  }
</script>
<style>
  .navigation {
    width: 100%;
    height: 46px;
    background-color: #48e5fc;
  }

  .nav-list {
    float: left;
    height: 46px;
    line-height: 46px;
    padding: 0 30px;
  }

  .nav-list:hover {
    background-color: #00a0e9;
  }

  .nav-list > span {
    color: #fff;
  }

</style>
