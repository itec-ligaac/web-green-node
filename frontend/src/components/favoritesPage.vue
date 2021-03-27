<template>
    <div class="mainContainer">
        <div class="Favorites">
            <h3>Nr 01</h3>
                <div class="image">
                    <img src="../assets/beach.jpg" alt="">
                </div>
                <div class="placeDescription">
                    <h1>Las Vegas Beach</h1>
                    <h3>place description</h3>
                </div>
                <div class="Stars">
                    <img src="../assets/Stars.svg" alt="">
                </div>
                <div class="Eliminate">
                    <a href=""><img src="../assets/Eliminate.svg" alt=""></a>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'favoritesPage'
}
</script>

<style scoped>
    .mainContainer{
        display: flex;
        flex-direction: column;
    }
    .mainContainer .Favorites{
        display: flex;
        flex-direction: row;
        width: 85%;
        padding: 12px;
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;
        background-color: #008bf0;
        color: white;
        box-shadow: 4px 6px 4px rgba(0, 0, 0, 0.25), 9px 6px 4px rgba(0, 0, 0, 0.25);
        height: 120px;
        margin-top: 4%;
    }
    .mainContainer .Favorites .image img{
        width: 28vh;
    }
    .mainContainer .Favorites .placeDescription {
        display: flex;
        flex-direction: column;
    }

</style>
