<template>
  <aside>
    <p>我要租车 <span>安全保障</span></p>
    <div class="line"></div>
    <div class="list-content">
      <p class="sub-title">品牌</p>
      <div class="sub-content clearfix car_type" style="position: relative;">
        <ul>
          <li>
            <img src="../../assets/dazhong.png" alt="dazhong">
            <p>大众</p>
          </li>
          <li>
            <img src="../../assets/toyota.png" alt="toyota">
            <p>丰田</p>
          </li>
          <li>
            <img src="../../assets/bentian.png" alt="bentian">
            <p>本田</p>
          </li>
          <li>
            <img src="../../assets/benz.png" alt="benz">
            <p>奔驰</p>
          </li>
          <li>
            <img src="../../assets/bmw.png" alt="bmw">
            <p>宝马</p>
          </li>
          <li>
            <img src="../../assets/audi.png" alt="audi">
            <p>奥迪</p>
          </li>
          <i class="iconfont" id="more-type-btn" v-on:click="showMore">&#xe603;</i>
        </ul>
        <div class="more_type_cover"></div>
        <app-moretype v-bind:is-show="isShow"></app-moretype>
      </div>
      <p class="sub-title">价格(天)</p>
      <div class="sub-content clearfix">
        <ul>
          <li><span>500以下</span></li>
          <li><span>500-1k</span></li>
          <li><span>1k-1.5k</span></li>
          <li><span>1.5k-2k</span></li>
          <li><span>2k-2.5k</span></li>
          <li><span>3k-3.5k</span></li>
          <li><span>3.5k-4k</span></li>
          <li><span>4k以上</span></li>
        </ul>
      </div>
      <p class="sub-title">车型</p>
      <div class="sub-content clearfix">
        <div class="car-type">
          <i class="iconfont car-type">&#xe644;</i>
          <p>SUV</p>
        </div>
        <div class="car-type">
          <i class="iconfont car-type">&#xe752;</i>
          <p>MVP</p>
        </div>
        <div class="car-type">
          <i class="iconfont car-type">&#xe60a;</i>
          <p>跑车</p>
        </div>
        <div class="car-type">
          <i class="iconfont car-type">&#xe74d;</i>
          <p>轿车</p>
        </div>
      </div>
      <div class="car_owner">
        <span>我是车主</span>
      </div>
    </div>
  </aside>

</template>

<script>
  import MoreType from './MoreType'

  let $ = window.$
  export default{
    data () {
      return {
        isShow: false
      }
    },
    components: {
      'app-moretype': MoreType
    },
    methods: {
      showMore () {
        if (!this.isShow) {
          $('.more_type_cover').css('display', 'block')
          $('.car_type').addClass('hover-active')
        } else {
          $('.more_type_cover').css('display', 'none')
          $('.car_type').removeClass('hover-active')
        }
        this.isShow = !this.isShow
      }
    }
  }
</script>
<style>
  .line {
    width: 100%;
    height: 1px;
    margin: 10px 0 14px 0;
    background-color: #eee;
  }

  .sub-nav .sub-title {
    font-size: 16px;
    margin: 10px 0 10px 0;
  }

  .sub-nav {
    min-width: 1190px;
  }

  .sub-content > ul li {
    float: left;
    margin-right: 16px;
    text-align: center;
    cursor: pointer;
  }

  .sub-content > ul span {
    float: left;
    cursor: pointer;
  }

  .sub-content > ul span:hover {
    background-color: #00a0e9;
  }

  .sub-content span > i {
    font-size: 24px;
    color: #eee;
  }

  .car-type {
    display: inline-block;
    margin: 0 6px;
    text-align: center;
  }

  .car-type > i {
    height: 40px;
    cursor: pointer;
    font-size: 40px;
  }

  .car-type:hover > i {
    color: #00a0e9;
  }

  .car-type:hover > p {
    color: #00a0e9;
  }

  #more-type-btn {
    float: left;
    font-size: 26px;
    color: #b4b8b8;
    cursor: pointer;
  }

  .more_type_cover {
    display: none;
    position: absolute;
    left: 296px;
    top: 0;
    width: 2px;
    height: 44px;
    background-color: #fff;
    z-index: 20;
  }

  .car_owner {
    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #48e5fc;
    border-radius: 4px;
    margin-top: 20px;
    margin-left: 27%;

    cursor: pointer;
    transition: all .5s;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
  }

  .car_owner:hover {
    background-color: #48e5fc;
  }

  .car_owner:hover > span {
    color: #fff;
  }

  .car_owner > span {
    font-size: 20px;
    color: #48e5fc;
  }

  .hover-active {
    border-left: 2px solid #48e5fc;
    border-top: 2px solid #48e5fc;
    border-bottom: 2px solid #48e5fc;
  }

</style>
