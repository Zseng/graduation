<template>
  <div class="more_type_2">
    <div class="city-content clearfix">
      <dl>
        <dt>A</dt>
        <dd>
          <a href="javascript:;" class="city-name">奥迪</a>
          <a href="javascript:;" class="city-name">阿斯顿.马丁</a>
          <a href="javascript:;" class="city-name">安驰</a>
          <a href="javascript:;" class="city-name">AC</a>
          <a href="javascript:;" class="city-name">Alplna</a>
          <a href="javascript:;" class="city-name">阿尔法.罗密欧</a>
      </dl>
    </div>
    <div class="city-content clearfix">
      <dl>
        <dt>B</dt>
        <dd>
          <a href="javascript:;" class="city-name">别克</a>
          <a href="javascript:;" class="city-name">宝马</a>
          <a href="javascript:;" class="city-name">比亚迪</a>
          <a href="javascript:;" class="city-name">本田</a>
          <a href="javascript:;" class="city-name">奔驰</a>
          <a href="javascript:;" class="city-name">标致</a>
          <a href="javascript:;" class="city-name">奔腾</a>
          <a href="javascript:;" class="city-name">宝骏</a>
          <a href="javascript:;" class="city-name">保时捷</a>
          <a href="javascript:;" class="city-name">北汽绅宝</a>
          <a href="javascript:;" class="city-name">北汽幻速</a>
          <a href="javascript:;" class="city-name">北京</a>
          <a href="javascript:;" class="city-name">北汽</a>
          <a href="javascript:;" class="city-name">宾利</a>
          <a href="javascript:;" class="city-name">巴博斯</a>
          <a href="javascript:;" class="city-name">宝龙</a>
          <a href="javascript:;" class="city-name">布加迪</a>
      </dl>
    </div>
    <div class="city-content clearfix">
      <dl>
        <dt>C</dt>
        <dd>
          <a href="javascript:;" class="city-name">长安商用</a>
          <a href="javascript:;" class="city-name">长安</a>
          <a href="javascript:;" class="city-name">长城</a>
      </dl>
    </div>
    <div class="city-content clearfix">
      <dl>
        <dt>D</dt>
        <dd>
          <a href="javascript:;" class="city-name">大众</a>
          <a href="javascript:;" class="city-name">东风</a>
          <a href="javascript:;" class="city-name">东南</a>
      </dl>
    </div>
    <div class="city-content clearfix">
      <dl>
        <dt>F</dt>
        <dd>
          <a href="javascript:;" class="city-name">福田</a>
          <a href="javascript:;" class="city-name">丰田</a>
          <a href="javascript:;" class="city-name">法拉利</a>

      </dl>
    </div>
    <div class="city-content clearfix">
      <dl>
        <dt>G</dt>
        <dd>
          <a href="javascript:;" class="city-name">观致</a>
          <a href="javascript:;" class="city-name">广汽吉奥</a>
          <a href="javascript:;" class="city-name">光冈</a>
      </dl>
    </div>
    <div class="city-content clearfix">
      <dl>
        <dt>H</dt>
        <dd>
          <a href="javascript:;" class="city-name">海马</a>
          <a href="javascript:;" class="city-name">红旗</a>
          <a href="javascript:;" class="city-name">黑豹</a>
      </dl>
    </div>
    <div class="city-content clearfix">
      <dl>
        <dt>J</dt>
        <dd>
          <a href="javascript:;" class="city-name">捷豹</a>
          <a href="javascript:;" class="city-name">吉利</a>
          <a href="javascript:;" class="city-name">金龙</a>
      </dl>
    </div>
    <div class="city-content clearfix">
      <dl>
        <dt>J</dt>
        <dd>
          <a href="javascript:;" class="city-name">捷豹</a>
          <a href="javascript:;" class="city-name">吉利</a>
          <a href="javascript:;" class="city-name">金龙</a>
      </dl>
    </div>
    <div class="city-content clearfix">
      <dl>
        <dt>J</dt>
        <dd>
          <a href="javascript:;" class="city-name">捷豹</a>
          <a href="javascript:;" class="city-name">吉利</a>
          <a href="javascript:;" class="city-name">金龙</a>
      </dl>
    </div>
    <div class="city-content clearfix">
      <dl>
        <dt>J</dt>
        <dd>
          <a href="javascript:;" class="city-name">捷豹</a>
          <a href="javascript:;" class="city-name">吉利</a>
          <a href="javascript:;" class="city-name">金龙</a>
      </dl>
    </div>


  </div>
</template>

<script>
  let $ = window.$
  export default{
    props: ['isShow'],
    data () {
      return {}
    },
    watch: {
      isShow: function () {
        if (this.isShow) {
          $('.more_type_2').css('display', 'block')
        } else {
          $('.more_type_2').css('display', 'none')
        }
      }
    }
  }
</script>
<style>
  .more_type_2 {
    display: none;
    position: absolute;
    overflow: scroll;
    left: -452px;
    top: 16px;
    width: 500px;
    height: 300px;
    border: 2px solid #48e5fc;
    background-color: #fff;
    padding: 10px;
  }

  .more_type_2 > p {
    font-size: 16px;
  }

  .more_type_2 > .city-content {
    padding: 10px;
    border-bottom: 1px solid #eee;
  }

  .city-content dl > dt {
    float: left;
    width: 26px;
    padding: 0 10px 0 2px;
    color: #48e5fc;
  }

  .more_type_2 > .city-content dl > dd {
    float: left;
    width: 400px;
  }

  .city-content dl > dd > a {
    padding: 0 4px 0 4px;
  }

  .city-content dl > dd > a:hover {
    background-color: #48e5fc;
  }

</style>
