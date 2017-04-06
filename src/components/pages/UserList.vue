<template>
  <div class="row user-list">
    <div class="col-md-6">
      <div class="panel panel-default">
        <div class="panel-heading"><h2>我的车辆</h2></div>
        <table class="table">
          <tbody>
          <tr>
            <td class="own_goods">名称</td>
            <td class="own_goods">价格</td>
            <td class="own_goods">状态</td>
            <td class="own_goods">操作</td>
          </tr>
          <tr v-for='ownItem in ownItems'>
            <td class="own_goods">{{ownItem.name}}</td>
            <td class="own_goods">{{ownItem.price}}</td>
            <td class="own_goods">{{ownItem.state}}</td>
            <td class="own_goods">
              <button type="button" class="btn btn-success" v-if="ownItem.flag">{{ownItem.operate}}</button>
              <button type="button" class="btn btn-success" v-else disabled>{{ownItem.operate}}</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-md-6">
      <div class="panel panel-default">
        <div class="panel-heading"><h2>我的订单</h2></div>
        <table class="table">
          <tbody>
          <tr>
            <td class="own_goods">名称</td>
            <td class="own_goods">价格</td>
            <td class="own_goods">状态</td>
            <td class="own_goods">操作</td>
          </tr>
          <tr v-for='otherItem in otherItems'>
            <td class="own_goods">{{otherItem.name}}</td>
            <td class="own_goods">{{otherItem.price}}</td>
            <td class="own_goods">{{otherItem.state}}</td>
            <td class="own_goods">
              <button type="button" class="btn btn-success" v-if="otherItem.flag">{{otherItem.operate}}</button>
              <button type="button" class="btn btn-success" v-else disabled>{{otherItem.operate}}</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<style>
  .user-list h2 {
    color: #48e5fc;
  }

  .user-list h2:first-child {
    margin: 10px 0;
  }
</style>
<script>
  export default {
    data () {
      return {
        ownItems: [
          {
            name: '捷豹XE',
            price: '300(天)',
            state: '正在销售',
            operate: '等待',
            flag: false
          },
          {
            name: '捷豹XE',
            price: '300(天)',
            state: '正在销售',
            operate: '等待',
            flag: false
          },
          {
            name: '捷豹XE',
            price: '300(天)',
            state: '已被预定',
            operate: '发货',
            flag: true
          },
          {
            name: '捷豹XE',
            price: '300(天)',
            state: '已被预定',
            operate: '发货',
            flag: true
          }
        ],
        otherItems: [
          {
            name: '奥迪',
            price: '1200(年)',
            state: '待发货',
            operate: '等待',
            flag: false
          },
          {
            name: '保时捷',
            price: '1200(天)',
            state: '使用中',
            operate: '归还',
            flag: true
          },
          {
            name: '保时捷',
            price: '1200(天)',
            state: '待发货',
            operate: '等待',
            flag: false
          },
          {
            name: '保时捷',
            price: '1200(天)',
            state: '使用中',
            operate: '归还',
            flag: true
          }
        ]
      }
    },
    components: {}
  }
</script>
