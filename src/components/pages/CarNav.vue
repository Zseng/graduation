<template>
  <div class="car_nav container">
    <div class="car_static"><span>热门好车</span></div>
    <div class="car_nav_list"><router-link to="/index/new">最新上架</router-link></div>
    <div class="car_nav_list"><router-link to="/index/discount">降价优惠车</router-link></div>
    <div class="car_nav_list"><router-link to="/idnex/guest">猜您喜欢</router-link></div>
  </div>
</template>
<style>
  .car_static {
    float: left;
    width: 130px;
    height: 50px;
    line-height: 50px;
  }
  .car_static > span {
    font-size: 20px;
  }

  .car_nav_list {
    float: left;
    width: 130px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    margin-right: 20px;
  }
  .car_nav_list > a {
    color: #585858;
    font-size: 14px;
  }


  .car_nav_list:hover > a{
    color: #48e5fc;
  }
  .car_nav_list:hover {
    border-bottom: 1px solid #48e5fc;
  }


</style>
<script>
  export default{
    data () {
      return {}
    },
    components: {}
  }
</script>
