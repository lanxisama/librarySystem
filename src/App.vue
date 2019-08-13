<template>
  <div id="app">
    <app-header></app-header>
    <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
          <app-left></app-left>
        </div>
        <div class="col-sm-9 ">  <router-view></router-view></div>
        
    </div>

    
  </div>
</template>

<script>
import Header from './components/Nav/Header'
import Left from './components/Nav/Left'
export default {
  name: 'App',
  components: {
    "app-header":Header,
    "app-left":Left
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
