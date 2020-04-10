<template>
    <div class="list-vew-container">
        <h2>All Recipes</h2>
        <div class="all-recipes-container">
            <div class="recipe-container" v-for="r in recipes" :key="r._id">
                <div class="img-container">
                    <img  :src="r.imageUrl" alt="Img">
                </div>
                <div class="recipe-title">
                    <h3>{{r.name}}</h3>
                </div>
                <div class="details-btn-container">
                    <router-link :to="r | editLink">Details</router-link>
                </div>
            </div>
        
        </div>
       
    </div>
  

</template>

<script>
import requester from '../../mixins/requester2' 

export default {
name: 'List',
mixins: [requester],
props: {
    isAuth: {
        type: Boolean
        }
},
data() {
    return {
        imageUrl: '',
        name: '',
        recipes: null
    }
},
created() {
    this.getList()
},
methods: {
    getList() {
       this.get('appdata', 'recipes', 'Kinvey').then(d=>{
             this.recipes = d;

         })
    }
},
filters: {
    editLink(r) {
        return `/details/${r._id}`
    }
}

}
// console.log(this.isAuth)
</script>

<style scoped>
h2 {
    text-align: center;
    font-size: 3em;
    margin: 50px 0;
}
.all-recipes-container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0 10px;
}
.recipe-container {
    background-color: rgba(192,192,192, 0.8);
    padding: 20px 20px;
    border-radius: 5px;
    text-align: center;
    box-shadow: 0 0 5px black;
    margin: 8px 10px;
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

