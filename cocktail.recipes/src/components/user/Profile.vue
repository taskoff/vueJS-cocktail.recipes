<template>
  <div class="profile-view">
      <h2>Profile</h2>

        <div class="user-info-container">
            <div class="img-container">
                <img src="https://i.ibb.co/ChgXx2p/user.png" alt="user_img">
            </div>

            <div class="user-info">
                <p class="user-name">Username:</p>
                <p class="email">Email:</p>
            </div>
            <h3>My recipes:</h3>
            <div class="recipes" >
                
                <ul>
                    <li v-for="r in recipes" :key="r._id">{{r.name}} <button @click="editRecipe(r)">Edit</button> <button>Delete</button> </li>
                </ul>
            </div>
        </div>
  </div>
</template>

<script>
import { get } from '../../auth/requester.js';
import recipeMixin from '../../mixins/currentRecipeInfo.js'

export default {
    mixins: [recipeMixin],

    data() {
        return {
            recipes: ['a', 'b']
        }
    },
    created() {
        this.getRecipes()
    },
    methods: {
        getRecipes() {
            get('appdata', `recipes?query={"_acl.creator":"${sessionStorage.getItem('userId')}"}`, 'Kinvey')
                    .then(d=>{
                    console.log(d)
                    this.recipes = d})
        },
        editRecipe(r) {
            this.currentreciepId = r._id
            // console.log(this.id)
            this.$router.push(`edit`);
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
img {
    width: 150px;
    height: auto;
}
.user-info-container {
    width: 50%;
  margin: auto;
  background-color: rgba(255,204,153, 0.6);
  padding: 40px 30px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 0 5px black;
  font-size: 1.5em;
}
.user-info {
    text-align: left;
    padding: 20px 20px;
}
.user-info p {
    padding: 10px 0;
}
</style>