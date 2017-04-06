<template>
  <section>
    <ol class="breadcrumb">
      <li><a href="#">首页</a></li>
      <li class="active">北京个人二手车</li>
    </ol>
    <app-subnav></app-subnav>
    <div class="submenu container">
      <span>当前筛选<i class="iconfont">&#xe603;</i></span>
      <span class="cancel-choose">奥迪  <i class="iconfont">&#xe60d;</i></span>
      <span>共为您找到 <strong>100</strong> 辆好车</span>
    </div>
    <div class="container carlist-container">
      <div class="orderBox">
        <ul class="clearfix">
          <li><a href="javascript:;">默认排序</a></li>
          <li><a href="javascript:;">最新发布 <i class="iconfont">&#xe609;</i></a></li>
          <li><a href="javascript:;">价格 <i class="iconfont">&#xe609;</i></a></li>
        </ul>
        <app-carlistitem v-for="carItem in carItems" v-bind:car-item="carItem"></app-carlistitem>
        <app-page></app-page>
      </div>
    </div>
  </section>
</template>
<style>
  .carlist-container {
    padding-top: 10px;
    background-color: #f9f9f9;
  }
  .submenu {
    padding: 10px;
  }

  .submenu strong {
    color: #48e5fc;
  }

  .cancel-choose {
    display: inline-block;
    border: 1px solid #eee;
    background-color: #f9f9f9;
  }

  .cancel-choose > i {
    cursor: pointer;
  }

  .orderBox > ul {
    margin-bottom: 10px;
  }

  .orderBox > ul > li {
    float: left;
    height: 32px;
    padding: 5px 10px;
    outline: 1px solid #eee;
    background-color: #fff;
  }

  .orderBox > ul > li > a:hover {
    color: #48e5fc;
  }
</style>
<script>
  import SubNav from '../pages/SubNav'
  import CarListItem from '../pages/CarListItem'
  import Page from '../widgets/Page'
  export default {
    data () {
      return {
        carItems: [
          {
            title: '捷豹XE',
            describe: '时尚豪华舒适！！！',
            cost: {
              price: 300,
              base: '天'
            },
            url: '/static/img/car_list_01.jpg'
          },
          {
            title: '捷豹XE',
            describe: '时尚豪华舒适！！！',
            cost: {
              price: 300,
              base: '天'
            },
            url: '/static/img/car_list_01.jpg'
          },
          {
            title: '捷豹XE',
            describe: '时尚豪华舒适！！！',
            cost: {
              price: 300,
              base: '天'
            },
            url: '/static/img/car_list_01.jpg'
          },
          {
            title: '捷豹XE',
            describe: '时尚豪华舒适！！！',
            cost: {
              price: 300,
              base: '天'
            },
            url: '/static/img/car_list_01.jpg'
          },
          {
            title: '捷豹XE',
            describe: '时尚豪华舒适！！！',
            cost: {
              price: 300,
              base: '天'
            },
            url: '/static/img/car_list_01.jpg'
          }
        ]
      }
    },
    components: {
      'app-subnav': SubNav,
      'app-carlistitem': CarListItem,
      'app-page': Page
    }
  }
</script>
