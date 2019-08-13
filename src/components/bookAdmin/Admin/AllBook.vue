<template>
  <div id="all">
      <h2>全部图书</h2>
      <div id="tb">
        <table>
          <tbody>
            <tr>
              <td><label>图书名称:</label>&nbsp&nbsp</td>
              <td><input type="text" class="form-control" placeholder="请输入" ></td>
               <td><label>图书图书分类:</label>&nbsp&nbsp</td>
              <td><input type="text" class="form-control" placeholder="请输入" ></td>
              <td><label>作者名称:</label>&nbsp&nbsp</td>
              <td><input type="text" class="form-control" placeholder="请输入" ></td>
            </tr>
            <tr>
              <td><label>出版社:</label>&nbsp&nbsp</td>
              <td><input type="text" class="form-control" placeholder="请输入" ></td>
               <td><label>ISBN号:</label>&nbsp&nbsp</td>
              <td><input type="text" class="form-control" placeholder="请输入" ></td>
            </tr>
          </tbody>
        </table>
      </div>
        <div class="table-responsive">
            <table id="ttb" class="table table-striped" style="overflow:auto">
              <thead>
                <tr>
                  <th>编号</th>
                  <th>书名</th>
                  <th>分类</th>
                  <th>出版社</th>
                  <th>日期</th>
                </tr>
              </thead>
            <tbody>
              <tr v-for="book in books">
              <td>{{book.id}}</td>
              <td>{{book.name}}</td>
              <td>{{book.type}}</td>
              <td>{{book.author}}</td>
              <td>{{book.date}}</td>
              <td> 
              <button class="btn btn-link" style="color: #42b983;">查看</button> 
              </td>
              </tr>
             </tbody>
            </table>
            <ul class="pagination">
            <li><a href="#">&laquo;</a></li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#">&raquo;</a></li>
            </ul>
          </div>
        </div>
  </div>
</template>

<script>

export default {
  name: 'AllBook',
  data(){
      return {
         books:{}
      }
  },
  created(){
    // var url="https://jsonplaceholder.typicode.com/posts"
    var url="../../static/books.json"
    this.$http.get(url).then(data=>{
      this.books=data.body.books;
      console.log(data.body.books)
    })
  }
  
}
</script>

<style scoped>
*{
  margin:10px;
}
input[type="text"]{
  width: 150px;
  /* margin:0 auto; */
  border-radius: 5px;
}
body{ text-align:center} 
#tb{
  margin:0 auto;
  /* width:500px;
  height:500px; */
  display: block;
  border: 1px solid black;
  } 
label{
  display: black;
}
#ttb tr td{
  /* color:red; */
  text-align: left;
}
</style>
