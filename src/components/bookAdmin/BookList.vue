<template>
  <div class="hello">
    <h2>图书管理</h2>
        <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active"><router-link to="/bookAdmin/all">全部书籍</router-link></li>
        <li role="presentation" class="active"><router-link to="/bookAdmin/borrowmessage">借阅信息</router-link></li>
      </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'BookList',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
