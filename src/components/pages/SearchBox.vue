<template>
  <div class="searchBox">
    <input type="text" placeholder="搜索您想租的车">
    <input type="button" value="搜索">
  </div>
</template>

<script>
  export default{
    name: 'SearchBox',
    components: {}
  }
</script>
<style>
  .searchBox {
    /*float: left;*/
    display: inline-block;
    width: 326px;
    height: 38px;
    padding: 2px;
    margin: 10px 0 0 200px;
    border-radius: 4px;
    background-color: #48e5fc;
  }

  .searchBox > input:nth-of-type(1) {
    width: 260px;
    height: 34px;
    border: none;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    background-color: #fff;
  }

  .searchBox > input:nth-of-type(2) {
    width: 58px;
    height: 34px;
    border: none;
    color: #fff;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    background: none;
  }
</style>
