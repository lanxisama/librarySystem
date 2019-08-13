<template>
  <div class="recommend">
    <h2>图书推荐</h2>
      <div class="well">
              
              <div class="form-group">
                  <label>图书名称</label>
                  <input type="text" class="form-control" placeholder="名称" >
              </div>
              <div class="form-group">
                  <label>出版社</label><br>
                    <input type="text" class="form-control" placeholder="出版社" >
              </div>
              <div class="form-group">
                  <label>作者</label>
                  <input type="text" class="form-control" placeholder="作者" >
              </div>
              <div class="form-group">
                  <label>参考价格</label>
                  <input type="text" class="form-control" placeholder="参考价格" >
              </div>
               <div class="form-group">
                  <label>推荐人</label>
                  <input type="text" class="form-control" placeholder="推荐人" >
              </div>
              <button type="submit" class="btn btn-primary">提交</button>
          </div>

  </div>
</template>

<script>
export default {
  name: 'Recommend',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input[type="text"]{
  width: 300px;
  margin:0 auto;
}

</style>
