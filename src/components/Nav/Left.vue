<template>
  <div class="left" id="left">
   
    <div class="container-fluid">
   
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar" >
              <strong>LOGO</strong>  
          <ul class="nav nav-sidebar">
            <li><router-link to="/">Admin</router-link></li>
            <li><router-link to="/borrow">Borrow</router-link></li>
            <li><router-link to="recommend">Recommend</router-link></li>
             <li><router-link to="/donation">Donation</router-link></li>
          </ul>
        
        </div>
        </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Left',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
strong{
  /* font-weight: 500; */
  font-size: 40px;
  color: rgb(41, 126, 255)
}

</style>
