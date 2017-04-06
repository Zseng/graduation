<template>
  <div class="container carlist-container">
    <div class="filterBox">
      <dl>
        <dt>品牌:</dt>
        <dd><a href="javascript:;">大众</a></dd>
        <dd><a href="javascript:;">现代</a></dd>
        <dd><a href="javascript:;">奔驰</a></dd>
        <dd><a href="javascript:;">宝马</a></dd>
        <dd><a href="javascript:;">奥迪</a></dd>
        <dd><a href="javascript:;">雪弗莱</a></dd>
        <dd><a href="javascript:;">雪弗莱</a></dd>
        <dd><a href="javascript:;">雪弗莱</a></dd>
        <dd><a href="javascript:;">雪弗莱</a></dd>
        <dd><a href="javascript:;">兰博基尼</a></dd>
        <dd><a href="javascript:;">雪弗莱</a></dd>
        <dd><a href="javascript:;">兰博基尼</a></dd>
        <dd><a href="javascript:;">雪弗莱</a></dd>
        <dd><a href="javascript:;">兰博基尼</a></dd>
        <dd><a href="javascript:;">兰博基尼</a></dd>
        <span class="brand-all" v-on:mouseover="showMore" v-on:mouseout="hideMore">全部 <i class="iconfont">&#xe605;</i>
          <app-morelist v-bind:is-show="isShow"></app-morelist>
        </span>
      </dl>
      <dl>
        <dt>价格:</dt>
        <dd><a href="javascript:;"><span class="unlimited">不限</span></a></dd>
        <dd><a href="javascript:;">100以下</a></dd>
        <dd><a href="javascript:;">100-200</a></dd>
        <dd><a href="javascript:;">200-300</a></dd>
        <dd><a href="javascript:;">300-400</a></dd>
        <dd><a href="javascript:;">400-500</a></dd>
        <dd><a href="javascript:;">500-800</a></dd>
        <dd><a href="javascript:;">800-1000</a></dd>
        <dd><a href="javascript:;">1000－2000</a></dd>
        <dd><a href="javascript:;">2000-5000</a></dd>
        <dd><a href="javascript:;">5000以上</a></dd>
      </dl>
      <dl>
        <dt>车系:</dt>
        <dd><a href="javascript:;"><span class="unlimited">不限</span></a></dd>
        <dd><a href="javascript:;">SUV</a></dd>
        <dd><a href="javascript:;">MVP</a></dd>
        <dd><a href="javascript:;">跑车</a></dd>
        <dd><a href="javascript:;">轿车</a></dd>
      </dl>
    </div>
  </div>
</template>
<style>
  .filterBox {
    padding: 20px 20px 10px 20px;
    background-color: #f9f9f9;
  }

  .filterBox > dl > dt, dd {
    padding: 0 10px;
    display: inline-block;
  }

  .filterBox > dl a:hover {
    color: #48e5fc;
  }

  .unlimited {
    padding: 5px;
    color: #fff;
    background-color: #48e5fc;
  }

  .brand-all {
    display: inline-block;
    position: relative;
    cursor: pointer;
    color: #48e5fc;
  }
</style>
<script>
  import MoreList from '../pages/MoreType-carlist'
  export default {
    data () {
      return {
        isShow: false
      }
    },
    components: {
      'app-morelist': MoreList
    },
    methods: {
      showMore () {
        this.isShow = true
      },
      hideMore () {
        this.isShow = false
      }
    }
  }
</script>
