<template>
  <div class="car_list_item">
    <img v-bind:src=carItem.url alt="car_list_01">
    <h4 class="car_title">{{carItem.title}}</h4>
    <p class="car_describe">{{carItem.describe}}</p>
    <p class="car_cost">
      <span>{{carItem.cost.price}}</span>
      {{carItem.cost.base}}
    </p>
  </div>
</template>
<style>
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
  export default{
    props: ['carItem'],
    data () {
      return {}
    },
    components: {}
  }
</script>
