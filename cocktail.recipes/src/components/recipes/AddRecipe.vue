<template>
  <div>
      <h2>Add Recipe</h2>
      <div class="add-container">
         <form @submit.prevent="submitHandler">
             <div class="form-label-input">
                 <div class="form-label">
                    <label for="name">Name:</label>
                 </div>
                 <div class="form-input">
                     <input type="text" v-model="name" id="name" placeholder="Name">
                 </div>
             </div>
             <div class="form-label-input">
                 <div class="form-label">
                    <label for="image-url">Image URL:</label>
                 </div>
                 <div class="form-input">
                     <input type="text" v-model="imageUrl" id="image-url" placeholder="https://....">
                 </div>
             </div>
            <div class="form-label-input ingredients">
                <div class="form-label">
                    <label for="add-ingredient">Ingredients and quantity:</label>
                </div>
                <div class="form-input">
                    <input type="text" v-model="ingredient" id="add-ingredient" placeholder="100ml Milk">
                     <button @click="ingredientHandler" type="button" class="addBtn">&#10010;</button>
                </div>
           
            </div>
            <div class="ingredient-list">
                <ul>
                <li v-for="(ing, i) in ingredients" :key="i">{{ing}} <button @click="deleteIngredient(i)" class="deleteBtn">&#9866;</button></li>
                </ul>
            </div>
            <div class="form-label-input">
                 <div class="form-label">
                    <label for="methods">Methods:</label>
                 </div>
                 <div class="form-textarea">
                     <textarea type="text" v-model="methods" id="methods" rows="8" cols="55"></textarea>
                 </div>
            <template v-if="$v.$error">
                <div class="error-input" v-if="!$v.name.required">the name is required</div>
                <div class="error-input" v-if="!$v.imageUrl.required">the image URL is required</div>
                <div class="error-input" v-if="!$v.methods.required">the methods are required</div>
            </template>
            <div class="error-input" :class="{hiden: noIngredients, show: !noIngredients}" >ingredients are required</div>
             </div>
            <input type="submit" value="Add Recipe" class="addRecipeBtn">
        </form>
        
      </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {required} from 'vuelidate/lib/validators';
import {post} from '../../auth/requester.js';
export default {
    mixins: [validationMixin],
    data() {
        return {
            name: '',
            ingredient: '',
            ingredients:[],
            imageUrl:'',
            methods: '',
            noIngredients: true
        }
    },
    validations: {
        name: {required},
        imageUrl: { required },
        methods: { required },
    },
    methods: {
        ingredientHandler() {
            if (this.ingredient) {
                this.ingredients.push(this.ingredient);
                this.noIngredients = true;
            }
            
            this.ingredient = '';
        },
        deleteIngredient(i) {
            this.ingredients.splice(i, 1);
        },
        submitHandler() {
            this.noIngredients = this.ingredients.length === 0 ? false : true;
            this.$v.$touch()
            if(this.$v.$invalid || this.noIngredients === false) {
                return
            }
            const data = {
                name: this.name,
                imageUrl: this.imageUrl,
                ingredients: this.ingredients,
                methods: this.methods
            }
            
            post('appdata', 'recipes', data, 'Kinvey').then(d=>{
                console.log(d)
                 this.$router.push(`details/${d._id}`);
            })

            this.name ='';
            this.imageUrl = '';
            this.ingredients = [];
            this.methods = '';

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
.add-container {
    max-width: 50%;
    margin: auto;
    background-color: rgba(255,204,153, 0.6);
    padding: 20px;
    padding-left: 50px;
    border-radius: 5px;
    box-shadow: 0 0 5px black;
}
form {
    /* text-align: right; */
}
.form-label-input {
    padding: 10px 0;
    
}
form input {
    line-height: 2em;
    min-width: 60%;
    border-radius: 3px;
}
form textarea {
    border-radius: 3px;

}
form label,
form ul li {
    font-size: 1.5em;
}
form ul li {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-style: italic;
    font-size: 1em;
    list-style-position: inside;
}
.ingredient-list {
    min-height: 100px;
}
.addBtn,
.deleteBtn {
    padding: 3px 10px;
    margin-left: 5px;
    cursor: pointer;
    border-radius: 2px;
     font-size: 1em;
}
.deleteBtn {
     font-size: 1em;
     padding: 0 10px;
     margin-bottom: 2px;
}
.addRecipeBtn {

}
.hiden {
    display: none;
}
.show {
    display: block;
}
.error-input {
    font-style: italic;
}
</style>