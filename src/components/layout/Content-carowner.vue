<template>
  <section>
    <ol class="breadcrumb">
      <li><a href="#">首页</a></li>
      <li class="active">我是车主</li>
    </ol>
    <section class="container">
      <div class="row">
        <div class="col-md-6 imgPreview clearfix">
          <h2>图片上传预览</h2>
          <span>主要显示图片</span>
          <div id="imgPreview"></div>
          <div class="sub-imgBox"></div>
          <div class="sub-imgBox"></div>
          <div class="sub-imgBox"></div>
        </div>
        <div class="col-md-6">
          <div class="info-form">
            <form>
              <div class="input-group">
                <span class="input-group-addon">商品标题</span>
                <input type="text" class="form-control" placeholder="捷豹XE混动">
              </div>
              <div class="input-group">
                <span class="input-group-addon">描述</span>
                <input type="text" class="form-control" placeholder="四轮驱动,车辆7成新">
              </div>
              <div class="input-group">
                <span class="input-group-addon">汽车品牌</span>
                <input type="text" class="form-control" placeholder="捷豹" id="car-band">
                <div class="band"></div>
              </div>
              <div id="distpicker">
                <div class="input-group">
                  <span class="input-group-addon">选择地址</span>
                  <select class="form-control address"></select>
                  <select class="form-control address"></select>
                  <select class="form-control address"></select>
                </div>
              </div>
              <div class="input-group">
                <div class="input-group-btn">
                  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">汽车类型<span
                    class="caret"></span></button>
                  <ul class="dropdown-menu dropdown-menu-right" role="menu" v-on:click="changeCar($event)">
                    <li><a href="javascript:;">SUV</a></li>
                    <li><a href="javascript:;">MVP</a></li>
                    <li><a href="javascript:;">跑车</a></li>
                    <li><a href="javascript:;">轿车</a></li>
                  </ul>
                </div><!-- /btn-group -->
                <input type="text" class="form-control" placeholder="SUV" id="car-type">
              </div>
              <div class="input-group">
                <div class="input-group-btn">
                  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" id="per-cost">
                    单价<span class="caret"></span></button>
                  <ul class="dropdown-menu dropdown-menu-right" role="menu" v-on:click="changeCost($event)">
                    <li><a href="javascript:;">小时</a></li>
                    <li><a href="javascript:;">天</a></li>
                    <li><a href="javascript:;">月</a></li>
                    <li><a href="javascript:;">年</a></li>
                  </ul>
                </div><!-- /btn-group -->
                <input type="text" class="form-control" placeholder="100">
              </div>
              <div class="input-group">
                <span class="input-group-addon">联系电话</span>
                <input type="text" class="form-control" placeholder="18883848541">
              </div>

              <div class="input-group">
                <span class="input-group-addon">上传图片</span>
                <input type="file" class="form-control" id="update-img"
                       v-on:change="onFileChange($event, 1)">
              </div>
              <div class="input-group">
                <span class="input-group-addon">上传图片</span>
                <input type="file" class="form-control upload-img" v-on:change="onFileChange($event, 2)">
              </div>
              <div class="input-group">
                <span class="input-group-addon">上传图片</span>
                <input type="file" class="form-control upload-img" v-on:change="onFileChange($event, 3)">
              </div>
              <div class="input-group">
                <span class="input-group-addon">上传图片</span>
                <input type="file" class="form-control upload-img" v-on:change="onFileChange($event, 4)">
              </div>

            </form>
          </div>
        </div>
      </div>

    </section>
  </section>
</template>
<style>
  .info-form {
    width: 600px;
    height: 600px;
    padding: 20px;
    border: 1px solid #eee;
    margin-bottom: 10px;
  }

  .info-form form {
    width: 400px;
  }

  .imgPreview {
    border: 1px solid #eee;
    padding: 10px;
  }

  .imgPreview > span {
    z-index: 10;
    color: #48e5fc;
  }

  .imgPreview > h2 {
    color: #48e5fc;
    margin-bottom: 10px;
  }

  .previewImg {
    width: 100%;
    height: 100%;
  }

  #imgPreview {
    width: 480px;
    height: 290px;
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid #eee;
  }

  .sub-imgBox {
    float: left;
    width: 154px;
    height: 100px;
    margin-right: 10px;
    padding: 5px;
    border: 1px solid #eee;
  }

  .input-group {
    margin-bottom: 10px;
  }

  .band {
    display: none;
    position: absolute;
    left: 402px;
    width: 200px;
    padding: 10px 10px 0 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .address {
    display: inline-block;
  }
</style>
<script>
  let $ = window.$
  function imgPreview (value, container, file) {
    switch (container) {
      case 1: {
        container = $('#imgPreview')
        break
      }
      case 2: {
        container = $('.sub-imgBox').eq(0)
        break
      }
      case 3: {
        container = $('.sub-imgBox').eq(1)
        break
      }
      case 4: {
        container = $('.sub-imgBox').eq(2)
        break
      }
    }
    if (typeof FileReader === 'undefined') {
      window.alert('您的浏览器不支持图片上传，请升级您的浏览器')
      return false
    }
    let filextension = value.value.substring(value.value.lastIndexOf('.'), value.value.length)
    filextension = filextension.toLowerCase()
    if ((filextension !== '.jpg') && (filextension !== '.gif') && (filextension !== '.jpeg') &&
      (filextension !== '.png') && (filextension !== '.bmp')) {
      window.alert('请上传正确格式的图片')
      value.value = null
      container.innerHTML = null
      value.focus()
      return false
    } else {
      let reader = new window.FileReader()
      reader.readAsDataURL(file[0])
      reader.onload = function (e) {
        container.html('<img class="previewImg" src="' + e.target.result + '" />')
      }
      return true
    }
  }
  export default{
    data: function () {
      return {
        images: []
      }
    },
    components: {},
    methods: {
      changeCost (event) {
        let e = event || window.event
        let target = e.target || e.srcElement
        if (target.nodeName.toLowerCase() === 'a') {
          $('#per-cost').html(target.innerHTML + '<span class="caret"></span>')
        }
      },
      changeCar (event) {
        let e = event || window.event
        let target = e.target || e.srcElement
        if (target.nodeName.toLowerCase() === 'a') {
          $('#car-type').val(target.innerHTML)
        }
      },
      onFileChange (e, type) {
        let files = e.target.files || e.dataTransfer.files
        let value = e.target
        if (!imgPreview(value, type, files) && !(files.length)) {
          return
        }
        this.createImage(files)
      },
      delImage (index) {
        this.images.shift(index)
      },
      createImage (file) {
        let vm = this
        let reader = new window.FileReader()
        reader.readAsDataURL(file[0])
        reader.onload = function (e) {
          vm.images.push(e.target.result)
        }
      },
      uploadImage () {
        let obj = {}
        obj.images = this.images
        $.ajax({
          type: 'post',
          url: 'upload.php',
          data: obj,
          dataType: 'json',
          success: function (data) {
            if (data.status) {
              window.alert(data.msg)
              return false
            } else {
              window.alert(data.msg)
              return false
            }
          }
        })
      }
    },
    mounted: function () {
      $('#distpicker').distpicker({
        province: '---- 所在省 ----',
        city: '---- 所在市 ----',
        district: '---- 所在区 ----'
      })
    }
  }
</script>
