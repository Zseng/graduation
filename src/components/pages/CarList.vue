<template>
  <div class="container car_list">
    <app-carlistitem v-for="carItem in carItems" v-bind:car-item="carItem"></app-carlistitem>
  </div>
</template>
<style>
  .car_list {
    padding: 10px;
    border-top: 1px solid #b4b3b3;
  }

  .car_list_item {
    display: inline-block;
    width: 270px;
    height: 290px;
    background-color: #fff;
    padding: 10px;
    margin: 0 10px 10px 0;
    cursor: pointer;
  }

  .car_list_item:hover {
    box-shadow: 4px 2px 4px 4px #ccc;
  }

  .car_list_item > img {
    width: 250px;
    height: 180px;
  }

  .car_list_item > .car_cost > span {
    color: #fc5412;
    font-size: 24px;
  }

</style>
<script>
  import CarListItem from '../pages/CarListItem'

  export default{
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
          }
        ]
      }
    },
    components: {
      'app-carlistitem': CarListItem
    }
  }
</script>
