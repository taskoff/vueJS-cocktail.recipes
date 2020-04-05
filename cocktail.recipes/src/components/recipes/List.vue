<template>
    <div class="list-vew-container">
        <h2>All Recipes</h2>
        <div class="all-recipes-container">
            <div class="recipe-container">
                <div class="img-container">
                    <img src="https://www.liquor.com/thmb/VMoOrrQzOV00AY3rgSK6XxOR0EE=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__09__04153106__mojito-720x720-recipe-a55b114fc99c4a64b38c9ef6d1660e20.jpg" alt="Img">
                </div>
                <div class="recipe-title">
                    <h3>Mojito recipe</h3>
                </div>
                <div class="details-btn-container">
                    <router-link to="/details">Details</router-link>
                </div>
            </div>
             <div class="recipe-container">
                <div class="img-container">
                    <img src="https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/06/440x400-woo-woo.jpg?itok=U4xGgxZE" alt="Img">
                </div>
                <div class="recipe-title">
                    <h3>Woo Woo</h3>
                </div>
                <div class="details-btn-container">
                    <router-link to="/details">Details</router-link>
                </div>
            </div>
            <div class="recipe-container">
                <div class="img-container">
                    <img src="https://www.savethestudent.org/uploads/Pina-Colada.jpg" alt="Img">
                </div>
                <div class="recipe-title">
                    <h3>Piña Colada</h3>
                </div>
                <div class="details-btn-container">
                    <router-link to="/details">Details</router-link>
                </div>
            </div>
            <div class="recipe-container">
                <div class="img-container">
                    <img src="https://www.liquor.com/thmb/VMoOrrQzOV00AY3rgSK6XxOR0EE=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__09__04153106__mojito-720x720-recipe-a55b114fc99c4a64b38c9ef6d1660e20.jpg" alt="Img">
                </div>
                <div class="recipe-title">
                    <h3>Mojito recipe</h3>
                </div>
                <div class="details-btn-container">
                    <a href="">Details</a>
                </div>
            </div>
            <div class="recipe-container">
                <div class="img-container">
                    <img src="https://www.liquor.com/thmb/VMoOrrQzOV00AY3rgSK6XxOR0EE=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__09__04153106__mojito-720x720-recipe-a55b114fc99c4a64b38c9ef6d1660e20.jpg" alt="Img">
                </div>
                <div class="recipe-title">
                    <h3>Mojito recipe</h3>
                </div>
                <div class="details-btn-container">
                    <router-link to="/details">Details</router-link>
                </div>
            </div>
        </div>
    </div>
  

</template>

<script>
export default {
name: 'List'
}
</script>

<style scoped>
h2 {
    text-align: center;
    font-size: 3em;
    margin: 50px 0;
}
.all-recipes-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 10px;
}
.recipe-container {
    background-color: rgba(192,192,192, 0.8);
    padding: 20px 20px;
    border-radius: 5px;
    text-align: center;
    box-shadow: 0 0 5px black;
    margin: 8px 0;
}
.recipe-container:hover {
    /* background-color: rgba(192,192,192, 1); */
    box-shadow: 0 0 10px black;

}
.img-container {
position: relative;
min-width: 300px;

overflow: hidden;
border-radius: 5px;
    
}

.img-container::before {
    display: block;
    content: '';
    padding-top: 80%;
   
   
}
.img-container img {
    height: 250px;
    width: auto;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* opacity: 0; */
}
.recipe-title {
    padding: 20px 0;
}

</style>>

