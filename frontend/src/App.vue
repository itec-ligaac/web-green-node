<template>
  <navBar/>
  <favoritesPage/>
</template>

<script>
import navBar from './components/navBar.vue'
import favoritesPage from './components/favoritesPage'


export default {
  name: 'App',
  components: {
    navBar,
    favoritesPage
    

  },
  data(){
    return{
      currentPage: "comparePage"
    }

  }
}
</script>

<style>
*{margin:0px; padding:0px;}

html, body{
  
  height:100%;

}

#app {
  height:100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
