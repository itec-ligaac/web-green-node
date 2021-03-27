<template>
  <navBar/>
  <comparePage v-if="currentPage == 'comparePage'"/>
</template>

<script>
import navBar from './components/navBar.vue'

import comparePage from './components/comparePage.vue'

export default {
  name: 'App',
  components: {
    navBar,
    comparePage
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
  text-align: center;
  color: #2c3e50;
}
</style>
