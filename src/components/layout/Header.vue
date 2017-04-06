<template>
  <header class="clearfix">
    <div class="logo">
      <h2>花生</h2>
      <p>汽车租赁网</p>
      <p>HuaSheng.com</p>
    </div>
    <div class="select-box">
      <div class="city-box" v-on:click="showCity">
        <span>成都<i class="iconfont">&#xe605;</i></span>
      </div>
      <city-component v-bind:is-show="isShow"></city-component>
      <div class="waiting-more">
        <p>更多城市正在加紧凑备,敬请期待.</p>
      </div>
    </div>
    <search-box></search-box>
    <div class="contact" v-on:click="loginControl">
      <i class="iconfont">&#xe60c;</i>
      <span id="login">登录</span>
    </div>
  </header>
</template>
<script>
  import CityContainer from '../pages/CityContainer'
  import SearchBox from '../pages/SearchBox'

  export default {
    name: 'Header',
    data () {
      return {
        isShow: false
      }
    },
    components: {
      'city-component': CityContainer,
      'search-box': SearchBox
    },
    methods: {
      loginControl () {
        this.$emit('login')
      },
      showCity () {
        this.isShow = !this.isShow
      }
    }
  }
</script>
<style>
  .logo {
    float: left;
    width: 320px;
    height: 88px;
  }

  .logo > h2 {
    float: left;
    padding: 10px;
    margin: 0 0 0 0;
    font-size: 60px;
    color: #48e5fc;
  }

  .logo > p:nth-of-type(1) {
    margin: 10px 0 0 0;
    font-size: 26px;
    color: #48e5fc;
  }

  .logo > p:nth-of-type(2) {
    font-size: 20px;
    color: #48e5fc;
  }

  .select-box {
    position: relative;
    display: inline-block;
    margin: 26px 0 0 0;
  }

  .city-box {
    width: 88px;
    height: 36px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-align: center;
    line-height: 36px;
    cursor: pointer;
  }

  .city-box > span > i {
    margin-left: 10px;
  }

  .waiting-more {
    display: none;
    position: absolute;
    left: 0;
    top: 430px;
    width: 360px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    border: 1px solid #eee;
  }

  .waiting-more > p {
    margin-left: 20px;
    color: #a4a4a4;
  }

  header {
    width: 1190px;
    margin: 0 auto;
  }

  .contact {
    float: right;
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    margin-top: 26px;
    color: #48e5fc;
    cursor: pointer;
  }

  .contact > i {
    font-size: 30px;
  }

</style>
