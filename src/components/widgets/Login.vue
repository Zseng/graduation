<template>
  <section class="user-control login">
    <i class="iconfont close login-close" v-on:click='loginControl'>&#xe60d;</i>
    <form>
      <div class="input-group">
        <span class="input-group-addon"><i class="iconfont">&#xe60f;</i></span>
        <input type="text" class="form-control" placeholder="Username">
      </div>
      <div class="input-group">
        <span class="input-group-addon"><i class="iconfont">&#xe61e;</i></span>
        <input type="text" class="form-control" placeholder="Password">
      </div>
      <div class="button-group">
        <button type="button" class="btn btn-info">登录</button>
        <button type="button" class="btn btn-primary" id="register" v-on:click='registControl'>注册</button>
      </div>
    </form>
  </section>
</template>
<style>
  .user-control {
    display: none;
    position: fixed;
    z-index: 20;
    /*margin: 200px auto;*/
    top: 100px;
    left: 33%;
    left: calc(50% - 200px);
    width: 400px;
    border-radius: 10px;
    border: 1px solid #b2fcfb;
    /*background-color: rgba(42, 253, 251, .3);*/
    background-color: #fff;
  }

  .login {
    height: 240px;
  }

  .user-control > .close {
    float: right;
    margin: 10px 10px 0 0;
  }

  .user-control > form {
    width: 350px;
    margin: 50px auto;
  }

  .button-group {
    width: 120px;
    margin: 0 auto;
  }

</style>
<script>
  let $ = window.$
  export default{
    props: ['isLogin'],
    watch: {
      isLogin: function () {
        if (!this.isLogin) {
          $('.login').css('display', 'none')
        } else {
          $('.login').css('display', 'block')
        }
      }
    },
    methods: {
      registControl: function () {
        this.$emit('regist')
      },
      loginControl: function () {
        this.$emit('login')
      }
    }
  }
</script>
