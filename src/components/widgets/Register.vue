<template>
  <section class="user-control register">
    <i class="iconfont close register-close" v-on:click='registControl'>&#xe60d;</i>
    <form>
      <div class="input-group">
        <span class="input-group-addon"><i class="iconfont">&#xe60e;</i></span>
        <input type="text" class="form-control" placeholder="Name">
      </div>
      <div class="input-group">
        <span class="input-group-addon"><i class="iconfont">&#xe60f;</i></span>
        <input type="text" class="form-control" placeholder="Username">
      </div>
      <div class="input-group">
        <span class="input-group-addon"><i class="iconfont">&#xe61e;</i></span>
        <input type="text" class="form-control" placeholder="Password">
      </div>
      <div class="input-group">
        <span class="input-group-addon"><i class="iconfont">&#xe61d;</i></span>
        <input type="text" class="form-control" placeholder="Email">
      </div>
      <div class="input-group">
        <span class="input-group-addon"><i class="iconfont">&#xe61b;</i></span>
        <input type="text" class="form-control" placeholder="Phone">
      </div>
      <div class="button-group">
        <button type="button" class="btn btn-info">提交</button>
      </div>
    </form>
  </section>
</template>
<style>
  .register .button-group {
    width: 58px;
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
    props: ['isRegist'],
    data () {
      return {}
    },
    watch: {
      isRegist: function () {
        if (!this.isRegist) {
          $('.register').css('display', 'none')
        } else {
          $('.register').css('display', 'block')
        }
      }
    },
    methods: {
      registControl: function () {
        this.$emit('regist')
      }
    }
  }
</script>
