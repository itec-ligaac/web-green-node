<template>
  <nav id="navBarBody">
    <div id="navBarLogo">
      <img src="../assets/Logo.svg">
      <h2> Green Node </h2>
    </div>

    <div id="navBarSearch">
      <input>
    </div>

    <div id="navBarTags">
      <h2>Catalog</h2> 
      <h2>Compare</h2> 
      <h2>Favorites</h2> 
    </div>

  </nav>

</template>

<style scoped>

  img{
      height:4rem;
  }
  
  nav{
    display:flex;
    flex-orientation:row;
    justify-content:space-between;
    align-items:center;
    background:#BCF4DE;
    padding:1%;
    box-shadow: 0px 14px 65px 24px rgba(0, 0, 0, 0.25);
  }
  
  #navBarTags{
    display: flex;
    justify-content: space-between; 
    width:25%;
  }

  #navBarSearch, input{
    width: 60%;
    height:100%;
    padding:10px;
  }

  input{
    border:none;
    border-radius:15px;

  }
</style>

<script>
  export default{
    name:"navBar"
  }


</script>
