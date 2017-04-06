<template>
  <section>
    <ol class="breadcrumb">
      <li><a href="#">首页</a></li>
      <li><a href="#">我要租车</a></li>
      <li><a href="#">捷豹</a></li>
      <li class="active">捷豹XE</li>
    </ol>
    <section>
      <div class="container car_details">
        <div class="row">
          <div class="col-md-6">
            <div class="imgBox clearfix">
              <div id="mainImg">
                <img src="../../assets/car_list_01.jpg" alt="car_list_01">
              </div>
              <div class="subImg">
                <img src="../../assets/car_list_01.jpg" alt="car_list_01">
              </div>
              <div class="subImg">
                <img src="../../assets/car_list_01.jpg" alt="car_list_01">
              </div>
              <div class="subImg">
                <img src="../../assets/car_list_01.jpg" alt="car_list_01">
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <h2 class="title">捷豹XE混动</h2>
            <div class="describe">
              <p>
                该车是老司机专用!该车是老司机专用!该车是老司机专用!重要的话说三遍,新手远离
                该车是老司机专用!该车是老司机专用!该车是老司机专用!重要的话说三遍,新手远离
                该车是老司机专用!该车是老司机专用!该车是老司机专用!重要的话说三遍,新手远离
              </p>
              <p>车主报价:<span><i class="iconfont">&#xe60b;</i>400</span>(小时)</p>
              <p>服 务 费：20元（价格x3%），最低20元</p>
            </div>
            <ul class="list-box">
              <li>上架时间: <span>2017.1.5</span></li>
              <li>车辆地址: <span>重庆</span></li>
              <li>车辆种类: <span>轿车</span></li>
            </ul>
            <div id="submit">
              <span>预定</span>
            </div>
          </div>
        </div>
      </div>
    </section>

  </section>
</template>
<script>
  export default {
    data () {
      return {}
    },
    components: {}
  }
</script>
<style>
  .car_details {
    padding: 10px;
  }

  .imgBox > img {
    width: 100%;
    height: 100%;
  }

  .title {
    margin-bottom: 10px;
  }

  .describe {
    padding: 10px;
    background-color: #eee;
    border-top: 1px solid #ccc;
    margin-bottom: 10px;
  }

  .describe > p {
    margin-bottom: 10px;
  }

  .describe > p > span {
    display: inline-block;
    margin: 0 10px;
    font-size: 30px;
    color: #fda803;
  }

  .describe .iconfont {
    font-size: 30px;
  }

  .list-box > li {
    display: inline-block;
    width: 180px;
    height: 40px;
    line-height: 40px;
    padding: 0 20px 0 20px;
    border-right: 1px solid #eee;
  }

  .list-box > li:first-child {
    border-left: 1px solid #eee;
  }

  #submit {
    width: 120px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border: 1px solid #48e5fc;
    cursor: pointer;
    border-radius: 4px;
    margin-top: 30px;
    transition: all .5s;
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    -moz-transition: all .5s;
  }

  #submit > span {
    color: #48e5fc;
  }

  #submit:hover {
    background-color: #48e5fc;
  }

  #submit:hover > span {
    color: #fff;
  }

  .imgBox {
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid #eee;
  }

  #mainImg {
    width: 480px;
    height: 290px;
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid #eee;
  }

  .subImg {
    float: left;
    width: 154px;
    height: 100px;
    margin-right: 10px;
    padding: 5px;
    border: 1px solid #eee;
  }

  .imgBox img {
    width: 100%;
    height: 100%;
  }
</style>
