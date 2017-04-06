<template>
  <div class="carousel-box">
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        <li data-target="#carousel-example-generic" data-slide-to="3"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img src="../../assets/back_1.jpg" alt="back_1">
          <div class="carousel-caption">
          </div>
        </div>
        <div class="item">
          <img src="../../assets/back_2.jpg" alt="back_2">
          <div class="carousel-caption">
          </div>
        </div>
        <div class="item">
          <img src="../../assets/back_3.jpg" alt="back_3">
          <div class="carousel-caption">
          </div>
        </div>
        <div class="item">
          <img src="../../assets/back_4.jpg" alt="back_4">
          <div class="carousel-caption">
          </div>
        </div>
      </div>

      <!-- Controls -->
      <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <!--<span class="glyphicon glyphicon-chevron-left"></span>-->
        <i class="iconfont">&#xe604;</i>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <!--<span class="glyphicon glyphicon-chevron-right"></span>-->
        <span class="iconfont">&#xe603;</span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {}
    },
    components: {}
  }
</script>
<style>

  .carousel-box {
    display: inline-block;
    width: 800px;
    height: 420px;
    margin-left: 60px;
  }

  .carousel-inner > .item img {
    width: 800px;
    height: 420px;
  }

  .carousel-control > .iconfont {
    position: absolute;
    font-size: 30px;
    left: 40%;
    top: 50%;
  }

</style>
