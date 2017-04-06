<template>
  <div id="app">
    <app-header v-on:login="login"></app-header>
    <section class="navigation">
      <nav class="container">
        <router-link to="/index" class="nav-list"><span>首页</span></router-link>
        <router-link to="/car_owner" class="nav-list"><span>我是车主</span></router-link>
        <router-link to="/car" class="nav-list"><span>我要租车</span></router-link>
        <router-link to="/qa" class="nav-list"><span>租车问答</span></router-link>
      </nav>
    </section>
    <router-view></router-view>
    <!--<app-content></app-content>-->
    <app-footer></app-footer>
    <app-login v-bind:is-login="isLogin" v-on:regist="regist" v-on:login="login"></app-login>
    <app-regist v-bind:is-regist="isRegist" v-on:regist="regist"></app-regist>
    <div class="cover"></div>
  </div>
</template>
<script>
  import Header from './components/layout/Header'
  import Footer from './components/layout/Footer'
  import ContentIndex from './components/layout/Content-index'
  import Login from './components/widgets/Login'
  import Register from './components/widgets/Register'

  let $ = window.$

  export default {
    name: 'app',
    data: function () {
      return {
        isLogin: false,
        isRegist: false
      }
    },
    methods: {
      login () {
        this.isLogin = !this.isLogin
        if (!this.isLogin) {
          $('.cover').css('display', 'none')
        } else {
          $('.cover').css('display', 'block')
        }
      },
      regist () {
        this.isRegist = !this.isRegist
      }
    },
    components: {
      'app-header': Header,
      'app-footer': Footer,
      'app-content': ContentIndex,
      'app-login': Login,
      'app-regist': Register
    }
  }
</script>
<style>
  body, table, tr, th, td, form, input, ul, li, div, a, h2, p {
    margin: 0;
    padding: 0;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  a:focus {
    text-decoration: none;
  }

  ul li {
    list-style: none;
  }

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

  .cover {
    display: none;
    z-index: 15;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .3;
  }

  body {
    position: relative;
  }

  .breadcrumb > .active {
    color: #48e5fc;
  }

  .breadcrumb {
    background-color: #fff;
    padding: 8px 136px;
  }

</style>
