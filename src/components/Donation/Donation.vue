<template>
  <div class="donation">
    <h2>图书捐赠</h2>
      <div class="well">
              
              <div class="form-group">
                  <label>图书名称</label>
                  <input type="text" class="form-control" placeholder="name" >
              </div>
              <div class="form-group">
                   <label>ISBN</label>
                  <input type="text" class="form-control" placeholder="ISBN" >
              </div>
              <div class="form-group">
                  <label>书目类别</label>
                  <input type="text" class="form-control" placeholder="类别" >
              </div>
              <div class="form-group">
                  <label>捐赠人</label>
                  <input type="text" class="form-control" placeholder="人" >
              </div>
               <div class="form-group">
                  <label>时间</label>
                  <input type="date" class="form-control" placeholder="人" >
              </div>
              <div id="error">
                <h6>提醒：若选择“在库”状态的话，请确认已经将图书放置到1-5-10-N的书架上</h6>
              </div>
              <br>
              <button type="submit" class="btn btn-primary">提交</button>
          </div>

  </div>
</template>

<script>
export default {
  name: 'Donation',
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
input[type="date"]{
  width: 300px;
  margin:0 auto;
}
button{
  margin:0 auto;
  position:static;
}
/* strong{
  
  left: 0px;
  display:block;
} */
#error{
  color: orange;
  /* float: left; */
}
</style>
