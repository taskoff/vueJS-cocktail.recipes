<template>
    <div>
        <h2>Details</h2>
        <div class="recipe-details-container">
            <div class="img-container">
                <img src="https://www.liquor.com/thmb/VMoOrrQzOV00AY3rgSK6XxOR0EE=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__09__04153106__mojito-720x720-recipe-a55b114fc99c4a64b38c9ef6d1660e20.jpg" alt="">
            </div>
            <h3 class="recipe-title">MOJITO</h3>
            <div class="recipe">
                <p>Ingredients:</p>
                <ul class="ingredients">
                <li>5 fresh mint leaves</li>
                <li>Tablespoon of sugar</li>
                <li>50ml golden rum (Captain Morgan's spiced or Havana Club should do)</li>
                <li>Soda water</li>
                <li>Handful of strawberries or raspberries (optional, but it gives an extra burst of flavour).</li>
                </ul>
                <p>Methods:</p>
                <p class="methods">
                Put the lime, mint leaves and sugar (plus the berries, if you're using them) into a glass and mash them together with any utensil you can find (the handle of a plastic utensil, like a spatula, can work)Add the rum, top up with soda water and stir. Your mojito is now ready!
                </p>

            </div>


        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h2 {
    text-align: center;
    font-size: 3em;
    margin: 50px 0;
}
h3.recipe-title {
    text-align: center;
    margin: 20px 0;
}
.recipe-details-container {
    max-width: 60%;
    margin: auto;
    background-color: rgba(192,192,192, 0.8);
    /* text-align: center; */
    padding: 20px 10px;
    border-radius: 5px;
}
.img-container {
position: relative;
max-width: 60%;
margin: auto;
overflow: hidden;
border-radius: 5px;
    
}

.img-container::before {
    display: block;
    content: '';
    padding-top: 80%;
   
   
}
.img-container img {
    
    width: 100%;
    height: 450px;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* opacity: 0; */
}

ul.ingredients {
    padding: 10px;
    list-style-position: inside;
}
</style>