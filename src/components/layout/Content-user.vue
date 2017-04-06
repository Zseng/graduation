<template>
  <section class="container">
    <app-userinfo></app-userinfo>
    <app-userlist></app-userlist>
  </section>
</template>
<style>
</style>
<script>
  import UserInfo from '../pages/UserInfo'
  import UserList from '../pages/UserList'
  export default {
    data () {
      return {}
    },
    components: {
      'app-userinfo': UserInfo,
      'app-userlist': UserList
    }
  }
</script>
