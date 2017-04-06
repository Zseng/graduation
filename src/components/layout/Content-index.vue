<template>
  <div class="content">
    <section class="sub-nav container">
      <app-sidebar></app-sidebar>
      <app-carousel></app-carousel>
      <app-support></app-support>
      <app-carnav></app-carnav>
      <app-carlist></app-carlist>
      <div class="more_car">
        <div class="more_car_btn">
          <span>查看更多</span>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import SideBar from '../pages/SideBar'
  import Carousel from '../pages/Carousel'
  import Support from '../pages/Support'
  import CarNav from '../pages/CarNav'
  import CarList from '../pages/CarList'
  export default{
    data () {
      return {}
    },
    components: {
      'app-sidebar': SideBar,
      'app-carousel': Carousel,
      'app-support': Support,
      'app-carnav': CarNav,
      'app-carlist': CarList
    }
  }
</script>
<style>
  .content {
    background-color: #f5f5f5;
  }

  .sub-nav {
    padding: 2px 0 0 0;
  }

  .sub-nav > aside {
    float: left;
    /*display: inline-block;*/
    width: 320px;
    height: 420px;
    padding: 20px 0 20px 20px;
    border: 1px solid #eee;
    background-color: #fff;
  }

  .sub-nav aside > p {
    font-size: 20px;
  }

  .sub-nav p > span {
    color: #999;
    font-size: 14px;
  }

  .more_car {
    padding: 20px 0 20px 0;
  }

  .more_car_btn {
    width: 200px;
    height: 50px;
    border-radius: 4px;
    line-height: 50px;
    text-align: center;
    margin: 0 auto;
    border: 1px solid #48e5fc;
    cursor: pointer;
    transition: all .5s;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
  }

  .more_car_btn > span {
    color: #48e5fc;
    font-size: 18px;
  }

  .more_car_btn:hover {
    background-color: #48e5fc;
  }

  .more_car_btn:hover > span {
    color: #fff;
  }


</style>
