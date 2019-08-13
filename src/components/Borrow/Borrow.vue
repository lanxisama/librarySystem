<template>
  <div class="borrow">
    <h2>图书借阅</h2>
      <div class="well">
              <div class="form-group">
                  <label>图书名称</label>
                  <input type="text" class="form-control" placeholder="name" >
              </div>
              <div class="form-group">
                  <label>借阅/归还</label>&nbsp&nbsp
                    <label for="b">借阅</label>
                  <input type="radio" name="1" value="borrow" id="b"/>&nbsp&nbsp
                    <label for="r">归还</label>
                  <input type="radio" name="1" value="return" id="r"/>
              </div>
              <div class="form-group">
                  <label>证件号</label>
                  <input type="text" class="form-control" placeholder="证件号" >
              </div>
              <div class="form-group">
                  <label>借阅时间</label>
                  <input type="text" class="form-control" placeholder="age" >
              </div>
              <button type="submit" class="btn btn-primary">提交</button>
          </div>

  </div>
</template>

<script>
export default {
  name: 'Borrow',
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
