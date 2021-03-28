<template>
    <div class="mainContainer">
        <div class="presentation">
        <div class="presentationText">
            <p>Want to go on a holiday and don`t know where ?
               We at Green Node got your back with a good variety of options</p>
        </div>
        <div class="eclipseImage">
            <img src="../assets/beach.jpg" alt="">
        </div>
        </div>
        <div class="recommandationPlaces">
            <div class="Place1">
            <img src="../assets/beach.jpg" alt="">
            <h1>Las Vegas beach</h1>
            <h3>place description</h3>
        <div class="Stars">
            <img src="../assets/Stars.svg" alt="">
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'homePage'
}
</script>

<style scoped>
    .mainContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .mainContainer .presentation{
        display: flex;
        flex-direction: row;
        width: 80%;
        height: 50%;
        margin-top: 4%;
        background-color: #EAC435;
        color: white;
        font-size: 54px;
        padding: 25px;
        box-shadow: 4px 6px 4px rgba(0, 0, 0, 0.25), 9px 6px 4px rgba(0, 0, 0, 0.25);
    }   
    .mainContainer .presentation .presentationText{
        width: 100%;
        margin-top: 2%;
    }
    .mainContainer .presentation .eclipseImage img{
        border-radius: 50%;
        width: 76vh;
        margin-top: 1%;
    }
    .mainContainer .recommandationPlaces{
        width: 100%;
        height: 400px;
        margin-left: 10%;
        margin-top: 2%;
        color: white;
    }
    .mainContainer .recommandationPlaces img{
        width:100%;
        height: 200px;
    }
    .mainContainer .recommandationPlaces .Place1{
        background-color: #008bf0;
        width: 35%;
        height: 450px;
    }
    .mainContainer .recommandationPlaces .Stars{
        width: 20vh;
        margin-left: 60%;
        margin-top: 10%;
    }
    .mainContainer .recommandationPlaces h1{
        margin-left: 5%;
        margin-top: 2%;
    }
</style>