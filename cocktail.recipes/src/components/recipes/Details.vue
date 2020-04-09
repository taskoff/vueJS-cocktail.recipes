<template>
    <div>
        <h2>Details</h2>
        <div class="recipe-details-container">
            <div class="img-container">
                <img :src="imageUrl" :alt="name">
            </div>
            <h3 class="recipe-title">{{name}}</h3>
            <div class="recipe">
                <p>Ingredients:</p>
                <ul class="ingredients">
                <li v-for="(i, idx) in ingredients" :key="idx">{{i}}</li>
                <!-- <li>Tablespoon of sugar</li>
                <li>50ml golden rum (Captain Morgan's spiced or Havana Club should do)</li>
                <li>Soda water</li>
                <li>Handful of strawberries or raspberries (optional, but it gives an extra burst of flavour).</li> -->
                </ul>
                <p>Methods:</p>
                <p class="methods">
                {{methods}}
                </p>

            </div>


        </div>
    </div>
</template>

<script>
import requester from '../../mixins/requester2' 

export default {
    mixins: [requester],
    data() {
        return {
            imageUrl: '',
            name: '',
            ingredients: [],
            methods: ''
        }
    },
    created() {
        this.getRecipeDetails()
    },
    methods: {
        getRecipeDetails() {
            const id = this.$route.params.id;
            this.get('appdata', `recipes/${id}`, 'Kinvey').then(d=>{
               this.imageUrl = d.imageUrl;
               this.name = d.name;
               this.ingredients = d.ingredients;
               this.methods = d.methods;
            })
        }
    }
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