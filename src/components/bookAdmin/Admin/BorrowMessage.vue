<template>
  <div id="bm">
      <h2>借阅信息</h2>
      <div id="tb">
        <table>
          <tbody>
            <tr>
              <td><label>图书名称:</label>&nbsp&nbsp</td>
              <td><input type="text" class="form-control" placeholder="请输入" ></td>
               <td><label>ISBN号:</label>&nbsp&nbsp</td>
              <td><input type="text" class="form-control" placeholder="请输入" ></td>
              <td><label>出版社:</label>&nbsp&nbsp</td>
              <td><input type="text" class="form-control" placeholder="请输入" ></td>
            </tr>
          </tbody>
        </table>

      </div>
  </div>
</template>

<script>

export default {
  name: 'BM',
  
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
</style>
