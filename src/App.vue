<template>
  <div id="app" :style="{height: height+'px'}">  
    <router-view></router-view>
  </div>
</template>

<script>

import Home from './components/home/home.vue'
import Login from './components/login/login.vue'

export default {
  name: 'App',
  components: {
    Home,
    Login
  },
  data() {
    return {
      height: `${document.documentElement.clientHeight}`,
    }
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
}
body{
  margin: 0;
}
</style>
