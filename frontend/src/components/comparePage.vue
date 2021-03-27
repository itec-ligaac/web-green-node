<template>
  <div id="mainContainer">
    <div class="textBox">
      <h2> Image1 </h2>
      <h1> Test 1 </h1>
      <h1> Test 1 </h1>
      <h1> Test 1 </h1>
      <h1> Test 1 </h1>
    </div>
    <div id="divisor">
    </div>
    <div class="textBox">
      <h2> Image2 </h2>
      <h1> Test 2 </h1>
      <h1> Test 2 </h1>
      <h1> Test 2 </h1>
      <h1> Test 2 </h1>
    </div>
  </div>
</template>

<style>

  .textBox{
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    width:100%;
  }

  .textBox h1{
    padding:5%;
    margin:1%;
    background:#EAC435;
  }

  #mainContainer{
    
    display:flex;
    justify-content:space-between;
    height:100%;

  }

  #divisor{
    height:100%;
    width:1%;
    background:black;
  }



</style>

<script>


</script>
