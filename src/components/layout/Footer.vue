<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="footer-logo">
            <h2>花生</h2>
            <p>汽车租赁网</p>
            <p>HuaSheng.com</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="contact_us">
            <p>咨询电话: 400-880-8888</p>
            <p>周一至周日(8:00-21:00)</p>
            <p>服务专线:18883848541</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="wechat">
            <img src="../../assets/wechat.jpg" alt="wechat">
            <span>关注微信</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container others">
      <div class="row">
        <div class="col-md-3">
          <a href="javascript:;"><span>关于花生</span></a>
        </div>
        <div class="col-md-3">
          <a href="javascript:;"><span>加入我们</span></a>
        </div>
        <div class="col-md-3">
          <a href="javascript:;"><span>联系我们</span></a>
        </div>
        <div class="col-md-3">
          <a href="javascript:;"><span>服务保障</span></a>
        </div>
      </div>
      <p>Copyright@ 2017 zsengofmax@gmail.com All Rights Reserved</p>
    </div>
  </footer>
</template>
<style>
  .footer {
    padding-top: 28px;
    background-color: #2e2e2e;
  }

  .footer-logo {
    margin-left: 60px;
    margin-top: 20px;
    display: inline-block;
    vertical-align: top;
  }

  .footer-logo > h2 {
    font-size: 50px;
    color: #48e5fc;
  }

  .footer-logo > p {
    font-size: 20px;
    color: #48e5fc;
  }

  .footer-logo > p:nth-of-type(2) {
    font-size: 14px;
  }

  .contact_us {
    margin-top: 20px;
    display: inline-block;
    vertical-align: top;
  }

  .contact_us > p {
    color: #b4b8b8;
  }

  .wechat {
    margin-top: 20px;
    display: inline-block;
    vertical-align: top;
  }

  .wechat > img {
    width: 80px;
    height: 80px;
  }

  .wechat > span {
    margin-left: 20px;
    vertical-align: top;
    color: #b4b8b8;
  }

  .others {
    width: 600px;
    padding: 20px 0 10px 0;
    text-align: center;
  }

  .others > p {
    margin: 20px 0 10px 0;
    color: #b4b8b8;
  }

  .others a {
    color: #b4b8b8;
  }

</style>
<script>
  export default{
    name: 'footer',
    data () {
      return {}
    },
    components: {}
  }
</script>
