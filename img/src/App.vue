<template>
  <div id="app" >  <!--:style = " { backgroundImage: `url($backgroundUrl })`}"-->
    <h2>"InmyGroove"</h2>
    <h4>The thread connecting music,movements and artists</h4>
    <NavBar/>
    <router-view />
    <!--<img src = './assets/inmygroove1.jpg'> -->
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
//import backgroundUrl from '@/assets/img/imygroove1.jpg'
export default {
  components: {
    NavBar
  },

 // data() {
    //return {
      //backgroundUrl
    //}
  //}
  
}

  


</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
