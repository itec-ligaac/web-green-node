<template>
    <div class="mainContainer">
        <div class="catalogList">
            <h3>Beach</h3>
            <h3>beach</h3>
            <h3></h3>
            <h3>hotel</h3>
            <h3>hotel</h3>
            <h3>mountain resort</h3>
        </div>
        <div class="divisor">
        </div>
        <div class="placeInfo">
         <div class="image">
            <h1>img</h1>
        </div>
        <div class="placeName">
            <h1>Las Vegas Beach</h1>
        </div>
        <div class="placeDescription">
            <h2>some random placeDescription</h2>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'catalogPage',
}
</script>

<style scoped>
    .mainContainer{
        display:flex;
        justify-content:space-between;
        height:100%;
    }
    .mainContainer .catalogList{
        display:flex;
        flex-direction:column;
        width:100%;
        margin-top: 7%;
        margin-left: 3%;
        font-size: 26px;
    }
    .mainContainer .catalogList h3:hover{
        background-color: #008BF8;
        color: white;
    }
    .mainContainer .divisor{
        height:100%;
        width:1%;
        background:black;
    }
    .mainContainer .placeInfo{
        display:flex;
        flex-direction:column;
        width:100%;
        margin-top: 7%;
        margin-left: 3%;
        font-size: 26px;
    }
</style>